`transactions.running_balance` is a value stored on a posting. Days with no posting have no row, so that column cannot tell you the balance on a quiet day.

A daily balance is rebuilt from the ledger:

1. Build every calendar date you care about.
2. Cross join the accounts that should appear on those dates.
3. Left join the net movement of that day.
4. Take a running sum. Quiet days add zero and carry the balance forward.

Run this on the **bank** schema. The sample is 200 accounts and March 2026, so the cross join stays small. Drop the limit when you want the full book.

Signed movement is credit minus debit, and only `posted` rows count. Pending, failed, and cancelled rows are not cash yet.

## Daily balance

```sql
WITH spine AS (
  SELECT generate_series(
    DATE '2026-03-01',
    DATE '2026-03-31',
    INTERVAL '1 day'
  )::date AS calendar_date
),
sample_accounts AS (
  SELECT id AS account_id, opened_at::date AS opened_on
  FROM accounts
  WHERE opened_at < TIMESTAMP '2026-03-01'
  ORDER BY id
  LIMIT 200
),
grid AS (
  SELECT a.account_id, s.calendar_date
  FROM sample_accounts a
  CROSS JOIN spine s
  WHERE a.opened_on <= s.calendar_date
),
daily_net AS (
  SELECT
    account_id,
    initiated_at::date AS activity_date,
    SUM(
      CASE
        WHEN transaction_type = 'credit' THEN amount
        WHEN transaction_type = 'debit' THEN -amount
        ELSE 0
      END
    ) AS net_amount,
    COUNT(*) AS txn_count
  FROM transactions
  WHERE transaction_status = 'posted'
    AND initiated_at >= TIMESTAMP '2026-03-01'
    AND initiated_at < TIMESTAMP '2026-04-01'
  GROUP BY account_id, initiated_at::date
)
SELECT
  g.account_id,
  g.calendar_date,
  COALESCE(n.net_amount, 0) AS net_amount,
  COALESCE(n.txn_count, 0) AS txn_count,
  SUM(COALESCE(n.net_amount, 0)) OVER (
    PARTITION BY g.account_id
    ORDER BY g.calendar_date
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS end_of_day_balance
FROM grid g
LEFT JOIN daily_net n
  ON n.account_id = g.account_id
 AND n.activity_date = g.calendar_date
ORDER BY g.account_id, g.calendar_date
LIMIT 40;
```

`ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` is the whole history of that account inside the spine, up to today. A day missing from `daily_net` contributes zero, which is what carries the balance.

This March window starts at zero. A production balance adds the sum of every posted amount before `2026-03-01` as the opening balance, then adds the March running sum.

## Habituation

Count posted transactions across the month and label the account. The tiers are dormant (0), transactor (1 to 9), and power user (10 or more).

```sql
WITH spine AS (
  SELECT generate_series(
    DATE '2026-03-01',
    DATE '2026-03-31',
    INTERVAL '1 day'
  )::date AS calendar_date
),
sample_accounts AS (
  SELECT id AS account_id
  FROM accounts
  WHERE opened_at < TIMESTAMP '2026-03-01'
  ORDER BY id
  LIMIT 200
),
daily_net AS (
  SELECT
    account_id,
    initiated_at::date AS activity_date,
    COUNT(*) AS txn_count
  FROM transactions
  WHERE transaction_status = 'posted'
    AND initiated_at >= TIMESTAMP '2026-03-01'
    AND initiated_at < TIMESTAMP '2026-04-01'
    AND account_id IN (SELECT account_id FROM sample_accounts)
  GROUP BY account_id, initiated_at::date
),
per_account AS (
  SELECT
    a.account_id,
    COALESCE(SUM(n.txn_count), 0) AS month_txns
  FROM sample_accounts a
  LEFT JOIN daily_net n ON n.account_id = a.account_id
  GROUP BY a.account_id
)
SELECT
  CASE
    WHEN month_txns = 0 THEN 'DORMANT'
    WHEN month_txns BETWEEN 1 AND 9 THEN 'TRANSACTOR'
    ELSE 'POWER_USER'
  END AS habituation_tier,
  COUNT(*) AS accounts
FROM per_account
GROUP BY 1
ORDER BY 1;
```

Do not fill quiet days by updating a balance column in place. The ledger is the history. The daily grid is a query.

## Practice

1. Return the March 31 balance for each sample account, one row per account.
2. Add the opening balance: posted net amount with `initiated_at < TIMESTAMP '2026-03-01'`, then add it to `end_of_day_balance`.
3. Change the power-user cutoff from 10 transactions to 5. Which tier grows?

## Summary

- A posting table has no row on a day with no activity. A date spine creates that row.
- Left join the day’s net movement, and carry the balance with a running `SUM`.
- Activity tiers are a count of posted rows on that dense month, including the zeros.
