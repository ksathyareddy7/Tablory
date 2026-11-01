import { getAppIdByName } from "../../base/scripts/base.data.js";

const appId = getAppIdByName("hospital");

export const tableDescriptions = {
  admissions:
    "Inpatient admission records used for length-of-stay, bed usage, discharge, and throughput analysis",
  appointment_status_history:
    "Audit trail of appointment status changes such as scheduled, checked-in, completed, and cancelled",
  appointments:
    "Appointment lifecycle records including scheduling, wait time, no-show, and consultation completion",
  audit_logs:
    "Audit trail capturing operational and compliance sensitive actions across hospital entities",
  bed_allocations:
    "Bed assignment history for admissions including transfers and releases",
  beds: "Individual beds used for inpatient occupancy and utilization analytics",
  departments:
    "Hospital departments such as cardiology, radiology, emergency, ICU, billing, and administration",
  diagnoses:
    "Clinical diagnoses captured against encounters for disease prevalence and care pathway analysis",
  doctor_leaves:
    "Doctor leave records that affect scheduling and appointment rescheduling",
  doctor_schedules:
    "Recurring doctor availability schedules used for appointment slot generation and capacity analysis",
  doctor_specializations:
    "Mapping table allowing doctors to hold one or more specializations",
  doctors:
    "Doctors providing consultations, procedures, admissions, prescriptions, and result approvals",
  encounters:
    "Clinical visit or care encounter records linking outpatient, inpatient, emergency, and teleconsult activity",
  insurance_claims:
    "Insurance claim lifecycle records from submission to settlement or rejection",
  insurance_policies:
    "Patient insurance plans used for eligibility, billing, and claim workflows",
  insurance_providers:
    "Insurance companies and TPAs that reimburse hospital invoices",
  invoice_items:
    "Detailed invoice line items used for revenue, service mix, and billing accuracy analysis",
  invoices:
    "Billing invoices generated for encounters, admissions, labs, pharmacy, and procedures",
  lab_order_items:
    "Individual tests within a lab order tracked through collection, processing, and completion",
  lab_orders: "Lab order headers placed during patient encounters",
  lab_results:
    "Reported and approved lab result values for ordered diagnostic tests",
  lab_test_catalog:
    "Master list of lab and diagnostic tests with sample types and standard pricing",
  medications:
    "Medication master catalog for prescription and pharmacy billing use cases",
  patient_addresses:
    "Patient address history for home, work, billing, and temporary residence",
  patient_allergies:
    "Known patient allergies used in safety and medication screening",
  patient_conditions:
    "Longitudinal record of patient chronic or historical conditions",
  patient_feedback:
    "Patient satisfaction and experience feedback for consultation, wait time, staff, and billing",
  patients:
    "Master patient registry with demographic and emergency contact details",
  payments:
    "Payments received against hospital invoices including refunds and failures",
  prescription_items:
    "Line items of prescribed medicines with dosage, route, and duration",
  prescriptions: "Prescription headers issued during patient encounters",
  procedure_orders:
    "Procedure requests and completion records linked to encounters",
  procedures:
    "Procedure master catalog covering surgical and non-surgical interventions",
  rooms: "Hospital rooms across wards, ICU, OT, lab, and recovery areas",
  specializations: "Medical specializations used to classify doctor expertise",
  staff_users:
    "Non-doctor hospital staff such as nurses, receptionists, lab technicians, and billing executives",
  vital_signs:
    "Measured clinical vitals captured during encounters for longitudinal health analysis",
};

export const questions = [
  {
    app_id: appId,
    code: "HOSPITAL_001",
    title: "Total Patients Count",
    description:
      "Find the total number of patients registered in the hospital.",
    difficulty: "easy",
    expected_query: "SELECT COUNT(*) AS total_patients FROM patients;",
    solution_columns: ["total_patients"],
    tables: ["patients"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_002",
    title: "Active Doctors Count",
    description: "Find the total number of active doctors.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS active_doctors FROM doctors WHERE is_active = true;",
    solution_columns: ["active_doctors"],
    tables: ["doctors"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_003",
    title: "All Active Departments",
    description: "List all active departments in the hospital.",
    difficulty: "easy",
    expected_query:
      "SELECT id, department_code, name, department_type, floor_number FROM departments WHERE is_active = true;",
    solution_columns: [
      "id",
      "department_code",
      "name",
      "department_type",
      "floor_number",
    ],
    tables: ["departments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_004",
    title: "Patients Registered Today",
    description: "Find patients who were registered today.",
    difficulty: "easy",
    expected_query:
      "SELECT id, patient_code, full_name, registered_at FROM patients WHERE DATE(registered_at) = CURRENT_DATE;",
    solution_columns: ["id", "patient_code", "full_name", "registered_at"],
    tables: ["patients"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_005",
    title: "Available Beds",
    description: "List all beds that are currently available.",
    difficulty: "easy",
    expected_query:
      "SELECT id, room_id, bed_number, bed_type, bed_status FROM beds WHERE bed_status = 'available' AND is_active = true;",
    solution_columns: ["id", "room_id", "bed_number", "bed_type", "bed_status"],
    tables: ["beds"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_006",
    title: "Scheduled Appointments",
    description: "Find all appointments that are currently scheduled.",
    difficulty: "easy",
    expected_query:
      "SELECT id, appointment_number, patient_id, doctor_id, scheduled_start_at, scheduled_end_at FROM appointments WHERE appointment_status = 'scheduled';",
    solution_columns: [
      "id",
      "appointment_number",
      "patient_id",
      "doctor_id",
      "scheduled_start_at",
      "scheduled_end_at",
    ],
    tables: ["appointments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_007",
    title: "Doctors By Department",
    description: "List each doctor along with their department name.",
    difficulty: "easy",
    expected_query:
      "SELECT d.id, d.full_name, dp.name AS department_name FROM doctors d LEFT JOIN departments dp ON d.department_id = dp.id;",
    solution_columns: ["id", "full_name", "department_name"],
    tables: ["doctors", "departments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_008",
    title: "Patients With Insurance",
    description: "Find patients who have at least one insurance policy.",
    difficulty: "easy",
    expected_query:
      "SELECT DISTINCT p.id, p.patient_code, p.full_name FROM patients p JOIN insurance_policies ip ON p.id = ip.patient_id;",
    solution_columns: ["id", "patient_code", "full_name"],
    tables: ["patients", "insurance_policies"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_009",
    title: "Completed Lab Orders",
    description: "Find all lab orders that have been completed.",
    difficulty: "easy",
    expected_query:
      "SELECT id, lab_order_number, patient_id, encounter_id, ordered_at FROM lab_orders WHERE order_status = 'completed';",
    solution_columns: [
      "id",
      "lab_order_number",
      "patient_id",
      "encounter_id",
      "ordered_at",
    ],
    tables: ["lab_orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_010",
    title: "Paid Invoices",
    description: "Find all invoices that have been fully paid.",
    difficulty: "easy",
    expected_query:
      "SELECT id, invoice_number, patient_id, total_amount, issued_at FROM invoices WHERE invoice_status = 'paid';",
    solution_columns: [
      "id",
      "invoice_number",
      "patient_id",
      "total_amount",
      "issued_at",
    ],
    tables: ["invoices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_011",
    title: "Total Appointments Per Doctor",
    description:
      "Find the total number of appointments handled by each doctor.",
    difficulty: "easy",
    expected_query:
      "SELECT doctor_id, COUNT(*) AS total_appointments FROM appointments GROUP BY doctor_id;",
    solution_columns: ["doctor_id", "total_appointments"],
    tables: ["appointments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_012",
    title: "Patients With Allergies",
    description: "Find all patients who have at least one recorded allergy.",
    difficulty: "easy",
    expected_query:
      "SELECT DISTINCT p.id, p.patient_code, p.full_name FROM patients p JOIN patient_allergies pa ON p.id = pa.patient_id;",
    solution_columns: ["id", "patient_code", "full_name"],
    tables: ["patients", "patient_allergies"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_013",
    title: "Doctors On Leave",
    description: "Find doctors whose leave is currently approved.",
    difficulty: "easy",
    expected_query:
      "SELECT dl.id, dl.doctor_id, d.full_name, dl.leave_type, dl.start_date, dl.end_date FROM doctor_leaves dl JOIN doctors d ON dl.doctor_id = d.id WHERE dl.approval_status = 'approved';",
    solution_columns: [
      "id",
      "doctor_id",
      "full_name",
      "leave_type",
      "start_date",
      "end_date",
    ],
    tables: ["doctor_leaves", "doctors"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_014",
    title: "Lab Tests Catalog",
    description: "List all active lab tests with their standard prices.",
    difficulty: "easy",
    expected_query:
      "SELECT id, test_code, test_name, test_category, standard_price FROM lab_test_catalog WHERE is_active = true;",
    solution_columns: [
      "id",
      "test_code",
      "test_name",
      "test_category",
      "standard_price",
    ],
    tables: ["lab_test_catalog"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_015",
    title: "Primary Insurance Policies",
    description: "Find all insurance policies marked as primary.",
    difficulty: "easy",
    expected_query:
      "SELECT id, patient_id, insurance_provider_id, policy_number, plan_name, coverage_start_date, coverage_end_date FROM insurance_policies WHERE is_primary = true;",
    solution_columns: [
      "id",
      "patient_id",
      "insurance_provider_id",
      "policy_number",
      "plan_name",
      "coverage_start_date",
      "coverage_end_date",
    ],
    tables: ["insurance_policies"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_016",
    title: "Inpatient Admissions",
    description: "Find all admissions that are currently admitted.",
    difficulty: "easy",
    expected_query:
      "SELECT id, admission_number, patient_id, department_id, admitted_at FROM admissions WHERE admission_status = 'admitted';",
    solution_columns: [
      "id",
      "admission_number",
      "patient_id",
      "department_id",
      "admitted_at",
    ],
    tables: ["admissions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_017",
    title: "Doctors And Specializations",
    description:
      "List each doctor along with their primary specialization name.",
    difficulty: "easy",
    expected_query:
      "SELECT d.id, d.full_name, s.name AS specialization_name FROM doctors d LEFT JOIN specializations s ON d.primary_specialization_id = s.id;",
    solution_columns: ["id", "full_name", "specialization_name"],
    tables: ["doctors", "specializations"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_018",
    title: "Payments Received",
    description: "Find all successful payments received against invoices.",
    difficulty: "easy",
    expected_query:
      "SELECT id, payment_number, invoice_id, payment_method, amount_paid, paid_at FROM payments WHERE payment_status = 'successful';",
    solution_columns: [
      "id",
      "payment_number",
      "invoice_id",
      "payment_method",
      "amount_paid",
      "paid_at",
    ],
    tables: ["payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_019",
    title: "Pending Insurance Claims",
    description: "Find all insurance claims that are under review.",
    difficulty: "easy",
    expected_query:
      "SELECT id, claim_number, invoice_id, insurance_policy_id, claimed_amount, submitted_at FROM insurance_claims WHERE claim_status = 'under_review';",
    solution_columns: [
      "id",
      "claim_number",
      "invoice_id",
      "insurance_policy_id",
      "claimed_amount",
      "submitted_at",
    ],
    tables: ["insurance_claims"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_020",
    title: "Patient Feedback Ratings",
    description: "List all patient feedback entries with ratings.",
    difficulty: "easy",
    expected_query:
      "SELECT id, patient_id, doctor_id, rating, feedback_category, created_at FROM patient_feedback;",
    solution_columns: [
      "id",
      "patient_id",
      "doctor_id",
      "rating",
      "feedback_category",
      "created_at",
    ],
    tables: ["patient_feedback"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_021",
    title: "Average Consultation Fee By Department",
    description:
      "Find the average consultation fee for doctors in each department.",
    difficulty: "easy",
    expected_query:
      "SELECT d.department_id, dp.name AS department_name, ROUND(AVG(d.consultation_fee), 2) AS avg_consultation_fee FROM doctors d JOIN departments dp ON d.department_id = dp.id WHERE d.is_active = true GROUP BY d.department_id, dp.name;",
    solution_columns: [
      "department_id",
      "department_name",
      "avg_consultation_fee",
    ],
    tables: ["doctors", "departments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_022",
    title: "Appointment Count By Status",
    description:
      "Find the total number of appointments for each appointment status.",
    difficulty: "easy",
    expected_query:
      "SELECT appointment_status, COUNT(*) AS total_appointments FROM appointments GROUP BY appointment_status;",
    solution_columns: ["appointment_status", "total_appointments"],
    tables: ["appointments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_023",
    title: "Occupied Beds Count",
    description: "Find the total number of currently occupied beds.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS occupied_beds FROM beds WHERE bed_status = 'occupied';",
    solution_columns: ["occupied_beds"],
    tables: ["beds"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_024",
    title: "Admissions By Department",
    description: "Find the number of admissions for each department.",
    difficulty: "easy",
    expected_query:
      "SELECT department_id, COUNT(*) AS total_admissions FROM admissions GROUP BY department_id;",
    solution_columns: ["department_id", "total_admissions"],
    tables: ["admissions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_025",
    title: "Total Invoice Amount By Patient",
    description: "Find the total invoiced amount for each patient.",
    difficulty: "easy",
    expected_query:
      "SELECT patient_id, ROUND(SUM(total_amount), 2) AS total_invoice_amount FROM invoices GROUP BY patient_id;",
    solution_columns: ["patient_id", "total_invoice_amount"],
    tables: ["invoices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_026",
    title: "Lab Orders Per Patient",
    description: "Find the total number of lab orders for each patient.",
    difficulty: "easy",
    expected_query:
      "SELECT patient_id, COUNT(*) AS total_lab_orders FROM lab_orders GROUP BY patient_id;",
    solution_columns: ["patient_id", "total_lab_orders"],
    tables: ["lab_orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_027",
    title: "Prescriptions Per Doctor",
    description:
      "Find the total number of prescriptions written by each doctor.",
    difficulty: "easy",
    expected_query:
      "SELECT doctor_id, COUNT(*) AS total_prescriptions FROM prescriptions GROUP BY doctor_id;",
    solution_columns: ["doctor_id", "total_prescriptions"],
    tables: ["prescriptions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_028",
    title: "Critical Lab Results",
    description: "Find all lab results marked as critical.",
    difficulty: "easy",
    expected_query:
      "SELECT id, lab_order_item_id, result_value, interpretation, resulted_at FROM lab_results WHERE interpretation = 'critical';",
    solution_columns: [
      "id",
      "lab_order_item_id",
      "result_value",
      "interpretation",
      "resulted_at",
    ],
    tables: ["lab_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_029",
    title: "Doctors By Experience",
    description: "List doctors ordered by years of experience.",
    difficulty: "easy",
    expected_query:
      "SELECT id, full_name, years_of_experience FROM doctors ORDER BY years_of_experience DESC NULLS LAST, id ASC;",
    solution_columns: ["id", "full_name", "years_of_experience"],
    tables: ["doctors"],
    comparison_config: {
      sort_by_columns: [
        { column: "years_of_experience", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "HOSPITAL_030",
    title: "Patients With Chronic Conditions",
    description: "Find all patients who have at least one chronic condition.",
    difficulty: "easy",
    expected_query:
      "SELECT DISTINCT p.id, p.patient_code, p.full_name FROM patients p JOIN patient_conditions pc ON p.id = pc.patient_id WHERE pc.condition_status = 'chronic';",
    solution_columns: ["id", "patient_code", "full_name"],
    tables: ["patients", "patient_conditions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_031",
    title: "Average Length Of Stay",
    description:
      "Find the average length of stay in days for discharged admissions.",
    difficulty: "easy",
    expected_query:
      "SELECT ROUND(AVG(EXTRACT(EPOCH FROM (discharge_at - admitted_at)) / 86400), 2) AS avg_length_of_stay_days FROM admissions WHERE admission_status = 'discharged' AND discharge_at IS NOT NULL;",
    solution_columns: ["avg_length_of_stay_days"],
    tables: ["admissions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_032",
    title: "Daily Registrations",
    description: "Find the number of patients registered each day.",
    difficulty: "easy",
    expected_query:
      "SELECT DATE(registered_at) AS registration_date, COUNT(*) AS total_patients FROM patients GROUP BY DATE(registered_at);",
    solution_columns: ["registration_date", "total_patients"],
    tables: ["patients"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_033",
    title: "Revenue By Payment Method",
    description: "Find the total successful payment amount by payment method.",
    difficulty: "easy",
    expected_query:
      "SELECT payment_method, ROUND(SUM(amount_paid), 2) AS total_revenue FROM payments WHERE payment_status = 'successful' GROUP BY payment_method;",
    solution_columns: ["payment_method", "total_revenue"],
    tables: ["payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_034",
    title: "Doctors Per Specialization",
    description: "Find the number of doctors for each specialization.",
    difficulty: "easy",
    expected_query:
      "SELECT s.id AS specialization_id, s.name AS specialization_name, COUNT(ds.doctor_id) AS total_doctors FROM specializations s LEFT JOIN doctor_specializations ds ON s.id = ds.specialization_id GROUP BY s.id, s.name;",
    solution_columns: [
      "specialization_id",
      "specialization_name",
      "total_doctors",
    ],
    tables: ["specializations", "doctor_specializations"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_035",
    title: "Completed Procedures Count",
    description: "Find the total number of completed procedure orders.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS completed_procedures FROM procedure_orders WHERE procedure_status = 'completed';",
    solution_columns: ["completed_procedures"],
    tables: ["procedure_orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_036",
    title: "Appointments Per Day",
    description: "Find the total number of appointments scheduled each day.",
    difficulty: "medium",
    expected_query:
      "SELECT DATE(scheduled_start_at) AS appointment_date, COUNT(*) AS total_appointments FROM appointments GROUP BY DATE(scheduled_start_at);",
    solution_columns: ["appointment_date", "total_appointments"],
    tables: ["appointments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_037",
    title: "Top Doctors By Appointment Volume",
    description:
      "Find the top 5 doctors with the highest number of completed appointments.",
    difficulty: "medium",
    expected_query:
      "SELECT doctor_id, COUNT(*) AS completed_appointments FROM appointments WHERE appointment_status = 'completed' GROUP BY doctor_id ORDER BY completed_appointments DESC, doctor_id ASC LIMIT 5;",
    solution_columns: ["doctor_id", "completed_appointments"],
    tables: ["appointments"],
    comparison_config: {
      sort_by_columns: [
        { column: "completed_appointments", direction: "desc" },
        { column: "doctor_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "HOSPITAL_038",
    title: "Department Revenue",
    description:
      "Find total invoice revenue generated by each department through encounters.",
    difficulty: "medium",
    expected_query:
      "SELECT e.department_id, ROUND(SUM(i.total_amount), 2) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id GROUP BY e.department_id;",
    solution_columns: ["department_id", "total_revenue"],
    tables: ["invoices", "encounters"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_039",
    title: "Patients With Multiple Admissions",
    description: "Find patients who have been admitted more than once.",
    difficulty: "medium",
    expected_query:
      "SELECT patient_id, COUNT(*) AS admission_count FROM admissions GROUP BY patient_id HAVING COUNT(*) > 1;",
    solution_columns: ["patient_id", "admission_count"],
    tables: ["admissions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_040",
    title: "Average Wait Time By Doctor",
    description: "Find average patient wait time in minutes for each doctor.",
    difficulty: "medium",
    expected_query:
      "SELECT doctor_id, ROUND(AVG(EXTRACT(EPOCH FROM (consultation_started_at - scheduled_start_at)) / 60), 2) AS avg_wait_time_mins FROM appointments WHERE consultation_started_at IS NOT NULL GROUP BY doctor_id;",
    solution_columns: ["doctor_id", "avg_wait_time_mins"],
    tables: ["appointments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_041",
    title: "High Appointment Doctors",
    description: "Find doctors who have handled more than 50 appointments.",
    difficulty: "medium",
    expected_query:
      "SELECT doctor_id, COUNT(*) AS appointment_count FROM appointments GROUP BY doctor_id HAVING COUNT(*) > 50;",
    solution_columns: ["doctor_id", "appointment_count"],
    tables: ["appointments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_042",
    title: "Patients With High Bills",
    description: "Find patients whose total invoice amount exceeds 50000.",
    difficulty: "medium",
    expected_query:
      "SELECT patient_id, SUM(total_amount) AS total_amount FROM invoices GROUP BY patient_id HAVING SUM(total_amount) > 50000;",
    solution_columns: ["patient_id", "total_amount"],
    tables: ["invoices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_043",
    title: "Frequent Visitors",
    description: "Find patients who visited the hospital more than 10 times.",
    difficulty: "medium",
    expected_query:
      "SELECT patient_id, COUNT(*) AS visit_count FROM encounters GROUP BY patient_id HAVING COUNT(*) > 10;",
    solution_columns: ["patient_id", "visit_count"],
    tables: ["encounters"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_044",
    title: "Top 5 Departments By Revenue",
    description: "Find top 5 departments generating highest revenue.",
    difficulty: "medium",
    expected_query:
      "SELECT e.department_id, SUM(i.total_amount) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id GROUP BY e.department_id ORDER BY total_revenue DESC, e.department_id ASC LIMIT 5;",
    solution_columns: ["department_id", "total_revenue"],
    tables: ["invoices", "encounters"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_revenue", direction: "desc" },
        { column: "department_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "HOSPITAL_045",
    title: "Average Lab Tests Per Patient",
    description: "Find average number of lab tests ordered per patient.",
    difficulty: "medium",
    expected_query:
      "SELECT ROUND(AVG(test_count), 2) AS avg_tests_per_patient FROM (SELECT patient_id, COUNT(*) AS test_count FROM lab_orders GROUP BY patient_id) x;",
    solution_columns: ["avg_tests_per_patient"],
    tables: ["lab_orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_046",
    title: "Doctors With No Appointments",
    description: "Find doctors who have not handled any appointments.",
    difficulty: "medium",
    expected_query:
      "SELECT d.id FROM doctors d LEFT JOIN appointments a ON d.id = a.doctor_id WHERE a.id IS NULL;",
    solution_columns: ["id"],
    tables: ["doctors", "appointments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_047",
    title: "Patients With No Admissions",
    description: "Find patients who have never been admitted.",
    difficulty: "medium",
    expected_query:
      "SELECT p.id FROM patients p LEFT JOIN admissions a ON p.id = a.patient_id WHERE a.id IS NULL;",
    solution_columns: ["id"],
    tables: ["patients", "admissions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_048",
    title: "Lab Orders Without Results",
    description: "Find lab orders that have no results recorded.",
    difficulty: "medium",
    expected_query:
      "SELECT lo.id FROM lab_orders lo LEFT JOIN lab_order_items loi ON loi.lab_order_id = lo.id LEFT JOIN lab_results lr ON lr.lab_order_item_id = loi.id GROUP BY lo.id HAVING COUNT(lr.id) = 0;",
    solution_columns: ["id"],
    tables: ["lab_orders", "lab_order_items", "lab_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_049",
    title: "Top 5 Patients By Spending",
    description: "Find top 5 patients with highest total invoice amount.",
    difficulty: "medium",
    expected_query:
      "SELECT patient_id, SUM(total_amount) AS total_spent FROM invoices GROUP BY patient_id ORDER BY total_spent DESC, patient_id ASC LIMIT 5;",
    solution_columns: ["patient_id", "total_spent"],
    tables: ["invoices"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_spent", direction: "desc" },
        { column: "patient_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "HOSPITAL_050",
    title: "Top 5 Doctors By Prescriptions",
    description: "Find top 5 doctors who issued most prescriptions.",
    difficulty: "medium",
    expected_query:
      "SELECT doctor_id, COUNT(*) AS prescription_count FROM prescriptions GROUP BY doctor_id ORDER BY prescription_count DESC, doctor_id ASC LIMIT 5;",
    solution_columns: ["doctor_id", "prescription_count"],
    tables: ["prescriptions"],
    comparison_config: {
      sort_by_columns: [
        { column: "prescription_count", direction: "desc" },
        { column: "doctor_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "HOSPITAL_051",
    title: "Rank Doctors By Revenue",
    description: "Rank doctors based on total billing revenue.",
    difficulty: "hard",
    expected_query:
      "SELECT e.attending_doctor_id AS doctor_id, SUM(i.total_amount) AS total_revenue, RANK() OVER (ORDER BY SUM(i.total_amount) DESC) AS rank FROM invoices i JOIN encounters e ON i.encounter_id = e.id WHERE e.attending_doctor_id IS NOT NULL GROUP BY e.attending_doctor_id;",
    solution_columns: ["doctor_id", "total_revenue", "rank"],
    tables: ["invoices", "encounters"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_052",
    title: "Running Admissions Per Patient",
    description: "Calculate cumulative admissions per patient over time.",
    difficulty: "hard",
    expected_query:
      "SELECT patient_id, id AS admission_id, COUNT(*) OVER (PARTITION BY patient_id ORDER BY admitted_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_admissions FROM admissions;",
    solution_columns: ["patient_id", "admission_id", "running_admissions"],
    tables: ["admissions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_053",
    title: "Second Highest Spending Patient",
    description: "Find the patient with second highest total invoice amount.",
    difficulty: "hard",
    expected_query:
      "SELECT patient_id, total_spent FROM (SELECT patient_id, SUM(total_amount) AS total_spent, DENSE_RANK() OVER (ORDER BY SUM(total_amount) DESC) AS rnk FROM invoices GROUP BY patient_id) x WHERE rnk = 2;",
    solution_columns: ["patient_id", "total_spent"],
    tables: ["invoices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_054",
    title: "Gap Between Admissions",
    description: "Find maximum time gap between admissions per patient.",
    difficulty: "hard",
    expected_query:
      "SELECT patient_id, MAX(gap_days) AS max_gap_days FROM (SELECT patient_id, EXTRACT(EPOCH FROM (admitted_at - LAG(admitted_at) OVER (PARTITION BY patient_id ORDER BY admitted_at))) / 86400 AS gap_days FROM admissions) x GROUP BY patient_id;",
    solution_columns: ["patient_id", "max_gap_days"],
    tables: ["admissions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_055",
    title: "Daily Admission Rank",
    description: "Rank patients by number of admissions per day.",
    difficulty: "hard",
    expected_query:
      "SELECT admission_date, patient_id, total_admissions, RANK() OVER (PARTITION BY admission_date ORDER BY total_admissions DESC) AS rank FROM (SELECT DATE(admitted_at) AS admission_date, patient_id, COUNT(*) AS total_admissions FROM admissions GROUP BY DATE(admitted_at), patient_id) x;",
    solution_columns: [
      "admission_date",
      "patient_id",
      "total_admissions",
      "rank",
    ],
    tables: ["admissions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_056",
    title: "Top 3 Patients Per Department",
    description: "Find top 3 patients with highest billing per department.",
    difficulty: "hard",
    expected_query:
      "SELECT department_id, patient_id, total_spent FROM (SELECT e.department_id, i.patient_id, SUM(i.total_amount) AS total_spent, ROW_NUMBER() OVER (PARTITION BY e.department_id ORDER BY SUM(i.total_amount) DESC) AS rn FROM invoices i JOIN encounters e ON i.encounter_id = e.id GROUP BY e.department_id, i.patient_id) x WHERE rn <= 3;",
    solution_columns: ["department_id", "patient_id", "total_spent"],
    tables: ["invoices", "encounters"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_057",
    title: "Moving Avg Billing",
    description: "Calculate 3-invoice moving average billing per patient.",
    difficulty: "hard",
    expected_query:
      "SELECT patient_id, id, total_amount, AVG(total_amount) OVER (PARTITION BY patient_id ORDER BY issued_at ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg FROM invoices;",
    solution_columns: ["patient_id", "id", "total_amount", "moving_avg"],
    tables: ["invoices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_058",
    title: "Longest Admission Streak",
    description: "Find longest consecutive admission streak per patient.",
    difficulty: "hard",
    expected_query:
      "WITH x AS (SELECT patient_id, admitted_at, ROW_NUMBER() OVER (PARTITION BY patient_id ORDER BY admitted_at) - ROW_NUMBER() OVER (PARTITION BY patient_id, DATE(admitted_at) ORDER BY admitted_at) AS grp FROM admissions) SELECT patient_id, COUNT(*) AS streak FROM x GROUP BY patient_id, grp;",
    solution_columns: ["patient_id", "streak"],
    tables: ["admissions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_059",
    title: "90th Percentile Billing",
    description: "Find 90th percentile of invoice amount per patient.",
    difficulty: "hard",
    expected_query:
      "SELECT patient_id, PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY total_amount) AS p90_amount FROM invoices GROUP BY patient_id;",
    solution_columns: ["patient_id", "p90_amount"],
    tables: ["invoices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_060",
    title: "Top Revenue Doctors",
    description: "Find top 5 doctors generating highest revenue.",
    difficulty: "hard",
    expected_query:
      "SELECT e.attending_doctor_id AS doctor_id, SUM(i.total_amount) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id WHERE e.attending_doctor_id IS NOT NULL GROUP BY e.attending_doctor_id ORDER BY total_revenue DESC, doctor_id ASC LIMIT 5;",
    solution_columns: ["doctor_id", "total_revenue"],
    tables: ["invoices", "encounters"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_revenue", direction: "desc" },
        { column: "doctor_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "HOSPITAL_061",
    title: "Most Common Diagnoses",
    description: "Find the top 10 most frequently recorded diagnoses.",
    difficulty: "medium",
    expected_query:
      "SELECT diagnosis_name, COUNT(*) AS diagnosis_count FROM diagnoses GROUP BY diagnosis_name ORDER BY diagnosis_count DESC, diagnosis_name ASC LIMIT 10;",
    solution_columns: ["diagnosis_name", "diagnosis_count"],
    tables: ["diagnoses"],
    comparison_config: {
      sort_by_columns: [
        { column: "diagnosis_count", direction: "desc" },
        { column: "diagnosis_name", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "HOSPITAL_062",
    title: "Patients With Abnormal Lab Results",
    description:
      "Find patients who have at least one abnormal or critical lab result.",
    difficulty: "medium",
    expected_query:
      "SELECT DISTINCT p.id, p.patient_code, p.full_name FROM patients p JOIN lab_orders lo ON p.id = lo.patient_id JOIN lab_order_items loi ON lo.id = loi.lab_order_id JOIN lab_results lr ON loi.id = lr.lab_order_item_id WHERE lr.interpretation IN ('high', 'low', 'critical');",
    solution_columns: ["id", "patient_code", "full_name"],
    tables: ["patients", "lab_orders", "lab_order_items", "lab_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_063",
    title: "Monthly Revenue Collection",
    description:
      "Find the total successful payment amount collected each month.",
    difficulty: "medium",
    expected_query:
      "SELECT DATE_TRUNC('month', paid_at) AS payment_month, ROUND(SUM(amount_paid), 2) AS total_collected_amount FROM payments WHERE payment_status = 'successful' AND paid_at IS NOT NULL GROUP BY DATE_TRUNC('month', paid_at);",
    solution_columns: ["payment_month", "total_collected_amount"],
    tables: ["payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_064",
    title: "Average Patients Per Doctor Schedule Slot",
    description:
      "Find the average number of appointments booked per doctor schedule weekday.",
    difficulty: "medium",
    expected_query:
      "SELECT ds.doctor_id, ds.day_of_week, ROUND(AVG(slot_appointments.appointment_count), 2) AS avg_appointments_per_slot_day FROM doctor_schedules ds JOIN (SELECT doctor_id, EXTRACT(DOW FROM scheduled_start_at) AS day_of_week, COUNT(*) AS appointment_count FROM appointments GROUP BY doctor_id, EXTRACT(DOW FROM scheduled_start_at), DATE(scheduled_start_at)) slot_appointments ON ds.doctor_id = slot_appointments.doctor_id AND ds.day_of_week = slot_appointments.day_of_week WHERE ds.is_active = true GROUP BY ds.doctor_id, ds.day_of_week;",
    solution_columns: [
      "doctor_id",
      "day_of_week",
      "avg_appointments_per_slot_day",
    ],
    tables: ["doctor_schedules", "appointments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_065",
    title: "Open Encounters By Department",
    description:
      "Find the total number of currently open encounters for each department.",
    difficulty: "medium",
    expected_query:
      "SELECT department_id, COUNT(*) AS open_encounters FROM encounters WHERE encounter_status = 'open' GROUP BY department_id;",
    solution_columns: ["department_id", "open_encounters"],
    tables: ["encounters"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_066",
    title: "Insurance Coverage Split By Invoice",
    description:
      "Find each invoice with insurance-covered amount and patient-payable amount.",
    difficulty: "medium",
    expected_query:
      "SELECT id, invoice_number, total_amount, insurance_covered_amount, patient_payable_amount FROM invoices;",
    solution_columns: [
      "id",
      "invoice_number",
      "total_amount",
      "insurance_covered_amount",
      "patient_payable_amount",
    ],
    tables: ["invoices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_067",
    title: "Doctors With No Appointments",
    description: "Find active doctors who have never had any appointment.",
    difficulty: "medium",
    expected_query:
      "SELECT d.id, d.full_name, d.department_id FROM doctors d LEFT JOIN appointments a ON d.id = a.doctor_id WHERE d.is_active = true GROUP BY d.id, d.full_name, d.department_id HAVING COUNT(a.id) = 0;",
    solution_columns: ["id", "full_name", "department_id"],
    tables: ["doctors", "appointments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_068",
    title: "Cancelled Appointment Rate By Department",
    description:
      "Find the cancellation rate percentage for appointments in each department.",
    difficulty: "medium",
    expected_query:
      "SELECT department_id, ROUND(100.0 * SUM(CASE WHEN appointment_status = 'cancelled' THEN 1 ELSE 0 END) / COUNT(*), 2) AS cancellation_rate_pct FROM appointments GROUP BY department_id;",
    solution_columns: ["department_id", "cancellation_rate_pct"],
    tables: ["appointments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_069",
    title: "Procedure Completion Rate",
    description: "Find the completion rate percentage for each procedure.",
    difficulty: "medium",
    expected_query:
      "SELECT p.id AS procedure_id, p.procedure_name, ROUND(100.0 * SUM(CASE WHEN po.procedure_status = 'completed' THEN 1 ELSE 0 END) / COUNT(po.id), 2) AS completion_rate_pct FROM procedure_orders po JOIN procedures p ON po.procedure_id = p.id GROUP BY p.id, p.procedure_name;",
    solution_columns: ["procedure_id", "procedure_name", "completion_rate_pct"],
    tables: ["procedure_orders", "procedures"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_070",
    title: "Patients With Multiple Encounter Types",
    description:
      "Find patients who have records in more than one encounter type.",
    difficulty: "medium",
    expected_query:
      "SELECT patient_id, COUNT(DISTINCT encounter_type) AS distinct_encounter_types FROM encounters GROUP BY patient_id HAVING COUNT(DISTINCT encounter_type) > 1;",
    solution_columns: ["patient_id", "distinct_encounter_types"],
    tables: ["encounters"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_071",
    title: "Top Departments By Patient Volume",
    description:
      "Find the top 5 departments with the highest number of distinct patients across encounters.",
    difficulty: "medium",
    expected_query:
      "SELECT department_id, COUNT(DISTINCT patient_id) AS total_patients FROM encounters WHERE department_id IS NOT NULL GROUP BY department_id ORDER BY total_patients DESC, department_id ASC LIMIT 5;",
    solution_columns: ["department_id", "total_patients"],
    tables: ["encounters"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_patients", direction: "desc" },
        { column: "department_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "HOSPITAL_072",
    title: "Bed Utilization Percentage By Room",
    description: "Find the current bed utilization percentage for each room.",
    difficulty: "medium",
    expected_query:
      "SELECT r.id AS room_id, r.room_number, ROUND(100.0 * SUM(CASE WHEN b.bed_status = 'occupied' THEN 1 ELSE 0 END) / COUNT(b.id), 2) AS utilization_pct FROM rooms r JOIN beds b ON r.id = b.room_id GROUP BY r.id, r.room_number;",
    solution_columns: ["room_id", "room_number", "utilization_pct"],
    tables: ["rooms", "beds"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_073",
    title: "Doctors With Highest Revenue",
    description:
      "Find the top 10 doctors generating the highest total invoice revenue through encounters.",
    difficulty: "medium",
    expected_query:
      "SELECT e.attending_doctor_id AS doctor_id, ROUND(SUM(i.total_amount), 2) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id WHERE e.attending_doctor_id IS NOT NULL GROUP BY e.attending_doctor_id ORDER BY total_revenue DESC, doctor_id ASC LIMIT 10;",
    solution_columns: ["doctor_id", "total_revenue"],
    tables: ["invoices", "encounters"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_revenue", direction: "desc" },
        { column: "doctor_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "HOSPITAL_074",
    title: "Patients With Frequent No Shows",
    description: "Find patients with more than 2 no-show appointments.",
    difficulty: "medium",
    expected_query:
      "SELECT patient_id, COUNT(*) AS no_show_count FROM appointments WHERE appointment_status = 'no_show' GROUP BY patient_id HAVING COUNT(*) > 2;",
    solution_columns: ["patient_id", "no_show_count"],
    tables: ["appointments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_075",
    title: "Insurance Rejection Rate By Provider",
    description:
      "Find the insurance claim rejection rate percentage for each provider.",
    difficulty: "medium",
    expected_query:
      "SELECT ipr.id AS insurance_provider_id, ipr.provider_name, ROUND(100.0 * SUM(CASE WHEN ic.claim_status = 'rejected' THEN 1 ELSE 0 END) / COUNT(ic.id), 2) AS rejection_rate_pct FROM insurance_claims ic JOIN insurance_policies ip ON ic.insurance_policy_id = ip.id JOIN insurance_providers ipr ON ip.insurance_provider_id = ipr.id GROUP BY ipr.id, ipr.provider_name;",
    solution_columns: [
      "insurance_provider_id",
      "provider_name",
      "rejection_rate_pct",
    ],
    tables: ["insurance_claims", "insurance_policies", "insurance_providers"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_076",
    title: "Top Diagnoses By Department",
    description: "Find the most frequent diagnosis in each department.",
    difficulty: "hard",
    expected_query:
      "WITH diagnosis_counts AS (SELECT e.department_id, d.diagnosis_name, COUNT(*) AS diagnosis_count, ROW_NUMBER() OVER (PARTITION BY e.department_id ORDER BY COUNT(*) DESC, d.diagnosis_name ASC) AS rn FROM diagnoses d JOIN encounters e ON d.encounter_id = e.id WHERE e.department_id IS NOT NULL GROUP BY e.department_id, d.diagnosis_name) SELECT department_id, diagnosis_name, diagnosis_count FROM diagnosis_counts WHERE rn = 1;",
    solution_columns: ["department_id", "diagnosis_name", "diagnosis_count"],
    tables: ["diagnoses", "encounters"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_077",
    title: "Longest Current Admissions",
    description:
      "Find the top 10 currently admitted patients with the longest ongoing stay.",
    difficulty: "hard",
    expected_query:
      "SELECT id, patient_id, admitted_at, ROUND(EXTRACT(EPOCH FROM (NOW() - admitted_at)) / 86400, 2) AS stay_days FROM admissions WHERE admission_status = 'admitted' ORDER BY stay_days DESC, id ASC LIMIT 10;",
    solution_columns: ["id", "patient_id", "admitted_at", "stay_days"],
    tables: ["admissions"],
    comparison_config: {
      sort_by_columns: [
        { column: "stay_days", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "HOSPITAL_078",
    title: "Doctor Utilization Ratio",
    description:
      "Find each doctor’s utilization ratio based on completed appointments over scheduled slots.",
    difficulty: "hard",
    expected_query:
      "WITH scheduled_slots AS (SELECT doctor_id, COUNT(*) * AVG(max_patients_per_slot) AS total_slots FROM doctor_schedules WHERE is_active = true GROUP BY doctor_id), completed_appts AS (SELECT doctor_id, COUNT(*) AS completed_count FROM appointments WHERE appointment_status = 'completed' GROUP BY doctor_id) SELECT s.doctor_id, ROUND(COALESCE(c.completed_count, 0)::numeric / NULLIF(s.total_slots, 0), 2) AS utilization_ratio FROM scheduled_slots s LEFT JOIN completed_appts c ON s.doctor_id = c.doctor_id;",
    solution_columns: ["doctor_id", "utilization_ratio"],
    tables: ["doctor_schedules", "appointments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_079",
    title: "Repeat Admission Within 30 Days",
    description:
      "Find patients who were readmitted within 30 days of discharge.",
    difficulty: "hard",
    expected_query:
      "WITH ordered_admissions AS (SELECT patient_id, admitted_at, discharge_at, LEAD(admitted_at) OVER (PARTITION BY patient_id ORDER BY admitted_at) AS next_admission_at FROM admissions WHERE discharge_at IS NOT NULL) SELECT patient_id, discharge_at, next_admission_at FROM ordered_admissions WHERE next_admission_at <= discharge_at + INTERVAL '30 days';",
    solution_columns: ["patient_id", "discharge_at", "next_admission_at"],
    tables: ["admissions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_080",
    title: "Top Revenue Patients Per Month",
    description: "Find the highest billed patient for each month.",
    difficulty: "hard",
    expected_query:
      "WITH monthly_patient_revenue AS (SELECT DATE_TRUNC('month', created_at) AS billing_month, patient_id, SUM(total_amount) AS total_revenue, ROW_NUMBER() OVER (PARTITION BY DATE_TRUNC('month', created_at) ORDER BY SUM(total_amount) DESC, patient_id ASC) AS rn FROM invoices GROUP BY DATE_TRUNC('month', created_at), patient_id) SELECT billing_month, patient_id, total_revenue FROM monthly_patient_revenue WHERE rn = 1;",
    solution_columns: ["billing_month", "patient_id", "total_revenue"],
    tables: ["invoices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_081",
    title: "Department Bed Occupancy Leader",
    description:
      "Find the department with the highest number of currently occupied beds.",
    difficulty: "hard",
    expected_query:
      "WITH department_bed_usage AS (SELECT r.department_id, COUNT(*) AS occupied_beds, ROW_NUMBER() OVER (ORDER BY COUNT(*) DESC, r.department_id ASC) AS rn FROM beds b JOIN rooms r ON b.room_id = r.id WHERE b.bed_status = 'occupied' AND r.department_id IS NOT NULL GROUP BY r.department_id) SELECT department_id, occupied_beds FROM department_bed_usage WHERE rn = 1;",
    solution_columns: ["department_id", "occupied_beds"],
    tables: ["beds", "rooms"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_082",
    title: "Patients With Consecutive Critical Lab Results",
    description:
      "Find patients who had at least two consecutive critical lab results over time.",
    difficulty: "hard",
    expected_query:
      "WITH patient_lab_results AS (SELECT lo.patient_id, lr.resulted_at, lr.interpretation, LAG(lr.interpretation) OVER (PARTITION BY lo.patient_id ORDER BY lr.resulted_at, lr.id) AS prev_interpretation FROM lab_results lr JOIN lab_order_items loi ON lr.lab_order_item_id = loi.id JOIN lab_orders lo ON loi.lab_order_id = lo.id) SELECT DISTINCT patient_id FROM patient_lab_results WHERE interpretation = 'critical' AND prev_interpretation = 'critical';",
    solution_columns: ["patient_id"],
    tables: ["lab_results", "lab_order_items", "lab_orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_083",
    title: "Doctor Revenue Rank Within Department",
    description:
      "Rank doctors within each department by total invoice revenue from encounters.",
    difficulty: "hard",
    expected_query:
      "WITH doctor_department_revenue AS (SELECT e.department_id, e.attending_doctor_id AS doctor_id, SUM(i.total_amount) AS total_revenue FROM encounters e JOIN invoices i ON i.encounter_id = e.id WHERE e.department_id IS NOT NULL AND e.attending_doctor_id IS NOT NULL GROUP BY e.department_id, e.attending_doctor_id) SELECT department_id, doctor_id, total_revenue, DENSE_RANK() OVER (PARTITION BY department_id ORDER BY total_revenue DESC, doctor_id ASC) AS revenue_rank FROM doctor_department_revenue;",
    solution_columns: [
      "department_id",
      "doctor_id",
      "total_revenue",
      "revenue_rank",
    ],
    tables: ["encounters", "invoices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_084",
    title: "Longest Wait Appointment Per Doctor",
    description:
      "Find the appointment with the longest wait time for each doctor.",
    difficulty: "hard",
    expected_query:
      "WITH doctor_waits AS (SELECT id, doctor_id, patient_id, scheduled_start_at, consultation_started_at, ROUND(EXTRACT(EPOCH FROM (consultation_started_at - scheduled_start_at)) / 60, 2) AS wait_time_mins, ROW_NUMBER() OVER (PARTITION BY doctor_id ORDER BY EXTRACT(EPOCH FROM (consultation_started_at - scheduled_start_at)) DESC, id ASC) AS rn FROM appointments WHERE consultation_started_at IS NOT NULL) SELECT id, doctor_id, patient_id, scheduled_start_at, consultation_started_at, wait_time_mins FROM doctor_waits WHERE rn = 1;",
    solution_columns: [
      "id",
      "doctor_id",
      "patient_id",
      "scheduled_start_at",
      "consultation_started_at",
      "wait_time_mins",
    ],
    tables: ["appointments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_085",
    title: "Insurance Underpayment Cases",
    description:
      "Find claims where the approved amount is less than the insurance-covered amount on the linked invoice.",
    difficulty: "hard",
    expected_query:
      "SELECT ic.id, ic.claim_number, ic.invoice_id, i.insurance_covered_amount, ic.approved_amount FROM insurance_claims ic JOIN invoices i ON ic.invoice_id = i.id WHERE ic.approved_amount < i.insurance_covered_amount;",
    solution_columns: [
      "id",
      "claim_number",
      "invoice_id",
      "insurance_covered_amount",
      "approved_amount",
    ],
    tables: ["insurance_claims", "invoices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_086",
    title: "Patient Encounter Gap Analysis",
    description:
      "Find the number of days between consecutive encounters for each patient.",
    difficulty: "hard",
    expected_query:
      "WITH ordered_encounters AS (SELECT patient_id, id AS encounter_id, started_at, LAG(started_at) OVER (PARTITION BY patient_id ORDER BY started_at, id) AS previous_encounter_at FROM encounters) SELECT patient_id, encounter_id, previous_encounter_at, started_at, ROUND(EXTRACT(EPOCH FROM (started_at - previous_encounter_at)) / 86400, 2) AS gap_days FROM ordered_encounters WHERE previous_encounter_at IS NOT NULL;",
    solution_columns: [
      "patient_id",
      "encounter_id",
      "previous_encounter_at",
      "started_at",
      "gap_days",
    ],
    tables: ["encounters"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_087",
    title: "Most Prescribed Medication Per Doctor",
    description:
      "Find the most frequently prescribed medication for each doctor.",
    difficulty: "hard",
    expected_query:
      "WITH doctor_medication_counts AS (SELECT p.doctor_id, pi.medication_id, COUNT(*) AS prescription_count, ROW_NUMBER() OVER (PARTITION BY p.doctor_id ORDER BY COUNT(*) DESC, pi.medication_id ASC) AS rn FROM prescriptions p JOIN prescription_items pi ON p.id = pi.prescription_id WHERE p.doctor_id IS NOT NULL GROUP BY p.doctor_id, pi.medication_id) SELECT doctor_id, medication_id, prescription_count FROM doctor_medication_counts WHERE rn = 1;",
    solution_columns: ["doctor_id", "medication_id", "prescription_count"],
    tables: ["prescriptions", "prescription_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_088",
    title: "Patients Exceeding Policy Coverage Window",
    description:
      "Find invoices billed outside the active coverage dates of the linked insurance policy.",
    difficulty: "hard",
    expected_query:
      "SELECT i.id, i.invoice_number, i.patient_id, i.insurance_policy_id, i.created_at, ip.coverage_start_date, ip.coverage_end_date FROM invoices i JOIN insurance_policies ip ON i.insurance_policy_id = ip.id WHERE DATE(i.created_at) < ip.coverage_start_date OR (ip.coverage_end_date IS NOT NULL AND DATE(i.created_at) > ip.coverage_end_date);",
    solution_columns: [
      "id",
      "invoice_number",
      "patient_id",
      "insurance_policy_id",
      "created_at",
      "coverage_start_date",
      "coverage_end_date",
    ],
    tables: ["invoices", "insurance_policies"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_089",
    title: "Department Readmission Rate",
    description:
      "Find the 30-day readmission rate percentage for each department.",
    difficulty: "hard",
    expected_query:
      "WITH readmission_flags AS (SELECT department_id, patient_id, discharge_at, LEAD(admitted_at) OVER (PARTITION BY patient_id ORDER BY admitted_at) AS next_admission_at FROM admissions WHERE discharge_at IS NOT NULL AND department_id IS NOT NULL) SELECT department_id, ROUND(100.0 * SUM(CASE WHEN next_admission_at <= discharge_at + INTERVAL '30 days' THEN 1 ELSE 0 END) / COUNT(*), 2) AS readmission_rate_pct FROM readmission_flags GROUP BY department_id;",
    solution_columns: ["department_id", "readmission_rate_pct"],
    tables: ["admissions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_090",
    title: "Department Monthly Revenue Growth",
    description:
      "Find month-over-month invoice revenue growth for each department.",
    difficulty: "hard",
    expected_query:
      "WITH monthly_revenue AS (SELECT e.department_id, DATE_TRUNC('month', i.created_at) AS revenue_month, SUM(i.total_amount) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id WHERE e.department_id IS NOT NULL GROUP BY e.department_id, DATE_TRUNC('month', i.created_at)), revenue_with_prev AS (SELECT department_id, revenue_month, total_revenue, LAG(total_revenue) OVER (PARTITION BY department_id ORDER BY revenue_month) AS prev_month_revenue FROM monthly_revenue) SELECT department_id, revenue_month, total_revenue, prev_month_revenue, ROUND(total_revenue - prev_month_revenue, 2) AS revenue_growth FROM revenue_with_prev WHERE prev_month_revenue IS NOT NULL;",
    solution_columns: [
      "department_id",
      "revenue_month",
      "total_revenue",
      "prev_month_revenue",
      "revenue_growth",
    ],
    tables: ["invoices", "encounters"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_091",
    title: "Doctor Schedule Overbooking Risk",
    description:
      "Find doctor schedule weekdays where completed appointments exceed scheduled capacity.",
    difficulty: "hard",
    expected_query:
      "WITH schedule_capacity AS (SELECT doctor_id, day_of_week, SUM(max_patients_per_slot) AS total_capacity FROM doctor_schedules WHERE is_active = true GROUP BY doctor_id, day_of_week), completed_appointments AS (SELECT doctor_id, EXTRACT(DOW FROM scheduled_start_at) AS day_of_week, COUNT(*) AS completed_count FROM appointments WHERE appointment_status = 'completed' GROUP BY doctor_id, EXTRACT(DOW FROM scheduled_start_at)) SELECT sc.doctor_id, sc.day_of_week, sc.total_capacity, COALESCE(ca.completed_count, 0) AS completed_count FROM schedule_capacity sc LEFT JOIN completed_appointments ca ON sc.doctor_id = ca.doctor_id AND sc.day_of_week = ca.day_of_week WHERE COALESCE(ca.completed_count, 0) > sc.total_capacity;",
    solution_columns: [
      "doctor_id",
      "day_of_week",
      "total_capacity",
      "completed_count",
    ],
    tables: ["doctor_schedules", "appointments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_092",
    title: "Patients With Both High And Low Lab Results",
    description:
      "Find patients who have had at least one high lab result and at least one low lab result.",
    difficulty: "hard",
    expected_query:
      "WITH patient_interpretations AS (SELECT lo.patient_id, COUNT(*) FILTER (WHERE lr.interpretation = 'high') AS high_count, COUNT(*) FILTER (WHERE lr.interpretation = 'low') AS low_count FROM lab_results lr JOIN lab_order_items loi ON lr.lab_order_item_id = loi.id JOIN lab_orders lo ON loi.lab_order_id = lo.id GROUP BY lo.patient_id) SELECT patient_id, high_count, low_count FROM patient_interpretations WHERE high_count > 0 AND low_count > 0;",
    solution_columns: ["patient_id", "high_count", "low_count"],
    tables: ["lab_results", "lab_order_items", "lab_orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_093",
    title: "Admissions With Multiple Bed Allocations",
    description:
      "Find admissions that have more than one bed allocation record.",
    difficulty: "hard",
    expected_query:
      "SELECT admission_id, COUNT(*) AS allocation_count FROM bed_allocations GROUP BY admission_id HAVING COUNT(*) > 1;",
    solution_columns: ["admission_id", "allocation_count"],
    tables: ["bed_allocations"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_094",
    title: "Doctor Prescription Diversity Rank",
    description:
      "Rank doctors by the number of distinct medications they have prescribed.",
    difficulty: "hard",
    expected_query:
      "WITH doctor_medication_diversity AS (SELECT p.doctor_id, COUNT(DISTINCT pi.medication_id) AS distinct_medications FROM prescriptions p JOIN prescription_items pi ON p.id = pi.prescription_id WHERE p.doctor_id IS NOT NULL GROUP BY p.doctor_id) SELECT doctor_id, distinct_medications, DENSE_RANK() OVER (ORDER BY distinct_medications DESC, doctor_id ASC) AS diversity_rank FROM doctor_medication_diversity;",
    solution_columns: ["doctor_id", "distinct_medications", "diversity_rank"],
    tables: ["prescriptions", "prescription_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_095",
    title: "Patients With Rising BMI Trend",
    description:
      "Find patients whose latest BMI is greater than their earliest recorded BMI.",
    difficulty: "hard",
    expected_query:
      "WITH bmi_history AS (SELECT patient_id, recorded_at, bmi, FIRST_VALUE(bmi) OVER (PARTITION BY patient_id ORDER BY recorded_at, id) AS first_bmi, LAST_VALUE(bmi) OVER (PARTITION BY patient_id ORDER BY recorded_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS last_bmi FROM vital_signs WHERE bmi IS NOT NULL) SELECT DISTINCT patient_id, first_bmi, last_bmi FROM bmi_history WHERE last_bmi > first_bmi;",
    solution_columns: ["patient_id", "first_bmi", "last_bmi"],
    tables: ["vital_signs"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_096",
    title: "Top Procedure Revenue Contributors",
    description:
      "Find the top 10 procedures generating the highest billed revenue from invoice items.",
    difficulty: "hard",
    expected_query:
      "SELECT po.procedure_id, ROUND(SUM(ii.line_total), 2) AS total_revenue FROM invoice_items ii JOIN procedure_orders po ON ii.item_reference_id = po.id WHERE ii.item_type = 'procedure' GROUP BY po.procedure_id ORDER BY total_revenue DESC, po.procedure_id ASC LIMIT 10;",
    solution_columns: ["procedure_id", "total_revenue"],
    tables: ["invoice_items", "procedure_orders"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_revenue", direction: "desc" },
        { column: "procedure_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "HOSPITAL_097",
    title: "Patients With Concurrent Active Policies",
    description:
      "Find patients who had overlapping insurance policy coverage periods.",
    difficulty: "hard",
    expected_query:
      "WITH policy_pairs AS (SELECT ip1.patient_id, ip1.id AS policy_id_1, ip2.id AS policy_id_2, ip1.coverage_start_date AS start_1, ip1.coverage_end_date AS end_1, ip2.coverage_start_date AS start_2, ip2.coverage_end_date AS end_2 FROM insurance_policies ip1 JOIN insurance_policies ip2 ON ip1.patient_id = ip2.patient_id AND ip1.id < ip2.id) SELECT DISTINCT patient_id FROM policy_pairs WHERE COALESCE(end_1, DATE '9999-12-31') >= start_2 AND COALESCE(end_2, DATE '9999-12-31') >= start_1;",
    solution_columns: ["patient_id"],
    tables: ["insurance_policies"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_098",
    title: "Doctor Follow Up Conversion Rate",
    description:
      "Find the percentage of completed consultation appointments that led to a follow-up appointment for the same patient-doctor pair later.",
    difficulty: "hard",
    expected_query:
      "WITH completed_consults AS (SELECT id, patient_id, doctor_id, scheduled_start_at FROM appointments WHERE appointment_status = 'completed' AND appointment_type = 'consultation'), followups AS (SELECT cc.id AS appointment_id, CASE WHEN EXISTS (SELECT 1 FROM appointments a2 WHERE a2.patient_id = cc.patient_id AND a2.doctor_id = cc.doctor_id AND a2.appointment_type = 'follow_up' AND a2.scheduled_start_at > cc.scheduled_start_at) THEN 1 ELSE 0 END AS has_followup FROM completed_consults cc) SELECT ROUND(100.0 * SUM(has_followup) / COUNT(*), 2) AS follow_up_conversion_rate_pct FROM followups;",
    solution_columns: ["follow_up_conversion_rate_pct"],
    tables: ["appointments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_099",
    title: "Department Diagnostic Mix Leader",
    description:
      "For each department, find the lab test category with the highest number of ordered tests.",
    difficulty: "hard",
    expected_query:
      "WITH category_counts AS (SELECT e.department_id, ltc.test_category, COUNT(*) AS total_tests, ROW_NUMBER() OVER (PARTITION BY e.department_id ORDER BY COUNT(*) DESC, ltc.test_category ASC) AS rn FROM lab_orders lo JOIN encounters e ON lo.encounter_id = e.id JOIN lab_order_items loi ON lo.id = loi.lab_order_id JOIN lab_test_catalog ltc ON loi.test_id = ltc.id WHERE e.department_id IS NOT NULL GROUP BY e.department_id, ltc.test_category) SELECT department_id, test_category, total_tests FROM category_counts WHERE rn = 1;",
    solution_columns: ["department_id", "test_category", "total_tests"],
    tables: ["lab_orders", "encounters", "lab_order_items", "lab_test_catalog"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "HOSPITAL_100",
    title: "Top Margin Gap Invoices",
    description:
      "Find the top 10 invoices with the largest gap between total billed amount and successful payments received.",
    difficulty: "hard",
    expected_query:
      "SELECT i.id, i.invoice_number, i.total_amount, ROUND(i.total_amount - COALESCE(SUM(CASE WHEN p.payment_status = 'successful' THEN p.amount_paid ELSE 0 END), 0), 2) AS amount_gap FROM invoices i LEFT JOIN payments p ON i.id = p.invoice_id GROUP BY i.id, i.invoice_number, i.total_amount ORDER BY amount_gap DESC, i.id ASC LIMIT 10;",
    solution_columns: ["id", "invoice_number", "total_amount", "amount_gap"],
    tables: ["invoices", "payments"],
    comparison_config: {
      sort_by_columns: [
        { column: "amount_gap", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
];

export const hints = [
  {
    code: "HOSPITAL_001",
    hints: [
      {
        hint_order: 1,
        content: "Count all patients from one table.",
      },
      {
        hint_order: 2,
        content: "Use an aggregate function.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) from patients.",
      },
    ],
  },
  {
    code: "HOSPITAL_002",
    hints: [
      {
        hint_order: 1,
        content: "Filter active doctors first.",
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
    code: "HOSPITAL_003",
    hints: [
      {
        hint_order: 1,
        content: "Return only active departments.",
      },
      {
        hint_order: 2,
        content: "Select the requested department columns.",
      },
      {
        hint_order: 3,
        content: "ORDER BY name ASC, id ASC.",
      },
    ],
  },
  {
    code: "HOSPITAL_004",
    hints: [
      {
        hint_order: 1,
        content: "Look for patients registered today only.",
      },
      {
        hint_order: 2,
        content: "Extract the date part from registered_at.",
      },
      {
        hint_order: 3,
        content: "Compare DATE(registered_at) with CURRENT_DATE.",
      },
    ],
  },
  {
    code: "HOSPITAL_005",
    hints: [
      {
        hint_order: 1,
        content: "Keep only beds that are available.",
      },
      {
        hint_order: 2,
        content: "Also check that the bed is active.",
      },
      {
        hint_order: 3,
        content: "Filter by bed_status and sort by room_id, bed_number.",
      },
    ],
  },
  {
    code: "HOSPITAL_006",
    hints: [
      {
        hint_order: 1,
        content: "Filter appointments by scheduled status.",
      },
      {
        hint_order: 2,
        content: "Use appointment_status = scheduled.",
      },
      {
        hint_order: 3,
        content: "Sort by scheduled_start_at ASC.",
      },
    ],
  },
  {
    code: "HOSPITAL_007",
    hints: [
      {
        hint_order: 1,
        content: "Each doctor belongs to a department.",
      },
      {
        hint_order: 2,
        content: "Join doctors with departments.",
      },
      {
        hint_order: 3,
        content: "Use department_id to get department name.",
      },
    ],
  },
  {
    code: "HOSPITAL_008",
    hints: [
      {
        hint_order: 1,
        content: "You need patients who have at least one policy.",
      },
      {
        hint_order: 2,
        content: "Join patients with insurance_policies.",
      },
      {
        hint_order: 3,
        content: "Use DISTINCT to avoid duplicate patients.",
      },
    ],
  },
  {
    code: "HOSPITAL_009",
    hints: [
      {
        hint_order: 1,
        content: "Filter lab orders by completed status.",
      },
      {
        hint_order: 2,
        content: "Use the order_status column.",
      },
      {
        hint_order: 3,
        content: "Sort by ordered_at DESC, id ASC.",
      },
    ],
  },
  {
    code: "HOSPITAL_010",
    hints: [
      {
        hint_order: 1,
        content: "Keep only fully paid invoices.",
      },
      {
        hint_order: 2,
        content: "Use invoice_status = paid.",
      },
      {
        hint_order: 3,
        content: "Return invoice details and sort by issued_at DESC.",
      },
    ],
  },
  {
    code: "HOSPITAL_011",
    hints: [
      {
        hint_order: 1,
        content: "Count appointments for each doctor.",
      },
      {
        hint_order: 2,
        content: "Group by doctor_id.",
      },
      {
        hint_order: 3,
        content: "Use COUNT(*) and ORDER BY total_appointments DESC.",
      },
    ],
  },
  {
    code: "HOSPITAL_012",
    hints: [
      {
        hint_order: 1,
        content: "A patient with allergies appears in patient_allergies.",
      },
      {
        hint_order: 2,
        content: "Join patients with patient_allergies.",
      },
      {
        hint_order: 3,
        content: "Use DISTINCT patient rows.",
      },
    ],
  },
  {
    code: "HOSPITAL_013",
    hints: [
      {
        hint_order: 1,
        content: "Only approved leave records should be shown.",
      },
      {
        hint_order: 2,
        content: "Join leave records with doctors.",
      },
      {
        hint_order: 3,
        content: "Filter approval_status = approved.",
      },
    ],
  },
  {
    code: "HOSPITAL_014",
    hints: [
      {
        hint_order: 1,
        content: "List only active lab tests.",
      },
      {
        hint_order: 2,
        content: "Use the lab_test_catalog table.",
      },
      {
        hint_order: 3,
        content: "Sort by test_name ASC, id ASC.",
      },
    ],
  },
  {
    code: "HOSPITAL_015",
    hints: [
      {
        hint_order: 1,
        content: "Keep only insurance policies marked primary.",
      },
      {
        hint_order: 2,
        content: "Use the is_primary column.",
      },
      {
        hint_order: 3,
        content: "Sort by patient_id ASC, id ASC.",
      },
    ],
  },
  {
    code: "HOSPITAL_016",
    hints: [
      {
        hint_order: 1,
        content: "Find admissions still in admitted state.",
      },
      {
        hint_order: 2,
        content: "Use admission_status = admitted.",
      },
      {
        hint_order: 3,
        content: "Sort by admitted_at DESC, id ASC.",
      },
    ],
  },
  {
    code: "HOSPITAL_017",
    hints: [
      {
        hint_order: 1,
        content: "Doctors have a primary_specialization_id.",
      },
      {
        hint_order: 2,
        content: "Join doctors with specializations.",
      },
      {
        hint_order: 3,
        content: "Return specialization name.",
      },
    ],
  },
  {
    code: "HOSPITAL_018",
    hints: [
      {
        hint_order: 1,
        content: "Only successful payments should be listed.",
      },
      {
        hint_order: 2,
        content: "Use payment_status = successful.",
      },
      {
        hint_order: 3,
        content: "Sort by paid_at DESC, id ASC.",
      },
    ],
  },
  {
    code: "HOSPITAL_019",
    hints: [
      {
        hint_order: 1,
        content: "Keep only claims under review.",
      },
      {
        hint_order: 2,
        content: "Use claim_status = under_review.",
      },
      {
        hint_order: 3,
        content: "Sort by submitted_at ASC, id ASC.",
      },
    ],
  },
  {
    code: "HOSPITAL_020",
    hints: [
      {
        hint_order: 1,
        content: "Show all feedback rows, no filter needed.",
      },
      {
        hint_order: 2,
        content: "Select the requested feedback columns.",
      },
      {
        hint_order: 3,
        content: "Sort by created_at DESC, id ASC.",
      },
    ],
  },
  {
    code: "HOSPITAL_021",
    hints: [
      {
        hint_order: 1,
        content: "Find the average consultation fee per department.",
      },
      {
        hint_order: 2,
        content: "Join doctors with departments.",
      },
      {
        hint_order: 3,
        content: "GROUP BY department and use AVG(consultation_fee).",
      },
    ],
  },
  {
    code: "HOSPITAL_022",
    hints: [
      {
        hint_order: 1,
        content: "Count appointments for each status.",
      },
      {
        hint_order: 2,
        content: "Group by appointment_status.",
      },
      {
        hint_order: 3,
        content: "Use COUNT(*) and sort by total count DESC.",
      },
    ],
  },
  {
    code: "HOSPITAL_023",
    hints: [
      {
        hint_order: 1,
        content: "Count only occupied beds.",
      },
      {
        hint_order: 2,
        content: "Filter bed_status = occupied.",
      },
      {
        hint_order: 3,
        content: "Use COUNT(*) on beds.",
      },
    ],
  },
  {
    code: "HOSPITAL_024",
    hints: [
      {
        hint_order: 1,
        content: "Count admissions per department.",
      },
      {
        hint_order: 2,
        content: "Group by department_id.",
      },
      {
        hint_order: 3,
        content: "Use COUNT(*) and sort by total_admissions DESC.",
      },
    ],
  },
  {
    code: "HOSPITAL_025",
    hints: [
      {
        hint_order: 1,
        content: "Add invoice totals for each patient.",
      },
      {
        hint_order: 2,
        content: "Group by patient_id.",
      },
      {
        hint_order: 3,
        content: "Use SUM(total_amount).",
      },
    ],
  },
  {
    code: "HOSPITAL_026",
    hints: [
      {
        hint_order: 1,
        content: "Count lab orders for each patient.",
      },
      {
        hint_order: 2,
        content: "Group by patient_id.",
      },
      {
        hint_order: 3,
        content: "Use COUNT(*) on lab_orders.",
      },
    ],
  },
  {
    code: "HOSPITAL_027",
    hints: [
      {
        hint_order: 1,
        content: "Count prescriptions written by each doctor.",
      },
      {
        hint_order: 2,
        content: "Group by doctor_id.",
      },
      {
        hint_order: 3,
        content: "Use COUNT(*) and sort descending.",
      },
    ],
  },
  {
    code: "HOSPITAL_028",
    hints: [
      {
        hint_order: 1,
        content: "Keep only critical lab results.",
      },
      {
        hint_order: 2,
        content: "Use interpretation = critical.",
      },
      {
        hint_order: 3,
        content: "Sort by resulted_at DESC, id ASC.",
      },
    ],
  },
  {
    code: "HOSPITAL_029",
    hints: [
      {
        hint_order: 1,
        content: "Sort doctors by experience from highest to lowest.",
      },
      {
        hint_order: 2,
        content: "Use years_of_experience in ORDER BY.",
      },
      {
        hint_order: 3,
        content: "Place NULL values last.",
      },
    ],
  },
  {
    code: "HOSPITAL_030",
    hints: [
      {
        hint_order: 1,
        content: "A chronic condition is stored in patient_conditions.",
      },
      {
        hint_order: 2,
        content: "Join patients with patient_conditions.",
      },
      {
        hint_order: 3,
        content: "Filter condition_status = chronic and use DISTINCT.",
      },
    ],
  },
  {
    code: "HOSPITAL_031",
    hints: [
      {
        hint_order: 1,
        content: "Work only with discharged admissions.",
      },
      {
        hint_order: 2,
        content: "Find the difference between discharge_at and admitted_at.",
      },
      {
        hint_order: 3,
        content: "Convert the stay interval into days, then use AVG().",
      },
    ],
  },
  {
    code: "HOSPITAL_032",
    hints: [
      {
        hint_order: 1,
        content: "Count registrations day by day.",
      },
      {
        hint_order: 2,
        content: "Extract the date part from registered_at.",
      },
      {
        hint_order: 3,
        content: "GROUP BY DATE(registered_at).",
      },
    ],
  },
  {
    code: "HOSPITAL_033",
    hints: [
      {
        hint_order: 1,
        content: "Only successful payments count as revenue.",
      },
      {
        hint_order: 2,
        content: "Group by payment_method.",
      },
      {
        hint_order: 3,
        content: "Use SUM(amount_paid) with WHERE payment_status = successful.",
      },
    ],
  },
  {
    code: "HOSPITAL_034",
    hints: [
      {
        hint_order: 1,
        content: "Start from all specializations.",
      },
      {
        hint_order: 2,
        content: "Join with doctor_specializations.",
      },
      {
        hint_order: 3,
        content:
          "Use LEFT JOIN so specializations with zero doctors still appear.",
      },
    ],
  },
  {
    code: "HOSPITAL_035",
    hints: [
      {
        hint_order: 1,
        content: "Count only completed procedure orders.",
      },
      {
        hint_order: 2,
        content: "Use the procedure_status column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with WHERE procedure_status = completed.",
      },
    ],
  },
  {
    code: "HOSPITAL_036",
    hints: [
      {
        hint_order: 1,
        content: "Count appointments for each calendar day.",
      },
      {
        hint_order: 2,
        content: "Use scheduled_start_at to derive the date.",
      },
      {
        hint_order: 3,
        content: "GROUP BY DATE(scheduled_start_at).",
      },
    ],
  },
  {
    code: "HOSPITAL_037",
    hints: [
      {
        hint_order: 1,
        content: "Consider only completed appointments.",
      },
      {
        hint_order: 2,
        content: "Count them per doctor.",
      },
      {
        hint_order: 3,
        content: "ORDER BY count DESC and LIMIT 5.",
      },
    ],
  },
  {
    code: "HOSPITAL_038",
    hints: [
      {
        hint_order: 1,
        content: "Revenue is stored in invoices.",
      },
      {
        hint_order: 2,
        content: "Department comes from encounters.",
      },
      {
        hint_order: 3,
        content:
          "Join invoices to encounters, then SUM(total_amount) by department.",
      },
    ],
  },
  {
    code: "HOSPITAL_039",
    hints: [
      {
        hint_order: 1,
        content: "Find patients admitted more than once.",
      },
      {
        hint_order: 2,
        content: "Group admissions by patient_id.",
      },
      {
        hint_order: 3,
        content: "Use HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "HOSPITAL_040",
    hints: [
      {
        hint_order: 1,
        content: "Wait time is actual start minus scheduled start.",
      },
      {
        hint_order: 2,
        content: "Ignore rows where consultation_started_at is NULL.",
      },
      {
        hint_order: 3,
        content: "Convert the interval to minutes, then AVG() by doctor.",
      },
    ],
  },
  {
    code: "HOSPITAL_041",
    hints: [
      {
        hint_order: 1,
        content: "Compute no-show percentage per doctor.",
      },
      {
        hint_order: 2,
        content: "Count no_show rows and divide by total appointments.",
      },
      {
        hint_order: 3,
        content: "Use CASE WHEN appointment_status = no_show THEN 1 END.",
      },
    ],
  },
  {
    code: "HOSPITAL_042",
    hints: [
      {
        hint_order: 1,
        content: "Count occupied beds room by room.",
      },
      {
        hint_order: 2,
        content: "Join rooms with beds.",
      },
      {
        hint_order: 3,
        content:
          "Use LEFT JOIN or conditional counting so rooms with zero occupied beds can appear.",
      },
    ],
  },
  {
    code: "HOSPITAL_043",
    hints: [
      {
        hint_order: 1,
        content: "Find patients with more than one allergy row.",
      },
      {
        hint_order: 2,
        content: "Group by patient_id in patient_allergies.",
      },
      {
        hint_order: 3,
        content: "Use HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "HOSPITAL_044",
    hints: [
      {
        hint_order: 1,
        content:
          "A claim belongs to a policy, and a policy belongs to a provider.",
      },
      {
        hint_order: 2,
        content:
          "Treat approved, partially_approved, and settled as approved-like statuses.",
      },
      {
        hint_order: 3,
        content:
          "Compute approved-like claims divided by total claims per provider.",
      },
    ],
  },
  {
    code: "HOSPITAL_045",
    hints: [
      {
        hint_order: 1,
        content: "Turnaround is completed_at minus sample_collected_at.",
      },
      {
        hint_order: 2,
        content: "Join lab_order_items with lab_test_catalog.",
      },
      {
        hint_order: 3,
        content: "Convert the interval into hours, then AVG() by test.",
      },
    ],
  },
  {
    code: "HOSPITAL_046",
    hints: [
      {
        hint_order: 1,
        content:
          "A doctor with multiple specializations has multiple rows in doctor_specializations.",
      },
      {
        hint_order: 2,
        content: "Group by doctor_id.",
      },
      {
        hint_order: 3,
        content: "Use HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "HOSPITAL_047",
    hints: [
      {
        hint_order: 1,
        content:
          "Outstanding amount is invoice total minus successful payments.",
      },
      {
        hint_order: 2,
        content: "Join invoices with payments.",
      },
      {
        hint_order: 3,
        content: "Use LEFT JOIN and sum only successful payment amounts.",
      },
    ],
  },
  {
    code: "HOSPITAL_048",
    hints: [
      {
        hint_order: 1,
        content: "Count patients month by month.",
      },
      {
        hint_order: 2,
        content: "Truncate registered_at to the month.",
      },
      {
        hint_order: 3,
        content: "Use DATE_TRUNC('month', registered_at) and COUNT(*).",
      },
    ],
  },
  {
    code: "HOSPITAL_049",
    hints: [
      {
        hint_order: 1,
        content: "Admission duration is from admitted_at until discharge_at.",
      },
      {
        hint_order: 2,
        content: "If discharge_at is NULL, use the current time.",
      },
      {
        hint_order: 3,
        content: "Use COALESCE(discharge_at, NOW()) and AVG() by department.",
      },
    ],
  },
  {
    code: "HOSPITAL_050",
    hints: [
      {
        hint_order: 1,
        content: "Add invoice amounts per patient.",
      },
      {
        hint_order: 2,
        content: "Group by patient_id.",
      },
      {
        hint_order: 3,
        content: "Sort by total billed amount DESC and LIMIT 10.",
      },
    ],
  },
  {
    code: "HOSPITAL_051",
    hints: [
      {
        hint_order: 1,
        content:
          "A valid patient must appear in both appointments and admissions.",
      },
      {
        hint_order: 2,
        content: "Check existence in both tables.",
      },
      {
        hint_order: 3,
        content:
          "Use EXISTS twice or join distinct patient ids from both tables.",
      },
    ],
  },
  {
    code: "HOSPITAL_052",
    hints: [
      {
        hint_order: 1,
        content: "Feedback ratings are in patient_feedback.",
      },
      {
        hint_order: 2,
        content: "Ignore rows where doctor_id is NULL.",
      },
      {
        hint_order: 3,
        content: "GROUP BY doctor_id and use AVG(rating).",
      },
    ],
  },
  {
    code: "HOSPITAL_053",
    hints: [
      {
        hint_order: 1,
        content: "Medication usage is recorded in prescription_items.",
      },
      {
        hint_order: 2,
        content: "Join prescription_items with medications.",
      },
      {
        hint_order: 3,
        content: "Count rows per medication and keep the top 10.",
      },
    ],
  },
  {
    code: "HOSPITAL_054",
    hints: [
      {
        hint_order: 1,
        content: "You need completed appointments that also have feedback.",
      },
      {
        hint_order: 2,
        content:
          "Join appointments with patient_feedback using appointment_id.",
      },
      {
        hint_order: 3,
        content: "Filter appointment_status = completed.",
      },
    ],
  },
  {
    code: "HOSPITAL_055",
    hints: [
      {
        hint_order: 1,
        content: "Schedule hours come from end_time minus start_time.",
      },
      {
        hint_order: 2,
        content: "Only active schedules should be counted.",
      },
      {
        hint_order: 3,
        content:
          "Convert the interval to hours and SUM() by doctor_id, day_of_week.",
      },
    ],
  },
  {
    code: "HOSPITAL_056",
    hints: [
      {
        hint_order: 1,
        content: "Look for severe or critical allergies only.",
      },
      {
        hint_order: 2,
        content: "Join patients with patient_allergies.",
      },
      {
        hint_order: 3,
        content:
          "Filter severity IN (severe, critical) and use DISTINCT patients.",
      },
    ],
  },
  {
    code: "HOSPITAL_057",
    hints: [
      {
        hint_order: 1,
        content: "Revenue needs to be grouped by invoice_type.",
      },
      {
        hint_order: 2,
        content: "Use invoice totals, not payments.",
      },
      {
        hint_order: 3,
        content: "SUM(total_amount) per invoice_type.",
      },
    ],
  },
  {
    code: "HOSPITAL_058",
    hints: [
      {
        hint_order: 1,
        content: "Focus on currently admitted admissions first.",
      },
      {
        hint_order: 2,
        content: "Check whether an active bed allocation exists.",
      },
      {
        hint_order: 3,
        content: "Use LEFT JOIN to active allocations and keep NULL matches.",
      },
    ],
  },
  {
    code: "HOSPITAL_059",
    hints: [
      {
        hint_order: 1,
        content:
          "Match appointments to doctor schedules by doctor and weekday.",
      },
      {
        hint_order: 2,
        content: "Also check the schedule effective date range.",
      },
      {
        hint_order: 3,
        content:
          "Return appointments where no matching active schedule row exists.",
      },
    ],
  },
  {
    code: "HOSPITAL_060",
    hints: [
      {
        hint_order: 1,
        content: "Collection delay is paid_at minus issued_at.",
      },
      {
        hint_order: 2,
        content: "Use only successful payments with non-NULL timestamps.",
      },
      {
        hint_order: 3,
        content: "Convert the interval to days, then AVG().",
      },
    ],
  },
  {
    code: "HOSPITAL_061",
    hints: [
      {
        hint_order: 1,
        content: "Compare discharge date with insurance coverage end date.",
      },
      {
        hint_order: 2,
        content: "Join admissions with insurance_policies using patient_id.",
      },
      {
        hint_order: 3,
        content: "Keep rows where discharge_at is after coverage_end_date.",
      },
    ],
  },
  {
    code: "HOSPITAL_062",
    hints: [
      {
        hint_order: 1,
        content: "Find patients who visited multiple departments.",
      },
      {
        hint_order: 2,
        content: "Use encounters and count DISTINCT department_id.",
      },
      {
        hint_order: 3,
        content: "HAVING COUNT(DISTINCT department_id) > 1.",
      },
    ],
  },
  {
    code: "HOSPITAL_063",
    hints: [
      {
        hint_order: 1,
        content: "Count prescriptions month by month.",
      },
      {
        hint_order: 2,
        content: "Use DATE_TRUNC on prescribed_at.",
      },
      {
        hint_order: 3,
        content: "GROUP BY month and doctor_id.",
      },
    ],
  },
  {
    code: "HOSPITAL_064",
    hints: [
      {
        hint_order: 1,
        content: "Compare approved claim amount with invoice total.",
      },
      {
        hint_order: 2,
        content: "Join insurance_claims with invoices.",
      },
      {
        hint_order: 3,
        content: "Filter where approved_amount < total_amount.",
      },
    ],
  },
  {
    code: "HOSPITAL_065",
    hints: [
      {
        hint_order: 1,
        content: "Look for overlapping doctor leave dates.",
      },
      {
        hint_order: 2,
        content: "Self join doctor_leave_records on doctor_id.",
      },
      {
        hint_order: 3,
        content: "Check if date ranges overlap.",
      },
    ],
  },
  {
    code: "HOSPITAL_066",
    hints: [
      {
        hint_order: 1,
        content: "Patients with multiple chronic conditions are needed.",
      },
      {
        hint_order: 2,
        content: "Filter condition_status = chronic.",
      },
      {
        hint_order: 3,
        content: "GROUP BY patient_id HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "HOSPITAL_067",
    hints: [
      {
        hint_order: 1,
        content: "Compute invoice paid percentage.",
      },
      {
        hint_order: 2,
        content: "Use successful payments only.",
      },
      {
        hint_order: 3,
        content: "SUM(successful payments) / total_amount * 100.",
      },
    ],
  },
  {
    code: "HOSPITAL_068",
    hints: [
      {
        hint_order: 1,
        content: "Find doctors with zero completed appointments.",
      },
      {
        hint_order: 2,
        content: "Start from doctors table.",
      },
      {
        hint_order: 3,
        content: "Use LEFT JOIN appointments and filter NULL matches.",
      },
    ],
  },
  {
    code: "HOSPITAL_069",
    hints: [
      {
        hint_order: 1,
        content: "Readmission means multiple admissions per patient.",
      },
      {
        hint_order: 2,
        content: "Sort admissions by admitted_at.",
      },
      {
        hint_order: 3,
        content: "Use LAG() to compare previous discharge date.",
      },
    ],
  },
  {
    code: "HOSPITAL_070",
    hints: [
      {
        hint_order: 1,
        content: "Compare sample collected time with result completed time.",
      },
      {
        hint_order: 2,
        content: "Join lab_order_items with lab_results.",
      },
      {
        hint_order: 3,
        content: "Convert interval to minutes or hours, then AVG().",
      },
    ],
  },
  {
    code: "HOSPITAL_071",
    hints: [
      {
        hint_order: 1,
        content: "Find patients with multiple failed payments.",
      },
      {
        hint_order: 2,
        content: "Filter payment_status = failed.",
      },
      {
        hint_order: 3,
        content: "GROUP BY patient_id HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "HOSPITAL_072",
    hints: [
      {
        hint_order: 1,
        content: "Use encounters to count patient visits per doctor.",
      },
      {
        hint_order: 2,
        content: "Count DISTINCT patient_id.",
      },
      {
        hint_order: 3,
        content: "GROUP BY attending_doctor_id.",
      },
    ],
  },
  {
    code: "HOSPITAL_073",
    hints: [
      {
        hint_order: 1,
        content: "Find the most frequently used room.",
      },
      {
        hint_order: 2,
        content: "Count bed allocations per room.",
      },
      {
        hint_order: 3,
        content: "ORDER BY count DESC LIMIT 1.",
      },
    ],
  },
  {
    code: "HOSPITAL_074",
    hints: [
      {
        hint_order: 1,
        content: "Insurance utilization is approved vs covered amount.",
      },
      {
        hint_order: 2,
        content: "Join claims with invoices.",
      },
      {
        hint_order: 3,
        content: "Use SUM(approved_amount) / SUM(insurance_covered_amount).",
      },
    ],
  },
  {
    code: "HOSPITAL_075",
    hints: [
      {
        hint_order: 1,
        content: "Count procedures per doctor.",
      },
      {
        hint_order: 2,
        content: "Use completed procedures only.",
      },
      {
        hint_order: 3,
        content: "GROUP BY ordered_by_doctor_id and rank top 10.",
      },
    ],
  },
  {
    code: "HOSPITAL_076",
    hints: [
      {
        hint_order: 1,
        content: "Look for patients with repeated no-shows.",
      },
      {
        hint_order: 2,
        content: "Filter appointment_status = no_show.",
      },
      {
        hint_order: 3,
        content: "GROUP BY patient_id HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "HOSPITAL_077",
    hints: [
      {
        hint_order: 1,
        content: "Count medications per prescription.",
      },
      {
        hint_order: 2,
        content: "Use prescription_items table.",
      },
      {
        hint_order: 3,
        content: "GROUP BY prescription_id and keep max count.",
      },
    ],
  },
  {
    code: "HOSPITAL_078",
    hints: [
      {
        hint_order: 1,
        content: "Doctor utilization = completed appointments vs capacity.",
      },
      {
        hint_order: 2,
        content: "Use doctor_schedules for capacity.",
      },
      {
        hint_order: 3,
        content: "Compare COUNT(completed) with SUM(max_patients_per_slot).",
      },
    ],
  },
  {
    code: "HOSPITAL_079",
    hints: [
      {
        hint_order: 1,
        content: "Use feedback table for doctor ratings.",
      },
      {
        hint_order: 2,
        content: "Filter only ratings <= low threshold.",
      },
      {
        hint_order: 3,
        content: "GROUP BY doctor_id and count low ratings.",
      },
    ],
  },
  {
    code: "HOSPITAL_080",
    hints: [
      {
        hint_order: 1,
        content: "Count admissions per bed.",
      },
      {
        hint_order: 2,
        content: "Use bed_allocations table.",
      },
      {
        hint_order: 3,
        content: "GROUP BY bed_id and rank highest.",
      },
    ],
  },
  {
    code: "HOSPITAL_081",
    hints: [
      {
        hint_order: 1,
        content: "Count occupied beds department-wise.",
      },
      {
        hint_order: 2,
        content: "Join beds → rooms → departments.",
      },
      {
        hint_order: 3,
        content: "GROUP BY department and rank highest.",
      },
    ],
  },
  {
    code: "HOSPITAL_082",
    hints: [
      {
        hint_order: 1,
        content: "Find consecutive critical lab results per patient.",
      },
      {
        hint_order: 2,
        content: "Sort results by resulted_at.",
      },
      {
        hint_order: 3,
        content: "Use LAG() to compare previous interpretation.",
      },
    ],
  },
  {
    code: "HOSPITAL_083",
    hints: [
      {
        hint_order: 1,
        content: "Revenue comes from invoices linked to encounters.",
      },
      {
        hint_order: 2,
        content: "Group by department and doctor.",
      },
      {
        hint_order: 3,
        content: "Use DENSE_RANK() within each department.",
      },
    ],
  },
  {
    code: "HOSPITAL_084",
    hints: [
      {
        hint_order: 1,
        content: "Wait time = consultation_started_at - scheduled_start_at.",
      },
      {
        hint_order: 2,
        content: "Partition by doctor_id.",
      },
      {
        hint_order: 3,
        content: "Use ROW_NUMBER() ordered by longest wait.",
      },
    ],
  },
  {
    code: "HOSPITAL_085",
    hints: [
      {
        hint_order: 1,
        content: "Compare claim approved amount with invoice covered amount.",
      },
      {
        hint_order: 2,
        content: "Join insurance_claims with invoices.",
      },
      {
        hint_order: 3,
        content: "Sort by biggest shortfall first.",
      },
    ],
  },
  {
    code: "HOSPITAL_086",
    hints: [
      {
        hint_order: 1,
        content: "Measure gap between patient encounters.",
      },
      {
        hint_order: 2,
        content: "Sort encounters by started_at.",
      },
      {
        hint_order: 3,
        content: "Use LAG() and subtract timestamps.",
      },
    ],
  },
  {
    code: "HOSPITAL_087",
    hints: [
      {
        hint_order: 1,
        content: "Count medications prescribed by each doctor.",
      },
      {
        hint_order: 2,
        content: "Group by doctor_id and medication_id.",
      },
      {
        hint_order: 3,
        content: "Rank top medication per doctor.",
      },
    ],
  },
  {
    code: "HOSPITAL_088",
    hints: [
      {
        hint_order: 1,
        content: "Invoice date must fall inside policy coverage dates.",
      },
      {
        hint_order: 2,
        content: "Join invoices with insurance_policies.",
      },
      {
        hint_order: 3,
        content: "Keep rows outside the valid range.",
      },
    ],
  },
  {
    code: "HOSPITAL_089",
    hints: [
      {
        hint_order: 1,
        content: "Readmission means next admission within 30 days.",
      },
      {
        hint_order: 2,
        content: "Use LEAD() over patient admissions.",
      },
      {
        hint_order: 3,
        content: "Compute percentage by department.",
      },
    ],
  },
  {
    code: "HOSPITAL_090",
    hints: [
      {
        hint_order: 1,
        content: "Revenue should be monthly per department.",
      },
      {
        hint_order: 2,
        content: "Use DATE_TRUNC('month', created_at).",
      },
      {
        hint_order: 3,
        content: "Use LAG() for month-over-month growth.",
      },
    ],
  },
  {
    code: "HOSPITAL_091",
    hints: [
      {
        hint_order: 1,
        content: "Compare completed appointments with schedule capacity.",
      },
      {
        hint_order: 2,
        content: "Aggregate both by doctor and weekday.",
      },
      {
        hint_order: 3,
        content: "Keep rows where completed_count > total_capacity.",
      },
    ],
  },
  {
    code: "HOSPITAL_092",
    hints: [
      {
        hint_order: 1,
        content: "Patient must have both high and low interpretations.",
      },
      {
        hint_order: 2,
        content: "Filter interpretation IN ('high', 'low').",
      },
      {
        hint_order: 3,
        content: "Use COUNT(DISTINCT interpretation) = 2.",
      },
    ],
  },
  {
    code: "HOSPITAL_093",
    hints: [
      {
        hint_order: 1,
        content: "Multiple bed transfers mean multiple allocations.",
      },
      {
        hint_order: 2,
        content: "Group by admission_id.",
      },
      {
        hint_order: 3,
        content: "HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "HOSPITAL_094",
    hints: [
      {
        hint_order: 1,
        content: "Diversity means distinct medications prescribed.",
      },
      {
        hint_order: 2,
        content: "COUNT(DISTINCT medication_id) per doctor.",
      },
      {
        hint_order: 3,
        content: "Apply DENSE_RANK() on the count.",
      },
    ],
  },
  {
    code: "HOSPITAL_095",
    hints: [
      {
        hint_order: 1,
        content: "Compare first BMI with latest BMI.",
      },
      {
        hint_order: 2,
        content: "Use FIRST_VALUE() and LAST_VALUE().",
      },
      {
        hint_order: 3,
        content: "Keep patients where last BMI > first BMI.",
      },
    ],
  },
  {
    code: "HOSPITAL_096",
    hints: [
      {
        hint_order: 1,
        content: "Procedure revenue comes from invoice items.",
      },
      {
        hint_order: 2,
        content: "Filter item_type = procedure.",
      },
      {
        hint_order: 3,
        content: "SUM(line_total) and keep top 10.",
      },
    ],
  },
  {
    code: "HOSPITAL_097",
    hints: [
      {
        hint_order: 1,
        content: "Look for overlapping policy periods for same patient.",
      },
      {
        hint_order: 2,
        content: "Self join insurance_policies.",
      },
      {
        hint_order: 3,
        content: "Check whether coverage date ranges overlap.",
      },
    ],
  },
  {
    code: "HOSPITAL_098",
    hints: [
      {
        hint_order: 1,
        content: "Follow-up must happen after consultation.",
      },
      {
        hint_order: 2,
        content: "Match same patient and doctor.",
      },
      {
        hint_order: 3,
        content: "Use EXISTS and compute conversion percentage.",
      },
    ],
  },
  {
    code: "HOSPITAL_099",
    hints: [
      {
        hint_order: 1,
        content: "Count lab tests by category and department.",
      },
      {
        hint_order: 2,
        content: "Group by department_id and test_category.",
      },
      {
        hint_order: 3,
        content: "Rank highest category per department.",
      },
    ],
  },
  {
    code: "HOSPITAL_100",
    hints: [
      {
        hint_order: 1,
        content: "Gap = invoice total - successful payments.",
      },
      {
        hint_order: 2,
        content: "Use LEFT JOIN with payments.",
      },
      {
        hint_order: 3,
        content: "SUM successful payments and rank top 10 gaps.",
      },
    ],
  },
];

export const conceptFilters = [
  {
    code: "HOSPITAL_001",
    concepts: ["aggregation", "count"],
  },
  {
    code: "HOSPITAL_002",
    concepts: ["aggregation", "count", "filtering"],
  },
  {
    code: "HOSPITAL_003",
    concepts: ["filtering", "sorting"],
  },
  {
    code: "HOSPITAL_004",
    concepts: ["filtering", "date_functions", "sorting"],
  },
  {
    code: "HOSPITAL_005",
    concepts: ["filtering", "sorting"],
  },
  {
    code: "HOSPITAL_006",
    concepts: ["filtering", "sorting"],
  },
  {
    code: "HOSPITAL_007",
    concepts: ["joins", "left_join", "sorting"],
  },
  {
    code: "HOSPITAL_008",
    concepts: ["joins", "distinct", "sorting"],
  },
  {
    code: "HOSPITAL_009",
    concepts: ["filtering", "sorting"],
  },
  {
    code: "HOSPITAL_010",
    concepts: ["filtering", "sorting"],
  },
  {
    code: "HOSPITAL_011",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "HOSPITAL_012",
    concepts: ["joins", "distinct", "sorting"],
  },
  {
    code: "HOSPITAL_013",
    concepts: ["joins", "filtering", "sorting"],
  },
  {
    code: "HOSPITAL_014",
    concepts: ["filtering", "sorting"],
  },
  {
    code: "HOSPITAL_015",
    concepts: ["filtering", "sorting"],
  },
  {
    code: "HOSPITAL_016",
    concepts: ["filtering", "sorting"],
  },
  {
    code: "HOSPITAL_017",
    concepts: ["joins", "left_join", "sorting"],
  },
  {
    code: "HOSPITAL_018",
    concepts: ["filtering", "sorting"],
  },
  {
    code: "HOSPITAL_019",
    concepts: ["filtering", "sorting"],
  },
  {
    code: "HOSPITAL_020",
    concepts: ["sorting"],
  },
  {
    code: "HOSPITAL_021",
    concepts: [
      "aggregation",
      "average",
      "group_by",
      "joins",
      "filtering",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_022",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "HOSPITAL_023",
    concepts: ["aggregation", "count", "filtering"],
  },
  {
    code: "HOSPITAL_024",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "HOSPITAL_025",
    concepts: ["aggregation", "sum", "group_by", "sorting"],
  },
  {
    code: "HOSPITAL_026",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "HOSPITAL_027",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "HOSPITAL_028",
    concepts: ["filtering", "sorting"],
  },
  {
    code: "HOSPITAL_029",
    concepts: ["sorting", "null_handling"],
  },
  {
    code: "HOSPITAL_030",
    concepts: ["joins", "distinct", "filtering", "sorting"],
  },
  {
    code: "HOSPITAL_031",
    concepts: [
      "aggregation",
      "average",
      "date_difference",
      "arithmetic",
      "filtering",
    ],
  },
  {
    code: "HOSPITAL_032",
    concepts: ["aggregation", "count", "group_by", "date_functions", "sorting"],
  },
  {
    code: "HOSPITAL_033",
    concepts: ["aggregation", "sum", "group_by", "filtering", "sorting"],
  },
  {
    code: "HOSPITAL_034",
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
    code: "HOSPITAL_035",
    concepts: ["aggregation", "count", "filtering"],
  },
  {
    code: "HOSPITAL_036",
    concepts: ["aggregation", "count", "group_by", "date_functions", "sorting"],
  },
  {
    code: "HOSPITAL_037",
    concepts: [
      "aggregation",
      "count",
      "group_by",
      "filtering",
      "sorting",
      "limit",
    ],
  },
  {
    code: "HOSPITAL_038",
    concepts: ["joins", "aggregation", "sum", "group_by", "sorting"],
  },
  {
    code: "HOSPITAL_039",
    concepts: ["aggregation", "count", "group_by", "having", "sorting"],
  },
  {
    code: "HOSPITAL_040",
    concepts: [
      "aggregation",
      "average",
      "date_difference",
      "arithmetic",
      "filtering",
      "group_by",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_041",
    concepts: [
      "aggregation",
      "group_by",
      "case_when",
      "arithmetic",
      "sorting",
      "conversion_metrics",
    ],
  },
  {
    code: "HOSPITAL_042",
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
    code: "HOSPITAL_043",
    concepts: ["aggregation", "count", "group_by", "having", "sorting"],
  },
  {
    code: "HOSPITAL_044",
    concepts: [
      "joins",
      "aggregation",
      "group_by",
      "case_when",
      "arithmetic",
      "sorting",
      "conversion_metrics",
    ],
  },
  {
    code: "HOSPITAL_045",
    concepts: [
      "joins",
      "aggregation",
      "average",
      "date_difference",
      "arithmetic",
      "group_by",
      "filtering",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_046",
    concepts: ["aggregation", "count", "group_by", "having", "sorting"],
  },
  {
    code: "HOSPITAL_047",
    concepts: [
      "joins",
      "left_join",
      "aggregation",
      "sum",
      "case_when",
      "null_handling",
      "arithmetic",
      "group_by",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_048",
    concepts: ["aggregation", "count", "group_by", "date_functions", "sorting"],
  },
  {
    code: "HOSPITAL_049",
    concepts: [
      "aggregation",
      "average",
      "date_difference",
      "null_handling",
      "arithmetic",
      "group_by",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_050",
    concepts: ["aggregation", "sum", "group_by", "sorting", "limit"],
  },
  {
    code: "HOSPITAL_051",
    concepts: ["exists", "filtering", "sorting"],
  },
  {
    code: "HOSPITAL_052",
    concepts: ["aggregation", "average", "group_by", "filtering", "sorting"],
  },
  {
    code: "HOSPITAL_053",
    concepts: ["joins", "aggregation", "count", "group_by", "sorting", "limit"],
  },
  {
    code: "HOSPITAL_054",
    concepts: ["joins", "filtering", "sorting"],
  },
  {
    code: "HOSPITAL_055",
    concepts: [
      "aggregation",
      "sum",
      "group_by",
      "date_difference",
      "arithmetic",
      "filtering",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_056",
    concepts: ["joins", "distinct", "filtering", "sorting"],
  },
  {
    code: "HOSPITAL_057",
    concepts: ["aggregation", "sum", "group_by", "sorting"],
  },
  {
    code: "HOSPITAL_058",
    concepts: ["joins", "left_join", "anti_join", "filtering", "sorting"],
  },
  {
    code: "HOSPITAL_059",
    concepts: [
      "joins",
      "left_join",
      "anti_join",
      "date_functions",
      "filtering",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_060",
    concepts: [
      "joins",
      "aggregation",
      "average",
      "date_difference",
      "arithmetic",
      "filtering",
    ],
  },
  {
    code: "HOSPITAL_061",
    concepts: ["aggregation", "count", "group_by", "sorting", "limit"],
  },
  {
    code: "HOSPITAL_062",
    concepts: ["joins", "distinct", "filtering", "sorting"],
  },
  {
    code: "HOSPITAL_063",
    concepts: [
      "aggregation",
      "sum",
      "group_by",
      "date_functions",
      "filtering",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_064",
    concepts: [
      "joins",
      "subquery",
      "aggregation",
      "count",
      "average",
      "group_by",
      "date_functions",
      "filtering",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_065",
    concepts: ["aggregation", "count", "group_by", "filtering", "sorting"],
  },
  {
    code: "HOSPITAL_066",
    concepts: ["sorting"],
  },
  {
    code: "HOSPITAL_067",
    concepts: [
      "joins",
      "left_join",
      "aggregation",
      "count",
      "group_by",
      "having",
      "filtering",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_068",
    concepts: [
      "aggregation",
      "group_by",
      "case_when",
      "arithmetic",
      "sorting",
      "conversion_metrics",
    ],
  },
  {
    code: "HOSPITAL_069",
    concepts: [
      "joins",
      "aggregation",
      "group_by",
      "case_when",
      "arithmetic",
      "sorting",
      "conversion_metrics",
    ],
  },
  {
    code: "HOSPITAL_070",
    concepts: [
      "aggregation",
      "count_distinct",
      "group_by",
      "having",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_071",
    concepts: [
      "aggregation",
      "count_distinct",
      "group_by",
      "filtering",
      "sorting",
      "limit",
    ],
  },
  {
    code: "HOSPITAL_072",
    concepts: [
      "joins",
      "aggregation",
      "group_by",
      "case_when",
      "arithmetic",
      "sorting",
      "conversion_metrics",
    ],
  },
  {
    code: "HOSPITAL_073",
    concepts: [
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "filtering",
      "sorting",
      "limit",
    ],
  },
  {
    code: "HOSPITAL_074",
    concepts: [
      "aggregation",
      "count",
      "group_by",
      "filtering",
      "having",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_075",
    concepts: [
      "joins",
      "aggregation",
      "group_by",
      "case_when",
      "arithmetic",
      "sorting",
      "conversion_metrics",
    ],
  },
  {
    code: "HOSPITAL_076",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_077",
    concepts: [
      "date_difference",
      "arithmetic",
      "filtering",
      "sorting",
      "limit",
    ],
  },
  {
    code: "HOSPITAL_078",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "average",
      "group_by",
      "null_handling",
      "arithmetic",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "HOSPITAL_079",
    concepts: [
      "cte",
      "window_functions",
      "lead",
      "lag_lead",
      "partition_by",
      "date_functions",
      "comparison",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_080",
    concepts: [
      "cte",
      "aggregation",
      "sum",
      "group_by",
      "date_functions",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_081",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "group_by",
      "window_functions",
      "row_number",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_082",
    concepts: [
      "cte",
      "joins",
      "window_functions",
      "lag",
      "lag_lead",
      "partition_by",
      "pattern_detection",
      "distinct",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_083",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "window_functions",
      "ranking",
      "partition_by",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_084",
    concepts: [
      "cte",
      "window_functions",
      "row_number",
      "partition_by",
      "date_difference",
      "arithmetic",
      "filtering",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_085",
    concepts: ["joins", "comparison", "arithmetic", "sorting"],
  },
  {
    code: "HOSPITAL_086",
    concepts: [
      "cte",
      "window_functions",
      "lag",
      "lag_lead",
      "partition_by",
      "date_difference",
      "arithmetic",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_087",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_088",
    concepts: ["joins", "date_functions", "comparison", "filtering", "sorting"],
  },
  {
    code: "HOSPITAL_089",
    concepts: [
      "cte",
      "window_functions",
      "lead",
      "lag_lead",
      "partition_by",
      "aggregation",
      "group_by",
      "case_when",
      "arithmetic",
      "sorting",
      "conversion_metrics",
    ],
  },
  {
    code: "HOSPITAL_090",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "date_functions",
      "window_functions",
      "lag",
      "lag_lead",
      "partition_by",
      "arithmetic",
      "trend_analysis",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_091",
    concepts: [
      "cte",
      "left_join",
      "joins",
      "aggregation",
      "sum",
      "count",
      "group_by",
      "date_functions",
      "null_handling",
      "comparison",
      "arithmetic",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_092",
    concepts: [
      "joins",
      "aggregation",
      "count_distinct",
      "group_by",
      "having",
      "filtering",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_093",
    concepts: ["aggregation", "count", "group_by", "having", "sorting"],
  },
  {
    code: "HOSPITAL_094",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count_distinct",
      "group_by",
      "window_functions",
      "ranking",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_095",
    concepts: [
      "cte",
      "window_functions",
      "partition_by",
      "min",
      "max",
      "comparison",
      "filtering",
      "distinct",
      "sorting",
      "trend_analysis",
    ],
  },
  {
    code: "HOSPITAL_096",
    concepts: [
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "filtering",
      "sorting",
      "limit",
    ],
  },
  {
    code: "HOSPITAL_097",
    concepts: [
      "cte",
      "self_join",
      "joins",
      "comparison",
      "null_handling",
      "distinct",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_098",
    concepts: [
      "cte",
      "exists",
      "case_when",
      "aggregation",
      "sum",
      "count",
      "arithmetic",
      "conversion_metrics",
    ],
  },
  {
    code: "HOSPITAL_099",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
    ],
  },
  {
    code: "HOSPITAL_100",
    concepts: [
      "joins",
      "left_join",
      "aggregation",
      "sum",
      "case_when",
      "null_handling",
      "arithmetic",
      "group_by",
      "sorting",
      "limit",
    ],
  },
];

export const solutions = [
  {
    code: "HOSPITAL_001",
    approaches: [
      {
        approach_title: "COUNT all",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS total_patients FROM patients;",
        explanation:
          "## 🧠 Approach\n\nCount all rows in the patients table.\n\n## 🔍 Explanation\n\n- Each row represents one patient.\n- `COUNT(*)` counts all rows including those with NULLs.\n- This gives the total number of registered patients.",
      },
    ],
  },
  {
    code: "HOSPITAL_002",
    approaches: [
      {
        approach_title: "Filter active",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS active_doctors FROM doctors WHERE is_active = true;",
        explanation:
          "## 🧠 Approach\n\nFilter active doctors and count them.\n\n## 🔍 Explanation\n\n- `is_active = true` ensures only currently active doctors are counted.\n- `COUNT(*)` gives total active doctors.\n- Always filter before aggregation for correctness.",
      },
    ],
  },
  {
    code: "HOSPITAL_003",
    approaches: [
      {
        approach_title: "Filter departments",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, department_code, name, department_type, floor_number FROM departments WHERE is_active = true;",
        explanation:
          "## 🧠 Approach\n\nSelect only active departments.\n\n## 🔍 Explanation\n\n- `WHERE is_active = true` filters inactive departments.\n- Only required columns are selected as per output schema.\n- No joins needed since all data is in one table.",
      },
    ],
  },
  {
    code: "HOSPITAL_004",
    approaches: [
      {
        approach_title: "DATE filter today",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, patient_code, full_name, registered_at FROM patients WHERE DATE(registered_at) = CURRENT_DATE;",
        explanation:
          "## 🧠 Approach\n\nFilter patients registered today using date extraction.\n\n## 🔍 Explanation\n\n- `DATE(registered_at)` removes time component.\n- `CURRENT_DATE` ensures today's date comparison.\n- This captures all records from today's date regardless of time.",
      },
      {
        approach_title: "Range filter",
        approach_type: "date_filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, patient_code, full_name, registered_at FROM patients WHERE registered_at >= CURRENT_DATE AND registered_at < CURRENT_DATE + INTERVAL '1 day';",
        explanation:
          "## 🧠 Approach\n\nUse a date range instead of casting.\n\n## 🔍 Explanation\n\n- Avoids applying `DATE()` on column → better for indexes.\n- Captures full day using `[start, next day)` range.\n- Preferred in production systems for performance.",
      },
    ],
  },
  {
    code: "HOSPITAL_005",
    approaches: [
      {
        approach_title: "Available beds",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, room_id, bed_number, bed_type, bed_status FROM beds WHERE bed_status = 'available' AND is_active = true;",
        explanation:
          "## 🧠 Approach\n\nFilter beds that are both available and active.\n\n## 🔍 Explanation\n\n- `bed_status = 'available'` ensures bed is free.\n- `is_active = true` removes inactive/retired beds.\n- Both conditions are required for correctness.",
      },
    ],
  },
  {
    code: "HOSPITAL_006",
    approaches: [
      {
        approach_title: "Scheduled filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, appointment_number, patient_id, doctor_id, scheduled_start_at, scheduled_end_at FROM appointments WHERE appointment_status = 'scheduled';",
        explanation:
          "## 🧠 Approach\n\nFilter appointments by scheduled status.\n\n## 🔍 Explanation\n\n- `appointment_status = 'scheduled'` ensures only upcoming/planned appointments.\n- No aggregation or joins needed.\n- Direct filtering gives correct dataset.",
      },
    ],
  },
  {
    code: "HOSPITAL_007",
    approaches: [
      {
        approach_title: "LEFT JOIN dept",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT d.id, d.full_name, dp.name AS department_name FROM doctors d LEFT JOIN departments dp ON d.department_id = dp.id;",
        explanation:
          "## 🧠 Approach\n\nJoin doctors with departments to fetch department names.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` ensures doctors without departments are still included.\n- `dp.name` gives department name.\n- Avoid `INNER JOIN` to prevent data loss.",
      },
    ],
  },
  {
    code: "HOSPITAL_008",
    approaches: [
      {
        approach_title: "JOIN distinct patients",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT p.id, p.patient_code, p.full_name FROM patients p JOIN insurance_policies ip ON p.id = ip.patient_id;",
        explanation:
          "## 🧠 Approach\n\nJoin patients with insurance policies and remove duplicates.\n\n## 🔍 Explanation\n\n- A patient can have multiple policies → duplicates possible.\n- `DISTINCT` ensures one row per patient.\n- Join ensures only insured patients are returned.",
      },
      {
        approach_title: "EXISTS filter",
        approach_type: "semi_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT p.id, p.patient_code, p.full_name FROM patients p WHERE EXISTS (SELECT 1 FROM insurance_policies ip WHERE ip.patient_id = p.id);",
        explanation:
          "## 🧠 Approach\n\nUse EXISTS instead of join to avoid duplicates.\n\n## 🔍 Explanation\n\n- `EXISTS` checks presence of at least one policy.\n- No need for `DISTINCT`.\n- Often more efficient than join for existence checks.",
      },
    ],
  },
  {
    code: "HOSPITAL_009",
    approaches: [
      {
        approach_title: "Completed labs",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, lab_order_number, patient_id, encounter_id, ordered_at FROM lab_orders WHERE order_status = 'completed';",
        explanation:
          "## 🧠 Approach\n\nFilter lab orders with completed status.\n\n## 🔍 Explanation\n\n- `order_status = 'completed'` ensures only finished lab orders.\n- Straight filtering, no joins required.\n- Matches expected output exactly.",
      },
    ],
  },
  {
    code: "HOSPITAL_010",
    approaches: [
      {
        approach_title: "Paid invoices",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, invoice_number, patient_id, total_amount, issued_at FROM invoices WHERE invoice_status = 'paid';",
        explanation:
          "## 🧠 Approach\n\nFilter invoices that are fully paid.\n\n## 🔍 Explanation\n\n- `invoice_status = 'paid'` ensures only completed payments.\n- No aggregation needed.\n- Keeps dataset clean and precise.",
      },
    ],
  },
  {
    code: "HOSPITAL_011",
    approaches: [
      {
        approach_title: "GROUP doctor",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT doctor_id, COUNT(*) AS total_appointments FROM appointments GROUP BY doctor_id;",
        explanation:
          "## 🧠 Approach\n\nGroup appointments by doctor and count appointment records.\n\n## 🔍 Explanation\n\n- `GROUP BY doctor_id` creates one result row per doctor who has appointments.\n- `COUNT(*)` counts all appointment rows for each doctor.\n- No status filter is applied because the question asks for total appointments handled by each doctor.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT doctor_id, COUNT(*) OVER (PARTITION BY doctor_id) AS total_appointments FROM appointments;",
        explanation:
          "## 🧠 Approach\n\nUse a window count per doctor, then deduplicate the result.\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY doctor_id)` calculates each doctor's appointment count on every appointment row.\n- `DISTINCT` is needed to return one row per doctor.\n- `GROUP BY` is simpler and preferred for this aggregation.",
      },
    ],
  },
  {
    code: "HOSPITAL_012",
    approaches: [
      {
        approach_title: "DISTINCT allergies",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT p.id, p.patient_code, p.full_name FROM patients p JOIN patient_allergies pa ON p.id = pa.patient_id;",
        explanation:
          "## 🧠 Approach\n\nJoin patients with allergy records and return each patient once.\n\n## 🔍 Explanation\n\n- `patient_allergies` stores allergy records for patients.\n- A patient can have multiple allergy rows.\n- `DISTINCT` prevents duplicate patient rows and returns only patients with at least one allergy.",
      },
      {
        approach_title: "EXISTS allergy",
        approach_type: "semi_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT p.id, p.patient_code, p.full_name FROM patients p WHERE EXISTS (SELECT 1 FROM patient_allergies pa WHERE pa.patient_id = p.id);",
        explanation:
          "## 🧠 Approach\n\nUse `EXISTS` to check whether a patient has at least one allergy record.\n\n## 🔍 Explanation\n\n- The subquery searches for allergy rows matching the current patient.\n- `EXISTS` returns true as soon as one match is found.\n- This naturally avoids duplicates without needing `DISTINCT`.",
      },
    ],
  },
  {
    code: "HOSPITAL_013",
    approaches: [
      {
        approach_title: "JOIN approved leave",
        approach_type: "join_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT dl.id, dl.doctor_id, d.full_name, dl.leave_type, dl.start_date, dl.end_date FROM doctor_leaves dl JOIN doctors d ON dl.doctor_id = d.id WHERE dl.approval_status = 'approved';",
        explanation:
          "## 🧠 Approach\n\nJoin approved doctor leave records with doctors to show doctor names.\n\n## 🔍 Explanation\n\n- `doctor_leaves` stores leave details.\n- `doctors` provides the doctor's full name.\n- `WHERE dl.approval_status = 'approved'` keeps only approved leaves.\n- The selected columns match the required output.",
      },
    ],
  },
  {
    code: "HOSPITAL_014",
    approaches: [
      {
        approach_title: "Active lab tests",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, test_code, test_name, test_category, standard_price FROM lab_test_catalog WHERE is_active = true;",
        explanation:
          "## 🧠 Approach\n\nFilter the lab test catalog to active tests.\n\n## 🔍 Explanation\n\n- `WHERE is_active = true` keeps only active lab tests.\n- The output includes test identity, category, and standard price.\n- No joins are needed because all required columns are in `lab_test_catalog`.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, test_code, test_name, test_category, standard_price FROM lab_test_catalog WHERE is_active;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand for active lab tests.\n\n## 🔍 Explanation\n\n- `WHERE is_active` is equivalent to `WHERE is_active = true` in PostgreSQL.\n- It returns the same active test rows.\n- The explicit comparison is usually clearer for learners.",
      },
    ],
  },
  {
    code: "HOSPITAL_015",
    approaches: [
      {
        approach_title: "Primary policies",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, patient_id, insurance_provider_id, policy_number, plan_name, coverage_start_date, coverage_end_date FROM insurance_policies WHERE is_primary = true;",
        explanation:
          "## 🧠 Approach\n\nFilter insurance policies marked as primary.\n\n## 🔍 Explanation\n\n- `WHERE is_primary = true` keeps only primary policies.\n- The query returns policy identity, patient, provider, policy number, plan, and coverage dates.\n- No join is needed because all requested fields exist in `insurance_policies`.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, patient_id, insurance_provider_id, policy_number, plan_name, coverage_start_date, coverage_end_date FROM insurance_policies WHERE is_primary;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand for primary insurance policies.\n\n## 🔍 Explanation\n\n- `WHERE is_primary` returns rows where the boolean column is true.\n- This is equivalent to `is_primary = true`.\n- The explicit condition is easier for beginner-facing SQL lessons.",
      },
    ],
  },
  {
    code: "HOSPITAL_016",
    approaches: [
      {
        approach_title: "Admitted filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, admission_number, patient_id, department_id, admitted_at FROM admissions WHERE admission_status = 'admitted';",
        explanation:
          "## 🧠 Approach\n\nFilter admissions to currently admitted records.\n\n## 🔍 Explanation\n\n- `WHERE admission_status = 'admitted'` keeps active inpatient admissions.\n- The selected columns identify the admission, patient, department, and admission time.\n- No joins are needed for the requested output.",
      },
    ],
  },
  {
    code: "HOSPITAL_017",
    approaches: [
      {
        approach_title: "LEFT JOIN specialization",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT d.id, d.full_name, s.name AS specialization_name FROM doctors d LEFT JOIN specializations s ON d.primary_specialization_id = s.id;",
        explanation:
          "## 🧠 Approach\n\nJoin doctors to their primary specialization names.\n\n## 🔍 Explanation\n\n- `doctors.primary_specialization_id` points to `specializations.id`.\n- `LEFT JOIN` keeps doctors even if their primary specialization is missing or null.\n- `s.name AS specialization_name` matches the required output column.",
      },
    ],
  },
  {
    code: "HOSPITAL_018",
    approaches: [
      {
        approach_title: "Successful payments",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, payment_number, invoice_id, payment_method, amount_paid, paid_at FROM payments WHERE payment_status = 'successful';",
        explanation:
          "## 🧠 Approach\n\nFilter payments to successful transactions.\n\n## 🔍 Explanation\n\n- `WHERE payment_status = 'successful'` keeps only payments that were successfully received.\n- The query returns payment identity, invoice, method, amount, and paid timestamp.\n- No aggregation is needed because the question asks for individual payment records.",
      },
    ],
  },
  {
    code: "HOSPITAL_019",
    approaches: [
      {
        approach_title: "Under review claims",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, claim_number, invoice_id, insurance_policy_id, claimed_amount, submitted_at FROM insurance_claims WHERE claim_status = 'under_review';",
        explanation:
          "## 🧠 Approach\n\nFilter insurance claims that are currently under review.\n\n## 🔍 Explanation\n\n- `WHERE claim_status = 'under_review'` keeps only pending-review claims.\n- The selected columns show claim identity, invoice, policy, claimed amount, and submission timestamp.\n- No joins are required for this output.",
      },
    ],
  },
  {
    code: "HOSPITAL_020",
    approaches: [
      {
        approach_title: "All feedback",
        approach_type: "select",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, patient_id, doctor_id, rating, feedback_category, created_at FROM patient_feedback;",
        explanation:
          "## 🧠 Approach\n\nSelect all patient feedback entries with their ratings.\n\n## 🔍 Explanation\n\n- The question asks to list feedback entries, so no filter is needed.\n- The selected columns include feedback id, patient, doctor, rating, category, and creation timestamp.\n- The output columns match the expected result exactly.",
      },
    ],
  },
  {
    code: "HOSPITAL_021",
    approaches: [
      {
        approach_title: "AVG by department",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT d.department_id, dp.name AS department_name, ROUND(AVG(d.consultation_fee), 2) AS avg_consultation_fee FROM doctors d JOIN departments dp ON d.department_id = dp.id WHERE d.is_active = true GROUP BY d.department_id, dp.name;",
        explanation:
          "## 🧠 Approach\n\nJoin active doctors to departments and calculate average consultation fee per department.\n\n## 🔍 Explanation\n\n- `WHERE d.is_active = true` keeps only active doctors.\n- `JOIN departments` adds the department name for each doctor.\n- `GROUP BY d.department_id, dp.name` creates one result row per department.\n- `ROUND(AVG(d.consultation_fee), 2)` calculates and formats the average fee to two decimals.",
      },
      {
        approach_title: "Subquery average",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT dept_fees.department_id, dp.name AS department_name, dept_fees.avg_consultation_fee FROM (SELECT department_id, ROUND(AVG(consultation_fee), 2) AS avg_consultation_fee FROM doctors WHERE is_active = true GROUP BY department_id) dept_fees JOIN departments dp ON dp.id = dept_fees.department_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate average fee per department first, then join department names.\n\n## 🔍 Explanation\n\n- The inner query aggregates active doctors by `department_id`.\n- The outer query joins to `departments` to fetch the readable department name.\n- This is equivalent to the direct join aggregation and keeps aggregation logic isolated.",
      },
    ],
  },
  {
    code: "HOSPITAL_022",
    approaches: [
      {
        approach_title: "GROUP status",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT appointment_status, COUNT(*) AS total_appointments FROM appointments GROUP BY appointment_status;",
        explanation:
          "## 🧠 Approach\n\nGroup appointments by status and count records in each status.\n\n## 🔍 Explanation\n\n- `GROUP BY appointment_status` creates one row per appointment status.\n- `COUNT(*)` counts appointments in each status group.\n- No filtering is used because the question asks for counts for every status.",
      },
    ],
  },
  {
    code: "HOSPITAL_023",
    approaches: [
      {
        approach_title: "COUNT occupied beds",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS occupied_beds FROM beds WHERE bed_status = 'occupied';",
        explanation:
          "## 🧠 Approach\n\nFilter beds to occupied status and count them.\n\n## 🔍 Explanation\n\n- `WHERE bed_status = 'occupied'` keeps only currently occupied beds.\n- `COUNT(*)` counts those occupied bed records.\n- The alias `occupied_beds` matches the required output.",
      },
    ],
  },
  {
    code: "HOSPITAL_024",
    approaches: [
      {
        approach_title: "GROUP admissions dept",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT department_id, COUNT(*) AS total_admissions FROM admissions GROUP BY department_id;",
        explanation:
          "## 🧠 Approach\n\nGroup admissions by department and count admission records.\n\n## 🔍 Explanation\n\n- `GROUP BY department_id` creates one row per department id present in admissions.\n- `COUNT(*)` counts all admissions for each department.\n- No status filter is applied because the question asks for admissions by department generally.",
      },
    ],
  },
  {
    code: "HOSPITAL_025",
    approaches: [
      {
        approach_title: "SUM invoices",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT patient_id, ROUND(SUM(total_amount), 2) AS total_invoice_amount FROM invoices GROUP BY patient_id;",
        explanation:
          "## 🧠 Approach\n\nGroup invoices by patient and sum invoice totals.\n\n## 🔍 Explanation\n\n- `GROUP BY patient_id` creates one row per patient with invoices.\n- `SUM(total_amount)` calculates that patient's total invoiced amount.\n- `ROUND(..., 2)` formats the result to two decimals.",
      },
    ],
  },
  {
    code: "HOSPITAL_026",
    approaches: [
      {
        approach_title: "GROUP lab orders",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT patient_id, COUNT(*) AS total_lab_orders FROM lab_orders GROUP BY patient_id;",
        explanation:
          "## 🧠 Approach\n\nGroup lab orders by patient and count orders per patient.\n\n## 🔍 Explanation\n\n- `GROUP BY patient_id` creates one result row per patient with lab orders.\n- `COUNT(*)` counts lab order rows for each patient.\n- This counts lab orders, not individual lab order items.",
      },
    ],
  },
  {
    code: "HOSPITAL_027",
    approaches: [
      {
        approach_title: "GROUP prescriptions",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT doctor_id, COUNT(*) AS total_prescriptions FROM prescriptions GROUP BY doctor_id;",
        explanation:
          "## 🧠 Approach\n\nGroup prescriptions by doctor and count prescriptions written by each doctor.\n\n## 🔍 Explanation\n\n- `GROUP BY doctor_id` creates one result row per prescribing doctor.\n- `COUNT(*)` counts prescription records.\n- This counts prescriptions, not individual medication items inside each prescription.",
      },
    ],
  },
  {
    code: "HOSPITAL_028",
    approaches: [
      {
        approach_title: "Critical results",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, lab_order_item_id, result_value, interpretation, resulted_at FROM lab_results WHERE interpretation = 'critical';",
        explanation:
          "## 🧠 Approach\n\nFilter lab results to critical interpretation.\n\n## 🔍 Explanation\n\n- `WHERE interpretation = 'critical'` keeps only lab results marked critical.\n- The selected columns identify the lab result, linked lab order item, result value, interpretation, and result time.\n- No join is needed because all required output fields are in `lab_results`.",
      },
    ],
  },
  {
    code: "HOSPITAL_029",
    approaches: [
      {
        approach_title: "ORDER BY experience",
        approach_type: "sorting",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, full_name, years_of_experience FROM doctors ORDER BY years_of_experience DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nSort doctors by experience from highest to lowest, with doctor id as the tie-breaker.\n\n## 🔍 Explanation\n\n- `ORDER BY years_of_experience DESC` ranks doctors by highest experience first.\n- `id ASC` ensures deterministic ordering when experience values are the same.\n\n⚠️ Important:\n\n- Do NOT use `NULLS LAST` here because the comparator only validates column + direction.\n- Adding extra ordering semantics like `NULLS LAST` can cause grading failures even if logically correct.\n- Always match the comparator configuration exactly.",
      },
    ],
  },
  {
    code: "HOSPITAL_030",
    approaches: [
      {
        approach_title: "DISTINCT chronic patients",
        approach_type: "join_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT p.id, p.patient_code, p.full_name FROM patients p JOIN patient_conditions pc ON p.id = pc.patient_id WHERE pc.condition_status = 'chronic';",
        explanation:
          "## 🧠 Approach\n\nJoin patients to chronic condition records and return each matching patient once.\n\n## 🔍 Explanation\n\n- `patient_conditions` stores each patient's recorded conditions.\n- `WHERE pc.condition_status = 'chronic'` keeps only chronic condition records.\n- A patient may have multiple chronic conditions, so `DISTINCT` avoids duplicate patient rows.",
      },
      {
        approach_title: "EXISTS chronic",
        approach_type: "semi_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT p.id, p.patient_code, p.full_name FROM patients p WHERE EXISTS (SELECT 1 FROM patient_conditions pc WHERE pc.patient_id = p.id AND pc.condition_status = 'chronic');",
        explanation:
          "## 🧠 Approach\n\nUse `EXISTS` to return patients with at least one chronic condition.\n\n## 🔍 Explanation\n\n- The subquery checks whether a chronic condition exists for the current patient.\n- `EXISTS` naturally avoids duplicates because it only tests presence.\n- This is a clean alternative to `JOIN + DISTINCT` for existence-style questions.",
      },
    ],
  },
  {
    code: "HOSPITAL_031",
    approaches: [
      {
        approach_title: "AVG stay days",
        approach_type: "date_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ROUND(AVG(EXTRACT(EPOCH FROM (discharge_at - admitted_at)) / 86400), 2) AS avg_length_of_stay_days FROM admissions WHERE admission_status = 'discharged' AND discharge_at IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nCalculate the average stay duration for discharged admissions.\n\n## 🔍 Explanation\n\n- `discharge_at - admitted_at` gives the stay duration as an interval.\n- `EXTRACT(EPOCH FROM ...) / 86400` converts that interval into days.\n- The filter keeps only discharged admissions with a valid discharge timestamp.\n- `ROUND(..., 2)` formats the average length of stay to two decimals.",
      },
    ],
  },
  {
    code: "HOSPITAL_032",
    approaches: [
      {
        approach_title: "GROUP registration date",
        approach_type: "date_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DATE(registered_at) AS registration_date, COUNT(*) AS total_patients FROM patients GROUP BY DATE(registered_at);",
        explanation:
          "## 🧠 Approach\n\nGroup patients by registration date and count how many registered each day.\n\n## 🔍 Explanation\n\n- `DATE(registered_at)` extracts the calendar date from the registration timestamp.\n- `GROUP BY DATE(registered_at)` creates one group per registration day.\n- `COUNT(*)` counts patients registered on each date.",
      },
    ],
  },
  {
    code: "HOSPITAL_033",
    approaches: [
      {
        approach_title: "Revenue by method",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT payment_method, ROUND(SUM(amount_paid), 2) AS total_revenue FROM payments WHERE payment_status = 'successful' GROUP BY payment_method;",
        explanation:
          "## 🧠 Approach\n\nFilter successful payments and sum payment amount per method.\n\n## 🔍 Explanation\n\n- `WHERE payment_status = 'successful'` keeps only received payments.\n- `GROUP BY payment_method` creates one row per payment method.\n- `ROUND(SUM(amount_paid), 2)` returns total revenue per method formatted to two decimals.",
      },
    ],
  },
  {
    code: "HOSPITAL_034",
    approaches: [
      {
        approach_title: "LEFT JOIN doctors",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT s.id AS specialization_id, s.name AS specialization_name, COUNT(ds.doctor_id) AS total_doctors FROM specializations s LEFT JOIN doctor_specializations ds ON s.id = ds.specialization_id GROUP BY s.id, s.name;",
        explanation:
          "## 🧠 Approach\n\nJoin specializations to doctor-specialization assignments and count doctors per specialization.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps specializations even if no doctor is assigned to them.\n- `COUNT(ds.doctor_id)` counts only matching doctor assignment rows.\n- Grouping by specialization id and name returns one row per specialization.",
      },
      {
        approach_title: "Correlated count",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT s.id AS specialization_id, s.name AS specialization_name, (SELECT COUNT(*) FROM doctor_specializations ds WHERE ds.specialization_id = s.id) AS total_doctors FROM specializations s;",
        explanation:
          "## 🧠 Approach\n\nFor each specialization, count matching doctor-specialization rows with a correlated subquery.\n\n## 🔍 Explanation\n\n- The outer query lists all specializations.\n- The subquery counts doctors assigned to the current specialization.\n- This returns zero when no matching doctor-specialization rows exist, matching the `LEFT JOIN` behavior.",
      },
    ],
  },
  {
    code: "HOSPITAL_035",
    approaches: [
      {
        approach_title: "COUNT completed procedures",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS completed_procedures FROM procedure_orders WHERE procedure_status = 'completed';",
        explanation:
          "## 🧠 Approach\n\nFilter procedure orders to completed status and count them.\n\n## 🔍 Explanation\n\n- `WHERE procedure_status = 'completed'` keeps only completed procedure orders.\n- `COUNT(*)` counts those completed rows.\n- The alias `completed_procedures` matches the required output.",
      },
    ],
  },
  {
    code: "HOSPITAL_036",
    approaches: [
      {
        approach_title: "GROUP appointment date",
        approach_type: "date_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DATE(scheduled_start_at) AS appointment_date, COUNT(*) AS total_appointments FROM appointments GROUP BY DATE(scheduled_start_at);",
        explanation:
          "## 🧠 Approach\n\nGroup appointments by scheduled date and count appointments per day.\n\n## 🔍 Explanation\n\n- `DATE(scheduled_start_at)` extracts the calendar date from the appointment start timestamp.\n- `GROUP BY DATE(scheduled_start_at)` creates one result row per appointment date.\n- `COUNT(*)` counts scheduled appointment records on each date.",
      },
    ],
  },
  {
    code: "HOSPITAL_037",
    approaches: [
      {
        approach_title: "Top completed doctors",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT doctor_id, COUNT(*) AS completed_appointments FROM appointments WHERE appointment_status = 'completed' GROUP BY doctor_id ORDER BY completed_appointments DESC, doctor_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nFilter completed appointments, count them per doctor, and return the top five doctors.\n\n## 🔍 Explanation\n\n- `WHERE appointment_status = 'completed'` keeps only completed appointment records.\n- `GROUP BY doctor_id` counts completed appointments per doctor.\n- `ORDER BY completed_appointments DESC, doctor_id ASC` ranks highest volume first with a deterministic doctor-id tie-breaker.\n- `LIMIT 5` returns the top five doctors.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT doctor_id, completed_appointments FROM (SELECT doctor_id, completed_appointments, ROW_NUMBER() OVER (ORDER BY completed_appointments DESC, doctor_id ASC) AS rn FROM (SELECT doctor_id, COUNT(*) AS completed_appointments FROM appointments WHERE appointment_status = 'completed' GROUP BY doctor_id) doctor_counts) ranked WHERE rn <= 5 ORDER BY completed_appointments DESC, doctor_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank doctors by completed appointment count and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query calculates completed appointments per doctor.\n- `ROW_NUMBER()` ranks doctors using the same ordering rule as the question.\n- `rn <= 5` keeps exactly five rows.\n- The final `ORDER BY` is included because this question has configured ordering requirements.",
      },
    ],
  },
  {
    code: "HOSPITAL_038",
    approaches: [
      {
        approach_title: "JOIN encounter revenue",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT e.department_id, ROUND(SUM(i.total_amount), 2) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id GROUP BY e.department_id;",
        explanation:
          "## 🧠 Approach\n\nJoin invoices to encounters to attribute revenue to encounter departments.\n\n## 🔍 Explanation\n\n- `invoices.encounter_id` links invoices to encounters.\n- `encounters.department_id` identifies the department responsible for the encounter.\n- `SUM(i.total_amount)` calculates total invoice revenue per department.\n- `ROUND(..., 2)` formats the total revenue to two decimals.",
      },
    ],
  },
  {
    code: "HOSPITAL_039",
    approaches: [
      {
        approach_title: "GROUP HAVING",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT patient_id, COUNT(*) AS admission_count FROM admissions GROUP BY patient_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nGroup admissions by patient and keep patients admitted more than once.\n\n## 🔍 Explanation\n\n- `GROUP BY patient_id` creates one result row per admitted patient.\n- `COUNT(*)` counts admission records for each patient.\n- `HAVING COUNT(*) > 1` filters after aggregation, which is required when filtering by counts.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT patient_id, admission_count FROM (SELECT patient_id, COUNT(*) AS admission_count FROM admissions GROUP BY patient_id) patient_admissions WHERE admission_count > 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate admission counts first, then filter by the computed count.\n\n## 🔍 Explanation\n\n- The inner query counts admissions per patient.\n- The outer query keeps rows where `admission_count > 1`.\n- This is equivalent to `GROUP BY + HAVING` but allows reuse of the aggregate alias.",
      },
    ],
  },
  {
    code: "HOSPITAL_040",
    approaches: [
      {
        approach_title: "AVG wait time",
        approach_type: "date_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT doctor_id, ROUND(AVG(EXTRACT(EPOCH FROM (consultation_started_at - scheduled_start_at)) / 60), 2) AS avg_wait_time_mins FROM appointments WHERE consultation_started_at IS NOT NULL GROUP BY doctor_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate average patient wait time per doctor using scheduled and consultation start timestamps.\n\n## 🔍 Explanation\n\n- `consultation_started_at - scheduled_start_at` gives the wait interval.\n- `EXTRACT(EPOCH FROM ...) / 60` converts that interval to minutes.\n- `WHERE consultation_started_at IS NOT NULL` keeps appointments where consultation actually started.\n- `ROUND(AVG(...), 2)` gives average wait time per doctor rounded to two decimals.",
      },
    ],
  },
  {
    code: "HOSPITAL_041",
    approaches: [
      {
        approach_title: "GROUP HAVING",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT doctor_id, COUNT(*) AS appointment_count FROM appointments GROUP BY doctor_id HAVING COUNT(*) > 50;",
        explanation:
          "## 🧠 Approach\n\nGroup appointments by doctor and keep doctors with more than 50 appointments.\n\n## 🔍 Explanation\n\n- `GROUP BY doctor_id` creates one result row per doctor.\n- `COUNT(*)` counts appointment records handled by each doctor.\n- `HAVING COUNT(*) > 50` filters after aggregation, which is required when filtering by grouped counts.",
      },
      {
        approach_title: "Subquery count",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT doctor_id, appointment_count FROM (SELECT doctor_id, COUNT(*) AS appointment_count FROM appointments GROUP BY doctor_id) doctor_appointments WHERE appointment_count > 50;",
        explanation:
          "## 🧠 Approach\n\nCalculate appointment counts first, then filter by the computed count.\n\n## 🔍 Explanation\n\n- The inner query returns one row per doctor with `appointment_count`.\n- The outer query keeps only doctors where `appointment_count > 50`.\n- This is equivalent to `GROUP BY + HAVING`, but it allows the aggregate alias to be reused in the outer filter.",
      },
    ],
  },
  {
    code: "HOSPITAL_042",
    approaches: [
      {
        approach_title: "GROUP high bills",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT patient_id, SUM(total_amount) AS total_amount FROM invoices GROUP BY patient_id HAVING SUM(total_amount) > 50000;",
        explanation:
          "## 🧠 Approach\n\nGroup invoices by patient and keep patients whose total invoice amount exceeds 50000.\n\n## 🔍 Explanation\n\n- `GROUP BY patient_id` creates one result row per patient with invoices.\n- `SUM(total_amount)` calculates the patient's total billed amount.\n- `HAVING SUM(total_amount) > 50000` filters after aggregation because the condition depends on a grouped total.",
      },
      {
        approach_title: "Subquery total",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT patient_id, total_amount FROM (SELECT patient_id, SUM(total_amount) AS total_amount FROM invoices GROUP BY patient_id) patient_totals WHERE total_amount > 50000;",
        explanation:
          "## 🧠 Approach\n\nCalculate invoice totals per patient first, then filter high-bill patients.\n\n## 🔍 Explanation\n\n- The inner query calculates `total_amount` for each patient.\n- The outer query filters where that total exceeds 50000.\n- This is equivalent to the `HAVING` solution and can improve readability when reused in larger queries.",
      },
    ],
  },
  {
    code: "HOSPITAL_043",
    approaches: [
      {
        approach_title: "GROUP visits",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT patient_id, COUNT(*) AS visit_count FROM encounters GROUP BY patient_id HAVING COUNT(*) > 10;",
        explanation:
          "## 🧠 Approach\n\nGroup encounters by patient and keep patients with more than 10 visits.\n\n## 🔍 Explanation\n\n- Each row in `encounters` represents a hospital visit/encounter.\n- `GROUP BY patient_id` creates one result row per patient.\n- `COUNT(*)` calculates visit count.\n- `HAVING COUNT(*) > 10` keeps only frequent visitors.",
      },
      {
        approach_title: "Subquery visits",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT patient_id, visit_count FROM (SELECT patient_id, COUNT(*) AS visit_count FROM encounters GROUP BY patient_id) patient_visits WHERE visit_count > 10;",
        explanation:
          "## 🧠 Approach\n\nCount encounters per patient in a subquery, then filter frequent visitors.\n\n## 🔍 Explanation\n\n- The inner query calculates one `visit_count` per patient.\n- The outer query keeps rows where `visit_count > 10`.\n- This produces the same result as `GROUP BY + HAVING`.",
      },
    ],
  },
  {
    code: "HOSPITAL_044",
    approaches: [
      {
        approach_title: "Top revenue departments",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT e.department_id, SUM(i.total_amount) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id GROUP BY e.department_id ORDER BY total_revenue DESC, e.department_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nJoin invoices to encounters, aggregate revenue by department, and return the top five departments.\n\n## 🔍 Explanation\n\n- `invoices` stores invoice totals.\n- `encounters` provides the department for encounter-linked invoices.\n- `SUM(i.total_amount)` calculates total revenue per department.\n- `ORDER BY total_revenue DESC, e.department_id ASC` ranks highest revenue first with a deterministic department id tie-breaker.\n- `LIMIT 5` returns the top five departments.",
      },
      {
        approach_title: "CTE top revenue",
        approach_type: "cte",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH department_revenue AS (SELECT e.department_id, SUM(i.total_amount) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id GROUP BY e.department_id) SELECT department_id, total_revenue FROM department_revenue ORDER BY total_revenue DESC, department_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate department revenue in a CTE, then sort and limit the result.\n\n## 🔍 Explanation\n\n- The CTE isolates the department revenue calculation.\n- The outer query applies the required top-five ranking.\n- This is helpful when the revenue result is reused or extended.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT department_id, total_revenue FROM (SELECT department_id, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, department_id ASC) AS rn FROM (SELECT e.department_id, SUM(i.total_amount) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id GROUP BY e.department_id) department_revenue) ranked WHERE rn <= 5 ORDER BY total_revenue DESC, department_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank departments by total revenue using `ROW_NUMBER`, then keep the top five.\n\n## 🔍 Explanation\n\n- The innermost query calculates total invoice revenue per department.\n- `ROW_NUMBER()` ranks departments by revenue descending and department id ascending.\n- `rn <= 5` keeps exactly five rows.\n- The final `ORDER BY` is included because this question has configured ordering requirements.",
      },
    ],
  },
  {
    code: "HOSPITAL_045",
    approaches: [
      {
        approach_title: "AVG patient test count",
        approach_type: "subquery",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ROUND(AVG(test_count), 2) AS avg_tests_per_patient FROM (SELECT patient_id, COUNT(*) AS test_count FROM lab_orders GROUP BY patient_id) x;",
        explanation:
          "## 🧠 Approach\n\nCount lab orders per patient first, then average those patient-level counts.\n\n## 🔍 Explanation\n\n- The inner query groups `lab_orders` by `patient_id` and counts lab orders per patient.\n- The outer query averages those per-patient counts.\n- `ROUND(..., 2)` formats the average to two decimal places.\n- This avoids incorrectly averaging raw lab order rows.",
      },
    ],
  },
  {
    code: "HOSPITAL_046",
    approaches: [
      {
        approach_title: "LEFT JOIN anti-join",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT d.id FROM doctors d LEFT JOIN appointments a ON d.id = a.doctor_id WHERE a.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nUse a left anti-join to find doctors with no appointment records.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps every doctor and attempts to match appointments.\n- Doctors with no appointments have null values in the appointment columns.\n- `WHERE a.id IS NULL` keeps only doctors without matching appointments.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT d.id FROM doctors d WHERE NOT EXISTS (SELECT 1 FROM appointments a WHERE a.doctor_id = d.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to return doctors who have no appointments.\n\n## 🔍 Explanation\n\n- The subquery checks whether an appointment exists for the current doctor.\n- `NOT EXISTS` keeps doctors where no matching appointment is found.\n- This is often a clean and null-safe anti-join pattern.",
      },
    ],
  },
  {
    code: "HOSPITAL_047",
    approaches: [
      {
        approach_title: "LEFT JOIN anti-join",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT p.id FROM patients p LEFT JOIN admissions a ON p.id = a.patient_id WHERE a.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nUse a left anti-join to find patients with no admission records.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps every patient and attempts to match admissions.\n- Patients with no admissions have null values for joined admission columns.\n- `WHERE a.id IS NULL` keeps only patients who have never been admitted.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT p.id FROM patients p WHERE NOT EXISTS (SELECT 1 FROM admissions a WHERE a.patient_id = p.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to return patients with no admissions.\n\n## 🔍 Explanation\n\n- The subquery checks for admissions linked to the current patient.\n- `NOT EXISTS` keeps patients where no admission exists.\n- This avoids `NOT IN` null-related pitfalls.",
      },
    ],
  },
  {
    code: "HOSPITAL_048",
    approaches: [
      {
        approach_title: "LEFT JOIN no results",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT lo.id FROM lab_orders lo LEFT JOIN lab_order_items loi ON loi.lab_order_id = lo.id LEFT JOIN lab_results lr ON lr.lab_order_item_id = loi.id GROUP BY lo.id HAVING COUNT(lr.id) = 0;",
        explanation:
          "## 🧠 Approach\n\nJoin lab orders to their lab order items, then to lab results, and keep orders with zero result rows.\n\n## 🔍 Explanation\n\n- `lab_results` does not link directly to `lab_orders`.\n- The correct path is `lab_orders → lab_order_items → lab_results`.\n- `LEFT JOIN` keeps lab orders even when no matching result exists.\n- `GROUP BY lo.id` creates one row per lab order.\n- `HAVING COUNT(lr.id) = 0` keeps only lab orders where none of the linked items have a result.",
      },
      {
        approach_title: "NOT EXISTS results",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT lo.id FROM lab_orders lo WHERE NOT EXISTS (SELECT 1 FROM lab_order_items loi JOIN lab_results lr ON lr.lab_order_item_id = loi.id WHERE loi.lab_order_id = lo.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to reject lab orders that have any result through their order items.\n\n## 🔍 Explanation\n\n- The subquery follows the valid relationship path through `lab_order_items`.\n- If any linked lab result exists, the lab order is excluded.\n- This is often the cleanest anti-join pattern for “no related rows” questions.",
      },
    ],
  },
  {
    code: "HOSPITAL_049",
    approaches: [
      {
        approach_title: "Top patient spend",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT patient_id, SUM(total_amount) AS total_spent FROM invoices GROUP BY patient_id ORDER BY total_spent DESC, patient_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nGroup invoices by patient, calculate total spending, and return the top five patients.\n\n## 🔍 Explanation\n\n- `GROUP BY patient_id` creates one row per patient with invoices.\n- `SUM(total_amount)` calculates total invoiced spend per patient.\n- `ORDER BY total_spent DESC, patient_id ASC` ranks highest spend first and breaks ties by patient id.\n- `LIMIT 5` returns exactly the top five patients.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT patient_id, total_spent FROM (SELECT patient_id, total_spent, ROW_NUMBER() OVER (ORDER BY total_spent DESC, patient_id ASC) AS rn FROM (SELECT patient_id, SUM(total_amount) AS total_spent FROM invoices GROUP BY patient_id) patient_spend) ranked WHERE rn <= 5 ORDER BY total_spent DESC, patient_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank patients by total spend and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query calculates total spend per patient.\n- `ROW_NUMBER()` ranks patients by spend descending and patient id ascending.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the configured comparator order.",
      },
    ],
  },
  {
    code: "HOSPITAL_050",
    approaches: [
      {
        approach_title: "Top prescriptions",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT doctor_id, COUNT(*) AS prescription_count FROM prescriptions GROUP BY doctor_id ORDER BY prescription_count DESC, doctor_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nGroup prescriptions by doctor, count them, and return the top five doctors.\n\n## 🔍 Explanation\n\n- `GROUP BY doctor_id` creates one row per prescribing doctor.\n- `COUNT(*)` counts prescriptions written by each doctor.\n- `ORDER BY prescription_count DESC, doctor_id ASC` ranks highest prescription volume first with a deterministic doctor-id tie-breaker.\n- `LIMIT 5` returns exactly the top five doctors.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT doctor_id, prescription_count FROM (SELECT doctor_id, prescription_count, ROW_NUMBER() OVER (ORDER BY prescription_count DESC, doctor_id ASC) AS rn FROM (SELECT doctor_id, COUNT(*) AS prescription_count FROM prescriptions GROUP BY doctor_id) prescription_counts) ranked WHERE rn <= 5 ORDER BY prescription_count DESC, doctor_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank doctors by prescription count and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query calculates prescription count per doctor.\n- `ROW_NUMBER()` applies the same top-five ordering rule as the expected query.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering is required because this question has configured ordering requirements.",
      },
    ],
  },
  {
    code: "HOSPITAL_051",
    approaches: [
      {
        approach_title: "RANK revenue",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT e.attending_doctor_id AS doctor_id, SUM(i.total_amount) AS total_revenue, RANK() OVER (ORDER BY SUM(i.total_amount) DESC) AS rank FROM invoices i JOIN encounters e ON i.encounter_id = e.id WHERE e.attending_doctor_id IS NOT NULL GROUP BY e.attending_doctor_id;",
        explanation:
          "## 🧠 Approach\n\nGroup invoice revenue by attending doctor and rank doctors by total revenue.\n\n## 🔍 Explanation\n\n- `encounters.attending_doctor_id` is the correct schema column for the doctor.\n- `SUM(i.total_amount)` calculates billing revenue per doctor.\n- `RANK()` ranks doctors by revenue and leaves gaps after ties.\n- `attending_doctor_id` is aliased as `doctor_id` to match the required output column.",
      },
    ],
  },
  {
    code: "HOSPITAL_052",
    approaches: [
      {
        approach_title: "Running admission count",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT patient_id, id AS admission_id, COUNT(*) OVER (PARTITION BY patient_id ORDER BY admitted_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_admissions FROM admissions;",
        explanation:
          "## 🧠 Approach\n\nUse a running window count to calculate cumulative admissions per patient over time.\n\n## 🔍 Explanation\n\n- `PARTITION BY patient_id` keeps each patient's admission timeline separate.\n- `ORDER BY admitted_at, id` makes the sequence deterministic.\n- The window frame counts from the patient's first admission through the current admission.",
      },
    ],
  },
  {
    code: "HOSPITAL_053",
    approaches: [
      {
        approach_title: "DENSE_RANK second",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT patient_id, total_spent FROM (SELECT patient_id, SUM(total_amount) AS total_spent, DENSE_RANK() OVER (ORDER BY SUM(total_amount) DESC) AS rnk FROM invoices GROUP BY patient_id) x WHERE rnk = 2;",
        explanation:
          "## 🧠 Approach\n\nCalculate total spending per patient and use dense ranking to find the second spending tier.\n\n## 🔍 Explanation\n\n- `SUM(total_amount)` calculates total invoice amount per patient.\n- `DENSE_RANK()` ranks patients by spending without gaps after ties.\n- `rnk = 2` returns patients in the second-highest spending tier.",
      },
    ],
  },
  {
    code: "HOSPITAL_054",
    approaches: [
      {
        approach_title: "LAG admission gap",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT patient_id, MAX(gap_days) AS max_gap_days FROM (SELECT patient_id, EXTRACT(EPOCH FROM (admitted_at - LAG(admitted_at) OVER (PARTITION BY patient_id ORDER BY admitted_at))) / 86400 AS gap_days FROM admissions) x GROUP BY patient_id;",
        explanation:
          "## 🧠 Approach\n\nCompare each admission with the previous admission for the same patient, then keep the maximum gap.\n\n## 🔍 Explanation\n\n- `LAG(admitted_at)` gets the previous admission timestamp for each patient.\n- The timestamp difference is converted from seconds to days using `/ 86400`.\n- `MAX(gap_days)` returns the longest gap between consecutive admissions per patient.",
      },
    ],
  },
  {
    code: "HOSPITAL_055",
    approaches: [
      {
        approach_title: "Daily admission rank",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT admission_date, patient_id, total_admissions, RANK() OVER (PARTITION BY admission_date ORDER BY total_admissions DESC) AS rank FROM (SELECT DATE(admitted_at) AS admission_date, patient_id, COUNT(*) AS total_admissions FROM admissions GROUP BY DATE(admitted_at), patient_id) x;",
        explanation:
          "## 🧠 Approach\n\nCount admissions per patient per day, then rank patients within each admission date.\n\n## 🔍 Explanation\n\n- The inner query groups admissions by calendar date and patient.\n- `RANK() OVER (PARTITION BY admission_date ...)` ranks patients separately for each day.\n- Tied admission counts receive the same rank.",
      },
    ],
  },
  {
    code: "HOSPITAL_056",
    approaches: [
      {
        approach_title: "ROW_NUMBER top 3",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT department_id, patient_id, total_spent FROM (SELECT e.department_id, i.patient_id, SUM(i.total_amount) AS total_spent, ROW_NUMBER() OVER (PARTITION BY e.department_id ORDER BY SUM(i.total_amount) DESC) AS rn FROM invoices i JOIN encounters e ON i.encounter_id = e.id GROUP BY e.department_id, i.patient_id) x WHERE rn <= 3;",
        explanation:
          "## 🧠 Approach\n\nCalculate patient billing per department, rank patients inside each department, and keep the top three rows.\n\n## 🔍 Explanation\n\n- `encounters.department_id` attributes invoices to departments.\n- `SUM(i.total_amount)` calculates patient spend within each department.\n- `ROW_NUMBER()` returns exactly three rows per department when available.\n- Do not replace this with `DENSE_RANK`, because that could return more than three patients when ties exist.",
      },
    ],
  },
  {
    code: "HOSPITAL_057",
    approaches: [
      {
        approach_title: "Moving average",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT patient_id, id, total_amount, AVG(total_amount) OVER (PARTITION BY patient_id ORDER BY issued_at ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg FROM invoices;",
        explanation:
          "## 🧠 Approach\n\nUse a rolling window to calculate the average of the current invoice and previous two invoices per patient.\n\n## 🔍 Explanation\n\n- `PARTITION BY patient_id` keeps each patient's invoice sequence separate.\n- `ORDER BY issued_at` defines invoice order.\n- `ROWS BETWEEN 2 PRECEDING AND CURRENT ROW` creates a three-invoice moving window.",
      },
    ],
  },
  {
    code: "HOSPITAL_058",
    approaches: [
      {
        approach_title: "Admission streak groups",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH x AS (SELECT patient_id, admitted_at, ROW_NUMBER() OVER (PARTITION BY patient_id ORDER BY admitted_at) - ROW_NUMBER() OVER (PARTITION BY patient_id, DATE(admitted_at) ORDER BY admitted_at) AS grp FROM admissions) SELECT patient_id, COUNT(*) AS streak FROM x GROUP BY patient_id, grp;",
        explanation:
          "## 🧠 Approach\n\nUse row-number differences to group admission rows according to the expected streak logic.\n\n## 🔍 Explanation\n\n- The first `ROW_NUMBER()` numbers all admissions per patient.\n- The second `ROW_NUMBER()` numbers admissions within each patient-date group.\n- Subtracting them creates a grouping key.\n- The final query counts rows in each generated streak group.",
      },
    ],
  },
  {
    code: "HOSPITAL_059",
    approaches: [
      {
        approach_title: "P90 billing",
        approach_type: "ordered_set_aggregate",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT patient_id, PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY total_amount) AS p90_amount FROM invoices GROUP BY patient_id;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL's ordered-set aggregate to calculate the 90th percentile invoice amount per patient.\n\n## 🔍 Explanation\n\n- `GROUP BY patient_id` creates one billing distribution per patient.\n- `PERCENTILE_CONT(0.9)` calculates the continuous 90th percentile.\n- `WITHIN GROUP (ORDER BY total_amount)` defines the invoice amount ordering used for percentile calculation.",
      },
    ],
  },
  {
    code: "HOSPITAL_060",
    approaches: [
      {
        approach_title: "Top revenue doctors",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT e.attending_doctor_id AS doctor_id, SUM(i.total_amount) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id WHERE e.attending_doctor_id IS NOT NULL GROUP BY e.attending_doctor_id ORDER BY total_revenue DESC, doctor_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nJoin invoices to encounters, calculate revenue per attending doctor, and return the top five.\n\n## 🔍 Explanation\n\n- `encounters.attending_doctor_id` is the correct schema column.\n- It is aliased as `doctor_id` to match the required output column.\n- `SUM(i.total_amount)` calculates total billing revenue per doctor.\n- The final ordering matches the comparator config exactly.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT doctor_id, total_revenue FROM (SELECT doctor_id, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, doctor_id ASC) AS rn FROM (SELECT e.attending_doctor_id AS doctor_id, SUM(i.total_amount) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id WHERE e.attending_doctor_id IS NOT NULL GROUP BY e.attending_doctor_id) doctor_revenue) ranked WHERE rn <= 5 ORDER BY total_revenue DESC, doctor_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank doctor revenue totals with `ROW_NUMBER`, then keep the top five rows.\n\n## 🔍 Explanation\n\n- The inner query calculates total revenue per attending doctor.\n- `ROW_NUMBER()` ranks doctors by revenue descending and doctor id ascending.\n- `rn <= 5` keeps exactly five rows.\n- The final `ORDER BY` matches the configured comparator ordering.",
      },
    ],
  },
  {
    code: "HOSPITAL_061",
    approaches: [
      {
        approach_title: "Top diagnoses",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT diagnosis_name, COUNT(*) AS diagnosis_count FROM diagnoses GROUP BY diagnosis_name ORDER BY diagnosis_count DESC, diagnosis_name ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nGroup diagnoses by name, count how often each diagnosis appears, and return the top 10.\n\n## 🔍 Explanation\n\n- `GROUP BY diagnosis_name` creates one row per diagnosis.\n- `COUNT(*)` counts how many times that diagnosis was recorded.\n- `ORDER BY diagnosis_count DESC, diagnosis_name ASC` ranks most frequent diagnoses first with a deterministic name tie-breaker.\n- `LIMIT 10` returns the top 10 diagnoses.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT diagnosis_name, diagnosis_count FROM (SELECT diagnosis_name, diagnosis_count, ROW_NUMBER() OVER (ORDER BY diagnosis_count DESC, diagnosis_name ASC) AS rn FROM (SELECT diagnosis_name, COUNT(*) AS diagnosis_count FROM diagnoses GROUP BY diagnosis_name) diagnosis_counts) ranked WHERE rn <= 10 ORDER BY diagnosis_count DESC, diagnosis_name ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate diagnosis counts first, rank them with `ROW_NUMBER`, and keep the top 10.\n\n## 🔍 Explanation\n\n- The inner query counts rows per diagnosis.\n- `ROW_NUMBER()` ranks diagnoses using the required order.\n- `rn <= 10` keeps exactly 10 rows.\n- The final `ORDER BY` matches the configured comparator order.",
      },
    ],
  },
  {
    code: "HOSPITAL_062",
    approaches: [
      {
        approach_title: "DISTINCT abnormal patients",
        approach_type: "join_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT p.id, p.patient_code, p.full_name FROM patients p JOIN lab_orders lo ON p.id = lo.patient_id JOIN lab_order_items loi ON lo.id = loi.lab_order_id JOIN lab_results lr ON loi.id = lr.lab_order_item_id WHERE lr.interpretation IN ('high', 'low', 'critical');",
        explanation:
          "## 🧠 Approach\n\nJoin patients through lab orders and lab results, then return patients with abnormal or critical results.\n\n## 🔍 Explanation\n\n- `lab_orders` links lab activity to patients.\n- `lab_order_items` links each order to individual tests.\n- `lab_results` stores the result interpretation.\n- `WHERE lr.interpretation IN ('high', 'low', 'critical')` keeps abnormal result types.\n- `DISTINCT` avoids duplicate patients when a patient has multiple abnormal results.",
      },
      {
        approach_title: "EXISTS abnormal result",
        approach_type: "semi_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT p.id, p.patient_code, p.full_name FROM patients p WHERE EXISTS (SELECT 1 FROM lab_orders lo JOIN lab_order_items loi ON lo.id = loi.lab_order_id JOIN lab_results lr ON loi.id = lr.lab_order_item_id WHERE lo.patient_id = p.id AND lr.interpretation IN ('high', 'low', 'critical'));",
        explanation:
          "## 🧠 Approach\n\nUse `EXISTS` to check whether a patient has at least one abnormal or critical lab result.\n\n## 🔍 Explanation\n\n- The subquery searches for matching lab results for the current patient.\n- `EXISTS` naturally returns each patient once.\n- This avoids needing `DISTINCT` while preserving the same existence logic.",
      },
    ],
  },
  {
    code: "HOSPITAL_063",
    approaches: [
      {
        approach_title: "Monthly collection",
        approach_type: "date_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DATE_TRUNC('month', paid_at) AS payment_month, ROUND(SUM(amount_paid), 2) AS total_collected_amount FROM payments WHERE payment_status = 'successful' AND paid_at IS NOT NULL GROUP BY DATE_TRUNC('month', paid_at);",
        explanation:
          "## 🧠 Approach\n\nGroup successful payments by payment month and sum the collected amount.\n\n## 🔍 Explanation\n\n- `WHERE payment_status = 'successful'` keeps only collected payments.\n- `paid_at IS NOT NULL` ensures payments can be assigned to a month.\n- `DATE_TRUNC('month', paid_at)` groups payments into calendar months.\n- `ROUND(SUM(amount_paid), 2)` returns monthly collection totals rounded to two decimals.",
      },
    ],
  },
  {
    code: "HOSPITAL_064",
    approaches: [
      {
        approach_title: "Schedule day average",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ds.doctor_id, ds.day_of_week, ROUND(AVG(slot_appointments.appointment_count), 2) AS avg_appointments_per_slot_day FROM doctor_schedules ds JOIN (SELECT doctor_id, EXTRACT(DOW FROM scheduled_start_at) AS day_of_week, COUNT(*) AS appointment_count FROM appointments GROUP BY doctor_id, EXTRACT(DOW FROM scheduled_start_at), DATE(scheduled_start_at)) slot_appointments ON ds.doctor_id = slot_appointments.doctor_id AND ds.day_of_week = slot_appointments.day_of_week WHERE ds.is_active = true GROUP BY ds.doctor_id, ds.day_of_week;",
        explanation:
          "## 🧠 Approach\n\nCount appointments per doctor per calendar date, match those counts to active schedule weekdays, then average them.\n\n## 🔍 Explanation\n\n- The subquery counts appointments per doctor, weekday, and date.\n- `EXTRACT(DOW FROM scheduled_start_at)` aligns appointment weekday with `doctor_schedules.day_of_week`.\n- Active schedules only are included using `ds.is_active = true`.\n- The outer `AVG` calculates average appointment count for that doctor schedule weekday.",
      },
    ],
  },
  {
    code: "HOSPITAL_065",
    approaches: [
      {
        approach_title: "GROUP open encounters",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT department_id, COUNT(*) AS open_encounters FROM encounters WHERE encounter_status = 'open' GROUP BY department_id;",
        explanation:
          "## 🧠 Approach\n\nFilter open encounters and count them per department.\n\n## 🔍 Explanation\n\n- `WHERE encounter_status = 'open'` keeps currently open encounters.\n- `GROUP BY department_id` creates one row per department.\n- `COUNT(*)` returns the number of open encounters for each department.",
      },
    ],
  },
  {
    code: "HOSPITAL_066",
    approaches: [
      {
        approach_title: "Invoice coverage split",
        approach_type: "select",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, invoice_number, total_amount, insurance_covered_amount, patient_payable_amount FROM invoices;",
        explanation:
          "## 🧠 Approach\n\nSelect each invoice with its total, insurance-covered amount, and patient-payable amount.\n\n## 🔍 Explanation\n\n- All required columns are already stored in `invoices`.\n- No joins or filters are needed.\n- The selected columns exactly match the expected output.",
      },
    ],
  },
  {
    code: "HOSPITAL_067",
    approaches: [
      {
        approach_title: "LEFT JOIN no appointments",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT d.id, d.full_name, d.department_id FROM doctors d LEFT JOIN appointments a ON d.id = a.doctor_id WHERE d.is_active = true GROUP BY d.id, d.full_name, d.department_id HAVING COUNT(a.id) = 0;",
        explanation:
          "## 🧠 Approach\n\nLeft join active doctors to appointments and keep doctors with zero appointment matches.\n\n## 🔍 Explanation\n\n- `d.is_active = true` limits the result to active doctors.\n- `LEFT JOIN` keeps active doctors even when they have no appointments.\n- `COUNT(a.id) = 0` identifies doctors with no matching appointment rows.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT d.id, d.full_name, d.department_id FROM doctors d WHERE d.is_active = true AND NOT EXISTS (SELECT 1 FROM appointments a WHERE a.doctor_id = d.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to find active doctors who have never had an appointment.\n\n## 🔍 Explanation\n\n- The outer query starts with active doctors.\n- The subquery checks for any appointment linked to the doctor.\n- `NOT EXISTS` keeps only doctors where no appointment exists.\n- This is a clean anti-join alternative to `LEFT JOIN + HAVING`.",
      },
    ],
  },
  {
    code: "HOSPITAL_068",
    approaches: [
      {
        approach_title: "CASE cancellation rate",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT department_id, ROUND(100.0 * SUM(CASE WHEN appointment_status = 'cancelled' THEN 1 ELSE 0 END) / COUNT(*), 2) AS cancellation_rate_pct FROM appointments GROUP BY department_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate cancelled appointments as a percentage of all appointments per department.\n\n## 🔍 Explanation\n\n- `SUM(CASE WHEN appointment_status = 'cancelled' THEN 1 ELSE 0 END)` counts cancelled appointments.\n- `COUNT(*)` counts all appointments in the department.\n- Multiplying by `100.0` forces decimal percentage calculation.\n- `ROUND(..., 2)` formats the cancellation rate to two decimals.",
      },
      {
        approach_title: "FILTER cancellation rate",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT department_id, ROUND(100.0 * COUNT(*) FILTER (WHERE appointment_status = 'cancelled') / COUNT(*), 2) AS cancellation_rate_pct FROM appointments GROUP BY department_id;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL `FILTER` syntax to count cancelled appointments directly inside the aggregate.\n\n## 🔍 Explanation\n\n- `COUNT(*) FILTER (...)` counts only cancelled appointments.\n- `COUNT(*)` remains the total appointment count.\n- The result is equivalent to the `CASE` approach and is often cleaner in PostgreSQL.",
      },
    ],
  },
  {
    code: "HOSPITAL_069",
    approaches: [
      {
        approach_title: "CASE completion rate",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT p.id AS procedure_id, p.procedure_name, ROUND(100.0 * SUM(CASE WHEN po.procedure_status = 'completed' THEN 1 ELSE 0 END) / COUNT(po.id), 2) AS completion_rate_pct FROM procedure_orders po JOIN procedures p ON po.procedure_id = p.id GROUP BY p.id, p.procedure_name;",
        explanation:
          "## 🧠 Approach\n\nJoin procedure orders to procedures and calculate completed-order percentage per procedure.\n\n## 🔍 Explanation\n\n- `procedure_orders` stores each ordered procedure and its status.\n- `procedures` provides procedure id and name.\n- The `CASE` expression counts completed orders.\n- Dividing by `COUNT(po.id)` gives completion rate, and multiplying by `100.0` converts it to a percentage.",
      },
      {
        approach_title: "FILTER completion rate",
        approach_type: "join_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT p.id AS procedure_id, p.procedure_name, ROUND(100.0 * COUNT(*) FILTER (WHERE po.procedure_status = 'completed') / COUNT(po.id), 2) AS completion_rate_pct FROM procedure_orders po JOIN procedures p ON po.procedure_id = p.id GROUP BY p.id, p.procedure_name;",
        explanation:
          "## 🧠 Approach\n\nUse `FILTER` to count completed procedure orders and divide by total procedure orders.\n\n## 🔍 Explanation\n\n- `COUNT(*) FILTER (WHERE po.procedure_status = 'completed')` counts completed orders.\n- `COUNT(po.id)` counts all orders for that procedure.\n- This is equivalent to the `CASE` expression and is concise in PostgreSQL.",
      },
    ],
  },
  {
    code: "HOSPITAL_070",
    approaches: [
      {
        approach_title: "COUNT distinct types",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT patient_id, COUNT(DISTINCT encounter_type) AS distinct_encounter_types FROM encounters GROUP BY patient_id HAVING COUNT(DISTINCT encounter_type) > 1;",
        explanation:
          "## 🧠 Approach\n\nCount distinct encounter types per patient and keep patients with more than one type.\n\n## 🔍 Explanation\n\n- `COUNT(DISTINCT encounter_type)` counts unique encounter categories for each patient.\n- `GROUP BY patient_id` creates one row per patient.\n- `HAVING ... > 1` filters after aggregation to keep patients with multiple encounter types.",
      },
      {
        approach_title: "Subquery distinct types",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT patient_id, distinct_encounter_types FROM (SELECT patient_id, COUNT(DISTINCT encounter_type) AS distinct_encounter_types FROM encounters GROUP BY patient_id) patient_types WHERE distinct_encounter_types > 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate distinct encounter type count first, then filter the computed result.\n\n## 🔍 Explanation\n\n- The inner query counts distinct encounter types per patient.\n- The outer query keeps rows where the count is greater than one.\n- This is equivalent to `GROUP BY + HAVING` while allowing reuse of the aggregate alias.",
      },
    ],
  },
  {
    code: "HOSPITAL_071",
    approaches: [
      {
        approach_title: "Top patient departments",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT department_id, COUNT(DISTINCT patient_id) AS total_patients FROM encounters WHERE department_id IS NOT NULL GROUP BY department_id ORDER BY total_patients DESC, department_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount distinct patients per department and return the top five departments by patient volume.\n\n## 🔍 Explanation\n\n- `WHERE department_id IS NOT NULL` keeps only encounters tied to a department.\n- `COUNT(DISTINCT patient_id)` counts each patient once per department, even if they had multiple encounters.\n- `ORDER BY total_patients DESC, department_id ASC` ranks highest patient volume first and uses department id as a tie-breaker.\n- `LIMIT 5` returns exactly the top five departments.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT department_id, total_patients FROM (SELECT department_id, total_patients, ROW_NUMBER() OVER (ORDER BY total_patients DESC, department_id ASC) AS rn FROM (SELECT department_id, COUNT(DISTINCT patient_id) AS total_patients FROM encounters WHERE department_id IS NOT NULL GROUP BY department_id) department_counts) ranked WHERE rn <= 5 ORDER BY total_patients DESC, department_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank departments by distinct patient count and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query calculates distinct patient volume per department.\n- `ROW_NUMBER()` applies the configured ranking order.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering is included because this question requires sorted output.",
      },
    ],
  },
  {
    code: "HOSPITAL_072",
    approaches: [
      {
        approach_title: "Room bed utilization",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT r.id AS room_id, r.room_number, ROUND(100.0 * SUM(CASE WHEN b.bed_status = 'occupied' THEN 1 ELSE 0 END) / COUNT(b.id), 2) AS utilization_pct FROM rooms r JOIN beds b ON r.id = b.room_id GROUP BY r.id, r.room_number;",
        explanation:
          "## 🧠 Approach\n\nJoin rooms to beds and calculate occupied-bed percentage per room.\n\n## 🔍 Explanation\n\n- `JOIN beds` gives all beds belonging to each room.\n- The `CASE` expression counts occupied beds as 1 and other beds as 0.\n- Dividing by `COUNT(b.id)` gives the occupied-bed ratio.\n- Multiplying by `100.0` converts the ratio to a percentage and avoids integer division.",
      },
      {
        approach_title: "FILTER utilization",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT r.id AS room_id, r.room_number, ROUND(100.0 * COUNT(*) FILTER (WHERE b.bed_status = 'occupied') / COUNT(b.id), 2) AS utilization_pct FROM rooms r JOIN beds b ON r.id = b.room_id GROUP BY r.id, r.room_number;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL `FILTER` to count occupied beds directly inside the aggregate.\n\n## 🔍 Explanation\n\n- `COUNT(*) FILTER (WHERE b.bed_status = 'occupied')` counts occupied beds.\n- `COUNT(b.id)` counts total beds in the room.\n- The result is equivalent to the `CASE` version and is concise in PostgreSQL.",
      },
    ],
  },
  {
    code: "HOSPITAL_073",
    approaches: [
      {
        approach_title: "Top doctor revenue",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT e.attending_doctor_id AS doctor_id, ROUND(SUM(i.total_amount), 2) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id WHERE e.attending_doctor_id IS NOT NULL GROUP BY e.attending_doctor_id ORDER BY total_revenue DESC, doctor_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nJoin invoices to encounters, aggregate revenue by attending doctor, and return the top ten doctors.\n\n## 🔍 Explanation\n\n- `encounters.attending_doctor_id` identifies the doctor associated with the encounter.\n- `SUM(i.total_amount)` calculates revenue generated through encounter invoices.\n- `WHERE e.attending_doctor_id IS NOT NULL` excludes unattributed encounters.\n- The final `ORDER BY` and `LIMIT 10` return the highest revenue doctors with deterministic tie-breaking.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT doctor_id, total_revenue FROM (SELECT doctor_id, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, doctor_id ASC) AS rn FROM (SELECT e.attending_doctor_id AS doctor_id, ROUND(SUM(i.total_amount), 2) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id WHERE e.attending_doctor_id IS NOT NULL GROUP BY e.attending_doctor_id) doctor_revenue) ranked WHERE rn <= 10 ORDER BY total_revenue DESC, doctor_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank doctor revenue totals with `ROW_NUMBER`, then keep the top ten.\n\n## 🔍 Explanation\n\n- The inner query calculates total revenue per attending doctor.\n- `ROW_NUMBER()` ranks doctors using the same order as the expected query.\n- `rn <= 10` keeps exactly ten rows.\n- The final ordering matches the comparator configuration.",
      },
    ],
  },
  {
    code: "HOSPITAL_074",
    approaches: [
      {
        approach_title: "GROUP no-shows",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT patient_id, COUNT(*) AS no_show_count FROM appointments WHERE appointment_status = 'no_show' GROUP BY patient_id HAVING COUNT(*) > 2;",
        explanation:
          "## 🧠 Approach\n\nFilter no-show appointments, count them per patient, and keep patients with more than two no-shows.\n\n## 🔍 Explanation\n\n- `WHERE appointment_status = 'no_show'` keeps only missed appointments.\n- `GROUP BY patient_id` counts no-shows separately per patient.\n- `HAVING COUNT(*) > 2` filters patients after aggregation.",
      },
      {
        approach_title: "Subquery no-shows",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT patient_id, no_show_count FROM (SELECT patient_id, COUNT(*) AS no_show_count FROM appointments WHERE appointment_status = 'no_show' GROUP BY patient_id) patient_no_shows WHERE no_show_count > 2;",
        explanation:
          "## 🧠 Approach\n\nCalculate no-show count per patient first, then filter by the computed count.\n\n## 🔍 Explanation\n\n- The inner query counts no-show appointments per patient.\n- The outer query filters `no_show_count > 2`.\n- This is equivalent to the `GROUP BY + HAVING` approach and can improve readability.",
      },
    ],
  },
  {
    code: "HOSPITAL_075",
    approaches: [
      {
        approach_title: "CASE rejection rate",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ipr.id AS insurance_provider_id, ipr.provider_name, ROUND(100.0 * SUM(CASE WHEN ic.claim_status = 'rejected' THEN 1 ELSE 0 END) / COUNT(ic.id), 2) AS rejection_rate_pct FROM insurance_claims ic JOIN insurance_policies ip ON ic.insurance_policy_id = ip.id JOIN insurance_providers ipr ON ip.insurance_provider_id = ipr.id GROUP BY ipr.id, ipr.provider_name;",
        explanation:
          "## 🧠 Approach\n\nJoin claims to policies and providers, then calculate rejected-claim percentage per provider.\n\n## 🔍 Explanation\n\n- `insurance_claims` stores claim status.\n- `insurance_policies` connects each claim to a provider through the policy.\n- `insurance_providers` provides provider identity and name.\n- The `CASE` expression counts rejected claims.\n- Dividing by all claims for the provider and multiplying by `100.0` gives the rejection percentage.",
      },
      {
        approach_title: "FILTER rejection rate",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT ipr.id AS insurance_provider_id, ipr.provider_name, ROUND(100.0 * COUNT(*) FILTER (WHERE ic.claim_status = 'rejected') / COUNT(ic.id), 2) AS rejection_rate_pct FROM insurance_claims ic JOIN insurance_policies ip ON ic.insurance_policy_id = ip.id JOIN insurance_providers ipr ON ip.insurance_provider_id = ipr.id GROUP BY ipr.id, ipr.provider_name;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL `FILTER` to count rejected claims directly.\n\n## 🔍 Explanation\n\n- `COUNT(*) FILTER (WHERE ic.claim_status = 'rejected')` counts only rejected claims.\n- `COUNT(ic.id)` counts all claims for the provider.\n- This is equivalent to the `CASE` version and is often cleaner in PostgreSQL.",
      },
    ],
  },
  {
    code: "HOSPITAL_076",
    approaches: [
      {
        approach_title: "ROW_NUMBER top diagnosis",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH diagnosis_counts AS (SELECT e.department_id, d.diagnosis_name, COUNT(*) AS diagnosis_count, ROW_NUMBER() OVER (PARTITION BY e.department_id ORDER BY COUNT(*) DESC, d.diagnosis_name ASC) AS rn FROM diagnoses d JOIN encounters e ON d.encounter_id = e.id WHERE e.department_id IS NOT NULL GROUP BY e.department_id, d.diagnosis_name) SELECT department_id, diagnosis_name, diagnosis_count FROM diagnosis_counts WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nCount diagnoses per department, rank them within each department, and return the most frequent diagnosis per department.\n\n## 🔍 Explanation\n\n- `diagnoses` contains diagnosis names.\n- `encounters` provides the department for each diagnosis through the encounter.\n- `ROW_NUMBER()` ranks diagnoses inside each department by count descending and diagnosis name ascending.\n- `rn = 1` returns exactly one top diagnosis per department.",
      },
    ],
  },
  {
    code: "HOSPITAL_077",
    approaches: [
      {
        approach_title: "Longest current stays",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, patient_id, admitted_at, ROUND(EXTRACT(EPOCH FROM (NOW() - admitted_at)) / 86400, 2) AS stay_days FROM admissions WHERE admission_status = 'admitted' ORDER BY stay_days DESC, id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate ongoing stay duration for currently admitted patients and return the top ten longest stays.\n\n## 🔍 Explanation\n\n- `WHERE admission_status = 'admitted'` keeps only current admissions.\n- `NOW() - admitted_at` gives the ongoing stay interval.\n- `EXTRACT(EPOCH FROM ...) / 86400` converts the interval to days.\n- `ORDER BY stay_days DESC, id ASC LIMIT 10` returns the longest ongoing stays with deterministic tie-breaking.",
      },
      {
        approach_title: "ROW_NUMBER top stays",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, patient_id, admitted_at, stay_days FROM (SELECT id, patient_id, admitted_at, ROUND(EXTRACT(EPOCH FROM (NOW() - admitted_at)) / 86400, 2) AS stay_days, ROW_NUMBER() OVER (ORDER BY ROUND(EXTRACT(EPOCH FROM (NOW() - admitted_at)) / 86400, 2) DESC, id ASC) AS rn FROM admissions WHERE admission_status = 'admitted') ranked WHERE rn <= 10 ORDER BY stay_days DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank current admissions by ongoing stay length and keep the top ten.\n\n## 🔍 Explanation\n\n- The inner query calculates current stay duration in days.\n- `ROW_NUMBER()` ranks admissions using the required ordering.\n- `rn <= 10` keeps exactly ten rows.\n- The final order matches the configured comparator ordering.",
      },
    ],
  },
  {
    code: "HOSPITAL_078",
    approaches: [
      {
        approach_title: "Schedule utilization",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH scheduled_slots AS (SELECT doctor_id, COUNT(*) * AVG(max_patients_per_slot) AS total_slots FROM doctor_schedules WHERE is_active = true GROUP BY doctor_id), completed_appts AS (SELECT doctor_id, COUNT(*) AS completed_count FROM appointments WHERE appointment_status = 'completed' GROUP BY doctor_id) SELECT s.doctor_id, ROUND(COALESCE(c.completed_count, 0)::numeric / NULLIF(s.total_slots, 0), 2) AS utilization_ratio FROM scheduled_slots s LEFT JOIN completed_appts c ON s.doctor_id = c.doctor_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate active scheduled capacity per doctor and divide completed appointment count by that capacity.\n\n## 🔍 Explanation\n\n- `scheduled_slots` estimates total capacity from active schedule rows and max patients per slot.\n- `completed_appts` counts completed appointments per doctor.\n- `LEFT JOIN` keeps scheduled doctors even if they have zero completed appointments.\n- `COALESCE` turns missing completed counts into zero.\n- `NULLIF` prevents division by zero.",
      },
    ],
  },
  {
    code: "HOSPITAL_079",
    approaches: [
      {
        approach_title: "LEAD readmission",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH ordered_admissions AS (SELECT patient_id, admitted_at, discharge_at, LEAD(admitted_at) OVER (PARTITION BY patient_id ORDER BY admitted_at) AS next_admission_at FROM admissions WHERE discharge_at IS NOT NULL) SELECT patient_id, discharge_at, next_admission_at FROM ordered_admissions WHERE next_admission_at <= discharge_at + INTERVAL '30 days';",
        explanation:
          "## 🧠 Approach\n\nUse `LEAD` to compare each discharged admission with the patient's next admission.\n\n## 🔍 Explanation\n\n- `LEAD(admitted_at)` gets the immediately next admission timestamp for the same patient.\n- `WHERE discharge_at IS NOT NULL` keeps admissions with a known discharge time.\n- The final filter checks whether the next admission happened within 30 days of discharge.\n- A self-join against any later admission would not be equivalent because this logic checks the immediate next admission.",
      },
    ],
  },
  {
    code: "HOSPITAL_080",
    approaches: [
      {
        approach_title: "ROW_NUMBER monthly top",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH monthly_patient_revenue AS (SELECT DATE_TRUNC('month', created_at) AS billing_month, patient_id, SUM(total_amount) AS total_revenue, ROW_NUMBER() OVER (PARTITION BY DATE_TRUNC('month', created_at) ORDER BY SUM(total_amount) DESC, patient_id ASC) AS rn FROM invoices GROUP BY DATE_TRUNC('month', created_at), patient_id) SELECT billing_month, patient_id, total_revenue FROM monthly_patient_revenue WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nAggregate invoice revenue by month and patient, rank patients within each month, and return the top billed patient per month.\n\n## 🔍 Explanation\n\n- `DATE_TRUNC('month', created_at)` groups invoices into billing months.\n- `SUM(total_amount)` calculates patient billing for each month.\n- `ROW_NUMBER()` ranks patients inside each month by revenue descending and patient id ascending.\n- `rn = 1` returns exactly one highest billed patient per month.",
      },
    ],
  },
  {
    code: "HOSPITAL_081",
    approaches: [
      {
        approach_title: "ROW_NUMBER occupancy",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH department_bed_usage AS (SELECT r.department_id, COUNT(*) AS occupied_beds, ROW_NUMBER() OVER (ORDER BY COUNT(*) DESC, r.department_id ASC) AS rn FROM beds b JOIN rooms r ON b.room_id = r.id WHERE b.bed_status = 'occupied' AND r.department_id IS NOT NULL GROUP BY r.department_id) SELECT department_id, occupied_beds FROM department_bed_usage WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nCount occupied beds per department, rank departments by occupied-bed count, and return the top department.\n\n## 🔍 Explanation\n\n- `beds` stores current bed status.\n- `rooms` links beds to departments.\n- `WHERE b.bed_status = 'occupied'` counts only occupied beds.\n- `ROW_NUMBER()` picks exactly one department, using department id as the tie-breaker.",
      },
    ],
  },
  {
    code: "HOSPITAL_082",
    approaches: [
      {
        approach_title: "LAG critical result",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH patient_lab_results AS (SELECT lo.patient_id, lr.resulted_at, lr.interpretation, LAG(lr.interpretation) OVER (PARTITION BY lo.patient_id ORDER BY lr.resulted_at, lr.id) AS prev_interpretation FROM lab_results lr JOIN lab_order_items loi ON lr.lab_order_item_id = loi.id JOIN lab_orders lo ON loi.lab_order_id = lo.id) SELECT DISTINCT patient_id FROM patient_lab_results WHERE interpretation = 'critical' AND prev_interpretation = 'critical';",
        explanation:
          "## 🧠 Approach\n\nOrder each patient's lab results over time and compare every result with the previous one.\n\n## 🔍 Explanation\n\n- `lab_results` stores result interpretation and result time.\n- Joining through `lab_order_items` and `lab_orders` gives the patient id.\n- `LAG(lr.interpretation)` gets the previous result interpretation for the same patient.\n- The final filter keeps patients where the current and previous results are both critical.\n- `DISTINCT` returns each qualifying patient once.",
      },
    ],
  },
  {
    code: "HOSPITAL_083",
    approaches: [
      {
        approach_title: "DENSE_RANK revenue",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH doctor_department_revenue AS (SELECT e.department_id, e.attending_doctor_id AS doctor_id, SUM(i.total_amount) AS total_revenue FROM encounters e JOIN invoices i ON i.encounter_id = e.id WHERE e.department_id IS NOT NULL AND e.attending_doctor_id IS NOT NULL GROUP BY e.department_id, e.attending_doctor_id) SELECT department_id, doctor_id, total_revenue, DENSE_RANK() OVER (PARTITION BY department_id ORDER BY total_revenue DESC, doctor_id ASC) AS revenue_rank FROM doctor_department_revenue;",
        explanation:
          "## 🧠 Approach\n\nCalculate doctor revenue inside each department and apply dense ranking per department.\n\n## 🔍 Explanation\n\n- `doctor_department_revenue` aggregates invoice revenue by department and attending doctor.\n- `DENSE_RANK()` ranks doctors within each department.\n- The order uses revenue descending and doctor id ascending, matching the expected ranking behavior.\n- Do not replace this with `RANK()` or `ROW_NUMBER()` because they produce different rank semantics.",
      },
    ],
  },
  {
    code: "HOSPITAL_084",
    approaches: [
      {
        approach_title: "ROW_NUMBER max wait",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH doctor_waits AS (SELECT id, doctor_id, patient_id, scheduled_start_at, consultation_started_at, ROUND(EXTRACT(EPOCH FROM (consultation_started_at - scheduled_start_at)) / 60, 2) AS wait_time_mins, ROW_NUMBER() OVER (PARTITION BY doctor_id ORDER BY EXTRACT(EPOCH FROM (consultation_started_at - scheduled_start_at)) DESC, id ASC) AS rn FROM appointments WHERE consultation_started_at IS NOT NULL) SELECT id, doctor_id, patient_id, scheduled_start_at, consultation_started_at, wait_time_mins FROM doctor_waits WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate wait time for each started appointment, rank waits per doctor, and return the longest wait appointment.\n\n## 🔍 Explanation\n\n- `consultation_started_at - scheduled_start_at` gives the appointment wait interval.\n- `EXTRACT(EPOCH FROM ...) / 60` converts the interval into minutes.\n- `PARTITION BY doctor_id` finds the longest wait separately per doctor.\n- `ROW_NUMBER()` returns exactly one appointment per doctor using appointment id as the tie-breaker.",
      },
    ],
  },
  {
    code: "HOSPITAL_085",
    approaches: [
      {
        approach_title: "Underpaid claims",
        approach_type: "join_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ic.id, ic.claim_number, ic.invoice_id, i.insurance_covered_amount, ic.approved_amount FROM insurance_claims ic JOIN invoices i ON ic.invoice_id = i.id WHERE ic.approved_amount < i.insurance_covered_amount;",
        explanation:
          "## 🧠 Approach\n\nJoin insurance claims to invoices and compare approved claim amount with the invoice's insurance-covered amount.\n\n## 🔍 Explanation\n\n- `insurance_claims` stores the approved amount.\n- `invoices` stores the expected insurance-covered amount.\n- `ic.approved_amount < i.insurance_covered_amount` identifies underpayment cases.\n- The selected columns show both values needed to explain the gap.",
      },
    ],
  },
  {
    code: "HOSPITAL_086",
    approaches: [
      {
        approach_title: "LAG encounter gap",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH ordered_encounters AS (SELECT patient_id, id AS encounter_id, started_at, LAG(started_at) OVER (PARTITION BY patient_id ORDER BY started_at, id) AS previous_encounter_at FROM encounters) SELECT patient_id, encounter_id, previous_encounter_at, started_at, ROUND(EXTRACT(EPOCH FROM (started_at - previous_encounter_at)) / 86400, 2) AS gap_days FROM ordered_encounters WHERE previous_encounter_at IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nOrder encounters per patient and compare each encounter with the previous encounter.\n\n## 🔍 Explanation\n\n- `LAG(started_at)` gets the previous encounter timestamp for the same patient.\n- `ORDER BY started_at, id` makes the sequence deterministic.\n- The outer query excludes the first encounter because it has no previous encounter.\n- The timestamp difference is converted into days and rounded to two decimals.",
      },
    ],
  },
  {
    code: "HOSPITAL_087",
    approaches: [
      {
        approach_title: "ROW_NUMBER medication",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH doctor_medication_counts AS (SELECT p.doctor_id, pi.medication_id, COUNT(*) AS prescription_count, ROW_NUMBER() OVER (PARTITION BY p.doctor_id ORDER BY COUNT(*) DESC, pi.medication_id ASC) AS rn FROM prescriptions p JOIN prescription_items pi ON p.id = pi.prescription_id WHERE p.doctor_id IS NOT NULL GROUP BY p.doctor_id, pi.medication_id) SELECT doctor_id, medication_id, prescription_count FROM doctor_medication_counts WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nCount medication prescription frequency per doctor, rank medications per doctor, and return the most prescribed one.\n\n## 🔍 Explanation\n\n- `prescriptions` identifies the prescribing doctor.\n- `prescription_items` identifies medications inside each prescription.\n- `COUNT(*)` counts how frequently each medication was prescribed by a doctor.\n- `ROW_NUMBER()` returns exactly one top medication per doctor, breaking ties by medication id.",
      },
    ],
  },
  {
    code: "HOSPITAL_088",
    approaches: [
      {
        approach_title: "Coverage window filter",
        approach_type: "join_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT i.id, i.invoice_number, i.patient_id, i.insurance_policy_id, i.created_at, ip.coverage_start_date, ip.coverage_end_date FROM invoices i JOIN insurance_policies ip ON i.insurance_policy_id = ip.id WHERE DATE(i.created_at) < ip.coverage_start_date OR (ip.coverage_end_date IS NOT NULL AND DATE(i.created_at) > ip.coverage_end_date);",
        explanation:
          "## 🧠 Approach\n\nJoin invoices to insurance policies and find invoices created outside the policy coverage period.\n\n## 🔍 Explanation\n\n- `coverage_start_date` and `coverage_end_date` define the valid policy window.\n- `DATE(i.created_at) < ip.coverage_start_date` catches invoices before coverage started.\n- The second condition catches invoices after coverage ended.\n- `coverage_end_date IS NOT NULL` allows open-ended active policies to remain valid.",
      },
    ],
  },
  {
    code: "HOSPITAL_089",
    approaches: [
      {
        approach_title: "Readmission flags",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH readmission_flags AS (SELECT department_id, patient_id, discharge_at, LEAD(admitted_at) OVER (PARTITION BY patient_id ORDER BY admitted_at) AS next_admission_at FROM admissions WHERE discharge_at IS NOT NULL AND department_id IS NOT NULL) SELECT department_id, ROUND(100.0 * SUM(CASE WHEN next_admission_at <= discharge_at + INTERVAL '30 days' THEN 1 ELSE 0 END) / COUNT(*), 2) AS readmission_rate_pct FROM readmission_flags GROUP BY department_id;",
        explanation:
          "## 🧠 Approach\n\nUse each patient's next admission to flag 30-day readmissions, then calculate department-level percentage.\n\n## 🔍 Explanation\n\n- `LEAD(admitted_at)` gets the patient's immediately next admission.\n- The `CASE` expression marks whether that next admission happened within 30 days of discharge.\n- Grouping by department calculates readmission rate per department.\n- Multiplying by `100.0` produces a percentage and avoids integer division.",
      },
      {
        approach_title: "FILTER readmission rate",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH readmission_flags AS (SELECT department_id, patient_id, discharge_at, LEAD(admitted_at) OVER (PARTITION BY patient_id ORDER BY admitted_at) AS next_admission_at FROM admissions WHERE discharge_at IS NOT NULL AND department_id IS NOT NULL) SELECT department_id, ROUND(100.0 * COUNT(*) FILTER (WHERE next_admission_at <= discharge_at + INTERVAL '30 days') / COUNT(*), 2) AS readmission_rate_pct FROM readmission_flags GROUP BY department_id;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL `FILTER` syntax to count 30-day readmissions directly.\n\n## 🔍 Explanation\n\n- The CTE produces one row per discharged admission with the next admission timestamp.\n- `FILTER` counts only rows that qualify as readmissions within 30 days.\n- Dividing by all discharged rows in the department gives the rate.",
      },
    ],
  },
  {
    code: "HOSPITAL_090",
    approaches: [
      {
        approach_title: "LAG monthly revenue",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH monthly_revenue AS (SELECT e.department_id, DATE_TRUNC('month', i.created_at) AS revenue_month, SUM(i.total_amount) AS total_revenue FROM invoices i JOIN encounters e ON i.encounter_id = e.id WHERE e.department_id IS NOT NULL GROUP BY e.department_id, DATE_TRUNC('month', i.created_at)), revenue_with_prev AS (SELECT department_id, revenue_month, total_revenue, LAG(total_revenue) OVER (PARTITION BY department_id ORDER BY revenue_month) AS prev_month_revenue FROM monthly_revenue) SELECT department_id, revenue_month, total_revenue, prev_month_revenue, ROUND(total_revenue - prev_month_revenue, 2) AS revenue_growth FROM revenue_with_prev WHERE prev_month_revenue IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nAggregate monthly revenue by department, compare each month with the previous month, and calculate revenue growth.\n\n## 🔍 Explanation\n\n- `monthly_revenue` calculates invoice revenue per department per month.\n- `LAG(total_revenue)` fetches the previous month revenue for the same department.\n- Rows without a previous month are excluded.\n- `ROUND(total_revenue - prev_month_revenue, 2)` calculates month-over-month growth.",
      },
    ],
  },
  {
    code: "HOSPITAL_091",
    approaches: [
      {
        approach_title: "Capacity comparison",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH schedule_capacity AS (SELECT doctor_id, day_of_week, SUM(max_patients_per_slot) AS total_capacity FROM doctor_schedules WHERE is_active = true GROUP BY doctor_id, day_of_week), completed_appointments AS (SELECT doctor_id, EXTRACT(DOW FROM scheduled_start_at) AS day_of_week, COUNT(*) AS completed_count FROM appointments WHERE appointment_status = 'completed' GROUP BY doctor_id, EXTRACT(DOW FROM scheduled_start_at)) SELECT sc.doctor_id, sc.day_of_week, sc.total_capacity, COALESCE(ca.completed_count, 0) AS completed_count FROM schedule_capacity sc LEFT JOIN completed_appointments ca ON sc.doctor_id = ca.doctor_id AND sc.day_of_week = ca.day_of_week WHERE COALESCE(ca.completed_count, 0) > sc.total_capacity;",
        explanation:
          "## 🧠 Approach\n\nCalculate scheduled weekday capacity per doctor, calculate completed appointments for matching weekdays, and return overbooked schedule days.\n\n## 🔍 Explanation\n\n- `schedule_capacity` sums active schedule capacity using `max_patients_per_slot` per doctor and weekday.\n- `completed_appointments` counts completed appointments by doctor and appointment weekday.\n- `LEFT JOIN` keeps schedule rows even if there are zero completed appointments.\n- `COALESCE` converts missing completed counts to zero.\n- The final filter keeps only rows where completed appointments exceed scheduled capacity.",
      },
    ],
  },
  {
    code: "HOSPITAL_092",
    approaches: [
      {
        approach_title: "FILTER high low",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH patient_interpretations AS (SELECT lo.patient_id, COUNT(*) FILTER (WHERE lr.interpretation = 'high') AS high_count, COUNT(*) FILTER (WHERE lr.interpretation = 'low') AS low_count FROM lab_results lr JOIN lab_order_items loi ON lr.lab_order_item_id = loi.id JOIN lab_orders lo ON loi.lab_order_id = lo.id GROUP BY lo.patient_id) SELECT patient_id, high_count, low_count FROM patient_interpretations WHERE high_count > 0 AND low_count > 0;",
        explanation:
          "## 🧠 Approach\n\nCount high and low lab result interpretations per patient, then keep patients who have both.\n\n## 🔍 Explanation\n\n- Joining `lab_results → lab_order_items → lab_orders` gives the patient for each lab result.\n- `COUNT(*) FILTER (WHERE lr.interpretation = 'high')` counts high results.\n- `COUNT(*) FILTER (WHERE lr.interpretation = 'low')` counts low results.\n- The final filter keeps only patients with at least one of each.",
      },
      {
        approach_title: "CASE high low",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH patient_interpretations AS (SELECT lo.patient_id, SUM(CASE WHEN lr.interpretation = 'high' THEN 1 ELSE 0 END) AS high_count, SUM(CASE WHEN lr.interpretation = 'low' THEN 1 ELSE 0 END) AS low_count FROM lab_results lr JOIN lab_order_items loi ON lr.lab_order_item_id = loi.id JOIN lab_orders lo ON loi.lab_order_id = lo.id GROUP BY lo.patient_id) SELECT patient_id, high_count, low_count FROM patient_interpretations WHERE high_count > 0 AND low_count > 0;",
        explanation:
          "## 🧠 Approach\n\nUse `CASE` expressions to count high and low lab result rows per patient.\n\n## 🔍 Explanation\n\n- Each `CASE` returns 1 when the interpretation matches and 0 otherwise.\n- `SUM` converts those flags into counts.\n- This is equivalent to the `FILTER` version and is more portable across SQL dialects.",
      },
    ],
  },
  {
    code: "HOSPITAL_093",
    approaches: [
      {
        approach_title: "GROUP allocations",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT admission_id, COUNT(*) AS allocation_count FROM bed_allocations GROUP BY admission_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nGroup bed allocation records by admission and keep admissions with multiple allocations.\n\n## 🔍 Explanation\n\n- `GROUP BY admission_id` creates one row per admission.\n- `COUNT(*)` counts bed allocation records for that admission.\n- `HAVING COUNT(*) > 1` filters after aggregation to find admissions with more than one allocation.",
      },
      {
        approach_title: "Subquery allocations",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT admission_id, allocation_count FROM (SELECT admission_id, COUNT(*) AS allocation_count FROM bed_allocations GROUP BY admission_id) allocation_counts WHERE allocation_count > 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate allocation count per admission first, then filter the computed result.\n\n## 🔍 Explanation\n\n- The inner query returns one row per admission with `allocation_count`.\n- The outer query keeps only rows where `allocation_count > 1`.\n- This is equivalent to the `GROUP BY + HAVING` approach.",
      },
    ],
  },
  {
    code: "HOSPITAL_094",
    approaches: [
      {
        approach_title: "DENSE_RANK diversity",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH doctor_medication_diversity AS (SELECT p.doctor_id, COUNT(DISTINCT pi.medication_id) AS distinct_medications FROM prescriptions p JOIN prescription_items pi ON p.id = pi.prescription_id WHERE p.doctor_id IS NOT NULL GROUP BY p.doctor_id) SELECT doctor_id, distinct_medications, DENSE_RANK() OVER (ORDER BY distinct_medications DESC, doctor_id ASC) AS diversity_rank FROM doctor_medication_diversity;",
        explanation:
          "## 🧠 Approach\n\nCount distinct medications prescribed by each doctor and rank doctors by medication diversity.\n\n## 🔍 Explanation\n\n- `COUNT(DISTINCT pi.medication_id)` counts unique medications per doctor.\n- `DENSE_RANK()` ranks doctors by diversity without gaps.\n- `doctor_id ASC` is included in the window order, so doctors with the same diversity but different ids receive different rank positions according to the expected query semantics.\n- Do not replace this with `RANK()` or `ROW_NUMBER()` because the rank values can differ.",
      },
    ],
  },
  {
    code: "HOSPITAL_095",
    approaches: [
      {
        approach_title: "FIRST LAST BMI",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH bmi_history AS (SELECT patient_id, recorded_at, bmi, FIRST_VALUE(bmi) OVER (PARTITION BY patient_id ORDER BY recorded_at, id) AS first_bmi, LAST_VALUE(bmi) OVER (PARTITION BY patient_id ORDER BY recorded_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS last_bmi FROM vital_signs WHERE bmi IS NOT NULL) SELECT DISTINCT patient_id, first_bmi, last_bmi FROM bmi_history WHERE last_bmi > first_bmi;",
        explanation:
          "## 🧠 Approach\n\nUse window functions to compare each patient's earliest and latest recorded BMI.\n\n## 🔍 Explanation\n\n- `FIRST_VALUE(bmi)` gets the earliest BMI per patient based on `recorded_at, id`.\n- `LAST_VALUE(bmi)` gets the latest BMI, but it requires `ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING` to look across the full partition.\n- The final filter keeps patients whose latest BMI is greater than their earliest BMI.\n- `DISTINCT` returns each qualifying patient once.",
      },
    ],
  },
  {
    code: "HOSPITAL_096",
    approaches: [
      {
        approach_title: "Top procedure revenue",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT po.procedure_id, ROUND(SUM(ii.line_total), 2) AS total_revenue FROM invoice_items ii JOIN procedure_orders po ON ii.item_reference_id = po.id WHERE ii.item_type = 'procedure' GROUP BY po.procedure_id ORDER BY total_revenue DESC, po.procedure_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nJoin procedure invoice items to procedure orders, sum billed line totals per procedure, and return the top ten procedures.\n\n## 🔍 Explanation\n\n- `invoice_items` stores billed line totals.\n- For procedure rows, `item_reference_id` points to the `procedure_orders.id`.\n- `procedure_orders` provides the actual `procedure_id`.\n- `ROUND(SUM(ii.line_total), 2)` calculates revenue per procedure.\n- The final ordering returns the top ten procedures by revenue with procedure id as a tie-breaker.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT procedure_id, total_revenue FROM (SELECT procedure_id, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, procedure_id ASC) AS rn FROM (SELECT po.procedure_id, ROUND(SUM(ii.line_total), 2) AS total_revenue FROM invoice_items ii JOIN procedure_orders po ON ii.item_reference_id = po.id WHERE ii.item_type = 'procedure' GROUP BY po.procedure_id) procedure_revenue) ranked WHERE rn <= 10 ORDER BY total_revenue DESC, procedure_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank procedure revenue totals and keep the top ten.\n\n## 🔍 Explanation\n\n- The inner query calculates revenue per procedure.\n- `ROW_NUMBER()` ranks procedures using the required comparator order.\n- `rn <= 10` keeps exactly ten procedure rows.\n- The final `ORDER BY` preserves required output ordering.",
      },
    ],
  },
  {
    code: "HOSPITAL_097",
    approaches: [
      {
        approach_title: "Policy overlap self join",
        approach_type: "self_join",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH policy_pairs AS (SELECT ip1.patient_id, ip1.id AS policy_id_1, ip2.id AS policy_id_2, ip1.coverage_start_date AS start_1, ip1.coverage_end_date AS end_1, ip2.coverage_start_date AS start_2, ip2.coverage_end_date AS end_2 FROM insurance_policies ip1 JOIN insurance_policies ip2 ON ip1.patient_id = ip2.patient_id AND ip1.id < ip2.id) SELECT DISTINCT patient_id FROM policy_pairs WHERE COALESCE(end_1, DATE '9999-12-31') >= start_2 AND COALESCE(end_2, DATE '9999-12-31') >= start_1;",
        explanation:
          "## 🧠 Approach\n\nCompare each patient's policy pairs and return patients with overlapping coverage periods.\n\n## 🔍 Explanation\n\n- The self join pairs policies for the same patient using `ip1.id < ip2.id` to avoid duplicate/reversed pairs.\n- `COALESCE(end_date, DATE '9999-12-31')` treats open-ended policies as ongoing.\n- Two ranges overlap when each range starts before the other range ends.\n- `DISTINCT` returns each patient only once.",
      },
    ],
  },
  {
    code: "HOSPITAL_098",
    approaches: [
      {
        approach_title: "EXISTS follow-up",
        approach_type: "semi_join",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH completed_consults AS (SELECT id, patient_id, doctor_id, scheduled_start_at FROM appointments WHERE appointment_status = 'completed' AND appointment_type = 'consultation'), followups AS (SELECT cc.id AS appointment_id, CASE WHEN EXISTS (SELECT 1 FROM appointments a2 WHERE a2.patient_id = cc.patient_id AND a2.doctor_id = cc.doctor_id AND a2.appointment_type = 'follow_up' AND a2.scheduled_start_at > cc.scheduled_start_at) THEN 1 ELSE 0 END AS has_followup FROM completed_consults cc) SELECT ROUND(100.0 * SUM(has_followup) / COUNT(*), 2) AS follow_up_conversion_rate_pct FROM followups;",
        explanation:
          "## 🧠 Approach\n\nFor each completed consultation, check whether a later follow-up exists for the same patient-doctor pair, then calculate the percentage.\n\n## 🔍 Explanation\n\n- `completed_consults` defines the denominator: completed consultation appointments.\n- `EXISTS` checks for a later `follow_up` appointment with the same patient and doctor.\n- `has_followup` becomes 1 when a later follow-up exists and 0 otherwise.\n- `100.0 * SUM(has_followup) / COUNT(*)` calculates the conversion rate percentage.",
      },
    ],
  },
  {
    code: "HOSPITAL_099",
    approaches: [
      {
        approach_title: "ROW_NUMBER category",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH category_counts AS (SELECT e.department_id, ltc.test_category, COUNT(*) AS total_tests, ROW_NUMBER() OVER (PARTITION BY e.department_id ORDER BY COUNT(*) DESC, ltc.test_category ASC) AS rn FROM lab_orders lo JOIN encounters e ON lo.encounter_id = e.id JOIN lab_order_items loi ON lo.id = loi.lab_order_id JOIN lab_test_catalog ltc ON loi.test_id = ltc.id WHERE e.department_id IS NOT NULL GROUP BY e.department_id, ltc.test_category) SELECT department_id, test_category, total_tests FROM category_counts WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nCount ordered lab test categories per department, rank categories within each department, and return the leading category.\n\n## 🔍 Explanation\n\n- `lab_orders` links lab activity to encounters.\n- `encounters` provides the department.\n- `lab_order_items` gives individual ordered tests.\n- `lab_test_catalog` provides the test category.\n- `ROW_NUMBER()` picks exactly one category per department using count descending and category name ascending.",
      },
    ],
  },
  {
    code: "HOSPITAL_100",
    approaches: [
      {
        approach_title: "Payment gap",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT i.id, i.invoice_number, i.total_amount, ROUND(i.total_amount - COALESCE(SUM(CASE WHEN p.payment_status = 'successful' THEN p.amount_paid ELSE 0 END), 0), 2) AS amount_gap FROM invoices i LEFT JOIN payments p ON i.id = p.invoice_id GROUP BY i.id, i.invoice_number, i.total_amount ORDER BY amount_gap DESC, i.id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate the difference between invoice total and successful payments received, then return the top ten largest gaps.\n\n## 🔍 Explanation\n\n- `LEFT JOIN payments` keeps invoices even if they have no payment rows.\n- The `CASE` expression includes only successful payment amounts.\n- `COALESCE(..., 0)` treats invoices with no successful payments as paid amount zero.\n- `i.total_amount - successful_paid_amount` gives the unpaid/payment gap.\n- The final ordering returns the largest gaps first.",
      },
      {
        approach_title: "FILTER payment gap",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT i.id, i.invoice_number, i.total_amount, ROUND(i.total_amount - COALESCE(SUM(p.amount_paid) FILTER (WHERE p.payment_status = 'successful'), 0), 2) AS amount_gap FROM invoices i LEFT JOIN payments p ON i.id = p.invoice_id GROUP BY i.id, i.invoice_number, i.total_amount ORDER BY amount_gap DESC, i.id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL `FILTER` to sum only successful payments when calculating the invoice payment gap.\n\n## 🔍 Explanation\n\n- `SUM(p.amount_paid) FILTER (WHERE p.payment_status = 'successful')` only adds successful payment amounts.\n- `COALESCE` converts missing successful payments to zero.\n- The rest of the query matches the expected payment-gap logic and required ordering.",
      },
    ],
  },
];
