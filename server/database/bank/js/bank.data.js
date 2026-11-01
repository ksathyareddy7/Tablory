import { getAppIdByName } from "../../base/scripts/base.data.js";

const appId = getAppIdByName("bank");

export const tableDescriptions = {
  account_holders:
    "Relationship table for joint accounts and authorized signers",
  account_limits:
    "Per-account limits for withdrawals, transfers, ATM, POS, and online spend",
  account_products:
    "Bank account products such as savings, salary, checking, and wallet accounts",
  accounts:
    "Customer deposit and wallet accounts with balances and lifecycle status",
  app_events:
    "Product analytics events from customer banking journeys in app or web",
  atm_machines: "ATM machine inventory and operational status",
  atm_transactions:
    "ATM operations such as withdrawals, deposits, inquiries, and reversals",
  audit_logs:
    "Security and operational audit log of important entity changes and actions",
  beneficiaries:
    "Saved transfer beneficiaries for internal, domestic, and international transfers",
  bill_payments: "Bill payment transactions initiated by customers",
  billers: "Billers for utility, telecom, insurance, and government payments",
  branches: "Physical bank branches where accounts and services are managed",
  card_transactions: "Card authorization and settlement activity at merchants",
  cards:
    "Debit, credit, prepaid, and virtual cards linked to customer accounts",
  complaints: "Formal complaints raised by customers across banking services",
  employees:
    "Internal bank employees such as tellers, managers, compliance, and fraud teams",
  fixed_deposits: "Fixed deposit investments made by bank customers",
  fraud_alerts: "Fraud monitoring alerts triggered on suspicious behavior",
  kyc_records: "Know-your-customer verification lifecycle for bank customers",
  loan_applications:
    "Loan requests submitted by customers and processed by underwriting teams",
  loan_products:
    "Loan offerings such as personal, home, education, and business loans",
  loan_repayments: "Installment schedules and payments for active loans",
  loans: "Booked loans and their repayment lifecycle",
  merchants:
    "Merchant directory for spend analysis and merchant-related risk patterns",
  notification_campaigns: "Customer communication campaigns across channels",
  notification_deliveries:
    "Per-user notification delivery and engagement records",
  recurring_deposits:
    "Recurring deposit savings products funded periodically from accounts",
  reward_earnings: "Reward points or cashback earned from customer activity",
  reward_programs: "Bank loyalty, cashback, referral, and rewards programs",
  reward_redemptions:
    "Customer redemptions of points into cashback, vouchers, or credits",
  support_tickets:
    "Customer support tickets related to accounts, cards, loans, and fraud",
  transaction_categories:
    "Classifications for account transactions such as bills, fees, transfers, and merchant spend",
  transactions:
    "Posted and pending debits and credits recorded against customer accounts",
  transfers:
    "Money transfers between own accounts, internal accounts, or external beneficiaries",
  user_addresses: "User address records for home, mailing, and office purposes",
  users: "Retail banking users and customers using the bank application",
};

export const questions = [
  {
    app_id: appId,
    code: "BANK_001",
    title: "Total Customers Count",
    description: "Find the total number of users in the bank.",
    difficulty: "easy",
    expected_query: "SELECT COUNT(*) AS total_users FROM users;",
    solution_columns: ["total_users"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_002",
    title: "Active Customers Count",
    description: "Find the total number of active users.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS active_users FROM users WHERE is_active = true;",
    solution_columns: ["active_users"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_003",
    title: "Verified Customers Count",
    description: "Find the total number of verified users.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS verified_users FROM users WHERE is_verified = true;",
    solution_columns: ["verified_users"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_004",
    title: "All Active Branches",
    description:
      "List all active branches with their branch code, branch name, city, and country.",
    difficulty: "easy",
    expected_query:
      "SELECT branch_code, branch_name, city, country FROM branches WHERE is_active = true;",
    solution_columns: ["branch_code", "branch_name", "city", "country"],
    tables: ["branches"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_005",
    title: "Savings Products List",
    description: "Show all account products that are of type savings.",
    difficulty: "easy",
    expected_query:
      "SELECT id, product_name, currency, minimum_balance, interest_rate FROM account_products WHERE product_type = 'savings';",
    solution_columns: [
      "id",
      "product_name",
      "currency",
      "minimum_balance",
      "interest_rate",
    ],
    tables: ["account_products"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_006",
    title: "Active Accounts Count",
    description: "Find the total number of accounts that are currently active.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS active_accounts FROM accounts WHERE account_status = 'active';",
    solution_columns: ["active_accounts"],
    tables: ["accounts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_007",
    title: "Cards Expiring Soon",
    description: "List all cards that expire before January 1, 2027.",
    difficulty: "easy",
    expected_query:
      "SELECT id, masked_card_number, card_type, network, expires_at FROM cards WHERE expires_at < DATE '2027-01-01';",
    solution_columns: [
      "id",
      "masked_card_number",
      "card_type",
      "network",
      "expires_at",
    ],
    tables: ["cards"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_008",
    title: "Pending KYC Records",
    description: "Show all KYC records that are currently pending.",
    difficulty: "easy",
    expected_query:
      "SELECT id, user_id, verification_level, submitted_at FROM kyc_records WHERE kyc_status = 'pending';",
    solution_columns: ["id", "user_id", "verification_level", "submitted_at"],
    tables: ["kyc_records"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_009",
    title: "Failed Transactions",
    description:
      "List all failed transactions with their reference, account, amount, and initiated time.",
    difficulty: "easy",
    expected_query:
      "SELECT transaction_ref, account_id, amount, initiated_at FROM transactions WHERE transaction_status = 'failed';",
    solution_columns: [
      "transaction_ref",
      "account_id",
      "amount",
      "initiated_at",
    ],
    tables: ["transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_010",
    title: "Open Fraud Alerts",
    description: "Show all fraud alerts that are currently open.",
    difficulty: "easy",
    expected_query:
      "SELECT alert_ref, user_id, account_id, card_id, alert_type, severity, detected_at FROM fraud_alerts WHERE alert_status = 'open';",
    solution_columns: [
      "alert_ref",
      "user_id",
      "account_id",
      "card_id",
      "alert_type",
      "severity",
      "detected_at",
    ],
    tables: ["fraud_alerts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_011",
    title: "Inactive Users List",
    description: "List all users who are currently inactive.",
    difficulty: "easy",
    expected_query:
      "SELECT id, full_name, email, phone, country, created_at FROM users WHERE is_active = false;",
    solution_columns: [
      "id",
      "full_name",
      "email",
      "phone",
      "country",
      "created_at",
    ],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_012",
    title: "Blocked Cards Count",
    description: "Find the total number of cards that are currently blocked.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS blocked_cards FROM cards WHERE card_status = 'blocked';",
    solution_columns: ["blocked_cards"],
    tables: ["cards"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_013",
    title: "Active ATMs",
    description: "Show all ATM machines that are currently active.",
    difficulty: "easy",
    expected_query:
      "SELECT atm_code, city, country, installed_at FROM atm_machines WHERE atm_status = 'active';",
    solution_columns: ["atm_code", "city", "country", "installed_at"],
    tables: ["atm_machines"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_014",
    title: "Domestic Beneficiaries",
    description: "List all beneficiaries of type domestic_external.",
    difficulty: "easy",
    expected_query:
      "SELECT id, user_id, beneficiary_name, bank_name, account_number, country FROM beneficiaries WHERE beneficiary_type = 'domestic_external';",
    solution_columns: [
      "id",
      "user_id",
      "beneficiary_name",
      "bank_name",
      "account_number",
      "country",
    ],
    tables: ["beneficiaries"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_015",
    title: "Rejected Loan Applications",
    description: "Show all loan applications that were rejected.",
    difficulty: "easy",
    expected_query:
      "SELECT application_ref, user_id, loan_product_id, requested_amount, requested_term_months, decision_at FROM loan_applications WHERE application_status = 'rejected';",
    solution_columns: [
      "application_ref",
      "user_id",
      "loan_product_id",
      "requested_amount",
      "requested_term_months",
      "decision_at",
    ],
    tables: ["loan_applications"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_016",
    title: "Closed Loans Count",
    description: "Find the total number of loans that are closed.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS closed_loans FROM loans WHERE loan_status = 'closed';",
    solution_columns: ["closed_loans"],
    tables: ["loans"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_017",
    title: "Active Billers",
    description: "List all billers that are active.",
    difficulty: "easy",
    expected_query:
      "SELECT id, biller_name, biller_category, country FROM billers WHERE is_active = true;",
    solution_columns: ["id", "biller_name", "biller_category", "country"],
    tables: ["billers"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_018",
    title: "High Severity Fraud Alerts",
    description: "Show all fraud alerts with severity high or critical.",
    difficulty: "easy",
    expected_query:
      "SELECT alert_ref, user_id, account_id, alert_type, severity, alert_status, detected_at FROM fraud_alerts WHERE severity IN ('high', 'critical');",
    solution_columns: [
      "alert_ref",
      "user_id",
      "account_id",
      "alert_type",
      "severity",
      "alert_status",
      "detected_at",
    ],
    tables: ["fraud_alerts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_019",
    title: "Users In India",
    description: "List all users whose country is India.",
    difficulty: "easy",
    expected_query:
      "SELECT id, full_name, email, phone, city FROM users WHERE country = 'India';",
    solution_columns: ["id", "full_name", "email", "phone", "city"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_020",
    title: "Pending Support Tickets",
    description: "Show all support tickets that are currently open.",
    difficulty: "easy",
    expected_query:
      "SELECT id, user_id, account_id, card_id, loan_id, issue_type, priority, created_at FROM support_tickets WHERE ticket_status = 'open';",
    solution_columns: [
      "id",
      "user_id",
      "account_id",
      "card_id",
      "loan_id",
      "issue_type",
      "priority",
      "created_at",
    ],
    tables: ["support_tickets"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_021",
    title: "Users With Multiple Accounts",
    description: "Find users who have more than one account.",
    difficulty: "easy",
    expected_query:
      "SELECT user_id, COUNT(*) AS account_count FROM accounts GROUP BY user_id HAVING COUNT(*) > 1;",
    solution_columns: ["user_id", "account_count"],
    tables: ["accounts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_022",
    title: "Total Balance By User",
    description:
      "Find the total current balance across all accounts for each user.",
    difficulty: "easy",
    expected_query:
      "SELECT user_id, SUM(current_balance) AS total_balance FROM accounts GROUP BY user_id;",
    solution_columns: ["user_id", "total_balance"],
    tables: ["accounts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_023",
    title: "Transactions Per Channel",
    description: "Count the number of transactions for each channel.",
    difficulty: "easy",
    expected_query:
      "SELECT channel, COUNT(*) AS transaction_count FROM transactions GROUP BY channel;",
    solution_columns: ["channel", "transaction_count"],
    tables: ["transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_024",
    title: "Average Account Balance",
    description: "Find the average current balance of active accounts.",
    difficulty: "easy",
    expected_query:
      "SELECT ROUND(AVG(current_balance), 2) AS avg_balance FROM accounts WHERE account_status = 'active';",
    solution_columns: ["avg_balance"],
    tables: ["accounts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_025",
    title: "Card Count By Network",
    description: "Find the total number of cards for each network.",
    difficulty: "easy",
    expected_query:
      "SELECT network, COUNT(*) AS card_count FROM cards GROUP BY network;",
    solution_columns: ["network", "card_count"],
    tables: ["cards"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_026",
    title: "ATM Count By City",
    description: "Find the total number of ATM machines in each city.",
    difficulty: "easy",
    expected_query:
      "SELECT city, COUNT(*) AS atm_count FROM atm_machines GROUP BY city;",
    solution_columns: ["city", "atm_count"],
    tables: ["atm_machines"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_027",
    title: "Total Transfer Fees",
    description: "Find the total transfer fees collected.",
    difficulty: "easy",
    expected_query:
      "SELECT SUM(fee_amount) AS total_transfer_fees FROM transfers;",
    solution_columns: ["total_transfer_fees"],
    tables: ["transfers"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_028",
    title: "Approved Loan Applications",
    description: "Count the number of approved loan applications.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS approved_applications FROM loan_applications WHERE application_status = 'approved';",
    solution_columns: ["approved_applications"],
    tables: ["loan_applications"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_029",
    title: "FD Count By Status",
    description: "Find the total number of fixed deposits by status.",
    difficulty: "easy",
    expected_query:
      "SELECT fd_status, COUNT(*) AS fd_count FROM fixed_deposits GROUP BY fd_status;",
    solution_columns: ["fd_status", "fd_count"],
    tables: ["fixed_deposits"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_030",
    title: "Total Cashback Redeemed",
    description: "Find the total cashback amount redeemed by users.",
    difficulty: "easy",
    expected_query:
      "SELECT SUM(cashback_amount) AS total_cashback_redeemed FROM reward_redemptions;",
    solution_columns: ["total_cashback_redeemed"],
    tables: ["reward_redemptions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_031",
    title: "Open Complaints Count",
    description: "Find the total number of complaints that are currently open.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS open_complaints FROM complaints WHERE complaint_status = 'open';",
    solution_columns: ["open_complaints"],
    tables: ["complaints"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_032",
    title: "Accounts By Currency",
    description: "Find the total number of accounts for each currency.",
    difficulty: "easy",
    expected_query:
      "SELECT currency, COUNT(*) AS account_count FROM accounts GROUP BY currency;",
    solution_columns: ["currency", "account_count"],
    tables: ["accounts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_033",
    title: "Average Loan Amount",
    description: "Find the average principal amount of all active loans.",
    difficulty: "easy",
    expected_query:
      "SELECT ROUND(AVG(principal_amount), 2) AS avg_loan_amount FROM loans WHERE loan_status = 'active';",
    solution_columns: ["avg_loan_amount"],
    tables: ["loans"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_034",
    title: "Customers Per Segment",
    description: "Find the number of users in each customer segment.",
    difficulty: "easy",
    expected_query:
      "SELECT customer_segment, COUNT(*) AS user_count FROM users GROUP BY customer_segment;",
    solution_columns: ["customer_segment", "user_count"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_035",
    title: "Cards By Type",
    description: "Find the number of cards issued for each card type.",
    difficulty: "easy",
    expected_query:
      "SELECT card_type, COUNT(*) AS card_count FROM cards GROUP BY card_type;",
    solution_columns: ["card_type", "card_count"],
    tables: ["cards"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_036",
    title: "Users With Verified KYC",
    description: "Find all users whose KYC status is verified.",
    difficulty: "medium",
    expected_query:
      "SELECT u.id, u.full_name, k.verification_level, k.verified_at FROM users u JOIN kyc_records k ON u.id = k.user_id WHERE k.kyc_status = 'verified';",
    solution_columns: ["id", "full_name", "verification_level", "verified_at"],
    tables: ["users", "kyc_records"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_037",
    title: "Top 10 Users By Total Balance",
    description:
      "Find the top 10 users with the highest total current balance across all their accounts.",
    difficulty: "medium",
    expected_query:
      "SELECT u.id, u.full_name, SUM(a.current_balance) AS total_balance FROM users u JOIN accounts a ON u.id = a.user_id GROUP BY u.id, u.full_name ORDER BY total_balance DESC, u.id ASC LIMIT 10;",
    solution_columns: ["id", "full_name", "total_balance"],
    tables: ["users", "accounts"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_balance", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_038",
    title: "Branch Employee Count",
    description: "Find the number of employees working in each branch.",
    difficulty: "medium",
    expected_query:
      "SELECT b.id, b.branch_name, COUNT(e.id) AS employee_count FROM branches b LEFT JOIN employees e ON b.id = e.branch_id GROUP BY b.id, b.branch_name;",
    solution_columns: ["id", "branch_name", "employee_count"],
    tables: ["branches", "employees"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_039",
    title: "Users With Open Fraud Alerts",
    description:
      "Find all users who currently have at least one open fraud alert.",
    difficulty: "medium",
    expected_query:
      "SELECT DISTINCT u.id, u.full_name FROM users u JOIN fraud_alerts f ON u.id = f.user_id WHERE f.alert_status = 'open';",
    solution_columns: ["id", "full_name"],
    tables: ["users", "fraud_alerts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_040",
    title: "Loan Repayment Pending Amount",
    description:
      "Find the total pending repayment amount for each active loan.",
    difficulty: "medium",
    expected_query:
      "SELECT l.id AS loan_id, SUM(r.total_due - r.total_paid) AS pending_amount FROM loans l JOIN loan_repayments r ON l.id = r.loan_id WHERE l.loan_status = 'active' AND r.repayment_status IN ('pending', 'partial', 'late') GROUP BY l.id;",
    solution_columns: ["loan_id", "pending_amount"],
    tables: ["loans", "loan_repayments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_041",
    title: "Accounts With Negative Balance",
    description: "Find all accounts where the current balance is negative.",
    difficulty: "medium",
    expected_query:
      "SELECT id, user_id, current_balance FROM accounts WHERE current_balance < 0;",
    solution_columns: ["id", "user_id", "current_balance"],
    tables: ["accounts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_042",
    title: "Users With No Accounts",
    description: "Find users who do not have any bank accounts.",
    difficulty: "medium",
    expected_query:
      "SELECT u.id, u.full_name FROM users u LEFT JOIN accounts a ON u.id = a.user_id WHERE a.id IS NULL;",
    solution_columns: ["id", "full_name"],
    tables: ["users", "accounts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_043",
    title: "Top 5 Accounts By Balance",
    description: "Find the top 5 accounts with the highest current balance.",
    difficulty: "medium",
    expected_query:
      "SELECT id, user_id, current_balance FROM accounts ORDER BY current_balance DESC, id ASC LIMIT 5;",
    solution_columns: ["id", "user_id", "current_balance"],
    tables: ["accounts"],
    comparison_config: {
      sort_by_columns: [
        { column: "current_balance", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_044",
    title: "Top 5 Users By Transaction Volume",
    description:
      "Find the top 5 users with the highest number of transactions.",
    difficulty: "medium",
    expected_query:
      "SELECT u.id, u.full_name, COUNT(t.id) AS transaction_count FROM users u JOIN accounts a ON u.id = a.user_id JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name ORDER BY transaction_count DESC, u.id ASC LIMIT 5;",
    solution_columns: ["id", "full_name", "transaction_count"],
    tables: ["users", "accounts", "transactions"],
    comparison_config: {
      sort_by_columns: [
        { column: "transaction_count", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_045",
    title: "Users With No Transactions",
    description:
      "Find users who have accounts but have never made any transactions.",
    difficulty: "medium",
    expected_query:
      "SELECT u.id, u.full_name FROM users u JOIN accounts a ON u.id = a.user_id LEFT JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name HAVING COUNT(t.id) = 0;",
    solution_columns: ["id", "full_name"],
    tables: ["users", "accounts", "transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_046",
    title: "Average Transaction Amount",
    description:
      "Find the average transaction amount for successful transactions.",
    difficulty: "medium",
    expected_query:
      "SELECT ROUND(AVG(amount), 2) AS avg_transaction_amount FROM transactions WHERE transaction_status = 'success';",
    solution_columns: ["avg_transaction_amount"],
    tables: ["transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_047",
    title: "Users With Multiple Cards",
    description: "Find users who have more than one card.",
    difficulty: "medium",
    expected_query:
      "SELECT a.user_id, COUNT(*) AS card_count FROM cards c JOIN accounts a ON a.id = c.account_id GROUP BY a.user_id HAVING COUNT(*) > 1;",
    solution_columns: ["user_id", "card_count"],
    tables: ["cards", "accounts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_048",
    title: "Expired Fixed Deposits",
    description: "Find all fixed deposits that have already matured.",
    difficulty: "medium",
    expected_query:
      "SELECT id, user_id, maturity_date FROM fixed_deposits WHERE maturity_date < CURRENT_DATE;",
    solution_columns: ["id", "user_id", "maturity_date"],
    tables: ["fixed_deposits"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_049",
    title: "Users With Active Loans",
    description: "Find users who currently have at least one active loan.",
    difficulty: "medium",
    expected_query:
      "SELECT DISTINCT u.id, u.full_name FROM users u JOIN loans l ON u.id = l.borrower_user_id WHERE l.loan_status = 'active';",
    solution_columns: ["id", "full_name"],
    tables: ["users", "loans"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_050",
    title: "Top 5 Loan Amounts",
    description: "Find the top 5 highest loan principal amounts.",
    difficulty: "medium",
    expected_query:
      "SELECT id, borrower_user_id, principal_amount FROM loans ORDER BY principal_amount DESC, id ASC LIMIT 5;",
    solution_columns: ["id", "borrower_user_id", "principal_amount"],
    tables: ["loans"],
    comparison_config: {
      sort_by_columns: [
        { column: "principal_amount", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },

  // 🔥 HARD

  {
    app_id: appId,
    code: "BANK_051",
    title: "Running Balance Per Account",
    description:
      "Calculate running balance for each account based on transactions.",
    difficulty: "hard",
    expected_query:
      "SELECT account_id, id, SUM(amount) OVER (PARTITION BY account_id ORDER BY initiated_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_balance FROM transactions;",
    solution_columns: ["account_id", "id", "running_balance"],
    tables: ["transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_052",
    title: "Users With Increasing Balance Trend",
    description:
      "Find users whose account balances have increased compared to previous account.",
    difficulty: "hard",
    expected_query:
      "SELECT user_id FROM (SELECT user_id, current_balance, LAG(current_balance) OVER (PARTITION BY user_id ORDER BY id) AS prev_balance FROM accounts) x WHERE prev_balance IS NOT NULL AND current_balance > prev_balance;",
    solution_columns: ["user_id"],
    tables: ["accounts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_053",
    title: "Second Highest Account Balance",
    description: "Find the account with second highest balance.",
    difficulty: "hard",
    expected_query:
      "SELECT id, current_balance FROM (SELECT id, current_balance, DENSE_RANK() OVER (ORDER BY current_balance DESC) AS rnk FROM accounts) x WHERE rnk = 2;",
    solution_columns: ["id", "current_balance"],
    tables: ["accounts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_054",
    title: "Top 3 Accounts Per User",
    description: "Find top 3 accounts per user based on balance.",
    difficulty: "hard",
    expected_query:
      "WITH ranked AS (SELECT user_id, id, current_balance, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY current_balance DESC, id ASC) AS rn FROM accounts) SELECT user_id, id, current_balance FROM ranked WHERE rn <= 3;",
    solution_columns: ["user_id", "id", "current_balance"],
    tables: ["accounts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_055",
    title: "Users With Only Successful Transactions",
    description: "Find users where all transactions are successful.",
    difficulty: "hard",
    expected_query:
      "SELECT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING COUNT(*) = COUNT(*) FILTER (WHERE t.transaction_status = 'success');",
    solution_columns: ["user_id"],
    tables: ["accounts", "transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_056",
    title: "Accounts With Above Average Balance",
    description: "Find accounts whose balance is above average balance.",
    difficulty: "hard",
    expected_query:
      "SELECT id, user_id, current_balance FROM accounts WHERE current_balance > (SELECT AVG(current_balance) FROM accounts);",
    solution_columns: ["id", "user_id", "current_balance"],
    tables: ["accounts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_057",
    title: "Users With More Debit Than Credit",
    description:
      "Find users whose debit transactions exceed credit transactions.",
    difficulty: "hard",
    expected_query:
      "SELECT a.user_id, COUNT(*) FILTER (WHERE t.transaction_type = 'debit') AS debit_count, COUNT(*) FILTER (WHERE t.transaction_type = 'credit') AS credit_count FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING COUNT(*) FILTER (WHERE t.transaction_type = 'debit') > COUNT(*) FILTER (WHERE t.transaction_type = 'credit');",
    solution_columns: ["user_id", "debit_count", "credit_count"],
    tables: ["accounts", "transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_058",
    title: "Highest Transaction Per Account",
    description: "Find the highest transaction amount for each account.",
    difficulty: "hard",
    expected_query:
      "SELECT account_id, MAX(amount) AS max_transaction FROM transactions GROUP BY account_id;",
    solution_columns: ["account_id", "max_transaction"],
    tables: ["transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_059",
    title: "Top 10 Transactions",
    description: "Find the top 10 highest transaction amounts.",
    difficulty: "hard",
    expected_query:
      "SELECT id, account_id, amount FROM transactions ORDER BY amount DESC, id ASC LIMIT 10;",
    solution_columns: ["id", "account_id", "amount"],
    tables: ["transactions"],
    comparison_config: {
      sort_by_columns: [
        { column: "amount", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_060",
    title: "Users With Most Transfers",
    description: "Find top 5 users who initiated the most transfers.",
    difficulty: "hard",
    expected_query:
      "SELECT from_account_id, COUNT(*) AS transfer_count FROM transfers GROUP BY from_account_id ORDER BY transfer_count DESC, from_account_id ASC LIMIT 5;",
    solution_columns: ["from_account_id", "transfer_count"],
    tables: ["transfers"],
    comparison_config: {
      sort_by_columns: [
        { column: "transfer_count", direction: "desc" },
        { column: "from_account_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_061",
    title: "Top 3 Accounts Per User By Balance",
    description: "For each user, find top 3 accounts based on current balance.",
    difficulty: "hard",
    expected_query:
      "WITH ranked AS (SELECT user_id, id, current_balance, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY current_balance DESC, id ASC) AS rn FROM accounts) SELECT user_id, id, current_balance FROM ranked WHERE rn <= 3;",
    solution_columns: ["user_id", "id", "current_balance"],
    tables: ["accounts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_062",
    title: "Users With Increasing Transaction Amounts",
    description:
      "Find users whose transaction amounts increased compared to their previous transaction.",
    difficulty: "hard",
    expected_query:
      "SELECT account_id FROM (SELECT account_id, amount, LAG(amount) OVER (PARTITION BY account_id ORDER BY initiated_at, id) AS prev_amount FROM transactions) x WHERE prev_amount IS NOT NULL AND amount > prev_amount;",
    solution_columns: ["account_id"],
    tables: ["transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_063",
    title: "Accounts With Consistent Growth",
    description:
      "Find accounts where every transaction amount is higher than the previous one.",
    difficulty: "hard",
    expected_query:
      "WITH ranked AS (SELECT account_id, amount, LAG(amount) OVER (PARTITION BY account_id ORDER BY initiated_at, id) AS prev_amount FROM transactions) SELECT account_id FROM ranked GROUP BY account_id HAVING BOOL_AND(prev_amount IS NULL OR amount > prev_amount);",
    solution_columns: ["account_id"],
    tables: ["transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_064",
    title: "Expired KYC Users",
    description: "Find users whose KYC has expired.",
    difficulty: "hard",
    expected_query:
      "SELECT u.id, u.full_name, k.expires_at FROM users u JOIN kyc_records k ON u.id = k.user_id WHERE k.kyc_status = 'expired';",
    solution_columns: ["id", "full_name", "expires_at"],
    tables: ["users", "kyc_records"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_065",
    title: "Users With Multiple Failed Transactions",
    description: "Find users who have more than one failed transaction.",
    difficulty: "hard",
    expected_query:
      "SELECT a.user_id, COUNT(*) AS failed_count FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_status = 'failed' GROUP BY a.user_id HAVING COUNT(*) > 1;",
    solution_columns: ["user_id", "failed_count"],
    tables: ["accounts", "transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_066",
    title: "Users With No Failed Transactions",
    description: "Find users who never had a failed transaction.",
    difficulty: "hard",
    expected_query:
      "SELECT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING COUNT(*) FILTER (WHERE t.transaction_status = 'failed') = 0;",
    solution_columns: ["user_id"],
    tables: ["accounts", "transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_067",
    title: "Accounts With Above Average Transactions",
    description:
      "Find accounts whose average transaction amount is above overall average.",
    difficulty: "hard",
    expected_query:
      "SELECT account_id, AVG(amount) AS avg_amount FROM transactions GROUP BY account_id HAVING AVG(amount) > (SELECT AVG(amount) FROM transactions);",
    solution_columns: ["account_id", "avg_amount"],
    tables: ["transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_068",
    title: "Top 5 Accounts By Average Transaction",
    description: "Find top 5 accounts by average transaction amount.",
    difficulty: "hard",
    expected_query:
      "SELECT account_id, AVG(amount) AS avg_amount FROM transactions GROUP BY account_id ORDER BY avg_amount DESC, account_id ASC LIMIT 5;",
    solution_columns: ["account_id", "avg_amount"],
    tables: ["transactions"],
    comparison_config: {
      sort_by_columns: [
        { column: "avg_amount", direction: "desc" },
        { column: "account_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_069",
    title: "Users With Highest Spending",
    description: "Find top 5 users by total debit transaction amount.",
    difficulty: "hard",
    expected_query:
      "SELECT a.user_id, SUM(t.amount) AS total_spent FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_type = 'debit' GROUP BY a.user_id ORDER BY total_spent DESC, a.user_id ASC LIMIT 5;",
    solution_columns: ["user_id", "total_spent"],
    tables: ["accounts", "transactions"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_spent", direction: "desc" },
        { column: "user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_070",
    title: "Users With Highest Income",
    description: "Find top 5 users by total credit transaction amount.",
    difficulty: "hard",
    expected_query:
      "SELECT a.user_id, SUM(t.amount) AS total_income FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_type = 'credit' GROUP BY a.user_id ORDER BY total_income DESC, a.user_id ASC LIMIT 5;",
    solution_columns: ["user_id", "total_income"],
    tables: ["accounts", "transactions"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_income", direction: "desc" },
        { column: "user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_071",
    title: "Users With Balanced Spending",
    description: "Find users whose debit and credit counts are equal.",
    difficulty: "hard",
    expected_query:
      "SELECT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING COUNT(*) FILTER (WHERE t.transaction_type = 'debit') = COUNT(*) FILTER (WHERE t.transaction_type = 'credit');",
    solution_columns: ["user_id"],
    tables: ["accounts", "transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_072",
    title: "Accounts With Highest Single Transaction",
    description: "Find the highest transaction per account.",
    difficulty: "hard",
    expected_query:
      "SELECT account_id, MAX(amount) AS max_transaction FROM transactions GROUP BY account_id;",
    solution_columns: ["account_id", "max_transaction"],
    tables: ["transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_073",
    title: "Accounts With Consecutive Failures",
    description: "Find accounts with consecutive failed transactions.",
    difficulty: "hard",
    expected_query:
      "WITH ranked AS (SELECT account_id, transaction_status, LAG(transaction_status) OVER (PARTITION BY account_id ORDER BY initiated_at, id) AS prev_status FROM transactions) SELECT DISTINCT account_id FROM ranked WHERE transaction_status = 'failed' AND prev_status = 'failed';",
    solution_columns: ["account_id"],
    tables: ["transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_074",
    title: "Users With High Fraud Activity",
    description: "Find users with more than 3 fraud alerts.",
    difficulty: "hard",
    expected_query:
      "SELECT user_id, COUNT(*) AS fraud_count FROM fraud_alerts GROUP BY user_id HAVING COUNT(*) > 3;",
    solution_columns: ["user_id", "fraud_count"],
    tables: ["fraud_alerts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_075",
    title: "Top 5 Branches By Accounts",
    description: "Find top 5 branches with highest number of accounts.",
    difficulty: "hard",
    expected_query:
      "SELECT primary_branch_id, COUNT(*) AS account_count FROM accounts GROUP BY primary_branch_id ORDER BY account_count DESC, primary_branch_id ASC LIMIT 5;",
    solution_columns: ["primary_branch_id", "account_count"],
    tables: ["accounts"],
    comparison_config: {
      sort_by_columns: [
        { column: "account_count", direction: "desc" },
        { column: "primary_branch_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_076",
    title: "Users With Expiring Cards",
    description: "Find users who have cards expiring within the next 30 days.",
    difficulty: "hard",
    expected_query:
      "SELECT DISTINCT a.user_id FROM cards c JOIN accounts a ON a.id = c.account_id WHERE c.expires_at BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '30 days';",
    solution_columns: ["user_id"],
    tables: ["cards", "accounts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_077",
    title: "Users With Maximum Cards",
    description: "Find users who have the maximum number of cards.",
    difficulty: "hard",
    expected_query:
      "WITH card_counts AS (SELECT a.user_id, COUNT(*) AS card_count FROM cards c JOIN accounts a ON a.id = c.account_id GROUP BY a.user_id) SELECT user_id, card_count FROM card_counts WHERE card_count = (SELECT MAX(card_count) FROM card_counts);",
    solution_columns: ["user_id", "card_count"],
    tables: ["cards", "accounts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_078",
    title: "Accounts With No Transfers",
    description: "Find accounts that have never been used in transfers.",
    difficulty: "hard",
    expected_query:
      "SELECT a.id FROM accounts a LEFT JOIN transfers t ON a.id = t.from_account_id OR a.id = t.to_account_id WHERE t.id IS NULL;",
    solution_columns: ["id"],
    tables: ["accounts", "transfers"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_079",
    title: "Top 5 Users By Transfer Volume",
    description: "Find top 5 users based on total transfer amount sent.",
    difficulty: "hard",
    expected_query:
      "SELECT from_account_id, SUM(amount) AS total_transferred FROM transfers GROUP BY from_account_id ORDER BY total_transferred DESC, from_account_id ASC LIMIT 5;",
    solution_columns: ["from_account_id", "total_transferred"],
    tables: ["transfers"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_transferred", direction: "desc" },
        { column: "from_account_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_080",
    title: "Users With Highest Loan Burden",
    description: "Find top 5 users by total outstanding loan amount.",
    difficulty: "hard",
    expected_query:
      "SELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_loan FROM loans WHERE loan_status = 'active' GROUP BY borrower_user_id ORDER BY total_loan DESC, user_id ASC LIMIT 5;",
    solution_columns: ["user_id", "total_loan"],
    tables: ["loans"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_loan", direction: "desc" },
        { column: "user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_081",
    title: "Top 5 Branches By Average Account Balance",
    description:
      "Find the top 5 branches with the highest average current balance across their accounts.",
    difficulty: "hard",
    expected_query:
      "SELECT b.id, b.branch_name, ROUND(AVG(a.current_balance), 2) AS avg_account_balance FROM branches b JOIN accounts a ON b.id = a.primary_branch_id GROUP BY b.id, b.branch_name ORDER BY avg_account_balance DESC, b.id ASC LIMIT 5;",
    solution_columns: ["id", "branch_name", "avg_account_balance"],
    tables: ["branches", "accounts"],
    comparison_config: {
      sort_by_columns: [
        { column: "avg_account_balance", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_082",
    title: "Users With More Failed Than Posted Transactions",
    description:
      "Find users whose failed transaction count is greater than their posted transaction count.",
    difficulty: "hard",
    expected_query:
      "SELECT u.id, u.full_name, SUM(CASE WHEN t.transaction_status = 'failed' THEN 1 ELSE 0 END) AS failed_txn_count, SUM(CASE WHEN t.transaction_status = 'posted' THEN 1 ELSE 0 END) AS posted_txn_count FROM users u JOIN accounts a ON u.id = a.user_id JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name HAVING SUM(CASE WHEN t.transaction_status = 'failed' THEN 1 ELSE 0 END) > SUM(CASE WHEN t.transaction_status = 'posted' THEN 1 ELSE 0 END);",
    solution_columns: [
      "id",
      "full_name",
      "failed_txn_count",
      "posted_txn_count",
    ],
    tables: ["users", "accounts", "transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_083",
    title: "Loan Products With Above Average Approval Rate",
    description:
      "Find loan products whose approval rate is above the average approval rate across all loan products.",
    difficulty: "hard",
    expected_query:
      "WITH product_approval_rates AS (SELECT lp.id, lp.product_name, 100.0 * SUM(CASE WHEN la.application_status = 'approved' THEN 1 ELSE 0 END) / COUNT(*) AS approval_rate FROM loan_products lp JOIN loan_applications la ON lp.id = la.loan_product_id GROUP BY lp.id, lp.product_name) SELECT id, product_name, ROUND(approval_rate, 2) AS approval_rate FROM product_approval_rates WHERE approval_rate > (SELECT AVG(approval_rate) FROM product_approval_rates);",
    solution_columns: ["id", "product_name", "approval_rate"],
    tables: ["loan_products", "loan_applications"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_084",
    title: "Users With Highest Card Merchant Diversity",
    description:
      "Find the top 10 users who spent at the highest number of distinct merchants.",
    difficulty: "hard",
    expected_query:
      "SELECT u.id, u.full_name, COUNT(DISTINCT ct.merchant_name) AS distinct_merchant_count FROM users u JOIN accounts a ON u.id = a.user_id JOIN cards c ON a.id = c.account_id JOIN card_transactions ct ON c.id = ct.card_id WHERE ct.transaction_status = 'settled' AND ct.merchant_name IS NOT NULL GROUP BY u.id, u.full_name ORDER BY distinct_merchant_count DESC, u.id ASC LIMIT 10;",
    solution_columns: ["id", "full_name", "distinct_merchant_count"],
    tables: ["users", "accounts", "cards", "card_transactions"],
    comparison_config: {
      sort_by_columns: [
        { column: "distinct_merchant_count", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_085",
    title: "Accounts With Transfer Outflow Greater Than Inflow",
    description:
      "Find accounts whose total completed outgoing transfer amount is greater than total completed incoming transfer amount.",
    difficulty: "hard",
    expected_query:
      "WITH outgoing_transfers AS (SELECT from_account_id AS account_id, SUM(amount) AS total_outgoing FROM transfers WHERE transfer_status = 'completed' GROUP BY from_account_id), incoming_transfers AS (SELECT to_account_id AS account_id, SUM(amount) AS total_incoming FROM transfers WHERE transfer_status = 'completed' AND to_account_id IS NOT NULL GROUP BY to_account_id) SELECT a.id, a.account_number, COALESCE(o.total_outgoing, 0) AS total_outgoing, COALESCE(i.total_incoming, 0) AS total_incoming FROM accounts a LEFT JOIN outgoing_transfers o ON a.id = o.account_id LEFT JOIN incoming_transfers i ON a.id = i.account_id WHERE COALESCE(o.total_outgoing, 0) > COALESCE(i.total_incoming, 0);",
    solution_columns: [
      "id",
      "account_number",
      "total_outgoing",
      "total_incoming",
    ],
    tables: ["accounts", "transfers"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_086",
    title: "Top 5 Users By Bill Payment Variety",
    description:
      "Find the top 5 users who paid bills across the highest number of distinct biller categories.",
    difficulty: "hard",
    expected_query:
      "SELECT u.id, u.full_name, COUNT(DISTINCT b.biller_category) AS distinct_biller_categories FROM users u JOIN accounts a ON u.id = a.user_id JOIN bill_payments bp ON a.id = bp.account_id JOIN billers b ON bp.biller_id = b.id WHERE bp.payment_status = 'paid' GROUP BY u.id, u.full_name ORDER BY distinct_biller_categories DESC, u.id ASC LIMIT 5;",
    solution_columns: ["id", "full_name", "distinct_biller_categories"],
    tables: ["users", "accounts", "bill_payments", "billers"],
    comparison_config: {
      sort_by_columns: [
        { column: "distinct_biller_categories", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_087",
    title: "Users With Consecutive Late Repayments",
    description:
      "Find users who have at least two consecutive late loan repayments on the same loan.",
    difficulty: "hard",
    expected_query:
      "WITH repayment_flags AS (SELECT l.borrower_user_id AS user_id, lr.loan_id, lr.installment_number, lr.repayment_status, LAG(lr.repayment_status) OVER (PARTITION BY lr.loan_id ORDER BY lr.installment_number) AS prev_status FROM loan_repayments lr JOIN loans l ON lr.loan_id = l.id) SELECT DISTINCT u.id, u.full_name FROM users u JOIN repayment_flags rf ON u.id = rf.user_id WHERE rf.repayment_status = 'late' AND rf.prev_status = 'late';",
    solution_columns: ["id", "full_name"],
    tables: ["users", "loans", "loan_repayments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_088",
    title: "Top 10 Users By Reward Redemption Rate",
    description:
      "Find the top 10 users with the highest ratio of redeemed points to earned points.",
    difficulty: "hard",
    expected_query:
      "WITH earned AS (SELECT user_id, SUM(points_earned) AS total_points_earned FROM reward_earnings GROUP BY user_id), redeemed AS (SELECT user_id, SUM(points_redeemed) AS total_points_redeemed FROM reward_redemptions GROUP BY user_id) SELECT u.id, u.full_name, ROUND(100.0 * COALESCE(r.total_points_redeemed, 0) / NULLIF(e.total_points_earned, 0), 2) AS redemption_rate FROM users u JOIN earned e ON u.id = e.user_id LEFT JOIN redeemed r ON u.id = r.user_id WHERE e.total_points_earned > 0 ORDER BY redemption_rate DESC, u.id ASC LIMIT 10;",
    solution_columns: ["id", "full_name", "redemption_rate"],
    tables: ["users", "reward_earnings", "reward_redemptions"],
    comparison_config: {
      sort_by_columns: [
        { column: "redemption_rate", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_089",
    title: "Branches With Above Average ATM Failures",
    description:
      "Find branches whose ATM transactions have a failed rate above the overall branch average.",
    difficulty: "hard",
    expected_query:
      "WITH branch_failure_rates AS (SELECT b.id, b.branch_name, 100.0 * SUM(CASE WHEN at.transaction_status = 'failed' THEN 1 ELSE 0 END) / COUNT(*) AS failure_rate FROM branches b JOIN atm_machines am ON b.id = am.branch_id JOIN atm_transactions at ON am.id = at.atm_id GROUP BY b.id, b.branch_name) SELECT id, branch_name, ROUND(failure_rate, 2) AS failure_rate FROM branch_failure_rates WHERE failure_rate > (SELECT AVG(failure_rate) FROM branch_failure_rates);",
    solution_columns: ["id", "branch_name", "failure_rate"],
    tables: ["branches", "atm_machines", "atm_transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_090",
    title: "Users Whose Deposits Exceed Branch Average",
    description:
      "Find users whose total account balance is greater than the average total balance of users in their primary branch.",
    difficulty: "hard",
    expected_query:
      "WITH user_branch_balances AS (SELECT a.primary_branch_id AS branch_id, a.user_id, SUM(a.current_balance) AS total_balance FROM accounts a WHERE a.primary_branch_id IS NOT NULL GROUP BY a.primary_branch_id, a.user_id), branch_avg_balances AS (SELECT branch_id, AVG(total_balance) AS avg_branch_balance FROM user_branch_balances GROUP BY branch_id) SELECT u.id, u.full_name, ub.branch_id, ub.total_balance FROM users u JOIN user_branch_balances ub ON u.id = ub.user_id JOIN branch_avg_balances bb ON ub.branch_id = bb.branch_id WHERE ub.total_balance > bb.avg_branch_balance;",
    solution_columns: ["id", "full_name", "branch_id", "total_balance"],
    tables: ["users", "accounts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_091",
    title: "Top 5 Users By Monthly Net Cashflow",
    description:
      "Find the top 5 users with the highest net cashflow (credits minus debits) for each month.",
    difficulty: "hard",
    expected_query:
      "WITH monthly_user_cashflow AS (SELECT a.user_id, DATE_TRUNC('month', t.posted_at) AS txn_month, SUM(CASE WHEN t.transaction_type = 'credit' THEN t.amount ELSE -t.amount END) AS net_cashflow FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_status = 'posted' AND t.posted_at IS NOT NULL GROUP BY a.user_id, DATE_TRUNC('month', t.posted_at)) SELECT user_id, txn_month, net_cashflow FROM (SELECT user_id, txn_month, net_cashflow, DENSE_RANK() OVER (PARTITION BY txn_month ORDER BY net_cashflow DESC) AS rnk FROM monthly_user_cashflow) ranked WHERE rnk <= 5;",
    solution_columns: ["user_id", "txn_month", "net_cashflow"],
    tables: ["accounts", "transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_092",
    title: "Users More Fraud Than Support Tickets",
    description:
      "Find users whose fraud alert count is greater than their support ticket count.",
    difficulty: "hard",
    expected_query:
      "WITH fraud_counts AS (SELECT user_id, COUNT(*) AS fraud_count FROM fraud_alerts WHERE user_id IS NOT NULL GROUP BY user_id), ticket_counts AS (SELECT user_id, COUNT(*) AS ticket_count FROM support_tickets WHERE user_id IS NOT NULL GROUP BY user_id) SELECT u.id, u.full_name, f.fraud_count, COALESCE(t.ticket_count, 0) AS ticket_count FROM users u JOIN fraud_counts f ON u.id = f.user_id LEFT JOIN ticket_counts t ON u.id = t.user_id WHERE f.fraud_count > COALESCE(t.ticket_count, 0);",
    solution_columns: ["id", "full_name", "fraud_count", "ticket_count"],
    tables: ["users", "fraud_alerts", "support_tickets"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_093",
    title: "Top 10 Users By Loan Exposure Ratio",
    description:
      "Find the top 10 users by loan exposure ratio (outstanding principal divided by deposits).",
    difficulty: "hard",
    expected_query:
      "WITH deposits AS (SELECT user_id, SUM(current_balance) AS total_deposits FROM accounts GROUP BY user_id), exposure AS (SELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_outstanding FROM loans GROUP BY borrower_user_id) SELECT u.id, u.full_name, ROUND(100.0 * e.total_outstanding / NULLIF(d.total_deposits, 0), 2) AS exposure_ratio FROM users u JOIN exposure e ON u.id = e.user_id JOIN deposits d ON u.id = d.user_id WHERE d.total_deposits > 0 ORDER BY exposure_ratio DESC, u.id ASC LIMIT 10;",
    solution_columns: ["id", "full_name", "exposure_ratio"],
    tables: ["users", "accounts", "loans"],
    comparison_config: {
      sort_by_columns: [
        { column: "exposure_ratio", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_094",
    title: "Users With Cross Product Portfolio",
    description:
      "Find users who have accounts, loans, and at least one deposit product.",
    difficulty: "hard",
    expected_query:
      "SELECT DISTINCT u.id, u.full_name FROM users u JOIN accounts a ON u.id = a.user_id JOIN loans l ON u.id = l.borrower_user_id LEFT JOIN fixed_deposits fd ON u.id = fd.user_id LEFT JOIN recurring_deposits rd ON u.id = rd.user_id WHERE fd.id IS NOT NULL OR rd.id IS NOT NULL;",
    solution_columns: ["id", "full_name"],
    tables: [
      "users",
      "accounts",
      "loans",
      "fixed_deposits",
      "recurring_deposits",
    ],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_095",
    title: "Top 5 Branches By Customer Product Diversity",
    description:
      "Find the top 5 branches whose customers use the highest number of distinct account product types.",
    difficulty: "hard",
    expected_query:
      "SELECT b.id, b.branch_name, COUNT(DISTINCT ap.product_type) AS distinct_product_types FROM branches b JOIN accounts a ON b.id = a.primary_branch_id JOIN account_products ap ON a.product_id = ap.id GROUP BY b.id, b.branch_name ORDER BY distinct_product_types DESC, b.id ASC LIMIT 5;",
    solution_columns: ["id", "branch_name", "distinct_product_types"],
    tables: ["branches", "accounts", "account_products"],
    comparison_config: {
      sort_by_columns: [
        { column: "distinct_product_types", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_096",
    title: "Users With High Merchant Concentration",
    description:
      "Find users whose top merchant accounts for more than 50 percent of their total settled card spend.",
    difficulty: "hard",
    expected_query:
      "WITH merchant_spend AS (SELECT a.user_id, ct.merchant_name, SUM(ct.billing_amount) AS merchant_total FROM card_transactions ct JOIN cards c ON ct.card_id = c.id JOIN accounts a ON c.account_id = a.id WHERE ct.transaction_status = 'settled' GROUP BY a.user_id, ct.merchant_name), ranked_spend AS (SELECT user_id, merchant_name, merchant_total, SUM(merchant_total) OVER (PARTITION BY user_id) AS total_spend, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY merchant_total DESC) AS rn FROM merchant_spend) SELECT u.id, u.full_name, rs.merchant_name, ROUND(100.0 * rs.merchant_total / rs.total_spend, 2) AS concentration_pct FROM users u JOIN ranked_spend rs ON u.id = rs.user_id WHERE rs.rn = 1 AND 100.0 * rs.merchant_total / rs.total_spend > 50;",
    solution_columns: ["id", "full_name", "merchant_name", "concentration_pct"],
    tables: ["users", "accounts", "cards", "card_transactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_097",
    title: "Top 10 Users By Account Activity Diversity",
    description:
      "Find the top 10 users by number of distinct transaction channels used.",
    difficulty: "hard",
    expected_query:
      "SELECT u.id, u.full_name, COUNT(DISTINCT t.channel) AS distinct_channels_used FROM users u JOIN accounts a ON u.id = a.user_id JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name ORDER BY distinct_channels_used DESC, u.id ASC LIMIT 10;",
    solution_columns: ["id", "full_name", "distinct_channels_used"],
    tables: ["users", "accounts", "transactions"],
    comparison_config: {
      sort_by_columns: [
        { column: "distinct_channels_used", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_098",
    title: "Users More Complaints Than Average",
    description:
      "Find users whose complaint count is above the average complaint count among users who raised complaints.",
    difficulty: "hard",
    expected_query:
      "WITH complaint_counts AS (SELECT user_id, COUNT(*) AS complaint_count FROM complaints WHERE user_id IS NOT NULL GROUP BY user_id) SELECT u.id, u.full_name, cc.complaint_count FROM users u JOIN complaint_counts cc ON u.id = cc.user_id WHERE cc.complaint_count > (SELECT AVG(complaint_count) FROM complaint_counts);",
    solution_columns: ["id", "full_name", "complaint_count"],
    tables: ["users", "complaints"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "BANK_099",
    title: "Branches With Highest Fraud Rate",
    description:
      "Find the top 5 branches with the highest fraud alert rate per 100 customers.",
    difficulty: "hard",
    expected_query:
      "WITH branch_customers AS (SELECT primary_branch_id AS branch_id, COUNT(DISTINCT user_id) AS customer_count FROM accounts WHERE primary_branch_id IS NOT NULL GROUP BY primary_branch_id), branch_fraud AS (SELECT a.primary_branch_id AS branch_id, COUNT(f.id) AS fraud_count FROM fraud_alerts f JOIN accounts a ON f.account_id = a.id WHERE a.primary_branch_id IS NOT NULL GROUP BY a.primary_branch_id) SELECT b.id, b.branch_name, ROUND(100.0 * COALESCE(bf.fraud_count, 0) / NULLIF(bc.customer_count, 0), 2) AS fraud_rate_per_100_customers FROM branches b JOIN branch_customers bc ON b.id = bc.branch_id LEFT JOIN branch_fraud bf ON b.id = bf.branch_id ORDER BY fraud_rate_per_100_customers DESC, b.id ASC LIMIT 5;",
    solution_columns: ["id", "branch_name", "fraud_rate_per_100_customers"],
    tables: ["branches", "accounts", "fraud_alerts"],
    comparison_config: {
      sort_by_columns: [
        { column: "fraud_rate_per_100_customers", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "BANK_100",
    title: "Users More Active Than Their Branch Average",
    description:
      "Find users whose transaction count is greater than the average transaction count of users in their branch.",
    difficulty: "hard",
    expected_query:
      "WITH user_txn_counts AS (SELECT a.primary_branch_id AS branch_id, a.user_id, COUNT(t.id) AS txn_count FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE a.primary_branch_id IS NOT NULL GROUP BY a.primary_branch_id, a.user_id), branch_avg_txn AS (SELECT branch_id, AVG(txn_count) AS avg_txn_count FROM user_txn_counts GROUP BY branch_id) SELECT u.id, u.full_name, utc.branch_id, utc.txn_count FROM users u JOIN user_txn_counts utc ON u.id = utc.user_id JOIN branch_avg_txn bat ON utc.branch_id = bat.branch_id WHERE utc.txn_count > bat.avg_txn_count;",
    solution_columns: ["id", "full_name", "branch_id", "txn_count"],
    tables: ["users", "accounts", "transactions"],
    comparison_config: {},
  },
];

export const hints = [
  {
    code: "BANK_001",
    hints: [
      {
        hint_order: 1,
        content: "Count all users from one table.",
      },
      {
        hint_order: 2,
        content: "Use an aggregate function.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) from users.",
      },
    ],
  },
  {
    code: "BANK_002",
    hints: [
      {
        hint_order: 1,
        content: "Filter active users first.",
      },
      {
        hint_order: 2,
        content: "Use the is_active column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with WHERE is_active = true.",
      },
    ],
  },
  {
    code: "BANK_003",
    hints: [
      {
        hint_order: 1,
        content: "Filter verified users first.",
      },
      {
        hint_order: 2,
        content: "Use the is_verified column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with WHERE is_verified = true.",
      },
    ],
  },
  {
    code: "BANK_004",
    hints: [
      {
        hint_order: 1,
        content: "Only active branches should be listed.",
      },
      {
        hint_order: 2,
        content: "Return branch code, name, city, and country.",
      },
      {
        hint_order: 3,
        content: "Filter by is_active and sort by branch_code.",
      },
    ],
  },
  {
    code: "BANK_005",
    hints: [
      {
        hint_order: 1,
        content: "Look at account products only.",
      },
      {
        hint_order: 2,
        content: "Filter rows where product_type is savings.",
      },
      {
        hint_order: 3,
        content: "Select requested columns and ORDER BY id.",
      },
    ],
  },
  {
    code: "BANK_006",
    hints: [
      {
        hint_order: 1,
        content: "Count only accounts with active status.",
      },
      {
        hint_order: 2,
        content: "Use account_status column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with WHERE account_status = 'active'.",
      },
    ],
  },
  {
    code: "BANK_007",
    hints: [
      {
        hint_order: 1,
        content: "This is a date filter question.",
      },
      {
        hint_order: 2,
        content: "Compare expires_at with a fixed date.",
      },
      {
        hint_order: 3,
        content: "Use WHERE expires_at < DATE '2027-01-01'.",
      },
    ],
  },
  {
    code: "BANK_008",
    hints: [
      {
        hint_order: 1,
        content: "Look in the kyc_records table.",
      },
      {
        hint_order: 2,
        content: "Keep only pending KYC rows.",
      },
      {
        hint_order: 3,
        content: "Filter by kyc_status and sort by id.",
      },
    ],
  },
  {
    code: "BANK_009",
    hints: [
      {
        hint_order: 1,
        content: "Only failed transactions are needed.",
      },
      {
        hint_order: 2,
        content: "Return reference, account, amount, and time.",
      },
      {
        hint_order: 3,
        content: "Filter by transaction_status and sort by initiated_at DESC.",
      },
    ],
  },
  {
    code: "BANK_010",
    hints: [
      {
        hint_order: 1,
        content: "Use the fraud_alerts table only.",
      },
      {
        hint_order: 2,
        content: "Keep only open alerts.",
      },
      {
        hint_order: 3,
        content: "Filter by alert_status and sort by detected_at DESC.",
      },
    ],
  },
  {
    code: "BANK_011",
    hints: [
      {
        hint_order: 1,
        content: "Find users who are not active.",
      },
      {
        hint_order: 2,
        content: "Use the is_active boolean column.",
      },
      {
        hint_order: 3,
        content: "WHERE is_active = false and ORDER BY id.",
      },
    ],
  },
  {
    code: "BANK_012",
    hints: [
      {
        hint_order: 1,
        content: "Count only blocked cards.",
      },
      {
        hint_order: 2,
        content: "Use the card_status column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with WHERE card_status = 'blocked'.",
      },
    ],
  },
  {
    code: "BANK_013",
    hints: [
      {
        hint_order: 1,
        content: "Use the atm_machines table.",
      },
      {
        hint_order: 2,
        content: "Keep rows where ATM status is active.",
      },
      {
        hint_order: 3,
        content: "Filter by atm_status and sort by atm_code.",
      },
    ],
  },
  {
    code: "BANK_014",
    hints: [
      {
        hint_order: 1,
        content: "Look at beneficiary type.",
      },
      {
        hint_order: 2,
        content: "Only domestic_external rows are needed.",
      },
      {
        hint_order: 3,
        content: "Use WHERE beneficiary_type = 'domestic_external'.",
      },
    ],
  },
  {
    code: "BANK_015",
    hints: [
      {
        hint_order: 1,
        content: "Find rejected loan applications only.",
      },
      {
        hint_order: 2,
        content: "Use the application_status column.",
      },
      {
        hint_order: 3,
        content: "Filter by rejected and sort by decision_at DESC.",
      },
    ],
  },
  {
    code: "BANK_016",
    hints: [
      {
        hint_order: 1,
        content: "Count only closed loans.",
      },
      {
        hint_order: 2,
        content: "Use loan_status for filtering.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with WHERE loan_status = 'closed'.",
      },
    ],
  },
  {
    code: "BANK_017",
    hints: [
      {
        hint_order: 1,
        content: "Use the billers table.",
      },
      {
        hint_order: 2,
        content: "Keep only active billers.",
      },
      {
        hint_order: 3,
        content: "Filter by is_active and sort by biller_name.",
      },
    ],
  },
  {
    code: "BANK_018",
    hints: [
      {
        hint_order: 1,
        content: "This needs two severity levels.",
      },
      {
        hint_order: 2,
        content: "Use high and critical values.",
      },
      {
        hint_order: 3,
        content: "WHERE severity IN ('high', 'critical').",
      },
    ],
  },
  {
    code: "BANK_019",
    hints: [
      {
        hint_order: 1,
        content: "Filter users by country.",
      },
      {
        hint_order: 2,
        content: "Only rows with country = India are needed.",
      },
      {
        hint_order: 3,
        content: "Use WHERE country = 'India' and ORDER BY id.",
      },
    ],
  },
  {
    code: "BANK_020",
    hints: [
      {
        hint_order: 1,
        content: "Look at support tickets with open status.",
      },
      {
        hint_order: 2,
        content: "Return ticket details and priority.",
      },
      {
        hint_order: 3,
        content:
          "Filter by ticket_status = 'open' and sort by created_at DESC.",
      },
    ],
  },
  {
    code: "BANK_021",
    hints: [
      {
        hint_order: 1,
        content: "Count accounts per user.",
      },
      {
        hint_order: 2,
        content: "Group by user_id.",
      },
      {
        hint_order: 3,
        content: "Use HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "BANK_022",
    hints: [
      {
        hint_order: 1,
        content: "Add balances across accounts for each user.",
      },
      {
        hint_order: 2,
        content: "Use SUM(current_balance).",
      },
      {
        hint_order: 3,
        content: "GROUP BY user_id and ORDER BY total balance DESC.",
      },
    ],
  },
  {
    code: "BANK_023",
    hints: [
      {
        hint_order: 1,
        content: "Count transactions by channel.",
      },
      {
        hint_order: 2,
        content: "Group on the channel column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with GROUP BY channel.",
      },
    ],
  },
  {
    code: "BANK_024",
    hints: [
      {
        hint_order: 1,
        content: "Only active accounts should be included.",
      },
      {
        hint_order: 2,
        content: "Average the current_balance column.",
      },
      {
        hint_order: 3,
        content:
          "Use AVG(current_balance) with WHERE account_status = 'active'.",
      },
    ],
  },
  {
    code: "BANK_025",
    hints: [
      {
        hint_order: 1,
        content: "Count cards for each network.",
      },
      {
        hint_order: 2,
        content: "Group by network.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with GROUP BY network.",
      },
    ],
  },
  {
    code: "BANK_026",
    hints: [
      {
        hint_order: 1,
        content: "Count ATM machines city-wise.",
      },
      {
        hint_order: 2,
        content: "Use the city column for grouping.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with GROUP BY city.",
      },
    ],
  },
  {
    code: "BANK_027",
    hints: [
      {
        hint_order: 1,
        content: "This is a total of all transfer fees.",
      },
      {
        hint_order: 2,
        content: "Use the fee_amount column.",
      },
      {
        hint_order: 3,
        content: "SUM(fee_amount) from transfers.",
      },
    ],
  },
  {
    code: "BANK_028",
    hints: [
      {
        hint_order: 1,
        content: "Count only approved loan applications.",
      },
      {
        hint_order: 2,
        content: "Use application_status column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with WHERE application_status = 'approved'.",
      },
    ],
  },
  {
    code: "BANK_029",
    hints: [
      {
        hint_order: 1,
        content: "Count fixed deposits by status.",
      },
      {
        hint_order: 2,
        content: "Group by fd_status.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with GROUP BY fd_status.",
      },
    ],
  },
  {
    code: "BANK_030",
    hints: [
      {
        hint_order: 1,
        content: "Add all cashback redeemed values.",
      },
      {
        hint_order: 2,
        content: "Use the reward_redemptions table.",
      },
      {
        hint_order: 3,
        content: "SUM(cashback_amount).",
      },
    ],
  },
  {
    code: "BANK_031",
    hints: [
      {
        hint_order: 1,
        content: "Join users with accounts first.",
      },
      {
        hint_order: 2,
        content: "Count accounts per user.",
      },
      {
        hint_order: 3,
        content: "GROUP BY user and use HAVING COUNT(*) > 2.",
      },
    ],
  },
  {
    code: "BANK_032",
    hints: [
      {
        hint_order: 1,
        content: "Find total balance branch-wise.",
      },
      {
        hint_order: 2,
        content: "Use SUM(current_balance).",
      },
      {
        hint_order: 3,
        content: "GROUP BY primary_branch_id and sort descending.",
      },
    ],
  },
  {
    code: "BANK_033",
    hints: [
      {
        hint_order: 1,
        content: "Count posted transactions per account.",
      },
      {
        hint_order: 2,
        content: "Filter by transaction_status = posted.",
      },
      {
        hint_order: 3,
        content: "GROUP BY account_id and ORDER BY count DESC.",
      },
    ],
  },
  {
    code: "BANK_034",
    hints: [
      {
        hint_order: 1,
        content: "Find total transfer amount by sender account.",
      },
      {
        hint_order: 2,
        content: "Use from_account_id for grouping.",
      },
      {
        hint_order: 3,
        content: "SUM(amount) with GROUP BY from_account_id.",
      },
    ],
  },
  {
    code: "BANK_035",
    hints: [
      {
        hint_order: 1,
        content: "Join accounts with cards.",
      },
      {
        hint_order: 2,
        content: "Count cards per account.",
      },
      {
        hint_order: 3,
        content: "GROUP BY account_id and use COUNT(*).",
      },
    ],
  },
  {
    code: "BANK_036",
    hints: [
      {
        hint_order: 1,
        content: "Use loan applications table only.",
      },
      {
        hint_order: 2,
        content: "Group by application_status.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with GROUP BY application_status.",
      },
    ],
  },
  {
    code: "BANK_037",
    hints: [
      {
        hint_order: 1,
        content: "Average approved loan amount by product.",
      },
      {
        hint_order: 2,
        content: "Filter only approved applications.",
      },
      {
        hint_order: 3,
        content: "AVG(requested_amount) grouped by loan_product_id.",
      },
    ],
  },
  {
    code: "BANK_038",
    hints: [
      {
        hint_order: 1,
        content: "Find repayment counts per loan.",
      },
      {
        hint_order: 2,
        content: "Use loan_repayments table.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with GROUP BY loan_id.",
      },
    ],
  },
  {
    code: "BANK_039",
    hints: [
      {
        hint_order: 1,
        content: "Count fraud alerts per severity.",
      },
      {
        hint_order: 2,
        content: "Group by severity column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with GROUP BY severity.",
      },
    ],
  },
  {
    code: "BANK_040",
    hints: [
      {
        hint_order: 1,
        content: "Sum fraud amounts by user.",
      },
      {
        hint_order: 2,
        content: "Use fraud_alerts table.",
      },
      {
        hint_order: 3,
        content: "SUM(suspected_amount) grouped by user_id.",
      },
    ],
  },
  {
    code: "BANK_041",
    hints: [
      {
        hint_order: 1,
        content: "Count bill payments per user.",
      },
      {
        hint_order: 2,
        content: "Join accounts to bill_payments.",
      },
      {
        hint_order: 3,
        content: "GROUP BY user_id and COUNT(*).",
      },
    ],
  },
  {
    code: "BANK_042",
    hints: [
      {
        hint_order: 1,
        content: "Find total paid bill amount by biller.",
      },
      {
        hint_order: 2,
        content: "Filter only paid status.",
      },
      {
        hint_order: 3,
        content: "SUM(amount_paid) grouped by biller_id.",
      },
    ],
  },
  {
    code: "BANK_043",
    hints: [
      {
        hint_order: 1,
        content: "Count support tickets by priority.",
      },
      {
        hint_order: 2,
        content: "Group by priority column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with GROUP BY priority.",
      },
    ],
  },
  {
    code: "BANK_044",
    hints: [
      {
        hint_order: 1,
        content: "Count complaints per complaint type.",
      },
      {
        hint_order: 2,
        content: "Use complaints table.",
      },
      {
        hint_order: 3,
        content: "GROUP BY complaint_type.",
      },
    ],
  },
  {
    code: "BANK_045",
    hints: [
      {
        hint_order: 1,
        content: "Find total FD amount per user.",
      },
      {
        hint_order: 2,
        content: "Use SUM(principal_amount).",
      },
      {
        hint_order: 3,
        content: "GROUP BY user_id.",
      },
    ],
  },
  {
    code: "BANK_046",
    hints: [
      {
        hint_order: 1,
        content: "Find recurring deposit total per user.",
      },
      {
        hint_order: 2,
        content: "Sum installment_amount values.",
      },
      {
        hint_order: 3,
        content: "GROUP BY user_id and sort descending.",
      },
    ],
  },
  {
    code: "BANK_047",
    hints: [
      {
        hint_order: 1,
        content: "Count reward earnings per user.",
      },
      {
        hint_order: 2,
        content: "Use reward_earnings table.",
      },
      {
        hint_order: 3,
        content: "SUM(points_earned) grouped by user_id.",
      },
    ],
  },
  {
    code: "BANK_048",
    hints: [
      {
        hint_order: 1,
        content: "Find cashback redeemed per user.",
      },
      {
        hint_order: 2,
        content: "Use reward_redemptions table.",
      },
      {
        hint_order: 3,
        content: "SUM(cashback_amount) with GROUP BY user_id.",
      },
    ],
  },
  {
    code: "BANK_049",
    hints: [
      {
        hint_order: 1,
        content: "Count ATM transactions per machine.",
      },
      {
        hint_order: 2,
        content: "Group by atm_id.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with GROUP BY atm_id.",
      },
    ],
  },
  {
    code: "BANK_050",
    hints: [
      {
        hint_order: 1,
        content: "Find failed ATM transactions only.",
      },
      {
        hint_order: 2,
        content: "Filter by transaction_status = failed.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) grouped by atm_id.",
      },
    ],
  },
  {
    code: "BANK_051",
    hints: [
      {
        hint_order: 1,
        content: "Join users with accounts and transactions.",
      },
      {
        hint_order: 2,
        content: "Count transactions per user.",
      },
      {
        hint_order: 3,
        content: "GROUP BY user_id and use HAVING COUNT(*) > 10.",
      },
    ],
  },
  {
    code: "BANK_052",
    hints: [
      {
        hint_order: 1,
        content: "Find users with total balance above threshold.",
      },
      {
        hint_order: 2,
        content: "Use SUM(current_balance).",
      },
      {
        hint_order: 3,
        content: "GROUP BY user_id and HAVING SUM(...) > value.",
      },
    ],
  },
  {
    code: "BANK_053",
    hints: [
      {
        hint_order: 1,
        content: "Join cards with card transactions.",
      },
      {
        hint_order: 2,
        content: "Sum billing amount by card.",
      },
      {
        hint_order: 3,
        content: "GROUP BY card_id and ORDER BY total DESC.",
      },
    ],
  },
  {
    code: "BANK_054",
    hints: [
      {
        hint_order: 1,
        content: "Count beneficiaries per user.",
      },
      {
        hint_order: 2,
        content: "Use beneficiaries table.",
      },
      {
        hint_order: 3,
        content: "GROUP BY user_id.",
      },
    ],
  },
  {
    code: "BANK_055",
    hints: [
      {
        hint_order: 1,
        content: "Find users with multiple beneficiaries.",
      },
      {
        hint_order: 2,
        content: "Count beneficiaries per user.",
      },
      {
        hint_order: 3,
        content: "Use HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "BANK_056",
    hints: [
      {
        hint_order: 1,
        content: "Find branches with multiple ATMs.",
      },
      {
        hint_order: 2,
        content: "Count ATMs branch-wise.",
      },
      {
        hint_order: 3,
        content: "GROUP BY branch_id and HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "BANK_057",
    hints: [
      {
        hint_order: 1,
        content: "Count active loans per user.",
      },
      {
        hint_order: 2,
        content: "Filter by loan_status = active.",
      },
      {
        hint_order: 3,
        content: "GROUP BY borrower_user_id.",
      },
    ],
  },
  {
    code: "BANK_058",
    hints: [
      {
        hint_order: 1,
        content: "Find total outstanding loan amount by user.",
      },
      {
        hint_order: 2,
        content: "Use SUM(outstanding_principal).",
      },
      {
        hint_order: 3,
        content: "GROUP BY borrower_user_id.",
      },
    ],
  },
  {
    code: "BANK_059",
    hints: [
      {
        hint_order: 1,
        content: "Find users with multiple loan applications.",
      },
      {
        hint_order: 2,
        content: "Count applications per user.",
      },
      {
        hint_order: 3,
        content: "HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "BANK_060",
    hints: [
      {
        hint_order: 1,
        content: "Count fraud alerts per account.",
      },
      {
        hint_order: 2,
        content: "Use fraud_alerts table.",
      },
      {
        hint_order: 3,
        content: "GROUP BY account_id and ORDER BY count DESC.",
      },
    ],
  },
  {
    code: "BANK_061",
    hints: [
      {
        hint_order: 1,
        content: "Join users with accounts and transactions.",
      },
      {
        hint_order: 2,
        content: "Find the latest transaction per user.",
      },
      {
        hint_order: 3,
        content: "Use MAX(posted_at) with GROUP BY user_id.",
      },
    ],
  },
  {
    code: "BANK_062",
    hints: [
      {
        hint_order: 1,
        content: "Find users with transactions in multiple channels.",
      },
      {
        hint_order: 2,
        content: "Count distinct channel values.",
      },
      {
        hint_order: 3,
        content: "HAVING COUNT(DISTINCT channel) > 1.",
      },
    ],
  },
  {
    code: "BANK_063",
    hints: [
      {
        hint_order: 1,
        content: "Compare debit and credit totals per account.",
      },
      {
        hint_order: 2,
        content: "Use conditional SUM with CASE.",
      },
      {
        hint_order: 3,
        content: "Aggregate debits and credits separately.",
      },
    ],
  },
  {
    code: "BANK_064",
    hints: [
      {
        hint_order: 1,
        content: "Find top users by total transaction amount.",
      },
      {
        hint_order: 2,
        content: "Join accounts and transactions.",
      },
      {
        hint_order: 3,
        content: "SUM(amount) grouped by user_id.",
      },
    ],
  },
  {
    code: "BANK_065",
    hints: [
      {
        hint_order: 1,
        content: "Use transfer table only.",
      },
      {
        hint_order: 2,
        content: "Find accounts sending to multiple receivers.",
      },
      {
        hint_order: 3,
        content: "COUNT(DISTINCT to_account_id).",
      },
    ],
  },
  {
    code: "BANK_066",
    hints: [
      {
        hint_order: 1,
        content: "Find users with multiple card types.",
      },
      {
        hint_order: 2,
        content: "Count distinct card_type values.",
      },
      {
        hint_order: 3,
        content: "HAVING COUNT(DISTINCT card_type) > 1.",
      },
    ],
  },
  {
    code: "BANK_067",
    hints: [
      {
        hint_order: 1,
        content: "Find users with both debit and credit cards.",
      },
      {
        hint_order: 2,
        content: "Use COUNT DISTINCT on card_type.",
      },
      {
        hint_order: 3,
        content: "Look for at least 2 unique types.",
      },
    ],
  },
  {
    code: "BANK_068",
    hints: [
      {
        hint_order: 1,
        content: "Find loans with late repayments.",
      },
      {
        hint_order: 2,
        content: "Filter repayment_status = late.",
      },
      {
        hint_order: 3,
        content: "GROUP BY loan_id and COUNT(*).",
      },
    ],
  },
  {
    code: "BANK_069",
    hints: [
      {
        hint_order: 1,
        content: "Find users with multiple active loans.",
      },
      {
        hint_order: 2,
        content: "Filter active loans first.",
      },
      {
        hint_order: 3,
        content: "GROUP BY borrower_user_id and HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "BANK_070",
    hints: [
      {
        hint_order: 1,
        content: "Compare approved vs rejected applications.",
      },
      {
        hint_order: 2,
        content: "Use CASE inside COUNT or SUM.",
      },
      {
        hint_order: 3,
        content: "Aggregate both statuses together.",
      },
    ],
  },
  {
    code: "BANK_071",
    hints: [
      {
        hint_order: 1,
        content: "Find users with multiple biller categories.",
      },
      {
        hint_order: 2,
        content: "Join accounts, bill payments, and billers.",
      },
      {
        hint_order: 3,
        content: "COUNT(DISTINCT biller_category).",
      },
    ],
  },
  {
    code: "BANK_072",
    hints: [
      {
        hint_order: 1,
        content: "Find users paying bills from multiple accounts.",
      },
      {
        hint_order: 2,
        content: "Count distinct account_id values.",
      },
      {
        hint_order: 3,
        content: "GROUP BY user_id with HAVING.",
      },
    ],
  },
  {
    code: "BANK_073",
    hints: [
      {
        hint_order: 1,
        content: "Find users with repeated complaints.",
      },
      {
        hint_order: 2,
        content: "Count complaints per user.",
      },
      {
        hint_order: 3,
        content: "HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "BANK_074",
    hints: [
      {
        hint_order: 1,
        content: "Find users with both complaint and support tickets.",
      },
      {
        hint_order: 2,
        content: "Join aggregated complaint and ticket sets.",
      },
      {
        hint_order: 3,
        content: "Use INNER JOIN on user_id.",
      },
    ],
  },
  {
    code: "BANK_075",
    hints: [
      {
        hint_order: 1,
        content: "Compare reward earned and redeemed points.",
      },
      {
        hint_order: 2,
        content: "Aggregate each separately.",
      },
      {
        hint_order: 3,
        content: "Join on user_id and compare totals.",
      },
    ],
  },
  {
    code: "BANK_076",
    hints: [
      {
        hint_order: 1,
        content: "Find users with multiple FD accounts.",
      },
      {
        hint_order: 2,
        content: "Count fixed deposits per user.",
      },
      {
        hint_order: 3,
        content: "HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "BANK_077",
    hints: [
      {
        hint_order: 1,
        content: "Find users with both FD and RD products.",
      },
      {
        hint_order: 2,
        content: "Join fixed and recurring deposit users.",
      },
      {
        hint_order: 3,
        content: "Use INNER JOIN on user_id.",
      },
    ],
  },
  {
    code: "BANK_078",
    hints: [
      {
        hint_order: 1,
        content: "Find branches with high ATM failure count.",
      },
      {
        hint_order: 2,
        content: "Join ATMs and ATM transactions.",
      },
      {
        hint_order: 3,
        content: "Filter failed status and GROUP BY branch.",
      },
    ],
  },
  {
    code: "BANK_079",
    hints: [
      {
        hint_order: 1,
        content: "Find accounts with multiple fraud alerts.",
      },
      {
        hint_order: 2,
        content: "Count alerts per account.",
      },
      {
        hint_order: 3,
        content: "HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "BANK_080",
    hints: [
      {
        hint_order: 1,
        content: "Find users linked to multiple branches.",
      },
      {
        hint_order: 2,
        content: "Count distinct primary_branch_id.",
      },
      {
        hint_order: 3,
        content: "HAVING COUNT(DISTINCT ...) > 1.",
      },
    ],
  },
  {
    code: "BANK_081",
    hints: [
      {
        hint_order: 1,
        content: "Find average balance branch-wise.",
      },
      {
        hint_order: 2,
        content: "Join branches and accounts.",
      },
      {
        hint_order: 3,
        content: "AVG(current_balance) with GROUP BY branch.",
      },
    ],
  },
  {
    code: "BANK_082",
    hints: [
      {
        hint_order: 1,
        content: "Compare failed vs successful transactions per user.",
      },
      {
        hint_order: 2,
        content: "Use conditional COUNT with CASE or FILTER.",
      },
      {
        hint_order: 3,
        content: "HAVING failed_count > success_count.",
      },
    ],
  },
  {
    code: "BANK_083",
    hints: [
      {
        hint_order: 1,
        content: "Calculate approval rate per loan product.",
      },
      {
        hint_order: 2,
        content: "Use approved / total applications.",
      },
      {
        hint_order: 3,
        content: "Compare with average approval rate.",
      },
    ],
  },
  {
    code: "BANK_084",
    hints: [
      {
        hint_order: 1,
        content: "Find users spending across many merchants.",
      },
      {
        hint_order: 2,
        content: "Count distinct merchant_name values.",
      },
      {
        hint_order: 3,
        content: "Join cards → transactions → accounts.",
      },
    ],
  },
  {
    code: "BANK_085",
    hints: [
      {
        hint_order: 1,
        content: "Compare transfer inflow vs outflow per account.",
      },
      {
        hint_order: 2,
        content: "Aggregate sent and received amounts separately.",
      },
      {
        hint_order: 3,
        content: "Use from_account_id and to_account_id.",
      },
    ],
  },
  {
    code: "BANK_086",
    hints: [
      {
        hint_order: 1,
        content: "Find users paying across multiple biller categories.",
      },
      {
        hint_order: 2,
        content: "Join billers table.",
      },
      {
        hint_order: 3,
        content: "COUNT(DISTINCT biller_category).",
      },
    ],
  },
  {
    code: "BANK_087",
    hints: [
      {
        hint_order: 1,
        content: "Find consecutive late repayments.",
      },
      {
        hint_order: 2,
        content: "Use window function like LAG.",
      },
      {
        hint_order: 3,
        content: "Compare current row with previous repayment.",
      },
    ],
  },
  {
    code: "BANK_088",
    hints: [
      {
        hint_order: 1,
        content: "Compare earned vs redeemed rewards.",
      },
      {
        hint_order: 2,
        content: "Aggregate both tables by user.",
      },
      {
        hint_order: 3,
        content: "Compute redemption percentage.",
      },
    ],
  },
  {
    code: "BANK_089",
    hints: [
      {
        hint_order: 1,
        content: "Find branches with high ATM fraud or failure rate.",
      },
      {
        hint_order: 2,
        content: "Join branch → ATM → transactions.",
      },
      {
        hint_order: 3,
        content: "Compare against branch average.",
      },
    ],
  },
  {
    code: "BANK_090",
    hints: [
      {
        hint_order: 1,
        content: "Find users above branch average balance.",
      },
      {
        hint_order: 2,
        content: "Use AVG per branch.",
      },
      {
        hint_order: 3,
        content: "Compare user total with branch average.",
      },
    ],
  },
  {
    code: "BANK_091",
    hints: [
      {
        hint_order: 1,
        content: "Find top users by monthly cashflow.",
      },
      {
        hint_order: 2,
        content: "Aggregate by month and user.",
      },
      {
        hint_order: 3,
        content: "Use DENSE_RANK or ROW_NUMBER.",
      },
    ],
  },
  {
    code: "BANK_092",
    hints: [
      {
        hint_order: 1,
        content: "Compare fraud alerts and support tickets.",
      },
      {
        hint_order: 2,
        content: "Count both metrics per user.",
      },
      {
        hint_order: 3,
        content: "HAVING fraud_count > ticket_count.",
      },
    ],
  },
  {
    code: "BANK_093",
    hints: [
      {
        hint_order: 1,
        content: "Compare deposits vs loan exposure.",
      },
      {
        hint_order: 2,
        content: "Aggregate deposits and loans separately.",
      },
      {
        hint_order: 3,
        content: "Compute loan-to-deposit ratio.",
      },
    ],
  },
  {
    code: "BANK_094",
    hints: [
      {
        hint_order: 1,
        content: "Find users owning multiple financial products.",
      },
      {
        hint_order: 2,
        content: "Check accounts, loans, and deposits.",
      },
      {
        hint_order: 3,
        content: "Use EXISTS or joins across product tables.",
      },
    ],
  },
  {
    code: "BANK_095",
    hints: [
      {
        hint_order: 1,
        content: "Find branches with product diversity.",
      },
      {
        hint_order: 2,
        content: "Count distinct product types.",
      },
      {
        hint_order: 3,
        content: "GROUP BY branch and sort descending.",
      },
    ],
  },
  {
    code: "BANK_096",
    hints: [
      {
        hint_order: 1,
        content: "Find merchant concentration per user.",
      },
      {
        hint_order: 2,
        content: "Compute merchant spend share.",
      },
      {
        hint_order: 3,
        content: "Use window functions for total spend.",
      },
    ],
  },
  {
    code: "BANK_097",
    hints: [
      {
        hint_order: 1,
        content: "Find users using many transaction channels.",
      },
      {
        hint_order: 2,
        content: "Count DISTINCT channel values.",
      },
      {
        hint_order: 3,
        content: "Join through accounts table.",
      },
    ],
  },
  {
    code: "BANK_098",
    hints: [
      {
        hint_order: 1,
        content: "Find users above average complaint count.",
      },
      {
        hint_order: 2,
        content: "Aggregate complaints per user first.",
      },
      {
        hint_order: 3,
        content: "Compare with AVG complaint count.",
      },
    ],
  },
  {
    code: "BANK_099",
    hints: [
      {
        hint_order: 1,
        content: "Find branches with high fraud rate.",
      },
      {
        hint_order: 2,
        content: "Compute fraud alerts per customer.",
      },
      {
        hint_order: 3,
        content: "Sort by fraud ratio descending.",
      },
    ],
  },
  {
    code: "BANK_100",
    hints: [
      {
        hint_order: 1,
        content: "Find users above branch average transaction volume.",
      },
      {
        hint_order: 2,
        content: "Aggregate transaction count per user and branch.",
      },
      {
        hint_order: 3,
        content: "Compare with AVG count using CTE or window.",
      },
    ],
  },
];

export const conceptFilters = [
  {
    code: "BANK_001",
    concepts: ["aggregation", "count"],
  },
  {
    code: "BANK_002",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "BANK_003",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "BANK_004",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "BANK_005",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "BANK_006",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "BANK_007",
    concepts: ["filtering", "date_functions", "sorting", "comparison"],
  },
  {
    code: "BANK_008",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "BANK_009",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "BANK_010",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "BANK_011",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "BANK_012",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "BANK_013",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "BANK_014",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "BANK_015",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "BANK_016",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "BANK_017",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "BANK_018",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "BANK_019",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "BANK_020",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "BANK_021",
    concepts: [
      "aggregation",
      "count",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "BANK_022",
    concepts: ["aggregation", "sum", "group_by", "sorting"],
  },
  {
    code: "BANK_023",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "BANK_024",
    concepts: [
      "aggregation",
      "average",
      "filtering",
      "calculation",
      "comparison",
    ],
  },
  {
    code: "BANK_025",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "BANK_026",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "BANK_027",
    concepts: ["aggregation", "sum"],
  },
  {
    code: "BANK_028",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "BANK_029",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "BANK_030",
    concepts: ["aggregation", "sum"],
  },
  {
    code: "BANK_031",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "BANK_032",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "BANK_033",
    concepts: [
      "aggregation",
      "average",
      "filtering",
      "calculation",
      "comparison",
    ],
  },
  {
    code: "BANK_034",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "BANK_035",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "BANK_036",
    concepts: ["joins", "filtering", "sorting", "comparison"],
  },
  {
    code: "BANK_037",
    concepts: ["joins", "aggregation", "sum", "group_by", "sorting", "limit"],
  },
  {
    code: "BANK_038",
    concepts: [
      "joins",
      "left_join",
      "aggregation",
      "count",
      "group_by",
      "sorting",
    ],
  },
  {
    code: "BANK_039",
    concepts: ["joins", "filtering", "distinct", "sorting", "comparison"],
  },
  {
    code: "BANK_040",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "sum",
      "group_by",
      "calculation",
      "arithmetic",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "BANK_041",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "sum",
      "group_by",
      "calculation",
      "sorting",
      "limit",
      "comparison",
    ],
  },
  {
    code: "BANK_042",
    concepts: [
      "joins",
      "aggregation",
      "count",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "BANK_043",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "sum",
      "group_by",
      "calculation",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "BANK_044",
    concepts: [
      "joins",
      "aggregation",
      "sum",
      "count",
      "group_by",
      "case_when",
      "conditional_aggregation",
      "arithmetic",
      "calculation",
      "sorting",
    ],
  },
  {
    code: "BANK_045",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "BANK_046",
    concepts: [
      "aggregation",
      "sum",
      "group_by",
      "date_functions",
      "trend_analysis",
      "filtering",
      "sorting",
      "calculation",
      "comparison",
    ],
  },
  {
    code: "BANK_047",
    concepts: ["joins", "filtering", "distinct", "sorting", "comparison"],
  },
  {
    code: "BANK_048",
    concepts: [
      "aggregation",
      "sum",
      "group_by",
      "filtering",
      "sorting",
      "limit",
      "calculation",
      "comparison",
    ],
  },
  {
    code: "BANK_049",
    concepts: [
      "cte",
      "joins",
      "left_join",
      "aggregation",
      "sum",
      "group_by",
      "null_handling",
      "arithmetic",
      "calculation",
      "sorting",
    ],
  },
  {
    code: "BANK_050",
    concepts: ["joins", "filtering", "distinct", "sorting", "comparison"],
  },
  {
    code: "BANK_051",
    concepts: [
      "joins",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "BANK_052",
    concepts: ["joins", "aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "BANK_053",
    concepts: [
      "aggregation",
      "average",
      "group_by",
      "filtering",
      "sorting",
      "calculation",
      "comparison",
    ],
  },
  {
    code: "BANK_054",
    concepts: ["joins", "distinct", "sorting"],
  },
  {
    code: "BANK_055",
    concepts: [
      "aggregation",
      "count",
      "group_by",
      "date_functions",
      "trend_analysis",
      "sorting",
    ],
  },
  {
    code: "BANK_056",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "sum",
      "group_by",
      "sorting",
      "limit",
      "calculation",
      "comparison",
    ],
  },
  {
    code: "BANK_057",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "BANK_058",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "BANK_059",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "sum",
      "group_by",
      "sorting",
      "calculation",
      "comparison",
    ],
  },
  {
    code: "BANK_060",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "count_distinct",
      "group_by",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "BANK_061",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "BANK_062",
    concepts: [
      "aggregation",
      "average",
      "group_by",
      "filtering",
      "sorting",
      "calculation",
      "comparison",
    ],
  },
  {
    code: "BANK_063",
    concepts: [
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "sorting",
      "limit",
      "calculation",
    ],
  },
  {
    code: "BANK_064",
    concepts: ["joins", "filtering", "sorting", "comparison"],
  },
  {
    code: "BANK_065",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "calculation",
      "comparison",
    ],
  },
  {
    code: "BANK_066",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "sum",
      "group_by",
      "date_functions",
      "trend_analysis",
      "sorting",
      "calculation",
      "comparison",
    ],
  },
  {
    code: "BANK_067",
    concepts: ["joins", "distinct", "sorting"],
  },
  {
    code: "BANK_068",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "sum",
      "group_by",
      "sorting",
      "limit",
      "calculation",
      "comparison",
    ],
  },
  {
    code: "BANK_069",
    concepts: [
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "BANK_070",
    concepts: ["joins", "filtering", "distinct", "sorting", "comparison"],
  },
  {
    code: "BANK_071",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "average",
      "group_by",
      "subquery",
      "filtering",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "BANK_072",
    concepts: [
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "sorting",
      "limit",
      "calculation",
    ],
  },
  {
    code: "BANK_073",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "limit",
      "comparison",
    ],
  },
  {
    code: "BANK_074",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "sum",
      "group_by",
      "having",
      "case_when",
      "conditional_aggregation",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "BANK_075",
    concepts: ["joins", "aggregation", "count", "group_by", "sorting", "limit"],
  },
  {
    code: "BANK_076",
    concepts: [
      "joins",
      "aggregation",
      "sum",
      "count",
      "group_by",
      "having",
      "case_when",
      "conditional_aggregation",
      "arithmetic",
      "calculation",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "BANK_077",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "count_distinct",
      "group_by",
      "sorting",
      "limit",
      "comparison",
    ],
  },
  {
    code: "BANK_078",
    concepts: [
      "joins",
      "left_join",
      "aggregation",
      "count",
      "group_by",
      "having",
      "date_functions",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "BANK_079",
    concepts: [
      "joins",
      "aggregation",
      "count_distinct",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "BANK_080",
    concepts: [
      "joins",
      "left_join",
      "aggregation",
      "sum",
      "group_by",
      "null_handling",
      "arithmetic",
      "calculation",
      "sorting",
      "limit",
    ],
  },
  {
    code: "BANK_081",
    concepts: [
      "joins",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "limit",
      "calculation",
    ],
  },
  {
    code: "BANK_082",
    concepts: [
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "having",
      "case_when",
      "conditional_aggregation",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "BANK_083",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "count",
      "average",
      "group_by",
      "case_when",
      "conditional_aggregation",
      "subquery",
      "filtering",
      "sorting",
      "arithmetic",
      "calculation",
      "comparison",
    ],
  },
  {
    code: "BANK_084",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "count_distinct",
      "group_by",
      "sorting",
      "limit",
      "comparison",
    ],
  },
  {
    code: "BANK_085",
    concepts: [
      "cte",
      "joins",
      "left_join",
      "aggregation",
      "sum",
      "group_by",
      "null_handling",
      "filtering",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "BANK_086",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "count_distinct",
      "group_by",
      "sorting",
      "limit",
      "comparison",
    ],
  },
  {
    code: "BANK_087",
    concepts: [
      "cte",
      "joins",
      "filtering",
      "distinct",
      "lag",
      "lag_lead",
      "window_functions",
      "partition_by",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "BANK_088",
    concepts: [
      "cte",
      "joins",
      "left_join",
      "aggregation",
      "sum",
      "group_by",
      "null_handling",
      "arithmetic",
      "calculation",
      "filtering",
      "sorting",
      "limit",
      "comparison",
    ],
  },
  {
    code: "BANK_089",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "count",
      "average",
      "group_by",
      "case_when",
      "conditional_aggregation",
      "subquery",
      "filtering",
      "sorting",
      "arithmetic",
      "calculation",
      "comparison",
    ],
  },
  {
    code: "BANK_090",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "average",
      "group_by",
      "filtering",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "BANK_091",
    concepts: [
      "cte",
      "joins",
      "filtering",
      "aggregation",
      "sum",
      "group_by",
      "case_when",
      "conditional_aggregation",
      "date_functions",
      "trend_analysis",
      "window_functions",
      "ranking",
      "partition_by",
      "sorting",
      "subquery",
      "arithmetic",
      "calculation",
      "comparison",
    ],
  },
  {
    code: "BANK_092",
    concepts: [
      "cte",
      "joins",
      "left_join",
      "aggregation",
      "count",
      "group_by",
      "null_handling",
      "filtering",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "BANK_093",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "null_handling",
      "arithmetic",
      "calculation",
      "filtering",
      "sorting",
      "limit",
      "comparison",
    ],
  },
  {
    code: "BANK_094",
    concepts: [
      "joins",
      "left_join",
      "filtering",
      "distinct",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "BANK_095",
    concepts: [
      "joins",
      "aggregation",
      "count_distinct",
      "group_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "BANK_096",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "filtering",
      "sorting",
      "arithmetic",
      "calculation",
      "comparison",
    ],
  },
  {
    code: "BANK_097",
    concepts: [
      "joins",
      "aggregation",
      "count_distinct",
      "group_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "BANK_098",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "average",
      "group_by",
      "subquery",
      "filtering",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "BANK_099",
    concepts: [
      "cte",
      "joins",
      "left_join",
      "aggregation",
      "count",
      "count_distinct",
      "group_by",
      "null_handling",
      "arithmetic",
      "calculation",
      "filtering",
      "sorting",
      "limit",
      "comparison",
    ],
  },
  {
    code: "BANK_100",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "average",
      "group_by",
      "filtering",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
];

export const solutions = [
  {
    code: "BANK_001",
    approaches: [
      {
        approach_title: "COUNT all",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS total_users FROM users;",
        explanation:
          "## 🧠 Approach\n\nCount every row in the `users` table.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS total_users\nFROM users;\n```\n\n## 🔍 Explanation\n\n- Each row in `users` represents one bank user.\n- `COUNT(*)` counts all rows, including rows where individual columns may contain `NULL`.\n- The alias `total_users` matches the required output column.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query: "SELECT COUNT(id) AS total_users FROM users;",
        explanation:
          "## 🧠 Approach\n\nCount user IDs instead of all rows.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(id) AS total_users\nFROM users;\n```\n\n## 🔍 Explanation\n\n- `COUNT(id)` counts non-null user IDs.\n- Since `id` is expected to be the primary key, it should never be `NULL`.\n- This returns the same total as `COUNT(*)`, but `COUNT(*)` is usually preferred for row counts.",
      },
    ],
  },
  {
    code: "BANK_002",
    approaches: [
      {
        approach_title: "Filter active",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS active_users FROM users WHERE is_active = true;",
        explanation:
          "## 🧠 Approach\n\nFilter users to active records, then count them.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS active_users\nFROM users\nWHERE is_active = true;\n```\n\n## 🔍 Explanation\n\n- `WHERE is_active = true` keeps only active users.\n- `COUNT(*)` counts the filtered rows.\n- The alias `active_users` matches the required output column.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query: "SELECT COUNT(*) AS active_users FROM users WHERE is_active;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL's boolean shorthand.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS active_users\nFROM users\nWHERE is_active;\n```\n\n## 🔍 Explanation\n\n- In PostgreSQL, `WHERE is_active` is equivalent to `WHERE is_active = true`.\n- This is concise and readable when the column itself is boolean.\n- Rows where `is_active` is false or null are excluded.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT COUNT(*) FILTER (WHERE is_active = true) AS active_users FROM users;",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation to count only active users.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) FILTER (WHERE is_active = true) AS active_users\nFROM users;\n```\n\n## 🔍 Explanation\n\n- `FILTER` applies a condition only to the aggregate function.\n- The table is scanned once, and only rows where `is_active = true` are counted.\n- This is especially useful when counting multiple categories in the same query.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 4,
        query:
          "SELECT SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) AS active_users FROM users;",
        explanation:
          "## 🧠 Approach\n\nConvert active rows into `1` and inactive rows into `0`, then sum them.\n\n## 🧩 Query\n\n```sql\nSELECT SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) AS active_users\nFROM users;\n```\n\n## 🔍 Explanation\n\n- The `CASE` expression returns `1` for active users.\n- It returns `0` for inactive or non-matching rows.\n- `SUM(...)` adds those values to produce the active user count.",
      },
    ],
  },
  {
    code: "BANK_003",
    approaches: [
      {
        approach_title: "Filter verified",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS verified_users FROM users WHERE is_verified = true;",
        explanation:
          "## 🧠 Approach\n\nFilter users to verified records, then count them.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS verified_users\nFROM users\nWHERE is_verified = true;\n```\n\n## 🔍 Explanation\n\n- `WHERE is_verified = true` keeps only verified users.\n- `COUNT(*)` counts the matching rows.\n- The output column is aliased as `verified_users`.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) AS verified_users FROM users WHERE is_verified;",
        explanation:
          "## 🧠 Approach\n\nUse the boolean column directly in the `WHERE` clause.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS verified_users\nFROM users\nWHERE is_verified;\n```\n\n## 🔍 Explanation\n\n- PostgreSQL allows boolean columns to be used directly as predicates.\n- This keeps rows where `is_verified` is true.\n- False and null values are not counted.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT COUNT(*) FILTER (WHERE is_verified = true) AS verified_users FROM users;",
        explanation:
          "## 🧠 Approach\n\nUse aggregate filtering to count verified users.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) FILTER (WHERE is_verified = true) AS verified_users\nFROM users;\n```\n\n## 🔍 Explanation\n\n- `FILTER` limits the `COUNT(*)` aggregate to verified users only.\n- This is a clean PostgreSQL-specific way to write conditional counts.\n- It is useful when adding more conditional counts later.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 4,
        query:
          "SELECT SUM(CASE WHEN is_verified = true THEN 1 ELSE 0 END) AS verified_users FROM users;",
        explanation:
          "## 🧠 Approach\n\nUse a conditional numeric flag and sum it.\n\n## 🧩 Query\n\n```sql\nSELECT SUM(CASE WHEN is_verified = true THEN 1 ELSE 0 END) AS verified_users\nFROM users;\n```\n\n## 🔍 Explanation\n\n- Verified rows contribute `1`.\n- Non-verified rows contribute `0`.\n- The sum gives the total number of verified users.",
      },
    ],
  },
  {
    code: "BANK_004",
    approaches: [
      {
        approach_title: "Filter active",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT branch_code, branch_name, city, country FROM branches WHERE is_active = true;",
        explanation:
          "## 🧠 Approach\n\nSelect required branch details and filter to active branches.\n\n## 🧩 Query\n\n```sql\nSELECT branch_code, branch_name, city, country\nFROM branches\nWHERE is_active = true;\n```\n\n## 🔍 Explanation\n\n- The query reads from `branches`.\n- `WHERE is_active = true` keeps only currently active branches.\n- Only the required columns are selected.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT branch_code, branch_name, city, country FROM branches WHERE is_active;",
        explanation:
          "## 🧠 Approach\n\nUse the boolean column directly as the condition.\n\n## 🧩 Query\n\n```sql\nSELECT branch_code, branch_name, city, country\nFROM branches\nWHERE is_active;\n```\n\n## 🔍 Explanation\n\n- `WHERE is_active` keeps rows where the value is true.\n- This is equivalent to `WHERE is_active = true` in PostgreSQL.\n- It returns the same active branch list.",
      },
      {
        approach_title: "IS TRUE",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT branch_code, branch_name, city, country FROM branches WHERE is_active IS TRUE;",
        explanation:
          "## 🧠 Approach\n\nUse `IS TRUE` for an explicit boolean check.\n\n## 🧩 Query\n\n```sql\nSELECT branch_code, branch_name, city, country\nFROM branches\nWHERE is_active IS TRUE;\n```\n\n## 🔍 Explanation\n\n- `IS TRUE` is explicit and null-safe for boolean logic.\n- It includes only branches where `is_active` is true.\n- Rows with false or null are excluded.",
      },
    ],
  },
  {
    code: "BANK_005",
    approaches: [
      {
        approach_title: "Filter savings",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, product_name, currency, minimum_balance, interest_rate FROM account_products WHERE product_type = 'savings';",
        explanation:
          "## 🧠 Approach\n\nFilter account products to only savings products.\n\n## 🧩 Query\n\n```sql\nSELECT id, product_name, currency, minimum_balance, interest_rate\nFROM account_products\nWHERE product_type = 'savings';\n```\n\n## 🔍 Explanation\n\n- `account_products` stores the bank's account product definitions.\n- `WHERE product_type = 'savings'` keeps only savings products.\n- The selected columns match the expected output exactly.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, product_name, currency, minimum_balance, interest_rate FROM account_products WHERE product_type IN ('savings');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` even though there is only one allowed value.\n\n## 🧩 Query\n\n```sql\nSELECT id, product_name, currency, minimum_balance, interest_rate\nFROM account_products\nWHERE product_type IN ('savings');\n```\n\n## 🔍 Explanation\n\n- `IN ('savings')` works the same as `= 'savings'` here.\n- This style becomes useful when filtering for multiple product types.\n- For a single value, direct equality is simpler.",
      },
    ],
  },
  {
    code: "BANK_006",
    approaches: [
      {
        approach_title: "Filter active",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS active_accounts FROM accounts WHERE account_status = 'active';",
        explanation:
          "## 🧠 Approach\n\nFilter accounts by active status and count them.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS active_accounts\nFROM accounts\nWHERE account_status = 'active';\n```\n\n## 🔍 Explanation\n\n- `WHERE account_status = 'active'` keeps only active accounts.\n- `COUNT(*)` counts those matching rows.\n- The alias `active_accounts` matches the required output.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) AS active_accounts FROM accounts WHERE account_status IN ('active');",
        explanation:
          "## 🧠 Approach\n\nUse an `IN` condition for the active status.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS active_accounts\nFROM accounts\nWHERE account_status IN ('active');\n```\n\n## 🔍 Explanation\n\n- `IN ('active')` is equivalent to `= 'active'` for one value.\n- It is useful if the requirement later expands to multiple statuses.\n- The result still counts only active accounts.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT COUNT(*) FILTER (WHERE account_status = 'active') AS active_accounts FROM accounts;",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation to count active accounts.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) FILTER (WHERE account_status = 'active') AS active_accounts\nFROM accounts;\n```\n\n## 🔍 Explanation\n\n- `FILTER` applies the status condition only to the count.\n- This returns the number of rows where `account_status` is active.\n- It is useful when producing several counts in one query.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 4,
        query:
          "SELECT SUM(CASE WHEN account_status = 'active' THEN 1 ELSE 0 END) AS active_accounts FROM accounts;",
        explanation:
          "## 🧠 Approach\n\nConvert matching accounts into `1` and sum them.\n\n## 🧩 Query\n\n```sql\nSELECT SUM(CASE WHEN account_status = 'active' THEN 1 ELSE 0 END) AS active_accounts\nFROM accounts;\n```\n\n## 🔍 Explanation\n\n- Active accounts contribute `1`.\n- Non-active accounts contribute `0`.\n- The sum gives the active account count.",
      },
    ],
  },
  {
    code: "BANK_007",
    approaches: [
      {
        approach_title: "Date cutoff",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, masked_card_number, card_type, network, expires_at FROM cards WHERE expires_at < DATE '2027-01-01';",
        explanation:
          "## 🧠 Approach\n\nFilter cards whose expiry date is before January 1, 2027.\n\n## 🧩 Query\n\n```sql\nSELECT id, masked_card_number, card_type, network, expires_at\nFROM cards\nWHERE expires_at < DATE '2027-01-01';\n```\n\n## 🔍 Explanation\n\n- `DATE '2027-01-01'` creates a proper date literal.\n- `<` means only cards expiring before that date are included.\n- Cards expiring exactly on January 1, 2027 are excluded because the requirement says before January 1, 2027.",
      },
      {
        approach_title: "Timestamp cutoff",
        approach_type: "date_filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, masked_card_number, card_type, network, expires_at FROM cards WHERE expires_at < TIMESTAMP '2027-01-01 00:00:00';",
        explanation:
          "## 🧠 Approach\n\nUse an explicit timestamp boundary.\n\n## 🧩 Query\n\n```sql\nSELECT id, masked_card_number, card_type, network, expires_at\nFROM cards\nWHERE expires_at < TIMESTAMP '2027-01-01 00:00:00';\n```\n\n## 🔍 Explanation\n\n- This is useful if `expires_at` is a timestamp column.\n- The condition includes cards expiring before midnight at the start of 2027-01-01.\n- It avoids wrapping the column in a function, which is better for index usage.",
      },
      {
        approach_title: "String date",
        approach_type: "date_filtering",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, masked_card_number, card_type, network, expires_at FROM cards WHERE expires_at < '2027-01-01';",
        explanation:
          "## 🧠 Approach\n\nCompare against a date-like string that PostgreSQL can cast.\n\n## 🧩 Query\n\n```sql\nSELECT id, masked_card_number, card_type, network, expires_at\nFROM cards\nWHERE expires_at < '2027-01-01';\n```\n\n## 🔍 Explanation\n\n- PostgreSQL can infer the literal type from the `expires_at` comparison.\n- This usually works, but an explicit `DATE` or `TIMESTAMP` literal is clearer.\n- The logic still returns cards expiring before January 1, 2027.",
      },
    ],
  },
  {
    code: "BANK_008",
    approaches: [
      {
        approach_title: "Filter pending",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, user_id, verification_level, submitted_at FROM kyc_records WHERE kyc_status = 'pending';",
        explanation:
          "## 🧠 Approach\n\nFilter KYC records by pending status.\n\n## 🧩 Query\n\n```sql\nSELECT id, user_id, verification_level, submitted_at\nFROM kyc_records\nWHERE kyc_status = 'pending';\n```\n\n## 🔍 Explanation\n\n- `kyc_records` stores user verification records.\n- `WHERE kyc_status = 'pending'` keeps only records waiting for review.\n- The selected columns match the required output exactly.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, user_id, verification_level, submitted_at FROM kyc_records WHERE kyc_status IN ('pending');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` to match pending KYC status.\n\n## 🧩 Query\n\n```sql\nSELECT id, user_id, verification_level, submitted_at\nFROM kyc_records\nWHERE kyc_status IN ('pending');\n```\n\n## 🔍 Explanation\n\n- `IN ('pending')` gives the same result as `= 'pending'` here.\n- This pattern is helpful when multiple statuses are acceptable.\n- Since only pending records are required, equality is more direct.",
      },
    ],
  },
  {
    code: "BANK_009",
    approaches: [
      {
        approach_title: "Filter failed",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT transaction_ref, account_id, amount, initiated_at FROM transactions WHERE transaction_status = 'failed';",
        explanation:
          "## 🧠 Approach\n\nFilter transactions to failed records.\n\n## 🧩 Query\n\n```sql\nSELECT transaction_ref, account_id, amount, initiated_at\nFROM transactions\nWHERE transaction_status = 'failed';\n```\n\n## 🔍 Explanation\n\n- `transactions` contains transaction-level activity.\n- `WHERE transaction_status = 'failed'` keeps only failed transactions.\n- The output includes the transaction reference, related account, amount, and initiated time.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT transaction_ref, account_id, amount, initiated_at FROM transactions WHERE transaction_status IN ('failed');",
        explanation:
          "## 🧠 Approach\n\nUse an `IN` condition for the failed status.\n\n## 🧩 Query\n\n```sql\nSELECT transaction_ref, account_id, amount, initiated_at\nFROM transactions\nWHERE transaction_status IN ('failed');\n```\n\n## 🔍 Explanation\n\n- `IN ('failed')` matches only failed transactions.\n- It is equivalent to direct equality for one status.\n- This approach is useful when the filter may later include several statuses.",
      },
    ],
  },
  {
    code: "BANK_010",
    approaches: [
      {
        approach_title: "Filter open",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT alert_ref, user_id, account_id, card_id, alert_type, severity, detected_at FROM fraud_alerts WHERE alert_status = 'open';",
        explanation:
          "## 🧠 Approach\n\nFilter fraud alerts to currently open alerts.\n\n## 🧩 Query\n\n```sql\nSELECT alert_ref, user_id, account_id, card_id, alert_type, severity, detected_at\nFROM fraud_alerts\nWHERE alert_status = 'open';\n```\n\n## 🔍 Explanation\n\n- `fraud_alerts` stores fraud detection alerts.\n- `WHERE alert_status = 'open'` keeps only unresolved or currently open alerts.\n- The selected columns match the required output exactly.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT alert_ref, user_id, account_id, card_id, alert_type, severity, detected_at FROM fraud_alerts WHERE alert_status IN ('open');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` to filter open fraud alerts.\n\n## 🧩 Query\n\n```sql\nSELECT alert_ref, user_id, account_id, card_id, alert_type, severity, detected_at\nFROM fraud_alerts\nWHERE alert_status IN ('open');\n```\n\n## 🔍 Explanation\n\n- `IN ('open')` returns the same rows as `= 'open'`.\n- This form is useful when more than one alert status needs to be included.\n- For this question, direct equality is simpler and more readable.",
      },
    ],
  },
  {
    code: "BANK_011",
    approaches: [
      {
        approach_title: "Filter inactive",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, full_name, email, phone, country, created_at FROM users WHERE is_active = false;",
        explanation:
          "## 🧠 Approach\n\nFilter the `users` table to only inactive users.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, email, phone, country, created_at\nFROM users\nWHERE is_active = false;\n```\n\n## 🔍 Explanation\n\n- `WHERE is_active = false` keeps only users who are currently inactive.\n- The query selects only the required user details.\n- No `ORDER BY` is needed because this question does not require a specific result order.",
      },
      {
        approach_title: "NOT boolean",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, full_name, email, phone, country, created_at FROM users WHERE NOT is_active;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand with `NOT`.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, email, phone, country, created_at\nFROM users\nWHERE NOT is_active;\n```\n\n## 🔍 Explanation\n\n- `NOT is_active` is equivalent to checking that `is_active` is false.\n- It excludes active users.\n- This is concise, but `is_active = false` is often clearer for beginners.",
      },
      {
        approach_title: "IS FALSE",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, full_name, email, phone, country, created_at FROM users WHERE is_active IS FALSE;",
        explanation:
          "## 🧠 Approach\n\nUse `IS FALSE` for an explicit boolean check.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, email, phone, country, created_at\nFROM users\nWHERE is_active IS FALSE;\n```\n\n## 🔍 Explanation\n\n- `IS FALSE` is explicit and handles boolean logic clearly.\n- It returns rows where `is_active` is exactly false.\n- Rows with true or null values are excluded.",
      },
    ],
  },
  {
    code: "BANK_012",
    approaches: [
      {
        approach_title: "Filter blocked",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS blocked_cards FROM cards WHERE card_status = 'blocked';",
        explanation:
          "## 🧠 Approach\n\nFilter cards by blocked status and count them.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS blocked_cards\nFROM cards\nWHERE card_status = 'blocked';\n```\n\n## 🔍 Explanation\n\n- `WHERE card_status = 'blocked'` keeps only blocked cards.\n- `COUNT(*)` counts the matching rows.\n- The alias `blocked_cards` matches the required output column.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) AS blocked_cards FROM cards WHERE card_status IN ('blocked');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` to match the blocked status.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS blocked_cards\nFROM cards\nWHERE card_status IN ('blocked');\n```\n\n## 🔍 Explanation\n\n- `IN ('blocked')` returns the same rows as `= 'blocked'` for a single value.\n- This style is useful when multiple statuses may be accepted later.\n- For this question, direct equality is simpler.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT COUNT(*) FILTER (WHERE card_status = 'blocked') AS blocked_cards FROM cards;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL conditional aggregation.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) FILTER (WHERE card_status = 'blocked') AS blocked_cards\nFROM cards;\n```\n\n## 🔍 Explanation\n\n- `FILTER` applies the blocked condition only to the aggregate.\n- The query still scans the `cards` table once.\n- This is useful when calculating multiple card-status counts in one query.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 4,
        query:
          "SELECT SUM(CASE WHEN card_status = 'blocked' THEN 1 ELSE 0 END) AS blocked_cards FROM cards;",
        explanation:
          "## 🧠 Approach\n\nTurn blocked cards into `1` and all other cards into `0`, then sum.\n\n## 🧩 Query\n\n```sql\nSELECT SUM(CASE WHEN card_status = 'blocked' THEN 1 ELSE 0 END) AS blocked_cards\nFROM cards;\n```\n\n## 🔍 Explanation\n\n- The `CASE` expression assigns `1` to blocked cards.\n- Other cards contribute `0`.\n- `SUM(...)` produces the total blocked card count.",
      },
    ],
  },
  {
    code: "BANK_013",
    approaches: [
      {
        approach_title: "Filter active",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT atm_code, city, country, installed_at FROM atm_machines WHERE atm_status = 'active';",
        explanation:
          "## 🧠 Approach\n\nFilter ATM machines to active records.\n\n## 🧩 Query\n\n```sql\nSELECT atm_code, city, country, installed_at\nFROM atm_machines\nWHERE atm_status = 'active';\n```\n\n## 🔍 Explanation\n\n- `atm_machines` stores ATM machine records.\n- `WHERE atm_status = 'active'` keeps only active ATMs.\n- The query returns the required ATM code, location, and installation date.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT atm_code, city, country, installed_at FROM atm_machines WHERE atm_status IN ('active');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` to filter active ATM machines.\n\n## 🧩 Query\n\n```sql\nSELECT atm_code, city, country, installed_at\nFROM atm_machines\nWHERE atm_status IN ('active');\n```\n\n## 🔍 Explanation\n\n- `IN ('active')` is equivalent to `= 'active'` here.\n- This approach is useful when more than one status should be included.\n- Since only active ATMs are required, direct equality remains the clearest option.",
      },
    ],
  },
  {
    code: "BANK_014",
    approaches: [
      {
        approach_title: "Filter domestic",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, user_id, beneficiary_name, bank_name, account_number, country FROM beneficiaries WHERE beneficiary_type = 'domestic_external';",
        explanation:
          "## 🧠 Approach\n\nFilter beneficiaries by the domestic external type.\n\n## 🧩 Query\n\n```sql\nSELECT id, user_id, beneficiary_name, bank_name, account_number, country\nFROM beneficiaries\nWHERE beneficiary_type = 'domestic_external';\n```\n\n## 🔍 Explanation\n\n- `beneficiaries` stores saved transfer recipients.\n- `WHERE beneficiary_type = 'domestic_external'` keeps only domestic external beneficiaries.\n- The selected columns match the required output exactly.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, user_id, beneficiary_name, bank_name, account_number, country FROM beneficiaries WHERE beneficiary_type IN ('domestic_external');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` for the beneficiary type condition.\n\n## 🧩 Query\n\n```sql\nSELECT id, user_id, beneficiary_name, bank_name, account_number, country\nFROM beneficiaries\nWHERE beneficiary_type IN ('domestic_external');\n```\n\n## 🔍 Explanation\n\n- `IN ('domestic_external')` returns the same rows as direct equality.\n- It is useful when filtering by multiple beneficiary types.\n- For one value, `=` is simpler and more readable.",
      },
    ],
  },
  {
    code: "BANK_015",
    approaches: [
      {
        approach_title: "Filter rejected",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT application_ref, user_id, loan_product_id, requested_amount, requested_term_months, decision_at FROM loan_applications WHERE application_status = 'rejected';",
        explanation:
          "## 🧠 Approach\n\nFilter loan applications to rejected records.\n\n## 🧩 Query\n\n```sql\nSELECT application_ref, user_id, loan_product_id, requested_amount, requested_term_months, decision_at\nFROM loan_applications\nWHERE application_status = 'rejected';\n```\n\n## 🔍 Explanation\n\n- `loan_applications` stores customer loan requests.\n- `WHERE application_status = 'rejected'` keeps only rejected applications.\n- The selected columns include the reference, applicant, loan product, requested terms, and decision time.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT application_ref, user_id, loan_product_id, requested_amount, requested_term_months, decision_at FROM loan_applications WHERE application_status IN ('rejected');",
        explanation:
          "## 🧠 Approach\n\nUse an `IN` list for the rejected application status.\n\n## 🧩 Query\n\n```sql\nSELECT application_ref, user_id, loan_product_id, requested_amount, requested_term_months, decision_at\nFROM loan_applications\nWHERE application_status IN ('rejected');\n```\n\n## 🔍 Explanation\n\n- `IN ('rejected')` is equivalent to `= 'rejected'` for one status.\n- It becomes useful if multiple application statuses are needed.\n- This still returns only rejected loan applications.",
      },
    ],
  },
  {
    code: "BANK_016",
    approaches: [
      {
        approach_title: "Filter closed",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS closed_loans FROM loans WHERE loan_status = 'closed';",
        explanation:
          "## 🧠 Approach\n\nFilter loans by closed status and count them.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS closed_loans\nFROM loans\nWHERE loan_status = 'closed';\n```\n\n## 🔍 Explanation\n\n- `WHERE loan_status = 'closed'` keeps only closed loans.\n- `COUNT(*)` counts those rows.\n- The alias `closed_loans` matches the expected output column.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) AS closed_loans FROM loans WHERE loan_status IN ('closed');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` to match closed loans.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS closed_loans\nFROM loans\nWHERE loan_status IN ('closed');\n```\n\n## 🔍 Explanation\n\n- `IN ('closed')` returns the same rows as `= 'closed'` here.\n- This is more flexible when multiple statuses are allowed.\n- For this question, direct equality is preferred.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT COUNT(*) FILTER (WHERE loan_status = 'closed') AS closed_loans FROM loans;",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation to count closed loans.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) FILTER (WHERE loan_status = 'closed') AS closed_loans\nFROM loans;\n```\n\n## 🔍 Explanation\n\n- `FILTER` applies the status condition only inside the aggregate.\n- Only rows with `loan_status = 'closed'` are counted.\n- This pattern is useful when calculating several loan counts together.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 4,
        query:
          "SELECT SUM(CASE WHEN loan_status = 'closed' THEN 1 ELSE 0 END) AS closed_loans FROM loans;",
        explanation:
          "## 🧠 Approach\n\nUse a conditional numeric flag and sum it.\n\n## 🧩 Query\n\n```sql\nSELECT SUM(CASE WHEN loan_status = 'closed' THEN 1 ELSE 0 END) AS closed_loans\nFROM loans;\n```\n\n## 🔍 Explanation\n\n- Closed loans contribute `1`.\n- Non-closed loans contribute `0`.\n- The sum gives the total number of closed loans.",
      },
    ],
  },
  {
    code: "BANK_017",
    approaches: [
      {
        approach_title: "Filter active",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, biller_name, biller_category, country FROM billers WHERE is_active = true;",
        explanation:
          "## 🧠 Approach\n\nFilter billers to active records.\n\n## 🧩 Query\n\n```sql\nSELECT id, biller_name, biller_category, country\nFROM billers\nWHERE is_active = true;\n```\n\n## 🔍 Explanation\n\n- `billers` stores bill payment providers.\n- `WHERE is_active = true` keeps only billers that are currently active.\n- The query returns the required biller details.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, biller_name, biller_category, country FROM billers WHERE is_active;",
        explanation:
          "## 🧠 Approach\n\nUse the boolean column directly as the condition.\n\n## 🧩 Query\n\n```sql\nSELECT id, biller_name, biller_category, country\nFROM billers\nWHERE is_active;\n```\n\n## 🔍 Explanation\n\n- In PostgreSQL, `WHERE is_active` means `is_active = true`.\n- It excludes false and null values.\n- This is concise and commonly used for boolean columns.",
      },
      {
        approach_title: "IS TRUE",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, biller_name, biller_category, country FROM billers WHERE is_active IS TRUE;",
        explanation:
          "## 🧠 Approach\n\nUse `IS TRUE` for an explicit boolean comparison.\n\n## 🧩 Query\n\n```sql\nSELECT id, biller_name, biller_category, country\nFROM billers\nWHERE is_active IS TRUE;\n```\n\n## 🔍 Explanation\n\n- `IS TRUE` clearly checks for true boolean values.\n- It excludes false and null rows.\n- This is explicit and safe for nullable boolean columns.",
      },
    ],
  },
  {
    code: "BANK_018",
    approaches: [
      {
        approach_title: "IN severities",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT alert_ref, user_id, account_id, alert_type, severity, alert_status, detected_at FROM fraud_alerts WHERE severity IN ('high', 'critical');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` because two severity values are accepted.\n\n## 🧩 Query\n\n```sql\nSELECT alert_ref, user_id, account_id, alert_type, severity, alert_status, detected_at\nFROM fraud_alerts\nWHERE severity IN ('high', 'critical');\n```\n\n## 🔍 Explanation\n\n- The requirement asks for fraud alerts with severity `high` or `critical`.\n- `IN ('high', 'critical')` is the cleanest way to match either value.\n- The selected columns match the expected output exactly.",
      },
      {
        approach_title: "OR filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT alert_ref, user_id, account_id, alert_type, severity, alert_status, detected_at FROM fraud_alerts WHERE severity = 'high' OR severity = 'critical';",
        explanation:
          "## 🧠 Approach\n\nUse explicit `OR` conditions for each accepted severity.\n\n## 🧩 Query\n\n```sql\nSELECT alert_ref, user_id, account_id, alert_type, severity, alert_status, detected_at\nFROM fraud_alerts\nWHERE severity = 'high'\n   OR severity = 'critical';\n```\n\n## 🔍 Explanation\n\n- The first condition matches high severity alerts.\n- The second condition matches critical severity alerts.\n- This is logically equivalent to `IN`, but can become verbose as the list grows.",
      },
    ],
  },
  {
    code: "BANK_019",
    approaches: [
      {
        approach_title: "Filter India",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, full_name, email, phone, city FROM users WHERE country = 'India';",
        explanation:
          "## 🧠 Approach\n\nFilter users whose country is India.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, email, phone, city\nFROM users\nWHERE country = 'India';\n```\n\n## 🔍 Explanation\n\n- `WHERE country = 'India'` keeps only users from India.\n- The query returns user identity and contact/location details requested by the question.\n- No sorting is required because the comparator ignores order unless configured.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, full_name, email, phone, city FROM users WHERE country IN ('India');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` for the country filter.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, email, phone, city\nFROM users\nWHERE country IN ('India');\n```\n\n## 🔍 Explanation\n\n- `IN ('India')` is equivalent to `= 'India'` for one country.\n- It is useful when filtering for multiple countries.\n- For this single-country question, equality is simpler.",
      },
    ],
  },
  {
    code: "BANK_020",
    approaches: [
      {
        approach_title: "Filter open",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, user_id, account_id, card_id, loan_id, issue_type, priority, created_at FROM support_tickets WHERE ticket_status = 'open';",
        explanation:
          "## 🧠 Approach\n\nFilter support tickets to currently open tickets.\n\n## 🧩 Query\n\n```sql\nSELECT id, user_id, account_id, card_id, loan_id, issue_type, priority, created_at\nFROM support_tickets\nWHERE ticket_status = 'open';\n```\n\n## 🔍 Explanation\n\n- `support_tickets` stores customer support issues.\n- `WHERE ticket_status = 'open'` keeps only currently open tickets.\n- The selected columns match the required output exactly.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, user_id, account_id, card_id, loan_id, issue_type, priority, created_at FROM support_tickets WHERE ticket_status IN ('open');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` to match open support tickets.\n\n## 🧩 Query\n\n```sql\nSELECT id, user_id, account_id, card_id, loan_id, issue_type, priority, created_at\nFROM support_tickets\nWHERE ticket_status IN ('open');\n```\n\n## 🔍 Explanation\n\n- `IN ('open')` returns the same rows as `= 'open'` here.\n- It is helpful when multiple ticket statuses are acceptable.\n- Since this question asks only for open tickets, direct equality is clearer.",
      },
    ],
  },
  {
    code: "BANK_021",
    approaches: [
      {
        approach_title: "GROUP BY HAVING",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, COUNT(*) AS account_count FROM accounts GROUP BY user_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nGroup accounts by user and keep only users with more than one account.\n\n## 🧩 Query\n\n```sql\nSELECT user_id, COUNT(*) AS account_count\nFROM accounts\nGROUP BY user_id\nHAVING COUNT(*) > 1;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY user_id` creates one group per user.\n- `COUNT(*)` counts how many accounts each user owns.\n- `HAVING COUNT(*) > 1` filters grouped results, keeping only users with multiple accounts.\n- `HAVING` is required here because the filter depends on an aggregate value.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, account_count FROM (SELECT user_id, COUNT(*) AS account_count FROM accounts GROUP BY user_id) account_totals WHERE account_count > 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate account counts first, then filter the derived result.\n\n## 🧩 Query\n\n```sql\nSELECT user_id, account_count\nFROM (\n  SELECT user_id, COUNT(*) AS account_count\n  FROM accounts\n  GROUP BY user_id\n) account_totals\nWHERE account_count > 1;\n```\n\n## 🔍 Explanation\n\n- The inner query groups accounts by `user_id` and calculates `account_count`.\n- The outer query filters those grouped results using `WHERE account_count > 1`.\n- This is useful when you want to make the aggregation step reusable or easier to read.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT user_id, account_count FROM (SELECT user_id, COUNT(*) OVER (PARTITION BY user_id) AS account_count FROM accounts) counted_accounts WHERE account_count > 1;",
        explanation:
          "## 🧠 Approach\n\nUse a window function to count accounts per user without collapsing rows first.\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT user_id, account_count\nFROM (\n  SELECT user_id,\n         COUNT(*) OVER (PARTITION BY user_id) AS account_count\n  FROM accounts\n) counted_accounts\nWHERE account_count > 1;\n```\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY user_id)` calculates the number of accounts for each user.\n- Because the window function keeps one row per account, `DISTINCT` is used to return one row per user.\n- This teaches windowed aggregation, though plain `GROUP BY + HAVING` is simpler and better here.",
      },
    ],
  },
  {
    code: "BANK_022",
    approaches: [
      {
        approach_title: "GROUP BY SUM",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, SUM(current_balance) AS total_balance FROM accounts GROUP BY user_id;",
        explanation:
          "## 🧠 Approach\n\nGroup accounts by user and add their current balances.\n\n## 🧩 Query\n\n```sql\nSELECT user_id, SUM(current_balance) AS total_balance\nFROM accounts\nGROUP BY user_id;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY user_id` creates one result row per user.\n- `SUM(current_balance)` adds all account balances belonging to that user.\n- The alias `total_balance` matches the required output column.",
      },
      {
        approach_title: "Subquery total",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, total_balance FROM (SELECT user_id, SUM(current_balance) AS total_balance FROM accounts GROUP BY user_id) user_balances;",
        explanation:
          "## 🧠 Approach\n\nCompute user balances in a derived table and select from it.\n\n## 🧩 Query\n\n```sql\nSELECT user_id, total_balance\nFROM (\n  SELECT user_id, SUM(current_balance) AS total_balance\n  FROM accounts\n  GROUP BY user_id\n) user_balances;\n```\n\n## 🔍 Explanation\n\n- The inner query performs the real aggregation.\n- The outer query returns the already-computed result.\n- This is not necessary for this simple question, but it becomes useful when adding filters or joins after aggregation.",
      },
      {
        approach_title: "Window sum",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT user_id, total_balance FROM (SELECT user_id, SUM(current_balance) OVER (PARTITION BY user_id) AS total_balance FROM accounts) user_account_totals;",
        explanation:
          "## 🧠 Approach\n\nUse a window function to calculate each user's total balance.\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT user_id, total_balance\nFROM (\n  SELECT user_id,\n         SUM(current_balance) OVER (PARTITION BY user_id) AS total_balance\n  FROM accounts\n) user_account_totals;\n```\n\n## 🔍 Explanation\n\n- `SUM(current_balance) OVER (PARTITION BY user_id)` calculates the total balance for each user's account rows.\n- Since each account row still appears, `DISTINCT` is needed to return one row per user.\n- This is valid, but `GROUP BY` is clearer and more efficient for this result shape.",
      },
    ],
  },
  {
    code: "BANK_023",
    approaches: [
      {
        approach_title: "GROUP BY channel",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT channel, COUNT(*) AS transaction_count FROM transactions GROUP BY channel;",
        explanation:
          "## 🧠 Approach\n\nGroup transactions by channel and count rows in each group.\n\n## 🧩 Query\n\n```sql\nSELECT channel, COUNT(*) AS transaction_count\nFROM transactions\nGROUP BY channel;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY channel` creates one group for each transaction channel.\n- `COUNT(*)` counts how many transactions exist in each channel.\n- This returns one row per channel.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT channel, COUNT(id) AS transaction_count FROM transactions GROUP BY channel;",
        explanation:
          "## 🧠 Approach\n\nCount transaction IDs for each channel.\n\n## 🧩 Query\n\n```sql\nSELECT channel, COUNT(id) AS transaction_count\nFROM transactions\nGROUP BY channel;\n```\n\n## 🔍 Explanation\n\n- `COUNT(id)` counts non-null transaction IDs.\n- If `id` is a primary key, it should always be non-null, so this matches `COUNT(*)`.\n- `COUNT(*)` is generally preferred when counting rows.",
      },
      {
        approach_title: "Subquery count",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT channel, transaction_count FROM (SELECT channel, COUNT(*) AS transaction_count FROM transactions GROUP BY channel) channel_totals;",
        explanation:
          "## 🧠 Approach\n\nAggregate transaction counts in a derived table.\n\n## 🧩 Query\n\n```sql\nSELECT channel, transaction_count\nFROM (\n  SELECT channel, COUNT(*) AS transaction_count\n  FROM transactions\n  GROUP BY channel\n) channel_totals;\n```\n\n## 🔍 Explanation\n\n- The inner query calculates the transaction count for each channel.\n- The outer query returns the result.\n- This structure can help when additional filtering or joins are needed after aggregation.",
      },
    ],
  },
  {
    code: "BANK_024",
    approaches: [
      {
        approach_title: "AVG active",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ROUND(AVG(current_balance), 2) AS avg_balance FROM accounts WHERE account_status = 'active';",
        explanation:
          "## 🧠 Approach\n\nFilter active accounts first, then calculate the average balance.\n\n## 🧩 Query\n\n```sql\nSELECT ROUND(AVG(current_balance), 2) AS avg_balance\nFROM accounts\nWHERE account_status = 'active';\n```\n\n## 🔍 Explanation\n\n- `WHERE account_status = 'active'` keeps only active accounts.\n- `AVG(current_balance)` calculates the average balance among those accounts.\n- `ROUND(..., 2)` formats the result to two decimal places.\n- The alias `avg_balance` matches the expected output.",
      },
      {
        approach_title: "FILTER AVG",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT ROUND(AVG(current_balance) FILTER (WHERE account_status = 'active'), 2) AS avg_balance FROM accounts;",
        explanation:
          "## 🧠 Approach\n\nUse aggregate filtering to average only active accounts.\n\n## 🧩 Query\n\n```sql\nSELECT ROUND(\n  AVG(current_balance) FILTER (WHERE account_status = 'active'),\n  2\n) AS avg_balance\nFROM accounts;\n```\n\n## 🔍 Explanation\n\n- `FILTER` applies the active-account condition inside the aggregate.\n- Only balances from active accounts are passed into `AVG`.\n- This is useful when computing multiple conditional averages in one query.",
      },
      {
        approach_title: "CASE AVG",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT ROUND(AVG(CASE WHEN account_status = 'active' THEN current_balance END), 2) AS avg_balance FROM accounts;",
        explanation:
          "## 🧠 Approach\n\nUse `CASE` to include only active account balances in the average.\n\n## 🧩 Query\n\n```sql\nSELECT ROUND(\n  AVG(CASE WHEN account_status = 'active' THEN current_balance END),\n  2\n) AS avg_balance\nFROM accounts;\n```\n\n## 🔍 Explanation\n\n- The `CASE` expression returns `current_balance` only for active accounts.\n- For non-active accounts, it returns `NULL` implicitly.\n- `AVG` ignores `NULL`, so only active account balances are averaged.",
      },
      {
        approach_title: "Subquery AVG",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 4,
        query:
          "SELECT ROUND(AVG(current_balance), 2) AS avg_balance FROM (SELECT current_balance FROM accounts WHERE account_status = 'active') active_accounts;",
        explanation:
          "## 🧠 Approach\n\nCreate a filtered derived table of active balances, then average it.\n\n## 🧩 Query\n\n```sql\nSELECT ROUND(AVG(current_balance), 2) AS avg_balance\nFROM (\n  SELECT current_balance\n  FROM accounts\n  WHERE account_status = 'active'\n) active_accounts;\n```\n\n## 🔍 Explanation\n\n- The inner query selects only active account balances.\n- The outer query calculates the average and rounds it.\n- This is more verbose than filtering directly, but useful when the filtered dataset is reused.",
      },
    ],
  },
  {
    code: "BANK_025",
    approaches: [
      {
        approach_title: "GROUP BY network",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT network, COUNT(*) AS card_count FROM cards GROUP BY network;",
        explanation:
          "## 🧠 Approach\n\nGroup cards by payment network and count cards in each group.\n\n## 🧩 Query\n\n```sql\nSELECT network, COUNT(*) AS card_count\nFROM cards\nGROUP BY network;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY network` creates one row per card network.\n- `COUNT(*)` counts all cards in each network.\n- The result shows how many cards were issued per network.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT network, COUNT(id) AS card_count FROM cards GROUP BY network;",
        explanation:
          "## 🧠 Approach\n\nCount card IDs per network.\n\n## 🧩 Query\n\n```sql\nSELECT network, COUNT(id) AS card_count\nFROM cards\nGROUP BY network;\n```\n\n## 🔍 Explanation\n\n- `COUNT(id)` counts non-null card IDs.\n- If `id` is the primary key, it should always be present.\n- This gives the same result as `COUNT(*)`, though `COUNT(*)` is clearer for row counts.",
      },
      {
        approach_title: "Subquery count",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT network, card_count FROM (SELECT network, COUNT(*) AS card_count FROM cards GROUP BY network) network_counts;",
        explanation:
          "## 🧠 Approach\n\nCalculate card counts in a derived table.\n\n## 🧩 Query\n\n```sql\nSELECT network, card_count\nFROM (\n  SELECT network, COUNT(*) AS card_count\n  FROM cards\n  GROUP BY network\n) network_counts;\n```\n\n## 🔍 Explanation\n\n- The inner query groups cards by network.\n- The outer query returns the grouped result.\n- This form is useful when you need to filter, rank, or join the aggregated results later.",
      },
    ],
  },
  {
    code: "BANK_026",
    approaches: [
      {
        approach_title: "GROUP BY city",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT city, COUNT(*) AS atm_count FROM atm_machines GROUP BY city;",
        explanation:
          "## 🧠 Approach\n\nGroup ATM machines by city and count machines in each city.\n\n## 🧩 Query\n\n```sql\nSELECT city, COUNT(*) AS atm_count\nFROM atm_machines\nGROUP BY city;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY city` creates one group per city.\n- `COUNT(*)` counts ATM records in each city.\n- The result tells how many ATMs are installed per city.",
      },
      {
        approach_title: "COUNT code",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT city, COUNT(atm_code) AS atm_count FROM atm_machines GROUP BY city;",
        explanation:
          "## 🧠 Approach\n\nCount ATM codes per city.\n\n## 🧩 Query\n\n```sql\nSELECT city, COUNT(atm_code) AS atm_count\nFROM atm_machines\nGROUP BY city;\n```\n\n## 🔍 Explanation\n\n- `COUNT(atm_code)` counts non-null ATM codes.\n- If `atm_code` is always populated, this matches `COUNT(*)`.\n- `COUNT(*)` remains the safest option for counting rows.",
      },
      {
        approach_title: "Subquery count",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT city, atm_count FROM (SELECT city, COUNT(*) AS atm_count FROM atm_machines GROUP BY city) city_atms;",
        explanation:
          "## 🧠 Approach\n\nAggregate ATM counts by city inside a derived table.\n\n## 🧩 Query\n\n```sql\nSELECT city, atm_count\nFROM (\n  SELECT city, COUNT(*) AS atm_count\n  FROM atm_machines\n  GROUP BY city\n) city_atms;\n```\n\n## 🔍 Explanation\n\n- The inner query calculates the number of ATMs per city.\n- The outer query returns the calculated values.\n- This structure is helpful if later logic needs to filter or rank city-level counts.",
      },
    ],
  },
  {
    code: "BANK_027",
    approaches: [
      {
        approach_title: "SUM fees",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT SUM(fee_amount) AS total_transfer_fees FROM transfers;",
        explanation:
          "## 🧠 Approach\n\nAdd all transfer fee amounts.\n\n## 🧩 Query\n\n```sql\nSELECT SUM(fee_amount) AS total_transfer_fees\nFROM transfers;\n```\n\n## 🔍 Explanation\n\n- `SUM(fee_amount)` adds the fee collected from every transfer row.\n- `SUM` ignores null values by default.\n- The alias `total_transfer_fees` matches the expected output.",
      },
      {
        approach_title: "COALESCE sum",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COALESCE(SUM(fee_amount), 0) AS total_transfer_fees FROM transfers;",
        explanation:
          "## 🧠 Approach\n\nReturn zero if there are no fee values to sum.\n\n## 🧩 Query\n\n```sql\nSELECT COALESCE(SUM(fee_amount), 0) AS total_transfer_fees\nFROM transfers;\n```\n\n## 🔍 Explanation\n\n- `SUM(fee_amount)` returns the total fees.\n- If the table has no rows, or all fee amounts are null, `SUM` returns `NULL`.\n- `COALESCE(..., 0)` converts that null result into zero.\n- Use this only if the expected behavior allows zero instead of null.",
      },
      {
        approach_title: "Subquery sum",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT SUM(fee_amount) AS total_transfer_fees FROM (SELECT fee_amount FROM transfers) transfer_fees;",
        explanation:
          "## 🧠 Approach\n\nSelect transfer fees in a derived table and sum them outside.\n\n## 🧩 Query\n\n```sql\nSELECT SUM(fee_amount) AS total_transfer_fees\nFROM (\n  SELECT fee_amount\n  FROM transfers\n) transfer_fees;\n```\n\n## 🔍 Explanation\n\n- The inner query isolates the fee values.\n- The outer query sums them.\n- This is not needed for this simple question, but it demonstrates how a derived table can feed an aggregate.",
      },
    ],
  },
  {
    code: "BANK_028",
    approaches: [
      {
        approach_title: "Filter approved",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS approved_applications FROM loan_applications WHERE application_status = 'approved';",
        explanation:
          "## 🧠 Approach\n\nFilter loan applications to approved records and count them.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS approved_applications\nFROM loan_applications\nWHERE application_status = 'approved';\n```\n\n## 🔍 Explanation\n\n- `WHERE application_status = 'approved'` keeps only approved applications.\n- `COUNT(*)` counts the matching rows.\n- The result is returned as `approved_applications`.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) AS approved_applications FROM loan_applications WHERE application_status IN ('approved');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` to match approved applications.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS approved_applications\nFROM loan_applications\nWHERE application_status IN ('approved');\n```\n\n## 🔍 Explanation\n\n- `IN ('approved')` is equivalent to `= 'approved'` for one value.\n- This form is useful when multiple statuses are acceptable.\n- For this question, direct equality is clearer.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT COUNT(*) FILTER (WHERE application_status = 'approved') AS approved_applications FROM loan_applications;",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation to count approved applications.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) FILTER (WHERE application_status = 'approved') AS approved_applications\nFROM loan_applications;\n```\n\n## 🔍 Explanation\n\n- `FILTER` applies the approved condition only to the aggregate.\n- Only approved application rows are counted.\n- This style is useful when calculating counts for several statuses in one query.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 4,
        query:
          "SELECT SUM(CASE WHEN application_status = 'approved' THEN 1 ELSE 0 END) AS approved_applications FROM loan_applications;",
        explanation:
          "## 🧠 Approach\n\nTurn approved rows into `1`, then sum them.\n\n## 🧩 Query\n\n```sql\nSELECT SUM(CASE WHEN application_status = 'approved' THEN 1 ELSE 0 END) AS approved_applications\nFROM loan_applications;\n```\n\n## 🔍 Explanation\n\n- Approved applications contribute `1`.\n- Other applications contribute `0`.\n- The sum gives the approved application count.",
      },
    ],
  },
  {
    code: "BANK_029",
    approaches: [
      {
        approach_title: "GROUP BY status",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT fd_status, COUNT(*) AS fd_count FROM fixed_deposits GROUP BY fd_status;",
        explanation:
          "## 🧠 Approach\n\nGroup fixed deposits by status and count each group.\n\n## 🧩 Query\n\n```sql\nSELECT fd_status, COUNT(*) AS fd_count\nFROM fixed_deposits\nGROUP BY fd_status;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY fd_status` creates one row per fixed deposit status.\n- `COUNT(*)` counts deposits in each status group.\n- The result shows the distribution of fixed deposits by status.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT fd_status, COUNT(id) AS fd_count FROM fixed_deposits GROUP BY fd_status;",
        explanation:
          "## 🧠 Approach\n\nCount fixed deposit IDs per status.\n\n## 🧩 Query\n\n```sql\nSELECT fd_status, COUNT(id) AS fd_count\nFROM fixed_deposits\nGROUP BY fd_status;\n```\n\n## 🔍 Explanation\n\n- `COUNT(id)` counts non-null fixed deposit IDs.\n- If `id` is always non-null, this matches `COUNT(*)`.\n- `COUNT(*)` is usually preferred for counting rows.",
      },
      {
        approach_title: "Subquery count",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT fd_status, fd_count FROM (SELECT fd_status, COUNT(*) AS fd_count FROM fixed_deposits GROUP BY fd_status) status_counts;",
        explanation:
          "## 🧠 Approach\n\nCompute fixed deposit counts in a derived table.\n\n## 🧩 Query\n\n```sql\nSELECT fd_status, fd_count\nFROM (\n  SELECT fd_status, COUNT(*) AS fd_count\n  FROM fixed_deposits\n  GROUP BY fd_status\n) status_counts;\n```\n\n## 🔍 Explanation\n\n- The inner query groups deposits by status and counts them.\n- The outer query returns the aggregated result.\n- This structure is useful if later steps need to filter or join status-level counts.",
      },
    ],
  },
  {
    code: "BANK_030",
    approaches: [
      {
        approach_title: "SUM cashback",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT SUM(cashback_amount) AS total_cashback_redeemed FROM reward_redemptions;",
        explanation:
          "## 🧠 Approach\n\nAdd all redeemed cashback amounts.\n\n## 🧩 Query\n\n```sql\nSELECT SUM(cashback_amount) AS total_cashback_redeemed\nFROM reward_redemptions;\n```\n\n## 🔍 Explanation\n\n- `SUM(cashback_amount)` adds cashback amounts across all reward redemption rows.\n- `SUM` ignores null values.\n- The alias `total_cashback_redeemed` matches the required output.",
      },
      {
        approach_title: "COALESCE sum",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COALESCE(SUM(cashback_amount), 0) AS total_cashback_redeemed FROM reward_redemptions;",
        explanation:
          "## 🧠 Approach\n\nReturn zero if there is no cashback amount to sum.\n\n## 🧩 Query\n\n```sql\nSELECT COALESCE(SUM(cashback_amount), 0) AS total_cashback_redeemed\nFROM reward_redemptions;\n```\n\n## 🔍 Explanation\n\n- `SUM(cashback_amount)` calculates total redeemed cashback.\n- If no rows exist, `SUM` returns `NULL`.\n- `COALESCE(..., 0)` replaces that null with zero.\n- This is useful in reporting, but should be used only when zero is acceptable.",
      },
      {
        approach_title: "Subquery sum",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT SUM(cashback_amount) AS total_cashback_redeemed FROM (SELECT cashback_amount FROM reward_redemptions) redeemed_cashback;",
        explanation:
          "## 🧠 Approach\n\nUse a derived table of cashback amounts and sum from it.\n\n## 🧩 Query\n\n```sql\nSELECT SUM(cashback_amount) AS total_cashback_redeemed\nFROM (\n  SELECT cashback_amount\n  FROM reward_redemptions\n) redeemed_cashback;\n```\n\n## 🔍 Explanation\n\n- The inner query selects cashback values.\n- The outer query sums them.\n- This is valid but more verbose than directly summing from `reward_redemptions`.",
      },
    ],
  },
  {
    code: "BANK_031",
    approaches: [
      {
        approach_title: "Filter open",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS open_complaints FROM complaints WHERE complaint_status = 'open';",
        explanation:
          "## 🧠 Approach\n\nFilter complaints to open ones, then count.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS open_complaints\nFROM complaints\nWHERE complaint_status = 'open';\n```\n\n## 🔍 Explanation\n\n- `WHERE complaint_status = 'open'` keeps only active/open complaints.\n- `COUNT(*)` counts the filtered rows.\n- This is the simplest and most direct approach.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) FILTER (WHERE complaint_status = 'open') AS open_complaints FROM complaints;",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation instead of filtering rows.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) FILTER (WHERE complaint_status = 'open') AS open_complaints\nFROM complaints;\n```\n\n## 🔍 Explanation\n\n- `FILTER` applies condition inside the aggregate.\n- Useful when computing multiple complaint counts in one query.\n- Produces the same result.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT SUM(CASE WHEN complaint_status = 'open' THEN 1 ELSE 0 END) AS open_complaints FROM complaints;",
        explanation:
          "## 🧠 Approach\n\nConvert matching rows to 1 and sum.\n\n## 🧩 Query\n\n```sql\nSELECT SUM(CASE WHEN complaint_status = 'open' THEN 1 ELSE 0 END) AS open_complaints\nFROM complaints;\n```\n\n## 🔍 Explanation\n\n- Each open complaint contributes `1`.\n- Others contribute `0`.\n- Sum gives the total open complaints.",
      },
    ],
  },
  {
    code: "BANK_032",
    approaches: [
      {
        approach_title: "GROUP BY currency",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT currency, COUNT(*) AS account_count FROM accounts GROUP BY currency;",
        explanation:
          "## 🧠 Approach\n\nGroup accounts by currency and count.\n\n## 🧩 Query\n\n```sql\nSELECT currency, COUNT(*) AS account_count\nFROM accounts\nGROUP BY currency;\n```\n\n## 🔍 Explanation\n\n- Each currency becomes one group.\n- `COUNT(*)` gives number of accounts per currency.",
      },
      {
        approach_title: "COUNT column",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT currency, COUNT(currency) AS account_count FROM accounts GROUP BY currency;",
        explanation:
          "## 🧠 Approach\n\nCount non-null currency values.\n\n## 🧩 Query\n\n```sql\nSELECT currency, COUNT(currency) AS account_count\nFROM accounts\nGROUP BY currency;\n```\n\n## 🔍 Explanation\n\n- Works same as `COUNT(*)` if currency is never null.\n- Slightly less robust if nulls exist.",
      },
    ],
  },
  {
    code: "BANK_033",
    approaches: [
      {
        approach_title: "AVG active loans",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ROUND(AVG(principal_amount), 2) AS avg_loan_amount FROM loans WHERE loan_status = 'active';",
        explanation:
          "## 🧠 Approach\n\nFilter active loans and calculate average principal.\n\n## 🧩 Query\n\n```sql\nSELECT ROUND(AVG(principal_amount), 2) AS avg_loan_amount\nFROM loans\nWHERE loan_status = 'active';\n```\n\n## 🔍 Explanation\n\n- Only active loans are considered.\n- `AVG` computes mean value.\n- `ROUND(..., 2)` formats result.",
      },
      {
        approach_title: "FILTER AVG",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT ROUND(AVG(principal_amount) FILTER (WHERE loan_status = 'active'), 2) AS avg_loan_amount FROM loans;",
        explanation:
          "## 🧠 Approach\n\nUse aggregate filtering.\n\n## 🔍 Explanation\n\n- Cleaner when combining multiple conditions.\n- Same result as WHERE filtering.",
      },
      {
        approach_title: "CASE AVG",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT ROUND(AVG(CASE WHEN loan_status = 'active' THEN principal_amount END), 2) AS avg_loan_amount FROM loans;",
        explanation:
          "## 🧠 Approach\n\nUse CASE to include only active loans.\n\n## 🔍 Explanation\n\n- Non-active rows become NULL.\n- AVG ignores NULL values.",
      },
    ],
  },
  {
    code: "BANK_034",
    approaches: [
      {
        approach_title: "GROUP BY segment",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT customer_segment, COUNT(*) AS user_count FROM users GROUP BY customer_segment;",
        explanation:
          "## 🧠 Approach\n\nGroup users by segment.\n\n## 🔍 Explanation\n\n- Each segment gets its own count.\n- Straightforward aggregation.",
      },
      {
        approach_title: "COUNT column",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT customer_segment, COUNT(id) AS user_count FROM users GROUP BY customer_segment;",
        explanation:
          "## 🧠 Approach\n\nCount non-null segments.\n\n## 🔍 Explanation\n\n- Same as COUNT(*) if no nulls.\n- Slightly less safe.",
      },
    ],
  },
  {
    code: "BANK_035",
    approaches: [
      {
        approach_title: "GROUP BY type",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT card_type, COUNT(*) AS card_count FROM cards GROUP BY card_type;",
        explanation:
          "## 🧠 Approach\n\nGroup cards by type.\n\n## 🔍 Explanation\n\n- Each card type becomes a group.\n- COUNT(*) counts rows.",
      },
      {
        approach_title: "COUNT column",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT card_type, COUNT(card_type) AS card_count FROM cards GROUP BY card_type;",
        explanation:
          "## 🧠 Approach\n\nCount non-null types.\n\n## 🔍 Explanation\n\n- Same as COUNT(*) if column has no nulls.",
      },
    ],
  },
  {
    code: "BANK_036",
    approaches: [
      {
        approach_title: "JOIN filter",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.full_name, k.verification_level, k.verified_at FROM users u JOIN kyc_records k ON u.id = k.user_id WHERE k.kyc_status = 'verified';",
        explanation:
          "## 🧠 Approach\n\nJoin users with verified KYC records.\n\n## 🔍 Explanation\n\n- INNER JOIN ensures only users with KYC.\n- WHERE filters to verified status.",
      },
      {
        approach_title: "JOIN + IN",
        approach_type: "join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name, k.verification_level, k.verified_at FROM users u JOIN kyc_records k ON u.id = k.user_id WHERE k.kyc_status IN ('verified');",
        explanation: "Same logic using IN.",
      },
    ],
  },
  {
    code: "BANK_037",
    approaches: [
      {
        approach_title: "GROUP + ORDER",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.full_name, SUM(a.current_balance) AS total_balance FROM users u JOIN accounts a ON u.id = a.user_id GROUP BY u.id, u.full_name ORDER BY total_balance DESC, u.id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nAggregate balances and rank users.\n\n## 🔍 Explanation\n\n- SUM per user.\n- ORDER BY enforces ranking.\n- LIMIT selects top 10.",
      },
      {
        approach_title: "Subquery ranking",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT * FROM (SELECT u.id, u.full_name, SUM(a.current_balance) AS total_balance FROM users u JOIN accounts a ON u.id = a.user_id GROUP BY u.id, u.full_name) t ORDER BY total_balance DESC, id ASC LIMIT 10;",
        explanation: "Same logic but separated aggregation and ranking.",
      },
    ],
  },
  {
    code: "BANK_038",
    approaches: [
      {
        approach_title: "LEFT JOIN count",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT b.id, b.branch_name, COUNT(e.id) AS employee_count FROM branches b LEFT JOIN employees e ON b.id = e.branch_id GROUP BY b.id, b.branch_name;",
        explanation:
          "## 🧠 Approach\n\nInclude all branches and count employees.\n\n## 🔍 Explanation\n\n- LEFT JOIN ensures branches without employees are included.\n- COUNT(e.id) avoids counting NULL rows.",
      },
    ],
  },
  {
    code: "BANK_039",
    approaches: [
      {
        approach_title: "JOIN distinct",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT u.id, u.full_name FROM users u JOIN fraud_alerts f ON u.id = f.user_id WHERE f.alert_status = 'open';",
        explanation:
          "## 🧠 Approach\n\nJoin users with fraud alerts and deduplicate.\n\n## 🔍 Explanation\n\n- JOIN finds matching alerts.\n- DISTINCT removes duplicates.",
      },
      {
        approach_title: "EXISTS",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name FROM users u WHERE EXISTS (SELECT 1 FROM fraud_alerts f WHERE f.user_id = u.id AND f.alert_status = 'open');",
        explanation:
          "## 🧠 Approach\n\nUse EXISTS to check presence of open alerts.\n\n## 🔍 Explanation\n\n- Stops at first match → efficient.\n- No need for DISTINCT.",
      },
    ],
  },
  {
    code: "BANK_040",
    approaches: [
      {
        approach_title: "JOIN + SUM",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT l.id AS loan_id, SUM(r.total_due - r.total_paid) AS pending_amount FROM loans l JOIN loan_repayments r ON l.id = r.loan_id WHERE l.loan_status = 'active' AND r.repayment_status IN ('pending','partial','late') GROUP BY l.id;",
        explanation:
          "## 🧠 Approach\n\nSum unpaid portions per loan.\n\n## 🔍 Explanation\n\n- `(total_due - total_paid)` gives pending amount.\n- Filter ensures only relevant repayments.\n- GROUP BY aggregates per loan.",
      },
      {
        approach_title: "CASE SUM",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT l.id AS loan_id, SUM(CASE WHEN r.repayment_status IN ('pending','partial','late') THEN r.total_due - r.total_paid ELSE 0 END) AS pending_amount FROM loans l JOIN loan_repayments r ON l.id = r.loan_id WHERE l.loan_status = 'active' GROUP BY l.id HAVING COUNT(*) FILTER (WHERE r.repayment_status IN ('pending','partial','late')) > 0;",
        explanation:
          "## 🧠 Approach\n\nMove repayment filter inside SUM.\n\n## 🔍 Explanation\n\n- Avoids filtering rows before aggregation.\n- Same result, but slightly less clear.",
      },
    ],
  },
  {
    code: "BANK_041",
    approaches: [
      {
        approach_title: "Negative filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, user_id, current_balance FROM accounts WHERE current_balance < 0;",
        explanation:
          "## 🧠 Approach\n\nFilter accounts whose current balance is below zero.\n\n## 🧩 Query\n\n```sql\nSELECT id, user_id, current_balance\nFROM accounts\nWHERE current_balance < 0;\n```\n\n## 🔍 Explanation\n\n- `current_balance < 0` identifies accounts with negative balances.\n- Only the required columns are selected.\n- No ordering is needed because the question does not ask for sorted results.",
      },
      {
        approach_title: "BETWEEN-style check",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, user_id, current_balance FROM accounts WHERE current_balance <= -0.01;",
        explanation:
          "## 🧠 Approach\n\nUse an explicit negative threshold.\n\n## 🧩 Query\n\n```sql\nSELECT id, user_id, current_balance\nFROM accounts\nWHERE current_balance <= -0.01;\n```\n\n## 🔍 Explanation\n\n- If balances are stored with cents, `<= -0.01` captures balances below zero.\n- This is less general than `current_balance < 0` because it assumes two-decimal money precision.\n- The direct negative comparison is cleaner and safer.",
      },
    ],
  },
  {
    code: "BANK_042",
    approaches: [
      {
        approach_title: "LEFT anti join",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.full_name FROM users u LEFT JOIN accounts a ON u.id = a.user_id WHERE a.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nUse a left join to find users without matching accounts.\n\n## 🧩 Query\n\n```sql\nSELECT u.id, u.full_name\nFROM users u\nLEFT JOIN accounts a ON u.id = a.user_id\nWHERE a.id IS NULL;\n```\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps every user even when they have no account.\n- Users without accounts produce `NULL` values for account columns.\n- `WHERE a.id IS NULL` keeps only those unmatched users.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name FROM users u WHERE NOT EXISTS (SELECT 1 FROM accounts a WHERE a.user_id = u.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to check that no account exists for each user.\n\n## 🧩 Query\n\n```sql\nSELECT u.id, u.full_name\nFROM users u\nWHERE NOT EXISTS (\n  SELECT 1\n  FROM accounts a\n  WHERE a.user_id = u.id\n);\n```\n\n## 🔍 Explanation\n\n- For each user, the subquery searches for at least one matching account.\n- `NOT EXISTS` keeps users where no matching account is found.\n- This avoids duplicate handling and is often a strong anti-join pattern.",
      },
      {
        approach_title: "NOT IN",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, full_name FROM users WHERE id NOT IN (SELECT user_id FROM accounts WHERE user_id IS NOT NULL);",
        explanation:
          "## 🧠 Approach\n\nExclude users whose IDs appear in the accounts table.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name\nFROM users\nWHERE id NOT IN (\n  SELECT user_id\n  FROM accounts\n  WHERE user_id IS NOT NULL\n);\n```\n\n## 🔍 Explanation\n\n- The subquery returns user IDs that have accounts.\n- The outer query keeps users whose IDs are not in that list.\n- `WHERE user_id IS NOT NULL` is important because `NOT IN` behaves badly if the subquery contains `NULL`.",
      },
    ],
  },
  {
    code: "BANK_043",
    approaches: [
      {
        approach_title: "ORDER LIMIT",
        approach_type: "sorting",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, user_id, current_balance FROM accounts ORDER BY current_balance DESC, id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nSort accounts by balance from highest to lowest and keep the first 5.\n\n## 🧩 Query\n\n```sql\nSELECT id, user_id, current_balance\nFROM accounts\nORDER BY current_balance DESC, id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- `ORDER BY current_balance DESC` puts highest balances first.\n- `id ASC` is the tie-breaker required by the question configuration.\n- `LIMIT 5` returns only the top 5 accounts.",
      },
      {
        approach_title: "ROW_NUMBER",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, user_id, current_balance FROM (SELECT id, user_id, current_balance, ROW_NUMBER() OVER (ORDER BY current_balance DESC, id ASC) AS rn FROM accounts) ranked_accounts WHERE rn <= 5 ORDER BY current_balance DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank accounts using `ROW_NUMBER`, then keep the first 5.\n\n## 🧩 Query\n\n```sql\nSELECT id, user_id, current_balance\nFROM (\n  SELECT id,\n         user_id,\n         current_balance,\n         ROW_NUMBER() OVER (ORDER BY current_balance DESC, id ASC) AS rn\n  FROM accounts\n) ranked_accounts\nWHERE rn <= 5\nORDER BY current_balance DESC, id ASC;\n```\n\n## 🔍 Explanation\n\n- `ROW_NUMBER()` assigns a unique rank based on balance descending and id ascending.\n- The outer query keeps rows where `rn <= 5`.\n- The final `ORDER BY` preserves the required output order.",
      },
    ],
  },
  {
    code: "BANK_044",
    approaches: [
      {
        approach_title: "JOIN group top",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.full_name, COUNT(t.id) AS transaction_count FROM users u JOIN accounts a ON u.id = a.user_id JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name ORDER BY transaction_count DESC, u.id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nJoin users to their accounts and transactions, count transactions per user, then return the top 5.\n\n## 🧩 Query\n\n```sql\nSELECT u.id, u.full_name, COUNT(t.id) AS transaction_count\nFROM users u\nJOIN accounts a ON u.id = a.user_id\nJOIN transactions t ON a.id = t.account_id\nGROUP BY u.id, u.full_name\nORDER BY transaction_count DESC, u.id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- `users` joins to `accounts` through `u.id = a.user_id`.\n- `accounts` joins to `transactions` through `a.id = t.account_id`.\n- `COUNT(t.id)` counts transactions for each user.\n- `ORDER BY transaction_count DESC, u.id ASC` ranks users and handles ties.\n- `LIMIT 5` returns only the top 5 users.",
      },
      {
        approach_title: "Pre-aggregate accounts",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name, tx.transaction_count FROM users u JOIN (SELECT a.user_id, COUNT(t.id) AS transaction_count FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id) tx ON tx.user_id = u.id ORDER BY tx.transaction_count DESC, u.id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount transactions per user first, then join to users for names.\n\n## 🧩 Query\n\n```sql\nSELECT u.id, u.full_name, tx.transaction_count\nFROM users u\nJOIN (\n  SELECT a.user_id, COUNT(t.id) AS transaction_count\n  FROM accounts a\n  JOIN transactions t ON a.id = t.account_id\n  GROUP BY a.user_id\n) tx ON tx.user_id = u.id\nORDER BY tx.transaction_count DESC, u.id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- The subquery aggregates transaction counts by `a.user_id`.\n- The outer query joins those totals to `users` to return `id` and `full_name`.\n- This separates aggregation from presentation and can be easier to reason about.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, full_name, transaction_count FROM (SELECT u.id, u.full_name, COUNT(t.id) AS transaction_count, ROW_NUMBER() OVER (ORDER BY COUNT(t.id) DESC, u.id ASC) AS rn FROM users u JOIN accounts a ON u.id = a.user_id JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name) ranked_users WHERE rn <= 5 ORDER BY transaction_count DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nAggregate transaction counts and rank users using a window function.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, transaction_count\nFROM (\n  SELECT u.id,\n         u.full_name,\n         COUNT(t.id) AS transaction_count,\n         ROW_NUMBER() OVER (ORDER BY COUNT(t.id) DESC, u.id ASC) AS rn\n  FROM users u\n  JOIN accounts a ON u.id = a.user_id\n  JOIN transactions t ON a.id = t.account_id\n  GROUP BY u.id, u.full_name\n) ranked_users\nWHERE rn <= 5\nORDER BY transaction_count DESC, id ASC;\n```\n\n## 🔍 Explanation\n\n- The grouped query calculates each user's transaction count.\n- `ROW_NUMBER()` ranks users by transaction count descending and user id ascending.\n- The outer query keeps the first 5 ranked rows.\n- The final ordering matches the required comparator order.",
      },
    ],
  },
  {
    code: "BANK_045",
    approaches: [
      {
        approach_title: "LEFT anti join",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.full_name FROM users u JOIN accounts a ON u.id = a.user_id LEFT JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name HAVING COUNT(t.id) = 0;",
        explanation:
          "## 🧠 Approach\n\nLEFT anti join\n\n## 🧩 Query\n\n```sql\nSELECT u.id, u.full_name FROM users u JOIN accounts a ON u.id = a.user_id LEFT JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name HAVING COUNT(t.id) = 0;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "EXISTS + NOT EXISTS",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name FROM users u WHERE EXISTS (SELECT 1 FROM accounts a WHERE a.user_id = u.id) AND NOT EXISTS (SELECT 1 FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE a.user_id = u.id);",
        explanation:
          "## 🧠 Approach\n\nRequire at least one account and no transactions across any account.\n\n## 🧩 Query\n\n```sql\nSELECT u.id, u.full_name\nFROM users u\nWHERE EXISTS (\n  SELECT 1\n  FROM accounts a\n  WHERE a.user_id = u.id\n)\nAND NOT EXISTS (\n  SELECT 1\n  FROM accounts a\n  JOIN transactions t ON a.id = t.account_id\n  WHERE a.user_id = u.id\n);\n```\n\n## 🔍 Explanation\n\n- The first `EXISTS` confirms the user has at least one account.\n- The second `NOT EXISTS` confirms none of that user's accounts have any transactions.\n- This avoids duplicate rows and expresses the business rule very clearly.",
      },
      {
        approach_title: "Grouped HAVING",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT u.id, u.full_name FROM users u JOIN accounts a ON u.id = a.user_id LEFT JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name HAVING COUNT(t.id) = 0;",
        explanation:
          "## 🧠 Approach\n\nGroup by user and keep only users whose transaction count is zero.\n\n## 🧩 Query\n\n```sql\nSELECT u.id, u.full_name\nFROM users u\nJOIN accounts a ON u.id = a.user_id\nLEFT JOIN transactions t ON a.id = t.account_id\nGROUP BY u.id, u.full_name\nHAVING COUNT(t.id) = 0;\n```\n\n## 🔍 Explanation\n\n- The join to `accounts` ensures only users with accounts are considered.\n- The left join to `transactions` lets users with no transactions remain in the grouped result.\n- `COUNT(t.id) = 0` means no transaction rows were found for that user.",
      },
    ],
  },
  {
    code: "BANK_046",
    approaches: [
      {
        approach_title: "AVG success",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ROUND(AVG(amount), 2) AS avg_transaction_amount FROM transactions WHERE transaction_status = 'success';",
        explanation:
          "## 🧠 Approach\n\nFilter successful transactions and calculate their average amount.\n\n## 🧩 Query\n\n```sql\nSELECT ROUND(AVG(amount), 2) AS avg_transaction_amount\nFROM transactions\nWHERE transaction_status = 'success';\n```\n\n## 🔍 Explanation\n\n- `WHERE transaction_status = 'success'` keeps only successful transactions.\n- `AVG(amount)` calculates the average amount among those transactions.\n- `ROUND(..., 2)` rounds the result to two decimal places.",
      },
      {
        approach_title: "FILTER AVG",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT ROUND(AVG(amount) FILTER (WHERE transaction_status = 'success'), 2) AS avg_transaction_amount FROM transactions;",
        explanation:
          "## 🧠 Approach\n\nUse aggregate filtering to average only successful transaction amounts.\n\n## 🧩 Query\n\n```sql\nSELECT ROUND(\n  AVG(amount) FILTER (WHERE transaction_status = 'success'),\n  2\n) AS avg_transaction_amount\nFROM transactions;\n```\n\n## 🔍 Explanation\n\n- `FILTER` applies the success condition only to the `AVG` aggregate.\n- Failed or pending transactions are not included in the average.\n- This is useful when calculating multiple status-based averages in one query.",
      },
      {
        approach_title: "CASE AVG",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT ROUND(AVG(CASE WHEN transaction_status = 'success' THEN amount END), 2) AS avg_transaction_amount FROM transactions;",
        explanation:
          "## 🧠 Approach\n\nUse `CASE` to pass only successful transaction amounts into `AVG`.\n\n## 🧩 Query\n\n```sql\nSELECT ROUND(\n  AVG(CASE WHEN transaction_status = 'success' THEN amount END),\n  2\n) AS avg_transaction_amount\nFROM transactions;\n```\n\n## 🔍 Explanation\n\n- Successful transactions return their `amount`.\n- Other rows return `NULL` implicitly.\n- `AVG` ignores `NULL`, so only successful transactions are averaged.",
      },
    ],
  },
  {
    code: "BANK_047",
    approaches: [
      {
        approach_title: "GROUP HAVING",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT a.user_id, COUNT(*) AS card_count FROM cards c JOIN accounts a ON a.id = c.account_id GROUP BY a.user_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nGROUP HAVING\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id, COUNT(*) AS card_count FROM cards c JOIN accounts a ON a.id = c.account_id GROUP BY a.user_id HAVING COUNT(*) > 1;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, card_count FROM (SELECT a.user_id, COUNT(*) AS card_count FROM cards c JOIN accounts a ON a.id = c.account_id GROUP BY a.user_id) card_totals WHERE card_count > 1;",
        explanation:
          "## 🧠 Approach\n\nSubquery filter\n\n## 🧩 Query\n\n```sql\nSELECT user_id, card_count FROM (SELECT a.user_id, COUNT(*) AS card_count FROM cards c JOIN accounts a ON a.id = c.account_id GROUP BY a.user_id) card_totals WHERE card_count > 1;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT user_id, card_count FROM (SELECT a.user_id, COUNT(*) OVER (PARTITION BY a.user_id) AS card_count FROM cards c JOIN accounts a ON a.id = c.account_id) counted_cards WHERE card_count > 1;",
        explanation:
          "## 🧠 Approach\n\nWindow count\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT user_id, card_count FROM (SELECT a.user_id, COUNT(*) OVER (PARTITION BY a.user_id) AS card_count FROM cards c JOIN accounts a ON a.id = c.account_id) counted_cards WHERE card_count > 1;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "BANK_048",
    approaches: [
      {
        approach_title: "Date filter",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, user_id, maturity_date FROM fixed_deposits WHERE maturity_date < CURRENT_DATE;",
        explanation:
          "## 🧠 Approach\n\nFind fixed deposits whose maturity date is before today.\n\n## 🧩 Query\n\n```sql\nSELECT id, user_id, maturity_date\nFROM fixed_deposits\nWHERE maturity_date < CURRENT_DATE;\n```\n\n## 🔍 Explanation\n\n- `CURRENT_DATE` represents today's date in PostgreSQL.\n- `maturity_date < CURRENT_DATE` means the fixed deposit has already matured before today.\n- Deposits maturing today are not included because the condition is strictly less than today.",
      },
      {
        approach_title: "NOW cast",
        approach_type: "date_filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, user_id, maturity_date FROM fixed_deposits WHERE maturity_date < NOW()::date;",
        explanation:
          "## 🧠 Approach\n\nCast the current timestamp to a date and compare maturity dates.\n\n## 🧩 Query\n\n```sql\nSELECT id, user_id, maturity_date\nFROM fixed_deposits\nWHERE maturity_date < NOW()::date;\n```\n\n## 🔍 Explanation\n\n- `NOW()` returns the current timestamp.\n- `NOW()::date` converts it to the current date.\n- This is equivalent to `CURRENT_DATE`, but `CURRENT_DATE` is clearer.",
      },
    ],
  },
  {
    code: "BANK_049",
    approaches: [
      {
        approach_title: "JOIN distinct",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT u.id, u.full_name FROM users u JOIN loans l ON u.id = l.borrower_user_id WHERE l.loan_status = 'active';",
        explanation:
          "## 🧠 Approach\n\nJoin users to active loans and deduplicate users.\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT u.id, u.full_name\nFROM users u\nJOIN loans l ON u.id = l.borrower_user_id\nWHERE l.loan_status = 'active';\n```\n\n## 🔍 Explanation\n\n- The join matches users with their loans.\n- `WHERE l.loan_status = 'active'` keeps only active loans.\n- `DISTINCT` ensures each user appears once, even if they have multiple active loans.",
      },
      {
        approach_title: "EXISTS",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name FROM users u WHERE EXISTS (SELECT 1 FROM loans l WHERE l.borrower_user_id = u.id AND l.loan_status = 'active');",
        explanation:
          "## 🧠 Approach\n\nEXISTS\n\n## 🧩 Query\n\n```sql\nSELECT u.id, u.full_name FROM users u WHERE EXISTS (SELECT 1 FROM loans l WHERE l.borrower_user_id = u.id AND l.loan_status = 'active');\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "IN subquery",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, full_name FROM users WHERE id IN (SELECT borrower_user_id FROM loans WHERE loan_status = 'active');",
        explanation:
          "## 🧠 Approach\n\nIN subquery\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name FROM users WHERE id IN (SELECT borrower_user_id FROM loans WHERE loan_status = 'active');\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "BANK_050",
    approaches: [
      {
        approach_title: "ORDER LIMIT",
        approach_type: "sorting",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, borrower_user_id, principal_amount FROM loans ORDER BY principal_amount DESC, id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nORDER LIMIT\n\n## 🧩 Query\n\n```sql\nSELECT id, borrower_user_id, principal_amount FROM loans ORDER BY principal_amount DESC, id ASC LIMIT 5;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "ROW_NUMBER",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, borrower_user_id, principal_amount FROM (SELECT id, borrower_user_id, principal_amount, ROW_NUMBER() OVER (ORDER BY principal_amount DESC, id ASC) AS rn FROM loans) ranked_loans WHERE rn <= 5 ORDER BY principal_amount DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nROW_NUMBER\n\n## 🧩 Query\n\n```sql\nSELECT id, borrower_user_id, principal_amount FROM (SELECT id, borrower_user_id, principal_amount, ROW_NUMBER() OVER (ORDER BY principal_amount DESC, id ASC) AS rn FROM loans) ranked_loans WHERE rn <= 5 ORDER BY principal_amount DESC, id ASC;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "BANK_051",
    approaches: [
      {
        approach_title: "Window SUM",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT account_id, id, SUM(amount) OVER (PARTITION BY account_id ORDER BY initiated_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_balance FROM transactions;",
        explanation:
          "## 🧠 Approach\n\nUse a running window sum per account.\n\n## 🧩 Query\n\n```sql\nSELECT account_id,\n       id,\n       SUM(amount) OVER (\n         PARTITION BY account_id\n         ORDER BY initiated_at, id\n         ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n       ) AS running_balance\nFROM transactions;\n```\n\n## 🔍 Explanation\n\n- `PARTITION BY account_id` restarts the running balance for each account.\n- `ORDER BY initiated_at, id` defines the transaction sequence inside each account.\n- `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` means the sum includes all earlier transactions in that account plus the current transaction.\n- The result returns one row per transaction with the cumulative transaction amount up to that row.",
      },
      {
        approach_title: "Default running frame",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT account_id, id, SUM(amount) OVER (PARTITION BY account_id ORDER BY initiated_at, id) AS running_balance FROM transactions;",
        explanation:
          "## 🧠 Approach\n\nUse the default ordered window frame for a cumulative sum.\n\n## 🧩 Query\n\n```sql\nSELECT account_id,\n       id,\n       SUM(amount) OVER (\n         PARTITION BY account_id\n         ORDER BY initiated_at, id\n       ) AS running_balance\nFROM transactions;\n```\n\n## 🔍 Explanation\n\n- This also calculates a cumulative sum ordered by transaction time and id.\n- PostgreSQL provides a default frame when `ORDER BY` is used in a window aggregate.\n- The explicit `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` version is usually clearer for learners and avoids ambiguity around peer rows.",
      },
      {
        approach_title: "Correlated SUM",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT t.account_id, t.id, (SELECT SUM(t2.amount) FROM transactions t2 WHERE t2.account_id = t.account_id AND (t2.initiated_at < t.initiated_at OR (t2.initiated_at = t.initiated_at AND t2.id <= t.id))) AS running_balance FROM transactions t;",
        explanation:
          "## 🧠 Approach\n\nFor each transaction, sum all earlier transactions from the same account.\n\n## 🧩 Query\n\n```sql\nSELECT t.account_id,\n       t.id,\n       (\n         SELECT SUM(t2.amount)\n         FROM transactions t2\n         WHERE t2.account_id = t.account_id\n           AND (\n             t2.initiated_at < t.initiated_at\n             OR (t2.initiated_at = t.initiated_at AND t2.id <= t.id)\n           )\n       ) AS running_balance\nFROM transactions t;\n```\n\n## 🔍 Explanation\n\n- The outer query visits each transaction.\n- The correlated subquery sums transactions from the same account that happened earlier, plus the current transaction.\n- The `id <= t.id` tie-breaker handles transactions with the same `initiated_at`.\n- This teaches the logic behind running totals, but it is usually much slower than a window function.",
      },
    ],
  },
  {
    code: "BANK_052",
    approaches: [
      {
        approach_title: "LAG balance",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id FROM (SELECT user_id, current_balance, LAG(current_balance) OVER (PARTITION BY user_id ORDER BY id) AS prev_balance FROM accounts) x WHERE prev_balance IS NOT NULL AND current_balance > prev_balance;",
        explanation:
          "## 🧠 Approach\n\nCompare each account balance with the previous account balance for the same user.\n\n## 🧩 Query\n\n```sql\nSELECT user_id\nFROM (\n  SELECT user_id,\n         current_balance,\n         LAG(current_balance) OVER (\n           PARTITION BY user_id\n           ORDER BY id\n         ) AS prev_balance\n  FROM accounts\n) x\nWHERE prev_balance IS NOT NULL\n  AND current_balance > prev_balance;\n```\n\n## 🔍 Explanation\n\n- `LAG(current_balance)` fetches the previous account balance within the same user.\n- `PARTITION BY user_id` ensures comparisons happen only between accounts of the same user.\n- `ORDER BY id` defines what previous account means.\n- The outer query keeps rows where the current account balance is greater than the previous account balance.",
      },
      {
        approach_title: "Self join previous",
        approach_type: "join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT a.user_id FROM accounts a JOIN accounts prev ON prev.user_id = a.user_id AND prev.id = (SELECT MAX(p.id) FROM accounts p WHERE p.user_id = a.user_id AND p.id < a.id) WHERE a.current_balance > prev.current_balance;",
        explanation:
          "## 🧠 Approach\n\nFind the immediately previous account with a self join and compare balances.\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id\nFROM accounts a\nJOIN accounts prev\n  ON prev.user_id = a.user_id\n AND prev.id = (\n   SELECT MAX(p.id)\n   FROM accounts p\n   WHERE p.user_id = a.user_id\n     AND p.id < a.id\n )\nWHERE a.current_balance > prev.current_balance;\n```\n\n## 🔍 Explanation\n\n- For each account `a`, the correlated subquery finds the largest earlier account id for the same user.\n- That row is joined as `prev`.\n- The `WHERE` clause keeps cases where the current balance is greater than the previous balance.\n- This is valid, but `LAG` is cleaner and more efficient for previous-row comparisons.",
      },
    ],
  },
  {
    code: "BANK_053",
    approaches: [
      {
        approach_title: "DENSE_RANK",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, current_balance FROM (SELECT id, current_balance, DENSE_RANK() OVER (ORDER BY current_balance DESC) AS rnk FROM accounts) x WHERE rnk = 2;",
        explanation:
          "## 🧠 Approach\n\nRank distinct balances and return the second-highest balance group.\n\n## 🧩 Query\n\n```sql\nSELECT id, current_balance\nFROM (\n  SELECT id,\n         current_balance,\n         DENSE_RANK() OVER (ORDER BY current_balance DESC) AS rnk\n  FROM accounts\n) x\nWHERE rnk = 2;\n```\n\n## 🔍 Explanation\n\n- `DENSE_RANK()` assigns rank 1 to the highest balance, rank 2 to the next distinct balance, and so on.\n- If multiple accounts share the second-highest balance, all of them are returned.\n- This matches the idea of second highest distinct balance.",
      },
      {
        approach_title: "MAX below MAX",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, current_balance FROM accounts WHERE current_balance = (SELECT MAX(current_balance) FROM accounts WHERE current_balance < (SELECT MAX(current_balance) FROM accounts));",
        explanation:
          "## 🧠 Approach\n\nFind the maximum balance below the overall maximum.\n\n## 🧩 Query\n\n```sql\nSELECT id, current_balance\nFROM accounts\nWHERE current_balance = (\n  SELECT MAX(current_balance)\n  FROM accounts\n  WHERE current_balance < (\n    SELECT MAX(current_balance)\n    FROM accounts\n  )\n);\n```\n\n## 🔍 Explanation\n\n- The innermost query finds the highest balance overall.\n- The middle query finds the highest balance that is less than that maximum.\n- The outer query returns all accounts having that second-highest distinct balance.\n- This avoids window functions but scans the table multiple times.",
      },
      {
        approach_title: "Distinct balance offset",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, current_balance FROM accounts WHERE current_balance = (SELECT current_balance FROM (SELECT DISTINCT current_balance FROM accounts ORDER BY current_balance DESC OFFSET 1 LIMIT 1) second_balance);",
        explanation:
          "## 🧠 Approach\n\nFind the second distinct balance using `DISTINCT`, `OFFSET`, and `LIMIT`.\n\n## 🧩 Query\n\n```sql\nSELECT id, current_balance\nFROM accounts\nWHERE current_balance = (\n  SELECT current_balance\n  FROM (\n    SELECT DISTINCT current_balance\n    FROM accounts\n    ORDER BY current_balance DESC\n    OFFSET 1 LIMIT 1\n  ) second_balance\n);\n```\n\n## 🔍 Explanation\n\n- The inner query lists distinct balances from highest to lowest.\n- `OFFSET 1 LIMIT 1` selects the second distinct balance.\n- The outer query returns every account with that balance.",
      },
    ],
  },
  {
    code: "BANK_054",
    approaches: [
      {
        approach_title: "ROW_NUMBER top 3",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, id, current_balance FROM (SELECT user_id, id, current_balance, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY current_balance DESC, id ASC) AS rn FROM accounts) ranked WHERE rn <= 3;",
        explanation:
          "## 🧠 Approach\n\nROW_NUMBER top 3\n\n## 🧩 Query\n\n```sql\nSELECT user_id, id, current_balance FROM (SELECT user_id, id, current_balance, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY current_balance DESC, id ASC) AS rn FROM accounts) ranked WHERE rn <= 3;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "DENSE_RANK top balances",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, id, current_balance FROM (SELECT user_id, id, current_balance, DENSE_RANK() OVER (PARTITION BY user_id ORDER BY current_balance DESC) AS rnk FROM accounts) ranked WHERE rnk <= 3;",
        explanation:
          "## 🧠 Approach\n\nKeep accounts whose balance is among the top 3 distinct balances per user.\n\n## 🧩 Query\n\n```sql\nSELECT user_id, id, current_balance\nFROM (\n  SELECT user_id,\n         id,\n         current_balance,\n         DENSE_RANK() OVER (\n           PARTITION BY user_id\n           ORDER BY current_balance DESC\n         ) AS rnk\n  FROM accounts\n) ranked\nWHERE rnk <= 3;\n```\n\n## 🔍 Explanation\n\n- `DENSE_RANK()` ranks distinct balance values per user.\n- If multiple accounts tie on the same balance, they receive the same rank.\n- This can return more than 3 accounts for a user when ties exist, so it is not identical to the `ROW_NUMBER` approach if exact top 3 rows are required.",
      },
    ],
  },
  {
    code: "BANK_055",
    approaches: [
      {
        approach_title: "FILTER HAVING",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING COUNT(*) = COUNT(*) FILTER (WHERE t.transaction_status = 'success');",
        explanation:
          "## 🧠 Approach\n\nGroup transactions by user and require every transaction to be successful.\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id\nFROM accounts a\nJOIN transactions t ON a.id = t.account_id\nGROUP BY a.user_id\nHAVING COUNT(*) = COUNT(*) FILTER (WHERE t.transaction_status = 'success');\n```\n\n## 🔍 Explanation\n\n- The join connects transactions to the users who own the accounts.\n- `COUNT(*)` counts all transactions for each user.\n- `COUNT(*) FILTER (WHERE transaction_status = 'success')` counts only successful transactions.\n- If both counts are equal, then every transaction for that user is successful.",
      },
      {
        approach_title: "BOOL_AND",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING BOOL_AND(t.transaction_status = 'success');",
        explanation:
          "## 🧠 Approach\n\nUse `BOOL_AND` to verify all grouped transactions are successful.\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id\nFROM accounts a\nJOIN transactions t ON a.id = t.account_id\nGROUP BY a.user_id\nHAVING BOOL_AND(t.transaction_status = 'success');\n```\n\n## 🔍 Explanation\n\n- `BOOL_AND(condition)` returns true only if the condition is true for every row in the group.\n- Here, every transaction for the user must have `transaction_status = 'success'`.\n- This is expressive and compact in PostgreSQL.",
      },
      {
        approach_title: "No non-success",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE NOT EXISTS (SELECT 1 FROM accounts a2 JOIN transactions t2 ON a2.id = t2.account_id WHERE a2.user_id = a.user_id AND t2.transaction_status <> 'success');",
        explanation:
          "## 🧠 Approach\n\nReturn users for whom no non-success transaction exists.\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT a.user_id\nFROM accounts a\nJOIN transactions t ON a.id = t.account_id\nWHERE NOT EXISTS (\n  SELECT 1\n  FROM accounts a2\n  JOIN transactions t2 ON a2.id = t2.account_id\n  WHERE a2.user_id = a.user_id\n    AND t2.transaction_status <> 'success'\n);\n```\n\n## 🔍 Explanation\n\n- The outer query considers users who have at least one transaction.\n- The `NOT EXISTS` subquery rejects any user with a transaction that is not successful.\n- `DISTINCT` ensures each qualifying user appears once.",
      },
    ],
  },
  {
    code: "BANK_056",
    approaches: [
      {
        approach_title: "Scalar AVG",
        approach_type: "subquery",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, user_id, current_balance FROM accounts WHERE current_balance > (SELECT AVG(current_balance) FROM accounts);",
        explanation:
          "## 🧠 Approach\n\nCompare each account balance with the overall average balance.\n\n## 🧩 Query\n\n```sql\nSELECT id, user_id, current_balance\nFROM accounts\nWHERE current_balance > (\n  SELECT AVG(current_balance)\n  FROM accounts\n);\n```\n\n## 🔍 Explanation\n\n- The subquery calculates the average account balance across all accounts.\n- The outer query returns accounts whose `current_balance` is greater than that average.\n- This is the clearest way to compare each row against a global aggregate.",
      },
      {
        approach_title: "Window AVG",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, user_id, current_balance FROM (SELECT id, user_id, current_balance, AVG(current_balance) OVER () AS avg_balance FROM accounts) x WHERE current_balance > avg_balance;",
        explanation:
          "## 🧠 Approach\n\nCalculate the overall average as a window value, then filter.\n\n## 🧩 Query\n\n```sql\nSELECT id, user_id, current_balance\nFROM (\n  SELECT id,\n         user_id,\n         current_balance,\n         AVG(current_balance) OVER () AS avg_balance\n  FROM accounts\n) x\nWHERE current_balance > avg_balance;\n```\n\n## 🔍 Explanation\n\n- `AVG(current_balance) OVER ()` calculates the same overall average on every row.\n- The outer query compares each account's balance to that value.\n- This is useful when you want to keep the aggregate value available alongside row-level data.",
      },
      {
        approach_title: "CROSS JOIN AVG",
        approach_type: "join",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT a.id, a.user_id, a.current_balance FROM accounts a CROSS JOIN (SELECT AVG(current_balance) AS avg_balance FROM accounts) avg_accounts WHERE a.current_balance > avg_accounts.avg_balance;",
        explanation:
          "## 🧠 Approach\n\nCalculate the average once and cross join it to every account row.\n\n## 🧩 Query\n\n```sql\nSELECT a.id, a.user_id, a.current_balance\nFROM accounts a\nCROSS JOIN (\n  SELECT AVG(current_balance) AS avg_balance\n  FROM accounts\n) avg_accounts\nWHERE a.current_balance > avg_accounts.avg_balance;\n```\n\n## 🔍 Explanation\n\n- The derived table computes the average balance once.\n- `CROSS JOIN` makes that average available to each account row.\n- The `WHERE` clause filters accounts above the average.",
      },
    ],
  },
  {
    code: "BANK_057",
    approaches: [
      {
        approach_title: "FILTER counts",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT a.user_id, COUNT(*) FILTER (WHERE t.transaction_type = 'debit') AS debit_count, COUNT(*) FILTER (WHERE t.transaction_type = 'credit') AS credit_count FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING COUNT(*) FILTER (WHERE t.transaction_type = 'debit') > COUNT(*) FILTER (WHERE t.transaction_type = 'credit');",
        explanation:
          "## 🧠 Approach\n\nCount debit and credit transactions per user, then keep users with more debits.\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id,\n       COUNT(*) FILTER (WHERE t.transaction_type = 'debit') AS debit_count,\n       COUNT(*) FILTER (WHERE t.transaction_type = 'credit') AS credit_count\nFROM accounts a\nJOIN transactions t ON a.id = t.account_id\nGROUP BY a.user_id\nHAVING COUNT(*) FILTER (WHERE t.transaction_type = 'debit')\n     > COUNT(*) FILTER (WHERE t.transaction_type = 'credit');\n```\n\n## 🔍 Explanation\n\n- The join maps transactions back to users through accounts.\n- The first filtered count counts only debit transactions.\n- The second filtered count counts only credit transactions.\n- `HAVING` compares the two aggregates and keeps users where debit count is greater.",
      },
      {
        approach_title: "SUM CASE counts",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT a.user_id, SUM(CASE WHEN t.transaction_type = 'debit' THEN 1 ELSE 0 END) AS debit_count, SUM(CASE WHEN t.transaction_type = 'credit' THEN 1 ELSE 0 END) AS credit_count FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING SUM(CASE WHEN t.transaction_type = 'debit' THEN 1 ELSE 0 END) > SUM(CASE WHEN t.transaction_type = 'credit' THEN 1 ELSE 0 END);",
        explanation:
          "## 🧠 Approach\n\nUse conditional sums to count debit and credit transactions.\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id,\n       SUM(CASE WHEN t.transaction_type = 'debit' THEN 1 ELSE 0 END) AS debit_count,\n       SUM(CASE WHEN t.transaction_type = 'credit' THEN 1 ELSE 0 END) AS credit_count\nFROM accounts a\nJOIN transactions t ON a.id = t.account_id\nGROUP BY a.user_id\nHAVING SUM(CASE WHEN t.transaction_type = 'debit' THEN 1 ELSE 0 END)\n     > SUM(CASE WHEN t.transaction_type = 'credit' THEN 1 ELSE 0 END);\n```\n\n## 🔍 Explanation\n\n- Debit rows contribute `1` to `debit_count`; other rows contribute `0`.\n- Credit rows contribute `1` to `credit_count`; other rows contribute `0`.\n- `HAVING` keeps users where debit transactions exceed credit transactions.",
      },
      {
        approach_title: "Pre-aggregate",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT user_id, debit_count, credit_count FROM (SELECT a.user_id, COUNT(*) FILTER (WHERE t.transaction_type = 'debit') AS debit_count, COUNT(*) FILTER (WHERE t.transaction_type = 'credit') AS credit_count FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id) counts WHERE debit_count > credit_count;",
        explanation:
          "## 🧠 Approach\n\nCalculate debit and credit counts first, then filter the result.\n\n## 🧩 Query\n\n```sql\nSELECT user_id, debit_count, credit_count\nFROM (\n  SELECT a.user_id,\n         COUNT(*) FILTER (WHERE t.transaction_type = 'debit') AS debit_count,\n         COUNT(*) FILTER (WHERE t.transaction_type = 'credit') AS credit_count\n  FROM accounts a\n  JOIN transactions t ON a.id = t.account_id\n  GROUP BY a.user_id\n) counts\nWHERE debit_count > credit_count;\n```\n\n## 🔍 Explanation\n\n- The inner query produces one row per user with both counts.\n- The outer query applies a simple row-level filter on those computed values.\n- This can be easier to read because the aggregate expressions are not repeated in `HAVING`.",
      },
    ],
  },
  {
    code: "BANK_058",
    approaches: [
      {
        approach_title: "GROUP MAX",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT account_id, MAX(amount) AS max_transaction FROM transactions GROUP BY account_id;",
        explanation:
          "## 🧠 Approach\n\nGroup transactions by account and take the maximum transaction amount.\n\n## 🧩 Query\n\n```sql\nSELECT account_id, MAX(amount) AS max_transaction\nFROM transactions\nGROUP BY account_id;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY account_id` creates one group per account.\n- `MAX(amount)` returns the largest transaction amount in each account's group.\n- The result contains one row per account with its highest transaction amount.",
      },
      {
        approach_title: "Window MAX",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT account_id, max_transaction FROM (SELECT account_id, MAX(amount) OVER (PARTITION BY account_id) AS max_transaction FROM transactions) x;",
        explanation:
          "## 🧠 Approach\n\nWindow MAX\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT account_id, max_transaction FROM (SELECT account_id, MAX(amount) OVER (PARTITION BY account_id) AS max_transaction FROM transactions) x;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "Correlated MAX",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT t.account_id, (SELECT MAX(t2.amount) FROM transactions t2 WHERE t2.account_id = t.account_id) AS max_transaction FROM transactions t;",
        explanation:
          "## 🧠 Approach\n\nCorrelated MAX\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT t.account_id, (SELECT MAX(t2.amount) FROM transactions t2 WHERE t2.account_id = t.account_id) AS max_transaction FROM transactions t;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "BANK_059",
    approaches: [
      {
        approach_title: "ORDER LIMIT",
        approach_type: "sorting",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, account_id, amount FROM transactions ORDER BY amount DESC, id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nSort transactions by amount from highest to lowest and return the first 10.\n\n## 🧩 Query\n\n```sql\nSELECT id, account_id, amount\nFROM transactions\nORDER BY amount DESC, id ASC\nLIMIT 10;\n```\n\n## 🔍 Explanation\n\n- `ORDER BY amount DESC` places the largest transactions first.\n- `id ASC` is the required tie-breaker when two transactions have the same amount.\n- `LIMIT 10` keeps only the top 10 rows.",
      },
      {
        approach_title: "ROW_NUMBER top 10",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, account_id, amount FROM (SELECT id, account_id, amount, ROW_NUMBER() OVER (ORDER BY amount DESC, id ASC) AS rn FROM transactions) ranked WHERE rn <= 10 ORDER BY amount DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank transactions with `ROW_NUMBER`, then keep the first 10.\n\n## 🧩 Query\n\n```sql\nSELECT id, account_id, amount\nFROM (\n  SELECT id,\n         account_id,\n         amount,\n         ROW_NUMBER() OVER (ORDER BY amount DESC, id ASC) AS rn\n  FROM transactions\n) ranked\nWHERE rn <= 10\nORDER BY amount DESC, id ASC;\n```\n\n## 🔍 Explanation\n\n- `ROW_NUMBER()` assigns a unique rank using the required order.\n- The outer query keeps rows ranked 1 through 10.\n- The final `ORDER BY` ensures the output is still sorted correctly.",
      },
    ],
  },
  {
    code: "BANK_060",
    approaches: [
      {
        approach_title: "GROUP top 5",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT from_account_id, COUNT(*) AS transfer_count FROM transfers GROUP BY from_account_id ORDER BY transfer_count DESC, from_account_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount transfers initiated by each source account and return the top 5.\n\n## 🧩 Query\n\n```sql\nSELECT from_account_id, COUNT(*) AS transfer_count\nFROM transfers\nGROUP BY from_account_id\nORDER BY transfer_count DESC, from_account_id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY from_account_id` creates one group per initiating account.\n- `COUNT(*)` counts transfers sent from that account.\n- `ORDER BY transfer_count DESC, from_account_id ASC` ranks the most active transfer initiators first and breaks ties by account id.\n- `LIMIT 5` keeps only the top 5.",
      },
      {
        approach_title: "Subquery rank",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT from_account_id, transfer_count FROM (SELECT from_account_id, COUNT(*) AS transfer_count FROM transfers GROUP BY from_account_id) transfer_totals ORDER BY transfer_count DESC, from_account_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate transfer counts first, then sort and limit outside.\n\n## 🧩 Query\n\n```sql\nSELECT from_account_id, transfer_count\nFROM (\n  SELECT from_account_id, COUNT(*) AS transfer_count\n  FROM transfers\n  GROUP BY from_account_id\n) transfer_totals\nORDER BY transfer_count DESC, from_account_id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- The inner query calculates transfer counts per source account.\n- The outer query ranks those counts and returns the top 5.\n- This separates aggregation from ranking, which can improve readability.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT from_account_id, transfer_count FROM (SELECT from_account_id, transfer_count, ROW_NUMBER() OVER (ORDER BY transfer_count DESC, from_account_id ASC) AS rn FROM (SELECT from_account_id, COUNT(*) AS transfer_count FROM transfers GROUP BY from_account_id) grouped_transfers) ranked WHERE rn <= 5 ORDER BY transfer_count DESC, from_account_id ASC;",
        explanation:
          "## 🧠 Approach\n\nAggregate transfer counts, rank them with `ROW_NUMBER`, and keep the top 5.\n\n## 🧩 Query\n\n```sql\nSELECT from_account_id, transfer_count\nFROM (\n  SELECT from_account_id,\n         transfer_count,\n         ROW_NUMBER() OVER (\n           ORDER BY transfer_count DESC, from_account_id ASC\n         ) AS rn\n  FROM (\n    SELECT from_account_id, COUNT(*) AS transfer_count\n    FROM transfers\n    GROUP BY from_account_id\n  ) grouped_transfers\n) ranked\nWHERE rn <= 5\nORDER BY transfer_count DESC, from_account_id ASC;\n```\n\n## 🔍 Explanation\n\n- The innermost query counts transfers per source account.\n- `ROW_NUMBER()` ranks those grouped results.\n- `WHERE rn <= 5` returns the top 5 ranked accounts.\n- The final `ORDER BY` matches the required ordering.",
      },
    ],
  },
  {
    code: "BANK_061",
    approaches: [
      {
        approach_title: "ROW_NUMBER top 3",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, id, current_balance FROM (SELECT user_id, id, current_balance, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY current_balance DESC, id ASC) AS rn FROM accounts) ranked WHERE rn <= 3;",
        explanation:
          "## 🧠 Approach\n\nROW_NUMBER top 3\n\n## 🧩 Query\n\n```sql\nSELECT user_id, id, current_balance FROM (SELECT user_id, id, current_balance, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY current_balance DESC, id ASC) AS rn FROM accounts) ranked WHERE rn <= 3;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "DENSE_RANK balances",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, id, current_balance FROM (SELECT user_id, id, current_balance, DENSE_RANK() OVER (PARTITION BY user_id ORDER BY current_balance DESC) AS rnk FROM accounts) ranked WHERE rnk <= 3;",
        explanation:
          "## 🧠 Approach\n\nReturn accounts whose balance is in the top 3 distinct balance levels per user.\n\n## 🧩 Query\n\n```sql\nSELECT user_id, id, current_balance\nFROM (\n  SELECT user_id,\n         id,\n         current_balance,\n         DENSE_RANK() OVER (\n           PARTITION BY user_id\n           ORDER BY current_balance DESC\n         ) AS rnk\n  FROM accounts\n) ranked\nWHERE rnk <= 3;\n```\n\n## 🔍 Explanation\n\n- `DENSE_RANK()` ranks distinct balance values rather than individual rows.\n- If multiple accounts share the same balance, they receive the same rank.\n- This can return more than 3 accounts for a user when there are ties, so it is only appropriate when the business meaning is top 3 balance tiers.",
      },
      {
        approach_title: "LATERAL limit",
        approach_type: "join",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT u.user_id, a.id, a.current_balance FROM (SELECT DISTINCT user_id FROM accounts) u CROSS JOIN LATERAL (SELECT id, current_balance FROM accounts a WHERE a.user_id = u.user_id ORDER BY current_balance DESC, id ASC LIMIT 3) a;",
        explanation:
          "## 🧠 Approach\n\nFor each user, run a small ordered lookup that returns their top 3 accounts.\n\n## 🧩 Query\n\n```sql\nSELECT u.user_id, a.id, a.current_balance\nFROM (SELECT DISTINCT user_id FROM accounts) u\nCROSS JOIN LATERAL (\n  SELECT id, current_balance\n  FROM accounts a\n  WHERE a.user_id = u.user_id\n  ORDER BY current_balance DESC, id ASC\n  LIMIT 3\n) a;\n```\n\n## 🔍 Explanation\n\n- The derived table gets the list of users who have accounts.\n- `CROSS JOIN LATERAL` runs the inner query once for each user.\n- The lateral query sorts that user's accounts and keeps the top 3.\n- This is a useful PostgreSQL pattern for top-N-per-group queries.",
      },
    ],
  },
  {
    code: "BANK_062",
    approaches: [
      {
        approach_title: "LAG amount",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT account_id FROM (SELECT account_id, amount, LAG(amount) OVER (PARTITION BY account_id ORDER BY initiated_at, id) AS prev_amount FROM transactions) x WHERE prev_amount IS NOT NULL AND amount > prev_amount;",
        explanation:
          "## 🧠 Approach\n\nCompare each transaction amount with the previous transaction amount in the same account.\n\n## 🧩 Query\n\n```sql\nSELECT account_id\nFROM (\n  SELECT account_id,\n         amount,\n         LAG(amount) OVER (\n           PARTITION BY account_id\n           ORDER BY initiated_at, id\n         ) AS prev_amount\n  FROM transactions\n) x\nWHERE prev_amount IS NOT NULL\n  AND amount > prev_amount;\n```\n\n## 🔍 Explanation\n\n- `LAG(amount)` reads the previous transaction amount for the same account.\n- `PARTITION BY account_id` ensures comparisons do not cross account boundaries.\n- `ORDER BY initiated_at, id` defines transaction sequence.\n- The outer query keeps transactions where the amount increased compared with the previous one.",
      },
      {
        approach_title: "Self previous join",
        approach_type: "join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT t.account_id FROM transactions t JOIN transactions prev ON prev.id = (SELECT p.id FROM transactions p WHERE p.account_id = t.account_id AND (p.initiated_at < t.initiated_at OR (p.initiated_at = t.initiated_at AND p.id < t.id)) ORDER BY p.initiated_at DESC, p.id DESC LIMIT 1) WHERE t.amount > prev.amount;",
        explanation:
          "## 🧠 Approach\n\nFind each transaction's immediately previous transaction using a self join, then compare amounts.\n\n## 🧩 Query\n\n```sql\nSELECT t.account_id\nFROM transactions t\nJOIN transactions prev\n  ON prev.id = (\n    SELECT p.id\n    FROM transactions p\n    WHERE p.account_id = t.account_id\n      AND (\n        p.initiated_at < t.initiated_at\n        OR (p.initiated_at = t.initiated_at AND p.id < t.id)\n      )\n    ORDER BY p.initiated_at DESC, p.id DESC\n    LIMIT 1\n  )\nWHERE t.amount > prev.amount;\n```\n\n## 🔍 Explanation\n\n- For each transaction, the correlated subquery finds the immediately previous transaction in the same account.\n- The join brings that previous transaction into the row.\n- `WHERE t.amount > prev.amount` keeps only increases.\n- This is more verbose and usually slower than `LAG`, but it demonstrates the underlying previous-row logic.",
      },
    ],
  },
  {
    code: "BANK_063",
    approaches: [
      {
        approach_title: "LAG + BOOL_AND",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH ranked AS (SELECT account_id, amount, LAG(amount) OVER (PARTITION BY account_id ORDER BY initiated_at, id) AS prev_amount FROM transactions) SELECT account_id FROM ranked GROUP BY account_id HAVING BOOL_AND(prev_amount IS NULL OR amount > prev_amount);",
        explanation:
          "## 🧠 Approach\n\nCompare each transaction with the previous one, then require every comparison to show growth.\n\n## 🧩 Query\n\n```sql\nWITH ranked AS (\n  SELECT account_id,\n         amount,\n         LAG(amount) OVER (\n           PARTITION BY account_id\n           ORDER BY initiated_at, id\n         ) AS prev_amount\n  FROM transactions\n)\nSELECT account_id\nFROM ranked\nGROUP BY account_id\nHAVING BOOL_AND(prev_amount IS NULL OR amount > prev_amount);\n```\n\n## 🔍 Explanation\n\n- The CTE calculates the previous transaction amount for every transaction.\n- The first transaction per account has no previous amount, so `prev_amount IS NULL` is allowed.\n- For every later transaction, `amount > prev_amount` must be true.\n- `BOOL_AND(...)` ensures the condition is true for all rows in each account group.",
      },
      {
        approach_title: "No bad transition",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT t.account_id FROM transactions t WHERE NOT EXISTS (SELECT 1 FROM (SELECT account_id, amount, LAG(amount) OVER (PARTITION BY account_id ORDER BY initiated_at, id) AS prev_amount FROM transactions) x WHERE x.account_id = t.account_id AND x.prev_amount IS NOT NULL AND x.amount <= x.prev_amount);",
        explanation:
          "## 🧠 Approach\n\nReturn accounts where no transaction breaks the increasing pattern.\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT t.account_id\nFROM transactions t\nWHERE NOT EXISTS (\n  SELECT 1\n  FROM (\n    SELECT account_id,\n           amount,\n           LAG(amount) OVER (\n             PARTITION BY account_id\n             ORDER BY initiated_at, id\n           ) AS prev_amount\n    FROM transactions\n  ) x\n  WHERE x.account_id = t.account_id\n    AND x.prev_amount IS NOT NULL\n    AND x.amount <= x.prev_amount\n);\n```\n\n## 🔍 Explanation\n\n- The nested query identifies each transaction's previous amount.\n- A bad transition is any row where the current amount is less than or equal to the previous amount.\n- `NOT EXISTS` keeps only accounts where no such bad transition exists.\n- This is logically clear but more complex than grouping with `BOOL_AND`.",
      },
    ],
  },
  {
    code: "BANK_064",
    approaches: [
      {
        approach_title: "JOIN expired",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.full_name, k.expires_at FROM users u JOIN kyc_records k ON u.id = k.user_id WHERE k.kyc_status = 'expired';",
        explanation:
          "## 🧠 Approach\n\nJoin users with their KYC records and filter expired KYC statuses.\n\n## 🧩 Query\n\n```sql\nSELECT u.id, u.full_name, k.expires_at\nFROM users u\nJOIN kyc_records k ON u.id = k.user_id\nWHERE k.kyc_status = 'expired';\n```\n\n## 🔍 Explanation\n\n- `JOIN kyc_records` connects each user to their KYC information.\n- `WHERE k.kyc_status = 'expired'` keeps only expired KYC records.\n- The result returns the user's id, name, and KYC expiry time.",
      },
      {
        approach_title: "JOIN + IN",
        approach_type: "join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name, k.expires_at FROM users u JOIN kyc_records k ON u.id = k.user_id WHERE k.kyc_status IN ('expired');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` for the expired status filter.\n\n## 🧩 Query\n\n```sql\nSELECT u.id, u.full_name, k.expires_at\nFROM users u\nJOIN kyc_records k ON u.id = k.user_id\nWHERE k.kyc_status IN ('expired');\n```\n\n## 🔍 Explanation\n\n- `IN ('expired')` is equivalent to `= 'expired'` when only one value is listed.\n- This style is useful if multiple KYC statuses need to be included later.\n- For this question, direct equality is simpler.",
      },
      {
        approach_title: "EXISTS filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT u.id, u.full_name, k.expires_at FROM users u JOIN kyc_records k ON u.id = k.user_id WHERE EXISTS (SELECT 1 FROM kyc_records k2 WHERE k2.user_id = u.id AND k2.id = k.id AND k2.kyc_status = 'expired');",
        explanation:
          "## 🧠 Approach\n\nUse `EXISTS` to confirm the joined KYC record is expired.\n\n## 🧩 Query\n\n```sql\nSELECT u.id, u.full_name, k.expires_at\nFROM users u\nJOIN kyc_records k ON u.id = k.user_id\nWHERE EXISTS (\n  SELECT 1\n  FROM kyc_records k2\n  WHERE k2.user_id = u.id\n    AND k2.id = k.id\n    AND k2.kyc_status = 'expired'\n);\n```\n\n## 🔍 Explanation\n\n- The main join returns user/KYC rows.\n- The `EXISTS` subquery checks that the same KYC row has expired status.\n- This is valid, but unnecessarily complex for a simple status filter.",
      },
    ],
  },
  {
    code: "BANK_065",
    approaches: [
      {
        approach_title: "Filter GROUP HAVING",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT a.user_id, COUNT(*) AS failed_count FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_status = 'failed' GROUP BY a.user_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nFilter failed transactions first, then count failed transactions per user.\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id, COUNT(*) AS failed_count\nFROM accounts a\nJOIN transactions t ON a.id = t.account_id\nWHERE t.transaction_status = 'failed'\nGROUP BY a.user_id\nHAVING COUNT(*) > 1;\n```\n\n## 🔍 Explanation\n\n- The join maps transactions to account owners.\n- `WHERE t.transaction_status = 'failed'` keeps only failed transactions.\n- `GROUP BY a.user_id` creates one group per user.\n- `HAVING COUNT(*) > 1` keeps users with more than one failed transaction.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT a.user_id, COUNT(*) FILTER (WHERE t.transaction_status = 'failed') AS failed_count FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING COUNT(*) FILTER (WHERE t.transaction_status = 'failed') > 1;",
        explanation:
          "## 🧠 Approach\n\nCount failed transactions conditionally inside the aggregate.\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id,\n       COUNT(*) FILTER (WHERE t.transaction_status = 'failed') AS failed_count\nFROM accounts a\nJOIN transactions t ON a.id = t.account_id\nGROUP BY a.user_id\nHAVING COUNT(*) FILTER (WHERE t.transaction_status = 'failed') > 1;\n```\n\n## 🔍 Explanation\n\n- All transactions remain available in the grouped rows.\n- The `FILTER` clause counts only failed transactions.\n- `HAVING` keeps users whose failed transaction count is greater than one.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT a.user_id, SUM(CASE WHEN t.transaction_status = 'failed' THEN 1 ELSE 0 END) AS failed_count FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING SUM(CASE WHEN t.transaction_status = 'failed' THEN 1 ELSE 0 END) > 1;",
        explanation:
          "## 🧠 Approach\n\nUse conditional sums to count failed transactions per user.\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id,\n       SUM(CASE WHEN t.transaction_status = 'failed' THEN 1 ELSE 0 END) AS failed_count\nFROM accounts a\nJOIN transactions t ON a.id = t.account_id\nGROUP BY a.user_id\nHAVING SUM(CASE WHEN t.transaction_status = 'failed' THEN 1 ELSE 0 END) > 1;\n```\n\n## 🔍 Explanation\n\n- Failed transactions contribute `1`.\n- Other transactions contribute `0`.\n- The grouped sum becomes the failed transaction count.",
      },
    ],
  },
  {
    code: "BANK_066",
    approaches: [
      {
        approach_title: "FILTER zero",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING COUNT(*) FILTER (WHERE t.transaction_status = 'failed') = 0;",
        explanation:
          "## 🧠 Approach\n\nGroup users with transactions and keep only users whose failed count is zero.\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id\nFROM accounts a\nJOIN transactions t ON a.id = t.account_id\nGROUP BY a.user_id\nHAVING COUNT(*) FILTER (WHERE t.transaction_status = 'failed') = 0;\n```\n\n## 🔍 Explanation\n\n- The join maps transactions back to users through accounts.\n- The filtered count counts only failed transactions.\n- `HAVING ... = 0` means the user has transactions, but none of them failed.",
      },
      {
        approach_title: "BOOL_AND not failed",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING BOOL_AND(t.transaction_status <> 'failed');",
        explanation:
          "## 🧠 Approach\n\nRequire every transaction for the user to be non-failed.\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id\nFROM accounts a\nJOIN transactions t ON a.id = t.account_id\nGROUP BY a.user_id\nHAVING BOOL_AND(t.transaction_status <> 'failed');\n```\n\n## 🔍 Explanation\n\n- `BOOL_AND(...)` returns true only when the condition is true for every row in the group.\n- The condition `transaction_status <> 'failed'` must hold for every transaction.\n- This expresses the requirement directly.",
      },
      {
        approach_title: "NOT EXISTS failed",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE NOT EXISTS (SELECT 1 FROM accounts a2 JOIN transactions t2 ON a2.id = t2.account_id WHERE a2.user_id = a.user_id AND t2.transaction_status = 'failed');",
        explanation:
          "## 🧠 Approach\n\nReturn users for whom no failed transaction exists.\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT a.user_id\nFROM accounts a\nJOIN transactions t ON a.id = t.account_id\nWHERE NOT EXISTS (\n  SELECT 1\n  FROM accounts a2\n  JOIN transactions t2 ON a2.id = t2.account_id\n  WHERE a2.user_id = a.user_id\n    AND t2.transaction_status = 'failed'\n);\n```\n\n## 🔍 Explanation\n\n- The outer query limits the result to users who have at least one transaction.\n- The correlated `NOT EXISTS` rejects users with any failed transaction.\n- `DISTINCT` removes duplicates caused by multiple transactions.",
      },
    ],
  },
  {
    code: "BANK_067",
    approaches: [
      {
        approach_title: "GROUP HAVING AVG",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT account_id, AVG(amount) AS avg_amount FROM transactions GROUP BY account_id HAVING AVG(amount) > (SELECT AVG(amount) FROM transactions);",
        explanation:
          "## 🧠 Approach\n\nCompare each account's average transaction amount with the overall average transaction amount.\n\n## 🧩 Query\n\n```sql\nSELECT account_id, AVG(amount) AS avg_amount\nFROM transactions\nGROUP BY account_id\nHAVING AVG(amount) > (\n  SELECT AVG(amount)\n  FROM transactions\n);\n```\n\n## 🔍 Explanation\n\n- `GROUP BY account_id` calculates one average per account.\n- `AVG(amount)` in the select list is the account-level average.\n- The scalar subquery calculates the overall transaction average.\n- `HAVING` keeps only accounts whose average is above the overall average.",
      },
      {
        approach_title: "Precompute overall AVG",
        approach_type: "join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT t.account_id, AVG(t.amount) AS avg_amount FROM transactions t CROSS JOIN (SELECT AVG(amount) AS overall_avg FROM transactions) overall GROUP BY t.account_id, overall.overall_avg HAVING AVG(t.amount) > overall.overall_avg;",
        explanation:
          "## 🧠 Approach\n\nCalculate the overall average once and compare grouped account averages against it.\n\n## 🧩 Query\n\n```sql\nSELECT t.account_id, AVG(t.amount) AS avg_amount\nFROM transactions t\nCROSS JOIN (\n  SELECT AVG(amount) AS overall_avg\n  FROM transactions\n) overall\nGROUP BY t.account_id, overall.overall_avg\nHAVING AVG(t.amount) > overall.overall_avg;\n```\n\n## 🔍 Explanation\n\n- The derived table computes the overall average transaction amount.\n- `CROSS JOIN` makes that value available to each transaction row before grouping.\n- `HAVING` compares each account's average with the overall average.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT account_id, avg_amount FROM (SELECT account_id, AVG(amount) AS avg_amount FROM transactions GROUP BY account_id) account_avgs WHERE avg_amount > (SELECT AVG(amount) FROM transactions);",
        explanation:
          "## 🧠 Approach\n\nCalculate account averages first, then filter the aggregated result.\n\n## 🧩 Query\n\n```sql\nSELECT account_id, avg_amount\nFROM (\n  SELECT account_id, AVG(amount) AS avg_amount\n  FROM transactions\n  GROUP BY account_id\n) account_avgs\nWHERE avg_amount > (\n  SELECT AVG(amount)\n  FROM transactions\n);\n```\n\n## 🔍 Explanation\n\n- The inner query produces one row per account with `avg_amount`.\n- The outer query compares that value to the overall transaction average.\n- This avoids repeating `AVG(amount)` in a `HAVING` clause.",
      },
    ],
  },
  {
    code: "BANK_068",
    approaches: [
      {
        approach_title: "GROUP ORDER LIMIT",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT account_id, AVG(amount) AS avg_amount FROM transactions GROUP BY account_id ORDER BY avg_amount DESC, account_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate average transaction amount per account and return the top 5.\n\n## 🧩 Query\n\n```sql\nSELECT account_id, AVG(amount) AS avg_amount\nFROM transactions\nGROUP BY account_id\nORDER BY avg_amount DESC, account_id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY account_id` creates one result per account.\n- `AVG(amount)` calculates the account's average transaction amount.\n- `ORDER BY avg_amount DESC, account_id ASC` ranks the highest averages first and applies the required tie-breaker.\n- `LIMIT 5` keeps only the top five accounts.",
      },
      {
        approach_title: "Subquery rank",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT account_id, avg_amount FROM (SELECT account_id, AVG(amount) AS avg_amount FROM transactions GROUP BY account_id) account_avgs ORDER BY avg_amount DESC, account_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCompute account averages first, then sort and limit outside.\n\n## 🧩 Query\n\n```sql\nSELECT account_id, avg_amount\nFROM (\n  SELECT account_id, AVG(amount) AS avg_amount\n  FROM transactions\n  GROUP BY account_id\n) account_avgs\nORDER BY avg_amount DESC, account_id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- The inner query calculates average amount per account.\n- The outer query performs ranking and limiting.\n- This separates aggregation from top-N selection.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT account_id, avg_amount FROM (SELECT account_id, avg_amount, ROW_NUMBER() OVER (ORDER BY avg_amount DESC, account_id ASC) AS rn FROM (SELECT account_id, AVG(amount) AS avg_amount FROM transactions GROUP BY account_id) account_avgs) ranked WHERE rn <= 5 ORDER BY avg_amount DESC, account_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank account averages using `ROW_NUMBER` and return the first 5.\n\n## 🧩 Query\n\n```sql\nSELECT account_id, avg_amount\nFROM (\n  SELECT account_id,\n         avg_amount,\n         ROW_NUMBER() OVER (\n           ORDER BY avg_amount DESC, account_id ASC\n         ) AS rn\n  FROM (\n    SELECT account_id, AVG(amount) AS avg_amount\n    FROM transactions\n    GROUP BY account_id\n  ) account_avgs\n) ranked\nWHERE rn <= 5\nORDER BY avg_amount DESC, account_id ASC;\n```\n\n## 🔍 Explanation\n\n- The innermost query calculates averages per account.\n- `ROW_NUMBER()` ranks those averages using the required order.\n- `WHERE rn <= 5` keeps the top five ranked accounts.\n- The final `ORDER BY` preserves the required output ordering.",
      },
    ],
  },
  {
    code: "BANK_069",
    approaches: [
      {
        approach_title: "Debit SUM top",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT a.user_id, SUM(t.amount) AS total_spent FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_type = 'debit' GROUP BY a.user_id ORDER BY total_spent DESC, a.user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nSum debit transaction amounts per user and return the top 5 spenders.\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id, SUM(t.amount) AS total_spent\nFROM accounts a\nJOIN transactions t ON a.id = t.account_id\nWHERE t.transaction_type = 'debit'\nGROUP BY a.user_id\nORDER BY total_spent DESC, a.user_id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- The join maps transactions to account owners.\n- `WHERE t.transaction_type = 'debit'` keeps spending transactions.\n- `SUM(t.amount)` calculates total spend per user.\n- `ORDER BY total_spent DESC, a.user_id ASC` ranks highest spenders first and breaks ties by user id.\n- `LIMIT 5` returns the top five users.",
      },
      {
        approach_title: "FILTER SUM",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT a.user_id, SUM(t.amount) FILTER (WHERE t.transaction_type = 'debit') AS total_spent FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING SUM(t.amount) FILTER (WHERE t.transaction_type = 'debit') IS NOT NULL ORDER BY total_spent DESC, a.user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation to sum only debit transaction amounts.\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id,\n       SUM(t.amount) FILTER (WHERE t.transaction_type = 'debit') AS total_spent\nFROM accounts a\nJOIN transactions t ON a.id = t.account_id\nGROUP BY a.user_id\nHAVING SUM(t.amount) FILTER (WHERE t.transaction_type = 'debit') IS NOT NULL\nORDER BY total_spent DESC, a.user_id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- All transactions are grouped by user.\n- The filtered `SUM` only adds debit amounts.\n- `HAVING ... IS NOT NULL` removes users with no debit transactions so the result matches the debit-only filtering approach.\n- The final order and limit produce the top 5.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT user_id, total_spent FROM (SELECT a.user_id, SUM(t.amount) AS total_spent FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_type = 'debit' GROUP BY a.user_id) spending ORDER BY total_spent DESC, user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate total debit spend first, then rank the result.\n\n## 🧩 Query\n\n```sql\nSELECT user_id, total_spent\nFROM (\n  SELECT a.user_id, SUM(t.amount) AS total_spent\n  FROM accounts a\n  JOIN transactions t ON a.id = t.account_id\n  WHERE t.transaction_type = 'debit'\n  GROUP BY a.user_id\n) spending\nORDER BY total_spent DESC, user_id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- The inner query computes total spending per user.\n- The outer query sorts and limits the aggregated result.\n- This is readable when separating metric calculation from ranking.",
      },
    ],
  },
  {
    code: "BANK_070",
    approaches: [
      {
        approach_title: "Credit SUM top",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT a.user_id, SUM(t.amount) AS total_income FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_type = 'credit' GROUP BY a.user_id ORDER BY total_income DESC, a.user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nSum credit transaction amounts per user and return the top 5 income users.\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id, SUM(t.amount) AS total_income\nFROM accounts a\nJOIN transactions t ON a.id = t.account_id\nWHERE t.transaction_type = 'credit'\nGROUP BY a.user_id\nORDER BY total_income DESC, a.user_id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- The join connects transactions to the users who own the accounts.\n- `WHERE t.transaction_type = 'credit'` keeps only incoming/credit transactions.\n- `SUM(t.amount)` calculates total credit amount per user.\n- `ORDER BY total_income DESC, a.user_id ASC` ranks users by income and handles ties.\n- `LIMIT 5` returns the top five users.",
      },
      {
        approach_title: "FILTER SUM",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT a.user_id, SUM(t.amount) FILTER (WHERE t.transaction_type = 'credit') AS total_income FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING SUM(t.amount) FILTER (WHERE t.transaction_type = 'credit') IS NOT NULL ORDER BY total_income DESC, a.user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nUse a filtered aggregate to sum only credit transactions.\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id,\n       SUM(t.amount) FILTER (WHERE t.transaction_type = 'credit') AS total_income\nFROM accounts a\nJOIN transactions t ON a.id = t.account_id\nGROUP BY a.user_id\nHAVING SUM(t.amount) FILTER (WHERE t.transaction_type = 'credit') IS NOT NULL\nORDER BY total_income DESC, a.user_id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- Transactions are grouped by user.\n- `FILTER` makes the `SUM` include only credit transactions.\n- `HAVING ... IS NOT NULL` removes users who have no credit transactions.\n- The final ordering returns the top five by total credit amount.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT user_id, total_income FROM (SELECT a.user_id, SUM(t.amount) AS total_income FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_type = 'credit' GROUP BY a.user_id) income ORDER BY total_income DESC, user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate total credit income first, then sort and limit.\n\n## 🧩 Query\n\n```sql\nSELECT user_id, total_income\nFROM (\n  SELECT a.user_id, SUM(t.amount) AS total_income\n  FROM accounts a\n  JOIN transactions t ON a.id = t.account_id\n  WHERE t.transaction_type = 'credit'\n  GROUP BY a.user_id\n) income\nORDER BY total_income DESC, user_id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- The inner query aggregates credit amounts per user.\n- The outer query ranks those totals and returns the top five.\n- This structure cleanly separates calculation from ranking.",
      },
    ],
  },
  {
    code: "BANK_071",
    approaches: [
      {
        approach_title: "FILTER equality",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING COUNT(*) FILTER (WHERE t.transaction_type = 'debit') = COUNT(*) FILTER (WHERE t.transaction_type = 'credit');",
        explanation:
          "## 🧠 Approach\n\nCount debit and credit transactions per user, then keep users where both counts are equal.\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id\nFROM accounts a\nJOIN transactions t ON a.id = t.account_id\nGROUP BY a.user_id\nHAVING COUNT(*) FILTER (WHERE t.transaction_type = 'debit')\n     = COUNT(*) FILTER (WHERE t.transaction_type = 'credit');\n```\n\n## 🔍 Explanation\n\n- The join connects transactions to the owning user through accounts.\n- `COUNT(*) FILTER (WHERE t.transaction_type = 'debit')` counts debit transactions.\n- `COUNT(*) FILTER (WHERE t.transaction_type = 'credit')` counts credit transactions.\n- `HAVING` compares those two grouped counts and returns only balanced users.",
      },
      {
        approach_title: "SUM CASE equality",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT a.user_id FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id HAVING SUM(CASE WHEN t.transaction_type = 'debit' THEN 1 ELSE 0 END) = SUM(CASE WHEN t.transaction_type = 'credit' THEN 1 ELSE 0 END);",
        explanation:
          "## 🧠 Approach\n\nUse conditional sums to count debits and credits, then compare them.\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id\nFROM accounts a\nJOIN transactions t ON a.id = t.account_id\nGROUP BY a.user_id\nHAVING SUM(CASE WHEN t.transaction_type = 'debit' THEN 1 ELSE 0 END)\n     = SUM(CASE WHEN t.transaction_type = 'credit' THEN 1 ELSE 0 END);\n```\n\n## 🔍 Explanation\n\n- Debit rows contribute `1` to the debit total.\n- Credit rows contribute `1` to the credit total.\n- Other transaction types contribute `0` to both totals.\n- The `HAVING` clause keeps users whose debit and credit counts are the same.",
      },
      {
        approach_title: "Pre-aggregate counts",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT user_id FROM (SELECT a.user_id, COUNT(*) FILTER (WHERE t.transaction_type = 'debit') AS debit_count, COUNT(*) FILTER (WHERE t.transaction_type = 'credit') AS credit_count FROM accounts a JOIN transactions t ON a.id = t.account_id GROUP BY a.user_id) counts WHERE debit_count = credit_count;",
        explanation:
          "## 🧠 Approach\n\nCalculate debit and credit counts first, then filter the computed result.\n\n## 🧩 Query\n\n```sql\nSELECT user_id\nFROM (\n  SELECT a.user_id,\n         COUNT(*) FILTER (WHERE t.transaction_type = 'debit') AS debit_count,\n         COUNT(*) FILTER (WHERE t.transaction_type = 'credit') AS credit_count\n  FROM accounts a\n  JOIN transactions t ON a.id = t.account_id\n  GROUP BY a.user_id\n) counts\nWHERE debit_count = credit_count;\n```\n\n## 🔍 Explanation\n\n- The inner query creates one row per user with both transaction counts.\n- The outer query applies a simple comparison between the computed columns.\n- This avoids repeating long aggregate expressions inside `HAVING`.",
      },
    ],
  },
  {
    code: "BANK_072",
    approaches: [
      {
        approach_title: "GROUP MAX",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT account_id, MAX(amount) AS max_transaction FROM transactions GROUP BY account_id;",
        explanation:
          "## 🧠 Approach\n\nGroup transactions by account and return the largest transaction amount for each account.\n\n## 🧩 Query\n\n```sql\nSELECT account_id, MAX(amount) AS max_transaction\nFROM transactions\nGROUP BY account_id;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY account_id` creates one group per account.\n- `MAX(amount)` finds the highest transaction amount in each account group.\n- The result contains one row per account with its highest single transaction amount.",
      },
      {
        approach_title: "Window MAX",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT account_id, max_transaction FROM (SELECT account_id, MAX(amount) OVER (PARTITION BY account_id) AS max_transaction FROM transactions) x;",
        explanation:
          "## 🧠 Approach\n\nWindow MAX\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT account_id, max_transaction FROM (SELECT account_id, MAX(amount) OVER (PARTITION BY account_id) AS max_transaction FROM transactions) x;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "Correlated MAX",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT t.account_id, (SELECT MAX(t2.amount) FROM transactions t2 WHERE t2.account_id = t.account_id) AS max_transaction FROM transactions t;",
        explanation:
          "## 🧠 Approach\n\nCorrelated MAX\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT t.account_id, (SELECT MAX(t2.amount) FROM transactions t2 WHERE t2.account_id = t.account_id) AS max_transaction FROM transactions t;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "BANK_073",
    approaches: [
      {
        approach_title: "LAG status",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT account_id FROM (SELECT account_id, transaction_status, LAG(transaction_status) OVER (PARTITION BY account_id ORDER BY initiated_at, id) AS prev_status FROM transactions) ranked WHERE transaction_status = 'failed' AND prev_status = 'failed';",
        explanation:
          "## 🧠 Approach\n\nCompare every transaction status with the previous transaction status for the same account.\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT account_id\nFROM (\n  SELECT account_id,\n         transaction_status,\n         LAG(transaction_status) OVER (\n           PARTITION BY account_id\n           ORDER BY initiated_at, id\n         ) AS prev_status\n  FROM transactions\n) ranked\nWHERE transaction_status = 'failed'\n  AND prev_status = 'failed';\n```\n\n## 🔍 Explanation\n\n- `LAG(transaction_status)` gets the previous transaction's status for the same account.\n- `PARTITION BY account_id` prevents comparing transactions from different accounts.\n- `ORDER BY initiated_at, id` defines the transaction sequence.\n- The outer query keeps rows where both the current and previous statuses are `failed`.\n- `DISTINCT` returns each matching account only once.",
      },
      {
        approach_title: "Self previous join",
        approach_type: "join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT t.account_id FROM transactions t JOIN transactions prev ON prev.id = (SELECT p.id FROM transactions p WHERE p.account_id = t.account_id AND (p.initiated_at < t.initiated_at OR (p.initiated_at = t.initiated_at AND p.id < t.id)) ORDER BY p.initiated_at DESC, p.id DESC LIMIT 1) WHERE t.transaction_status = 'failed' AND prev.transaction_status = 'failed';",
        explanation:
          "## 🧠 Approach\n\nJoin each transaction to its immediately previous transaction and check whether both failed.\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT t.account_id\nFROM transactions t\nJOIN transactions prev\n  ON prev.id = (\n    SELECT p.id\n    FROM transactions p\n    WHERE p.account_id = t.account_id\n      AND (\n        p.initiated_at < t.initiated_at\n        OR (p.initiated_at = t.initiated_at AND p.id < t.id)\n      )\n    ORDER BY p.initiated_at DESC, p.id DESC\n    LIMIT 1\n  )\nWHERE t.transaction_status = 'failed'\n  AND prev.transaction_status = 'failed';\n```\n\n## 🔍 Explanation\n\n- The correlated subquery finds the previous transaction for the same account.\n- The join brings that previous row beside the current row.\n- The `WHERE` clause checks that both statuses are failed.\n- This is more verbose than `LAG`, but it explains the previous-row comparison manually.",
      },
    ],
  },
  {
    code: "BANK_074",
    approaches: [
      {
        approach_title: "GROUP HAVING",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, COUNT(*) AS fraud_count FROM fraud_alerts GROUP BY user_id HAVING COUNT(*) > 3;",
        explanation:
          "## 🧠 Approach\n\nGroup fraud alerts by user and keep users with more than 3 alerts.\n\n## 🧩 Query\n\n```sql\nSELECT user_id, COUNT(*) AS fraud_count\nFROM fraud_alerts\nGROUP BY user_id\nHAVING COUNT(*) > 3;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY user_id` creates one group per user.\n- `COUNT(*)` counts fraud alerts for each user.\n- `HAVING COUNT(*) > 3` filters grouped results to high-fraud-activity users.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, fraud_count FROM (SELECT user_id, COUNT(*) AS fraud_count FROM fraud_alerts GROUP BY user_id) counts WHERE fraud_count > 3;",
        explanation:
          "## 🧠 Approach\n\nCalculate fraud alert counts first, then filter the result.\n\n## 🧩 Query\n\n```sql\nSELECT user_id, fraud_count\nFROM (\n  SELECT user_id, COUNT(*) AS fraud_count\n  FROM fraud_alerts\n  GROUP BY user_id\n) counts\nWHERE fraud_count > 3;\n```\n\n## 🔍 Explanation\n\n- The inner query produces one row per user with their fraud alert count.\n- The outer query keeps only users whose count is greater than 3.\n- This is useful when you want to reuse the aggregated value by name.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT user_id, fraud_count FROM (SELECT user_id, COUNT(*) OVER (PARTITION BY user_id) AS fraud_count FROM fraud_alerts) x WHERE fraud_count > 3;",
        explanation:
          "## 🧠 Approach\n\nUse a window function to count fraud alerts per user, then deduplicate.\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT user_id, fraud_count\nFROM (\n  SELECT user_id,\n         COUNT(*) OVER (PARTITION BY user_id) AS fraud_count\n  FROM fraud_alerts\n) x\nWHERE fraud_count > 3;\n```\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY user_id)` calculates each user's fraud count on every alert row.\n- `DISTINCT` collapses repeated rows into one result row per user.\n- This is valid, but `GROUP BY + HAVING` is simpler and more efficient for this output.",
      },
    ],
  },
  {
    code: "BANK_075",
    approaches: [
      {
        approach_title: "GROUP top 5",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT primary_branch_id, COUNT(*) AS account_count FROM accounts GROUP BY primary_branch_id ORDER BY account_count DESC, primary_branch_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nGROUP top 5\n\n## 🧩 Query\n\n```sql\nSELECT primary_branch_id, COUNT(*) AS account_count FROM accounts GROUP BY primary_branch_id ORDER BY account_count DESC, primary_branch_id ASC LIMIT 5;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT primary_branch_id, account_count FROM (SELECT primary_branch_id, COUNT(*) AS account_count FROM accounts GROUP BY primary_branch_id) branch_counts ORDER BY account_count DESC, primary_branch_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nSubquery top\n\n## 🧩 Query\n\n```sql\nSELECT primary_branch_id, account_count FROM (SELECT primary_branch_id, COUNT(*) AS account_count FROM accounts GROUP BY primary_branch_id) branch_counts ORDER BY account_count DESC, primary_branch_id ASC LIMIT 5;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT primary_branch_id, account_count FROM (SELECT primary_branch_id, account_count, ROW_NUMBER() OVER (ORDER BY account_count DESC, primary_branch_id ASC) AS rn FROM (SELECT primary_branch_id, COUNT(*) AS account_count FROM accounts GROUP BY primary_branch_id) branch_counts) ranked WHERE rn <= 5 ORDER BY account_count DESC, primary_branch_id ASC;",
        explanation:
          "## 🧠 Approach\n\nROW_NUMBER top\n\n## 🧩 Query\n\n```sql\nSELECT primary_branch_id, account_count FROM (SELECT primary_branch_id, account_count, ROW_NUMBER() OVER (ORDER BY account_count DESC, primary_branch_id ASC) AS rn FROM (SELECT primary_branch_id, COUNT(*) AS account_count FROM accounts GROUP BY primary_branch_id) branch_counts) ranked WHERE rn <= 5 ORDER BY account_count DESC, primary_branch_id ASC;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "BANK_076",
    approaches: [
      {
        approach_title: "BETWEEN date range",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT a.user_id FROM cards c JOIN accounts a ON a.id = c.account_id WHERE c.expires_at BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '30 days';",
        explanation:
          "## 🧠 Approach\n\nBETWEEN date range\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT a.user_id FROM cards c JOIN accounts a ON a.id = c.account_id WHERE c.expires_at BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '30 days';\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "Range comparison",
        approach_type: "date_filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT a.user_id FROM cards c JOIN accounts a ON a.id = c.account_id WHERE c.expires_at >= CURRENT_DATE AND c.expires_at <= CURRENT_DATE + INTERVAL '30 days';",
        explanation:
          "## 🧠 Approach\n\nRange comparison\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT a.user_id FROM cards c JOIN accounts a ON a.id = c.account_id WHERE c.expires_at >= CURRENT_DATE AND c.expires_at <= CURRENT_DATE + INTERVAL '30 days';\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "EXISTS by user",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT a.user_id FROM cards c JOIN accounts a ON a.id = c.account_id WHERE EXISTS (SELECT 1 FROM cards c2 JOIN accounts a2 ON a2.id = c2.account_id WHERE a2.user_id = a.user_id AND c2.expires_at BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '30 days');",
        explanation:
          "## 🧠 Approach\n\nEXISTS by user\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT a.user_id FROM cards c JOIN accounts a ON a.id = c.account_id WHERE EXISTS (SELECT 1 FROM cards c2 JOIN accounts a2 ON a2.id = c2.account_id WHERE a2.user_id = a.user_id AND c2.expires_at BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '30 days');\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "BANK_077",
    approaches: [
      {
        approach_title: "CTE max count",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH card_counts AS (SELECT a.user_id, COUNT(*) AS card_count FROM cards c JOIN accounts a ON a.id = c.account_id GROUP BY a.user_id) SELECT user_id, card_count FROM card_counts WHERE card_count = (SELECT MAX(card_count) FROM card_counts);",
        explanation:
          "## 🧠 Approach\n\nCTE max count\n\n## 🧩 Query\n\n```sql\nWITH card_counts AS (SELECT a.user_id, COUNT(*) AS card_count FROM cards c JOIN accounts a ON a.id = c.account_id GROUP BY a.user_id) SELECT user_id, card_count FROM card_counts WHERE card_count = (SELECT MAX(card_count) FROM card_counts);\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "DENSE_RANK max",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, card_count FROM (SELECT a.user_id, COUNT(*) AS card_count, DENSE_RANK() OVER (ORDER BY COUNT(*) DESC) AS rnk FROM cards c JOIN accounts a ON a.id = c.account_id GROUP BY a.user_id) ranked WHERE rnk = 1;",
        explanation:
          "## 🧠 Approach\n\nDENSE_RANK max\n\n## 🧩 Query\n\n```sql\nSELECT user_id, card_count FROM (SELECT a.user_id, COUNT(*) AS card_count, DENSE_RANK() OVER (ORDER BY COUNT(*) DESC) AS rnk FROM cards c JOIN accounts a ON a.id = c.account_id GROUP BY a.user_id) ranked WHERE rnk = 1;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "ALL comparison",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT a.user_id, COUNT(*) AS card_count FROM cards c JOIN accounts a ON a.id = c.account_id GROUP BY a.user_id HAVING COUNT(*) >= ALL (SELECT COUNT(*) FROM cards c2 JOIN accounts a2 ON a2.id = c2.account_id GROUP BY a2.user_id);",
        explanation:
          "## 🧠 Approach\n\nALL comparison\n\n## 🧩 Query\n\n```sql\nSELECT a.user_id, COUNT(*) AS card_count FROM cards c JOIN accounts a ON a.id = c.account_id GROUP BY a.user_id HAVING COUNT(*) >= ALL (SELECT COUNT(*) FROM cards c2 JOIN accounts a2 ON a2.id = c2.account_id GROUP BY a2.user_id);\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "BANK_078",
    approaches: [
      {
        approach_title: "LEFT anti join",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT a.id FROM accounts a LEFT JOIN transfers t ON a.id = t.from_account_id OR a.id = t.to_account_id WHERE t.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nLeft join accounts to transfers where the account appears as either sender or receiver, then keep unmatched accounts.\n\n## 🧩 Query\n\n```sql\nSELECT a.id\nFROM accounts a\nLEFT JOIN transfers t\n  ON a.id = t.from_account_id\n  OR a.id = t.to_account_id\nWHERE t.id IS NULL;\n```\n\n## 🔍 Explanation\n\n- The join checks whether an account was used as a source account or destination account.\n- `LEFT JOIN` keeps all accounts even if no transfer matches.\n- `WHERE t.id IS NULL` keeps only accounts that were never found in transfers.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT a.id FROM accounts a WHERE NOT EXISTS (SELECT 1 FROM transfers t WHERE t.from_account_id = a.id OR t.to_account_id = a.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to reject accounts that appear in any transfer.\n\n## 🧩 Query\n\n```sql\nSELECT a.id\nFROM accounts a\nWHERE NOT EXISTS (\n  SELECT 1\n  FROM transfers t\n  WHERE t.from_account_id = a.id\n     OR t.to_account_id = a.id\n);\n```\n\n## 🔍 Explanation\n\n- For each account, the subquery searches for any transfer where the account was sender or receiver.\n- `NOT EXISTS` keeps accounts only when no such transfer exists.\n- This is often clearer than a left join when expressing absence.",
      },
      {
        approach_title: "NOT IN union",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id FROM accounts WHERE id NOT IN (SELECT from_account_id FROM transfers WHERE from_account_id IS NOT NULL UNION SELECT to_account_id FROM transfers WHERE to_account_id IS NOT NULL);",
        explanation:
          "## 🧠 Approach\n\nBuild a set of all accounts used in transfers and exclude those accounts.\n\n## 🧩 Query\n\n```sql\nSELECT id\nFROM accounts\nWHERE id NOT IN (\n  SELECT from_account_id\n  FROM transfers\n  WHERE from_account_id IS NOT NULL\n  UNION\n  SELECT to_account_id\n  FROM transfers\n  WHERE to_account_id IS NOT NULL\n);\n```\n\n## 🔍 Explanation\n\n- The first part of the union collects sender accounts.\n- The second part collects receiver accounts.\n- `UNION` removes duplicates.\n- `NOT IN` returns accounts that are absent from that combined transfer account list.\n- The `IS NOT NULL` checks are important because `NOT IN` can behave unexpectedly when nulls are present.",
      },
    ],
  },
  {
    code: "BANK_079",
    approaches: [
      {
        approach_title: "SUM top 5",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT from_account_id, SUM(amount) AS total_transferred FROM transfers GROUP BY from_account_id ORDER BY total_transferred DESC, from_account_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nSum outgoing transfer amounts by source account and return the top 5.\n\n## 🧩 Query\n\n```sql\nSELECT from_account_id, SUM(amount) AS total_transferred\nFROM transfers\nGROUP BY from_account_id\nORDER BY total_transferred DESC, from_account_id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY from_account_id` groups transfers by the account that sent them.\n- `SUM(amount)` calculates total transferred amount per source account.\n- `ORDER BY total_transferred DESC, from_account_id ASC` ranks the largest totals first and applies the required tie-breaker.\n- `LIMIT 5` keeps the top five rows.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT from_account_id, total_transferred FROM (SELECT from_account_id, SUM(amount) AS total_transferred FROM transfers GROUP BY from_account_id) transfer_totals ORDER BY total_transferred DESC, from_account_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate transfer totals first, then sort and limit outside.\n\n## 🧩 Query\n\n```sql\nSELECT from_account_id, total_transferred\nFROM (\n  SELECT from_account_id, SUM(amount) AS total_transferred\n  FROM transfers\n  GROUP BY from_account_id\n) transfer_totals\nORDER BY total_transferred DESC, from_account_id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- The inner query produces total outgoing transfer amount per source account.\n- The outer query ranks those totals and returns the top five.\n- This separates aggregation from top-N selection.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT from_account_id, total_transferred FROM (SELECT from_account_id, total_transferred, ROW_NUMBER() OVER (ORDER BY total_transferred DESC, from_account_id ASC) AS rn FROM (SELECT from_account_id, SUM(amount) AS total_transferred FROM transfers GROUP BY from_account_id) grouped_transfers) ranked WHERE rn <= 5 ORDER BY total_transferred DESC, from_account_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank transfer totals with `ROW_NUMBER` and keep the first 5.\n\n## 🧩 Query\n\n```sql\nSELECT from_account_id, total_transferred\nFROM (\n  SELECT from_account_id,\n         total_transferred,\n         ROW_NUMBER() OVER (\n           ORDER BY total_transferred DESC, from_account_id ASC\n         ) AS rn\n  FROM (\n    SELECT from_account_id, SUM(amount) AS total_transferred\n    FROM transfers\n    GROUP BY from_account_id\n  ) grouped_transfers\n) ranked\nWHERE rn <= 5\nORDER BY total_transferred DESC, from_account_id ASC;\n```\n\n## 🔍 Explanation\n\n- The innermost query calculates total transferred amount per source account.\n- `ROW_NUMBER()` ranks accounts by total transferred amount.\n- `WHERE rn <= 5` returns the top five accounts.\n- The final `ORDER BY` keeps the output aligned with the required sort configuration.",
      },
    ],
  },
  {
    code: "BANK_080",
    approaches: [
      {
        approach_title: "Active loan SUM",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_loan FROM loans WHERE loan_status = 'active' GROUP BY borrower_user_id ORDER BY total_loan DESC, user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nActive loan SUM\n\n## 🧩 Query\n\n```sql\nSELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_loan FROM loans WHERE loan_status = 'active' GROUP BY borrower_user_id ORDER BY total_loan DESC, user_id ASC LIMIT 5;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "FILTER SUM",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT borrower_user_id AS user_id, SUM(outstanding_principal) FILTER (WHERE loan_status = 'active') AS total_loan FROM loans GROUP BY borrower_user_id HAVING SUM(outstanding_principal) FILTER (WHERE loan_status = 'active') IS NOT NULL ORDER BY total_loan DESC, user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nFILTER SUM\n\n## 🧩 Query\n\n```sql\nSELECT borrower_user_id AS user_id, SUM(outstanding_principal) FILTER (WHERE loan_status = 'active') AS total_loan FROM loans GROUP BY borrower_user_id HAVING SUM(outstanding_principal) FILTER (WHERE loan_status = 'active') IS NOT NULL ORDER BY total_loan DESC, user_id ASC LIMIT 5;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT user_id, total_loan FROM (SELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_loan FROM loans WHERE loan_status = 'active' GROUP BY borrower_user_id) loan_totals ORDER BY total_loan DESC, user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nSubquery top\n\n## 🧩 Query\n\n```sql\nSELECT user_id, total_loan FROM (SELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_loan FROM loans WHERE loan_status = 'active' GROUP BY borrower_user_id) loan_totals ORDER BY total_loan DESC, user_id ASC LIMIT 5;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 4,
        query:
          "SELECT user_id, total_loan FROM (SELECT user_id, total_loan, ROW_NUMBER() OVER (ORDER BY total_loan DESC, user_id ASC) AS rn FROM (SELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_loan FROM loans WHERE loan_status = 'active' GROUP BY borrower_user_id) loan_totals) ranked WHERE rn <= 5 ORDER BY total_loan DESC, user_id ASC;",
        explanation:
          "## 🧠 Approach\n\nROW_NUMBER top\n\n## 🧩 Query\n\n```sql\nSELECT user_id, total_loan FROM (SELECT user_id, total_loan, ROW_NUMBER() OVER (ORDER BY total_loan DESC, user_id ASC) AS rn FROM (SELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_loan FROM loans WHERE loan_status = 'active' GROUP BY borrower_user_id) loan_totals) ranked WHERE rn <= 5 ORDER BY total_loan DESC, user_id ASC;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "BANK_081",
    approaches: [
      {
        approach_title: "Branch AVG top",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT b.id, b.branch_name, ROUND(AVG(a.current_balance), 2) AS avg_account_balance FROM branches b JOIN accounts a ON b.id = a.primary_branch_id GROUP BY b.id, b.branch_name ORDER BY avg_account_balance DESC, b.id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nJoin branches with accounts, calculate average account balance per branch, then return the top 5.\n\n## 🧩 Query\n\n```sql\nSELECT b.id, b.branch_name, ROUND(AVG(a.current_balance), 2) AS avg_account_balance\nFROM branches b\nJOIN accounts a ON b.id = a.primary_branch_id\nGROUP BY b.id, b.branch_name\nORDER BY avg_account_balance DESC, b.id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- `JOIN accounts` connects each account to its primary branch.\n- `AVG(a.current_balance)` calculates the average balance for each branch.\n- `ROUND(..., 2)` formats the average to two decimals.\n- `ORDER BY avg_account_balance DESC, b.id ASC` follows the required ranking rule.\n- `LIMIT 5` returns the top five branches.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, branch_name, avg_account_balance FROM (SELECT b.id, b.branch_name, ROUND(AVG(a.current_balance), 2) AS avg_account_balance FROM branches b JOIN accounts a ON b.id = a.primary_branch_id GROUP BY b.id, b.branch_name) branch_avgs ORDER BY avg_account_balance DESC, id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate branch averages first, then sort and limit the aggregated result.\n\n## 🔍 Explanation\n\n- The inner query produces one row per branch with its average balance.\n- The outer query performs the top-5 ranking.\n- This separates metric calculation from ranking.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, branch_name, avg_account_balance FROM (SELECT id, branch_name, avg_account_balance, ROW_NUMBER() OVER (ORDER BY avg_account_balance DESC, id ASC) AS rn FROM (SELECT b.id, b.branch_name, ROUND(AVG(a.current_balance), 2) AS avg_account_balance FROM branches b JOIN accounts a ON b.id = a.primary_branch_id GROUP BY b.id, b.branch_name) branch_avgs) ranked WHERE rn <= 5 ORDER BY avg_account_balance DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank branch averages using `ROW_NUMBER`, then keep the first 5.\n\n## 🔍 Explanation\n\n- The innermost query calculates average balance per branch.\n- `ROW_NUMBER()` ranks branches by average balance descending and branch id ascending.\n- The outer filter keeps `rn <= 5`.\n- Final ordering preserves the expected sorted output.",
      },
    ],
  },
  {
    code: "BANK_082",
    approaches: [
      {
        approach_title: "SUM CASE counts",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.full_name, SUM(CASE WHEN t.transaction_status = 'failed' THEN 1 ELSE 0 END) AS failed_txn_count, SUM(CASE WHEN t.transaction_status = 'posted' THEN 1 ELSE 0 END) AS posted_txn_count FROM users u JOIN accounts a ON u.id = a.user_id JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name HAVING SUM(CASE WHEN t.transaction_status = 'failed' THEN 1 ELSE 0 END) > SUM(CASE WHEN t.transaction_status = 'posted' THEN 1 ELSE 0 END);",
        explanation:
          "## 🧠 Approach\n\nCount failed and posted transactions per user using conditional sums, then compare both counts.\n\n## 🔍 Explanation\n\n- Users are joined to accounts and transactions.\n- Failed transactions contribute `1` to `failed_txn_count`.\n- Posted transactions contribute `1` to `posted_txn_count`.\n- `HAVING` keeps only users where failed count is greater than posted count.",
      },
      {
        approach_title: "FILTER counts",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name, COUNT(*) FILTER (WHERE t.transaction_status = 'failed') AS failed_txn_count, COUNT(*) FILTER (WHERE t.transaction_status = 'posted') AS posted_txn_count FROM users u JOIN accounts a ON u.id = a.user_id JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name HAVING COUNT(*) FILTER (WHERE t.transaction_status = 'failed') > COUNT(*) FILTER (WHERE t.transaction_status = 'posted');",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL `FILTER` clauses for cleaner conditional counts.\n\n## 🔍 Explanation\n\n- `COUNT(*) FILTER (...)` counts only rows matching each status.\n- The grouped result has one row per user.\n- `HAVING` compares failed and posted counts directly.",
      },
      {
        approach_title: "Pre-aggregate",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, full_name, failed_txn_count, posted_txn_count FROM (SELECT u.id, u.full_name, COUNT(*) FILTER (WHERE t.transaction_status = 'failed') AS failed_txn_count, COUNT(*) FILTER (WHERE t.transaction_status = 'posted') AS posted_txn_count FROM users u JOIN accounts a ON u.id = a.user_id JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name) counts WHERE failed_txn_count > posted_txn_count;",
        explanation:
          "## 🧠 Approach\n\nCalculate both transaction counts first, then filter by the computed aliases.\n\n## 🔍 Explanation\n\n- The inner query builds user-level failed and posted counts.\n- The outer query applies a simpler `WHERE failed_txn_count > posted_txn_count` condition.\n- This avoids repeating aggregate expressions.",
      },
    ],
  },
  {
    code: "BANK_083",
    approaches: [
      {
        approach_title: "CTE approval rate",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH product_approval_rates AS (SELECT lp.id, lp.product_name, 100.0 * SUM(CASE WHEN la.application_status = 'approved' THEN 1 ELSE 0 END) / COUNT(*) AS approval_rate FROM loan_products lp JOIN loan_applications la ON lp.id = la.loan_product_id GROUP BY lp.id, lp.product_name) SELECT id, product_name, ROUND(approval_rate, 2) AS approval_rate FROM product_approval_rates WHERE approval_rate > (SELECT AVG(approval_rate) FROM product_approval_rates);",
        explanation:
          "## 🧠 Approach\n\nCalculate approval rate per product, then compare each product against the average approval rate.\n\n## 🔍 Explanation\n\n- The CTE calculates one approval rate per loan product.\n- Approved applications are counted using conditional aggregation.\n- `100.0` forces decimal percentage calculation.\n- The outer query keeps products whose approval rate is above the average of all product approval rates.",
      },
      {
        approach_title: "FILTER rate",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH product_approval_rates AS (SELECT lp.id, lp.product_name, 100.0 * COUNT(*) FILTER (WHERE la.application_status = 'approved') / COUNT(*) AS approval_rate FROM loan_products lp JOIN loan_applications la ON lp.id = la.loan_product_id GROUP BY lp.id, lp.product_name) SELECT id, product_name, ROUND(approval_rate, 2) AS approval_rate FROM product_approval_rates WHERE approval_rate > (SELECT AVG(approval_rate) FROM product_approval_rates);",
        explanation:
          "## 🧠 Approach\n\nUse `FILTER` to count approved applications while computing product approval rates.\n\n## 🔍 Explanation\n\n- `COUNT(*) FILTER (WHERE application_status = 'approved')` counts approved applications.\n- Dividing by total applications gives the approval rate.\n- The outer query compares each product rate against the average product rate.",
      },
    ],
  },
  {
    code: "BANK_084",
    approaches: [
      {
        approach_title: "COUNT DISTINCT top",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.full_name, COUNT(DISTINCT ct.merchant_name) AS distinct_merchant_count FROM users u JOIN accounts a ON u.id = a.user_id JOIN cards c ON a.id = c.account_id JOIN card_transactions ct ON c.id = ct.card_id WHERE ct.transaction_status = 'settled' AND ct.merchant_name IS NOT NULL GROUP BY u.id, u.full_name ORDER BY distinct_merchant_count DESC, u.id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nJoin users to settled card transactions and count distinct merchants per user.\n\n## 🔍 Explanation\n\n- Users connect to card transactions through accounts and cards.\n- Only settled card transactions are included.\n- `merchant_name IS NOT NULL` prevents null merchants from affecting the distinct count.\n- `COUNT(DISTINCT ct.merchant_name)` calculates merchant diversity.\n- Ordering and `LIMIT 10` return the top users.",
      },
      {
        approach_title: "Pre-distinct merchants",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name, COUNT(*) AS distinct_merchant_count FROM users u JOIN (SELECT DISTINCT a.user_id, ct.merchant_name FROM accounts a JOIN cards c ON a.id = c.account_id JOIN card_transactions ct ON c.id = ct.card_id WHERE ct.transaction_status = 'settled' AND ct.merchant_name IS NOT NULL) user_merchants ON u.id = user_merchants.user_id GROUP BY u.id, u.full_name ORDER BY distinct_merchant_count DESC, u.id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nFirst create unique user-merchant pairs, then count those pairs per user.\n\n## 🔍 Explanation\n\n- The subquery removes duplicate merchant visits per user.\n- The outer query counts unique merchants for each user.\n- This is sometimes easier to reason about than `COUNT(DISTINCT ...)`.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, full_name, distinct_merchant_count FROM (SELECT id, full_name, distinct_merchant_count, ROW_NUMBER() OVER (ORDER BY distinct_merchant_count DESC, id ASC) AS rn FROM (SELECT u.id, u.full_name, COUNT(DISTINCT ct.merchant_name) AS distinct_merchant_count FROM users u JOIN accounts a ON u.id = a.user_id JOIN cards c ON a.id = c.account_id JOIN card_transactions ct ON c.id = ct.card_id WHERE ct.transaction_status = 'settled' AND ct.merchant_name IS NOT NULL GROUP BY u.id, u.full_name) merchant_counts) ranked WHERE rn <= 10 ORDER BY distinct_merchant_count DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate merchant diversity, rank users, then keep the top 10.\n\n## 🔍 Explanation\n\n- The inner query computes distinct merchant count per user.\n- `ROW_NUMBER()` ranks users by merchant diversity.\n- `rn <= 10` keeps the top ten users.\n- Final ordering matches the required comparator config.",
      },
    ],
  },
  {
    code: "BANK_085",
    approaches: [
      {
        approach_title: "Outgoing vs incoming",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH outgoing_transfers AS (SELECT from_account_id AS account_id, SUM(amount) AS total_outgoing FROM transfers WHERE transfer_status = 'completed' GROUP BY from_account_id), incoming_transfers AS (SELECT to_account_id AS account_id, SUM(amount) AS total_incoming FROM transfers WHERE transfer_status = 'completed' AND to_account_id IS NOT NULL GROUP BY to_account_id) SELECT a.id, a.account_number, COALESCE(o.total_outgoing, 0) AS total_outgoing, COALESCE(i.total_incoming, 0) AS total_incoming FROM accounts a LEFT JOIN outgoing_transfers o ON a.id = o.account_id LEFT JOIN incoming_transfers i ON a.id = i.account_id WHERE COALESCE(o.total_outgoing, 0) > COALESCE(i.total_incoming, 0);",
        explanation:
          "## 🧠 Approach\n\nAggregate completed outgoing and incoming transfers separately, then compare them per account.\n\n## 🔍 Explanation\n\n- `outgoing_transfers` totals completed transfers sent from each account.\n- `incoming_transfers` totals completed transfers received by each account.\n- `LEFT JOIN` keeps accounts even if they have only outgoing or only incoming transfers.\n- `COALESCE(..., 0)` treats missing totals as zero.\n- The final `WHERE` keeps accounts where outgoing amount is greater than incoming amount.",
      },
      {
        approach_title: "UNION flow",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT a.id, a.account_number, SUM(CASE WHEN x.flow_type = 'outgoing' THEN x.amount ELSE 0 END) AS total_outgoing, SUM(CASE WHEN x.flow_type = 'incoming' THEN x.amount ELSE 0 END) AS total_incoming FROM accounts a JOIN (SELECT from_account_id AS account_id, amount, 'outgoing' AS flow_type FROM transfers WHERE transfer_status = 'completed' UNION ALL SELECT to_account_id AS account_id, amount, 'incoming' AS flow_type FROM transfers WHERE transfer_status = 'completed' AND to_account_id IS NOT NULL) x ON a.id = x.account_id GROUP BY a.id, a.account_number HAVING SUM(CASE WHEN x.flow_type = 'outgoing' THEN x.amount ELSE 0 END) > SUM(CASE WHEN x.flow_type = 'incoming' THEN x.amount ELSE 0 END);",
        explanation:
          "## 🧠 Approach\n\nNormalize outgoing and incoming transfers into one flow table, then aggregate by account.\n\n## 🔍 Explanation\n\n- `UNION ALL` creates one stream of account flows.\n- Outgoing transfers are tagged as `outgoing`; incoming transfers are tagged as `incoming`.\n- Conditional sums calculate total outgoing and incoming amounts.\n- `HAVING` keeps accounts where outgoing exceeds incoming.",
      },
    ],
  },
  {
    code: "BANK_086",
    approaches: [
      {
        approach_title: "Distinct categories top",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.full_name, COUNT(DISTINCT b.biller_category) AS distinct_biller_categories FROM users u JOIN accounts a ON u.id = a.user_id JOIN bill_payments bp ON a.id = bp.account_id JOIN billers b ON bp.biller_id = b.id WHERE bp.payment_status = 'paid' GROUP BY u.id, u.full_name ORDER BY distinct_biller_categories DESC, u.id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount the number of distinct paid biller categories per user and return the top 5.\n\n## 🔍 Explanation\n\n- Users are connected to bill payments through accounts.\n- `WHERE bp.payment_status = 'paid'` includes only completed paid bills.\n- `COUNT(DISTINCT b.biller_category)` measures category variety.\n- Ordering returns users with the most bill payment variety first.",
      },
      {
        approach_title: "Pre-distinct categories",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name, COUNT(*) AS distinct_biller_categories FROM users u JOIN (SELECT DISTINCT a.user_id, b.biller_category FROM accounts a JOIN bill_payments bp ON a.id = bp.account_id JOIN billers b ON bp.biller_id = b.id WHERE bp.payment_status = 'paid') user_categories ON u.id = user_categories.user_id GROUP BY u.id, u.full_name ORDER BY distinct_biller_categories DESC, u.id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCreate unique user-category pairs first, then count them per user.\n\n## 🔍 Explanation\n\n- The subquery removes duplicate payments within the same category.\n- The outer query counts how many unique categories each user has paid.\n- This is equivalent to `COUNT(DISTINCT ...)` but more explicit.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, full_name, distinct_biller_categories FROM (SELECT id, full_name, distinct_biller_categories, ROW_NUMBER() OVER (ORDER BY distinct_biller_categories DESC, id ASC) AS rn FROM (SELECT u.id, u.full_name, COUNT(DISTINCT b.biller_category) AS distinct_biller_categories FROM users u JOIN accounts a ON u.id = a.user_id JOIN bill_payments bp ON a.id = bp.account_id JOIN billers b ON bp.biller_id = b.id WHERE bp.payment_status = 'paid' GROUP BY u.id, u.full_name) category_counts) ranked WHERE rn <= 5 ORDER BY distinct_biller_categories DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate category diversity, rank users with `ROW_NUMBER`, and keep the top 5.\n\n## 🔍 Explanation\n\n- The inner aggregation calculates category variety per user.\n- `ROW_NUMBER()` ranks users using the required order.\n- The outer query keeps ranks 1 through 5.",
      },
    ],
  },
  {
    code: "BANK_087",
    approaches: [
      {
        approach_title: "LAG late status",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH repayment_flags AS (SELECT l.borrower_user_id AS user_id, lr.loan_id, lr.installment_number, lr.repayment_status, LAG(lr.repayment_status) OVER (PARTITION BY lr.loan_id ORDER BY lr.installment_number) AS prev_status FROM loan_repayments lr JOIN loans l ON lr.loan_id = l.id) SELECT DISTINCT u.id, u.full_name FROM users u JOIN repayment_flags rf ON u.id = rf.user_id WHERE rf.repayment_status = 'late' AND rf.prev_status = 'late';",
        explanation:
          "## 🧠 Approach\n\nUse `LAG` to compare each repayment status with the previous installment status on the same loan.\n\n## 🔍 Explanation\n\n- The CTE joins repayments to loans to get the borrower user id.\n- `LAG(repayment_status)` reads the previous installment status for the same loan.\n- The final query keeps users where both current and previous repayments are late.\n- `DISTINCT` prevents duplicate users when they have multiple consecutive late repayments.",
      },
      {
        approach_title: "Self join installments",
        approach_type: "join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT u.id, u.full_name FROM loan_repayments lr JOIN loan_repayments prev ON lr.loan_id = prev.loan_id AND lr.installment_number = prev.installment_number + 1 JOIN loans l ON lr.loan_id = l.id JOIN users u ON l.borrower_user_id = u.id WHERE lr.repayment_status = 'late' AND prev.repayment_status = 'late';",
        explanation:
          "## 🧠 Approach\n\nJoin each repayment to the previous installment and check if both are late.\n\n## 🔍 Explanation\n\n- `lr.installment_number = prev.installment_number + 1` pairs each installment with the one immediately before it.\n- Both repayment rows must have status `late`.\n- Joining through `loans` gives the borrower user.\n- `DISTINCT` returns each user once.",
      },
    ],
  },
  {
    code: "BANK_088",
    approaches: [
      {
        approach_title: "Earned vs redeemed",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH earned AS (SELECT user_id, SUM(points_earned) AS total_points_earned FROM reward_earnings GROUP BY user_id), redeemed AS (SELECT user_id, SUM(points_redeemed) AS total_points_redeemed FROM reward_redemptions GROUP BY user_id) SELECT u.id, u.full_name, ROUND(100.0 * COALESCE(r.total_points_redeemed, 0) / NULLIF(e.total_points_earned, 0), 2) AS redemption_rate FROM users u JOIN earned e ON u.id = e.user_id LEFT JOIN redeemed r ON u.id = r.user_id WHERE e.total_points_earned > 0 ORDER BY redemption_rate DESC, u.id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nAggregate earned and redeemed points separately, then calculate redemption percentage per user.\n\n## 🔍 Explanation\n\n- `earned` calculates total points earned per user.\n- `redeemed` calculates total points redeemed per user.\n- `LEFT JOIN redeemed` keeps users who earned points but redeemed none.\n- `COALESCE` treats missing redeemed points as zero.\n- `NULLIF` prevents division by zero.\n- Ordering returns the top 10 redemption rates.",
      },
      {
        approach_title: "Joined totals",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name, ROUND(100.0 * COALESCE(r.total_points_redeemed, 0) / NULLIF(e.total_points_earned, 0), 2) AS redemption_rate FROM users u JOIN (SELECT user_id, SUM(points_earned) AS total_points_earned FROM reward_earnings GROUP BY user_id) e ON u.id = e.user_id LEFT JOIN (SELECT user_id, SUM(points_redeemed) AS total_points_redeemed FROM reward_redemptions GROUP BY user_id) r ON u.id = r.user_id WHERE e.total_points_earned > 0 ORDER BY redemption_rate DESC, u.id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nUse inline derived tables instead of named CTEs to calculate earned and redeemed totals.\n\n## 🔍 Explanation\n\n- The derived tables produce the same totals as CTEs.\n- The final calculation divides redeemed points by earned points.\n- This version is compact but less readable than named CTEs.",
      },
    ],
  },
  {
    code: "BANK_089",
    approaches: [
      {
        approach_title: "Branch failure rate",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH branch_failure_rates AS (SELECT b.id, b.branch_name, 100.0 * SUM(CASE WHEN at.transaction_status = 'failed' THEN 1 ELSE 0 END) / COUNT(*) AS failure_rate FROM branches b JOIN atm_machines am ON b.id = am.branch_id JOIN atm_transactions at ON am.id = at.atm_id GROUP BY b.id, b.branch_name) SELECT id, branch_name, ROUND(failure_rate, 2) AS failure_rate FROM branch_failure_rates WHERE failure_rate > (SELECT AVG(failure_rate) FROM branch_failure_rates);",
        explanation:
          "## 🧠 Approach\n\nCalculate ATM failure rate per branch, then compare each branch against the average branch failure rate.\n\n## 🔍 Explanation\n\n- Branches connect to ATM transactions through ATM machines.\n- Failed ATM transactions are counted conditionally.\n- Failure rate is calculated as failed transactions divided by total ATM transactions, multiplied by 100.\n- The outer query keeps branches above the average failure rate.",
      },
      {
        approach_title: "FILTER rate",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH branch_failure_rates AS (SELECT b.id, b.branch_name, 100.0 * COUNT(*) FILTER (WHERE at.transaction_status = 'failed') / COUNT(*) AS failure_rate FROM branches b JOIN atm_machines am ON b.id = am.branch_id JOIN atm_transactions at ON am.id = at.atm_id GROUP BY b.id, b.branch_name) SELECT id, branch_name, ROUND(failure_rate, 2) AS failure_rate FROM branch_failure_rates WHERE failure_rate > (SELECT AVG(failure_rate) FROM branch_failure_rates);",
        explanation:
          "## 🧠 Approach\n\nUse `FILTER` to calculate failed transaction counts inside the failure-rate formula.\n\n## 🔍 Explanation\n\n- `COUNT(*) FILTER (WHERE transaction_status = 'failed')` counts failed ATM transactions.\n- Dividing by total transaction count gives the failure rate.\n- The outer query compares each branch with the average branch failure rate.",
      },
    ],
  },
  {
    code: "BANK_090",
    approaches: [
      {
        approach_title: "Branch average compare",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH user_branch_balances AS (SELECT a.primary_branch_id AS branch_id, a.user_id, SUM(a.current_balance) AS total_balance FROM accounts a WHERE a.primary_branch_id IS NOT NULL GROUP BY a.primary_branch_id, a.user_id), branch_avg_balances AS (SELECT branch_id, AVG(total_balance) AS avg_branch_balance FROM user_branch_balances GROUP BY branch_id) SELECT u.id, u.full_name, ub.branch_id, ub.total_balance FROM users u JOIN user_branch_balances ub ON u.id = ub.user_id JOIN branch_avg_balances bb ON ub.branch_id = bb.branch_id WHERE ub.total_balance > bb.avg_branch_balance;",
        explanation:
          "## 🧠 Approach\n\nCalculate each user's total balance within a branch, calculate branch average user balance, then compare them.\n\n## 🔍 Explanation\n\n- `user_branch_balances` computes total balance per user per primary branch.\n- `branch_avg_balances` computes the average of those user totals within each branch.\n- The final query joins users with both metrics.\n- `ub.total_balance > bb.avg_branch_balance` keeps users whose deposits exceed their branch average.",
      },
      {
        approach_title: "Window branch AVG",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, full_name, branch_id, total_balance FROM (SELECT u.id, u.full_name, ub.branch_id, ub.total_balance, AVG(ub.total_balance) OVER (PARTITION BY ub.branch_id) AS avg_branch_balance FROM users u JOIN (SELECT primary_branch_id AS branch_id, user_id, SUM(current_balance) AS total_balance FROM accounts WHERE primary_branch_id IS NOT NULL GROUP BY primary_branch_id, user_id) ub ON u.id = ub.user_id) x WHERE total_balance > avg_branch_balance;",
        explanation:
          "## 🧠 Approach\n\nCalculate user branch balances, then use a window average to get the branch average on each row.\n\n## 🔍 Explanation\n\n- The inner derived table calculates total balance per user per branch.\n- `AVG(total_balance) OVER (PARTITION BY branch_id)` calculates the average user balance for that branch.\n- The outer query filters users above their branch average.\n- This avoids a separate branch-average CTE.",
      },
    ],
  },
  {
    code: "BANK_091",
    approaches: [
      {
        approach_title: "Monthly rank",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH monthly_user_cashflow AS (SELECT a.user_id, DATE_TRUNC('month', t.posted_at) AS txn_month, SUM(CASE WHEN t.transaction_type = 'credit' THEN t.amount ELSE -t.amount END) AS net_cashflow FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_status = 'posted' AND t.posted_at IS NOT NULL GROUP BY a.user_id, DATE_TRUNC('month', t.posted_at)) SELECT user_id, txn_month, net_cashflow FROM (SELECT user_id, txn_month, net_cashflow, DENSE_RANK() OVER (PARTITION BY txn_month ORDER BY net_cashflow DESC) AS rnk FROM monthly_user_cashflow) ranked WHERE rnk <= 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate monthly net cashflow per user, then rank users inside each month.\n\n## 🧩 Query\n\n```sql\nWITH monthly_user_cashflow AS (\n  SELECT a.user_id,\n         DATE_TRUNC('month', t.posted_at) AS txn_month,\n         SUM(CASE\n               WHEN t.transaction_type = 'credit' THEN t.amount\n               ELSE -t.amount\n             END) AS net_cashflow\n  FROM accounts a\n  JOIN transactions t ON a.id = t.account_id\n  WHERE t.transaction_status = 'posted'\n    AND t.posted_at IS NOT NULL\n  GROUP BY a.user_id, DATE_TRUNC('month', t.posted_at)\n)\nSELECT user_id, txn_month, net_cashflow\nFROM (\n  SELECT user_id,\n         txn_month,\n         net_cashflow,\n         DENSE_RANK() OVER (\n           PARTITION BY txn_month\n           ORDER BY net_cashflow DESC\n         ) AS rnk\n  FROM monthly_user_cashflow\n) ranked\nWHERE rnk <= 5;\n```\n\n## 🔍 Explanation\n\n- The CTE calculates one monthly net cashflow per user.\n- Credits increase cashflow, while non-credit rows are treated as outflows by subtracting the amount.\n- `DATE_TRUNC('month', posted_at)` groups transactions into calendar months.\n- `DENSE_RANK()` ranks users separately for each month.\n- `rnk <= 5` returns the top 5 ranks per month and includes ties.",
      },
      {
        approach_title: "ROW_NUMBER monthly",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH monthly_user_cashflow AS (SELECT a.user_id, DATE_TRUNC('month', t.posted_at) AS txn_month, SUM(CASE WHEN t.transaction_type = 'credit' THEN t.amount ELSE -t.amount END) AS net_cashflow FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE t.transaction_status = 'posted' AND t.posted_at IS NOT NULL GROUP BY a.user_id, DATE_TRUNC('month', t.posted_at)) SELECT user_id, txn_month, net_cashflow FROM (SELECT user_id, txn_month, net_cashflow, ROW_NUMBER() OVER (PARTITION BY txn_month ORDER BY net_cashflow DESC, user_id ASC) AS rn FROM monthly_user_cashflow) ranked WHERE rn <= 5;",
        explanation:
          "## 🧠 Approach\n\nUse `ROW_NUMBER` to return exactly five users per month.\n\n## 🧩 Query\n\n```sql\nWITH monthly_user_cashflow AS (\n  SELECT a.user_id,\n         DATE_TRUNC('month', t.posted_at) AS txn_month,\n         SUM(CASE WHEN t.transaction_type = 'credit' THEN t.amount ELSE -t.amount END) AS net_cashflow\n  FROM accounts a\n  JOIN transactions t ON a.id = t.account_id\n  WHERE t.transaction_status = 'posted'\n    AND t.posted_at IS NOT NULL\n  GROUP BY a.user_id, DATE_TRUNC('month', t.posted_at)\n)\nSELECT user_id, txn_month, net_cashflow\nFROM (\n  SELECT user_id,\n         txn_month,\n         net_cashflow,\n         ROW_NUMBER() OVER (\n           PARTITION BY txn_month\n           ORDER BY net_cashflow DESC, user_id ASC\n         ) AS rn\n  FROM monthly_user_cashflow\n) ranked\nWHERE rn <= 5;\n```\n\n## 🔍 Explanation\n\n- The monthly cashflow metric is calculated the same way.\n- `ROW_NUMBER()` gives each user a unique rank per month.\n- This returns exactly five rows per month when at least five users exist.\n- It differs from `DENSE_RANK`, which may return more than five rows when ties exist.",
      },
    ],
  },
  {
    code: "BANK_092",
    approaches: [
      {
        approach_title: "Fraud vs tickets",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH fraud_counts AS (SELECT user_id, COUNT(*) AS fraud_count FROM fraud_alerts WHERE user_id IS NOT NULL GROUP BY user_id), ticket_counts AS (SELECT user_id, COUNT(*) AS ticket_count FROM support_tickets WHERE user_id IS NOT NULL GROUP BY user_id) SELECT u.id, u.full_name, f.fraud_count, COALESCE(t.ticket_count, 0) AS ticket_count FROM users u JOIN fraud_counts f ON u.id = f.user_id LEFT JOIN ticket_counts t ON u.id = t.user_id WHERE f.fraud_count > COALESCE(t.ticket_count, 0);",
        explanation:
          "## 🧠 Approach\n\nCount fraud alerts and support tickets separately, then compare the counts per user.\n\n## 🧩 Query\n\n```sql\nWITH fraud_counts AS (\n  SELECT user_id, COUNT(*) AS fraud_count\n  FROM fraud_alerts\n  WHERE user_id IS NOT NULL\n  GROUP BY user_id\n),\nticket_counts AS (\n  SELECT user_id, COUNT(*) AS ticket_count\n  FROM support_tickets\n  WHERE user_id IS NOT NULL\n  GROUP BY user_id\n)\nSELECT u.id,\n       u.full_name,\n       f.fraud_count,\n       COALESCE(t.ticket_count, 0) AS ticket_count\nFROM users u\nJOIN fraud_counts f ON u.id = f.user_id\nLEFT JOIN ticket_counts t ON u.id = t.user_id\nWHERE f.fraud_count > COALESCE(t.ticket_count, 0);\n```\n\n## 🔍 Explanation\n\n- `fraud_counts` calculates fraud alert count per user.\n- `ticket_counts` calculates support ticket count per user.\n- The final query joins users with their fraud count and optional ticket count.\n- `COALESCE(t.ticket_count, 0)` treats users with no support tickets as zero.\n- The `WHERE` clause keeps users whose fraud count is greater than their ticket count.",
      },
      {
        approach_title: "Inline totals",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name, f.fraud_count, COALESCE(t.ticket_count, 0) AS ticket_count FROM users u JOIN (SELECT user_id, COUNT(*) AS fraud_count FROM fraud_alerts WHERE user_id IS NOT NULL GROUP BY user_id) f ON u.id = f.user_id LEFT JOIN (SELECT user_id, COUNT(*) AS ticket_count FROM support_tickets WHERE user_id IS NOT NULL GROUP BY user_id) t ON u.id = t.user_id WHERE f.fraud_count > COALESCE(t.ticket_count, 0);",
        explanation:
          "## 🧠 Approach\n\nUse inline derived tables instead of CTEs for fraud and ticket counts.\n\n## 🔍 Explanation\n\n- The first derived table computes fraud count per user.\n- The second derived table computes ticket count per user.\n- The final comparison is the same as the CTE version.\n- This is slightly more compact but less readable for a multi-step metric.",
      },
      {
        approach_title: "UNION counts",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT u.id, u.full_name, SUM(x.fraud_count) AS fraud_count, SUM(x.ticket_count) AS ticket_count FROM users u JOIN (SELECT user_id, COUNT(*) AS fraud_count, 0 AS ticket_count FROM fraud_alerts WHERE user_id IS NOT NULL GROUP BY user_id UNION ALL SELECT user_id, 0 AS fraud_count, COUNT(*) AS ticket_count FROM support_tickets WHERE user_id IS NOT NULL GROUP BY user_id) x ON u.id = x.user_id GROUP BY u.id, u.full_name HAVING SUM(x.fraud_count) > SUM(x.ticket_count);",
        explanation:
          "## 🧠 Approach\n\nNormalize fraud and ticket counts into one stream, then aggregate by user.\n\n## 🔍 Explanation\n\n- The first branch contributes fraud counts.\n- The second branch contributes ticket counts.\n- `UNION ALL` stacks both metrics together.\n- The outer grouping sums both count columns per user.\n- `HAVING` compares the final fraud and ticket totals.",
      },
    ],
  },
  {
    code: "BANK_093",
    approaches: [
      {
        approach_title: "Exposure ratio",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH deposits AS (SELECT user_id, SUM(current_balance) AS total_deposits FROM accounts GROUP BY user_id), exposure AS (SELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_outstanding FROM loans GROUP BY borrower_user_id) SELECT u.id, u.full_name, ROUND(100.0 * e.total_outstanding / NULLIF(d.total_deposits, 0), 2) AS exposure_ratio FROM users u JOIN exposure e ON u.id = e.user_id JOIN deposits d ON u.id = d.user_id WHERE d.total_deposits > 0 ORDER BY exposure_ratio DESC, u.id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate total deposits and loan exposure per user, then rank users by exposure ratio.\n\n## 🧩 Query\n\n```sql\nWITH deposits AS (\n  SELECT user_id, SUM(current_balance) AS total_deposits\n  FROM accounts\n  GROUP BY user_id\n),\nexposure AS (\n  SELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_outstanding\n  FROM loans\n  GROUP BY borrower_user_id\n)\nSELECT u.id,\n       u.full_name,\n       ROUND(100.0 * e.total_outstanding / NULLIF(d.total_deposits, 0), 2) AS exposure_ratio\nFROM users u\nJOIN exposure e ON u.id = e.user_id\nJOIN deposits d ON u.id = d.user_id\nWHERE d.total_deposits > 0\nORDER BY exposure_ratio DESC, u.id ASC\nLIMIT 10;\n```\n\n## 🔍 Explanation\n\n- `deposits` calculates total account balance per user.\n- `exposure` calculates total outstanding loan principal per borrower.\n- The ratio is outstanding loan amount divided by deposits, multiplied by `100.0` for percentage-style output.\n- `NULLIF` protects against divide-by-zero.\n- The result is sorted by highest exposure ratio and limited to the top 10.",
      },
      {
        approach_title: "Inline ratio",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name, ROUND(100.0 * e.total_outstanding / NULLIF(d.total_deposits, 0), 2) AS exposure_ratio FROM users u JOIN (SELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_outstanding FROM loans GROUP BY borrower_user_id) e ON u.id = e.user_id JOIN (SELECT user_id, SUM(current_balance) AS total_deposits FROM accounts GROUP BY user_id) d ON u.id = d.user_id WHERE d.total_deposits > 0 ORDER BY exposure_ratio DESC, u.id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nUse inline derived tables for deposits and exposure totals.\n\n## 🔍 Explanation\n\n- One subquery aggregates outstanding principal per borrower.\n- Another subquery aggregates deposits per user.\n- The main query joins both totals to users and calculates the ratio.\n- This avoids named CTEs but keeps the same logic.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, full_name, exposure_ratio FROM (WITH deposits AS (SELECT user_id, SUM(current_balance) AS total_deposits FROM accounts GROUP BY user_id), exposure AS (SELECT borrower_user_id AS user_id, SUM(outstanding_principal) AS total_outstanding FROM loans GROUP BY borrower_user_id) SELECT u.id, u.full_name, ROUND(100.0 * e.total_outstanding / NULLIF(d.total_deposits, 0), 2) AS exposure_ratio, ROW_NUMBER() OVER (ORDER BY ROUND(100.0 * e.total_outstanding / NULLIF(d.total_deposits, 0), 2) DESC, u.id ASC) AS rn FROM users u JOIN exposure e ON u.id = e.user_id JOIN deposits d ON u.id = d.user_id WHERE d.total_deposits > 0) ranked WHERE rn <= 10 ORDER BY exposure_ratio DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate exposure ratio, rank users using `ROW_NUMBER`, and keep the top 10.\n\n## 🔍 Explanation\n\n- Deposits and exposure are aggregated first.\n- `ROW_NUMBER()` ranks users by exposure ratio descending and id ascending.\n- The outer query keeps the first ten ranked users.\n- The final order matches the required comparator config.",
      },
    ],
  },
  {
    code: "BANK_094",
    approaches: [
      {
        approach_title: "JOIN portfolio",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT u.id, u.full_name FROM users u JOIN accounts a ON u.id = a.user_id JOIN loans l ON u.id = l.borrower_user_id LEFT JOIN fixed_deposits fd ON u.id = fd.user_id LEFT JOIN recurring_deposits rd ON u.id = rd.user_id WHERE fd.id IS NOT NULL OR rd.id IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nJoin users to accounts and loans, then require at least one deposit product.\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT u.id, u.full_name\nFROM users u\nJOIN accounts a ON u.id = a.user_id\nJOIN loans l ON u.id = l.borrower_user_id\nLEFT JOIN fixed_deposits fd ON u.id = fd.user_id\nLEFT JOIN recurring_deposits rd ON u.id = rd.user_id\nWHERE fd.id IS NOT NULL\n   OR rd.id IS NOT NULL;\n```\n\n## 🔍 Explanation\n\n- The inner join to `accounts` requires the user to have at least one account.\n- The inner join to `loans` requires the user to have at least one loan.\n- The left joins check for either fixed deposits or recurring deposits.\n- The `WHERE` clause requires at least one deposit product.\n- `DISTINCT` removes duplicates caused by multiple accounts, loans, or deposits.",
      },
      {
        approach_title: "EXISTS portfolio",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name FROM users u WHERE EXISTS (SELECT 1 FROM accounts a WHERE a.user_id = u.id) AND EXISTS (SELECT 1 FROM loans l WHERE l.borrower_user_id = u.id) AND (EXISTS (SELECT 1 FROM fixed_deposits fd WHERE fd.user_id = u.id) OR EXISTS (SELECT 1 FROM recurring_deposits rd WHERE rd.user_id = u.id));",
        explanation:
          "## 🧠 Approach\n\nUse existence checks for each required product category.\n\n## 🧩 Query\n\n```sql\nSELECT u.id, u.full_name\nFROM users u\nWHERE EXISTS (\n  SELECT 1 FROM accounts a WHERE a.user_id = u.id\n)\nAND EXISTS (\n  SELECT 1 FROM loans l WHERE l.borrower_user_id = u.id\n)\nAND (\n  EXISTS (SELECT 1 FROM fixed_deposits fd WHERE fd.user_id = u.id)\n  OR EXISTS (SELECT 1 FROM recurring_deposits rd WHERE rd.user_id = u.id)\n);\n```\n\n## 🔍 Explanation\n\n- The first `EXISTS` requires an account.\n- The second `EXISTS` requires a loan.\n- The final grouped condition requires either a fixed deposit or a recurring deposit.\n- This avoids duplicate rows naturally and does not need `DISTINCT`.",
      },
      {
        approach_title: "Grouped flags",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT u.id, u.full_name FROM users u LEFT JOIN accounts a ON u.id = a.user_id LEFT JOIN loans l ON u.id = l.borrower_user_id LEFT JOIN fixed_deposits fd ON u.id = fd.user_id LEFT JOIN recurring_deposits rd ON u.id = rd.user_id GROUP BY u.id, u.full_name HAVING COUNT(DISTINCT a.id) > 0 AND COUNT(DISTINCT l.id) > 0 AND (COUNT(DISTINCT fd.id) > 0 OR COUNT(DISTINCT rd.id) > 0);",
        explanation:
          "## 🧠 Approach\n\nJoin all product tables and use grouped counts as product-presence flags.\n\n## 🔍 Explanation\n\n- Left joins allow every user to stay in the intermediate result.\n- `COUNT(DISTINCT a.id) > 0` confirms account ownership.\n- `COUNT(DISTINCT l.id) > 0` confirms loan ownership.\n- The final condition confirms at least one deposit product.\n- `DISTINCT` inside counts avoids overcounting caused by joining multiple one-to-many tables.",
      },
    ],
  },
  {
    code: "BANK_095",
    approaches: [
      {
        approach_title: "Distinct product types",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT b.id, b.branch_name, COUNT(DISTINCT ap.product_type) AS distinct_product_types FROM branches b JOIN accounts a ON b.id = a.primary_branch_id JOIN account_products ap ON a.product_id = ap.id GROUP BY b.id, b.branch_name ORDER BY distinct_product_types DESC, b.id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount distinct account product types used by customers in each branch, then return the top 5 branches.\n\n## 🧩 Query\n\n```sql\nSELECT b.id,\n       b.branch_name,\n       COUNT(DISTINCT ap.product_type) AS distinct_product_types\nFROM branches b\nJOIN accounts a ON b.id = a.primary_branch_id\nJOIN account_products ap ON a.product_id = ap.id\nGROUP BY b.id, b.branch_name\nORDER BY distinct_product_types DESC, b.id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- Branches connect to account products through accounts.\n- `COUNT(DISTINCT ap.product_type)` measures product diversity per branch.\n- Sorting by diversity descending gives branches with the broadest product usage first.\n- `b.id ASC` is the required tie-breaker.",
      },
      {
        approach_title: "Pre-distinct products",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT b.id, b.branch_name, COUNT(*) AS distinct_product_types FROM branches b JOIN (SELECT DISTINCT a.primary_branch_id AS branch_id, ap.product_type FROM accounts a JOIN account_products ap ON a.product_id = ap.id WHERE a.primary_branch_id IS NOT NULL) branch_products ON b.id = branch_products.branch_id GROUP BY b.id, b.branch_name ORDER BY distinct_product_types DESC, b.id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCreate unique branch-product-type pairs first, then count them per branch.\n\n## 🔍 Explanation\n\n- The subquery removes duplicate usage of the same product type in a branch.\n- The outer query counts those unique product types.\n- This is equivalent to `COUNT(DISTINCT ...)` but makes the deduplication step explicit.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, branch_name, distinct_product_types FROM (SELECT id, branch_name, distinct_product_types, ROW_NUMBER() OVER (ORDER BY distinct_product_types DESC, id ASC) AS rn FROM (SELECT b.id, b.branch_name, COUNT(DISTINCT ap.product_type) AS distinct_product_types FROM branches b JOIN accounts a ON b.id = a.primary_branch_id JOIN account_products ap ON a.product_id = ap.id GROUP BY b.id, b.branch_name) product_counts) ranked WHERE rn <= 5 ORDER BY distinct_product_types DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank branches by product diversity using `ROW_NUMBER`, then keep the top 5.\n\n## 🔍 Explanation\n\n- The inner query calculates distinct product type count per branch.\n- `ROW_NUMBER()` ranks those branch-level metrics.\n- The outer query keeps the first five ranked branches.\n- The final order matches the required comparator config.",
      },
    ],
  },
  {
    code: "BANK_096",
    approaches: [
      {
        approach_title: "Merchant concentration",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH merchant_spend AS (SELECT a.user_id, ct.merchant_name, SUM(ct.billing_amount) AS merchant_total FROM card_transactions ct JOIN cards c ON ct.card_id = c.id JOIN accounts a ON c.account_id = a.id WHERE ct.transaction_status = 'settled' GROUP BY a.user_id, ct.merchant_name), ranked_spend AS (SELECT user_id, merchant_name, merchant_total, SUM(merchant_total) OVER (PARTITION BY user_id) AS total_spend, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY merchant_total DESC) AS rn FROM merchant_spend) SELECT u.id, u.full_name, rs.merchant_name, ROUND(100.0 * rs.merchant_total / rs.total_spend, 2) AS concentration_pct FROM users u JOIN ranked_spend rs ON u.id = rs.user_id WHERE rs.rn = 1 AND 100.0 * rs.merchant_total / rs.total_spend > 50;",
        explanation:
          "## 🧠 Approach\n\nCalculate spend per user and merchant, rank each user's top merchant, then check whether that merchant exceeds 50% of total spend.\n\n## 🧩 Query\n\n```sql\nWITH merchant_spend AS (\n  SELECT a.user_id,\n         ct.merchant_name,\n         SUM(ct.billing_amount) AS merchant_total\n  FROM card_transactions ct\n  JOIN cards c ON ct.card_id = c.id\n  JOIN accounts a ON c.account_id = a.id\n  WHERE ct.transaction_status = 'settled'\n  GROUP BY a.user_id, ct.merchant_name\n),\nranked_spend AS (\n  SELECT user_id,\n         merchant_name,\n         merchant_total,\n         SUM(merchant_total) OVER (PARTITION BY user_id) AS total_spend,\n         ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY merchant_total DESC) AS rn\n  FROM merchant_spend\n)\nSELECT u.id,\n       u.full_name,\n       rs.merchant_name,\n       ROUND(100.0 * rs.merchant_total / rs.total_spend, 2) AS concentration_pct\nFROM users u\nJOIN ranked_spend rs ON u.id = rs.user_id\nWHERE rs.rn = 1\n  AND 100.0 * rs.merchant_total / rs.total_spend > 50;\n```\n\n## 🔍 Explanation\n\n- `merchant_spend` computes settled card spend per user and merchant.\n- `SUM(merchant_total) OVER (PARTITION BY user_id)` computes total spend per user.\n- `ROW_NUMBER()` identifies the top merchant for each user.\n- The final filter keeps users whose top merchant contributes more than half their total settled spend.",
      },
      {
        approach_title: "Max merchant join",
        approach_type: "cte",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH merchant_spend AS (SELECT a.user_id, ct.merchant_name, SUM(ct.billing_amount) AS merchant_total FROM card_transactions ct JOIN cards c ON ct.card_id = c.id JOIN accounts a ON c.account_id = a.id WHERE ct.transaction_status = 'settled' GROUP BY a.user_id, ct.merchant_name), user_totals AS (SELECT user_id, SUM(merchant_total) AS total_spend, MAX(merchant_total) AS top_merchant_total FROM merchant_spend GROUP BY user_id) SELECT u.id, u.full_name, ms.merchant_name, ROUND(100.0 * ms.merchant_total / ut.total_spend, 2) AS concentration_pct FROM users u JOIN user_totals ut ON u.id = ut.user_id JOIN merchant_spend ms ON ms.user_id = ut.user_id AND ms.merchant_total = ut.top_merchant_total WHERE 100.0 * ms.merchant_total / ut.total_spend > 50;",
        explanation:
          "## 🧠 Approach\n\nFind each user's total spend and maximum merchant spend, then join back to identify the merchant.\n\n## 🔍 Explanation\n\n- `merchant_spend` computes spend per user and merchant.\n- `user_totals` calculates total spend and top merchant spend per user.\n- Joining back to `merchant_spend` retrieves the merchant name for the maximum spend.\n- If multiple merchants tie for top spend, this can return multiple rows for a user.",
      },
    ],
  },
  {
    code: "BANK_097",
    approaches: [
      {
        approach_title: "Distinct channels",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.full_name, COUNT(DISTINCT t.channel) AS distinct_channels_used FROM users u JOIN accounts a ON u.id = a.user_id JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name ORDER BY distinct_channels_used DESC, u.id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCount distinct transaction channels used by each user and return the top 10.\n\n## 🧩 Query\n\n```sql\nSELECT u.id,\n       u.full_name,\n       COUNT(DISTINCT t.channel) AS distinct_channels_used\nFROM users u\nJOIN accounts a ON u.id = a.user_id\nJOIN transactions t ON a.id = t.account_id\nGROUP BY u.id, u.full_name\nORDER BY distinct_channels_used DESC, u.id ASC\nLIMIT 10;\n```\n\n## 🔍 Explanation\n\n- Users connect to transactions through accounts.\n- `COUNT(DISTINCT t.channel)` measures channel diversity.\n- Sorting by `distinct_channels_used DESC` ranks users with the widest channel usage first.\n- `u.id ASC` is the required tie-breaker.",
      },
      {
        approach_title: "Pre-distinct channels",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name, COUNT(*) AS distinct_channels_used FROM users u JOIN (SELECT DISTINCT a.user_id, t.channel FROM accounts a JOIN transactions t ON a.id = t.account_id) user_channels ON u.id = user_channels.user_id GROUP BY u.id, u.full_name ORDER BY distinct_channels_used DESC, u.id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCreate unique user-channel pairs first, then count them per user.\n\n## 🔍 Explanation\n\n- The subquery removes duplicate usage of the same channel by the same user.\n- The outer query counts unique channels per user.\n- This is equivalent to `COUNT(DISTINCT t.channel)` but makes the deduplication step explicit.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, full_name, distinct_channels_used FROM (SELECT id, full_name, distinct_channels_used, ROW_NUMBER() OVER (ORDER BY distinct_channels_used DESC, id ASC) AS rn FROM (SELECT u.id, u.full_name, COUNT(DISTINCT t.channel) AS distinct_channels_used FROM users u JOIN accounts a ON u.id = a.user_id JOIN transactions t ON a.id = t.account_id GROUP BY u.id, u.full_name) channel_counts) ranked WHERE rn <= 10 ORDER BY distinct_channels_used DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank users by channel diversity using `ROW_NUMBER`, then keep the top 10.\n\n## 🔍 Explanation\n\n- The inner query calculates channel diversity per user.\n- `ROW_NUMBER()` ranks users using the required ordering.\n- The outer query keeps the first ten ranked users.\n- The final order matches the comparator config.",
      },
    ],
  },
  {
    code: "BANK_098",
    approaches: [
      {
        approach_title: "Above average complaints",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH complaint_counts AS (SELECT user_id, COUNT(*) AS complaint_count FROM complaints WHERE user_id IS NOT NULL GROUP BY user_id) SELECT u.id, u.full_name, cc.complaint_count FROM users u JOIN complaint_counts cc ON u.id = cc.user_id WHERE cc.complaint_count > (SELECT AVG(complaint_count) FROM complaint_counts);",
        explanation:
          "## 🧠 Approach\n\nCalculate complaint count per user, then compare each count with the average complaint count.\n\n## 🧩 Query\n\n```sql\nWITH complaint_counts AS (\n  SELECT user_id, COUNT(*) AS complaint_count\n  FROM complaints\n  WHERE user_id IS NOT NULL\n  GROUP BY user_id\n)\nSELECT u.id, u.full_name, cc.complaint_count\nFROM users u\nJOIN complaint_counts cc ON u.id = cc.user_id\nWHERE cc.complaint_count > (\n  SELECT AVG(complaint_count)\n  FROM complaint_counts\n);\n```\n\n## 🔍 Explanation\n\n- The CTE calculates one complaint count per user who raised complaints.\n- The scalar subquery calculates the average of those user-level complaint counts.\n- The final query returns users whose complaint count is above that average.",
      },
      {
        approach_title: "Window average",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, full_name, complaint_count FROM (SELECT u.id, u.full_name, cc.complaint_count, AVG(cc.complaint_count) OVER () AS avg_complaint_count FROM users u JOIN (SELECT user_id, COUNT(*) AS complaint_count FROM complaints WHERE user_id IS NOT NULL GROUP BY user_id) cc ON u.id = cc.user_id) x WHERE complaint_count > avg_complaint_count;",
        explanation:
          "## 🧠 Approach\n\nUse a window average over user complaint counts and filter above-average users.\n\n## 🔍 Explanation\n\n- The derived table calculates complaint counts per user.\n- `AVG(complaint_count) OVER ()` places the overall average complaint count on every row.\n- The outer query keeps rows where the user's count exceeds that average.",
      },
    ],
  },
  {
    code: "BANK_099",
    approaches: [
      {
        approach_title: "Fraud rate top",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH branch_customers AS (SELECT primary_branch_id AS branch_id, COUNT(DISTINCT user_id) AS customer_count FROM accounts WHERE primary_branch_id IS NOT NULL GROUP BY primary_branch_id), branch_fraud AS (SELECT a.primary_branch_id AS branch_id, COUNT(f.id) AS fraud_count FROM fraud_alerts f JOIN accounts a ON f.account_id = a.id WHERE a.primary_branch_id IS NOT NULL GROUP BY a.primary_branch_id) SELECT b.id, b.branch_name, ROUND(100.0 * COALESCE(bf.fraud_count, 0) / NULLIF(bc.customer_count, 0), 2) AS fraud_rate_per_100_customers FROM branches b JOIN branch_customers bc ON b.id = bc.branch_id LEFT JOIN branch_fraud bf ON b.id = bf.branch_id ORDER BY fraud_rate_per_100_customers DESC, b.id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate customer count and fraud alert count per branch, then compute fraud alerts per 100 customers.\n\n## 🧩 Query\n\n```sql\nWITH branch_customers AS (\n  SELECT primary_branch_id AS branch_id,\n         COUNT(DISTINCT user_id) AS customer_count\n  FROM accounts\n  WHERE primary_branch_id IS NOT NULL\n  GROUP BY primary_branch_id\n),\nbranch_fraud AS (\n  SELECT a.primary_branch_id AS branch_id,\n         COUNT(f.id) AS fraud_count\n  FROM fraud_alerts f\n  JOIN accounts a ON f.account_id = a.id\n  WHERE a.primary_branch_id IS NOT NULL\n  GROUP BY a.primary_branch_id\n)\nSELECT b.id,\n       b.branch_name,\n       ROUND(100.0 * COALESCE(bf.fraud_count, 0) / NULLIF(bc.customer_count, 0), 2) AS fraud_rate_per_100_customers\nFROM branches b\nJOIN branch_customers bc ON b.id = bc.branch_id\nLEFT JOIN branch_fraud bf ON b.id = bf.branch_id\nORDER BY fraud_rate_per_100_customers DESC, b.id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- `branch_customers` counts distinct users per branch.\n- `branch_fraud` counts fraud alerts tied to accounts in each branch.\n- `COALESCE` treats branches with no fraud alerts as zero fraud.\n- `NULLIF` prevents division by zero.\n- The final order returns the top five branches by fraud rate.",
      },
      {
        approach_title: "Inline rate",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT b.id, b.branch_name, ROUND(100.0 * COALESCE(bf.fraud_count, 0) / NULLIF(bc.customer_count, 0), 2) AS fraud_rate_per_100_customers FROM branches b JOIN (SELECT primary_branch_id AS branch_id, COUNT(DISTINCT user_id) AS customer_count FROM accounts WHERE primary_branch_id IS NOT NULL GROUP BY primary_branch_id) bc ON b.id = bc.branch_id LEFT JOIN (SELECT a.primary_branch_id AS branch_id, COUNT(f.id) AS fraud_count FROM fraud_alerts f JOIN accounts a ON f.account_id = a.id WHERE a.primary_branch_id IS NOT NULL GROUP BY a.primary_branch_id) bf ON b.id = bf.branch_id ORDER BY fraud_rate_per_100_customers DESC, b.id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nUse inline derived tables for customer and fraud counts instead of named CTEs.\n\n## 🔍 Explanation\n\n- One derived table counts customers per branch.\n- Another counts fraud alerts per branch.\n- The final query calculates the fraud rate and ranks branches.\n- This is logically equivalent to the CTE version.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, branch_name, fraud_rate_per_100_customers FROM (WITH branch_customers AS (SELECT primary_branch_id AS branch_id, COUNT(DISTINCT user_id) AS customer_count FROM accounts WHERE primary_branch_id IS NOT NULL GROUP BY primary_branch_id), branch_fraud AS (SELECT a.primary_branch_id AS branch_id, COUNT(f.id) AS fraud_count FROM fraud_alerts f JOIN accounts a ON f.account_id = a.id WHERE a.primary_branch_id IS NOT NULL GROUP BY a.primary_branch_id) SELECT b.id, b.branch_name, ROUND(100.0 * COALESCE(bf.fraud_count, 0) / NULLIF(bc.customer_count, 0), 2) AS fraud_rate_per_100_customers, ROW_NUMBER() OVER (ORDER BY ROUND(100.0 * COALESCE(bf.fraud_count, 0) / NULLIF(bc.customer_count, 0), 2) DESC, b.id ASC) AS rn FROM branches b JOIN branch_customers bc ON b.id = bc.branch_id LEFT JOIN branch_fraud bf ON b.id = bf.branch_id) ranked WHERE rn <= 5 ORDER BY fraud_rate_per_100_customers DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate fraud rate, rank branches using `ROW_NUMBER`, and keep the first five.\n\n## 🔍 Explanation\n\n- The CTEs calculate customer and fraud counts.\n- The main query calculates fraud rate and assigns a rank.\n- The outer query keeps rows where `rn <= 5`.\n- Final sorting matches the required comparator order.",
      },
    ],
  },
  {
    code: "BANK_100",
    approaches: [
      {
        approach_title: "Branch activity average",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH user_txn_counts AS (SELECT a.primary_branch_id AS branch_id, a.user_id, COUNT(t.id) AS txn_count FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE a.primary_branch_id IS NOT NULL GROUP BY a.primary_branch_id, a.user_id), branch_avg_txn AS (SELECT branch_id, AVG(txn_count) AS avg_txn_count FROM user_txn_counts GROUP BY branch_id) SELECT u.id, u.full_name, utc.branch_id, utc.txn_count FROM users u JOIN user_txn_counts utc ON u.id = utc.user_id JOIN branch_avg_txn bat ON utc.branch_id = bat.branch_id WHERE utc.txn_count > bat.avg_txn_count;",
        explanation:
          "## 🧠 Approach\n\nCalculate user transaction counts within each branch, then compare each user with their branch average.\n\n## 🧩 Query\n\n```sql\nWITH user_txn_counts AS (\n  SELECT a.primary_branch_id AS branch_id,\n         a.user_id,\n         COUNT(t.id) AS txn_count\n  FROM accounts a\n  JOIN transactions t ON a.id = t.account_id\n  WHERE a.primary_branch_id IS NOT NULL\n  GROUP BY a.primary_branch_id, a.user_id\n),\nbranch_avg_txn AS (\n  SELECT branch_id, AVG(txn_count) AS avg_txn_count\n  FROM user_txn_counts\n  GROUP BY branch_id\n)\nSELECT u.id,\n       u.full_name,\n       utc.branch_id,\n       utc.txn_count\nFROM users u\nJOIN user_txn_counts utc ON u.id = utc.user_id\nJOIN branch_avg_txn bat ON utc.branch_id = bat.branch_id\nWHERE utc.txn_count > bat.avg_txn_count;\n```\n\n## 🔍 Explanation\n\n- `user_txn_counts` counts transactions per user per primary branch.\n- `branch_avg_txn` calculates the average user transaction count for each branch.\n- The final query returns users whose count is greater than their branch's average.\n- Joining to `users` provides `full_name` in the output.",
      },
      {
        approach_title: "Window branch average",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, full_name, branch_id, txn_count FROM (SELECT u.id, u.full_name, utc.branch_id, utc.txn_count, AVG(utc.txn_count) OVER (PARTITION BY utc.branch_id) AS avg_txn_count FROM users u JOIN (SELECT a.primary_branch_id AS branch_id, a.user_id, COUNT(t.id) AS txn_count FROM accounts a JOIN transactions t ON a.id = t.account_id WHERE a.primary_branch_id IS NOT NULL GROUP BY a.primary_branch_id, a.user_id) utc ON u.id = utc.user_id) x WHERE txn_count > avg_txn_count;",
        explanation:
          "## 🧠 Approach\n\nCalculate user transaction counts, then use a window average to compare each user with their branch average.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, branch_id, txn_count\nFROM (\n  SELECT u.id,\n         u.full_name,\n         utc.branch_id,\n         utc.txn_count,\n         AVG(utc.txn_count) OVER (PARTITION BY utc.branch_id) AS avg_txn_count\n  FROM users u\n  JOIN (\n    SELECT a.primary_branch_id AS branch_id,\n           a.user_id,\n           COUNT(t.id) AS txn_count\n    FROM accounts a\n    JOIN transactions t ON a.id = t.account_id\n    WHERE a.primary_branch_id IS NOT NULL\n    GROUP BY a.primary_branch_id, a.user_id\n  ) utc ON u.id = utc.user_id\n) x\nWHERE txn_count > avg_txn_count;\n```\n\n## 🔍 Explanation\n\n- The derived table computes user-level transaction counts by branch.\n- `AVG(txn_count) OVER (PARTITION BY branch_id)` calculates each branch's average count on every row.\n- The outer query filters users whose transaction count exceeds that branch average.\n- This avoids a separate branch-average CTE.",
      },
    ],
  },
];
