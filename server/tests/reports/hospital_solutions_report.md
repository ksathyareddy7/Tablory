# Solutions Evaluation Report (hospital)

**Summary:**
- Total Approaches: 139
- Passed: 139
- Failed: 0

## Detailed Results
### ✅ PASS : HOSPITAL_001 - COUNT all
```sql
SELECT COUNT(*) AS total_patients FROM patients;
```

### ✅ PASS : HOSPITAL_002 - Filter active
```sql
SELECT COUNT(*) AS active_doctors FROM doctors WHERE is_active = true;
```

### ✅ PASS : HOSPITAL_003 - Filter departments
```sql
SELECT id, department_code, name, department_type, floor_number FROM departments WHERE is_active = true;
```

### ✅ PASS : HOSPITAL_004 - DATE filter today
```sql
SELECT id, patient_code, full_name, registered_at FROM patients WHERE DATE(registered_at) = CURRENT_DATE;
```

### ✅ PASS : HOSPITAL_004 - Range filter
```sql
SELECT id, patient_code, full_name, registered_at FROM patients WHERE registered_at >= CURRENT_DATE AND registered_at < CURRENT_DATE + INTERVAL '1 day';
```

### ✅ PASS : HOSPITAL_005 - Available beds
```sql
SELECT id, room_id, bed_number, bed_type, bed_status FROM beds WHERE bed_status = 'available' AND is_active = true;
```

### ✅ PASS : HOSPITAL_006 - Scheduled filter
```sql
SELECT id, appointment_number, patient_id, doctor_id, scheduled_start_at, scheduled_end_at FROM appointments WHERE appointment_status = 'scheduled';
```

### ✅ PASS : HOSPITAL_007 - LEFT JOIN dept
```sql
SELECT d.id, d.full_name, dp.name AS department_name FROM doctors d LEFT JOIN departments dp ON d.department_id = dp.id;
```

### ✅ PASS : HOSPITAL_008 - JOIN distinct patients
```sql
SELECT DISTINCT p.id, p.patient_code, p.full_name FROM patients p JOIN insurance_policies ip ON p.id = ip.patient_id;
```

### ✅ PASS : HOSPITAL_008 - EXISTS filter
```sql
SELECT p.id, p.patient_code, p.full_name FROM patients p WHERE EXISTS (SELECT 1 FROM insurance_policies ip WHERE ip.patient_id = p.id);
```

### ✅ PASS : HOSPITAL_009 - Completed labs
```sql
SELECT id, lab_order_number, patient_id, encounter_id, ordered_at FROM lab_orders WHERE order_status = 'completed';
```

### ✅ PASS : HOSPITAL_010 - Paid invoices
```sql
SELECT id, invoice_number, patient_id, total_amount, issued_at FROM invoices WHERE invoice_status = 'paid';
```

### ✅ PASS : HOSPITAL_011 - GROUP doctor
```sql
SELECT doctor_id, COUNT(*) AS total_appointments FROM appointments GROUP BY doctor_id;
```

### ✅ PASS : HOSPITAL_011 - Window count
```sql
SELECT DISTINCT doctor_id, COUNT(*) OVER (PARTITION BY doctor_id) AS total_appointments FROM appointments;
```

### ✅ PASS : HOSPITAL_012 - DISTINCT allergies
```sql
SELECT DISTINCT p.id, p.patient_code, p.full_name FROM patients p JOIN patient_allergies pa ON p.id = pa.patient_id;
```

### ✅ PASS : HOSPITAL_012 - EXISTS allergy
```sql
SELECT p.id, p.patient_code, p.full_name FROM patients p WHERE EXISTS (SELECT 1 FROM patient_allergies pa WHERE pa.patient_id = p.id);
```

### ✅ PASS : HOSPITAL_013 - JOIN approved leave
```sql
SELECT dl.id, dl.doctor_id, d.full_name, dl.leave_type, dl.start_date, dl.end_date FROM doctor_leaves dl JOIN doctors d ON dl.doctor_id = d.id WHERE dl.approval_status = 'approved';
```

### ✅ PASS : HOSPITAL_014 - Active lab tests
```sql
SELECT id, test_code, test_name, test_category, standard_price FROM lab_test_catalog WHERE is_active = true;
```

### ✅ PASS : HOSPITAL_014 - Boolean shorthand
```sql
SELECT id, test_code, test_name, test_category, standard_price FROM lab_test_catalog WHERE is_active;
```

### ✅ PASS : HOSPITAL_015 - Primary policies
```sql
SELECT id, patient_id, insurance_provider_id, policy_number, plan_name, coverage_start_date, coverage_end_date FROM insurance_policies WHERE is_primary = true;
```

### ✅ PASS : HOSPITAL_015 - Boolean shorthand
```sql
SELECT id, patient_id, insurance_provider_id, policy_number, plan_name, coverage_start_date, coverage_end_date FROM insurance_policies WHERE is_primary;
```

### ✅ PASS : HOSPITAL_016 - Admitted filter
```sql
SELECT id, admission_number, patient_id, department_id, admitted_at FROM admissions WHERE admission_status = 'admitted';
```

### ✅ PASS : HOSPITAL_017 - LEFT JOIN specialization
```sql
SELECT d.id, d.full_name, s.name AS specialization_name FROM doctors d LEFT JOIN specializations s ON d.primary_specialization_id = s.id;
```

### ✅ PASS : HOSPITAL_018 - Successful payments
```sql
SELECT id, payment_number, invoice_id, payment_method, amount_paid, paid_at FROM payments WHERE payment_status = 'successful';
```

### ✅ PASS : HOSPITAL_019 - Under review claims
```sql
SELECT id, claim_number, invoice_id, insurance_policy_id, claimed_amount, submitted_at FROM insurance_claims WHERE claim_status = 'under_review';
```

### ✅ PASS : HOSPITAL_020 - All feedback
```sql
SELECT id, patient_id, doctor_id, rating, feedback_category, created_at FROM patient_feedback;
```

### ✅ PASS : HOSPITAL_021 - AVG by department
```sql
SELECT d.department_id, dp.name AS department_name, ROUND(AVG(d.consultation_fee), 2) AS avg_consultation_fee FROM doctors d JOIN departments dp ON d.department_id = dp.id WHERE d.is_active = true GROUP BY d.department_id, dp.name;
```

### ✅ PASS : HOSPITAL_021 - Subquery average
```sql
SELECT dept_fees.department_id, dp.name AS department_name, dept_fees.avg_consultation_fee FROM (SELECT department_id, ROUND(AVG(consultation_fee), 2) AS avg_consultation_fee FROM doctors WHERE is_active = true GROUP BY department_id) dept_fees JOIN departments dp ON dp.id = dept_fees.department_id;
```

### ✅ PASS : HOSPITAL_022 - GROUP status
```sql
SELECT appointment_status, COUNT(*) AS total_appointments FROM appointments GROUP BY appointment_status;
```

### ✅ PASS : HOSPITAL_023 - COUNT occupied beds
```sql
SELECT COUNT(*) AS occupied_beds FROM beds WHERE bed_status = 'occupied';
```

### ✅ PASS : HOSPITAL_024 - GROUP admissions dept
```sql
SELECT department_id, COUNT(*) AS total_admissions FROM admissions GROUP BY department_id;
```

### ✅ PASS : HOSPITAL_025 - SUM invoices
```sql
SELECT patient_id, ROUND(SUM(total_amount), 2) AS total_invoice_amount FROM invoices GROUP BY patient_id;
```

### ✅ PASS : HOSPITAL_026 - GROUP lab orders
```sql
SELECT patient_id, COUNT(*) AS total_lab_orders FROM lab_orders GROUP BY patient_id;
```

### ✅ PASS : HOSPITAL_027 - GROUP prescriptions
```sql
SELECT doctor_id, COUNT(*) AS total_prescriptions FROM prescriptions GROUP BY doctor_id;
```

### ✅ PASS : HOSPITAL_028 - Critical results
```sql
SELECT id, lab_order_item_id, result_value, interpretation, resulted_at FROM lab_results WHERE interpretation = 'critical';
```

### ✅ PASS : HOSPITAL_029 - ORDER BY experience
```sql
SELECT id, full_name, years_of_experience FROM doctors ORDER BY years_of_experience DESC, id ASC;
```

### ✅ PASS : HOSPITAL_030 - DISTINCT chronic patients
```sql
SELECT DISTINCT p.id, p.patient_code, p.full_name FROM patients p JOIN patient_conditions pc ON p.id = pc.patient_id WHERE pc.condition_status = 'chronic';
```

### ✅ PASS : HOSPITAL_030 - EXISTS chronic
```sql
SELECT p.id, p.patient_code, p.full_name FROM patients p WHERE EXISTS (SELECT 1 FROM patient_conditions pc WHERE pc.patient_id = p.id AND pc.condition_status = 'chronic');
```

### ✅ PASS : HOSPITAL_031 - AVG stay days
```sql
SELECT ROUND(AVG(EXTRACT(EPOCH FROM (discharge_at - admitted_at)) / 86400), 2) AS avg_length_of_stay_days FROM admissions WHERE admission_status = 'discharged' AND discharge_at IS NOT NULL;
```

### ✅ PASS : HOSPITAL_032 - GROUP registration date
```sql
SELECT DATE(registered_at) AS registration_date, COUNT(*) AS total_patients FROM patients GROUP BY DATE(registered_at);
```

### ✅ PASS : HOSPITAL_033 - Revenue by method
```sql
SELECT payment_method, ROUND(SUM(amount_paid), 2) AS total_revenue FROM payments WHERE payment_status = 'successful' GROUP BY payment_method;
```

### ✅ PASS : HOSPITAL_034 - LEFT JOIN doctors
```sql
SELECT s.id AS specialization_id, s.name AS specialization_name, COUNT(ds.doctor_id) AS total_doctors FROM specializations s LEFT JOIN doctor_specializations ds ON s.id = ds.specialization_id GROUP BY s.id, s.name;
```

### ✅ PASS : HOSPITAL_034 - Correlated count
```sql
SELECT s.id AS specialization_id, s.name AS specialization_name, (SELECT COUNT(*) FROM doctor_specializations ds WHERE ds.specialization_id = s.id) AS total_doctors FROM specializations s;
```

### ✅ PASS : HOSPITAL_035 - COUNT completed procedures
```sql
SELECT COUNT(*) AS completed_procedures FROM procedure_orders WHERE procedure_status = 'completed';
```

### ✅ PASS : HOSPITAL_036 - GROUP appointment date
```sql
SELECT DATE(scheduled_start_at) AS appointment_date, COUNT(*) AS total_appointments FROM appointments GROUP BY DATE(scheduled_start_at);
```

### ✅ PASS : HOSPITAL_037 - Top completed doctors
```sql
SELECT doctor_id, COUNT(*) AS completed_appointments FROM appointments WHERE appointment_status = 'completed' GROUP BY doctor_id ORDER BY completed_appointments DESC, doctor_id ASC LIMIT 5;
```

### ✅ PASS : HOSPITAL_037 - ROW_NUMBER top
```sql
SELECT doctor_id, completed_appointments FROM (SELECT doctor_id, completed_appointments, ROW_NUMBER() OVER (ORDER BY completed_appointments DESC, doctor_id ASC) AS rn FROM (SELECT doctor_id, COUNT(*) AS completed_appointments FROM appointments WHERE appointment_status = 'completed' GROUP BY doctor_id) doctor_counts) ranked WHERE rn <= 5 ORDER BY completed_appointments DESC, doctor_id ASC;
```

### ✅ PASS : HOSPITAL_038 - JOIN encounter revenue
```sql
SELECT e.department_id, ROUND(SUM(i.total_amount), 2) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id GROUP BY e.department_id;
```

### ✅ PASS : HOSPITAL_039 - GROUP HAVING
```sql
SELECT patient_id, COUNT(*) AS admission_count FROM admissions GROUP BY patient_id HAVING COUNT(*) > 1;
```

### ✅ PASS : HOSPITAL_039 - Subquery filter
```sql
SELECT patient_id, admission_count FROM (SELECT patient_id, COUNT(*) AS admission_count FROM admissions GROUP BY patient_id) patient_admissions WHERE admission_count > 1;
```

### ✅ PASS : HOSPITAL_040 - AVG wait time
```sql
SELECT doctor_id, ROUND(AVG(EXTRACT(EPOCH FROM (consultation_started_at - scheduled_start_at)) / 60), 2) AS avg_wait_time_mins FROM appointments WHERE consultation_started_at IS NOT NULL GROUP BY doctor_id;
```

### ✅ PASS : HOSPITAL_041 - GROUP HAVING
```sql
SELECT doctor_id, COUNT(*) AS appointment_count FROM appointments GROUP BY doctor_id HAVING COUNT(*) > 50;
```

### ✅ PASS : HOSPITAL_041 - Subquery count
```sql
SELECT doctor_id, appointment_count FROM (SELECT doctor_id, COUNT(*) AS appointment_count FROM appointments GROUP BY doctor_id) doctor_appointments WHERE appointment_count > 50;
```

### ✅ PASS : HOSPITAL_042 - GROUP high bills
```sql
SELECT patient_id, SUM(total_amount) AS total_amount FROM invoices GROUP BY patient_id HAVING SUM(total_amount) > 50000;
```

### ✅ PASS : HOSPITAL_042 - Subquery total
```sql
SELECT patient_id, total_amount FROM (SELECT patient_id, SUM(total_amount) AS total_amount FROM invoices GROUP BY patient_id) patient_totals WHERE total_amount > 50000;
```

### ✅ PASS : HOSPITAL_043 - GROUP visits
```sql
SELECT patient_id, COUNT(*) AS visit_count FROM encounters GROUP BY patient_id HAVING COUNT(*) > 10;
```

### ✅ PASS : HOSPITAL_043 - Subquery visits
```sql
SELECT patient_id, visit_count FROM (SELECT patient_id, COUNT(*) AS visit_count FROM encounters GROUP BY patient_id) patient_visits WHERE visit_count > 10;
```

### ✅ PASS : HOSPITAL_044 - Top revenue departments
```sql
SELECT e.department_id, SUM(i.total_amount) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id GROUP BY e.department_id ORDER BY total_revenue DESC, e.department_id ASC LIMIT 5;
```

### ✅ PASS : HOSPITAL_044 - CTE top revenue
```sql
WITH department_revenue AS (SELECT e.department_id, SUM(i.total_amount) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id GROUP BY e.department_id) SELECT department_id, total_revenue FROM department_revenue ORDER BY total_revenue DESC, department_id ASC LIMIT 5;
```

### ✅ PASS : HOSPITAL_044 - ROW_NUMBER top
```sql
SELECT department_id, total_revenue FROM (SELECT department_id, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, department_id ASC) AS rn FROM (SELECT e.department_id, SUM(i.total_amount) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id GROUP BY e.department_id) department_revenue) ranked WHERE rn <= 5 ORDER BY total_revenue DESC, department_id ASC;
```

### ✅ PASS : HOSPITAL_045 - AVG patient test count
```sql
SELECT ROUND(AVG(test_count), 2) AS avg_tests_per_patient FROM (SELECT patient_id, COUNT(*) AS test_count FROM lab_orders GROUP BY patient_id) x;
```

### ✅ PASS : HOSPITAL_046 - LEFT JOIN anti-join
```sql
SELECT d.id FROM doctors d LEFT JOIN appointments a ON d.id = a.doctor_id WHERE a.id IS NULL;
```

### ✅ PASS : HOSPITAL_046 - NOT EXISTS
```sql
SELECT d.id FROM doctors d WHERE NOT EXISTS (SELECT 1 FROM appointments a WHERE a.doctor_id = d.id);
```

### ✅ PASS : HOSPITAL_047 - LEFT JOIN anti-join
```sql
SELECT p.id FROM patients p LEFT JOIN admissions a ON p.id = a.patient_id WHERE a.id IS NULL;
```

### ✅ PASS : HOSPITAL_047 - NOT EXISTS
```sql
SELECT p.id FROM patients p WHERE NOT EXISTS (SELECT 1 FROM admissions a WHERE a.patient_id = p.id);
```

### ✅ PASS : HOSPITAL_048 - LEFT JOIN no results
```sql
SELECT lo.id FROM lab_orders lo LEFT JOIN lab_order_items loi ON loi.lab_order_id = lo.id LEFT JOIN lab_results lr ON lr.lab_order_item_id = loi.id GROUP BY lo.id HAVING COUNT(lr.id) = 0;
```

### ✅ PASS : HOSPITAL_048 - NOT EXISTS results
```sql
SELECT lo.id FROM lab_orders lo WHERE NOT EXISTS (SELECT 1 FROM lab_order_items loi JOIN lab_results lr ON lr.lab_order_item_id = loi.id WHERE loi.lab_order_id = lo.id);
```

### ✅ PASS : HOSPITAL_049 - Top patient spend
```sql
SELECT patient_id, SUM(total_amount) AS total_spent FROM invoices GROUP BY patient_id ORDER BY total_spent DESC, patient_id ASC LIMIT 5;
```

### ✅ PASS : HOSPITAL_049 - ROW_NUMBER top
```sql
SELECT patient_id, total_spent FROM (SELECT patient_id, total_spent, ROW_NUMBER() OVER (ORDER BY total_spent DESC, patient_id ASC) AS rn FROM (SELECT patient_id, SUM(total_amount) AS total_spent FROM invoices GROUP BY patient_id) patient_spend) ranked WHERE rn <= 5 ORDER BY total_spent DESC, patient_id ASC;
```

### ✅ PASS : HOSPITAL_050 - Top prescriptions
```sql
SELECT doctor_id, COUNT(*) AS prescription_count FROM prescriptions GROUP BY doctor_id ORDER BY prescription_count DESC, doctor_id ASC LIMIT 5;
```

### ✅ PASS : HOSPITAL_050 - ROW_NUMBER top
```sql
SELECT doctor_id, prescription_count FROM (SELECT doctor_id, prescription_count, ROW_NUMBER() OVER (ORDER BY prescription_count DESC, doctor_id ASC) AS rn FROM (SELECT doctor_id, COUNT(*) AS prescription_count FROM prescriptions GROUP BY doctor_id) prescription_counts) ranked WHERE rn <= 5 ORDER BY prescription_count DESC, doctor_id ASC;
```

### ✅ PASS : HOSPITAL_051 - RANK revenue
```sql
SELECT e.attending_doctor_id AS doctor_id, SUM(i.total_amount) AS total_revenue, RANK() OVER (ORDER BY SUM(i.total_amount) DESC) AS rank FROM invoices i JOIN encounters e ON i.encounter_id = e.id WHERE e.attending_doctor_id IS NOT NULL GROUP BY e.attending_doctor_id;
```

### ✅ PASS : HOSPITAL_052 - Running admission count
```sql
SELECT patient_id, id AS admission_id, COUNT(*) OVER (PARTITION BY patient_id ORDER BY admitted_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_admissions FROM admissions;
```

### ✅ PASS : HOSPITAL_053 - DENSE_RANK second
```sql
SELECT patient_id, total_spent FROM (SELECT patient_id, SUM(total_amount) AS total_spent, DENSE_RANK() OVER (ORDER BY SUM(total_amount) DESC) AS rnk FROM invoices GROUP BY patient_id) x WHERE rnk = 2;
```

### ✅ PASS : HOSPITAL_054 - LAG admission gap
```sql
SELECT patient_id, MAX(gap_days) AS max_gap_days FROM (SELECT patient_id, EXTRACT(EPOCH FROM (admitted_at - LAG(admitted_at) OVER (PARTITION BY patient_id ORDER BY admitted_at))) / 86400 AS gap_days FROM admissions) x GROUP BY patient_id;
```

### ✅ PASS : HOSPITAL_055 - Daily admission rank
```sql
SELECT admission_date, patient_id, total_admissions, RANK() OVER (PARTITION BY admission_date ORDER BY total_admissions DESC) AS rank FROM (SELECT DATE(admitted_at) AS admission_date, patient_id, COUNT(*) AS total_admissions FROM admissions GROUP BY DATE(admitted_at), patient_id) x;
```

### ✅ PASS : HOSPITAL_056 - ROW_NUMBER top 3
```sql
SELECT department_id, patient_id, total_spent FROM (SELECT e.department_id, i.patient_id, SUM(i.total_amount) AS total_spent, ROW_NUMBER() OVER (PARTITION BY e.department_id ORDER BY SUM(i.total_amount) DESC) AS rn FROM invoices i JOIN encounters e ON i.encounter_id = e.id GROUP BY e.department_id, i.patient_id) x WHERE rn <= 3;
```

### ✅ PASS : HOSPITAL_057 - Moving average
```sql
SELECT patient_id, id, total_amount, AVG(total_amount) OVER (PARTITION BY patient_id ORDER BY issued_at ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg FROM invoices;
```

### ✅ PASS : HOSPITAL_058 - Admission streak groups
```sql
WITH x AS (SELECT patient_id, admitted_at, ROW_NUMBER() OVER (PARTITION BY patient_id ORDER BY admitted_at) - ROW_NUMBER() OVER (PARTITION BY patient_id, DATE(admitted_at) ORDER BY admitted_at) AS grp FROM admissions) SELECT patient_id, COUNT(*) AS streak FROM x GROUP BY patient_id, grp;
```

### ✅ PASS : HOSPITAL_059 - P90 billing
```sql
SELECT patient_id, PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY total_amount) AS p90_amount FROM invoices GROUP BY patient_id;
```

### ✅ PASS : HOSPITAL_060 - Top revenue doctors
```sql
SELECT e.attending_doctor_id AS doctor_id, SUM(i.total_amount) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id WHERE e.attending_doctor_id IS NOT NULL GROUP BY e.attending_doctor_id ORDER BY total_revenue DESC, doctor_id ASC LIMIT 5;
```

### ✅ PASS : HOSPITAL_060 - ROW_NUMBER top
```sql
SELECT doctor_id, total_revenue FROM (SELECT doctor_id, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, doctor_id ASC) AS rn FROM (SELECT e.attending_doctor_id AS doctor_id, SUM(i.total_amount) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id WHERE e.attending_doctor_id IS NOT NULL GROUP BY e.attending_doctor_id) doctor_revenue) ranked WHERE rn <= 5 ORDER BY total_revenue DESC, doctor_id ASC;
```

### ✅ PASS : HOSPITAL_061 - Top diagnoses
```sql
SELECT diagnosis_name, COUNT(*) AS diagnosis_count FROM diagnoses GROUP BY diagnosis_name ORDER BY diagnosis_count DESC, diagnosis_name ASC LIMIT 10;
```

### ✅ PASS : HOSPITAL_061 - ROW_NUMBER top
```sql
SELECT diagnosis_name, diagnosis_count FROM (SELECT diagnosis_name, diagnosis_count, ROW_NUMBER() OVER (ORDER BY diagnosis_count DESC, diagnosis_name ASC) AS rn FROM (SELECT diagnosis_name, COUNT(*) AS diagnosis_count FROM diagnoses GROUP BY diagnosis_name) diagnosis_counts) ranked WHERE rn <= 10 ORDER BY diagnosis_count DESC, diagnosis_name ASC;
```

### ✅ PASS : HOSPITAL_062 - DISTINCT abnormal patients
```sql
SELECT DISTINCT p.id, p.patient_code, p.full_name FROM patients p JOIN lab_orders lo ON p.id = lo.patient_id JOIN lab_order_items loi ON lo.id = loi.lab_order_id JOIN lab_results lr ON loi.id = lr.lab_order_item_id WHERE lr.interpretation IN ('high', 'low', 'critical');
```

### ✅ PASS : HOSPITAL_062 - EXISTS abnormal result
```sql
SELECT p.id, p.patient_code, p.full_name FROM patients p WHERE EXISTS (SELECT 1 FROM lab_orders lo JOIN lab_order_items loi ON lo.id = loi.lab_order_id JOIN lab_results lr ON loi.id = lr.lab_order_item_id WHERE lo.patient_id = p.id AND lr.interpretation IN ('high', 'low', 'critical'));
```

### ✅ PASS : HOSPITAL_063 - Monthly collection
```sql
SELECT DATE_TRUNC('month', paid_at) AS payment_month, ROUND(SUM(amount_paid), 2) AS total_collected_amount FROM payments WHERE payment_status = 'successful' AND paid_at IS NOT NULL GROUP BY DATE_TRUNC('month', paid_at);
```

### ✅ PASS : HOSPITAL_064 - Schedule day average
```sql
SELECT ds.doctor_id, ds.day_of_week, ROUND(AVG(slot_appointments.appointment_count), 2) AS avg_appointments_per_slot_day FROM doctor_schedules ds JOIN (SELECT doctor_id, EXTRACT(DOW FROM scheduled_start_at) AS day_of_week, COUNT(*) AS appointment_count FROM appointments GROUP BY doctor_id, EXTRACT(DOW FROM scheduled_start_at), DATE(scheduled_start_at)) slot_appointments ON ds.doctor_id = slot_appointments.doctor_id AND ds.day_of_week = slot_appointments.day_of_week WHERE ds.is_active = true GROUP BY ds.doctor_id, ds.day_of_week;
```

### ✅ PASS : HOSPITAL_065 - GROUP open encounters
```sql
SELECT department_id, COUNT(*) AS open_encounters FROM encounters WHERE encounter_status = 'open' GROUP BY department_id;
```

### ✅ PASS : HOSPITAL_066 - Invoice coverage split
```sql
SELECT id, invoice_number, total_amount, insurance_covered_amount, patient_payable_amount FROM invoices;
```

### ✅ PASS : HOSPITAL_067 - LEFT JOIN no appointments
```sql
SELECT d.id, d.full_name, d.department_id FROM doctors d LEFT JOIN appointments a ON d.id = a.doctor_id WHERE d.is_active = true GROUP BY d.id, d.full_name, d.department_id HAVING COUNT(a.id) = 0;
```

### ✅ PASS : HOSPITAL_067 - NOT EXISTS
```sql
SELECT d.id, d.full_name, d.department_id FROM doctors d WHERE d.is_active = true AND NOT EXISTS (SELECT 1 FROM appointments a WHERE a.doctor_id = d.id);
```

### ✅ PASS : HOSPITAL_068 - CASE cancellation rate
```sql
SELECT department_id, ROUND(100.0 * SUM(CASE WHEN appointment_status = 'cancelled' THEN 1 ELSE 0 END) / COUNT(*), 2) AS cancellation_rate_pct FROM appointments GROUP BY department_id;
```

### ✅ PASS : HOSPITAL_068 - FILTER cancellation rate
```sql
SELECT department_id, ROUND(100.0 * COUNT(*) FILTER (WHERE appointment_status = 'cancelled') / COUNT(*), 2) AS cancellation_rate_pct FROM appointments GROUP BY department_id;
```

### ✅ PASS : HOSPITAL_069 - CASE completion rate
```sql
SELECT p.id AS procedure_id, p.procedure_name, ROUND(100.0 * SUM(CASE WHEN po.procedure_status = 'completed' THEN 1 ELSE 0 END) / COUNT(po.id), 2) AS completion_rate_pct FROM procedure_orders po JOIN procedures p ON po.procedure_id = p.id GROUP BY p.id, p.procedure_name;
```

### ✅ PASS : HOSPITAL_069 - FILTER completion rate
```sql
SELECT p.id AS procedure_id, p.procedure_name, ROUND(100.0 * COUNT(*) FILTER (WHERE po.procedure_status = 'completed') / COUNT(po.id), 2) AS completion_rate_pct FROM procedure_orders po JOIN procedures p ON po.procedure_id = p.id GROUP BY p.id, p.procedure_name;
```

### ✅ PASS : HOSPITAL_070 - COUNT distinct types
```sql
SELECT patient_id, COUNT(DISTINCT encounter_type) AS distinct_encounter_types FROM encounters GROUP BY patient_id HAVING COUNT(DISTINCT encounter_type) > 1;
```

### ✅ PASS : HOSPITAL_070 - Subquery distinct types
```sql
SELECT patient_id, distinct_encounter_types FROM (SELECT patient_id, COUNT(DISTINCT encounter_type) AS distinct_encounter_types FROM encounters GROUP BY patient_id) patient_types WHERE distinct_encounter_types > 1;
```

### ✅ PASS : HOSPITAL_071 - Top patient departments
```sql
SELECT department_id, COUNT(DISTINCT patient_id) AS total_patients FROM encounters WHERE department_id IS NOT NULL GROUP BY department_id ORDER BY total_patients DESC, department_id ASC LIMIT 5;
```

### ✅ PASS : HOSPITAL_071 - ROW_NUMBER top
```sql
SELECT department_id, total_patients FROM (SELECT department_id, total_patients, ROW_NUMBER() OVER (ORDER BY total_patients DESC, department_id ASC) AS rn FROM (SELECT department_id, COUNT(DISTINCT patient_id) AS total_patients FROM encounters WHERE department_id IS NOT NULL GROUP BY department_id) department_counts) ranked WHERE rn <= 5 ORDER BY total_patients DESC, department_id ASC;
```

### ✅ PASS : HOSPITAL_072 - Room bed utilization
```sql
SELECT r.id AS room_id, r.room_number, ROUND(100.0 * SUM(CASE WHEN b.bed_status = 'occupied' THEN 1 ELSE 0 END) / COUNT(b.id), 2) AS utilization_pct FROM rooms r JOIN beds b ON r.id = b.room_id GROUP BY r.id, r.room_number;
```

### ✅ PASS : HOSPITAL_072 - FILTER utilization
```sql
SELECT r.id AS room_id, r.room_number, ROUND(100.0 * COUNT(*) FILTER (WHERE b.bed_status = 'occupied') / COUNT(b.id), 2) AS utilization_pct FROM rooms r JOIN beds b ON r.id = b.room_id GROUP BY r.id, r.room_number;
```

### ✅ PASS : HOSPITAL_073 - Top doctor revenue
```sql
SELECT e.attending_doctor_id AS doctor_id, ROUND(SUM(i.total_amount), 2) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id WHERE e.attending_doctor_id IS NOT NULL GROUP BY e.attending_doctor_id ORDER BY total_revenue DESC, doctor_id ASC LIMIT 10;
```

### ✅ PASS : HOSPITAL_073 - ROW_NUMBER top
```sql
SELECT doctor_id, total_revenue FROM (SELECT doctor_id, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, doctor_id ASC) AS rn FROM (SELECT e.attending_doctor_id AS doctor_id, ROUND(SUM(i.total_amount), 2) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id WHERE e.attending_doctor_id IS NOT NULL GROUP BY e.attending_doctor_id) doctor_revenue) ranked WHERE rn <= 10 ORDER BY total_revenue DESC, doctor_id ASC;
```

### ✅ PASS : HOSPITAL_074 - GROUP no-shows
```sql
SELECT patient_id, COUNT(*) AS no_show_count FROM appointments WHERE appointment_status = 'no_show' GROUP BY patient_id HAVING COUNT(*) > 2;
```

### ✅ PASS : HOSPITAL_074 - Subquery no-shows
```sql
SELECT patient_id, no_show_count FROM (SELECT patient_id, COUNT(*) AS no_show_count FROM appointments WHERE appointment_status = 'no_show' GROUP BY patient_id) patient_no_shows WHERE no_show_count > 2;
```

### ✅ PASS : HOSPITAL_075 - CASE rejection rate
```sql
SELECT ipr.id AS insurance_provider_id, ipr.provider_name, ROUND(100.0 * SUM(CASE WHEN ic.claim_status = 'rejected' THEN 1 ELSE 0 END) / COUNT(ic.id), 2) AS rejection_rate_pct FROM insurance_claims ic JOIN insurance_policies ip ON ic.insurance_policy_id = ip.id JOIN insurance_providers ipr ON ip.insurance_provider_id = ipr.id GROUP BY ipr.id, ipr.provider_name;
```

### ✅ PASS : HOSPITAL_075 - FILTER rejection rate
```sql
SELECT ipr.id AS insurance_provider_id, ipr.provider_name, ROUND(100.0 * COUNT(*) FILTER (WHERE ic.claim_status = 'rejected') / COUNT(ic.id), 2) AS rejection_rate_pct FROM insurance_claims ic JOIN insurance_policies ip ON ic.insurance_policy_id = ip.id JOIN insurance_providers ipr ON ip.insurance_provider_id = ipr.id GROUP BY ipr.id, ipr.provider_name;
```

### ✅ PASS : HOSPITAL_076 - ROW_NUMBER top diagnosis
```sql
WITH diagnosis_counts AS (SELECT e.department_id, d.diagnosis_name, COUNT(*) AS diagnosis_count, ROW_NUMBER() OVER (PARTITION BY e.department_id ORDER BY COUNT(*) DESC, d.diagnosis_name ASC) AS rn FROM diagnoses d JOIN encounters e ON d.encounter_id = e.id WHERE e.department_id IS NOT NULL GROUP BY e.department_id, d.diagnosis_name) SELECT department_id, diagnosis_name, diagnosis_count FROM diagnosis_counts WHERE rn = 1;
```

### ✅ PASS : HOSPITAL_077 - Longest current stays
```sql
SELECT id, patient_id, admitted_at, ROUND(EXTRACT(EPOCH FROM (NOW() - admitted_at)) / 86400, 2) AS stay_days FROM admissions WHERE admission_status = 'admitted' ORDER BY stay_days DESC, id ASC LIMIT 10;
```

### ✅ PASS : HOSPITAL_077 - ROW_NUMBER top stays
```sql
SELECT id, patient_id, admitted_at, stay_days FROM (SELECT id, patient_id, admitted_at, ROUND(EXTRACT(EPOCH FROM (NOW() - admitted_at)) / 86400, 2) AS stay_days, ROW_NUMBER() OVER (ORDER BY ROUND(EXTRACT(EPOCH FROM (NOW() - admitted_at)) / 86400, 2) DESC, id ASC) AS rn FROM admissions WHERE admission_status = 'admitted') ranked WHERE rn <= 10 ORDER BY stay_days DESC, id ASC;
```

### ✅ PASS : HOSPITAL_078 - Schedule utilization
```sql
WITH scheduled_slots AS (SELECT doctor_id, COUNT(*) * AVG(max_patients_per_slot) AS total_slots FROM doctor_schedules WHERE is_active = true GROUP BY doctor_id), completed_appts AS (SELECT doctor_id, COUNT(*) AS completed_count FROM appointments WHERE appointment_status = 'completed' GROUP BY doctor_id) SELECT s.doctor_id, ROUND(COALESCE(c.completed_count, 0)::numeric / NULLIF(s.total_slots, 0), 2) AS utilization_ratio FROM scheduled_slots s LEFT JOIN completed_appts c ON s.doctor_id = c.doctor_id;
```

### ✅ PASS : HOSPITAL_079 - LEAD readmission
```sql
WITH ordered_admissions AS (SELECT patient_id, admitted_at, discharge_at, LEAD(admitted_at) OVER (PARTITION BY patient_id ORDER BY admitted_at) AS next_admission_at FROM admissions WHERE discharge_at IS NOT NULL) SELECT patient_id, discharge_at, next_admission_at FROM ordered_admissions WHERE next_admission_at <= discharge_at + INTERVAL '30 days';
```

### ✅ PASS : HOSPITAL_080 - ROW_NUMBER monthly top
```sql
WITH monthly_patient_revenue AS (SELECT DATE_TRUNC('month', created_at) AS billing_month, patient_id, SUM(total_amount) AS total_revenue, ROW_NUMBER() OVER (PARTITION BY DATE_TRUNC('month', created_at) ORDER BY SUM(total_amount) DESC, patient_id ASC) AS rn FROM invoices GROUP BY DATE_TRUNC('month', created_at), patient_id) SELECT billing_month, patient_id, total_revenue FROM monthly_patient_revenue WHERE rn = 1;
```

### ✅ PASS : HOSPITAL_081 - ROW_NUMBER occupancy
```sql
WITH department_bed_usage AS (SELECT r.department_id, COUNT(*) AS occupied_beds, ROW_NUMBER() OVER (ORDER BY COUNT(*) DESC, r.department_id ASC) AS rn FROM beds b JOIN rooms r ON b.room_id = r.id WHERE b.bed_status = 'occupied' AND r.department_id IS NOT NULL GROUP BY r.department_id) SELECT department_id, occupied_beds FROM department_bed_usage WHERE rn = 1;
```

### ✅ PASS : HOSPITAL_082 - LAG critical result
```sql
WITH patient_lab_results AS (SELECT lo.patient_id, lr.resulted_at, lr.interpretation, LAG(lr.interpretation) OVER (PARTITION BY lo.patient_id ORDER BY lr.resulted_at, lr.id) AS prev_interpretation FROM lab_results lr JOIN lab_order_items loi ON lr.lab_order_item_id = loi.id JOIN lab_orders lo ON loi.lab_order_id = lo.id) SELECT DISTINCT patient_id FROM patient_lab_results WHERE interpretation = 'critical' AND prev_interpretation = 'critical';
```

### ✅ PASS : HOSPITAL_083 - DENSE_RANK revenue
```sql
WITH doctor_department_revenue AS (SELECT e.department_id, e.attending_doctor_id AS doctor_id, SUM(i.total_amount) AS total_revenue FROM encounters e JOIN invoices i ON i.encounter_id = e.id WHERE e.department_id IS NOT NULL AND e.attending_doctor_id IS NOT NULL GROUP BY e.department_id, e.attending_doctor_id) SELECT department_id, doctor_id, total_revenue, DENSE_RANK() OVER (PARTITION BY department_id ORDER BY total_revenue DESC, doctor_id ASC) AS revenue_rank FROM doctor_department_revenue;
```

### ✅ PASS : HOSPITAL_084 - ROW_NUMBER max wait
```sql
WITH doctor_waits AS (SELECT id, doctor_id, patient_id, scheduled_start_at, consultation_started_at, ROUND(EXTRACT(EPOCH FROM (consultation_started_at - scheduled_start_at)) / 60, 2) AS wait_time_mins, ROW_NUMBER() OVER (PARTITION BY doctor_id ORDER BY EXTRACT(EPOCH FROM (consultation_started_at - scheduled_start_at)) DESC, id ASC) AS rn FROM appointments WHERE consultation_started_at IS NOT NULL) SELECT id, doctor_id, patient_id, scheduled_start_at, consultation_started_at, wait_time_mins FROM doctor_waits WHERE rn = 1;
```

### ✅ PASS : HOSPITAL_085 - Underpaid claims
```sql
SELECT ic.id, ic.claim_number, ic.invoice_id, i.insurance_covered_amount, ic.approved_amount FROM insurance_claims ic JOIN invoices i ON ic.invoice_id = i.id WHERE ic.approved_amount < i.insurance_covered_amount;
```

### ✅ PASS : HOSPITAL_086 - LAG encounter gap
```sql
WITH ordered_encounters AS (SELECT patient_id, id AS encounter_id, started_at, LAG(started_at) OVER (PARTITION BY patient_id ORDER BY started_at, id) AS previous_encounter_at FROM encounters) SELECT patient_id, encounter_id, previous_encounter_at, started_at, ROUND(EXTRACT(EPOCH FROM (started_at - previous_encounter_at)) / 86400, 2) AS gap_days FROM ordered_encounters WHERE previous_encounter_at IS NOT NULL;
```

### ✅ PASS : HOSPITAL_087 - ROW_NUMBER medication
```sql
WITH doctor_medication_counts AS (SELECT p.doctor_id, pi.medication_id, COUNT(*) AS prescription_count, ROW_NUMBER() OVER (PARTITION BY p.doctor_id ORDER BY COUNT(*) DESC, pi.medication_id ASC) AS rn FROM prescriptions p JOIN prescription_items pi ON p.id = pi.prescription_id WHERE p.doctor_id IS NOT NULL GROUP BY p.doctor_id, pi.medication_id) SELECT doctor_id, medication_id, prescription_count FROM doctor_medication_counts WHERE rn = 1;
```

### ✅ PASS : HOSPITAL_088 - Coverage window filter
```sql
SELECT i.id, i.invoice_number, i.patient_id, i.insurance_policy_id, i.created_at, ip.coverage_start_date, ip.coverage_end_date FROM invoices i JOIN insurance_policies ip ON i.insurance_policy_id = ip.id WHERE DATE(i.created_at) < ip.coverage_start_date OR (ip.coverage_end_date IS NOT NULL AND DATE(i.created_at) > ip.coverage_end_date);
```

### ✅ PASS : HOSPITAL_089 - Readmission flags
```sql
WITH readmission_flags AS (SELECT department_id, patient_id, discharge_at, LEAD(admitted_at) OVER (PARTITION BY patient_id ORDER BY admitted_at) AS next_admission_at FROM admissions WHERE discharge_at IS NOT NULL AND department_id IS NOT NULL) SELECT department_id, ROUND(100.0 * SUM(CASE WHEN next_admission_at <= discharge_at + INTERVAL '30 days' THEN 1 ELSE 0 END) / COUNT(*), 2) AS readmission_rate_pct FROM readmission_flags GROUP BY department_id;
```

### ✅ PASS : HOSPITAL_089 - FILTER readmission rate
```sql
WITH readmission_flags AS (SELECT department_id, patient_id, discharge_at, LEAD(admitted_at) OVER (PARTITION BY patient_id ORDER BY admitted_at) AS next_admission_at FROM admissions WHERE discharge_at IS NOT NULL AND department_id IS NOT NULL) SELECT department_id, ROUND(100.0 * COUNT(*) FILTER (WHERE next_admission_at <= discharge_at + INTERVAL '30 days') / COUNT(*), 2) AS readmission_rate_pct FROM readmission_flags GROUP BY department_id;
```

### ✅ PASS : HOSPITAL_090 - LAG monthly revenue
```sql
WITH monthly_revenue AS (SELECT e.department_id, DATE_TRUNC('month', i.created_at) AS revenue_month, SUM(i.total_amount) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id WHERE e.department_id IS NOT NULL GROUP BY e.department_id, DATE_TRUNC('month', i.created_at)), revenue_with_prev AS (SELECT department_id, revenue_month, total_revenue, LAG(total_revenue) OVER (PARTITION BY department_id ORDER BY revenue_month) AS prev_month_revenue FROM monthly_revenue) SELECT department_id, revenue_month, total_revenue, prev_month_revenue, ROUND(total_revenue - prev_month_revenue, 2) AS revenue_growth FROM revenue_with_prev WHERE prev_month_revenue IS NOT NULL;
```

### ✅ PASS : HOSPITAL_091 - Capacity comparison
```sql
WITH schedule_capacity AS (SELECT doctor_id, day_of_week, SUM(max_patients_per_slot) AS total_capacity FROM doctor_schedules WHERE is_active = true GROUP BY doctor_id, day_of_week), completed_appointments AS (SELECT doctor_id, EXTRACT(DOW FROM scheduled_start_at) AS day_of_week, COUNT(*) AS completed_count FROM appointments WHERE appointment_status = 'completed' GROUP BY doctor_id, EXTRACT(DOW FROM scheduled_start_at)) SELECT sc.doctor_id, sc.day_of_week, sc.total_capacity, COALESCE(ca.completed_count, 0) AS completed_count FROM schedule_capacity sc LEFT JOIN completed_appointments ca ON sc.doctor_id = ca.doctor_id AND sc.day_of_week = ca.day_of_week WHERE COALESCE(ca.completed_count, 0) > sc.total_capacity;
```

### ✅ PASS : HOSPITAL_092 - FILTER high low
```sql
WITH patient_interpretations AS (SELECT lo.patient_id, COUNT(*) FILTER (WHERE lr.interpretation = 'high') AS high_count, COUNT(*) FILTER (WHERE lr.interpretation = 'low') AS low_count FROM lab_results lr JOIN lab_order_items loi ON lr.lab_order_item_id = loi.id JOIN lab_orders lo ON loi.lab_order_id = lo.id GROUP BY lo.patient_id) SELECT patient_id, high_count, low_count FROM patient_interpretations WHERE high_count > 0 AND low_count > 0;
```

### ✅ PASS : HOSPITAL_092 - CASE high low
```sql
WITH patient_interpretations AS (SELECT lo.patient_id, SUM(CASE WHEN lr.interpretation = 'high' THEN 1 ELSE 0 END) AS high_count, SUM(CASE WHEN lr.interpretation = 'low' THEN 1 ELSE 0 END) AS low_count FROM lab_results lr JOIN lab_order_items loi ON lr.lab_order_item_id = loi.id JOIN lab_orders lo ON loi.lab_order_id = lo.id GROUP BY lo.patient_id) SELECT patient_id, high_count, low_count FROM patient_interpretations WHERE high_count > 0 AND low_count > 0;
```

### ✅ PASS : HOSPITAL_093 - GROUP allocations
```sql
SELECT admission_id, COUNT(*) AS allocation_count FROM bed_allocations GROUP BY admission_id HAVING COUNT(*) > 1;
```

### ✅ PASS : HOSPITAL_093 - Subquery allocations
```sql
SELECT admission_id, allocation_count FROM (SELECT admission_id, COUNT(*) AS allocation_count FROM bed_allocations GROUP BY admission_id) allocation_counts WHERE allocation_count > 1;
```

### ✅ PASS : HOSPITAL_094 - DENSE_RANK diversity
```sql
WITH doctor_medication_diversity AS (SELECT p.doctor_id, COUNT(DISTINCT pi.medication_id) AS distinct_medications FROM prescriptions p JOIN prescription_items pi ON p.id = pi.prescription_id WHERE p.doctor_id IS NOT NULL GROUP BY p.doctor_id) SELECT doctor_id, distinct_medications, DENSE_RANK() OVER (ORDER BY distinct_medications DESC, doctor_id ASC) AS diversity_rank FROM doctor_medication_diversity;
```

### ✅ PASS : HOSPITAL_095 - FIRST LAST BMI
```sql
WITH bmi_history AS (SELECT patient_id, recorded_at, bmi, FIRST_VALUE(bmi) OVER (PARTITION BY patient_id ORDER BY recorded_at, id) AS first_bmi, LAST_VALUE(bmi) OVER (PARTITION BY patient_id ORDER BY recorded_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS last_bmi FROM vital_signs WHERE bmi IS NOT NULL) SELECT DISTINCT patient_id, first_bmi, last_bmi FROM bmi_history WHERE last_bmi > first_bmi;
```

### ✅ PASS : HOSPITAL_096 - Top procedure revenue
```sql
SELECT po.procedure_id, ROUND(SUM(ii.line_total), 2) AS total_revenue FROM invoice_items ii JOIN procedure_orders po ON ii.item_reference_id = po.id WHERE ii.item_type = 'procedure' GROUP BY po.procedure_id ORDER BY total_revenue DESC, po.procedure_id ASC LIMIT 10;
```

### ✅ PASS : HOSPITAL_096 - ROW_NUMBER top
```sql
SELECT procedure_id, total_revenue FROM (SELECT procedure_id, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, procedure_id ASC) AS rn FROM (SELECT po.procedure_id, ROUND(SUM(ii.line_total), 2) AS total_revenue FROM invoice_items ii JOIN procedure_orders po ON ii.item_reference_id = po.id WHERE ii.item_type = 'procedure' GROUP BY po.procedure_id) procedure_revenue) ranked WHERE rn <= 10 ORDER BY total_revenue DESC, procedure_id ASC;
```

### ✅ PASS : HOSPITAL_097 - Policy overlap self join
```sql
WITH policy_pairs AS (SELECT ip1.patient_id, ip1.id AS policy_id_1, ip2.id AS policy_id_2, ip1.coverage_start_date AS start_1, ip1.coverage_end_date AS end_1, ip2.coverage_start_date AS start_2, ip2.coverage_end_date AS end_2 FROM insurance_policies ip1 JOIN insurance_policies ip2 ON ip1.patient_id = ip2.patient_id AND ip1.id < ip2.id) SELECT DISTINCT patient_id FROM policy_pairs WHERE COALESCE(end_1, DATE '9999-12-31') >= start_2 AND COALESCE(end_2, DATE '9999-12-31') >= start_1;
```

### ✅ PASS : HOSPITAL_098 - EXISTS follow-up
```sql
WITH completed_consults AS (SELECT id, patient_id, doctor_id, scheduled_start_at FROM appointments WHERE appointment_status = 'completed' AND appointment_type = 'consultation'), followups AS (SELECT cc.id AS appointment_id, CASE WHEN EXISTS (SELECT 1 FROM appointments a2 WHERE a2.patient_id = cc.patient_id AND a2.doctor_id = cc.doctor_id AND a2.appointment_type = 'follow_up' AND a2.scheduled_start_at > cc.scheduled_start_at) THEN 1 ELSE 0 END AS has_followup FROM completed_consults cc) SELECT ROUND(100.0 * SUM(has_followup) / COUNT(*), 2) AS follow_up_conversion_rate_pct FROM followups;
```

### ✅ PASS : HOSPITAL_099 - ROW_NUMBER category
```sql
WITH category_counts AS (SELECT e.department_id, ltc.test_category, COUNT(*) AS total_tests, ROW_NUMBER() OVER (PARTITION BY e.department_id ORDER BY COUNT(*) DESC, ltc.test_category ASC) AS rn FROM lab_orders lo JOIN encounters e ON lo.encounter_id = e.id JOIN lab_order_items loi ON lo.id = loi.lab_order_id JOIN lab_test_catalog ltc ON loi.test_id = ltc.id WHERE e.department_id IS NOT NULL GROUP BY e.department_id, ltc.test_category) SELECT department_id, test_category, total_tests FROM category_counts WHERE rn = 1;
```

### ✅ PASS : HOSPITAL_100 - Payment gap
```sql
SELECT i.id, i.invoice_number, i.total_amount, ROUND(i.total_amount - COALESCE(SUM(CASE WHEN p.payment_status = 'successful' THEN p.amount_paid ELSE 0 END), 0), 2) AS amount_gap FROM invoices i LEFT JOIN payments p ON i.id = p.invoice_id GROUP BY i.id, i.invoice_number, i.total_amount ORDER BY amount_gap DESC, i.id ASC LIMIT 10;
```

### ✅ PASS : HOSPITAL_100 - FILTER payment gap
```sql
SELECT i.id, i.invoice_number, i.total_amount, ROUND(i.total_amount - COALESCE(SUM(p.amount_paid) FILTER (WHERE p.payment_status = 'successful'), 0), 2) AS amount_gap FROM invoices i LEFT JOIN payments p ON i.id = p.invoice_id GROUP BY i.id, i.invoice_number, i.total_amount ORDER BY amount_gap DESC, i.id ASC LIMIT 10;
```

