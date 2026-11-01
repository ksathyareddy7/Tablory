# Solutions Evaluation Report (bank)

**Summary:**
- Total Approaches: 268
- Passed: 268
- Failed: 0

## Detailed Results
### ✅ PASS : BANK_001 - COUNT all
```sql
SELECT COUNT(*) AS total_users FROM users;
```

### ✅ PASS : BANK_001 - COUNT id
```sql
SELECT COUNT(id) AS total_users FROM users;
```

### ✅ PASS : BANK_002 - Filter active
```sql
SELECT COUNT(*) AS active_users FROM users WHERE is_active = true;
```

### ✅ PASS : BANK_002 - Boolean shorthand
```sql
SELECT COUNT(*) AS active_users FROM users WHERE is_active;
```

### ✅ PASS : BANK_002 - FILTER count
```sql
SELECT COUNT(*) FILTER (WHERE is_active = true) AS active_users FROM users;
```

### ✅ PASS : BANK_002 - SUM CASE
```sql
SELECT SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) AS active_users FROM users;
```

### ✅ PASS : BANK_003 - Filter verified
```sql
SELECT COUNT(*) AS verified_users FROM users WHERE is_verified = true;
```

### ✅ PASS : BANK_003 - Boolean shorthand
```sql
SELECT COUNT(*) AS verified_users FROM users WHERE is_verified;
```

### ✅ PASS : BANK_003 - FILTER count
```sql
SELECT COUNT(*) FILTER (WHERE is_verified = true) AS verified_users FROM users;
```

### ✅ PASS : BANK_003 - SUM CASE
```sql
SELECT SUM(CASE WHEN is_verified = true THEN 1 ELSE 0 END) AS verified_users FROM users;
```

### ✅ PASS : BANK_004 - Filter active
```sql
SELECT branch_code, branch_name, city, country FROM branches WHERE is_active = true;
```

### ✅ PASS : BANK_004 - Boolean shorthand
```sql
SELECT branch_code, branch_name, city, country FROM branches WHERE is_active;
```

### ✅ PASS : BANK_004 - IS TRUE
```sql
SELECT branch_code, branch_name, city, country FROM branches WHERE is_active IS TRUE;
```

### ✅ PASS : BANK_005 - Filter savings
```sql
SELECT id, product_name, currency, minimum_balance, interest_rate FROM account_products WHERE product_type = 'savings';
```

### ✅ PASS : BANK_005 - IN filter
```sql
SELECT id, product_name, currency, minimum_balance, interest_rate FROM account_products WHERE product_type IN ('savings');
```

### ✅ PASS : BANK_006 - Filter active
```sql
SELECT COUNT(*) AS active_accounts FROM accounts WHERE account_status = 'active';
```

### ✅ PASS : BANK_006 - IN filter
```sql
SELECT COUNT(*) AS active_accounts FROM accounts WHERE account_status IN ('active');
```

### ✅ PASS : BANK_006 - FILTER count
```sql
SELECT COUNT(*) FILTER (WHERE account_status = 'active') AS active_accounts FROM accounts;
```

### ✅ PASS : BANK_006 - SUM CASE
```sql
SELECT SUM(CASE WHEN account_status = 'active' THEN 1 ELSE 0 END) AS active_accounts FROM accounts;
```

### ✅ PASS : BANK_007 - Date cutoff
```sql
SELECT id, masked_card_number, card_type, network, expires_at FROM cards WHERE expires_at < DATE '2027-01-01';
```

### ✅ PASS : BANK_007 - Timestamp cutoff
```sql
SELECT id, masked_card_number, card_type, network, expires_at FROM cards WHERE expires_at < TIMESTAMP '2027-01-01 00:00:00';
```

### ✅ PASS : BANK_007 - String date
```sql
SELECT id, masked_card_number, card_type, network, expires_at FROM cards WHERE expires_at < '2027-01-01';
```

### ✅ PASS : BANK_008 - Filter pending
```sql
SELECT id, user_id, verification_level, submitted_at FROM kyc_records WHERE kyc_status = 'pending';
```

### ✅ PASS : BANK_008 - IN filter
```sql
SELECT id, user_id, verification_level, submitted_at FROM kyc_records WHERE kyc_status IN ('pending');
```

### ✅ PASS : BANK_009 - Filter failed
```sql
SELECT transaction_ref, account_id, amount, initiated_at FROM transactions WHERE transaction_status = 'failed';
```

### ✅ PASS : BANK_009 - IN filter
```sql
SELECT transaction_ref, account_id, amount, initiated_at FROM transactions WHERE transaction_status IN ('failed');
```

### ✅ PASS : BANK_010 - Filter open
```sql
SELECT alert_ref, user_id, account_id, card_id, alert_type, severity, detected_at FROM fraud_alerts WHERE alert_status = 'open';
```

### ✅ PASS : BANK_010 - IN filter
```sql
SELECT alert_ref, user_id, account_id, card_id, alert_type, severity, detected_at FROM fraud_alerts WHERE alert_status IN ('open');
```

### ✅ PASS : BANK_011 - Filter inactive
```sql
SELECT id, full_name, email, phone, country, created_at FROM users WHERE is_active = false;
```

### ✅ PASS : BANK_011 - NOT boolean
```sql
SELECT id, full_name, email, phone, country, created_at FROM users WHERE NOT is_active;
```

### ✅ PASS : BANK_011 - IS FALSE
```sql
SELECT id, full_name, email, phone, country, created_at FROM users WHERE is_active IS FALSE;
```

### ✅ PASS : BANK_012 - Filter blocked
```sql
SELECT COUNT(*) AS blocked_cards FROM cards WHERE card_status = 'blocked';
```

### ✅ PASS : BANK_012 - IN filter
```sql
SELECT COUNT(*) AS blocked_cards FROM cards WHERE card_status IN ('blocked');
```

### ✅ PASS : BANK_012 - FILTER count
```sql
SELECT COUNT(*) FILTER (WHERE card_status = 'blocked') AS blocked_cards FROM cards;
```

### ✅ PASS : BANK_012 - SUM CASE
```sql
SELECT SUM(CASE WHEN card_status = 'blocked' THEN 1 ELSE 0 END) AS blocked_cards FROM cards;
```

### ✅ PASS : BANK_013 - Filter active
```sql
SELECT atm_code, city, country, installed_at FROM atm_machines WHERE atm_status = 'active';
```

### ✅ PASS : BANK_013 - IN filter
```sql
SELECT atm_code, city, country, installed_at FROM atm_machines WHERE atm_status IN ('active');
```

### ✅ PASS : BANK_014 - Filter domestic
```sql
SELECT id, user_id, beneficiary_name, bank_name, account_number, country FROM beneficiaries WHERE beneficiary_type = 'domestic_external';
```

### ✅ PASS : BANK_014 - IN filter
```sql
SELECT id, user_id, beneficiary_name, bank_name, account_number, country FROM beneficiaries WHERE beneficiary_type IN ('domestic_external');
```

### ✅ PASS : BANK_015 - Filter rejected
```sql
SELECT application_ref, user_id, loan_product_id, requested_amount, requested_term_months, decision_at FROM loan_applications WHERE application_status = 'rejected';
```

### ✅ PASS : BANK_015 - IN filter
```sql
SELECT application_ref, user_id, loan_product_id, requested_amount, requested_term_months, decision_at FROM loan_applications WHERE application_status IN ('rejected');
```

### ✅ PASS : BANK_016 - Filter closed
```sql
SELECT COUNT(*) AS closed_loans FROM loans WHERE loan_status = 'closed';
```

### ✅ PASS : BANK_016 - IN filter
```sql
SELECT COUNT(*) AS closed_loans FROM loans WHERE loan_status IN ('closed');
```

### ✅ PASS : BANK_016 - FILTER count
```sql
SELECT COUNT(*) FILTER (WHERE loan_status = 'closed') AS closed_loans FROM loans;
```

### ✅ PASS : BANK_016 - SUM CASE
```sql
SELECT SUM(CASE WHEN loan_status = 'closed' THEN 1 ELSE 0 END) AS closed_loans FROM loans;
```

### ✅ PASS : BANK_017 - Filter active
```sql
SELECT id, biller_name, biller_category, country FROM billers WHERE is_active = true;
```

### ✅ PASS : BANK_017 - Boolean shorthand
```sql
SELECT id, biller_name, biller_category, country FROM billers WHERE is_active;
```

### ✅ PASS : BANK_017 - IS TRUE
```sql
SELECT id, biller_name, biller_category, country FROM billers WHERE is_active IS TRUE;
```

### ✅ PASS : BANK_018 - IN severities
```sql
SELECT alert_ref, user_id, account_id, alert_type, severity, alert_status, detected_at FROM fraud_alerts WHERE severity IN ('high', 'critical');
```

### ✅ PASS : BANK_018 - OR filter
```sql
SELECT alert_ref, user_id, account_id, alert_type, severity, alert_status, detected_at FROM fraud_alerts WHERE severity = 'high' OR severity = 'critical';
```

### ✅ PASS : BANK_019 - Filter India
```sql
SELECT id, full_name, email, phone, city FROM users WHERE country = 'India';
```

### ✅ PASS : BANK_019 - IN filter
```sql
SELECT id, full_name, email, phone, city FROM users WHERE country IN ('India');
```

### ✅ PASS : BANK_020 - Filter open
```sql
SELECT id, user_id, account_id, card_id, loan_id, issue_type, priority, created_at FROM support_tickets WHERE ticket_status = 'open';
```

### ✅ PASS : BANK_020 - IN filter
```sql
SELECT id, user_id, account_id, card_id, loan_id, issue_type, priority, created_at FROM support_tickets WHERE ticket_status IN ('open');
```

### ✅ PASS : BANK_021 - GROUP BY HAVING
```sql
SELECT user_id, COUNT(*) AS account_count FROM accounts GROUP BY user_id HAVING COUNT(*) > 1;
```

### ✅ PASS : BANK_021 - Subquery filter
```sql
SELECT user_id, account_count FROM (SELECT user_id, COUNT(*) AS account_count FROM accounts GROUP BY user_id) account_totals WHERE account_count > 1;
```

### ✅ PASS : BANK_021 - Window count
```sql
SELECT DISTINCT user_id, account_count FROM (SELECT user_id, COUNT(*) OVER (PARTITION BY user_id) AS account_count FROM accounts) counted_accounts WHERE account_count > 1;
```

### ✅ PASS : BANK_022 - GROUP BY SUM
```sql
SELECT user_id, SUM(current_balance) AS total_balance FROM accounts GROUP BY user_id;
```

### ✅ PASS : BANK_022 - Subquery total
```sql
SELECT user_id, total_balance FROM (SELECT user_id, SUM(current_balance) AS total_balance FROM accounts GROUP BY user_id) user_balances;
```

### ✅ PASS : BANK_022 - Window sum
```sql
SELECT DISTINCT user_id, total_balance FROM (SELECT user_id, SUM(current_balance) OVER (PARTITION BY user_id) AS total_balance FROM accounts) user_account_totals;
```

### ✅ PASS : BANK_023 - GROUP BY channel
```sql
SELECT channel, COUNT(*) AS transaction_count FROM transactions GROUP BY channel;
```

### ✅ PASS : BANK_023 - COUNT id
```sql
SELECT channel, COUNT(id) AS transaction_count FROM transactions GROUP BY channel;
```

### ✅ PASS : BANK_023 - Subquery count
```sql
SELECT channel, transaction_count FROM (SELECT channel, COUNT(*) AS transaction_count FROM transactions GROUP BY channel) channel_totals;
```

### ✅ PASS : BANK_024 - AVG active
```sql
SELECT ROUND(AVG(current_balance), 2) AS avg_balance FROM accounts WHERE account_status = 'active';
```

### ✅ PASS : BANK_024 - FILTER AVG
```sql
SELECT ROUND(AVG(current_balance) FILTER (WHERE account_status = 'active'), 2) AS avg_balance FROM accounts;
```

### ✅ PASS : BANK_024 - CASE AVG
```sql
SELECT ROUND(AVG(CASE WHEN account_status = 'active' THEN current_balance END), 2) AS avg_balance FROM accounts;
```

### ✅ PASS : BANK_024 - Subquery AVG
```sql
SELECT ROUND(AVG(current_balance), 2) AS avg_balance FROM (SELECT current_balance FROM accounts WHERE account_status = 'active') active_accounts;
```

### ✅ PASS : BANK_025 - GROUP BY network
```sql
SELECT network, COUNT(*) AS card_count FROM cards GROUP BY network;
```

### ✅ PASS : BANK_025 - COUNT id
```sql
SELECT network, COUNT(id) AS card_count FROM cards GROUP BY network;
```

### ✅ PASS : BANK_025 - Subquery count
```sql
SELECT network, card_count FROM (SELECT network, COUNT(*) AS card_count FROM cards GROUP BY network) network_counts;
```

### ✅ PASS : BANK_026 - GROUP BY city
```sql
SELECT city, COUNT(*) AS atm_count FROM atm_machines GROUP BY city;
```

### ✅ PASS : BANK_026 - COUNT code
```sql
SELECT city, COUNT(atm_code) AS atm_count FROM atm_machines GROUP BY city;
```

### ✅ PASS : BANK_026 - Subquery count
```sql
SELECT city, atm_count FROM (SELECT city, COUNT(*) AS atm_count FROM atm_machines GROUP BY city) city_atms;
```

### ✅ PASS : BANK_027 - SUM fees
```sql
SELECT SUM(fee_amount) AS total_transfer_fees FROM transfers;
```

### ✅ PASS : BANK_027 - COALESCE sum
```sql
SELECT COALESCE(SUM(fee_amount), 0) AS total_transfer_fees FROM transfers;
```

### ✅ PASS : BANK_027 - Subquery sum
```sql
SELECT SUM(fee_amount) AS total_transfer_fees FROM (SELECT fee_amount FROM transfers) transfer_fees;
```

### ✅ PASS : BANK_028 - Filter approved
```sql
SELECT COUNT(*) AS approved_applications FROM loan_applications WHERE application_status = 'approved';
```

### ✅ PASS : BANK_028 - IN filter
```sql
SELECT COUNT(*) AS approved_applications FROM loan_applications WHERE application_status IN ('approved');
```

### ✅ PASS : BANK_028 - FILTER count
```sql
SELECT COUNT(*) FILTER (WHERE application_status = 'approved') AS approved_applications FROM loan_applications;
```

### ✅ PASS : BANK_028 - SUM CASE
```sql
SELECT SUM(CASE WHEN application_status = 'approved' THEN 1 ELSE 0 END) AS approved_applications FROM loan_applications;
```

### ✅ PASS : BANK_029 - GROUP BY status
```sql
SELECT fd_status, COUNT(*) AS fd_count FROM fixed_deposits GROUP BY fd_status;
```

### ✅ PASS : BANK_029 - COUNT id
```sql
SELECT fd_status, COUNT(id) AS fd_count FROM fixed_deposits GROUP BY fd_status;
```

### ✅ PASS : BANK_029 - Subquery count
```sql
SELECT fd_status, fd_count FROM (SELECT fd_status, COUNT(*) AS fd_count FROM fixed_deposits GROUP BY fd_status) status_counts;
```

### ✅ PASS : BANK_030 - SUM cashback
```sql
SELECT SUM(cashback_amount) AS total_cashback_redeemed FROM reward_redemptions;
```

### ✅ PASS : BANK_030 - COALESCE sum
```sql
SELECT COALESCE(SUM(cashback_amount), 0) AS total_cashback_redeemed FROM reward_redemptions;
```

### ✅ PASS : BANK_030 - Subquery sum
```sql
SELECT SUM(cashback_amount) AS total_cashback_redeemed FROM (SELECT cashback_amount FROM reward_redemptions) redeemed_cashback;
```

### ✅ PASS : BANK_031 - Filter open
```sql
SELECT COUNT(*) AS open_complaints FROM complaints WHERE complaint_status = 'open';
```

### ✅ PASS : BANK_031 - FILTER count
```sql
SELECT COUNT(*) FILTER (WHERE complaint_status = 'open') AS open_complaints FROM complaints;
```

### ✅ PASS : BANK_031 - SUM CASE
```sql
SELECT SUM(CASE WHEN complaint_status = 'open' THEN 1 ELSE 0 END) AS open_complaints FROM complaints;
```

### ✅ PASS : BANK_032 - GROUP BY currency
```sql
SELECT currency, COUNT(*) AS account_count FROM accounts GROUP BY currency;
```

### ✅ PASS : BANK_032 - COUNT column
```sql
SELECT currency, COUNT(currency) AS account_count FROM accounts GROUP BY currency;
```

### ✅ PASS : BANK_033 - AVG active loans
```sql
SELECT ROUND(AVG(principal_amount), 2) AS avg_loan_amount FROM loans WHERE loan_status = 'active';
```

### ✅ PASS : BANK_033 - FILTER AVG
```sql
SELECT ROUND(AVG(principal_amount) FILTER (WHERE loan_status = 'active'), 2) AS avg_loan_amount FROM loans;
```

### ✅ PASS : BANK_033 - CASE AVG
```sql
SELECT ROUND(AVG(CASE WHEN loan_status = 'active' THEN principal_amount END), 2) AS avg_loan_amount FROM loans;
```

### ✅ PASS : BANK_034 - GROUP BY segment
```sql
SELECT customer_segment, COUNT(*) AS user_count FROM users GROUP BY customer_segment;
```

### ✅ PASS : BANK_034 - COUNT column
```sql
SELECT customer_segment, COUNT(id) AS user_count FROM users GROUP BY customer_segment;
```

### ✅ PASS : BANK_035 - GROUP BY type
```sql
SELECT card_type, COUNT(*) AS card_count FROM cards GROUP BY card_type;
```

### ✅ PASS : BANK_035 - COUNT column
```sql
SELECT card_type, COUNT(card_type) AS card_count FROM cards GROUP BY card_type;
```

### ✅ PASS : BANK_036 - JOIN filter
```sql
SELECT u.id, u.full_name, k.verification_level, k.verified_at FROM users u JOIN kyc_records k ON u.id = k.user_id WHERE k.kyc_status = 'verified';
```

### ✅ PASS : BANK_036 - JOIN + IN
```sql
SELECT u.id, u.full_name, k.verification_level, k.verified_at FROM users u JOIN kyc_records k ON u.id = k.user_id WHERE k.kyc_status IN ('verified');
```

### ✅ PASS : BANK_037 - GROUP + ORDER
```sql
SELECT u.id, u.full_name, SUM(a.current_balance) AS total_balance FROM users u JOIN accounts a ON u.id = a.user_id GROUP BY u.id, u.full_name ORDER BY total_balance DESC, u.id ASC LIMIT 10;
```

### ✅ PASS : BANK_037 - Subquery ranking
```sql
SELECT * FROM (SELECT u.id, u.full_name, SUM(a.current_balance) AS total_balance FROM users u JOIN accounts a ON u.id = a.user_id GROUP BY u.id, u.full_name) t ORDER BY total_balance DESC, id ASC LIMIT 10;
```

### ✅ PASS : BANK_038 - LEFT JOIN count
```sql
SELECT b.id, b.branch_name, COUNT(e.id) AS employee_count FROM branches b LEFT JOIN employees e ON b.id = e.branch_id GROUP BY b.id, b.branch_name;
```

### ✅ PASS : BANK_039 - JOIN distinct
```sql
SELECT DISTINCT u.id, u.full_name FROM users u JOIN fraud_alerts f ON u.id = f.user_id WHERE f.alert_status = 'open';
```

### ✅ PASS : BANK_039 - EXISTS
```sql
SELECT u.id, u.full_name FROM users u WHERE EXISTS (SELECT 1 FROM fraud_alerts f WHERE f.user_id = u.id AND f.alert_status = 'open');
```

### ✅ PASS : BANK_040 - JOIN + SUM
```sql
SELECT l.id AS loan_id, SUM(r.total_due - r.total_paid) AS pending_amount FROM loans l JOIN loan_repayments r ON l.id = r.loan_id WHERE l.loan_status = 'active' AND r.repayment_status IN ('pending','partial','late') GROUP BY l.id;
```

### ✅ PASS : BANK_040 - CASE SUM
```sql
SELECT l.id AS loan_id, SUM(CASE WHEN r.repayment_status IN ('pending','partial','late') THEN r.total_due - r.total_paid ELSE 0 END) AS pending_amount FROM loans l JOIN loan_repayments r ON l.id = r.loan_id WHERE l.loan_status = 'active' GROUP BY l.id HAVING COUNT(*) FILTER (WHERE r.repayment_status IN ('pending','partial','late')) > 0;
```

### ✅ PASS : BANK_041 - Negative filter
```sql
SELECT id, user_id, current_balance FROM accounts WHERE current_balance < 0;
```

### ✅ PASS : BANK_041 - BETWEEN-style check
```sql
SELECT id, user_id, current_balance FROM accounts WHERE current_balance <= -0.01;
```

### ✅ PASS : BANK_042 - LEFT anti join
```sql
SELECT u.id, u.full_name FROM users u LEFT JOIN accounts a ON u.id = a.user_id WHERE a.id IS NULL;
```

### ✅ PASS : BANK_042 - NOT EXISTS
```sql
SELECT u.id, u.full_name FROM users u WHERE NOT EXISTS (SELECT 1 FROM accounts a WHERE a.user_id = u.id);
```

### ✅ PASS : BANK_042 - NOT IN
```sql
SELECT id, full_name FROM users WHERE id NOT IN (SELECT user_id FROM accounts WHERE user_id IS NOT NULL);
```

### ✅ PASS : BANK_043 - ORDER LIMIT
```sql
SELECT id, user_id, current_balance FROM accounts ORDER BY current_balance DESC, id ASC LIMIT 5;
```

### ✅ PASS : BANK_043 - ROW_NUMBER
```sql
SELECT id, user_id, current_balance FROM (SELECT id, user_id, current_balance, ROW_NUMBER() OVER (ORDER BY current_balance DESC, id ASC) AS rn FROM accounts) ranked_accounts WHERE rn <= 5 ORDER BY current_balance DESC, id ASC;
```

### ✅ PASS : BANK_044 - JOIN group top
```sql
SELECT u.id, u.full_name, COUNT(t.id) AS transaction_count FROM users u JOIN accounts a ON u.id = a.user_id JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name ORDER BY transaction_count DESC, u.id ASC LIMIT 5;
```

### ✅ PASS : BANK_044 - Pre-aggregate accounts
```sql
SELECT u.id, u.full_name, tx.transaction_count FROM users u JOIN (SELECT a.user_id, COUNT(t.id) AS transaction_count FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id) tx ON tx.user_id = u.id ORDER BY tx.transaction_count DESC, u.id ASC LIMIT 5;
```

### ✅ PASS : BANK_044 - ROW_NUMBER top
```sql
SELECT id, full_name, transaction_count FROM (SELECT u.id, u.full_name, COUNT(t.id) AS transaction_count, ROW_NUMBER() OVER (ORDER BY COUNT(t.id) DESC, u.id ASC) AS rn FROM users u JOIN accounts a ON u.id = a.user_id JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name) ranked_users WHERE rn <= 5 ORDER BY transaction_count DESC, id ASC;
```

### ✅ PASS : BANK_045 - LEFT anti join
```sql
SELECT u.id, u.full_name FROM users u JOIN accounts a ON u.id = a.user_id LEFT JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name HAVING COUNT(t.id) = 0;
```

### ✅ PASS : BANK_045 - EXISTS + NOT EXISTS
```sql
SELECT u.id, u.full_name FROM users u WHERE EXISTS (SELECT 1 FROM accounts a WHERE a.user_id = u.id) AND NOT EXISTS (SELECT 1 FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE a.user_id = u.id);
```

### ✅ PASS : BANK_045 - Grouped HAVING
```sql
SELECT u.id, u.full_name FROM users u JOIN accounts a ON u.id = a.user_id LEFT JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name HAVING COUNT(t.id) = 0;
```

### ✅ PASS : BANK_046 - AVG success
```sql
SELECT ROUND(AVG(amount), 2) AS avg_transaction_amount FROM transactions WHERE transaction_status = 'success';
```

### ✅ PASS : BANK_046 - FILTER AVG
```sql
SELECT ROUND(AVG(amount) FILTER (WHERE transaction_status = 'success'), 2) AS avg_transaction_amount FROM transactions;
```

### ✅ PASS : BANK_046 - CASE AVG
```sql
SELECT ROUND(AVG(CASE WHEN transaction_status = 'success' THEN amount END), 2) AS avg_transaction_amount FROM transactions;
```

### ✅ PASS : BANK_047 - GROUP HAVING
```sql
SELECT a.user_id, COUNT(*) AS card_count FROM cards c JOIN accounts a ON a.id = c.account_id GROUP BY a.user_id HAVING COUNT(*) > 1;
```

### ✅ PASS : BANK_047 - Subquery filter
```sql
SELECT user_id, card_count FROM (SELECT a.user_id, COUNT(*) AS card_count FROM cards c JOIN accounts a ON a.id = c.account_id GROUP BY a.user_id) card_totals WHERE card_count > 1;
```

### ✅ PASS : BANK_047 - Window count
```sql
SELECT DISTINCT user_id, card_count FROM (SELECT a.user_id, COUNT(*) OVER (PARTITION BY a.user_id) AS card_count FROM cards c JOIN accounts a ON a.id = c.account_id) counted_cards WHERE card_count > 1;
```

### ✅ PASS : BANK_048 - Date filter
```sql
SELECT id, user_id, maturity_date FROM fixed_deposits WHERE maturity_date < CURRENT_DATE;
```

### ✅ PASS : BANK_048 - NOW cast
```sql
SELECT id, user_id, maturity_date FROM fixed_deposits WHERE maturity_date < NOW()::date;
```

### ✅ PASS : BANK_049 - JOIN distinct
```sql
SELECT DISTINCT u.id, u.full_name FROM users u JOIN loans l ON u.id = l.borrower_user_id WHERE l.loan_status = 'active';
```

### ✅ PASS : BANK_049 - EXISTS
```sql
SELECT u.id, u.full_name FROM users u WHERE EXISTS (SELECT 1 FROM loans l WHERE l.borrower_user_id = u.id AND l.loan_status = 'active');
```

### ✅ PASS : BANK_049 - IN subquery
```sql
SELECT id, full_name FROM users WHERE id IN (SELECT borrower_user_id FROM loans WHERE loan_status = 'active');
```

### ✅ PASS : BANK_050 - ORDER LIMIT
```sql
SELECT id, borrower_user_id, principal_amount FROM loans ORDER BY principal_amount DESC, id ASC LIMIT 5;
```

### ✅ PASS : BANK_050 - ROW_NUMBER
```sql
SELECT id, borrower_user_id, principal_amount FROM (SELECT id, borrower_user_id, principal_amount, ROW_NUMBER() OVER (ORDER BY principal_amount DESC, id ASC) AS rn FROM loans) ranked_loans WHERE rn <= 5 ORDER BY principal_amount DESC, id ASC;
```

### ✅ PASS : BANK_051 - Window SUM
```sql
SELECT account_id, id, SUM(amount) OVER (PARTITION BY account_id ORDER BY initiated_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_balance FROM transactions;
```

### ✅ PASS : BANK_051 - Default running frame
```sql
SELECT account_id, id, SUM(amount) OVER (PARTITION BY account_id ORDER BY initiated_at, id) AS running_balance FROM transactions;
```

### ✅ PASS : BANK_051 - Correlated SUM
```sql
SELECT t.account_id, t.id, (SELECT SUM(t2.amount) FROM transactions t2 WHERE t2.account_id = t.account_id AND (t2.initiated_at < t.initiated_at OR (t2.initiated_at = t.initiated_at AND t2.id <= t.id))) AS running_balance FROM transactions t;
```

### ✅ PASS : BANK_052 - LAG balance
```sql
SELECT user_id FROM (SELECT user_id, current_balance, LAG(current_balance) OVER (PARTITION BY user_id ORDER BY id) AS prev_balance FROM accounts) x WHERE prev_balance IS NOT NULL AND current_balance > prev_balance;
```

### ✅ PASS : BANK_052 - Self join previous
```sql
SELECT a.user_id FROM accounts a JOIN accounts prev ON prev.user_id = a.user_id AND prev.id = (SELECT MAX(p.id) FROM accounts p WHERE p.user_id = a.user_id AND p.id < a.id) WHERE a.current_balance > prev.current_balance;
```

### ✅ PASS : BANK_053 - DENSE_RANK
```sql
SELECT id, current_balance FROM (SELECT id, current_balance, DENSE_RANK() OVER (ORDER BY current_balance DESC) AS rnk FROM accounts) x WHERE rnk = 2;
```

### ✅ PASS : BANK_053 - MAX below MAX
```sql
SELECT id, current_balance FROM accounts WHERE current_balance = (SELECT MAX(current_balance) FROM accounts WHERE current_balance < (SELECT MAX(current_balance) FROM accounts));
```

### ✅ PASS : BANK_053 - Distinct balance offset
```sql
SELECT id, current_balance FROM accounts WHERE current_balance = (SELECT current_balance FROM (SELECT DISTINCT current_balance FROM accounts ORDER BY current_balance DESC OFFSET 1 LIMIT 1) second_balance);
```

### ✅ PASS : BANK_054 - ROW_NUMBER top 3
```sql
SELECT user_id, id, current_balance FROM (SELECT user_id, id, current_balance, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY current_balance DESC, id ASC) AS rn FROM accounts) ranked WHERE rn <= 3;
```

### ✅ PASS : BANK_054 - DENSE_RANK top balances
```sql
SELECT user_id, id, current_balance FROM (SELECT user_id, id, current_balance, DENSE_RANK() OVER (PARTITION BY user_id ORDER BY current_balance DESC) AS rnk FROM accounts) ranked WHERE rnk <= 3;
```

### ✅ PASS : BANK_055 - FILTER HAVING
```sql
SELECT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING COUNT(*) = COUNT(*) FILTER (WHERE t.transaction_status = 'success');
```

### ✅ PASS : BANK_055 - BOOL_AND
```sql
SELECT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING BOOL_AND(t.transaction_status = 'success');
```

### ✅ PASS : BANK_055 - No non-success
```sql
SELECT DISTINCT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE NOT EXISTS (SELECT 1 FROM accounts a2 JOIN transactions t2 ON a2.id = t2.account_id WHERE a2.user_id = a.user_id AND t2.transaction_status <> 'success');
```

### ✅ PASS : BANK_056 - Scalar AVG
```sql
SELECT id, user_id, current_balance FROM accounts WHERE current_balance > (SELECT AVG(current_balance) FROM accounts);
```

### ✅ PASS : BANK_056 - Window AVG
```sql
SELECT id, user_id, current_balance FROM (SELECT id, user_id, current_balance, AVG(current_balance) OVER () AS avg_balance FROM accounts) x WHERE current_balance > avg_balance;
```

### ✅ PASS : BANK_056 - CROSS JOIN AVG
```sql
SELECT a.id, a.user_id, a.current_balance FROM accounts a CROSS JOIN (SELECT AVG(current_balance) AS avg_balance FROM accounts) avg_accounts WHERE a.current_balance > avg_accounts.avg_balance;
```

### ✅ PASS : BANK_057 - FILTER counts
```sql
SELECT a.user_id, COUNT(*) FILTER (WHERE t.transaction_type = 'debit') AS debit_count, COUNT(*) FILTER (WHERE t.transaction_type = 'credit') AS credit_count FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING COUNT(*) FILTER (WHERE t.transaction_type = 'debit') > COUNT(*) FILTER (WHERE t.transaction_type = 'credit');
```

### ✅ PASS : BANK_057 - SUM CASE counts
```sql
SELECT a.user_id, SUM(CASE WHEN t.transaction_type = 'debit' THEN 1 ELSE 0 END) AS debit_count, SUM(CASE WHEN t.transaction_type = 'credit' THEN 1 ELSE 0 END) AS credit_count FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING SUM(CASE WHEN t.transaction_type = 'debit' THEN 1 ELSE 0 END) > SUM(CASE WHEN t.transaction_type = 'credit' THEN 1 ELSE 0 END);
```

### ✅ PASS : BANK_057 - Pre-aggregate
```sql
SELECT user_id, debit_count, credit_count FROM (SELECT a.user_id, COUNT(*) FILTER (WHERE t.transaction_type = 'debit') AS debit_count, COUNT(*) FILTER (WHERE t.transaction_type = 'credit') AS credit_count FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id) counts WHERE debit_count > credit_count;
```

### ✅ PASS : BANK_058 - GROUP MAX
```sql
SELECT account_id, MAX(amount) AS max_transaction FROM transactions GROUP BY account_id;
```

### ✅ PASS : BANK_058 - Window MAX
```sql
SELECT DISTINCT account_id, max_transaction FROM (SELECT account_id, MAX(amount) OVER (PARTITION BY account_id) AS max_transaction FROM transactions) x;
```

### ✅ PASS : BANK_058 - Correlated MAX
```sql
SELECT DISTINCT t.account_id, (SELECT MAX(t2.amount) FROM transactions t2 WHERE t2.account_id = t.account_id) AS max_transaction FROM transactions t;
```

### ✅ PASS : BANK_059 - ORDER LIMIT
```sql
SELECT id, account_id, amount FROM transactions ORDER BY amount DESC, id ASC LIMIT 10;
```

### ✅ PASS : BANK_059 - ROW_NUMBER top 10
```sql
SELECT id, account_id, amount FROM (SELECT id, account_id, amount, ROW_NUMBER() OVER (ORDER BY amount DESC, id ASC) AS rn FROM transactions) ranked WHERE rn <= 10 ORDER BY amount DESC, id ASC;
```

### ✅ PASS : BANK_060 - GROUP top 5
```sql
SELECT from_account_id, COUNT(*) AS transfer_count FROM transfers GROUP BY from_account_id ORDER BY transfer_count DESC, from_account_id ASC LIMIT 5;
```

### ✅ PASS : BANK_060 - Subquery rank
```sql
SELECT from_account_id, transfer_count FROM (SELECT from_account_id, COUNT(*) AS transfer_count FROM transfers GROUP BY from_account_id) transfer_totals ORDER BY transfer_count DESC, from_account_id ASC LIMIT 5;
```

### ✅ PASS : BANK_060 - ROW_NUMBER top
```sql
SELECT from_account_id, transfer_count FROM (SELECT from_account_id, transfer_count, ROW_NUMBER() OVER (ORDER BY transfer_count DESC, from_account_id ASC) AS rn FROM (SELECT from_account_id, COUNT(*) AS transfer_count FROM transfers GROUP BY from_account_id) grouped_transfers) ranked WHERE rn <= 5 ORDER BY transfer_count DESC, from_account_id ASC;
```

### ✅ PASS : BANK_061 - ROW_NUMBER top 3
```sql
SELECT user_id, id, current_balance FROM (SELECT user_id, id, current_balance, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY current_balance DESC, id ASC) AS rn FROM accounts) ranked WHERE rn <= 3;
```

### ✅ PASS : BANK_061 - DENSE_RANK balances
```sql
SELECT user_id, id, current_balance FROM (SELECT user_id, id, current_balance, DENSE_RANK() OVER (PARTITION BY user_id ORDER BY current_balance DESC) AS rnk FROM accounts) ranked WHERE rnk <= 3;
```

### ✅ PASS : BANK_061 - LATERAL limit
```sql
SELECT u.user_id, a.id, a.current_balance FROM (SELECT DISTINCT user_id FROM accounts) u CROSS JOIN LATERAL (SELECT id, current_balance FROM accounts a WHERE a.user_id = u.user_id ORDER BY current_balance DESC, id ASC LIMIT 3) a;
```

### ✅ PASS : BANK_062 - LAG amount
```sql
SELECT account_id FROM (SELECT account_id, amount, LAG(amount) OVER (PARTITION BY account_id ORDER BY initiated_at, id) AS prev_amount FROM transactions) x WHERE prev_amount IS NOT NULL AND amount > prev_amount;
```

### ✅ PASS : BANK_062 - Self previous join
```sql
SELECT t.account_id FROM transactions t JOIN transactions prev ON prev.id = (SELECT p.id FROM transactions p WHERE p.account_id = t.account_id AND (p.initiated_at < t.initiated_at OR (p.initiated_at = t.initiated_at AND p.id < t.id)) ORDER BY p.initiated_at DESC, p.id DESC LIMIT 1) WHERE t.amount > prev.amount;
```

### ✅ PASS : BANK_063 - LAG + BOOL_AND
```sql
WITH ranked AS (SELECT account_id, amount, LAG(amount) OVER (PARTITION BY account_id ORDER BY initiated_at, id) AS prev_amount FROM transactions) SELECT account_id FROM ranked GROUP BY account_id HAVING BOOL_AND(prev_amount IS NULL OR amount > prev_amount);
```

### ✅ PASS : BANK_063 - No bad transition
```sql
SELECT DISTINCT t.account_id FROM transactions t WHERE NOT EXISTS (SELECT 1 FROM (SELECT account_id, amount, LAG(amount) OVER (PARTITION BY account_id ORDER BY initiated_at, id) AS prev_amount FROM transactions) x WHERE x.account_id = t.account_id AND x.prev_amount IS NOT NULL AND x.amount <= x.prev_amount);
```

### ✅ PASS : BANK_064 - JOIN expired
```sql
SELECT u.id, u.full_name, k.expires_at FROM users u JOIN kyc_records k ON u.id = k.user_id WHERE k.kyc_status = 'expired';
```

### ✅ PASS : BANK_064 - JOIN + IN
```sql
SELECT u.id, u.full_name, k.expires_at FROM users u JOIN kyc_records k ON u.id = k.user_id WHERE k.kyc_status IN ('expired');
```

### ✅ PASS : BANK_064 - EXISTS filter
```sql
SELECT u.id, u.full_name, k.expires_at FROM users u JOIN kyc_records k ON u.id = k.user_id WHERE EXISTS (SELECT 1 FROM kyc_records k2 WHERE k2.user_id = u.id AND k2.id = k.id AND k2.kyc_status = 'expired');
```

### ✅ PASS : BANK_065 - Filter GROUP HAVING
```sql
SELECT a.user_id, COUNT(*) AS failed_count FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_status = 'failed' GROUP BY a.user_id HAVING COUNT(*) > 1;
```

### ✅ PASS : BANK_065 - FILTER count
```sql
SELECT a.user_id, COUNT(*) FILTER (WHERE t.transaction_status = 'failed') AS failed_count FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING COUNT(*) FILTER (WHERE t.transaction_status = 'failed') > 1;
```

### ✅ PASS : BANK_065 - SUM CASE
```sql
SELECT a.user_id, SUM(CASE WHEN t.transaction_status = 'failed' THEN 1 ELSE 0 END) AS failed_count FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING SUM(CASE WHEN t.transaction_status = 'failed' THEN 1 ELSE 0 END) > 1;
```

### ✅ PASS : BANK_066 - FILTER zero
```sql
SELECT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING COUNT(*) FILTER (WHERE t.transaction_status = 'failed') = 0;
```

### ✅ PASS : BANK_066 - BOOL_AND not failed
```sql
SELECT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING BOOL_AND(t.transaction_status <> 'failed');
```

### ✅ PASS : BANK_066 - NOT EXISTS failed
```sql
SELECT DISTINCT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE NOT EXISTS (SELECT 1 FROM accounts a2 JOIN transactions t2 ON a2.id = t2.account_id WHERE a2.user_id = a.user_id AND t2.transaction_status = 'failed');
```

### ✅ PASS : BANK_067 - GROUP HAVING AVG
```sql
SELECT account_id, AVG(amount) AS avg_amount FROM transactions GROUP BY account_id HAVING AVG(amount) > (SELECT AVG(amount) FROM transactions);
```

### ✅ PASS : BANK_067 - Precompute overall AVG
```sql
SELECT t.account_id, AVG(t.amount) AS avg_amount FROM transactions t CROSS JOIN (SELECT AVG(amount) AS overall_avg FROM transactions) overall GROUP BY t.account_id, overall.overall_avg HAVING AVG(t.amount) > overall.overall_avg;
```

### ✅ PASS : BANK_067 - Subquery filter
```sql
SELECT account_id, avg_amount FROM (SELECT account_id, AVG(amount) AS avg_amount FROM transactions GROUP BY account_id) account_avgs WHERE avg_amount > (SELECT AVG(amount) FROM transactions);
```

### ✅ PASS : BANK_068 - GROUP ORDER LIMIT
```sql
SELECT account_id, AVG(amount) AS avg_amount FROM transactions GROUP BY account_id ORDER BY avg_amount DESC, account_id ASC LIMIT 5;
```

### ✅ PASS : BANK_068 - Subquery rank
```sql
SELECT account_id, avg_amount FROM (SELECT account_id, AVG(amount) AS avg_amount FROM transactions GROUP BY account_id) account_avgs ORDER BY avg_amount DESC, account_id ASC LIMIT 5;
```

### ✅ PASS : BANK_068 - ROW_NUMBER top
```sql
SELECT account_id, avg_amount FROM (SELECT account_id, avg_amount, ROW_NUMBER() OVER (ORDER BY avg_amount DESC, account_id ASC) AS rn FROM (SELECT account_id, AVG(amount) AS avg_amount FROM transactions GROUP BY account_id) account_avgs) ranked WHERE rn <= 5 ORDER BY avg_amount DESC, account_id ASC;
```

### ✅ PASS : BANK_069 - Debit SUM top
```sql
SELECT a.user_id, SUM(t.amount) AS total_spent FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_type = 'debit' GROUP BY a.user_id ORDER BY total_spent DESC, a.user_id ASC LIMIT 5;
```

### ✅ PASS : BANK_069 - FILTER SUM
```sql
SELECT a.user_id, SUM(t.amount) FILTER (WHERE t.transaction_type = 'debit') AS total_spent FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING SUM(t.amount) FILTER (WHERE t.transaction_type = 'debit') IS NOT NULL ORDER BY total_spent DESC, a.user_id ASC LIMIT 5;
```

### ✅ PASS : BANK_069 - Subquery top
```sql
SELECT user_id, total_spent FROM (SELECT a.user_id, SUM(t.amount) AS total_spent FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_type = 'debit' GROUP BY a.user_id) spending ORDER BY total_spent DESC, user_id ASC LIMIT 5;
```

### ✅ PASS : BANK_070 - Credit SUM top
```sql
SELECT a.user_id, SUM(t.amount) AS total_income FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_type = 'credit' GROUP BY a.user_id ORDER BY total_income DESC, a.user_id ASC LIMIT 5;
```

### ✅ PASS : BANK_070 - FILTER SUM
```sql
SELECT a.user_id, SUM(t.amount) FILTER (WHERE t.transaction_type = 'credit') AS total_income FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING SUM(t.amount) FILTER (WHERE t.transaction_type = 'credit') IS NOT NULL ORDER BY total_income DESC, a.user_id ASC LIMIT 5;
```

### ✅ PASS : BANK_070 - Subquery top
```sql
SELECT user_id, total_income FROM (SELECT a.user_id, SUM(t.amount) AS total_income FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_type = 'credit' GROUP BY a.user_id) income ORDER BY total_income DESC, user_id ASC LIMIT 5;
```

### ✅ PASS : BANK_071 - FILTER equality
```sql
SELECT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING COUNT(*) FILTER (WHERE t.transaction_type = 'debit') = COUNT(*) FILTER (WHERE t.transaction_type = 'credit');
```

### ✅ PASS : BANK_071 - SUM CASE equality
```sql
SELECT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING SUM(CASE WHEN t.transaction_type = 'debit' THEN 1 ELSE 0 END) = SUM(CASE WHEN t.transaction_type = 'credit' THEN 1 ELSE 0 END);
```

### ✅ PASS : BANK_071 - Pre-aggregate counts
```sql
SELECT user_id FROM (SELECT a.user_id, COUNT(*) FILTER (WHERE t.transaction_type = 'debit') AS debit_count, COUNT(*) FILTER (WHERE t.transaction_type = 'credit') AS credit_count FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id) counts WHERE debit_count = credit_count;
```

### ✅ PASS : BANK_072 - GROUP MAX
```sql
SELECT account_id, MAX(amount) AS max_transaction FROM transactions GROUP BY account_id;
```

### ✅ PASS : BANK_072 - Window MAX
```sql
SELECT DISTINCT account_id, max_transaction FROM (SELECT account_id, MAX(amount) OVER (PARTITION BY account_id) AS max_transaction FROM transactions) x;
```

### ✅ PASS : BANK_072 - Correlated MAX
```sql
SELECT DISTINCT t.account_id, (SELECT MAX(t2.amount) FROM transactions t2 WHERE t2.account_id = t.account_id) AS max_transaction FROM transactions t;
```

### ✅ PASS : BANK_073 - LAG status
```sql
SELECT DISTINCT account_id FROM (SELECT account_id, transaction_status, LAG(transaction_status) OVER (PARTITION BY account_id ORDER BY initiated_at, id) AS prev_status FROM transactions) ranked WHERE transaction_status = 'failed' AND prev_status = 'failed';
```

### ✅ PASS : BANK_073 - Self previous join
```sql
SELECT DISTINCT t.account_id FROM transactions t JOIN transactions prev ON prev.id = (SELECT p.id FROM transactions p WHERE p.account_id = t.account_id AND (p.initiated_at < t.initiated_at OR (p.initiated_at = t.initiated_at AND p.id < t.id)) ORDER BY p.initiated_at DESC, p.id DESC LIMIT 1) WHERE t.transaction_status = 'failed' AND prev.transaction_status = 'failed';
```

### ✅ PASS : BANK_074 - GROUP HAVING
```sql
SELECT user_id, COUNT(*) AS fraud_count FROM fraud_alerts GROUP BY user_id HAVING COUNT(*) > 3;
```

### ✅ PASS : BANK_074 - Subquery filter
```sql
SELECT user_id, fraud_count FROM (SELECT user_id, COUNT(*) AS fraud_count FROM fraud_alerts GROUP BY user_id) counts WHERE fraud_count > 3;
```

### ✅ PASS : BANK_074 - Window count
```sql
SELECT DISTINCT user_id, fraud_count FROM (SELECT user_id, COUNT(*) OVER (PARTITION BY user_id) AS fraud_count FROM fraud_alerts) x WHERE fraud_count > 3;
```

### ✅ PASS : BANK_075 - GROUP top 5
```sql
SELECT primary_branch_id, COUNT(*) AS account_count FROM accounts GROUP BY primary_branch_id ORDER BY account_count DESC, primary_branch_id ASC LIMIT 5;
```

### ✅ PASS : BANK_075 - Subquery top
```sql
SELECT primary_branch_id, account_count FROM (SELECT primary_branch_id, COUNT(*) AS account_count FROM accounts GROUP BY primary_branch_id) branch_counts ORDER BY account_count DESC, primary_branch_id ASC LIMIT 5;
```

### ✅ PASS : BANK_075 - ROW_NUMBER top
```sql
SELECT primary_branch_id, account_count FROM (SELECT primary_branch_id, account_count, ROW_NUMBER() OVER (ORDER BY account_count DESC, primary_branch_id ASC) AS rn FROM (SELECT primary_branch_id, COUNT(*) AS account_count FROM accounts GROUP BY primary_branch_id) branch_counts) ranked WHERE rn <= 5 ORDER BY account_count DESC, primary_branch_id ASC;
```

### ✅ PASS : BANK_076 - BETWEEN date range
```sql
SELECT DISTINCT a.user_id FROM cards c JOIN accounts a ON a.id = c.account_id WHERE c.expires_at BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '30 days';
```

### ✅ PASS : BANK_076 - Range comparison
```sql
SELECT DISTINCT a.user_id FROM cards c JOIN accounts a ON a.id = c.account_id WHERE c.expires_at >= CURRENT_DATE AND c.expires_at <= CURRENT_DATE + INTERVAL '30 days';
```

### ✅ PASS : BANK_076 - EXISTS by user
```sql
SELECT DISTINCT a.user_id FROM cards c JOIN accounts a ON a.id = c.account_id WHERE EXISTS (SELECT 1 FROM cards c2 JOIN accounts a2 ON a2.id = c2.account_id WHERE a2.user_id = a.user_id AND c2.expires_at BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '30 days');
```

### ✅ PASS : BANK_077 - CTE max count
```sql
WITH card_counts AS (SELECT a.user_id, COUNT(*) AS card_count FROM cards c JOIN accounts a ON a.id = c.account_id GROUP BY a.user_id) SELECT user_id, card_count FROM card_counts WHERE card_count = (SELECT MAX(card_count) FROM card_counts);
```

### ✅ PASS : BANK_077 - DENSE_RANK max
```sql
SELECT user_id, card_count FROM (SELECT a.user_id, COUNT(*) AS card_count, DENSE_RANK() OVER (ORDER BY COUNT(*) DESC) AS rnk FROM cards c JOIN accounts a ON a.id = c.account_id GROUP BY a.user_id) ranked WHERE rnk = 1;
```

### ✅ PASS : BANK_077 - ALL comparison
```sql
SELECT a.user_id, COUNT(*) AS card_count FROM cards c JOIN accounts a ON a.id = c.account_id GROUP BY a.user_id HAVING COUNT(*) >= ALL (SELECT COUNT(*) FROM cards c2 JOIN accounts a2 ON a2.id = c2.account_id GROUP BY a2.user_id);
```

### ✅ PASS : BANK_078 - LEFT anti join
```sql
SELECT a.id FROM accounts a LEFT JOIN transfers t ON a.id = t.from_account_id OR a.id = t.to_account_id WHERE t.id IS NULL;
```

### ✅ PASS : BANK_078 - NOT EXISTS
```sql
SELECT a.id FROM accounts a WHERE NOT EXISTS (SELECT 1 FROM transfers t WHERE t.from_account_id = a.id OR t.to_account_id = a.id);
```

### ✅ PASS : BANK_078 - NOT IN union
```sql
SELECT id FROM accounts WHERE id NOT IN (SELECT from_account_id FROM transfers WHERE from_account_id IS NOT NULL UNION SELECT to_account_id FROM transfers WHERE to_account_id IS NOT NULL);
```

### ✅ PASS : BANK_079 - SUM top 5
```sql
SELECT from_account_id, SUM(amount) AS total_transferred FROM transfers GROUP BY from_account_id ORDER BY total_transferred DESC, from_account_id ASC LIMIT 5;
```

### ✅ PASS : BANK_079 - Subquery top
```sql
SELECT from_account_id, total_transferred FROM (SELECT from_account_id, SUM(amount) AS total_transferred FROM transfers GROUP BY from_account_id) transfer_totals ORDER BY total_transferred DESC, from_account_id ASC LIMIT 5;
```

### ✅ PASS : BANK_079 - ROW_NUMBER top
```sql
SELECT from_account_id, total_transferred FROM (SELECT from_account_id, total_transferred, ROW_NUMBER() OVER (ORDER BY total_transferred DESC, from_account_id ASC) AS rn FROM (SELECT from_account_id, SUM(amount) AS total_transferred FROM transfers GROUP BY from_account_id) grouped_transfers) ranked WHERE rn <= 5 ORDER BY total_transferred DESC, from_account_id ASC;
```

### ✅ PASS : BANK_080 - Active loan SUM
```sql
SELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_loan FROM loans WHERE loan_status = 'active' GROUP BY borrower_user_id ORDER BY total_loan DESC, user_id ASC LIMIT 5;
```

### ✅ PASS : BANK_080 - FILTER SUM
```sql
SELECT borrower_user_id AS user_id, SUM(outstanding_principal) FILTER (WHERE loan_status = 'active') AS total_loan FROM loans GROUP BY borrower_user_id HAVING SUM(outstanding_principal) FILTER (WHERE loan_status = 'active') IS NOT NULL ORDER BY total_loan DESC, user_id ASC LIMIT 5;
```

### ✅ PASS : BANK_080 - Subquery top
```sql
SELECT user_id, total_loan FROM (SELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_loan FROM loans WHERE loan_status = 'active' GROUP BY borrower_user_id) loan_totals ORDER BY total_loan DESC, user_id ASC LIMIT 5;
```

### ✅ PASS : BANK_080 - ROW_NUMBER top
```sql
SELECT user_id, total_loan FROM (SELECT user_id, total_loan, ROW_NUMBER() OVER (ORDER BY total_loan DESC, user_id ASC) AS rn FROM (SELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_loan FROM loans WHERE loan_status = 'active' GROUP BY borrower_user_id) loan_totals) ranked WHERE rn <= 5 ORDER BY total_loan DESC, user_id ASC;
```

### ✅ PASS : BANK_081 - Branch AVG top
```sql
SELECT b.id, b.branch_name, ROUND(AVG(a.current_balance), 2) AS avg_account_balance FROM branches b JOIN accounts a ON b.id = a.primary_branch_id GROUP BY b.id, b.branch_name ORDER BY avg_account_balance DESC, b.id ASC LIMIT 5;
```

### ✅ PASS : BANK_081 - Subquery top
```sql
SELECT id, branch_name, avg_account_balance FROM (SELECT b.id, b.branch_name, ROUND(AVG(a.current_balance), 2) AS avg_account_balance FROM branches b JOIN accounts a ON b.id = a.primary_branch_id GROUP BY b.id, b.branch_name) branch_avgs ORDER BY avg_account_balance DESC, id ASC LIMIT 5;
```

### ✅ PASS : BANK_081 - ROW_NUMBER top
```sql
SELECT id, branch_name, avg_account_balance FROM (SELECT id, branch_name, avg_account_balance, ROW_NUMBER() OVER (ORDER BY avg_account_balance DESC, id ASC) AS rn FROM (SELECT b.id, b.branch_name, ROUND(AVG(a.current_balance), 2) AS avg_account_balance FROM branches b JOIN accounts a ON b.id = a.primary_branch_id GROUP BY b.id, b.branch_name) branch_avgs) ranked WHERE rn <= 5 ORDER BY avg_account_balance DESC, id ASC;
```

### ✅ PASS : BANK_082 - SUM CASE counts
```sql
SELECT u.id, u.full_name, SUM(CASE WHEN t.transaction_status = 'failed' THEN 1 ELSE 0 END) AS failed_txn_count, SUM(CASE WHEN t.transaction_status = 'posted' THEN 1 ELSE 0 END) AS posted_txn_count FROM users u JOIN accounts a ON u.id = a.user_id JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name HAVING SUM(CASE WHEN t.transaction_status = 'failed' THEN 1 ELSE 0 END) > SUM(CASE WHEN t.transaction_status = 'posted' THEN 1 ELSE 0 END);
```

### ✅ PASS : BANK_082 - FILTER counts
```sql
SELECT u.id, u.full_name, COUNT(*) FILTER (WHERE t.transaction_status = 'failed') AS failed_txn_count, COUNT(*) FILTER (WHERE t.transaction_status = 'posted') AS posted_txn_count FROM users u JOIN accounts a ON u.id = a.user_id JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name HAVING COUNT(*) FILTER (WHERE t.transaction_status = 'failed') > COUNT(*) FILTER (WHERE t.transaction_status = 'posted');
```

### ✅ PASS : BANK_082 - Pre-aggregate
```sql
SELECT id, full_name, failed_txn_count, posted_txn_count FROM (SELECT u.id, u.full_name, COUNT(*) FILTER (WHERE t.transaction_status = 'failed') AS failed_txn_count, COUNT(*) FILTER (WHERE t.transaction_status = 'posted') AS posted_txn_count FROM users u JOIN accounts a ON u.id = a.user_id JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name) counts WHERE failed_txn_count > posted_txn_count;
```

### ✅ PASS : BANK_083 - CTE approval rate
```sql
WITH product_approval_rates AS (SELECT lp.id, lp.product_name, 100.0 * SUM(CASE WHEN la.application_status = 'approved' THEN 1 ELSE 0 END) / COUNT(*) AS approval_rate FROM loan_products lp JOIN loan_applications la ON lp.id = la.loan_product_id GROUP BY lp.id, lp.product_name) SELECT id, product_name, ROUND(approval_rate, 2) AS approval_rate FROM product_approval_rates WHERE approval_rate > (SELECT AVG(approval_rate) FROM product_approval_rates);
```

### ✅ PASS : BANK_083 - FILTER rate
```sql
WITH product_approval_rates AS (SELECT lp.id, lp.product_name, 100.0 * COUNT(*) FILTER (WHERE la.application_status = 'approved') / COUNT(*) AS approval_rate FROM loan_products lp JOIN loan_applications la ON lp.id = la.loan_product_id GROUP BY lp.id, lp.product_name) SELECT id, product_name, ROUND(approval_rate, 2) AS approval_rate FROM product_approval_rates WHERE approval_rate > (SELECT AVG(approval_rate) FROM product_approval_rates);
```

### ✅ PASS : BANK_084 - COUNT DISTINCT top
```sql
SELECT u.id, u.full_name, COUNT(DISTINCT ct.merchant_name) AS distinct_merchant_count FROM users u JOIN accounts a ON u.id = a.user_id JOIN cards c ON a.id = c.account_id JOIN card_transactions ct ON c.id = ct.card_id WHERE ct.transaction_status = 'settled' AND ct.merchant_name IS NOT NULL GROUP BY u.id, u.full_name ORDER BY distinct_merchant_count DESC, u.id ASC LIMIT 10;
```

### ✅ PASS : BANK_084 - Pre-distinct merchants
```sql
SELECT u.id, u.full_name, COUNT(*) AS distinct_merchant_count FROM users u JOIN (SELECT DISTINCT a.user_id, ct.merchant_name FROM accounts a JOIN cards c ON a.id = c.account_id JOIN card_transactions ct ON c.id = ct.card_id WHERE ct.transaction_status = 'settled' AND ct.merchant_name IS NOT NULL) user_merchants ON u.id = user_merchants.user_id GROUP BY u.id, u.full_name ORDER BY distinct_merchant_count DESC, u.id ASC LIMIT 10;
```

### ✅ PASS : BANK_084 - ROW_NUMBER top
```sql
SELECT id, full_name, distinct_merchant_count FROM (SELECT id, full_name, distinct_merchant_count, ROW_NUMBER() OVER (ORDER BY distinct_merchant_count DESC, id ASC) AS rn FROM (SELECT u.id, u.full_name, COUNT(DISTINCT ct.merchant_name) AS distinct_merchant_count FROM users u JOIN accounts a ON u.id = a.user_id JOIN cards c ON a.id = c.account_id JOIN card_transactions ct ON c.id = ct.card_id WHERE ct.transaction_status = 'settled' AND ct.merchant_name IS NOT NULL GROUP BY u.id, u.full_name) merchant_counts) ranked WHERE rn <= 10 ORDER BY distinct_merchant_count DESC, id ASC;
```

### ✅ PASS : BANK_085 - Outgoing vs incoming
```sql
WITH outgoing_transfers AS (SELECT from_account_id AS account_id, SUM(amount) AS total_outgoing FROM transfers WHERE transfer_status = 'completed' GROUP BY from_account_id), incoming_transfers AS (SELECT to_account_id AS account_id, SUM(amount) AS total_incoming FROM transfers WHERE transfer_status = 'completed' AND to_account_id IS NOT NULL GROUP BY to_account_id) SELECT a.id, a.account_number, COALESCE(o.total_outgoing, 0) AS total_outgoing, COALESCE(i.total_incoming, 0) AS total_incoming FROM accounts a LEFT JOIN outgoing_transfers o ON a.id = o.account_id LEFT JOIN incoming_transfers i ON a.id = i.account_id WHERE COALESCE(o.total_outgoing, 0) > COALESCE(i.total_incoming, 0);
```

### ✅ PASS : BANK_085 - UNION flow
```sql
SELECT a.id, a.account_number, SUM(CASE WHEN x.flow_type = 'outgoing' THEN x.amount ELSE 0 END) AS total_outgoing, SUM(CASE WHEN x.flow_type = 'incoming' THEN x.amount ELSE 0 END) AS total_incoming FROM accounts a JOIN (SELECT from_account_id AS account_id, amount, 'outgoing' AS flow_type FROM transfers WHERE transfer_status = 'completed' UNION ALL SELECT to_account_id AS account_id, amount, 'incoming' AS flow_type FROM transfers WHERE transfer_status = 'completed' AND to_account_id IS NOT NULL) x ON a.id = x.account_id GROUP BY a.id, a.account_number HAVING SUM(CASE WHEN x.flow_type = 'outgoing' THEN x.amount ELSE 0 END) > SUM(CASE WHEN x.flow_type = 'incoming' THEN x.amount ELSE 0 END);
```

### ✅ PASS : BANK_086 - Distinct categories top
```sql
SELECT u.id, u.full_name, COUNT(DISTINCT b.biller_category) AS distinct_biller_categories FROM users u JOIN accounts a ON u.id = a.user_id JOIN bill_payments bp ON a.id = bp.account_id JOIN billers b ON bp.biller_id = b.id WHERE bp.payment_status = 'paid' GROUP BY u.id, u.full_name ORDER BY distinct_biller_categories DESC, u.id ASC LIMIT 5;
```

### ✅ PASS : BANK_086 - Pre-distinct categories
```sql
SELECT u.id, u.full_name, COUNT(*) AS distinct_biller_categories FROM users u JOIN (SELECT DISTINCT a.user_id, b.biller_category FROM accounts a JOIN bill_payments bp ON a.id = bp.account_id JOIN billers b ON bp.biller_id = b.id WHERE bp.payment_status = 'paid') user_categories ON u.id = user_categories.user_id GROUP BY u.id, u.full_name ORDER BY distinct_biller_categories DESC, u.id ASC LIMIT 5;
```

### ✅ PASS : BANK_086 - ROW_NUMBER top
```sql
SELECT id, full_name, distinct_biller_categories FROM (SELECT id, full_name, distinct_biller_categories, ROW_NUMBER() OVER (ORDER BY distinct_biller_categories DESC, id ASC) AS rn FROM (SELECT u.id, u.full_name, COUNT(DISTINCT b.biller_category) AS distinct_biller_categories FROM users u JOIN accounts a ON u.id = a.user_id JOIN bill_payments bp ON a.id = bp.account_id JOIN billers b ON bp.biller_id = b.id WHERE bp.payment_status = 'paid' GROUP BY u.id, u.full_name) category_counts) ranked WHERE rn <= 5 ORDER BY distinct_biller_categories DESC, id ASC;
```

### ✅ PASS : BANK_087 - LAG late status
```sql
WITH repayment_flags AS (SELECT l.borrower_user_id AS user_id, lr.loan_id, lr.installment_number, lr.repayment_status, LAG(lr.repayment_status) OVER (PARTITION BY lr.loan_id ORDER BY lr.installment_number) AS prev_status FROM loan_repayments lr JOIN loans l ON lr.loan_id = l.id) SELECT DISTINCT u.id, u.full_name FROM users u JOIN repayment_flags rf ON u.id = rf.user_id WHERE rf.repayment_status = 'late' AND rf.prev_status = 'late';
```

### ✅ PASS : BANK_087 - Self join installments
```sql
SELECT DISTINCT u.id, u.full_name FROM loan_repayments lr JOIN loan_repayments prev ON lr.loan_id = prev.loan_id AND lr.installment_number = prev.installment_number + 1 JOIN loans l ON lr.loan_id = l.id JOIN users u ON l.borrower_user_id = u.id WHERE lr.repayment_status = 'late' AND prev.repayment_status = 'late';
```

### ✅ PASS : BANK_088 - Earned vs redeemed
```sql
WITH earned AS (SELECT user_id, SUM(points_earned) AS total_points_earned FROM reward_earnings GROUP BY user_id), redeemed AS (SELECT user_id, SUM(points_redeemed) AS total_points_redeemed FROM reward_redemptions GROUP BY user_id) SELECT u.id, u.full_name, ROUND(100.0 * COALESCE(r.total_points_redeemed, 0) / NULLIF(e.total_points_earned, 0), 2) AS redemption_rate FROM users u JOIN earned e ON u.id = e.user_id LEFT JOIN redeemed r ON u.id = r.user_id WHERE e.total_points_earned > 0 ORDER BY redemption_rate DESC, u.id ASC LIMIT 10;
```

### ✅ PASS : BANK_088 - Joined totals
```sql
SELECT u.id, u.full_name, ROUND(100.0 * COALESCE(r.total_points_redeemed, 0) / NULLIF(e.total_points_earned, 0), 2) AS redemption_rate FROM users u JOIN (SELECT user_id, SUM(points_earned) AS total_points_earned FROM reward_earnings GROUP BY user_id) e ON u.id = e.user_id LEFT JOIN (SELECT user_id, SUM(points_redeemed) AS total_points_redeemed FROM reward_redemptions GROUP BY user_id) r ON u.id = r.user_id WHERE e.total_points_earned > 0 ORDER BY redemption_rate DESC, u.id ASC LIMIT 10;
```

### ✅ PASS : BANK_089 - Branch failure rate
```sql
WITH branch_failure_rates AS (SELECT b.id, b.branch_name, 100.0 * SUM(CASE WHEN at.transaction_status = 'failed' THEN 1 ELSE 0 END) / COUNT(*) AS failure_rate FROM branches b JOIN atm_machines am ON b.id = am.branch_id JOIN atm_transactions at ON am.id = at.atm_id GROUP BY b.id, b.branch_name) SELECT id, branch_name, ROUND(failure_rate, 2) AS failure_rate FROM branch_failure_rates WHERE failure_rate > (SELECT AVG(failure_rate) FROM branch_failure_rates);
```

### ✅ PASS : BANK_089 - FILTER rate
```sql
WITH branch_failure_rates AS (SELECT b.id, b.branch_name, 100.0 * COUNT(*) FILTER (WHERE at.transaction_status = 'failed') / COUNT(*) AS failure_rate FROM branches b JOIN atm_machines am ON b.id = am.branch_id JOIN atm_transactions at ON am.id = at.atm_id GROUP BY b.id, b.branch_name) SELECT id, branch_name, ROUND(failure_rate, 2) AS failure_rate FROM branch_failure_rates WHERE failure_rate > (SELECT AVG(failure_rate) FROM branch_failure_rates);
```

### ✅ PASS : BANK_090 - Branch average compare
```sql
WITH user_branch_balances AS (SELECT a.primary_branch_id AS branch_id, a.user_id, SUM(a.current_balance) AS total_balance FROM accounts a WHERE a.primary_branch_id IS NOT NULL GROUP BY a.primary_branch_id, a.user_id), branch_avg_balances AS (SELECT branch_id, AVG(total_balance) AS avg_branch_balance FROM user_branch_balances GROUP BY branch_id) SELECT u.id, u.full_name, ub.branch_id, ub.total_balance FROM users u JOIN user_branch_balances ub ON u.id = ub.user_id JOIN branch_avg_balances bb ON ub.branch_id = bb.branch_id WHERE ub.total_balance > bb.avg_branch_balance;
```

### ✅ PASS : BANK_090 - Window branch AVG
```sql
SELECT id, full_name, branch_id, total_balance FROM (SELECT u.id, u.full_name, ub.branch_id, ub.total_balance, AVG(ub.total_balance) OVER (PARTITION BY ub.branch_id) AS avg_branch_balance FROM users u JOIN (SELECT primary_branch_id AS branch_id, user_id, SUM(current_balance) AS total_balance FROM accounts WHERE primary_branch_id IS NOT NULL GROUP BY primary_branch_id, user_id) ub ON u.id = ub.user_id) x WHERE total_balance > avg_branch_balance;
```

### ✅ PASS : BANK_091 - Monthly rank
```sql
WITH monthly_user_cashflow AS (SELECT a.user_id, DATE_TRUNC('month', t.posted_at) AS txn_month, SUM(CASE WHEN t.transaction_type = 'credit' THEN t.amount ELSE -t.amount END) AS net_cashflow FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_status = 'posted' AND t.posted_at IS NOT NULL GROUP BY a.user_id, DATE_TRUNC('month', t.posted_at)) SELECT user_id, txn_month, net_cashflow FROM (SELECT user_id, txn_month, net_cashflow, DENSE_RANK() OVER (PARTITION BY txn_month ORDER BY net_cashflow DESC) AS rnk FROM monthly_user_cashflow) ranked WHERE rnk <= 5;
```

### ✅ PASS : BANK_091 - ROW_NUMBER monthly
```sql
WITH monthly_user_cashflow AS (SELECT a.user_id, DATE_TRUNC('month', t.posted_at) AS txn_month, SUM(CASE WHEN t.transaction_type = 'credit' THEN t.amount ELSE -t.amount END) AS net_cashflow FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_status = 'posted' AND t.posted_at IS NOT NULL GROUP BY a.user_id, DATE_TRUNC('month', t.posted_at)) SELECT user_id, txn_month, net_cashflow FROM (SELECT user_id, txn_month, net_cashflow, ROW_NUMBER() OVER (PARTITION BY txn_month ORDER BY net_cashflow DESC, user_id ASC) AS rn FROM monthly_user_cashflow) ranked WHERE rn <= 5;
```

### ✅ PASS : BANK_092 - Fraud vs tickets
```sql
WITH fraud_counts AS (SELECT user_id, COUNT(*) AS fraud_count FROM fraud_alerts WHERE user_id IS NOT NULL GROUP BY user_id), ticket_counts AS (SELECT user_id, COUNT(*) AS ticket_count FROM support_tickets WHERE user_id IS NOT NULL GROUP BY user_id) SELECT u.id, u.full_name, f.fraud_count, COALESCE(t.ticket_count, 0) AS ticket_count FROM users u JOIN fraud_counts f ON u.id = f.user_id LEFT JOIN ticket_counts t ON u.id = t.user_id WHERE f.fraud_count > COALESCE(t.ticket_count, 0);
```

### ✅ PASS : BANK_092 - Inline totals
```sql
SELECT u.id, u.full_name, f.fraud_count, COALESCE(t.ticket_count, 0) AS ticket_count FROM users u JOIN (SELECT user_id, COUNT(*) AS fraud_count FROM fraud_alerts WHERE user_id IS NOT NULL GROUP BY user_id) f ON u.id = f.user_id LEFT JOIN (SELECT user_id, COUNT(*) AS ticket_count FROM support_tickets WHERE user_id IS NOT NULL GROUP BY user_id) t ON u.id = t.user_id WHERE f.fraud_count > COALESCE(t.ticket_count, 0);
```

### ✅ PASS : BANK_092 - UNION counts
```sql
SELECT u.id, u.full_name, SUM(x.fraud_count) AS fraud_count, SUM(x.ticket_count) AS ticket_count FROM users u JOIN (SELECT user_id, COUNT(*) AS fraud_count, 0 AS ticket_count FROM fraud_alerts WHERE user_id IS NOT NULL GROUP BY user_id UNION ALL SELECT user_id, 0 AS fraud_count, COUNT(*) AS ticket_count FROM support_tickets WHERE user_id IS NOT NULL GROUP BY user_id) x ON u.id = x.user_id GROUP BY u.id, u.full_name HAVING SUM(x.fraud_count) > SUM(x.ticket_count);
```

### ✅ PASS : BANK_093 - Exposure ratio
```sql
WITH deposits AS (SELECT user_id, SUM(current_balance) AS total_deposits FROM accounts GROUP BY user_id), exposure AS (SELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_outstanding FROM loans GROUP BY borrower_user_id) SELECT u.id, u.full_name, ROUND(100.0 * e.total_outstanding / NULLIF(d.total_deposits, 0), 2) AS exposure_ratio FROM users u JOIN exposure e ON u.id = e.user_id JOIN deposits d ON u.id = d.user_id WHERE d.total_deposits > 0 ORDER BY exposure_ratio DESC, u.id ASC LIMIT 10;
```

### ✅ PASS : BANK_093 - Inline ratio
```sql
SELECT u.id, u.full_name, ROUND(100.0 * e.total_outstanding / NULLIF(d.total_deposits, 0), 2) AS exposure_ratio FROM users u JOIN (SELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_outstanding FROM loans GROUP BY borrower_user_id) e ON u.id = e.user_id JOIN (SELECT user_id, SUM(current_balance) AS total_deposits FROM accounts GROUP BY user_id) d ON u.id = d.user_id WHERE d.total_deposits > 0 ORDER BY exposure_ratio DESC, u.id ASC LIMIT 10;
```

### ✅ PASS : BANK_093 - ROW_NUMBER top
```sql
SELECT id, full_name, exposure_ratio FROM (WITH deposits AS (SELECT user_id, SUM(current_balance) AS total_deposits FROM accounts GROUP BY user_id), exposure AS (SELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_outstanding FROM loans GROUP BY borrower_user_id) SELECT u.id, u.full_name, ROUND(100.0 * e.total_outstanding / NULLIF(d.total_deposits, 0), 2) AS exposure_ratio, ROW_NUMBER() OVER (ORDER BY ROUND(100.0 * e.total_outstanding / NULLIF(d.total_deposits, 0), 2) DESC, u.id ASC) AS rn FROM users u JOIN exposure e ON u.id = e.user_id JOIN deposits d ON u.id = d.user_id WHERE d.total_deposits > 0) ranked WHERE rn <= 10 ORDER BY exposure_ratio DESC, id ASC;
```

### ✅ PASS : BANK_094 - JOIN portfolio
```sql
SELECT DISTINCT u.id, u.full_name FROM users u JOIN accounts a ON u.id = a.user_id JOIN loans l ON u.id = l.borrower_user_id LEFT JOIN fixed_deposits fd ON u.id = fd.user_id LEFT JOIN recurring_deposits rd ON u.id = rd.user_id WHERE fd.id IS NOT NULL OR rd.id IS NOT NULL;
```

### ✅ PASS : BANK_094 - EXISTS portfolio
```sql
SELECT u.id, u.full_name FROM users u WHERE EXISTS (SELECT 1 FROM accounts a WHERE a.user_id = u.id) AND EXISTS (SELECT 1 FROM loans l WHERE l.borrower_user_id = u.id) AND (EXISTS (SELECT 1 FROM fixed_deposits fd WHERE fd.user_id = u.id) OR EXISTS (SELECT 1 FROM recurring_deposits rd WHERE rd.user_id = u.id));
```

### ✅ PASS : BANK_094 - Grouped flags
```sql
SELECT u.id, u.full_name FROM users u LEFT JOIN accounts a ON u.id = a.user_id LEFT JOIN loans l ON u.id = l.borrower_user_id LEFT JOIN fixed_deposits fd ON u.id = fd.user_id LEFT JOIN recurring_deposits rd ON u.id = rd.user_id GROUP BY u.id, u.full_name HAVING COUNT(DISTINCT a.id) > 0 AND COUNT(DISTINCT l.id) > 0 AND (COUNT(DISTINCT fd.id) > 0 OR COUNT(DISTINCT rd.id) > 0);
```

### ✅ PASS : BANK_095 - Distinct product types
```sql
SELECT b.id, b.branch_name, COUNT(DISTINCT ap.product_type) AS distinct_product_types FROM branches b JOIN accounts a ON b.id = a.primary_branch_id JOIN account_products ap ON a.product_id = ap.id GROUP BY b.id, b.branch_name ORDER BY distinct_product_types DESC, b.id ASC LIMIT 5;
```

### ✅ PASS : BANK_095 - Pre-distinct products
```sql
SELECT b.id, b.branch_name, COUNT(*) AS distinct_product_types FROM branches b JOIN (SELECT DISTINCT a.primary_branch_id AS branch_id, ap.product_type FROM accounts a JOIN account_products ap ON a.product_id = ap.id WHERE a.primary_branch_id IS NOT NULL) branch_products ON b.id = branch_products.branch_id GROUP BY b.id, b.branch_name ORDER BY distinct_product_types DESC, b.id ASC LIMIT 5;
```

### ✅ PASS : BANK_095 - ROW_NUMBER top
```sql
SELECT id, branch_name, distinct_product_types FROM (SELECT id, branch_name, distinct_product_types, ROW_NUMBER() OVER (ORDER BY distinct_product_types DESC, id ASC) AS rn FROM (SELECT b.id, b.branch_name, COUNT(DISTINCT ap.product_type) AS distinct_product_types FROM branches b JOIN accounts a ON b.id = a.primary_branch_id JOIN account_products ap ON a.product_id = ap.id GROUP BY b.id, b.branch_name) product_counts) ranked WHERE rn <= 5 ORDER BY distinct_product_types DESC, id ASC;
```

### ✅ PASS : BANK_096 - Merchant concentration
```sql
WITH merchant_spend AS (SELECT a.user_id, ct.merchant_name, SUM(ct.billing_amount) AS merchant_total FROM card_transactions ct JOIN cards c ON ct.card_id = c.id JOIN accounts a ON c.account_id = a.id WHERE ct.transaction_status = 'settled' GROUP BY a.user_id, ct.merchant_name), ranked_spend AS (SELECT user_id, merchant_name, merchant_total, SUM(merchant_total) OVER (PARTITION BY user_id) AS total_spend, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY merchant_total DESC) AS rn FROM merchant_spend) SELECT u.id, u.full_name, rs.merchant_name, ROUND(100.0 * rs.merchant_total / rs.total_spend, 2) AS concentration_pct FROM users u JOIN ranked_spend rs ON u.id = rs.user_id WHERE rs.rn = 1 AND 100.0 * rs.merchant_total / rs.total_spend > 50;
```

### ✅ PASS : BANK_096 - Max merchant join
```sql
WITH merchant_spend AS (SELECT a.user_id, ct.merchant_name, SUM(ct.billing_amount) AS merchant_total FROM card_transactions ct JOIN cards c ON ct.card_id = c.id JOIN accounts a ON c.account_id = a.id WHERE ct.transaction_status = 'settled' GROUP BY a.user_id, ct.merchant_name), user_totals AS (SELECT user_id, SUM(merchant_total) AS total_spend, MAX(merchant_total) AS top_merchant_total FROM merchant_spend GROUP BY user_id) SELECT u.id, u.full_name, ms.merchant_name, ROUND(100.0 * ms.merchant_total / ut.total_spend, 2) AS concentration_pct FROM users u JOIN user_totals ut ON u.id = ut.user_id JOIN merchant_spend ms ON ms.user_id = ut.user_id AND ms.merchant_total = ut.top_merchant_total WHERE 100.0 * ms.merchant_total / ut.total_spend > 50;
```

### ✅ PASS : BANK_097 - Distinct channels
```sql
SELECT u.id, u.full_name, COUNT(DISTINCT t.channel) AS distinct_channels_used FROM users u JOIN accounts a ON u.id = a.user_id JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name ORDER BY distinct_channels_used DESC, u.id ASC LIMIT 10;
```

### ✅ PASS : BANK_097 - Pre-distinct channels
```sql
SELECT u.id, u.full_name, COUNT(*) AS distinct_channels_used FROM users u JOIN (SELECT DISTINCT a.user_id, t.channel FROM accounts a JOIN transactions t ON a.id = t.account_id) user_channels ON u.id = user_channels.user_id GROUP BY u.id, u.full_name ORDER BY distinct_channels_used DESC, u.id ASC LIMIT 10;
```

### ✅ PASS : BANK_097 - ROW_NUMBER top
```sql
SELECT id, full_name, distinct_channels_used FROM (SELECT id, full_name, distinct_channels_used, ROW_NUMBER() OVER (ORDER BY distinct_channels_used DESC, id ASC) AS rn FROM (SELECT u.id, u.full_name, COUNT(DISTINCT t.channel) AS distinct_channels_used FROM users u JOIN accounts a ON u.id = a.user_id JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name) channel_counts) ranked WHERE rn <= 10 ORDER BY distinct_channels_used DESC, id ASC;
```

### ✅ PASS : BANK_098 - Above average complaints
```sql
WITH complaint_counts AS (SELECT user_id, COUNT(*) AS complaint_count FROM complaints WHERE user_id IS NOT NULL GROUP BY user_id) SELECT u.id, u.full_name, cc.complaint_count FROM users u JOIN complaint_counts cc ON u.id = cc.user_id WHERE cc.complaint_count > (SELECT AVG(complaint_count) FROM complaint_counts);
```

### ✅ PASS : BANK_098 - Window average
```sql
SELECT id, full_name, complaint_count FROM (SELECT u.id, u.full_name, cc.complaint_count, AVG(cc.complaint_count) OVER () AS avg_complaint_count FROM users u JOIN (SELECT user_id, COUNT(*) AS complaint_count FROM complaints WHERE user_id IS NOT NULL GROUP BY user_id) cc ON u.id = cc.user_id) x WHERE complaint_count > avg_complaint_count;
```

### ✅ PASS : BANK_099 - Fraud rate top
```sql
WITH branch_customers AS (SELECT primary_branch_id AS branch_id, COUNT(DISTINCT user_id) AS customer_count FROM accounts WHERE primary_branch_id IS NOT NULL GROUP BY primary_branch_id), branch_fraud AS (SELECT a.primary_branch_id AS branch_id, COUNT(f.id) AS fraud_count FROM fraud_alerts f JOIN accounts a ON f.account_id = a.id WHERE a.primary_branch_id IS NOT NULL GROUP BY a.primary_branch_id) SELECT b.id, b.branch_name, ROUND(100.0 * COALESCE(bf.fraud_count, 0) / NULLIF(bc.customer_count, 0), 2) AS fraud_rate_per_100_customers FROM branches b JOIN branch_customers bc ON b.id = bc.branch_id LEFT JOIN branch_fraud bf ON b.id = bf.branch_id ORDER BY fraud_rate_per_100_customers DESC, b.id ASC LIMIT 5;
```

### ✅ PASS : BANK_099 - Inline rate
```sql
SELECT b.id, b.branch_name, ROUND(100.0 * COALESCE(bf.fraud_count, 0) / NULLIF(bc.customer_count, 0), 2) AS fraud_rate_per_100_customers FROM branches b JOIN (SELECT primary_branch_id AS branch_id, COUNT(DISTINCT user_id) AS customer_count FROM accounts WHERE primary_branch_id IS NOT NULL GROUP BY primary_branch_id) bc ON b.id = bc.branch_id LEFT JOIN (SELECT a.primary_branch_id AS branch_id, COUNT(f.id) AS fraud_count FROM fraud_alerts f JOIN accounts a ON f.account_id = a.id WHERE a.primary_branch_id IS NOT NULL GROUP BY a.primary_branch_id) bf ON b.id = bf.branch_id ORDER BY fraud_rate_per_100_customers DESC, b.id ASC LIMIT 5;
```

### ✅ PASS : BANK_099 - ROW_NUMBER top
```sql
SELECT id, branch_name, fraud_rate_per_100_customers FROM (WITH branch_customers AS (SELECT primary_branch_id AS branch_id, COUNT(DISTINCT user_id) AS customer_count FROM accounts WHERE primary_branch_id IS NOT NULL GROUP BY primary_branch_id), branch_fraud AS (SELECT a.primary_branch_id AS branch_id, COUNT(f.id) AS fraud_count FROM fraud_alerts f JOIN accounts a ON f.account_id = a.id WHERE a.primary_branch_id IS NOT NULL GROUP BY a.primary_branch_id) SELECT b.id, b.branch_name, ROUND(100.0 * COALESCE(bf.fraud_count, 0) / NULLIF(bc.customer_count, 0), 2) AS fraud_rate_per_100_customers, ROW_NUMBER() OVER (ORDER BY ROUND(100.0 * COALESCE(bf.fraud_count, 0) / NULLIF(bc.customer_count, 0), 2) DESC, b.id ASC) AS rn FROM branches b JOIN branch_customers bc ON b.id = bc.branch_id LEFT JOIN branch_fraud bf ON b.id = bf.branch_id) ranked WHERE rn <= 5 ORDER BY fraud_rate_per_100_customers DESC, id ASC;
```

### ✅ PASS : BANK_100 - Branch activity average
```sql
WITH user_txn_counts AS (SELECT a.primary_branch_id AS branch_id, a.user_id, COUNT(t.id) AS txn_count FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE a.primary_branch_id IS NOT NULL GROUP BY a.primary_branch_id, a.user_id), branch_avg_txn AS (SELECT branch_id, AVG(txn_count) AS avg_txn_count FROM user_txn_counts GROUP BY branch_id) SELECT u.id, u.full_name, utc.branch_id, utc.txn_count FROM users u JOIN user_txn_counts utc ON u.id = utc.user_id JOIN branch_avg_txn bat ON utc.branch_id = bat.branch_id WHERE utc.txn_count > bat.avg_txn_count;
```

### ✅ PASS : BANK_100 - Window branch average
```sql
SELECT id, full_name, branch_id, txn_count FROM (SELECT u.id, u.full_name, utc.branch_id, utc.txn_count, AVG(utc.txn_count) OVER (PARTITION BY utc.branch_id) AS avg_txn_count FROM users u JOIN (SELECT a.primary_branch_id AS branch_id, a.user_id, COUNT(t.id) AS txn_count FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE a.primary_branch_id IS NOT NULL GROUP BY a.primary_branch_id, a.user_id) utc ON u.id = utc.user_id) x WHERE txn_count > avg_txn_count;
```

