A vintage is the month a loan was disbursed. A roll rate is the share of balance that moved from one delinquency bucket to a worse one.

This lesson builds both from `loans` and `loan_repayments` on the **bank** schema. The schema stores installments, not a month-end snapshot, so Days Past Due is derived from `due_date` and `paid_date`.

## Days past due

An installment that was paid on or before `due_date` is current. A paid-late row uses `paid_date - due_date`. An unpaid row is measured against the as-of date `2026-03-31`.

```sql
SELECT
  repayment_status,
  CASE
    WHEN paid_date IS NOT NULL AND paid_date <= due_date THEN 0
    WHEN paid_date IS NOT NULL THEN (paid_date - due_date)
    ELSE (DATE '2026-03-31' - due_date)
  END AS dpd,
  total_due
FROM loan_repayments
WHERE due_date <= DATE '2026-03-31'
ORDER BY loan_id, installment_number
LIMIT 20;
```

Buckets used below:

- `CURRENT`: 0 days
- `DPD_1_30`
- `DPD_31_60`
- `DPD_61_89`
- `DPD_90_PLUS`

## Vintage default rate

Default here means any installment at 90 days past due or more. The denominator is the principal disbursed in that origination month, so a later month cannot shrink the cohort.

Each loan has many installments. Aggregate the loan once, then flag it. Summing `principal_amount` on the installment rows would count the same loan several times.

```sql
WITH installment_dpd AS (
  SELECT
    r.loan_id,
    CASE
      WHEN r.paid_date IS NOT NULL AND r.paid_date <= r.due_date THEN 0
      WHEN r.paid_date IS NOT NULL THEN (r.paid_date - r.due_date)
      ELSE (DATE '2026-03-31' - r.due_date)
    END AS dpd
  FROM loan_repayments r
  WHERE r.due_date <= DATE '2026-03-31'
),
loan_flag AS (
  SELECT
    l.id AS loan_id,
    DATE_TRUNC('month', l.disbursed_at)::date AS origination_cohort,
    l.principal_amount,
    COALESCE(MAX(d.dpd), 0) >= 90 AS is_90_plus
  FROM loans l
  LEFT JOIN installment_dpd d ON d.loan_id = l.id
  WHERE l.disbursed_at >= TIMESTAMP '2025-01-01'
    AND l.disbursed_at < TIMESTAMP '2026-04-01'
  GROUP BY l.id, DATE_TRUNC('month', l.disbursed_at), l.principal_amount
)
SELECT
  origination_cohort,
  COUNT(*) AS loans,
  ROUND(
    SUM(principal_amount) FILTER (WHERE is_90_plus)
      / NULLIF(SUM(principal_amount), 0),
    4
  ) AS default_rate_90_plus
FROM loan_flag
GROUP BY origination_cohort
ORDER BY origination_cohort;
```

## Roll rate from one installment to the next

`LAG` looks at the previous installment of the same loan. The rate is balance that was in `DPD_1_30` and is now in `DPD_31_60`, divided by the balance that was in `DPD_1_30`.

```sql
WITH scored AS (
  SELECT
    r.loan_id,
    r.installment_number,
    r.total_due,
    CASE
      WHEN r.paid_date IS NOT NULL AND r.paid_date <= r.due_date THEN 0
      WHEN r.paid_date IS NOT NULL THEN (r.paid_date - r.due_date)
      ELSE (DATE '2026-03-31' - r.due_date)
    END AS dpd
  FROM loan_repayments r
  WHERE r.due_date <= DATE '2026-03-31'
),
installment_dpd AS (
  SELECT
    loan_id,
    installment_number,
    total_due,
    CASE
      WHEN dpd = 0 THEN 'CURRENT'
      WHEN dpd BETWEEN 1 AND 30 THEN 'DPD_1_30'
      WHEN dpd BETWEEN 31 AND 60 THEN 'DPD_31_60'
      WHEN dpd >= 90 THEN 'DPD_90_PLUS'
      ELSE 'DPD_61_89'
    END AS dpd_bucket
  FROM scored
),
with_prev AS (
  SELECT
    loan_id,
    installment_number,
    total_due,
    dpd_bucket,
    LAG(dpd_bucket) OVER (
      PARTITION BY loan_id
      ORDER BY installment_number
    ) AS prev_bucket,
    LAG(total_due) OVER (
      PARTITION BY loan_id
      ORDER BY installment_number
    ) AS prev_due
  FROM installment_dpd
)
SELECT
  ROUND(
    SUM(total_due) FILTER (
      WHERE prev_bucket = 'DPD_1_30' AND dpd_bucket = 'DPD_31_60'
    )
    / NULLIF(SUM(prev_due) FILTER (WHERE prev_bucket = 'DPD_1_30'), 0),
    4
  ) AS roll_rate_30_to_60
FROM with_prev;
```

Months on book, when you need it, is the month difference between `due_date` and `disbursed_at`. Keep the first six months if you are comparing early performance across vintages.

## Practice

1. Rewrite the default-rate query so `is_90_plus` uses `outstanding_principal` from `loans` instead of `principal_amount`. How does the rate change?
2. Count loans in each `dpd_bucket` on the latest installment (`installment_number` = max per loan).
3. Compute the cure rate: previous bucket `DPD_1_30`, current bucket `CURRENT`.

## Summary

- Fix the cohort on disbursement month, and keep that principal as the denominator.
- Derive DPD from due date and paid date when you do not have a snapshot table.
- A roll rate is a conditional sum over `LAG`, divided by the balance that started in the source bucket.
