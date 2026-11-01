A card payment is written down in more than one place: the gateway capture, and the ledger posting. Those rows are supposed to describe the same money. They often do not.

This lesson classifies the break. Run it on the **bank** schema.

Amounts in this schema are `NUMERIC`, which keeps cents exact. Avoid `FLOAT` and `DOUBLE` for money. Some ledgers go further and store integer minor units (cents). Either choice beats binary floating point, which invents penny differences.

## What you are matching

For one purchase you may have:

- a gateway row in `card_transactions` (`billing_amount`, `settlement_amount`, `transaction_status`)
- a ledger row in `transactions` (`amount`, `transaction_status`, `posted_at`)
- an application transfer in `transfers` (`amount`, `fee_amount`, `completed_at`)

A clean match has all three, and the bank credit equals gateway gross minus fee. Settlement is often T+2, so a missing bank row inside that window is still in flight.

In this dataset, `card_transactions.transaction_id` and `transfers.debit_transaction_id` are usually null. The join below is how you prove that.

## 1) Fee gap on the gateway row

`billing_amount` is what the cardholder was charged. `settlement_amount` is what the processor says it will pay. A difference is a fee, or a bad capture.

```sql
SELECT
  transaction_status,
  COUNT(*) AS captures,
  ROUND(SUM(billing_amount - settlement_amount), 2) AS fee_gap
FROM card_transactions
WHERE transaction_at >= TIMESTAMP '2026-01-01'
  AND transaction_at < TIMESTAMP '2026-04-01'
GROUP BY transaction_status
ORDER BY captures DESC;
```

## 2) Gateway versus ledger

`FULL OUTER JOIN` keeps captures with no ledger row, and ledger rows with no capture. Compare amounts only when both sides exist.

The as-of date is `2026-03-31`, the end of this dataset. Using `CURRENT_DATE` would mark every historical authorization as late.

```sql
WITH gateway AS (
  SELECT
    id AS card_txn_id,
    transaction_id,
    billing_amount,
    settlement_amount,
    transaction_status,
    transaction_at
  FROM card_transactions
  WHERE transaction_at >= TIMESTAMP '2026-03-01'
    AND transaction_at < TIMESTAMP '2026-04-01'
),
ledger AS (
  SELECT
    id AS txn_id,
    amount,
    transaction_status,
    posted_at
  FROM transactions
  WHERE channel = 'card_network'
    AND initiated_at >= TIMESTAMP '2026-03-01'
    AND initiated_at < TIMESTAMP '2026-04-01'
),
paired AS (
  SELECT
    g.card_txn_id,
    g.transaction_id,
    l.txn_id,
    g.billing_amount,
    g.settlement_amount,
    l.amount AS ledger_amount,
    g.transaction_status AS gateway_status,
    l.transaction_status AS ledger_status,
    g.transaction_at
  FROM gateway g
  FULL OUTER JOIN ledger l ON l.txn_id = g.transaction_id
)
SELECT
  CASE
    WHEN card_txn_id IS NULL AND txn_id IS NOT NULL
      THEN 'PHANTOM_LEDGER_POSTING'
    WHEN txn_id IS NOT NULL
      AND gateway_status = 'settled'
      AND ledger_status = 'posted'
      AND ledger_amount = settlement_amount
      THEN 'MATCHED'
    WHEN txn_id IS NOT NULL
      AND ledger_amount IS DISTINCT FROM settlement_amount
      THEN 'FEE_MISMATCH'
    WHEN card_txn_id IS NOT NULL
      AND txn_id IS NULL
      AND gateway_status = 'authorized'
      AND (DATE '2026-03-31' - transaction_at::date) <= 2
      THEN 'SETTLEMENT_PENDING'
    WHEN card_txn_id IS NOT NULL AND txn_id IS NULL
      THEN 'MISSING_IN_LEDGER'
    ELSE 'MANUAL_AUDIT'
  END AS reconciliation_status,
  COUNT(*) AS rows
FROM paired
GROUP BY 1
ORDER BY rows DESC;
```

`MISSING_IN_LEDGER` dominating the result means the foreign key was never written. That is the finding.

## 3) Settlement float on transfers

A completed transfer whose `completed_at` is more than two days after `created_at` is float, not a missing payment.

```sql
SELECT
  CASE
    WHEN transfer_status = 'completed'
      AND (completed_at::date - created_at::date) > 2
      THEN 'FLOAT_OVER_T2'
    WHEN transfer_status IN ('pending', 'processing')
      THEN 'STILL_IN_FLIGHT'
    WHEN fee_amount > 0
      THEN 'COMPLETED_WITH_FEE'
    ELSE 'COMPLETED_NO_FEE'
  END AS transfer_state,
  COUNT(*) AS transfers,
  ROUND(SUM(fee_amount), 2) AS fees
FROM transfers
WHERE created_at >= TIMESTAMP '2026-01-01'
  AND created_at < TIMESTAMP '2026-04-01'
GROUP BY 1
ORDER BY transfers DESC;
```

## Practice

1. Restrict the fee-gap query to `transaction_status = 'settled'` and return the 20 largest `billing_amount - settlement_amount` gaps.
2. Add `account_id` to the gateway and ledger CTEs and count `MISSING_IN_LEDGER` by account. Which accounts have the most unmatched captures?
3. For transfers created in March 2026, return `transfer_ref`, `amount`, `fee_amount`, and the number of days from `created_at` to `completed_at`.

## Summary

- Match each system on a shared key, and keep both unmatched sides with `FULL OUTER JOIN`.
- A missing bank row inside T+2 is pending. After that, it is a break.
- Compare money with `NUMERIC` equality, after the fee has been removed.
