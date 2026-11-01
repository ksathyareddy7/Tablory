Fraud rules look at a card’s own history. `LAG` returns the previous authorization on that card. Run these on the **bank** schema, table `card_transactions`.

This table stores `merchant_country`, not latitude and longitude, so the runnable location rule is a country change. The production distance rule is described after the queries.

## Previous event on the same card

```sql
SELECT
  card_id,
  transaction_at,
  transaction_status,
  billing_amount,
  merchant_country,
  LAG(transaction_status) OVER (
    PARTITION BY card_id
    ORDER BY transaction_at, id
  ) AS prev_status,
  LAG(billing_amount) OVER (
    PARTITION BY card_id
    ORDER BY transaction_at, id
  ) AS prev_amount,
  LAG(merchant_country) OVER (
    PARTITION BY card_id
    ORDER BY transaction_at, id
  ) AS prev_country,
  LAG(transaction_at) OVER (
    PARTITION BY card_id
    ORDER BY transaction_at, id
  ) AS prev_time
FROM card_transactions
WHERE transaction_at >= TIMESTAMP '2026-01-01'
  AND transaction_at < TIMESTAMP '2026-04-01'
ORDER BY card_id, transaction_at
LIMIT 30;
```

`ORDER BY transaction_at, id` makes the previous row stable when two events share a timestamp.

## Two flags that return rows

An approval at $250 or more immediately after a decline is a card-testing shape, even before you tighten the clock. A country change inside 24 hours is the stand-in for impossible travel.

```sql
WITH ordered AS (
  SELECT
    id,
    card_id,
    transaction_at,
    transaction_status,
    billing_amount,
    merchant_country,
    LAG(transaction_status) OVER w AS prev_status,
    LAG(merchant_country) OVER w AS prev_country,
    LAG(transaction_at) OVER w AS prev_time
  FROM card_transactions
  WHERE transaction_at >= TIMESTAMP '2025-01-01'
    AND transaction_at < TIMESTAMP '2026-04-01'
  WINDOW w AS (PARTITION BY card_id ORDER BY transaction_at, id)
)
SELECT
  CASE
    WHEN transaction_status IN ('authorized', 'settled')
      AND billing_amount >= 250
      AND prev_status = 'declined'
      THEN 'APPROVAL_AFTER_DECLINE'
    WHEN prev_country IS NOT NULL
      AND merchant_country IS DISTINCT FROM prev_country
      AND EXTRACT(EPOCH FROM (transaction_at - prev_time)) / 3600.0 <= 24
      THEN 'COUNTRY_JUMP'
  END AS risk_classification,
  COUNT(*) AS events
FROM ordered
WHERE
  (
    transaction_status IN ('authorized', 'settled')
    AND billing_amount >= 250
    AND prev_status = 'declined'
  )
  OR (
    prev_country IS NOT NULL
    AND merchant_country IS DISTINCT FROM prev_country
    AND EXTRACT(EPOCH FROM (transaction_at - prev_time)) / 3600.0 <= 24
  )
GROUP BY 1
ORDER BY events DESC;
```

Cards in this dataset have few authorizations each, so a rule that demands three declines inside 10 minutes often returns no rows. The rule is still the one you want in production. Add it by taking `LAG` at offsets 1, 2, and 3, then require:

- the current row is `authorized` or `settled` and `billing_amount >= 250`
- the three previous statuses are `declined`
- the third-previous `transaction_at` is within 10 minutes of the previous one
- the approval is within 15 minutes of the last decline

## Impossible travel when you have coordinates

If the table had `latitude` and `longitude`, distance in miles between this event and `LAG` of those columns is the haversine formula. With earth radius 3959 miles:

```text
3959 * 2 * ASIN(SQRT(
  POWER(SIN(RADIANS(latitude - prev_lat) / 2), 2)
  + COS(RADIANS(prev_lat)) * COS(RADIANS(latitude))
    * POWER(SIN(RADIANS(longitude - prev_lon) / 2), 2)
))
```

Divide that distance by elapsed hours. Above 500 miles per hour, inside a one-hour gap, the card was in two places no flight can connect. This schema does not store those columns, so the country-jump query is the one to run.

`fraud_alerts` already labels some of this with `alert_type` in (`velocity`, `geo_mismatch`). Counting those alerts tells you what a detector wrote. The queries above recompute the decision from the authorizations.

## Practice

1. List `card_id`, `transaction_at`, `billing_amount`, and `merchant_country` for `APPROVAL_AFTER_DECLINE` events in 2026. Limit 25.
2. Change the country-jump window from 24 hours to 1 hour. How many events remain?
3. Count `fraud_alerts` by `alert_type` where `detected_at` is in the first quarter of 2026.

## Summary

- Partition by card and order by time before you call `LAG`.
- A decline burst is three declines, then a large approval, inside a short clock.
- Without coordinates, a country change is the location test you can actually run.
