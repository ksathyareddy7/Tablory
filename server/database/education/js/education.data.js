import { getAppIdByName } from "../../base/scripts/base.data.js";

const appId = getAppIdByName("education");

export const tableDescriptions = {
  academic_terms:
    "Academic periods such as semesters, quarters, years, and batches",
  app_events:
    "Product analytics events across learning, attendance, exams, billing, and communication",
  assignment_submissions:
    "Student submissions, grading, plagiarism, and feedback details",
  assignments:
    "Assessments such as homework, projects, quizzes, labs, and essays",
  attendance_records: "Per-student attendance status for each session",
  attendance_sessions: "Individual teaching sessions for attendance tracking",
  campuses: "Physical or logical campuses belonging to institutions",
  classrooms: "Rooms, labs, halls, and other physical learning spaces",
  course_offerings:
    "Term-specific course sections with capacity, teacher assignment, and lifecycle state",
  course_prerequisites:
    "Prerequisite and co-requisite dependencies between courses",
  course_teachers: "Additional teaching staff mapped to course offerings",
  courses:
    "Course master data for core subjects, electives, labs, projects, and workshops",
  departments: "Academic and administrative departments within institutions",
  discussion_posts: "Replies and nested discussion messages inside threads",
  discussion_threads:
    "Course discussion forums, doubt threads, and announcements",
  enrollments:
    "Student registration status and final outcomes for each course offering",
  exam_results: "Student marks, ranks, grades, and result publication states",
  exams:
    "Exam schedule and configuration data for internal and external assessments",
  fee_invoices: "Invoices raised against student fee assignments",
  fee_plans:
    "Standard fee templates for tuition, hostel, transport, exams, and other charges",
  guardian_relationships: "Links students to guardians and emergency contacts",
  institutions:
    "Top-level educational organizations such as schools, colleges, universities, and edtech institutes",
  learning_materials:
    "Course resources such as PDFs, videos, notes, links, and datasets",
  material_views: "Learner engagement metrics for study materials",
  payments:
    "Payment transactions for education invoices including refunds and failures",
  programs: "Programs such as BTech, MBA, Grade 10, certificates, or bootcamps",
  scholarships:
    "Scholarship programs for merit, need-based, sports, and special categories",
  student_fee_assignments:
    "Actual fee amounts assigned to students, including discounts and scholarships",
  student_feedback:
    "Student evaluations of teaching, content, support, and infrastructure",
  student_profiles: "Student-specific academic and admission attributes",
  subjects: "Subject catalog used to group courses by discipline",
  support_tickets:
    "Operational support tickets for enrollment, exam, content, login, and payment issues",
  teacher_profiles:
    "Teacher employment, department, experience, and quality-related data",
  timetable_slots: "Recurring class, lab, and office-hour schedule slots",
  users:
    "Platform users including students, teachers, guardians, admins, and staff",
};

export const questions = [
  {
    app_id: appId,
    code: "EDUCATION_001",
    title: "Total Institutions Count",
    description: "Find the total number of institutions in the platform.",
    difficulty: "easy",
    expected_query: "SELECT COUNT(*) AS total_institutions FROM institutions;",
    solution_columns: ["total_institutions"],
    tables: ["institutions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_002",
    title: "Active Campuses Count",
    description: "Find the total number of active campuses.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS active_campuses FROM campuses WHERE is_active = true;",
    solution_columns: ["active_campuses"],
    tables: ["campuses"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_003",
    title: "List Active Academic Terms",
    description:
      "List all active academic terms with their term name and academic year.",
    difficulty: "easy",
    expected_query:
      "SELECT term_name, academic_year FROM academic_terms WHERE status = 'active';",
    solution_columns: ["term_name", "academic_year"],
    tables: ["academic_terms"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_004",
    title: "Students With Active Enrollment Status",
    description: "Find all students whose enrollment status is active.",
    difficulty: "easy",
    expected_query:
      "SELECT user_id, admission_number, enrollment_status FROM student_profiles WHERE enrollment_status = 'active';",
    solution_columns: ["user_id", "admission_number", "enrollment_status"],
    tables: ["student_profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_005",
    title: "Teachers Hired Most Recently",
    description: "Find the 10 most recently hired teachers.",
    difficulty: "easy",
    expected_query:
      "SELECT user_id, employee_code, hire_date FROM teacher_profiles WHERE hire_date IS NOT NULL ORDER BY hire_date DESC, user_id ASC LIMIT 10;",
    solution_columns: ["user_id", "employee_code", "hire_date"],
    tables: ["teacher_profiles"],
    comparison_config: {
      sort_by_columns: [
        { column: "hire_date", direction: "desc" },
        { column: "user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_006",
    title: "Courses With Mandatory Flag",
    description:
      "List all mandatory active courses with their title and credit value.",
    difficulty: "easy",
    expected_query:
      "SELECT id, course_title, credit_value FROM courses WHERE is_mandatory = true AND is_active = true;",
    solution_columns: ["id", "course_title", "credit_value"],
    tables: ["courses"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_007",
    title: "Large Classrooms",
    description: "Find classrooms that can seat at least 100 students.",
    difficulty: "easy",
    expected_query:
      "SELECT id, campus_id, room_name, seating_capacity FROM classrooms WHERE seating_capacity >= 100;",
    solution_columns: ["id", "campus_id", "room_name", "seating_capacity"],
    tables: ["classrooms"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_008",
    title: "Upcoming Assignments",
    description: "List assignments ordered by earliest due date.",
    difficulty: "easy",
    expected_query:
      "SELECT id, offering_id, assignment_title, due_at FROM assignments ORDER BY due_at ASC, id ASC;",
    solution_columns: ["id", "offering_id", "assignment_title", "due_at"],
    tables: ["assignments"],
    comparison_config: {
      sort_by_columns: [
        { column: "due_at", direction: "asc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_009",
    title: "Successful Payments",
    description:
      "Find all successful payments with invoice id and paid amount.",
    difficulty: "easy",
    expected_query:
      "SELECT id, invoice_id, paid_amount, paid_at FROM payments WHERE payment_status = 'successful';",
    solution_columns: ["id", "invoice_id", "paid_amount", "paid_at"],
    tables: ["payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_010",
    title: "Open Support Tickets",
    description: "Find all support tickets that are currently open.",
    difficulty: "easy",
    expected_query:
      "SELECT id, institution_id, user_id, issue_type, priority FROM support_tickets WHERE ticket_status = 'open';",
    solution_columns: [
      "id",
      "institution_id",
      "user_id",
      "issue_type",
      "priority",
    ],
    tables: ["support_tickets"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_011",
    title: "Total Users By Role",
    description: "Find the total number of users for each user role.",
    difficulty: "easy",
    expected_query:
      "SELECT user_role, COUNT(*) AS total_users FROM users GROUP BY user_role;",
    solution_columns: ["user_role", "total_users"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_012",
    title: "Programs By Level",
    description: "Count how many programs exist for each program level.",
    difficulty: "easy",
    expected_query:
      "SELECT program_level, COUNT(*) AS total_programs FROM programs GROUP BY program_level;",
    solution_columns: ["program_level", "total_programs"],
    tables: ["programs"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_013",
    title: "Average Classroom Capacity By Type",
    description: "Find the average seating capacity for each classroom type.",
    difficulty: "easy",
    expected_query:
      "SELECT room_type, ROUND(AVG(seating_capacity), 2) AS avg_capacity FROM classrooms GROUP BY room_type;",
    solution_columns: ["room_type", "avg_capacity"],
    tables: ["classrooms"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_014",
    title: "Students Per Enrollment Status",
    description: "Count students by enrollment status.",
    difficulty: "easy",
    expected_query:
      "SELECT enrollment_status, COUNT(*) AS total_students FROM student_profiles GROUP BY enrollment_status;",
    solution_columns: ["enrollment_status", "total_students"],
    tables: ["student_profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_015",
    title: "Assignments By Type",
    description: "Count how many assignments exist for each assignment type.",
    difficulty: "easy",
    expected_query:
      "SELECT assignment_type, COUNT(*) AS total_assignments FROM assignments GROUP BY assignment_type;",
    solution_columns: ["assignment_type", "total_assignments"],
    tables: ["assignments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_016",
    title: "Average Teacher Rating By Employment Type",
    description: "Find the average teacher rating for each employment type.",
    difficulty: "easy",
    expected_query:
      "SELECT employment_type, ROUND(AVG(rating_score), 2) AS avg_rating FROM teacher_profiles WHERE rating_score IS NOT NULL GROUP BY employment_type;",
    solution_columns: ["employment_type", "avg_rating"],
    tables: ["teacher_profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_017",
    title: "Fee Plans By Category",
    description: "Count the number of fee plans in each fee category.",
    difficulty: "easy",
    expected_query:
      "SELECT fee_category, COUNT(*) AS total_fee_plans FROM fee_plans GROUP BY fee_category;",
    solution_columns: ["fee_category", "total_fee_plans"],
    tables: ["fee_plans"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_018",
    title: "Total Paid Amount By Payment Method",
    description:
      "Find the total successful paid amount for each payment method.",
    difficulty: "easy",
    expected_query:
      "SELECT payment_method, ROUND(SUM(paid_amount), 2) AS total_paid_amount FROM payments WHERE payment_status = 'successful' GROUP BY payment_method;",
    solution_columns: ["payment_method", "total_paid_amount"],
    tables: ["payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_019",
    title: "Support Tickets By Priority",
    description: "Count support tickets by priority.",
    difficulty: "easy",
    expected_query:
      "SELECT priority, COUNT(*) AS total_tickets FROM support_tickets GROUP BY priority;",
    solution_columns: ["priority", "total_tickets"],
    tables: ["support_tickets"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_020",
    title: "Average Assignment Score",
    description:
      "Find the average obtained marks across graded assignment submissions.",
    difficulty: "easy",
    expected_query:
      "SELECT ROUND(AVG(obtained_marks), 2) AS avg_obtained_marks FROM assignment_submissions WHERE obtained_marks IS NOT NULL;",
    solution_columns: ["avg_obtained_marks"],
    tables: ["assignment_submissions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_021",
    title: "Students With Above Average CGPA",
    description:
      "Find students whose CGPA is above the average CGPA of all students.",
    difficulty: "easy",
    expected_query:
      "SELECT user_id, admission_number, cgpa FROM student_profiles WHERE cgpa > (SELECT AVG(cgpa) FROM student_profiles WHERE cgpa IS NOT NULL);",
    solution_columns: ["user_id", "admission_number", "cgpa"],
    tables: ["student_profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_022",
    title: "Courses With High Credits",
    description: "Find all courses having credit value greater than 4.",
    difficulty: "easy",
    expected_query:
      "SELECT id, course_title, credit_value FROM courses WHERE credit_value > 4;",
    solution_columns: ["id", "course_title", "credit_value"],
    tables: ["courses"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_023",
    title: "Assignments Allowing Late Submission",
    description: "Find all assignments where late submissions are allowed.",
    difficulty: "easy",
    expected_query:
      "SELECT id, assignment_title, due_at, max_late_days FROM assignments WHERE allow_late_submission = true;",
    solution_columns: ["id", "assignment_title", "due_at", "max_late_days"],
    tables: ["assignments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_024",
    title: "Upcoming Exams",
    description: "Find all exams scheduled for future dates.",
    difficulty: "easy",
    expected_query:
      "SELECT id, exam_name, exam_date, exam_type FROM exams WHERE exam_date > CURRENT_DATE;",
    solution_columns: ["id", "exam_name", "exam_date", "exam_type"],
    tables: ["exams"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_025",
    title: "Published Results Count",
    description: "Count the number of published exam results.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS published_results FROM exam_results WHERE result_status = 'published';",
    solution_columns: ["published_results"],
    tables: ["exam_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_026",
    title: "Completed Learning Materials",
    description: "Find all material view records that are fully completed.",
    difficulty: "easy",
    expected_query:
      "SELECT material_id, user_id, progress_percent FROM material_views WHERE completed = true;",
    solution_columns: ["material_id", "user_id", "progress_percent"],
    tables: ["material_views"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_027",
    title: "Pinned Discussion Threads",
    description: "Find all pinned discussion threads.",
    difficulty: "easy",
    expected_query:
      "SELECT id, offering_id, thread_title, created_at FROM discussion_threads WHERE is_pinned = true;",
    solution_columns: ["id", "offering_id", "thread_title", "created_at"],
    tables: ["discussion_threads"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_028",
    title: "Active Scholarships",
    description: "Find all currently active scholarships.",
    difficulty: "easy",
    expected_query:
      "SELECT id, scholarship_name, scholarship_type, amount_value FROM scholarships WHERE is_active = true;",
    solution_columns: [
      "id",
      "scholarship_name",
      "scholarship_type",
      "amount_value",
    ],
    tables: ["scholarships"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_029",
    title: "Overdue Fee Invoices",
    description: "Find all unpaid overdue invoices.",
    difficulty: "easy",
    expected_query:
      "SELECT id, student_user_id, invoice_number, total_amount, due_date FROM fee_invoices WHERE invoice_status = 'overdue';",
    solution_columns: [
      "id",
      "student_user_id",
      "invoice_number",
      "total_amount",
      "due_date",
    ],
    tables: ["fee_invoices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_030",
    title: "Recent App Events",
    description: "Find the 20 most recent app events.",
    difficulty: "easy",
    expected_query:
      "SELECT id, user_id, event_name, event_category, event_time FROM app_events ORDER BY event_time DESC, id ASC LIMIT 20;",
    solution_columns: [
      "id",
      "user_id",
      "event_name",
      "event_category",
      "event_time",
    ],
    tables: ["app_events"],
    comparison_config: {
      sort_by_columns: [
        { column: "event_time", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_031",
    title: "Course Enrollment Count",
    description:
      "Find the total number of enrolled students for each course offering.",
    difficulty: "easy",
    expected_query:
      "SELECT offering_id, COUNT(*) AS enrolled_students FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY offering_id;",
    solution_columns: ["offering_id", "enrolled_students"],
    tables: ["enrollments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_032",
    title: "Average Attendance By Course",
    description:
      "Find the average attendance percentage for each course offering.",
    difficulty: "easy",
    expected_query:
      "SELECT offering_id, ROUND(AVG(attendance_percentage), 2) AS avg_attendance FROM enrollments WHERE attendance_percentage IS NOT NULL GROUP BY offering_id;",
    solution_columns: ["offering_id", "avg_attendance"],
    tables: ["enrollments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_033",
    title: "Exam Count By Type",
    description: "Count the number of exams for each exam type.",
    difficulty: "easy",
    expected_query:
      "SELECT exam_type, COUNT(*) AS total_exams FROM exams GROUP BY exam_type;",
    solution_columns: ["exam_type", "total_exams"],
    tables: ["exams"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_034",
    title: "Average Exam Score By Exam",
    description: "Find the average obtained marks for each exam.",
    difficulty: "easy",
    expected_query:
      "SELECT exam_id, ROUND(AVG(obtained_marks), 2) AS avg_score FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY exam_id;",
    solution_columns: ["exam_id", "avg_score"],
    tables: ["exam_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_035",
    title: "Support Tickets By Issue Type",
    description: "Count the number of support tickets for each issue type.",
    difficulty: "easy",
    expected_query:
      "SELECT issue_type, COUNT(*) AS total_tickets FROM support_tickets GROUP BY issue_type;",
    solution_columns: ["issue_type", "total_tickets"],
    tables: ["support_tickets"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_036",
    title: "Average Payment Amount",
    description: "Find the average paid amount of successful payments.",
    difficulty: "easy",
    expected_query:
      "SELECT ROUND(AVG(paid_amount), 2) AS avg_paid_amount FROM payments WHERE payment_status = 'successful';",
    solution_columns: ["avg_paid_amount"],
    tables: ["payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_037",
    title: "Course Offerings By Status",
    description: "Count course offerings by their current status.",
    difficulty: "easy",
    expected_query:
      "SELECT course_status, COUNT(*) AS total_offerings FROM course_offerings GROUP BY course_status;",
    solution_columns: ["course_status", "total_offerings"],
    tables: ["course_offerings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_038",
    title: "Teacher Count By Department",
    description: "Find the number of teachers in each department.",
    difficulty: "easy",
    expected_query:
      "SELECT department_id, COUNT(*) AS total_teachers FROM teacher_profiles WHERE department_id IS NOT NULL GROUP BY department_id;",
    solution_columns: ["department_id", "total_teachers"],
    tables: ["teacher_profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_039",
    title: "Material Count By Type",
    description: "Count learning materials by material type.",
    difficulty: "easy",
    expected_query:
      "SELECT material_type, COUNT(*) AS total_materials FROM learning_materials GROUP BY material_type;",
    solution_columns: ["material_type", "total_materials"],
    tables: ["learning_materials"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_040",
    title: "Average Feedback Rating By Category",
    description:
      "Find the average student feedback rating for each feedback category.",
    difficulty: "easy",
    expected_query:
      "SELECT feedback_category, ROUND(AVG(rating_value), 2) AS avg_rating FROM student_feedback GROUP BY feedback_category;",
    solution_columns: ["feedback_category", "avg_rating"],
    tables: ["student_feedback"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_041",
    title: "Students With Multiple Enrollments",
    description:
      "Find students who are enrolled in more than one course offering.",
    difficulty: "medium",
    expected_query:
      "SELECT student_user_id, COUNT(*) AS enrollment_count FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY student_user_id HAVING COUNT(*) > 1;",
    solution_columns: ["student_user_id", "enrollment_count"],
    tables: ["enrollments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_042",
    title: "Teachers With Multiple Courses",
    description:
      "Find teachers who are teaching more than one course offering.",
    difficulty: "medium",
    expected_query:
      "SELECT teacher_user_id, COUNT(*) AS course_count FROM course_teachers GROUP BY teacher_user_id HAVING COUNT(*) > 1;",
    solution_columns: ["teacher_user_id", "course_count"],
    tables: ["course_teachers"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_043",
    title: "Top 5 Courses By Enrollment",
    description:
      "Find the top 5 course offerings with the highest number of enrolled students.",
    difficulty: "medium",
    expected_query:
      "SELECT offering_id, COUNT(*) AS student_count FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY offering_id ORDER BY student_count DESC, offering_id ASC LIMIT 5;",
    solution_columns: ["offering_id", "student_count"],
    tables: ["enrollments"],
    comparison_config: {
      sort_by_columns: [
        { column: "student_count", direction: "desc" },
        { column: "offering_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_044",
    title: "Top 5 Students By CGPA",
    description: "Find the top 5 students with highest CGPA.",
    difficulty: "medium",
    expected_query:
      "SELECT user_id, admission_number, cgpa FROM student_profiles WHERE cgpa IS NOT NULL ORDER BY cgpa DESC, user_id ASC LIMIT 5;",
    solution_columns: ["user_id", "admission_number", "cgpa"],
    tables: ["student_profiles"],
    comparison_config: {
      sort_by_columns: [
        { column: "cgpa", direction: "desc" },
        { column: "user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_045",
    title: "Courses Without Enrollments",
    description:
      "Find course offerings that do not have any enrolled students.",
    difficulty: "medium",
    expected_query:
      "SELECT co.id FROM course_offerings co LEFT JOIN enrollments e ON e.offering_id = co.id WHERE e.id IS NULL;",
    solution_columns: ["id"],
    tables: ["course_offerings", "enrollments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_046",
    title: "Students Without Submissions",
    description: "Find students who have not submitted any assignments.",
    difficulty: "medium",
    expected_query:
      "SELECT sp.user_id FROM student_profiles sp LEFT JOIN assignment_submissions s ON s.student_user_id = sp.user_id WHERE s.id IS NULL;",
    solution_columns: ["user_id"],
    tables: ["student_profiles", "assignment_submissions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_047",
    title: "Assignments Without Submissions",
    description: "Find assignments that have not received any submissions.",
    difficulty: "medium",
    expected_query:
      "SELECT a.id FROM assignments a LEFT JOIN assignment_submissions s ON s.assignment_id = a.id WHERE s.id IS NULL;",
    solution_columns: ["id"],
    tables: ["assignments", "assignment_submissions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_048",
    title: "Students With Failed Results",
    description: "Find students who have failed at least one exam.",
    difficulty: "medium",
    expected_query:
      "SELECT DISTINCT student_user_id FROM exam_results WHERE result_status = 'failed';",
    solution_columns: ["student_user_id"],
    tables: ["exam_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_049",
    title: "Average Marks Above 75",
    description: "Find exams where average marks are greater than 75.",
    difficulty: "medium",
    expected_query:
      "SELECT exam_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY exam_id HAVING AVG(obtained_marks) > 75;",
    solution_columns: ["exam_id", "avg_marks"],
    tables: ["exam_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_050",
    title: "Top 5 Exams By Average Score",
    description: "Find top 5 exams with highest average marks.",
    difficulty: "medium",
    expected_query:
      "SELECT exam_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY exam_id ORDER BY avg_marks DESC, exam_id ASC LIMIT 5;",
    solution_columns: ["exam_id", "avg_marks"],
    tables: ["exam_results"],
    comparison_config: {
      sort_by_columns: [
        { column: "avg_marks", direction: "desc" },
        { column: "exam_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_051",
    title: "Rank Students By CGPA",
    description: "Rank students based on CGPA.",
    difficulty: "hard",
    expected_query:
      "SELECT user_id, cgpa, RANK() OVER (ORDER BY cgpa DESC) AS rank FROM student_profiles WHERE cgpa IS NOT NULL;",
    solution_columns: ["user_id", "cgpa", "rank"],
    tables: ["student_profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_052",
    title: "Running Enrollment Count",
    description: "Calculate running count of enrollments per course offering.",
    difficulty: "hard",
    expected_query:
      "SELECT offering_id, id, COUNT(*) OVER (PARTITION BY offering_id ORDER BY created_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_enrollments FROM enrollments;",
    solution_columns: ["offering_id", "id", "running_enrollments"],
    tables: ["enrollments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_053",
    title: "Second Highest CGPA",
    description: "Find the student with second highest CGPA.",
    difficulty: "hard",
    expected_query:
      "SELECT user_id, cgpa FROM (SELECT user_id, cgpa, DENSE_RANK() OVER (ORDER BY cgpa DESC) AS rnk FROM student_profiles WHERE cgpa IS NOT NULL) x WHERE rnk = 2;",
    solution_columns: ["user_id", "cgpa"],
    tables: ["student_profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_054",
    title: "Gap Between Submissions",
    description: "Find maximum gap in days between submissions per student.",
    difficulty: "hard",
    expected_query:
      "SELECT student_user_id, MAX(gap_days) AS max_gap_days FROM (SELECT student_user_id, EXTRACT(EPOCH FROM (submitted_at - LAG(submitted_at) OVER (PARTITION BY student_user_id ORDER BY submitted_at))) / 86400 AS gap_days FROM assignment_submissions) x GROUP BY student_user_id;",
    solution_columns: ["student_user_id", "max_gap_days"],
    tables: ["assignment_submissions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_055",
    title: "Top 3 Students Per Course",
    description: "Find top 3 students per course offering by average marks.",
    difficulty: "hard",
    expected_query:
      "WITH student_avg AS (SELECT e.offering_id, r.student_user_id, AVG(r.obtained_marks) AS avg_marks FROM exam_results r JOIN enrollments e ON e.student_user_id = r.student_user_id GROUP BY e.offering_id, r.student_user_id), ranked AS (SELECT offering_id, student_user_id, avg_marks, ROW_NUMBER() OVER (PARTITION BY offering_id ORDER BY avg_marks DESC, student_user_id ASC) AS rn FROM student_avg) SELECT offering_id, student_user_id, avg_marks FROM ranked WHERE rn <= 3;",
    solution_columns: ["offering_id", "student_user_id", "avg_marks"],
    tables: ["exam_results", "enrollments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_056",
    title: "Moving Average Scores",
    description: "Calculate 3-exam moving average marks per student.",
    difficulty: "hard",
    expected_query:
      "SELECT student_user_id, exam_id, obtained_marks, AVG(obtained_marks) OVER (PARTITION BY student_user_id ORDER BY exam_id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg FROM exam_results WHERE obtained_marks IS NOT NULL;",
    solution_columns: [
      "student_user_id",
      "exam_id",
      "obtained_marks",
      "moving_avg",
    ],
    tables: ["exam_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_057",
    title: "Top Performing Students",
    description: "Find top 5 students by average marks.",
    difficulty: "hard",
    expected_query:
      "SELECT student_user_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY student_user_id ORDER BY avg_marks DESC, student_user_id ASC LIMIT 5;",
    solution_columns: ["student_user_id", "avg_marks"],
    tables: ["exam_results"],
    comparison_config: {
      sort_by_columns: [
        { column: "avg_marks", direction: "desc" },
        { column: "student_user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_058",
    title: "Exam Percentile",
    description: "Calculate percentile rank of students per exam.",
    difficulty: "hard",
    expected_query:
      "SELECT exam_id, student_user_id, PERCENT_RANK() OVER (PARTITION BY exam_id ORDER BY obtained_marks) AS percentile FROM exam_results WHERE obtained_marks IS NOT NULL;",
    solution_columns: ["exam_id", "student_user_id", "percentile"],
    tables: ["exam_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_059",
    title: "Top 10 Students By Attendance",
    description: "Find top 10 students by attendance percentage.",
    difficulty: "hard",
    expected_query:
      "SELECT student_user_id, attendance_percentage FROM enrollments WHERE attendance_percentage IS NOT NULL ORDER BY attendance_percentage DESC, student_user_id ASC LIMIT 10;",
    solution_columns: ["student_user_id", "attendance_percentage"],
    tables: ["enrollments"],
    comparison_config: {
      sort_by_columns: [
        { column: "attendance_percentage", direction: "desc" },
        { column: "student_user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_060",
    title: "Top Revenue Programs",
    description: "Find top 5 programs generating highest fee revenue.",
    difficulty: "hard",
    expected_query:
      "SELECT fp.program_id, SUM(fi.total_amount) AS total_revenue FROM fee_invoices fi JOIN student_fee_assignments sfa ON fi.fee_assignment_id = sfa.id JOIN fee_plans fp ON sfa.fee_plan_id = fp.id WHERE fp.program_id IS NOT NULL GROUP BY fp.program_id ORDER BY total_revenue DESC, fp.program_id ASC LIMIT 5;",
    solution_columns: ["program_id", "total_revenue"],
    tables: ["fee_invoices", "student_fee_assignments", "fee_plans"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_revenue", direction: "desc" },
        { column: "program_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_061",
    title: "Top 2 Students Per Course By Average Marks",
    description:
      "For each course offering, find top 2 students based on average marks.",
    difficulty: "hard",
    expected_query:
      "WITH student_avg AS (SELECT ex.offering_id, er.student_user_id, AVG(er.obtained_marks) AS avg_marks FROM exam_results er JOIN exams ex ON er.exam_id = ex.id WHERE ex.offering_id IS NOT NULL AND er.obtained_marks IS NOT NULL GROUP BY ex.offering_id, er.student_user_id), ranked AS (SELECT offering_id, student_user_id, avg_marks, ROW_NUMBER() OVER (PARTITION BY offering_id ORDER BY avg_marks DESC, student_user_id ASC) AS rn FROM student_avg) SELECT offering_id, student_user_id, avg_marks FROM ranked WHERE rn <= 2;",
    solution_columns: ["offering_id", "student_user_id", "avg_marks"],
    tables: ["exam_results", "exams"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_062",
    title: "Students Above Program Average CGPA",
    description:
      "Find students whose CGPA is higher than the average CGPA of their program.",
    difficulty: "hard",
    expected_query:
      "WITH program_avg AS (SELECT program_id, AVG(cgpa) AS avg_program_cgpa FROM student_profiles WHERE program_id IS NOT NULL AND cgpa IS NOT NULL GROUP BY program_id) SELECT sp.user_id, sp.program_id, sp.cgpa FROM student_profiles sp JOIN program_avg pa ON sp.program_id = pa.program_id WHERE sp.cgpa > pa.avg_program_cgpa;",
    solution_columns: ["user_id", "program_id", "cgpa"],
    tables: ["student_profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_063",
    title: "Courses With Increasing Enrollment",
    description:
      "Find courses where enrollment count increased compared to the previous term.",
    difficulty: "hard",
    expected_query:
      "WITH enrollment_counts AS (SELECT co.course_id, co.term_id, COUNT(e.id) AS student_count FROM course_offerings co JOIN enrollments e ON co.id = e.offering_id WHERE e.enrollment_status = 'enrolled' GROUP BY co.course_id, co.term_id), ranked AS (SELECT course_id, term_id, student_count, LAG(student_count) OVER (PARTITION BY course_id ORDER BY term_id) AS prev_count FROM enrollment_counts) SELECT course_id, term_id, student_count FROM ranked WHERE prev_count IS NOT NULL AND student_count > prev_count;",
    solution_columns: ["course_id", "term_id", "student_count"],
    tables: ["course_offerings", "enrollments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_064",
    title: "Students With Perfect Attendance",
    description:
      "Find students whose attendance percentage is 100 across all enrollments.",
    difficulty: "hard",
    expected_query:
      "SELECT student_user_id FROM enrollments GROUP BY student_user_id HAVING COUNT(*) > 0 AND COUNT(*) = COUNT(*) FILTER (WHERE attendance_percentage = 100);",
    solution_columns: ["student_user_id"],
    tables: ["enrollments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_065",
    title: "Courses Where All Students Passed",
    description: "Find course offerings where every student passed all exams.",
    difficulty: "hard",
    expected_query:
      "SELECT e.offering_id FROM enrollments e JOIN exam_results r ON r.student_user_id = e.student_user_id GROUP BY e.offering_id HAVING COUNT(*) > 0 AND COUNT(*) = COUNT(*) FILTER (WHERE r.result_status = 'passed');",
    solution_columns: ["offering_id"],
    tables: ["enrollments", "exam_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_066",
    title: "Students With More Failures Than Passes",
    description:
      "Find students whose number of failed exams is greater than passed exams.",
    difficulty: "hard",
    expected_query:
      "SELECT student_user_id, COUNT(*) FILTER (WHERE result_status = 'failed') AS failed_count, COUNT(*) FILTER (WHERE result_status = 'passed') AS passed_count FROM exam_results GROUP BY student_user_id HAVING COUNT(*) FILTER (WHERE result_status = 'failed') > COUNT(*) FILTER (WHERE result_status = 'passed');",
    solution_columns: ["student_user_id", "failed_count", "passed_count"],
    tables: ["exam_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_067",
    title: "Students With Consistent Improvement",
    description:
      "Find students whose marks increased in every consecutive exam.",
    difficulty: "hard",
    expected_query:
      "WITH ranked AS (SELECT student_user_id, obtained_marks, LAG(obtained_marks) OVER (PARTITION BY student_user_id ORDER BY exam_id) AS prev_marks FROM exam_results WHERE obtained_marks IS NOT NULL) SELECT DISTINCT student_user_id FROM ranked GROUP BY student_user_id HAVING BOOL_AND(prev_marks IS NULL OR obtained_marks > prev_marks);",
    solution_columns: ["student_user_id"],
    tables: ["exam_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_068",
    title: "Teachers With Highest Average Student Performance",
    description:
      "Find top 5 teachers whose students have highest average marks.",
    difficulty: "hard",
    expected_query:
      "SELECT co.primary_teacher_id AS teacher_user_id, AVG(er.obtained_marks) AS avg_marks FROM course_offerings co JOIN enrollments e ON e.offering_id = co.id JOIN exams ex ON ex.offering_id = co.id JOIN exam_results er ON er.exam_id = ex.id AND er.student_user_id = e.student_user_id WHERE co.primary_teacher_id IS NOT NULL AND er.obtained_marks IS NOT NULL GROUP BY co.primary_teacher_id ORDER BY avg_marks DESC, teacher_user_id ASC LIMIT 5;",
    solution_columns: ["teacher_user_id", "avg_marks"],
    tables: ["course_offerings", "enrollments", "exams", "exam_results"],
    comparison_config: {
      sort_by_columns: [
        { column: "avg_marks", direction: "desc" },
        { column: "teacher_user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_069",
    title: "Students With Highest Assignment Scores",
    description: "Find top 10 students based on average assignment marks.",
    difficulty: "hard",
    expected_query:
      "SELECT student_user_id, AVG(obtained_marks) AS avg_marks FROM assignment_submissions WHERE obtained_marks IS NOT NULL GROUP BY student_user_id ORDER BY avg_marks DESC, student_user_id ASC LIMIT 10;",
    solution_columns: ["student_user_id", "avg_marks"],
    tables: ["assignment_submissions"],
    comparison_config: {
      sort_by_columns: [
        { column: "avg_marks", direction: "desc" },
        { column: "student_user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_070",
    title: "Courses With Highest Drop Rate",
    description: "Find top 5 course offerings with highest dropout percentage.",
    difficulty: "hard",
    expected_query:
      "SELECT offering_id, (COUNT(*) FILTER (WHERE enrollment_status = 'dropped')::numeric / COUNT(*)) AS drop_rate FROM enrollments GROUP BY offering_id HAVING COUNT(*) > 0 ORDER BY drop_rate DESC, offering_id ASC LIMIT 5;",
    solution_columns: ["offering_id", "drop_rate"],
    tables: ["enrollments"],
    comparison_config: {
      sort_by_columns: [
        { column: "drop_rate", direction: "desc" },
        { column: "offering_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_071",
    title: "Students Who Attempted All Exams",
    description: "Find students who have attempted all exams.",
    difficulty: "hard",
    expected_query:
      "SELECT student_user_id FROM exam_results GROUP BY student_user_id HAVING COUNT(DISTINCT exam_id) = (SELECT COUNT(*) FROM exams);",
    solution_columns: ["student_user_id"],
    tables: ["exam_results", "exams"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_072",
    title: "Students With No Failed Exams",
    description: "Find students who have never failed any exam.",
    difficulty: "hard",
    expected_query:
      "SELECT student_user_id FROM exam_results GROUP BY student_user_id HAVING COUNT(*) FILTER (WHERE result_status = 'failed') = 0;",
    solution_columns: ["student_user_id"],
    tables: ["exam_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_073",
    title: "Students Who Improved After Failure",
    description:
      "Find students who failed an exam but scored higher in the next exam.",
    difficulty: "hard",
    expected_query:
      "WITH ranked AS (SELECT student_user_id, obtained_marks, result_status, LAG(result_status) OVER (PARTITION BY student_user_id ORDER BY exam_id) AS prev_status, LAG(obtained_marks) OVER (PARTITION BY student_user_id ORDER BY exam_id) AS prev_marks FROM exam_results) SELECT DISTINCT student_user_id FROM ranked WHERE prev_status = 'failed' AND obtained_marks > prev_marks;",
    solution_columns: ["student_user_id"],
    tables: ["exam_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_074",
    title: "Courses With Highest Average CGPA",
    description: "Find top 5 courses whose students have highest average CGPA.",
    difficulty: "hard",
    expected_query:
      "SELECT e.offering_id, AVG(sp.cgpa) AS avg_cgpa FROM enrollments e JOIN student_profiles sp ON sp.user_id = e.student_user_id WHERE sp.cgpa IS NOT NULL GROUP BY e.offering_id ORDER BY avg_cgpa DESC, e.offering_id ASC LIMIT 5;",
    solution_columns: ["offering_id", "avg_cgpa"],
    tables: ["enrollments", "student_profiles"],
    comparison_config: {
      sort_by_columns: [
        { column: "avg_cgpa", direction: "desc" },
        { column: "offering_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_075",
    title: "Students With Maximum Exam Attempts",
    description: "Find students who attempted the maximum number of exams.",
    difficulty: "hard",
    expected_query:
      "WITH attempt_counts AS (SELECT student_user_id, COUNT(*) AS attempt_count FROM exam_results GROUP BY student_user_id) SELECT student_user_id, attempt_count FROM attempt_counts WHERE attempt_count = (SELECT MAX(attempt_count) FROM attempt_counts);",
    solution_columns: ["student_user_id", "attempt_count"],
    tables: ["exam_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_076",
    title: "Courses With Perfect Attendance Students",
    description:
      "Find courses where at least one student has 100 percent attendance.",
    difficulty: "hard",
    expected_query:
      "SELECT DISTINCT offering_id FROM enrollments WHERE attendance_percentage = 100;",
    solution_columns: ["offering_id"],
    tables: ["enrollments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_077",
    title: "Students With Highest Fee Payments",
    description: "Find top 5 students by total successful paid fees.",
    difficulty: "hard",
    expected_query:
      "SELECT fi.student_user_id, SUM(p.paid_amount) AS total_paid FROM payments p JOIN fee_invoices fi ON p.invoice_id = fi.id WHERE p.payment_status = 'successful' GROUP BY fi.student_user_id ORDER BY total_paid DESC, fi.student_user_id ASC LIMIT 5;",
    solution_columns: ["student_user_id", "total_paid"],
    tables: ["payments", "fee_invoices"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_paid", direction: "desc" },
        { column: "student_user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_078",
    title: "Students With Late Submissions",
    description: "Find students who submitted assignments after due date.",
    difficulty: "hard",
    expected_query:
      "SELECT DISTINCT s.student_user_id FROM assignment_submissions s JOIN assignments a ON s.assignment_id = a.id WHERE s.submitted_at > a.due_at;",
    solution_columns: ["student_user_id"],
    tables: ["assignment_submissions", "assignments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_079",
    title: "Courses With Most Assignments",
    description:
      "Find top 5 course offerings with highest number of assignments.",
    difficulty: "hard",
    expected_query:
      "SELECT offering_id, COUNT(*) AS assignment_count FROM assignments GROUP BY offering_id ORDER BY assignment_count DESC, offering_id ASC LIMIT 5;",
    solution_columns: ["offering_id", "assignment_count"],
    tables: ["assignments"],
    comparison_config: {
      sort_by_columns: [
        { column: "assignment_count", direction: "desc" },
        { column: "offering_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_080",
    title: "Students With Highest Participation",
    description: "Find top 10 students by number of discussion posts.",
    difficulty: "hard",
    expected_query:
      "SELECT user_id, COUNT(*) AS post_count FROM discussion_posts GROUP BY user_id ORDER BY post_count DESC, user_id ASC LIMIT 10;",
    solution_columns: ["user_id", "post_count"],
    tables: ["discussion_posts"],
    comparison_config: {
      sort_by_columns: [
        { column: "post_count", direction: "desc" },
        { column: "user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_081",
    title: "Students Above Program CGPA Average",
    description:
      "Find students whose CGPA is above the average CGPA of their own program.",
    difficulty: "hard",
    expected_query:
      "WITH program_avg_cgpa AS ( SELECT program_id, AVG(cgpa) AS avg_cgpa FROM student_profiles WHERE program_id IS NOT NULL AND cgpa IS NOT NULL GROUP BY program_id ) SELECT sp.user_id, sp.program_id, sp.cgpa FROM student_profiles sp JOIN program_avg_cgpa pag ON sp.program_id = pag.program_id WHERE sp.cgpa IS NOT NULL AND sp.cgpa > pag.avg_cgpa;",
    solution_columns: ["user_id", "program_id", "cgpa"],
    tables: ["student_profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_082",
    title: "Students Failing More Than One Exam",
    description: "Find students who failed more than one exam.",
    difficulty: "hard",
    expected_query:
      "SELECT student_user_id, COUNT(*) AS failed_exam_count FROM exam_results WHERE grade_letter = 'F' GROUP BY student_user_id HAVING COUNT(*) > 1;",
    solution_columns: ["student_user_id", "failed_exam_count"],
    tables: ["exam_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_083",
    title: "Teachers With Above Department Average Rating",
    description:
      "Find teachers whose average feedback rating is above their department average teacher rating.",
    difficulty: "hard",
    expected_query:
      "WITH teacher_avg AS ( SELECT tp.department_id, sf.teacher_user_id, AVG(sf.rating_value) AS avg_rating FROM student_feedback sf JOIN teacher_profiles tp ON sf.teacher_user_id = tp.user_id WHERE tp.department_id IS NOT NULL GROUP BY tp.department_id, sf.teacher_user_id ), department_avg AS ( SELECT department_id, AVG(avg_rating) AS dept_avg_rating FROM teacher_avg GROUP BY department_id ) SELECT ta.department_id, ta.teacher_user_id, ROUND(ta.avg_rating, 2) AS avg_rating FROM teacher_avg ta JOIN department_avg da ON ta.department_id = da.department_id WHERE ta.avg_rating > da.dept_avg_rating;",
    solution_columns: ["department_id", "teacher_user_id", "avg_rating"],
    tables: ["student_feedback", "teacher_profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_084",
    title: "Offerings With Perfect Submission Rate",
    description:
      "Find course offerings where every enrolled student submitted every assignment.",
    difficulty: "hard",
    expected_query:
      "WITH offering_assignments AS ( SELECT offering_id, COUNT(*) AS total_assignments FROM assignments GROUP BY offering_id ), enrolled_students AS ( SELECT offering_id, COUNT(*) AS total_students FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY offering_id ), required_submissions AS ( SELECT oa.offering_id, oa.total_assignments * es.total_students AS expected_submissions FROM offering_assignments oa JOIN enrolled_students es ON oa.offering_id = es.offering_id ), actual_submissions AS ( SELECT a.offering_id, COUNT(*) AS actual_submissions FROM assignments a JOIN assignment_submissions s ON a.id = s.assignment_id WHERE s.submission_status IN ('submitted', 'late_submitted', 'graded') GROUP BY a.offering_id ) SELECT rs.offering_id FROM required_submissions rs JOIN actual_submissions ac ON rs.offering_id = ac.offering_id WHERE rs.expected_submissions = ac.actual_submissions;",
    solution_columns: ["offering_id"],
    tables: ["assignments", "assignment_submissions", "enrollments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_085",
    title: "Students With No Successful Payments",
    description:
      "Find students who have invoices but no successful payment records.",
    difficulty: "hard",
    expected_query:
      "SELECT DISTINCT fi.student_user_id FROM fee_invoices fi LEFT JOIN payments p ON fi.id = p.invoice_id AND p.payment_status = 'successful' WHERE p.id IS NULL;",
    solution_columns: ["student_user_id"],
    tables: ["fee_invoices", "payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_086",
    title: "Classroom Schedule Conflicts",
    description:
      "Find classroom timetable pairs that overlap on the same weekday in the same classroom.",
    difficulty: "hard",
    expected_query:
      "SELECT t1.classroom_id, t1.weekday_no, t1.id AS slot_id_1, t2.id AS slot_id_2 FROM timetable_slots t1 JOIN timetable_slots t2 ON t1.classroom_id = t2.classroom_id AND t1.weekday_no = t2.weekday_no AND t1.id < t2.id AND t1.start_time < t2.end_time AND t2.start_time < t1.end_time WHERE t1.classroom_id IS NOT NULL;",
    solution_columns: ["classroom_id", "weekday_no", "slot_id_1", "slot_id_2"],
    tables: ["timetable_slots"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_087",
    title: "Teacher Schedule Conflicts",
    description:
      "Find teachers assigned to overlapping timetable slots on the same weekday.",
    difficulty: "hard",
    expected_query:
      "WITH teacher_slots AS ( SELECT ct.teacher_user_id, ts.weekday_no, ts.id AS slot_id, ts.start_time, ts.end_time FROM course_teachers ct JOIN timetable_slots ts ON ct.offering_id = ts.offering_id ) SELECT ts1.teacher_user_id, ts1.weekday_no, ts1.slot_id AS slot_id_1, ts2.slot_id AS slot_id_2 FROM teacher_slots ts1 JOIN teacher_slots ts2 ON ts1.teacher_user_id = ts2.teacher_user_id AND ts1.weekday_no = ts2.weekday_no AND ts1.slot_id < ts2.slot_id AND ts1.start_time < ts2.end_time AND ts2.start_time < ts1.end_time;",
    solution_columns: [
      "teacher_user_id",
      "weekday_no",
      "slot_id_1",
      "slot_id_2",
    ],
    tables: ["course_teachers", "timetable_slots"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_088",
    title: "Most Improved Students By Average Score",
    description:
      "Find students whose average exam score in later exams is greater than their average score in earlier exams.",
    difficulty: "hard",
    expected_query:
      "WITH scored_exams AS ( SELECT student_user_id, exam_id, obtained_marks, ROW_NUMBER() OVER (PARTITION BY student_user_id ORDER BY exam_id ASC) AS rn, COUNT(*) OVER (PARTITION BY student_user_id) AS total_exams FROM exam_results WHERE obtained_marks IS NOT NULL ), split_scores AS ( SELECT student_user_id, AVG(CASE WHEN rn <= total_exams / 2.0 THEN obtained_marks END) AS first_half_avg, AVG(CASE WHEN rn > total_exams / 2.0 THEN obtained_marks END) AS second_half_avg FROM scored_exams GROUP BY student_user_id ) SELECT student_user_id, ROUND(first_half_avg, 2) AS first_half_avg, ROUND(second_half_avg, 2) AS second_half_avg FROM split_scores WHERE second_half_avg > first_half_avg;",
    solution_columns: ["student_user_id", "first_half_avg", "second_half_avg"],
    tables: ["exam_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_089",
    title: "Programs With 100 Percent Active Students",
    description:
      "Find programs where all mapped students are currently active.",
    difficulty: "hard",
    expected_query:
      "SELECT program_id FROM student_profiles WHERE program_id IS NOT NULL GROUP BY program_id HAVING COUNT(*) = COUNT(*) FILTER (WHERE enrollment_status = 'active');",
    solution_columns: ["program_id"],
    tables: ["student_profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_090",
    title: "Students With Higher Assignment Average Than Exam Average",
    description:
      "Find students whose average assignment score is higher than their average exam score.",
    difficulty: "hard",
    expected_query:
      "WITH assignment_avg AS ( SELECT student_user_id, AVG(obtained_marks) AS avg_assignment_score FROM assignment_submissions WHERE obtained_marks IS NOT NULL GROUP BY student_user_id ), exam_avg AS ( SELECT student_user_id, AVG(obtained_marks) AS avg_exam_score FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY student_user_id ) SELECT aa.student_user_id, ROUND(aa.avg_assignment_score, 2) AS avg_assignment_score, ROUND(ea.avg_exam_score, 2) AS avg_exam_score FROM assignment_avg aa JOIN exam_avg ea ON aa.student_user_id = ea.student_user_id WHERE aa.avg_assignment_score > ea.avg_exam_score;",
    solution_columns: [
      "student_user_id",
      "avg_assignment_score",
      "avg_exam_score",
    ],
    tables: ["assignment_submissions", "exam_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_091",
    title: "Top 3 Students Per Program By CGPA",
    description: "Find the top 3 students in each program based on CGPA.",
    difficulty: "hard",
    expected_query:
      "WITH ranked_students AS ( SELECT user_id, program_id, cgpa, ROW_NUMBER() OVER (PARTITION BY program_id ORDER BY cgpa DESC, user_id ASC) AS rn FROM student_profiles WHERE program_id IS NOT NULL AND cgpa IS NOT NULL ) SELECT user_id, program_id, cgpa FROM ranked_students WHERE rn <= 3;",
    solution_columns: ["user_id", "program_id", "cgpa"],
    tables: ["student_profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_092",
    title: "Monthly Fee Collection Trend",
    description: "Find total successful fee collection for each month.",
    difficulty: "hard",
    expected_query:
      "SELECT DATE_TRUNC('month', paid_at) AS collection_month, ROUND(SUM(paid_amount), 2) AS total_collection FROM payments WHERE payment_status = 'successful' AND paid_at IS NOT NULL GROUP BY DATE_TRUNC('month', paid_at);",
    solution_columns: ["collection_month", "total_collection"],
    tables: ["payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_093",
    title: "Top 5 Courses By Pass Rate",
    description:
      "Find the top 5 course offerings with highest pass percentage.",
    difficulty: "hard",
    expected_query:
      "SELECT e.offering_id, ROUND(100.0 * COUNT(*) FILTER (WHERE e.final_grade_letter IS NOT NULL AND e.final_grade_letter <> 'F') / COUNT(*), 2) AS pass_rate FROM enrollments e WHERE e.enrollment_status = 'completed' GROUP BY e.offering_id HAVING COUNT(*) > 0 ORDER BY pass_rate DESC, e.offering_id ASC LIMIT 5;",
    solution_columns: ["offering_id", "pass_rate"],
    tables: ["enrollments"],
    comparison_config: {
      sort_by_columns: [
        { column: "pass_rate", direction: "desc" },
        { column: "offering_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_094",
    title: "Students With Attendance Drop",
    description:
      "Find students whose latest attendance percentage is lower than their previous completed course.",
    difficulty: "hard",
    expected_query:
      "WITH attendance_history AS ( SELECT student_user_id, offering_id, attendance_percentage, completion_date, LAG(attendance_percentage) OVER (PARTITION BY student_user_id ORDER BY completion_date ASC NULLS LAST, offering_id ASC) AS previous_attendance FROM enrollments WHERE attendance_percentage IS NOT NULL ) SELECT student_user_id, offering_id, attendance_percentage, previous_attendance FROM attendance_history WHERE previous_attendance IS NOT NULL AND attendance_percentage < previous_attendance;",
    solution_columns: [
      "student_user_id",
      "offering_id",
      "attendance_percentage",
      "previous_attendance",
    ],
    tables: ["enrollments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_095",
    title: "Teachers With Highest Workload",
    description:
      "Find top 5 teachers handling the highest number of distinct course offerings.",
    difficulty: "hard",
    expected_query:
      "SELECT teacher_user_id, COUNT(DISTINCT offering_id) AS total_offerings FROM course_teachers GROUP BY teacher_user_id ORDER BY total_offerings DESC, teacher_user_id ASC LIMIT 5;",
    solution_columns: ["teacher_user_id", "total_offerings"],
    tables: ["course_teachers"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_offerings", direction: "desc" },
        { column: "teacher_user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_096",
    title: "Students With Consecutive Failures",
    description: "Find students who failed two or more consecutive exams.",
    difficulty: "hard",
    expected_query:
      "WITH exam_failures AS ( SELECT student_user_id, exam_id, grade_letter, LAG(grade_letter) OVER (PARTITION BY student_user_id ORDER BY exam_id ASC) AS previous_grade FROM exam_results ) SELECT DISTINCT student_user_id FROM exam_failures WHERE grade_letter = 'F' AND previous_grade = 'F';",
    solution_columns: ["student_user_id"],
    tables: ["exam_results"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "EDUCATION_097",
    title: "Programs With Highest Revenue Per Student",
    description:
      "Find the top 5 programs by average successful payment collected per student.",
    difficulty: "hard",
    expected_query:
      "WITH program_revenue AS ( SELECT sp.program_id, SUM(p.paid_amount) AS total_revenue, COUNT(DISTINCT sp.user_id) AS total_students FROM payments p JOIN fee_invoices fi ON p.invoice_id = fi.id JOIN student_profiles sp ON fi.student_user_id = sp.user_id WHERE p.payment_status = 'successful' GROUP BY sp.program_id ) SELECT program_id, ROUND(total_revenue / NULLIF(total_students, 0), 2) AS revenue_per_student FROM program_revenue ORDER BY revenue_per_student DESC, program_id ASC LIMIT 5;",
    solution_columns: ["program_id", "revenue_per_student"],
    tables: ["payments", "fee_invoices", "student_profiles"],
    comparison_config: {
      sort_by_columns: [
        { column: "revenue_per_student", direction: "desc" },
        { column: "program_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_098",
    title: "Most Engaged Students",
    description: "Find top 10 students with highest total material view time.",
    difficulty: "hard",
    expected_query:
      "SELECT user_id, SUM(total_view_seconds) AS total_view_time FROM material_views GROUP BY user_id ORDER BY total_view_time DESC, user_id ASC LIMIT 10;",
    solution_columns: ["user_id", "total_view_time"],
    tables: ["material_views"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_view_time", direction: "desc" },
        { column: "user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_099",
    title: "Department With Best Feedback Score",
    description:
      "Find the department with the highest average teacher feedback score.",
    difficulty: "hard",
    expected_query:
      "SELECT tp.department_id, ROUND(AVG(sf.rating_value), 2) AS avg_feedback_score FROM student_feedback sf JOIN teacher_profiles tp ON sf.teacher_user_id = tp.user_id WHERE tp.department_id IS NOT NULL GROUP BY tp.department_id ORDER BY avg_feedback_score DESC, tp.department_id ASC LIMIT 1;",
    solution_columns: ["department_id", "avg_feedback_score"],
    tables: ["student_feedback", "teacher_profiles"],
    comparison_config: {
      sort_by_columns: [
        { column: "avg_feedback_score", direction: "desc" },
        { column: "department_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "EDUCATION_100",
    title: "Students More Consistent Than Program Average",
    description:
      "Find students whose attendance percentage variance across enrollments is lower than their program average variance.",
    difficulty: "hard",
    expected_query:
      "WITH student_variance AS ( SELECT sp.program_id, e.student_user_id, VARIANCE(e.attendance_percentage) AS attendance_variance FROM enrollments e JOIN student_profiles sp ON e.student_user_id = sp.user_id WHERE e.attendance_percentage IS NOT NULL GROUP BY sp.program_id, e.student_user_id ), program_avg_variance AS ( SELECT program_id, AVG(attendance_variance) AS avg_variance FROM student_variance GROUP BY program_id ) SELECT sv.student_user_id, sv.program_id, ROUND(sv.attendance_variance, 2) AS attendance_variance FROM student_variance sv JOIN program_avg_variance pav ON sv.program_id = pav.program_id WHERE sv.attendance_variance < pav.avg_variance;",
    solution_columns: ["student_user_id", "program_id", "attendance_variance"],
    tables: ["enrollments", "student_profiles"],
    comparison_config: {},
  },
];

export const hints = [
  {
    code: "EDUCATION_001",
    hints: [
      {
        hint_order: 1,
        content: "Count all institutions in one table.",
      },
      {
        hint_order: 2,
        content: "Use an aggregate function.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) from institutions.",
      },
    ],
  },
  {
    code: "EDUCATION_002",
    hints: [
      {
        hint_order: 1,
        content: "Filter only active campuses first.",
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
    code: "EDUCATION_003",
    hints: [
      {
        hint_order: 1,
        content: "Only active academic terms should be listed.",
      },
      {
        hint_order: 2,
        content: "Use the status column for filtering.",
      },
      {
        hint_order: 3,
        content:
          "Select term_name and academic_year, then ORDER BY year and name.",
      },
    ],
  },
  {
    code: "EDUCATION_004",
    hints: [
      {
        hint_order: 1,
        content: "Look in student_profiles only.",
      },
      {
        hint_order: 2,
        content: "Filter rows where enrollment_status is active.",
      },
      {
        hint_order: 3,
        content: "Return user_id, admission_number, and enrollment_status.",
      },
    ],
  },
  {
    code: "EDUCATION_005",
    hints: [
      {
        hint_order: 1,
        content: "Use teacher_profiles for hiring data.",
      },
      {
        hint_order: 2,
        content: "Ignore NULL hire dates.",
      },
      {
        hint_order: 3,
        content: "ORDER BY hire_date DESC and LIMIT 10.",
      },
    ],
  },
  {
    code: "EDUCATION_006",
    hints: [
      {
        hint_order: 1,
        content: "Find courses that are both mandatory and active.",
      },
      {
        hint_order: 2,
        content: "Use is_mandatory and is_active together.",
      },
      {
        hint_order: 3,
        content: "Select id, course_title, credit_value and sort by title.",
      },
    ],
  },
  {
    code: "EDUCATION_007",
    hints: [
      {
        hint_order: 1,
        content: "Look in classrooms for seating capacity.",
      },
      {
        hint_order: 2,
        content: "Filter capacity at least 100.",
      },
      {
        hint_order: 3,
        content: "Return room details and ORDER BY seating_capacity DESC.",
      },
    ],
  },
  {
    code: "EDUCATION_008",
    hints: [
      {
        hint_order: 1,
        content: "Use assignments table only.",
      },
      {
        hint_order: 2,
        content: "Sort by the due date.",
      },
      {
        hint_order: 3,
        content: "ORDER BY due_at ASC.",
      },
    ],
  },
  {
    code: "EDUCATION_009",
    hints: [
      {
        hint_order: 1,
        content: "Look in payments table.",
      },
      {
        hint_order: 2,
        content: "Keep only successful payments.",
      },
      {
        hint_order: 3,
        content:
          "Select invoice_id and paid_amount, then sort by paid_at DESC.",
      },
    ],
  },
  {
    code: "EDUCATION_010",
    hints: [
      {
        hint_order: 1,
        content: "Use support_tickets table only.",
      },
      {
        hint_order: 2,
        content: "Filter rows where ticket_status is open.",
      },
      {
        hint_order: 3,
        content: "Return issue_type and priority for open tickets.",
      },
    ],
  },
  {
    code: "EDUCATION_011",
    hints: [
      {
        hint_order: 1,
        content: "Group users by their role.",
      },
      {
        hint_order: 2,
        content: "Count rows inside each role group.",
      },
      {
        hint_order: 3,
        content: "GROUP BY user_role with COUNT(*).",
      },
    ],
  },
  {
    code: "EDUCATION_012",
    hints: [
      {
        hint_order: 1,
        content: "Use programs table and group by level.",
      },
      {
        hint_order: 2,
        content: "Count programs in each program_level.",
      },
      {
        hint_order: 3,
        content: "GROUP BY program_level.",
      },
    ],
  },
  {
    code: "EDUCATION_013",
    hints: [
      {
        hint_order: 1,
        content: "Use classrooms and group by room_type.",
      },
      {
        hint_order: 2,
        content: "Calculate average seating capacity.",
      },
      {
        hint_order: 3,
        content: "AVG(seating_capacity) with GROUP BY room_type.",
      },
    ],
  },
  {
    code: "EDUCATION_014",
    hints: [
      {
        hint_order: 1,
        content: "Use student_profiles only.",
      },
      {
        hint_order: 2,
        content: "Group by enrollment_status.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) for each status.",
      },
    ],
  },
  {
    code: "EDUCATION_015",
    hints: [
      {
        hint_order: 1,
        content: "Look in assignments table.",
      },
      {
        hint_order: 2,
        content: "Group rows by assignment_type.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with GROUP BY assignment_type.",
      },
    ],
  },
  {
    code: "EDUCATION_016",
    hints: [
      {
        hint_order: 1,
        content: "Use teacher_profiles and ignore NULL ratings.",
      },
      {
        hint_order: 2,
        content: "Group by employment_type.",
      },
      {
        hint_order: 3,
        content: "AVG(rating_score) for each employment type.",
      },
    ],
  },
  {
    code: "EDUCATION_017",
    hints: [
      {
        hint_order: 1,
        content: "Use fee_plans table.",
      },
      {
        hint_order: 2,
        content: "Group rows by fee_category.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) in each fee category.",
      },
    ],
  },
  {
    code: "EDUCATION_018",
    hints: [
      {
        hint_order: 1,
        content: "Only successful payments should be included.",
      },
      {
        hint_order: 2,
        content: "Group totals by payment_method.",
      },
      {
        hint_order: 3,
        content: "SUM(paid_amount) with GROUP BY payment_method.",
      },
    ],
  },
  {
    code: "EDUCATION_019",
    hints: [
      {
        hint_order: 1,
        content: "Use support_tickets table.",
      },
      {
        hint_order: 2,
        content: "Group rows by priority.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) for each priority.",
      },
    ],
  },
  {
    code: "EDUCATION_020",
    hints: [
      {
        hint_order: 1,
        content: "Use assignment_submissions.",
      },
      {
        hint_order: 2,
        content: "Only graded rows have obtained_marks.",
      },
      {
        hint_order: 3,
        content: "AVG(obtained_marks) where obtained_marks IS NOT NULL.",
      },
    ],
  },
  {
    code: "EDUCATION_021",
    hints: [
      {
        hint_order: 1,
        content: "Compare each student CGPA against the overall average.",
      },
      {
        hint_order: 2,
        content: "Compute the average from student_profiles.",
      },
      {
        hint_order: 3,
        content: "Use a subquery with AVG(cgpa) in the WHERE clause.",
      },
    ],
  },
  {
    code: "EDUCATION_022",
    hints: [
      {
        hint_order: 1,
        content: "Use courses table only.",
      },
      {
        hint_order: 2,
        content: "Filter rows where credit_value is greater than 4.",
      },
      {
        hint_order: 3,
        content: "Select course columns and ORDER BY credit_value DESC.",
      },
    ],
  },
  {
    code: "EDUCATION_023",
    hints: [
      {
        hint_order: 1,
        content: "Look for assignments allowing late work.",
      },
      {
        hint_order: 2,
        content: "Use the allow_late_submission flag.",
      },
      {
        hint_order: 3,
        content: "Filter true rows and sort by due_at.",
      },
    ],
  },
  {
    code: "EDUCATION_024",
    hints: [
      {
        hint_order: 1,
        content: "Upcoming means exam_date after today.",
      },
      {
        hint_order: 2,
        content: "Use CURRENT_DATE in the filter.",
      },
      {
        hint_order: 3,
        content: "WHERE exam_date > CURRENT_DATE.",
      },
    ],
  },
  {
    code: "EDUCATION_025",
    hints: [
      {
        hint_order: 1,
        content: "Count only published exam results.",
      },
      {
        hint_order: 2,
        content: "Use result_status for filtering.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) where result_status = 'published'.",
      },
    ],
  },
  {
    code: "EDUCATION_026",
    hints: [
      {
        hint_order: 1,
        content: "Use material_views table.",
      },
      {
        hint_order: 2,
        content: "Fully completed rows have completed = true.",
      },
      {
        hint_order: 3,
        content:
          "Filter by completed and return material_id, user_id, progress_percent.",
      },
    ],
  },
  {
    code: "EDUCATION_027",
    hints: [
      {
        hint_order: 1,
        content: "Look in discussion_threads.",
      },
      {
        hint_order: 2,
        content: "Pinned threads use the is_pinned flag.",
      },
      {
        hint_order: 3,
        content: "Filter true rows and ORDER BY created_at DESC.",
      },
    ],
  },
  {
    code: "EDUCATION_028",
    hints: [
      {
        hint_order: 1,
        content: "Use scholarships table only.",
      },
      {
        hint_order: 2,
        content: "Filter active scholarships with is_active.",
      },
      {
        hint_order: 3,
        content: "Return scholarship fields and sort by amount_value DESC.",
      },
    ],
  },
  {
    code: "EDUCATION_029",
    hints: [
      {
        hint_order: 1,
        content: "Use fee_invoices for overdue bills.",
      },
      {
        hint_order: 2,
        content: "Filter rows where invoice_status is overdue.",
      },
      {
        hint_order: 3,
        content: "Select invoice details and ORDER BY due_date ASC.",
      },
    ],
  },
  {
    code: "EDUCATION_030",
    hints: [
      {
        hint_order: 1,
        content: "Use app_events table.",
      },
      {
        hint_order: 2,
        content: "Most recent means latest event_time first.",
      },
      {
        hint_order: 3,
        content: "ORDER BY event_time DESC and LIMIT 20.",
      },
    ],
  },
  {
    code: "EDUCATION_031",
    hints: [
      {
        hint_order: 1,
        content: "Use enrollments table only.",
      },
      {
        hint_order: 2,
        content: "Count only rows with enrollment_status as enrolled.",
      },
      {
        hint_order: 3,
        content: "GROUP BY offering_id with COUNT(*).",
      },
    ],
  },
  {
    code: "EDUCATION_032",
    hints: [
      {
        hint_order: 1,
        content: "Use attendance_percentage from enrollments.",
      },
      {
        hint_order: 2,
        content: "Ignore NULL attendance values.",
      },
      {
        hint_order: 3,
        content: "AVG(attendance_percentage) grouped by offering_id.",
      },
    ],
  },
  {
    code: "EDUCATION_033",
    hints: [
      {
        hint_order: 1,
        content: "Use exams table only.",
      },
      {
        hint_order: 2,
        content: "Group rows by exam_type.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) for each exam type.",
      },
    ],
  },
  {
    code: "EDUCATION_034",
    hints: [
      {
        hint_order: 1,
        content: "Use exam_results table.",
      },
      {
        hint_order: 2,
        content: "Only average non-NULL obtained marks.",
      },
      {
        hint_order: 3,
        content: "GROUP BY exam_id with AVG(obtained_marks).",
      },
    ],
  },
  {
    code: "EDUCATION_035",
    hints: [
      {
        hint_order: 1,
        content: "Look in support_tickets.",
      },
      {
        hint_order: 2,
        content: "Group by issue_type.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) for each issue category.",
      },
    ],
  },
  {
    code: "EDUCATION_036",
    hints: [
      {
        hint_order: 1,
        content: "Use payments table.",
      },
      {
        hint_order: 2,
        content: "Only successful payments should be included.",
      },
      {
        hint_order: 3,
        content: "AVG(paid_amount) where payment_status = 'successful'.",
      },
    ],
  },
  {
    code: "EDUCATION_037",
    hints: [
      {
        hint_order: 1,
        content: "Use course_offerings table.",
      },
      {
        hint_order: 2,
        content: "Group offerings by course_status.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) for each offering status.",
      },
    ],
  },
  {
    code: "EDUCATION_038",
    hints: [
      {
        hint_order: 1,
        content: "Use teacher_profiles only.",
      },
      {
        hint_order: 2,
        content: "Ignore NULL department_id values.",
      },
      {
        hint_order: 3,
        content: "GROUP BY department_id with COUNT(*).",
      },
    ],
  },
  {
    code: "EDUCATION_039",
    hints: [
      {
        hint_order: 1,
        content: "Use learning_materials table.",
      },
      {
        hint_order: 2,
        content: "Group rows by material_type.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) for each material type.",
      },
    ],
  },
  {
    code: "EDUCATION_040",
    hints: [
      {
        hint_order: 1,
        content: "Use student_feedback table.",
      },
      {
        hint_order: 2,
        content: "Group by feedback_category.",
      },
      {
        hint_order: 3,
        content: "AVG(rating_value) for each category.",
      },
    ],
  },
  {
    code: "EDUCATION_041",
    hints: [
      {
        hint_order: 1,
        content: "Start from student_profiles and users.",
      },
      {
        hint_order: 2,
        content: "Only active students should be returned.",
      },
      {
        hint_order: 3,
        content: "Join programs to get program_name.",
      },
    ],
  },
  {
    code: "EDUCATION_042",
    hints: [
      {
        hint_order: 1,
        content: "Use teacher_profiles as the base table.",
      },
      {
        hint_order: 2,
        content: "Join users for teacher names.",
      },
      {
        hint_order: 3,
        content: "Join departments to get department_name.",
      },
    ],
  },
  {
    code: "EDUCATION_043",
    hints: [
      {
        hint_order: 1,
        content: "Course offerings link courses and teachers.",
      },
      {
        hint_order: 2,
        content: "Join courses for the course title.",
      },
      {
        hint_order: 3,
        content: "Join users using primary_teacher_id.",
      },
    ],
  },
  {
    code: "EDUCATION_044",
    hints: [
      {
        hint_order: 1,
        content: "Count only active students.",
      },
      {
        hint_order: 2,
        content: "Join programs using program_id.",
      },
      {
        hint_order: 3,
        content: "GROUP BY program_name.",
      },
    ],
  },
  {
    code: "EDUCATION_045",
    hints: [
      {
        hint_order: 1,
        content: "Use student_profiles and users.",
      },
      {
        hint_order: 2,
        content: "Low attendance means below 75.",
      },
      {
        hint_order: 3,
        content: "Join users for names and filter attendance_percentage < 75.",
      },
    ],
  },
  {
    code: "EDUCATION_046",
    hints: [
      {
        hint_order: 1,
        content: "Assignments and assignment_submissions are both needed.",
      },
      {
        hint_order: 2,
        content: "Only non-NULL obtained marks should be averaged.",
      },
      {
        hint_order: 3,
        content: "GROUP BY assignment id and title.",
      },
    ],
  },
  {
    code: "EDUCATION_047",
    hints: [
      {
        hint_order: 1,
        content: "Join exams with exam_results.",
      },
      {
        hint_order: 2,
        content: "Treat non-F grades as passes.",
      },
      {
        hint_order: 3,
        content: "COUNT passed students grouped by exam.",
      },
    ],
  },
  {
    code: "EDUCATION_048",
    hints: [
      {
        hint_order: 1,
        content:
          "Payments flow through invoices to students and then programs.",
      },
      {
        hint_order: 2,
        content: "Only successful payments should count.",
      },
      {
        hint_order: 3,
        content: "SUM paid_amount grouped by program_name.",
      },
    ],
  },
  {
    code: "EDUCATION_049",
    hints: [
      {
        hint_order: 1,
        content: "Use course_offerings only.",
      },
      {
        hint_order: 2,
        content: "Compare enrolled_count with 90 percent of seat_limit.",
      },
      {
        hint_order: 3,
        content: "Filter offerings where enrolled_count >= seat_limit * 0.9.",
      },
    ],
  },
  {
    code: "EDUCATION_050",
    hints: [
      {
        hint_order: 1,
        content: "Use discussion_threads and discussion_posts.",
      },
      {
        hint_order: 2,
        content: "A LEFT JOIN helps keep threads with zero posts.",
      },
      {
        hint_order: 3,
        content: "COUNT posts grouped by thread.",
      },
    ],
  },
  {
    code: "EDUCATION_051",
    hints: [
      {
        hint_order: 1,
        content: "guardian_relationships connects students and guardians.",
      },
      {
        hint_order: 2,
        content: "Join users twice to read both names.",
      },
      {
        hint_order: 3,
        content: "Filter only rows where is_primary = true.",
      },
    ],
  },
  {
    code: "EDUCATION_052",
    hints: [
      {
        hint_order: 1,
        content: "Use attendance_sessions table.",
      },
      {
        hint_order: 2,
        content: "Count sessions per offering.",
      },
      {
        hint_order: 3,
        content: "GROUP BY offering_id.",
      },
    ],
  },
  {
    code: "EDUCATION_053",
    hints: [
      {
        hint_order: 1,
        content: "Use attendance_records.",
      },
      {
        hint_order: 2,
        content: "Keep only attendance_status = 'present' rows.",
      },
      {
        hint_order: 3,
        content: "COUNT present rows grouped by student_user_id.",
      },
    ],
  },
  {
    code: "EDUCATION_054",
    hints: [
      {
        hint_order: 1,
        content:
          "Assignments should still appear even with zero late submissions.",
      },
      {
        hint_order: 2,
        content:
          "Join submissions using submission_status = 'late_submitted' condition.",
      },
      {
        hint_order: 3,
        content: "Use LEFT JOIN and COUNT(submission id).",
      },
    ],
  },
  {
    code: "EDUCATION_055",
    hints: [
      {
        hint_order: 1,
        content: "Join assignments with assignment_submissions.",
      },
      {
        hint_order: 2,
        content: "Only non-NULL plagiarism scores should be averaged.",
      },
      {
        hint_order: 3,
        content: "GROUP BY assignment id and title.",
      },
    ],
  },
  {
    code: "EDUCATION_056",
    hints: [
      {
        hint_order: 1,
        content: "Use exam_results as the base table.",
      },
      {
        hint_order: 2,
        content: "Join exams for exam_name.",
      },
      {
        hint_order: 3,
        content: "Join users for student full_name.",
      },
    ],
  },
  {
    code: "EDUCATION_057",
    hints: [
      {
        hint_order: 1,
        content: "Use material_views only.",
      },
      {
        hint_order: 2,
        content: "Each row represents a viewed material per user.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) grouped by user_id.",
      },
    ],
  },
  {
    code: "EDUCATION_058",
    hints: [
      {
        hint_order: 1,
        content: "Materials belong to offerings through learning_materials.",
      },
      {
        hint_order: 2,
        content: "Join material_views to learning_materials.",
      },
      {
        hint_order: 3,
        content: "AVG(progress_percent) grouped by offering_id.",
      },
    ],
  },
  {
    code: "EDUCATION_059",
    hints: [
      {
        hint_order: 1,
        content: "Use student_feedback table.",
      },
      {
        hint_order: 2,
        content: "Ignore rows where teacher_user_id is NULL.",
      },
      {
        hint_order: 3,
        content: "AVG(rating_value) grouped by teacher_user_id.",
      },
    ],
  },
  {
    code: "EDUCATION_060",
    hints: [
      {
        hint_order: 1,
        content: "Outstanding invoices are open, overdue, or partial.",
      },
      {
        hint_order: 2,
        content: "Use fee_invoices only.",
      },
      {
        hint_order: 3,
        content: "SUM(total_amount) grouped by student_user_id.",
      },
    ],
  },
  {
    code: "EDUCATION_061",
    hints: [
      {
        hint_order: 1,
        content: "Compare each student attendance with the overall average.",
      },
      {
        hint_order: 2,
        content: "Use AVG(attendance_percentage) from enrollments.",
      },
      {
        hint_order: 3,
        content: "A subquery in WHERE will help compare against the average.",
      },
    ],
  },
  {
    code: "EDUCATION_062",
    hints: [
      {
        hint_order: 1,
        content: "Use teacher_profiles for rating comparison.",
      },
      {
        hint_order: 2,
        content: "Compare rating_score with the average rating.",
      },
      {
        hint_order: 3,
        content: "Use a subquery with AVG(rating_score).",
      },
    ],
  },
  {
    code: "EDUCATION_063",
    hints: [
      {
        hint_order: 1,
        content: "Look for students with more than one active scholarship.",
      },
      {
        hint_order: 2,
        content: "Group by student_user_id.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "EDUCATION_064",
    hints: [
      {
        hint_order: 1,
        content: "Use support_tickets table only.",
      },
      {
        hint_order: 2,
        content: "Find users who created multiple tickets.",
      },
      {
        hint_order: 3,
        content: "GROUP BY created_by_user_id with HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "EDUCATION_065",
    hints: [
      {
        hint_order: 1,
        content: "Use material_views table.",
      },
      {
        hint_order: 2,
        content:
          "Check if the same user viewed the same material multiple times.",
      },
      {
        hint_order: 3,
        content: "GROUP BY user_id, material_id and HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "EDUCATION_066",
    hints: [
      {
        hint_order: 1,
        content: "Use app_events for user activity.",
      },
      {
        hint_order: 2,
        content: "Group by event_type.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) for each event type and sort descending.",
      },
    ],
  },
  {
    code: "EDUCATION_067",
    hints: [
      {
        hint_order: 1,
        content: "Find courses without any active offering.",
      },
      {
        hint_order: 2,
        content: "Use a LEFT JOIN from courses to course_offerings.",
      },
      {
        hint_order: 3,
        content: "Keep rows where offering id is NULL.",
      },
    ],
  },
  {
    code: "EDUCATION_068",
    hints: [
      {
        hint_order: 1,
        content: "Find teachers who are not assigned to any offering.",
      },
      {
        hint_order: 2,
        content: "LEFT JOIN teacher_profiles with course_teachers.",
      },
      {
        hint_order: 3,
        content: "Filter rows where offering_id is NULL.",
      },
    ],
  },
  {
    code: "EDUCATION_069",
    hints: [
      {
        hint_order: 1,
        content: "Find students without guardians.",
      },
      {
        hint_order: 2,
        content: "LEFT JOIN student_profiles with guardian_relationships.",
      },
      {
        hint_order: 3,
        content: "Keep rows where guardian row is missing.",
      },
    ],
  },
  {
    code: "EDUCATION_070",
    hints: [
      {
        hint_order: 1,
        content: "Find assignments without submissions.",
      },
      {
        hint_order: 2,
        content: "LEFT JOIN submissions to assignments.",
      },
      {
        hint_order: 3,
        content: "WHERE submission id IS NULL.",
      },
    ],
  },
  {
    code: "EDUCATION_071",
    hints: [
      {
        hint_order: 1,
        content: "Find the highest score in each exam.",
      },
      {
        hint_order: 2,
        content: "Use exam_results table.",
      },
      {
        hint_order: 3,
        content: "MAX(obtained_marks) grouped by exam_id.",
      },
    ],
  },
  {
    code: "EDUCATION_072",
    hints: [
      {
        hint_order: 1,
        content: "Find the lowest attendance per offering.",
      },
      {
        hint_order: 2,
        content: "Use enrollments table.",
      },
      {
        hint_order: 3,
        content: "MIN(attendance_percentage) grouped by offering_id.",
      },
    ],
  },
  {
    code: "EDUCATION_073",
    hints: [
      {
        hint_order: 1,
        content: "Find the latest assignment per offering.",
      },
      {
        hint_order: 2,
        content: "Sort assignments by due_at descending inside each offering.",
      },
      {
        hint_order: 3,
        content: "Use ROW_NUMBER() partitioned by offering_id.",
      },
    ],
  },
  {
    code: "EDUCATION_074",
    hints: [
      {
        hint_order: 1,
        content: "Find the latest payment per student.",
      },
      {
        hint_order: 2,
        content: "Use successful payments only.",
      },
      {
        hint_order: 3,
        content: "Use ROW_NUMBER() over paid_at DESC per student.",
      },
    ],
  },
  {
    code: "EDUCATION_075",
    hints: [
      {
        hint_order: 1,
        content: "Find top scorer per exam.",
      },
      {
        hint_order: 2,
        content: "Rank scores within each exam.",
      },
      {
        hint_order: 3,
        content:
          "Use ROW_NUMBER() partitioned by exam_id ordered by marks DESC.",
      },
    ],
  },
  {
    code: "EDUCATION_076",
    hints: [
      {
        hint_order: 1,
        content: "Find top viewed materials.",
      },
      {
        hint_order: 2,
        content: "Group by material_id.",
      },
      {
        hint_order: 3,
        content: "SUM(total_view_seconds) and sort descending.",
      },
    ],
  },
  {
    code: "EDUCATION_077",
    hints: [
      {
        hint_order: 1,
        content: "Find most active discussion users.",
      },
      {
        hint_order: 2,
        content: "Count posts per created_by_user_id.",
      },
      {
        hint_order: 3,
        content: "ORDER BY COUNT(*) DESC LIMIT 10.",
      },
    ],
  },
  {
    code: "EDUCATION_078",
    hints: [
      {
        hint_order: 1,
        content: "Find students with the highest CGPA in each program.",
      },
      {
        hint_order: 2,
        content: "Partition rows by program_id.",
      },
      {
        hint_order: 3,
        content: "Use DENSE_RANK() or ROW_NUMBER() ordered by cgpa DESC.",
      },
    ],
  },
  {
    code: "EDUCATION_079",
    hints: [
      {
        hint_order: 1,
        content: "Find programs with above-average fees.",
      },
      {
        hint_order: 2,
        content: "Compare fee amounts with overall average fee.",
      },
      {
        hint_order: 3,
        content: "Use AVG(total_fee_amount) in a subquery.",
      },
    ],
  },
  {
    code: "EDUCATION_080",
    hints: [
      {
        hint_order: 1,
        content: "Find teachers with above-average feedback.",
      },
      {
        hint_order: 2,
        content: "Group feedback by teacher first.",
      },
      {
        hint_order: 3,
        content: "Compare teacher average against overall teacher average.",
      },
    ],
  },
  {
    code: "EDUCATION_081",
    hints: [
      {
        hint_order: 1,
        content: "Compare student CGPA with program average CGPA.",
      },
      {
        hint_order: 2,
        content: "Compute average CGPA per program.",
      },
      {
        hint_order: 3,
        content: "Join the program average back to student_profiles.",
      },
    ],
  },
  {
    code: "EDUCATION_082",
    hints: [
      {
        hint_order: 1,
        content: "Find students who failed multiple exams.",
      },
      {
        hint_order: 2,
        content: "Filter grade_letter = 'F' first.",
      },
      {
        hint_order: 3,
        content: "GROUP BY student_user_id with HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "EDUCATION_083",
    hints: [
      {
        hint_order: 1,
        content: "Compare each teacher rating with department average.",
      },
      {
        hint_order: 2,
        content: "First compute teacher averages.",
      },
      {
        hint_order: 3,
        content:
          "Then compare against department-level average of those ratings.",
      },
    ],
  },
  {
    code: "EDUCATION_084",
    hints: [
      {
        hint_order: 1,
        content: "Check if every enrolled student submitted every assignment.",
      },
      {
        hint_order: 2,
        content: "Compare expected submission count with actual count.",
      },
      {
        hint_order: 3,
        content:
          "Assignments count × enrolled students count = expected submissions.",
      },
    ],
  },
  {
    code: "EDUCATION_085",
    hints: [
      {
        hint_order: 1,
        content: "Find students with invoices but no successful payments.",
      },
      {
        hint_order: 2,
        content: "LEFT JOIN payments on invoices.",
      },
      {
        hint_order: 3,
        content: "Keep rows where successful payment is missing.",
      },
    ],
  },
  {
    code: "EDUCATION_086",
    hints: [
      {
        hint_order: 1,
        content: "Find classroom schedule overlaps.",
      },
      {
        hint_order: 2,
        content: "Compare timetable_slots with itself.",
      },
      {
        hint_order: 3,
        content: "Use self join with time overlap conditions.",
      },
    ],
  },
  {
    code: "EDUCATION_087",
    hints: [
      {
        hint_order: 1,
        content: "Find teacher timetable conflicts.",
      },
      {
        hint_order: 2,
        content: "Join teacher assignments with timetable slots.",
      },
      {
        hint_order: 3,
        content: "Self join teacher slots and compare overlapping times.",
      },
    ],
  },
  {
    code: "EDUCATION_088",
    hints: [
      {
        hint_order: 1,
        content: "Compare earlier exams vs later exams for each student.",
      },
      {
        hint_order: 2,
        content: "Split exams into two halves using window functions.",
      },
      {
        hint_order: 3,
        content: "Compare average marks of second half vs first half.",
      },
    ],
  },
  {
    code: "EDUCATION_089",
    hints: [
      {
        hint_order: 1,
        content: "Find programs where all students are active.",
      },
      {
        hint_order: 2,
        content: "Compare total students with active students.",
      },
      {
        hint_order: 3,
        content: "Use HAVING COUNT(*) = COUNT(*) FILTER (...).",
      },
    ],
  },
  {
    code: "EDUCATION_090",
    hints: [
      {
        hint_order: 1,
        content: "Compare assignment average score with exam average score.",
      },
      {
        hint_order: 2,
        content: "Compute averages separately per student.",
      },
      {
        hint_order: 3,
        content: "Join both averages and compare them.",
      },
    ],
  },
  {
    code: "EDUCATION_091",
    hints: [
      {
        hint_order: 1,
        content: "Find top 3 students per program by CGPA.",
      },
      {
        hint_order: 2,
        content: "Use window ranking partitioned by program_id.",
      },
      {
        hint_order: 3,
        content: "Keep rows where rank <= 3.",
      },
    ],
  },
  {
    code: "EDUCATION_092",
    hints: [
      {
        hint_order: 1,
        content: "Group successful payments by month.",
      },
      {
        hint_order: 2,
        content: "Use DATE_TRUNC('month', paid_at).",
      },
      {
        hint_order: 3,
        content: "SUM(paid_amount) for each month.",
      },
    ],
  },
  {
    code: "EDUCATION_093",
    hints: [
      {
        hint_order: 1,
        content: "Calculate pass percentage per offering.",
      },
      {
        hint_order: 2,
        content:
          "Count passed students and divide by total completed students.",
      },
      {
        hint_order: 3,
        content: "Use conditional COUNT with FILTER or CASE.",
      },
    ],
  },
  {
    code: "EDUCATION_094",
    hints: [
      {
        hint_order: 1,
        content:
          "Compare current attendance with previous attendance per student.",
      },
      {
        hint_order: 2,
        content: "Use LAG(attendance_percentage).",
      },
      {
        hint_order: 3,
        content: "Keep rows where current attendance is lower.",
      },
    ],
  },
  {
    code: "EDUCATION_095",
    hints: [
      {
        hint_order: 1,
        content: "Find teachers handling the most offerings.",
      },
      {
        hint_order: 2,
        content: "Count distinct offering_id per teacher.",
      },
      {
        hint_order: 3,
        content: "Sort descending and LIMIT 5.",
      },
    ],
  },
  {
    code: "EDUCATION_096",
    hints: [
      {
        hint_order: 1,
        content: "Find students with consecutive exam failures.",
      },
      {
        hint_order: 2,
        content: "Use LAG(grade_letter).",
      },
      {
        hint_order: 3,
        content: "Check where both current and previous grades are F.",
      },
    ],
  },
  {
    code: "EDUCATION_097",
    hints: [
      {
        hint_order: 1,
        content: "Compute revenue per student by program.",
      },
      {
        hint_order: 2,
        content: "Total successful payments divided by distinct students.",
      },
      {
        hint_order: 3,
        content: "GROUP BY program_id and calculate ratio.",
      },
    ],
  },
  {
    code: "EDUCATION_098",
    hints: [
      {
        hint_order: 1,
        content: "Find most engaged users by total watch time.",
      },
      {
        hint_order: 2,
        content: "SUM total_view_seconds per user.",
      },
      {
        hint_order: 3,
        content: "Sort descending and LIMIT 10.",
      },
    ],
  },
  {
    code: "EDUCATION_099",
    hints: [
      {
        hint_order: 1,
        content: "Find department with best average feedback.",
      },
      {
        hint_order: 2,
        content: "Join feedback with teacher departments.",
      },
      {
        hint_order: 3,
        content: "AVG(rating_value) grouped by department and take top 1.",
      },
    ],
  },
  {
    code: "EDUCATION_100",
    hints: [
      {
        hint_order: 1,
        content:
          "Compare student attendance variance with program average variance.",
      },
      {
        hint_order: 2,
        content: "Use VARIANCE(attendance_percentage) per student.",
      },
      {
        hint_order: 3,
        content: "Compare against average variance per program.",
      },
    ],
  },
];

export const conceptFilters = [
  {
    code: "EDUCATION_001",
    concepts: ["aggregation", "count"],
  },
  {
    code: "EDUCATION_002",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "EDUCATION_003",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_004",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_005",
    concepts: ["filtering", "null_handling", "sorting", "limit"],
  },
  {
    code: "EDUCATION_006",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_007",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_008",
    concepts: ["sorting"],
  },
  {
    code: "EDUCATION_009",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_010",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_011",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "EDUCATION_012",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "EDUCATION_013",
    concepts: ["aggregation", "average", "group_by", "sorting", "calculation"],
  },
  {
    code: "EDUCATION_014",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "EDUCATION_015",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "EDUCATION_016",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_017",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "EDUCATION_018",
    concepts: [
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
    code: "EDUCATION_019",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "EDUCATION_020",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_021",
    concepts: [
      "filtering",
      "aggregation",
      "average",
      "subquery",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "EDUCATION_022",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_023",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_024",
    concepts: ["filtering", "date_functions", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_025",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "EDUCATION_026",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_027",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_028",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_029",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_030",
    concepts: ["sorting", "limit"],
  },
  {
    code: "EDUCATION_031",
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
    code: "EDUCATION_032",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_033",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "EDUCATION_034",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_035",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "EDUCATION_036",
    concepts: [
      "filtering",
      "aggregation",
      "average",
      "calculation",
      "comparison",
    ],
  },
  {
    code: "EDUCATION_037",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "EDUCATION_038",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "sorting",
    ],
  },
  {
    code: "EDUCATION_039",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "EDUCATION_040",
    concepts: ["aggregation", "average", "group_by", "sorting", "calculation"],
  },
  {
    code: "EDUCATION_041",
    concepts: ["joins", "left_join", "filtering", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_042",
    concepts: ["joins", "left_join", "sorting"],
  },
  {
    code: "EDUCATION_043",
    concepts: ["joins", "left_join", "sorting"],
  },
  {
    code: "EDUCATION_044",
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
    code: "EDUCATION_045",
    concepts: ["joins", "filtering", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_046",
    concepts: [
      "joins",
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_047",
    concepts: [
      "joins",
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "EDUCATION_048",
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
    code: "EDUCATION_049",
    concepts: [
      "filtering",
      "null_handling",
      "arithmetic",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_050",
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
    code: "EDUCATION_051",
    concepts: ["self_join", "joins", "filtering", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_052",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "EDUCATION_053",
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
    code: "EDUCATION_054",
    concepts: [
      "joins",
      "left_join",
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "EDUCATION_055",
    concepts: [
      "joins",
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_056",
    concepts: ["joins", "sorting"],
  },
  {
    code: "EDUCATION_057",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "EDUCATION_058",
    concepts: [
      "joins",
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_059",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_060",
    concepts: [
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
    code: "EDUCATION_061",
    concepts: [
      "filtering",
      "null_handling",
      "window_functions",
      "row_number",
      "sorting",
      "limit",
    ],
  },
  {
    code: "EDUCATION_062",
    concepts: ["filtering", "sorting", "limit", "comparison"],
  },
  {
    code: "EDUCATION_063",
    concepts: [
      "filtering",
      "window_functions",
      "sum",
      "running_total",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "EDUCATION_064",
    concepts: [
      "window_functions",
      "lag",
      "lag_lead",
      "partition_by",
      "sorting",
    ],
  },
  {
    code: "EDUCATION_065",
    concepts: [
      "window_functions",
      "lead",
      "lag_lead",
      "partition_by",
      "sorting",
    ],
  },
  {
    code: "EDUCATION_066",
    concepts: ["window_functions", "ranking", "partition_by", "sorting"],
  },
  {
    code: "EDUCATION_067",
    concepts: [
      "filtering",
      "null_handling",
      "window_functions",
      "moving_average",
      "average",
      "partition_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_068",
    concepts: [
      "filtering",
      "null_handling",
      "window_functions",
      "ranking",
      "partition_by",
      "sorting",
    ],
  },
  {
    code: "EDUCATION_069",
    concepts: [
      "filtering",
      "null_handling",
      "window_functions",
      "ranking",
      "sorting",
    ],
  },
  {
    code: "EDUCATION_070",
    concepts: ["window_functions", "count", "partition_by", "sorting"],
  },
  {
    code: "EDUCATION_071",
    concepts: ["filtering", "distinct", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_072",
    concepts: [
      "joins",
      "aggregation",
      "average",
      "group_by",
      "filtering",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "EDUCATION_073",
    concepts: [
      "joins",
      "filtering",
      "null_handling",
      "aggregation",
      "count_distinct",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "EDUCATION_074",
    concepts: [
      "cte",
      "window_functions",
      "lag",
      "lag_lead",
      "partition_by",
      "aggregation",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "EDUCATION_075",
    concepts: [
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
    code: "EDUCATION_076",
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
    ],
  },
  {
    code: "EDUCATION_077",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "average",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "filtering",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_078",
    concepts: [
      "filtering",
      "arithmetic",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_079",
    concepts: [
      "cte",
      "joins",
      "left_join",
      "aggregation",
      "count",
      "count_distinct",
      "group_by",
      "filtering",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "EDUCATION_080",
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
    code: "EDUCATION_081",
    concepts: [
      "cte",
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "group_by",
      "joins",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "EDUCATION_082",
    concepts: [
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
    code: "EDUCATION_083",
    concepts: [
      "cte",
      "joins",
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_084",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "group_by",
      "filtering",
      "sorting",
      "comparison",
      "arithmetic",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_085",
    concepts: [
      "left_join",
      "joins",
      "filtering",
      "distinct",
      "null_handling",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "EDUCATION_086",
    concepts: [
      "self_join",
      "joins",
      "filtering",
      "null_handling",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "EDUCATION_087",
    concepts: ["cte", "self_join", "joins", "sorting", "comparison"],
  },
  {
    code: "EDUCATION_088",
    concepts: [
      "cte",
      "window_functions",
      "row_number",
      "count",
      "partition_by",
      "aggregation",
      "average",
      "group_by",
      "case_when",
      "sorting",
      "comparison",
      "arithmetic",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_089",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "conditional_aggregation",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "EDUCATION_090",
    concepts: [
      "cte",
      "aggregation",
      "average",
      "group_by",
      "joins",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_091",
    concepts: [
      "cte",
      "filtering",
      "null_handling",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "EDUCATION_092",
    concepts: [
      "filtering",
      "null_handling",
      "date_functions",
      "aggregation",
      "sum",
      "group_by",
      "trend_analysis",
      "sorting",
      "calculation",
      "comparison",
    ],
  },
  {
    code: "EDUCATION_093",
    concepts: [
      "filtering",
      "aggregation",
      "count",
      "conditional_aggregation",
      "group_by",
      "having",
      "sorting",
      "limit",
      "comparison",
      "arithmetic",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_094",
    concepts: [
      "cte",
      "filtering",
      "null_handling",
      "window_functions",
      "lag",
      "lag_lead",
      "partition_by",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "EDUCATION_095",
    concepts: ["aggregation", "count_distinct", "group_by", "sorting", "limit"],
  },
  {
    code: "EDUCATION_096",
    concepts: [
      "cte",
      "window_functions",
      "lag",
      "lag_lead",
      "partition_by",
      "filtering",
      "distinct",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "EDUCATION_097",
    concepts: [
      "cte",
      "joins",
      "filtering",
      "aggregation",
      "sum",
      "count_distinct",
      "group_by",
      "sorting",
      "limit",
      "comparison",
      "arithmetic",
      "calculation",
      "null_handling",
    ],
  },
  {
    code: "EDUCATION_098",
    concepts: ["aggregation", "sum", "group_by", "sorting", "limit"],
  },
  {
    code: "EDUCATION_099",
    concepts: [
      "joins",
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "limit",
      "calculation",
    ],
  },
  {
    code: "EDUCATION_100",
    concepts: [
      "cte",
      "joins",
      "aggregation",
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
    code: "EDUCATION_001",
    approaches: [
      {
        approach_title: "COUNT all",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS total_institutions FROM institutions;",
        explanation:
          "## 🧠 Approach\n\nCount all rows in institutions table.\n\n## 🔍 Explanation\n\n- Each row represents one institution.\n- `COUNT(*)` counts all rows including any null values.\n- This directly gives total institutions.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query: "SELECT COUNT(id) AS total_institutions FROM institutions;",
        explanation:
          "## 🧠 Approach\n\nCount non-null institution IDs.\n\n## 🔍 Explanation\n\n- Works same as `COUNT(*)` if `id` is NOT NULL.\n- Less safe than `COUNT(*)` if nulls are possible.",
      },
    ],
  },
  {
    code: "EDUCATION_002",
    approaches: [
      {
        approach_title: "Filter active",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS active_campuses FROM campuses WHERE is_active = true;",
        explanation:
          "## 🧠 Approach\n\nFilter active campuses and count them.\n\n## 🔍 Explanation\n\n- `WHERE is_active = true` keeps only active rows.\n- `COUNT(*)` returns total active campuses.",
      },
      {
        approach_title: "CASE count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(CASE WHEN is_active = true THEN 1 END) AS active_campuses FROM campuses;",
        explanation:
          "## 🧠 Approach\n\nCount conditionally using CASE.\n\n## 🔍 Explanation\n\n- CASE returns 1 for active rows.\n- COUNT counts non-null values.\n- More flexible but less direct than WHERE.",
      },
    ],
  },
  {
    code: "EDUCATION_003",
    approaches: [
      {
        approach_title: "Filter active terms",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT term_name, academic_year FROM academic_terms WHERE status = 'active';",
        explanation:
          "## 🧠 Approach\n\nFilter active academic terms.\n\n## 🔍 Explanation\n\n- `status = 'active'` ensures only current terms.\n- Select required columns only.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT term_name, academic_year FROM academic_terms WHERE status IN ('active');",
        explanation:
          "## 🧠 Approach\n\nUse IN clause.\n\n## 🔍 Explanation\n\n- Equivalent to equality.\n- Useful when multiple statuses are needed.",
      },
    ],
  },
  {
    code: "EDUCATION_004",
    approaches: [
      {
        approach_title: "Filter active students",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, admission_number, enrollment_status FROM student_profiles WHERE enrollment_status = 'active';",
        explanation:
          "## 🧠 Approach\n\nFilter students with active enrollment.\n\n## 🔍 Explanation\n\n- `WHERE enrollment_status = 'active'` ensures only active students.",
      },
      {
        approach_title: "CASE filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, admission_number, enrollment_status FROM student_profiles WHERE CASE WHEN enrollment_status = 'active' THEN true ELSE false END;",
        explanation:
          "## 🧠 Approach\n\nUse CASE inside WHERE.\n\n## 🔍 Explanation\n\n- Works same as direct filter.\n- More verbose, not recommended.",
      },
    ],
  },
  {
    code: "EDUCATION_005",
    approaches: [
      {
        approach_title: "ORDER LIMIT",
        approach_type: "sorting",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, employee_code, hire_date FROM teacher_profiles WHERE hire_date IS NOT NULL ORDER BY hire_date DESC, user_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nSort teachers by latest hire date and limit results.\n\n## 🔍 Explanation\n\n- `hire_date DESC` → newest first\n- `user_id ASC` → tie-breaker\n- `LIMIT 10` → top 10 results",
      },
      {
        approach_title: "ROW_NUMBER",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, employee_code, hire_date FROM (SELECT user_id, employee_code, hire_date, ROW_NUMBER() OVER (ORDER BY hire_date DESC, user_id ASC) AS rn FROM teacher_profiles WHERE hire_date IS NOT NULL) t WHERE rn <= 10;",
        explanation:
          "## 🧠 Approach\n\nRank rows using ROW_NUMBER.\n\n## 🔍 Explanation\n\n- Assigns rank based on sorting.\n- Filter first 10 rows.\n- Useful when pagination or further ranking logic is needed.",
      },
    ],
  },
  {
    code: "EDUCATION_006",
    approaches: [
      {
        approach_title: "Filter mandatory",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, course_title, credit_value FROM courses WHERE is_mandatory = true AND is_active = true;",
        explanation:
          "## 🧠 Approach\n\nFilter mandatory and active courses.\n\n## 🔍 Explanation\n\n- Combines two boolean conditions.\n- Returns only required courses.",
      },
      {
        approach_title: "CASE filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, course_title, credit_value FROM courses WHERE (CASE WHEN is_mandatory = true AND is_active = true THEN true ELSE false END);",
        explanation:
          "## 🧠 Approach\n\nUse CASE expression.\n\n## 🔍 Explanation\n\n- Equivalent but unnecessary.\n- Direct WHERE is cleaner.",
      },
    ],
  },
  {
    code: "EDUCATION_007",
    approaches: [
      {
        approach_title: "Capacity filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, campus_id, room_name, seating_capacity FROM classrooms WHERE seating_capacity >= 100;",
        explanation:
          "## 🧠 Approach\n\nFilter classrooms based on capacity.\n\n## 🔍 Explanation\n\n- `>= 100` ensures large classrooms.\n- Direct numeric comparison.",
      },
      {
        approach_title: "CASE filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, campus_id, room_name, seating_capacity FROM classrooms WHERE CASE WHEN seating_capacity >= 100 THEN true ELSE false END;",
        explanation:
          "## 🧠 Approach\n\nUse CASE logic.\n\n## 🔍 Explanation\n\n- Same result but verbose.\n- Avoid unnecessary CASE.",
      },
    ],
  },
  {
    code: "EDUCATION_008",
    approaches: [
      {
        approach_title: "ORDER ascending",
        approach_type: "sorting",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, offering_id, assignment_title, due_at FROM assignments ORDER BY due_at ASC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nSort assignments by earliest due date.\n\n## 🔍 Explanation\n\n- `due_at ASC` → earliest first\n- `id ASC` → tie-breaker",
      },
      {
        approach_title: "ROW_NUMBER sort",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, offering_id, assignment_title, due_at FROM (SELECT id, offering_id, assignment_title, due_at, ROW_NUMBER() OVER (ORDER BY due_at ASC, id ASC) AS rn FROM assignments) t ORDER BY rn;",
        explanation:
          "## 🧠 Approach\n\nUse ROW_NUMBER to enforce ordering.\n\n## 🔍 Explanation\n\n- Assigns order index.\n- Final ORDER BY uses rn.\n- Overkill for simple sorting.",
      },
    ],
  },
  {
    code: "EDUCATION_009",
    approaches: [
      {
        approach_title: "Filter successful",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, invoice_id, paid_amount, paid_at FROM payments WHERE payment_status = 'successful';",
        explanation:
          "## 🧠 Approach\n\nFilter payments by status.\n\n## 🔍 Explanation\n\n- Keeps only successful payments.\n- Straightforward filtering.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, invoice_id, paid_amount, paid_at FROM payments WHERE payment_status IN ('successful');",
        explanation:
          "## 🧠 Approach\n\nUse IN clause.\n\n## 🔍 Explanation\n\n- Same result as equality.\n- Useful for multiple statuses.",
      },
    ],
  },
  {
    code: "EDUCATION_010",
    approaches: [
      {
        approach_title: "Filter open tickets",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, institution_id, user_id, issue_type, priority FROM support_tickets WHERE ticket_status = 'open';",
        explanation:
          "## 🧠 Approach\n\nFilter support tickets by open status.\n\n## 🔍 Explanation\n\n- `ticket_status = 'open'` keeps active issues.\n- Select required columns only.",
      },
      {
        approach_title: "CASE filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, institution_id, user_id, issue_type, priority FROM support_tickets WHERE CASE WHEN ticket_status = 'open' THEN true ELSE false END;",
        explanation:
          "## 🧠 Approach\n\nUse CASE logic.\n\n## 🔍 Explanation\n\n- Same output as WHERE.\n- Not recommended due to verbosity.",
      },
    ],
  },
  {
    code: "EDUCATION_011",
    approaches: [
      {
        approach_title: "GROUP roles",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_role, COUNT(*) AS total_users FROM users GROUP BY user_role;",
        explanation:
          "## 🧠 Approach\n\nGroup users by role and count users in each role.\n\n## 🔍 Explanation\n\n- `GROUP BY user_role` creates one group per role.\n- `COUNT(*)` counts all users inside each role group.\n- The alias `total_users` matches the expected output.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_role, COUNT(id) AS total_users FROM users GROUP BY user_role;",
        explanation:
          "## 🧠 Approach\n\nCount non-null user ids per role.\n\n## 🔍 Explanation\n\n- If `id` is always present, this matches `COUNT(*)`.\n- `COUNT(*)` is clearer because the goal is counting user rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT user_role, total_users FROM (SELECT user_role, COUNT(*) OVER (PARTITION BY user_role) AS total_users FROM users) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count to calculate total users per role, then deduplicate.\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY user_role)` places each role's count on every user row.\n- `DISTINCT` returns one row per role.\n- `GROUP BY` is simpler for role-level summaries.",
      },
    ],
  },
  {
    code: "EDUCATION_012",
    approaches: [
      {
        approach_title: "GROUP levels",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT program_level, COUNT(*) AS total_programs FROM programs GROUP BY program_level;",
        explanation:
          "## 🧠 Approach\n\nGroup programs by level and count programs in each level.\n\n## 🔍 Explanation\n\n- `GROUP BY program_level` creates one row per program level.\n- `COUNT(*)` counts all programs belonging to that level.\n- This returns the program distribution by level.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT program_level, COUNT(id) AS total_programs FROM programs GROUP BY program_level;",
        explanation:
          "## 🧠 Approach\n\nCount non-null program ids per level.\n\n## 🔍 Explanation\n\n- If `id` is always populated, this matches `COUNT(*)`.\n- `COUNT(*)` is preferred for counting program rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT program_level, total_programs FROM (SELECT program_level, COUNT(*) OVER (PARTITION BY program_level) AS total_programs FROM programs) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count to calculate total programs per level.\n\n## 🔍 Explanation\n\n- The window count computes level totals on every program row.\n- `DISTINCT` collapses repeated level rows.\n- `GROUP BY` is cleaner.",
      },
    ],
  },
  {
    code: "EDUCATION_013",
    approaches: [
      {
        approach_title: "GROUP room AVG",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT room_type, ROUND(AVG(seating_capacity), 2) AS avg_capacity FROM classrooms GROUP BY room_type;",
        explanation:
          "## 🧠 Approach\n\nGroup classrooms by room type and calculate average seating capacity.\n\n## 🔍 Explanation\n\n- `GROUP BY room_type` creates one result row per classroom type.\n- `AVG(seating_capacity)` calculates the mean capacity for that type.\n- `ROUND(..., 2)` formats the average to two decimals.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT room_type, ROUND(SUM(seating_capacity)::numeric / NULLIF(COUNT(seating_capacity), 0), 2) AS avg_capacity FROM classrooms GROUP BY room_type;",
        explanation:
          "## 🧠 Approach\n\nCalculate average capacity manually using total capacity divided by non-null count.\n\n## 🔍 Explanation\n\n- `SUM(seating_capacity)` totals capacity per room type.\n- `COUNT(seating_capacity)` counts non-null capacity values.\n- `SUM(seating_capacity)::numeric` forces decimal division instead of integer division.\n- `NULLIF` protects against division by zero.\n- This now matches `AVG(seating_capacity)` after rounding.",
      },
      {
        approach_title: "Window AVG",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT room_type, avg_capacity FROM (SELECT room_type, ROUND(AVG(seating_capacity) OVER (PARTITION BY room_type), 2) AS avg_capacity FROM classrooms) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window average to calculate average capacity per room type.\n\n## 🔍 Explanation\n\n- `AVG(...) OVER (PARTITION BY room_type)` places each room type's average on every classroom row.\n- `DISTINCT` is needed to return one row per room type.\n- `GROUP BY` is more direct for this question.",
      },
    ],
  },
  {
    code: "EDUCATION_014",
    approaches: [
      {
        approach_title: "GROUP status",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT enrollment_status, COUNT(*) AS total_students FROM student_profiles GROUP BY enrollment_status;",
        explanation:
          "## 🧠 Approach\n\nGroup student profiles by enrollment status and count students in each status.\n\n## 🔍 Explanation\n\n- `GROUP BY enrollment_status` creates one row per status.\n- `COUNT(*)` counts student profile rows in each group.\n- This returns active, inactive, graduated, or other status totals depending on the data.",
      },
      {
        approach_title: "COUNT user id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT enrollment_status, COUNT(user_id) AS total_students FROM student_profiles GROUP BY enrollment_status;",
        explanation:
          "## 🧠 Approach\n\nCount non-null student user ids per enrollment status.\n\n## 🔍 Explanation\n\n- If `user_id` is always present, this matches `COUNT(*)`.\n- `COUNT(*)` is preferred for counting profile rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT enrollment_status, total_students FROM (SELECT enrollment_status, COUNT(*) OVER (PARTITION BY enrollment_status) AS total_students FROM student_profiles) x;",
        explanation:
          "## 🧠 Approach\n\nCalculate student totals by status using a window count.\n\n## 🔍 Explanation\n\n- The window count places each status total on every student row.\n- `DISTINCT` returns one row per status.\n- Grouped aggregation is simpler.",
      },
    ],
  },
  {
    code: "EDUCATION_015",
    approaches: [
      {
        approach_title: "GROUP assignment type",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT assignment_type, COUNT(*) AS total_assignments FROM assignments GROUP BY assignment_type;",
        explanation:
          "## 🧠 Approach\n\nGroup assignments by type and count assignments in each type.\n\n## 🔍 Explanation\n\n- `GROUP BY assignment_type` creates one result row per assignment type.\n- `COUNT(*)` counts assignments in each type group.\n- This gives the distribution of assignments across types.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT assignment_type, COUNT(id) AS total_assignments FROM assignments GROUP BY assignment_type;",
        explanation:
          "## 🧠 Approach\n\nCount non-null assignment ids per assignment type.\n\n## 🔍 Explanation\n\n- If assignment ids are always present, this equals `COUNT(*)`.\n- `COUNT(*)` is clearer for counting assignment rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT assignment_type, total_assignments FROM (SELECT assignment_type, COUNT(*) OVER (PARTITION BY assignment_type) AS total_assignments FROM assignments) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count to calculate assignment totals per type.\n\n## 🔍 Explanation\n\n- The window count calculates type totals on every assignment row.\n- `DISTINCT` collapses repeated type rows.\n- `GROUP BY` is preferred.",
      },
    ],
  },
  {
    code: "EDUCATION_016",
    approaches: [
      {
        approach_title: "GROUP rating",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT employment_type, ROUND(AVG(rating_score), 2) AS avg_rating FROM teacher_profiles WHERE rating_score IS NOT NULL GROUP BY employment_type;",
        explanation:
          "## 🧠 Approach\n\nFilter teachers with ratings, group by employment type, and calculate average rating.\n\n## 🔍 Explanation\n\n- `rating_score IS NOT NULL` removes unrated teacher profiles from the average.\n- `GROUP BY employment_type` creates one row per employment type.\n- `AVG(rating_score)` calculates the average teacher rating for that type.\n- `ROUND(..., 2)` formats the result to two decimals.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT employment_type, ROUND(SUM(rating_score) / NULLIF(COUNT(rating_score), 0), 2) AS avg_rating FROM teacher_profiles WHERE rating_score IS NOT NULL GROUP BY employment_type;",
        explanation:
          "## 🧠 Approach\n\nManually calculate average rating using sum divided by count.\n\n## 🔍 Explanation\n\n- `SUM(rating_score)` totals ratings per employment type.\n- `COUNT(rating_score)` counts non-null ratings.\n- `NULLIF` prevents division by zero.\n- This matches the idea of `AVG`, but `AVG(rating_score)` is more readable.",
      },
      {
        approach_title: "Window AVG",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT employment_type, avg_rating FROM (SELECT employment_type, ROUND(AVG(rating_score) OVER (PARTITION BY employment_type), 2) AS avg_rating FROM teacher_profiles WHERE rating_score IS NOT NULL) x;",
        explanation:
          "## 🧠 Approach\n\nCalculate employment-type average rating using a window function.\n\n## 🔍 Explanation\n\n- The window average places the employment-type average on each teacher row.\n- `DISTINCT` returns one row per employment type.\n- `GROUP BY` is more direct for this summary.",
      },
    ],
  },
  {
    code: "EDUCATION_017",
    approaches: [
      {
        approach_title: "GROUP fee category",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT fee_category, COUNT(*) AS total_fee_plans FROM fee_plans GROUP BY fee_category;",
        explanation:
          "## 🧠 Approach\n\nGroup fee plans by fee category and count plans in each category.\n\n## 🔍 Explanation\n\n- `GROUP BY fee_category` creates one row per fee category.\n- `COUNT(*)` counts fee plan records inside each group.\n- This returns fee plan distribution by category.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT fee_category, COUNT(id) AS total_fee_plans FROM fee_plans GROUP BY fee_category;",
        explanation:
          "## 🧠 Approach\n\nCount non-null fee plan ids per category.\n\n## 🔍 Explanation\n\n- If fee plan ids are always populated, this matches `COUNT(*)`.\n- `COUNT(*)` is preferred for row counts.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT fee_category, total_fee_plans FROM (SELECT fee_category, COUNT(*) OVER (PARTITION BY fee_category) AS total_fee_plans FROM fee_plans) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count to calculate fee plan totals per category.\n\n## 🔍 Explanation\n\n- The window count calculates category totals on every fee plan row.\n- `DISTINCT` collapses repeated category rows.\n- `GROUP BY` is simpler.",
      },
    ],
  },
  {
    code: "EDUCATION_018",
    approaches: [
      {
        approach_title: "Successful method sum",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT payment_method, ROUND(SUM(paid_amount), 2) AS total_paid_amount FROM payments WHERE payment_status = 'successful' GROUP BY payment_method;",
        explanation:
          "## 🧠 Approach\n\nFilter successful payments, group them by payment method, and sum paid amount.\n\n## 🔍 Explanation\n\n- `WHERE payment_status = 'successful'` keeps only successful payments.\n- `GROUP BY payment_method` creates one row per payment method.\n- `SUM(paid_amount)` calculates the total successful amount collected through each method.\n- `ROUND(..., 2)` formats the amount to two decimals.",
      },
      {
        approach_title: "FILTER sum",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT payment_method, ROUND(SUM(paid_amount) FILTER (WHERE payment_status = 'successful'), 2) AS total_paid_amount FROM payments GROUP BY payment_method HAVING SUM(paid_amount) FILTER (WHERE payment_status = 'successful') IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nUse aggregate `FILTER` to sum only successful payments per method.\n\n## 🔍 Explanation\n\n- The grouped query sees all payment rows.\n- `FILTER (WHERE payment_status = 'successful')` limits the sum to successful payments.\n- `HAVING ... IS NOT NULL` removes methods with no successful payments so it matches the filtered-row approach.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT payment_method, ROUND(SUM(CASE WHEN payment_status = 'successful' THEN paid_amount ELSE 0 END), 2) AS total_paid_amount FROM payments GROUP BY payment_method HAVING SUM(CASE WHEN payment_status = 'successful' THEN paid_amount ELSE 0 END) > 0;",
        explanation:
          "## 🧠 Approach\n\nUse conditional sums to add only successful payment amounts.\n\n## 🔍 Explanation\n\n- Successful payments contribute their `paid_amount`.\n- Other payment statuses contribute `0`.\n- The `HAVING` clause removes methods with zero successful amount.\n- This is useful when calculating multiple status-based totals together.",
      },
    ],
  },
  {
    code: "EDUCATION_019",
    approaches: [
      {
        approach_title: "GROUP priority",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT priority, COUNT(*) AS total_tickets FROM support_tickets GROUP BY priority;",
        explanation:
          "## 🧠 Approach\n\nGroup support tickets by priority and count tickets in each priority group.\n\n## 🔍 Explanation\n\n- `GROUP BY priority` creates one row per priority level.\n- `COUNT(*)` counts tickets with that priority.\n- This returns ticket distribution by urgency.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT priority, COUNT(id) AS total_tickets FROM support_tickets GROUP BY priority;",
        explanation:
          "## 🧠 Approach\n\nCount non-null support ticket ids per priority.\n\n## 🔍 Explanation\n\n- If support ticket ids are always present, this equals `COUNT(*)`.\n- `COUNT(*)` is clearer for counting ticket rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT priority, total_tickets FROM (SELECT priority, COUNT(*) OVER (PARTITION BY priority) AS total_tickets FROM support_tickets) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count to calculate ticket totals per priority.\n\n## 🔍 Explanation\n\n- The window count calculates priority totals on each ticket row.\n- `DISTINCT` returns one row per priority.\n- `GROUP BY` is the most direct option.",
      },
    ],
  },
  {
    code: "EDUCATION_020",
    approaches: [
      {
        approach_title: "AVG graded marks",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ROUND(AVG(obtained_marks), 2) AS avg_obtained_marks FROM assignment_submissions WHERE obtained_marks IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nFilter graded submissions and calculate the average obtained marks.\n\n## 🔍 Explanation\n\n- `obtained_marks IS NOT NULL` keeps only submissions that have marks.\n- `AVG(obtained_marks)` calculates the mean score.\n- `ROUND(..., 2)` returns the average to two decimal places.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT ROUND(SUM(obtained_marks) / NULLIF(COUNT(obtained_marks), 0), 2) AS avg_obtained_marks FROM assignment_submissions WHERE obtained_marks IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nCalculate average marks manually using sum divided by count.\n\n## 🔍 Explanation\n\n- `SUM(obtained_marks)` totals all graded marks.\n- `COUNT(obtained_marks)` counts graded submissions.\n- `NULLIF` protects against division by zero.\n- `AVG(obtained_marks)` is simpler and clearer.",
      },
    ],
  },
  {
    code: "EDUCATION_021",
    approaches: [
      {
        approach_title: "Subquery average",
        approach_type: "subquery",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, admission_number, cgpa FROM student_profiles WHERE cgpa > (SELECT AVG(cgpa) FROM student_profiles WHERE cgpa IS NOT NULL);",
        explanation:
          "## 🧠 Approach\n\nCompare each student's CGPA against the overall average CGPA.\n\n## 🔍 Explanation\n\n- The subquery calculates the average CGPA across all non-null CGPA values.\n- The outer query returns only students whose `cgpa` is greater than that average.\n- Students with `NULL` CGPA are naturally excluded because `NULL > average` does not evaluate to true.",
      },
      {
        approach_title: "CTE average",
        approach_type: "cte",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH avg_cgpa AS (SELECT AVG(cgpa) AS overall_avg FROM student_profiles WHERE cgpa IS NOT NULL) SELECT sp.user_id, sp.admission_number, sp.cgpa FROM student_profiles sp CROSS JOIN avg_cgpa a WHERE sp.cgpa > a.overall_avg;",
        explanation:
          "## 🧠 Approach\n\nCalculate the average CGPA once in a CTE and compare every student against it.\n\n## 🔍 Explanation\n\n- `avg_cgpa` stores the overall non-null average.\n- `CROSS JOIN` makes that single average value available to every student row.\n- The `WHERE` clause keeps only students above the overall average.",
      },
    ],
  },
  {
    code: "EDUCATION_022",
    approaches: [
      {
        approach_title: "Credit filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, course_title, credit_value FROM courses WHERE credit_value > 4;",
        explanation:
          "## 🧠 Approach\n\nFilter courses whose credit value is greater than 4.\n\n## 🔍 Explanation\n\n- `WHERE credit_value > 4` keeps only high-credit courses.\n- The selected columns exactly match the expected output: course id, title, and credit value.",
      },
    ],
  },
  {
    code: "EDUCATION_023",
    approaches: [
      {
        approach_title: "Boolean filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, assignment_title, due_at, max_late_days FROM assignments WHERE allow_late_submission = true;",
        explanation:
          "## 🧠 Approach\n\nReturn assignments where late submission is allowed.\n\n## 🔍 Explanation\n\n- `allow_late_submission = true` filters only assignments that permit late submission.\n- `max_late_days` is included so the result also shows how many late days are allowed.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, assignment_title, due_at, max_late_days FROM assignments WHERE allow_late_submission;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand for the same condition.\n\n## 🔍 Explanation\n\n- In PostgreSQL, `WHERE allow_late_submission` is equivalent to checking that the boolean column is true.\n- This is concise, but the explicit `= true` version may be clearer for beginners.",
      },
    ],
  },
  {
    code: "EDUCATION_024",
    approaches: [
      {
        approach_title: "Future date filter",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, exam_name, exam_date, exam_type FROM exams WHERE exam_date > CURRENT_DATE;",
        explanation:
          "## 🧠 Approach\n\nFind exams scheduled after today's date.\n\n## 🔍 Explanation\n\n- `CURRENT_DATE` represents the current date in PostgreSQL.\n- `exam_date > CURRENT_DATE` keeps only future exams.\n- Exams happening today are not included because the requirement says future dates.",
      },
    ],
  },
  {
    code: "EDUCATION_025",
    approaches: [
      {
        approach_title: "Filtered count",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS published_results FROM exam_results WHERE result_status = 'published';",
        explanation:
          "## 🧠 Approach\n\nCount exam result rows whose status is published.\n\n## 🔍 Explanation\n\n- The `WHERE` clause limits rows to `result_status = 'published'` before counting.\n- `COUNT(*)` counts all matching published result records.\n- The alias `published_results` matches the required output column.",
      },
      {
        approach_title: "Conditional count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) FILTER (WHERE result_status = 'published') AS published_results FROM exam_results;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL's `FILTER` clause to count only published results.\n\n## 🔍 Explanation\n\n- `FILTER` applies the condition inside the aggregate.\n- This produces the same count while scanning the full table expression.\n- It is especially useful when calculating multiple conditional counts in the same query.",
      },
    ],
  },
  {
    code: "EDUCATION_026",
    approaches: [
      {
        approach_title: "Completed filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT material_id, user_id, progress_percent FROM material_views WHERE completed = true;",
        explanation:
          "## 🧠 Approach\n\nReturn material view records marked as completed.\n\n## 🔍 Explanation\n\n- `completed = true` keeps only fully completed material views.\n- The query returns the material, user, and progress percentage exactly as required.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT material_id, user_id, progress_percent FROM material_views WHERE completed;",
        explanation:
          "## 🧠 Approach\n\nUse boolean shorthand to filter completed records.\n\n## 🔍 Explanation\n\n- In PostgreSQL, a boolean column can be used directly in `WHERE`.\n- This returns rows where `completed` is true.\n- The explicit comparison is slightly more beginner-friendly.",
      },
    ],
  },
  {
    code: "EDUCATION_027",
    approaches: [
      {
        approach_title: "Pinned filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, offering_id, thread_title, created_at FROM discussion_threads WHERE is_pinned = true;",
        explanation:
          "## 🧠 Approach\n\nFind discussion threads that are pinned.\n\n## 🔍 Explanation\n\n- `is_pinned = true` keeps only pinned threads.\n- The query returns identifying thread information along with the offering and creation timestamp.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, offering_id, thread_title, created_at FROM discussion_threads WHERE is_pinned;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand for pinned threads.\n\n## 🔍 Explanation\n\n- `WHERE is_pinned` is equivalent to `WHERE is_pinned = true`.\n- It is concise and valid in PostgreSQL.",
      },
    ],
  },
  {
    code: "EDUCATION_028",
    approaches: [
      {
        approach_title: "Active filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, scholarship_name, scholarship_type, amount_value FROM scholarships WHERE is_active = true;",
        explanation:
          "## 🧠 Approach\n\nReturn scholarships currently marked as active.\n\n## 🔍 Explanation\n\n- `is_active = true` filters only active scholarship records.\n- The selected columns match the expected result: scholarship id, name, type, and amount.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, scholarship_name, scholarship_type, amount_value FROM scholarships WHERE is_active;",
        explanation:
          "## 🧠 Approach\n\nUse boolean shorthand for active scholarships.\n\n## 🔍 Explanation\n\n- PostgreSQL allows boolean columns directly in the `WHERE` clause.\n- This returns the same active scholarship rows as `is_active = true`.",
      },
    ],
  },
  {
    code: "EDUCATION_029",
    approaches: [
      {
        approach_title: "Overdue filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, student_user_id, invoice_number, total_amount, due_date FROM fee_invoices WHERE invoice_status = 'overdue';",
        explanation:
          "## 🧠 Approach\n\nFind fee invoices whose status is overdue.\n\n## 🔍 Explanation\n\n- `invoice_status = 'overdue'` keeps only unpaid overdue invoices according to the question definition.\n- The selected columns provide invoice identity, student, amount, and due date.",
      },
    ],
  },
  {
    code: "EDUCATION_030",
    approaches: [
      {
        approach_title: "ORDER BY LIMIT",
        approach_type: "sorting",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, user_id, event_name, event_category, event_time FROM app_events ORDER BY event_time DESC, id ASC LIMIT 20;",
        explanation:
          "## 🧠 Approach\n\nSort app events by most recent first and return only the top 20.\n\n## 🔍 Explanation\n\n- `ORDER BY event_time DESC` puts the newest events first.\n- `id ASC` is the tie-breaker when multiple events have the same timestamp.\n- `LIMIT 20` returns only the 20 most recent rows.\n- This question requires ordering, so the solution must follow the configured sort columns exactly.",
      },
      {
        approach_title: "Window rank",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, user_id, event_name, event_category, event_time FROM (SELECT id, user_id, event_name, event_category, event_time, ROW_NUMBER() OVER (ORDER BY event_time DESC, id ASC) AS rn FROM app_events) ranked_events WHERE rn <= 20 ORDER BY event_time DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank events by recency, keep the first 20, then return them in the required order.\n\n## 🔍 Explanation\n\n- `ROW_NUMBER()` assigns a unique rank using the same ordering rule as the question.\n- The outer query keeps rows where `rn <= 20`.\n- The final `ORDER BY event_time DESC, id ASC` is still required so the returned result order matches the comparator configuration.",
      },
    ],
  },
  {
    code: "EDUCATION_031",
    approaches: [
      {
        approach_title: "GROUP enrolled",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT offering_id, COUNT(*) AS enrolled_students FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY offering_id;",
        explanation:
          "## 🧠 Approach\n\nCount enrolled students for each course offering.\n\n## 🔍 Explanation\n\n- `WHERE enrollment_status = 'enrolled'` keeps only active enrolled records.\n- `GROUP BY offering_id` creates one group per course offering.\n- `COUNT(*)` returns the number of enrolled students in each offering.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT offering_id, COUNT(*) FILTER (WHERE enrollment_status = 'enrolled') AS enrolled_students FROM enrollments GROUP BY offering_id HAVING COUNT(*) FILTER (WHERE enrollment_status = 'enrolled') > 0;",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation to count only enrolled students.\n\n## 🔍 Explanation\n\n- `FILTER` counts only rows where `enrollment_status = 'enrolled'`.\n- `HAVING` removes offerings with zero enrolled students so the result matches the filtered `WHERE` approach.\n- This style is useful when multiple status-based counts are needed in one query.",
      },
    ],
  },
  {
    code: "EDUCATION_032",
    approaches: [
      {
        approach_title: "AVG attendance",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT offering_id, ROUND(AVG(attendance_percentage), 2) AS avg_attendance FROM enrollments WHERE attendance_percentage IS NOT NULL GROUP BY offering_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate average attendance percentage for each course offering.\n\n## 🔍 Explanation\n\n- `WHERE attendance_percentage IS NOT NULL` removes missing attendance values before aggregation.\n- `AVG(attendance_percentage)` calculates the average per offering.\n- `ROUND(..., 2)` formats the result to two decimal places.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT offering_id, ROUND(SUM(attendance_percentage) / COUNT(attendance_percentage), 2) AS avg_attendance FROM enrollments WHERE attendance_percentage IS NOT NULL GROUP BY offering_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate the average manually using sum divided by count.\n\n## 🔍 Explanation\n\n- `SUM(attendance_percentage)` totals attendance values per offering.\n- `COUNT(attendance_percentage)` counts non-null attendance records.\n- Dividing them gives the same average as `AVG`, but `AVG` is clearer and preferred.",
      },
    ],
  },
  {
    code: "EDUCATION_033",
    approaches: [
      {
        approach_title: "GROUP exam type",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT exam_type, COUNT(*) AS total_exams FROM exams GROUP BY exam_type;",
        explanation:
          "## 🧠 Approach\n\nCount exams for each exam type.\n\n## 🔍 Explanation\n\n- `GROUP BY exam_type` creates one group per exam type.\n- `COUNT(*)` counts how many exam records exist in each type.",
      },
    ],
  },
  {
    code: "EDUCATION_034",
    approaches: [
      {
        approach_title: "AVG exam score",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT exam_id, ROUND(AVG(obtained_marks), 2) AS avg_score FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY exam_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate average obtained marks for each exam.\n\n## 🔍 Explanation\n\n- `WHERE obtained_marks IS NOT NULL` removes missing scores.\n- `GROUP BY exam_id` creates one result row per exam.\n- `ROUND(AVG(obtained_marks), 2)` returns the average score rounded to two decimals.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT exam_id, ROUND(SUM(obtained_marks) / COUNT(obtained_marks), 2) AS avg_score FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY exam_id;",
        explanation:
          "## 🧠 Approach\n\nUse `SUM / COUNT` to calculate the average score manually.\n\n## 🔍 Explanation\n\n- `SUM(obtained_marks)` totals marks per exam.\n- `COUNT(obtained_marks)` counts non-null scores.\n- This produces the same result, but `AVG` is more readable.",
      },
    ],
  },
  {
    code: "EDUCATION_035",
    approaches: [
      {
        approach_title: "GROUP issue type",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT issue_type, COUNT(*) AS total_tickets FROM support_tickets GROUP BY issue_type;",
        explanation:
          "## 🧠 Approach\n\nCount support tickets for each issue type.\n\n## 🔍 Explanation\n\n- `GROUP BY issue_type` groups tickets by category.\n- `COUNT(*)` counts how many tickets belong to each issue type.",
      },
    ],
  },
  {
    code: "EDUCATION_036",
    approaches: [
      {
        approach_title: "Successful AVG",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ROUND(AVG(paid_amount), 2) AS avg_paid_amount FROM payments WHERE payment_status = 'successful';",
        explanation:
          "## 🧠 Approach\n\nFind the average paid amount from successful payments only.\n\n## 🔍 Explanation\n\n- `WHERE payment_status = 'successful'` excludes failed, pending, or other non-successful payments.\n- `AVG(paid_amount)` calculates the average among successful rows.\n- `ROUND(..., 2)` formats the value to two decimal places.",
      },
      {
        approach_title: "FILTER average",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT ROUND(AVG(paid_amount) FILTER (WHERE payment_status = 'successful'), 2) AS avg_paid_amount FROM payments;",
        explanation:
          "## 🧠 Approach\n\nUse `FILTER` inside the aggregate to average only successful payments.\n\n## 🔍 Explanation\n\n- The table is scanned normally, but only successful payment rows contribute to `AVG`.\n- This is equivalent to filtering in `WHERE` for this single aggregate.\n- `FILTER` is useful when calculating multiple conditional aggregates together.",
      },
    ],
  },
  {
    code: "EDUCATION_037",
    approaches: [
      {
        approach_title: "GROUP status",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT course_status, COUNT(*) AS total_offerings FROM course_offerings GROUP BY course_status;",
        explanation:
          "## 🧠 Approach\n\nCount course offerings by their current status.\n\n## 🔍 Explanation\n\n- `GROUP BY course_status` creates one row for each status.\n- `COUNT(*)` returns how many offerings currently have that status.",
      },
    ],
  },
  {
    code: "EDUCATION_038",
    approaches: [
      {
        approach_title: "GROUP department",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT department_id, COUNT(*) AS total_teachers FROM teacher_profiles WHERE department_id IS NOT NULL GROUP BY department_id;",
        explanation:
          "## 🧠 Approach\n\nCount teachers assigned to each department.\n\n## 🔍 Explanation\n\n- `WHERE department_id IS NOT NULL` excludes teachers without a department.\n- `GROUP BY department_id` creates one result row per department.\n- `COUNT(*)` counts teachers in each department.",
      },
    ],
  },
  {
    code: "EDUCATION_039",
    approaches: [
      {
        approach_title: "GROUP material type",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT material_type, COUNT(*) AS total_materials FROM learning_materials GROUP BY material_type;",
        explanation:
          "## 🧠 Approach\n\nCount learning materials by material type.\n\n## 🔍 Explanation\n\n- `GROUP BY material_type` separates materials into their type categories.\n- `COUNT(*)` returns the number of materials in each category.",
      },
    ],
  },
  {
    code: "EDUCATION_040",
    approaches: [
      {
        approach_title: "AVG feedback",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT feedback_category, ROUND(AVG(rating_value), 2) AS avg_rating FROM student_feedback GROUP BY feedback_category;",
        explanation:
          "## 🧠 Approach\n\nCalculate the average rating for each feedback category.\n\n## 🔍 Explanation\n\n- `GROUP BY feedback_category` creates one group per feedback category.\n- `AVG(rating_value)` calculates the average rating in each category.\n- `ROUND(..., 2)` formats the average rating to two decimal places.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT feedback_category, ROUND(SUM(rating_value)::numeric / NULLIF(COUNT(rating_value), 0), 2) AS avg_rating FROM student_feedback GROUP BY feedback_category;",
        explanation:
          "## 🧠 Approach\n\nCalculate average rating manually using sum divided by count.\n\n## 🔍 Explanation\n\n- `SUM(rating_value)` totals ratings per category.\n- `COUNT(rating_value)` counts non-null ratings.\n- `SUM(...)::numeric` ensures decimal division (avoids integer truncation).\n- `NULLIF(..., 0)` prevents division by zero.\n- This now produces the same result as `AVG(rating_value)`.",
      },
    ],
  },
  {
    code: "EDUCATION_041",
    approaches: [
      {
        approach_title: "GROUP HAVING",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT student_user_id, COUNT(*) AS enrollment_count FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY student_user_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nCount active enrolled course offerings per student and keep only students with more than one.\n\n## 🔍 Explanation\n\n- `WHERE enrollment_status = 'enrolled'` matches the wording of the question: students who are currently enrolled.\n- `GROUP BY student_user_id` creates one group per student.\n- `COUNT(*)` counts enrolled course-offering records for each student.\n- `HAVING COUNT(*) > 1` filters after aggregation, keeping only students enrolled in multiple offerings.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT student_user_id, enrollment_count FROM (SELECT student_user_id, COUNT(*) AS enrollment_count FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY student_user_id) student_enrollments WHERE enrollment_count > 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate each student's active enrollment count first, then filter the computed result.\n\n## 🔍 Explanation\n\n- The inner query groups active enrolled rows by `student_user_id`.\n- It produces `enrollment_count` for each student.\n- The outer query filters where `enrollment_count > 1`.\n- This is equivalent to `GROUP BY + HAVING`, but can be easier to read when reusing the aggregate alias.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT student_user_id, enrollment_count FROM (SELECT student_user_id, COUNT(*) OVER (PARTITION BY student_user_id) AS enrollment_count FROM enrollments WHERE enrollment_status = 'enrolled') x WHERE enrollment_count > 1;",
        explanation:
          "## 🧠 Approach\n\nUse a window function to count active enrollments per student, then deduplicate.\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY student_user_id)` calculates each student's active enrollment count on every enrollment row.\n- The outer query keeps only rows where `enrollment_count > 1`.\n- `DISTINCT` is required because a student with multiple enrollments appears on multiple rows.",
      },
    ],
  },
  {
    code: "EDUCATION_042",
    approaches: [
      {
        approach_title: "GROUP HAVING",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT teacher_user_id, COUNT(*) AS course_count FROM course_teachers GROUP BY teacher_user_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nCount course-teacher assignments per teacher and keep teachers assigned to more than one course offering.\n\n## 🔍 Explanation\n\n- `course_teachers` is the correct table for teacher-to-offering assignments.\n- `GROUP BY teacher_user_id` creates one group per teacher.\n- `COUNT(*)` counts how many course offerings each teacher is assigned to.\n- `HAVING COUNT(*) > 1` keeps only teachers teaching multiple offerings.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT teacher_user_id, course_count FROM (SELECT teacher_user_id, COUNT(*) AS course_count FROM course_teachers GROUP BY teacher_user_id) teacher_courses WHERE course_count > 1;",
        explanation:
          "## 🧠 Approach\n\nCompute each teacher's course count first, then filter by the computed count.\n\n## 🔍 Explanation\n\n- The inner query counts course-offering assignments per `teacher_user_id`.\n- The outer query keeps teachers where `course_count > 1`.\n- This avoids repeating the aggregate expression in a `HAVING` clause.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT teacher_user_id, course_count FROM (SELECT teacher_user_id, COUNT(*) OVER (PARTITION BY teacher_user_id) AS course_count FROM course_teachers) x WHERE course_count > 1;",
        explanation:
          "## 🧠 Approach\n\nUse a window count over teacher assignments and then deduplicate.\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY teacher_user_id)` calculates the number of assignments for each teacher.\n- The outer query filters teachers with more than one assignment.\n- `DISTINCT` removes duplicate rows caused by multiple course assignments.",
      },
    ],
  },
  {
    code: "EDUCATION_043",
    approaches: [
      {
        approach_title: "GROUP top 5",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT offering_id, COUNT(*) AS student_count FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY offering_id ORDER BY student_count DESC, offering_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nFilter enrolled students, count them per offering, then return the top 5 offerings.\n\n## 🔍 Explanation\n\n- `WHERE enrollment_status = 'enrolled'` keeps only active enrolled records.\n- `GROUP BY offering_id` creates one row per course offering.\n- `COUNT(*)` counts enrolled students.\n- `ORDER BY student_count DESC, offering_id ASC` follows the required order.\n- `LIMIT 5` returns the top five offerings.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT offering_id, student_count FROM (SELECT offering_id, COUNT(*) AS student_count FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY offering_id) offering_counts ORDER BY student_count DESC, offering_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate enrolled student counts first, then sort and limit outside.\n\n## 🔍 Explanation\n\n- The inner query computes student counts per offering.\n- The outer query applies ranking and `LIMIT 5`.\n- This separates aggregation from top-N selection.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT offering_id, student_count FROM (SELECT offering_id, student_count, ROW_NUMBER() OVER (ORDER BY student_count DESC, offering_id ASC) AS rn FROM (SELECT offering_id, COUNT(*) AS student_count FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY offering_id) counts) ranked WHERE rn <= 5 ORDER BY student_count DESC, offering_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank course offerings by enrolled student count and keep the top 5.\n\n## 🔍 Explanation\n\n- The innermost query calculates student counts.\n- `ROW_NUMBER()` ranks offerings by count descending and offering id ascending.\n- `rn <= 5` keeps the top five rows.\n- Final ordering matches the comparator config.",
      },
    ],
  },
  {
    code: "EDUCATION_044",
    approaches: [
      {
        approach_title: "ORDER LIMIT",
        approach_type: "sorting",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, admission_number, cgpa FROM student_profiles WHERE cgpa IS NOT NULL ORDER BY cgpa DESC, user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nFilter students with CGPA, sort by highest CGPA, and return the top 5.\n\n## 🔍 Explanation\n\n- `cgpa IS NOT NULL` removes students without CGPA values.\n- `ORDER BY cgpa DESC` puts highest CGPA first.\n- `user_id ASC` breaks ties consistently.\n- `LIMIT 5` returns only five rows.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, admission_number, cgpa FROM (SELECT user_id, admission_number, cgpa, ROW_NUMBER() OVER (ORDER BY cgpa DESC, user_id ASC) AS rn FROM student_profiles WHERE cgpa IS NOT NULL) ranked WHERE rn <= 5 ORDER BY cgpa DESC, user_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank students by CGPA using `ROW_NUMBER`, then keep the first five.\n\n## 🔍 Explanation\n\n- `ROW_NUMBER()` assigns a deterministic rank based on CGPA and user id.\n- `rn <= 5` keeps the top five students.\n- This is useful when ranking logic needs to be reused.",
      },
    ],
  },
  {
    code: "EDUCATION_045",
    approaches: [
      {
        approach_title: "LEFT anti join",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT co.id FROM course_offerings co LEFT JOIN enrollments e ON e.offering_id = co.id WHERE e.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nLeft join course offerings to enrollments and keep offerings with no matching enrollment rows.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps every course offering.\n- Offerings without enrollments have null values from `enrollments`.\n- `WHERE e.id IS NULL` filters to offerings with no enrolled records.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT co.id FROM course_offerings co WHERE NOT EXISTS (SELECT 1 FROM enrollments e WHERE e.offering_id = co.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to find offerings with no enrollment rows.\n\n## 🔍 Explanation\n\n- For each course offering, the subquery checks whether an enrollment exists.\n- `NOT EXISTS` keeps only offerings where no matching enrollment is found.\n- This is often the clearest anti-join pattern.",
      },
      {
        approach_title: "NOT IN",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id FROM course_offerings WHERE id NOT IN (SELECT offering_id FROM enrollments WHERE offering_id IS NOT NULL);",
        explanation:
          "## 🧠 Approach\n\nExclude offerings whose ids appear in enrollments.\n\n## 🔍 Explanation\n\n- The subquery returns offerings that have enrollments.\n- `NOT IN` keeps offerings outside that set.\n- Filtering nulls in the subquery avoids common `NOT IN` null pitfalls.",
      },
    ],
  },
  {
    code: "EDUCATION_046",
    approaches: [
      {
        approach_title: "LEFT anti join",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT sp.user_id FROM student_profiles sp LEFT JOIN assignment_submissions s ON s.student_user_id = sp.user_id WHERE s.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nLeft join students to assignment submissions and keep students with no matching submission.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps every student profile.\n- Students without submissions get null values from `assignment_submissions`.\n- `WHERE s.id IS NULL` returns students who have never submitted assignments.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT sp.user_id FROM student_profiles sp WHERE NOT EXISTS (SELECT 1 FROM assignment_submissions s WHERE s.student_user_id = sp.user_id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to reject students who have any assignment submission.\n\n## 🔍 Explanation\n\n- The correlated subquery searches submissions for each student.\n- `NOT EXISTS` keeps students with zero matching submissions.\n- This avoids duplicate handling and is reliable for absence checks.",
      },
      {
        approach_title: "NOT IN",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT user_id FROM student_profiles WHERE user_id NOT IN (SELECT student_user_id FROM assignment_submissions WHERE student_user_id IS NOT NULL);",
        explanation:
          "## 🧠 Approach\n\nExclude students whose ids appear in assignment submissions.\n\n## 🔍 Explanation\n\n- The subquery returns students who submitted at least once.\n- `NOT IN` keeps students not in that list.\n- The null guard is important because `NOT IN` with nulls can produce unexpected results.",
      },
    ],
  },
  {
    code: "EDUCATION_047",
    approaches: [
      {
        approach_title: "LEFT anti join",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT a.id FROM assignments a LEFT JOIN assignment_submissions s ON s.assignment_id = a.id WHERE s.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nLeft join assignments to submissions and keep assignments with no submission rows.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps every assignment.\n- Assignments without submissions have nulls on the submission side.\n- `WHERE s.id IS NULL` returns assignments that have received no submissions.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT a.id FROM assignments a WHERE NOT EXISTS (SELECT 1 FROM assignment_submissions s WHERE s.assignment_id = a.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to find assignments with no submissions.\n\n## 🔍 Explanation\n\n- For each assignment, the subquery checks whether a submission exists.\n- `NOT EXISTS` keeps assignments where no matching row exists.\n- This is clean and avoids duplicates naturally.",
      },
      {
        approach_title: "NOT IN",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id FROM assignments WHERE id NOT IN (SELECT assignment_id FROM assignment_submissions WHERE assignment_id IS NOT NULL);",
        explanation:
          "## 🧠 Approach\n\nExclude assignments that appear in the submissions table.\n\n## 🔍 Explanation\n\n- The subquery returns assignment ids that have submissions.\n- `NOT IN` keeps assignments not in that set.\n- The null filter avoids `NOT IN` null issues.",
      },
    ],
  },
  {
    code: "EDUCATION_048",
    approaches: [
      {
        approach_title: "DISTINCT failed",
        approach_type: "distinct",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT student_user_id FROM exam_results WHERE result_status = 'failed';",
        explanation:
          "## 🧠 Approach\n\nFilter failed exam results and return each failed student once.\n\n## 🔍 Explanation\n\n- `WHERE result_status = 'failed'` keeps failed result rows.\n- A student may fail multiple exams.\n- `DISTINCT student_user_id` ensures each student appears only once.",
      },
      {
        approach_title: "GROUP BY student",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT student_user_id FROM exam_results WHERE result_status = 'failed' GROUP BY student_user_id;",
        explanation:
          "## 🧠 Approach\n\nGroup failed results by student to return one row per failed student.\n\n## 🔍 Explanation\n\n- Filtering happens before grouping.\n- `GROUP BY student_user_id` collapses multiple failed rows for the same student.\n- This returns the same unique student list as `DISTINCT`.",
      },
    ],
  },
  {
    code: "EDUCATION_049",
    approaches: [
      {
        approach_title: "GROUP HAVING AVG",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT exam_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY exam_id HAVING AVG(obtained_marks) > 75;",
        explanation:
          "## 🧠 Approach\n\nCalculate average marks per exam and keep exams whose average is greater than 75.\n\n## 🔍 Explanation\n\n- `obtained_marks IS NOT NULL` keeps scored results only.\n- `GROUP BY exam_id` creates one row per exam.\n- `AVG(obtained_marks)` calculates the exam average.\n- `HAVING AVG(obtained_marks) > 75` filters exams after aggregation.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT exam_id, avg_marks FROM (SELECT exam_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY exam_id) exam_averages WHERE avg_marks > 75;",
        explanation:
          "## 🧠 Approach\n\nCompute exam averages first, then filter using the alias.\n\n## 🔍 Explanation\n\n- The inner query calculates average marks per exam.\n- The outer query keeps exams where `avg_marks > 75`.\n- This avoids repeating the aggregate expression in `HAVING`.",
      },
      {
        approach_title: "Window average",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT exam_id, avg_marks FROM (SELECT exam_id, AVG(obtained_marks) OVER (PARTITION BY exam_id) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL) x WHERE avg_marks > 75;",
        explanation:
          "## 🧠 Approach\n\nUse a window average per exam, then deduplicate.\n\n## 🔍 Explanation\n\n- `AVG(...) OVER (PARTITION BY exam_id)` places each exam's average on every result row.\n- Filtering keeps exams above 75 average marks.\n- `DISTINCT` returns one row per exam.",
      },
    ],
  },
  {
    code: "EDUCATION_050",
    approaches: [
      {
        approach_title: "GROUP top 5",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT exam_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY exam_id ORDER BY avg_marks DESC, exam_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate average marks per exam, sort highest first, and return the top 5 exams.\n\n## 🔍 Explanation\n\n- `WHERE obtained_marks IS NOT NULL` keeps scored results only.\n- `GROUP BY exam_id` calculates one average per exam.\n- `ORDER BY avg_marks DESC, exam_id ASC` follows the required ordering.\n- `LIMIT 5` returns the five highest-average exams.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT exam_id, avg_marks FROM (SELECT exam_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY exam_id) exam_averages ORDER BY avg_marks DESC, exam_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate exam averages first, then sort and limit outside.\n\n## 🔍 Explanation\n\n- The inner query computes average marks per exam.\n- The outer query ranks exams by average score and returns the top five.\n- This separates aggregation from top-N selection.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT exam_id, avg_marks FROM (SELECT exam_id, avg_marks, ROW_NUMBER() OVER (ORDER BY avg_marks DESC, exam_id ASC) AS rn FROM (SELECT exam_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY exam_id) exam_averages) ranked WHERE rn <= 5 ORDER BY avg_marks DESC, exam_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank exams by average score using `ROW_NUMBER`, then keep the top five.\n\n## 🔍 Explanation\n\n- Exam averages are calculated first.\n- `ROW_NUMBER()` ranks exams by average marks descending and exam id ascending.\n- `rn <= 5` keeps the top five rows.\n- Final ordering matches the required comparator order.",
      },
    ],
  },
  {
    code: "EDUCATION_051",
    approaches: [
      {
        approach_title: "RANK by CGPA",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, cgpa, RANK() OVER (ORDER BY cgpa DESC) AS rank FROM student_profiles WHERE cgpa IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nUse a window ranking function to rank students by CGPA.\n\n## 🔍 Explanation\n\n- `WHERE cgpa IS NOT NULL` removes students without CGPA.\n- `RANK() OVER (ORDER BY cgpa DESC)` assigns rank based on highest CGPA first.\n- If multiple students have the same CGPA, they get the same rank.\n- `RANK()` leaves gaps after ties, which matches the expected ranking behavior.",
      },
    ],
  },
  {
    code: "EDUCATION_052",
    approaches: [
      {
        approach_title: "Running COUNT",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT offering_id, id, COUNT(*) OVER (PARTITION BY offering_id ORDER BY created_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_enrollments FROM enrollments;",
        explanation:
          "## 🧠 Approach\n\nUse a window count to calculate the running number of enrollments within each course offering.\n\n## 🔍 Explanation\n\n- `PARTITION BY offering_id` restarts the running count for each offering.\n- `ORDER BY created_at, id` defines the enrollment sequence.\n- `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` counts from the first enrollment in that offering through the current row.\n- The result shows how enrollment count grows over time per offering.",
      },
      {
        approach_title: "ROW_NUMBER equivalent",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT offering_id, id, ROW_NUMBER() OVER (PARTITION BY offering_id ORDER BY created_at, id) AS running_enrollments FROM enrollments;",
        explanation:
          "## 🧠 Approach\n\nUse `ROW_NUMBER` because a running count over ordered rows is equivalent to row position.\n\n## 🔍 Explanation\n\n- Each enrollment row receives its position within the offering.\n- Since every row contributes exactly one enrollment, `ROW_NUMBER()` matches the running count.\n- The explicit `COUNT(*) OVER` version better communicates the running-count intent.",
      },
    ],
  },
  {
    code: "EDUCATION_053",
    approaches: [
      {
        approach_title: "DENSE_RANK second",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, cgpa FROM (SELECT user_id, cgpa, DENSE_RANK() OVER (ORDER BY cgpa DESC) AS rnk FROM student_profiles WHERE cgpa IS NOT NULL) x WHERE rnk = 2;",
        explanation:
          "## 🧠 Approach\n\nRank distinct CGPA values and return students in the second-highest CGPA group.\n\n## 🔍 Explanation\n\n- `DENSE_RANK()` gives the same rank to tied CGPA values.\n- The highest CGPA gets rank 1.\n- The next distinct CGPA gets rank 2.\n- Filtering `rnk = 2` returns all students tied for second-highest CGPA.",
      },
      {
        approach_title: "Second max subquery",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, cgpa FROM student_profiles WHERE cgpa = (SELECT MAX(cgpa) FROM student_profiles WHERE cgpa < (SELECT MAX(cgpa) FROM student_profiles WHERE cgpa IS NOT NULL));",
        explanation:
          "## 🧠 Approach\n\nFind the maximum CGPA below the overall maximum, then return students with that CGPA.\n\n## 🔍 Explanation\n\n- The innermost query finds the highest CGPA.\n- The outer max query finds the highest CGPA lower than that value.\n- The main query returns students whose CGPA equals this second-highest distinct value.\n- This handles ties, but the `DENSE_RANK` approach is easier to read.",
      },
    ],
  },
  {
    code: "EDUCATION_054",
    approaches: [
      {
        approach_title: "LAG gap",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT student_user_id, MAX(gap_days) AS max_gap_days FROM (SELECT student_user_id, EXTRACT(EPOCH FROM (submitted_at - LAG(submitted_at) OVER (PARTITION BY student_user_id ORDER BY submitted_at))) / 86400 AS gap_days FROM assignment_submissions) x GROUP BY student_user_id;",
        explanation:
          "## 🧠 Approach\n\nUse `LAG` to compare each submission with the previous submission by the same student.\n\n## 🔍 Explanation\n\n- `LAG(submitted_at)` gets the previous submission timestamp per student.\n- Subtracting it from the current `submitted_at` gives the time gap.\n- `EXTRACT(EPOCH FROM ...) / 86400` converts the interval into days.\n- The outer query uses `MAX(gap_days)` to find each student's largest submission gap.",
      },
      {
        approach_title: "CTE gap",
        approach_type: "cte",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH submission_gaps AS (SELECT student_user_id, EXTRACT(EPOCH FROM (submitted_at - LAG(submitted_at) OVER (PARTITION BY student_user_id ORDER BY submitted_at))) / 86400 AS gap_days FROM assignment_submissions) SELECT student_user_id, MAX(gap_days) AS max_gap_days FROM submission_gaps GROUP BY student_user_id;",
        explanation:
          "## 🧠 Approach\n\nName the gap calculation step with a CTE, then aggregate the maximum gap.\n\n## 🔍 Explanation\n\n- The CTE calculates gap days between consecutive submissions.\n- The final query groups by student and takes the maximum gap.\n- This is equivalent to the derived-table version but more readable.",
      },
    ],
  },
  {
    code: "EDUCATION_055",
    approaches: [
      {
        approach_title: "ROW_NUMBER top 3",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH student_avg AS (SELECT e.offering_id, r.student_user_id, AVG(r.obtained_marks) AS avg_marks FROM exam_results r JOIN enrollments e ON e.student_user_id = r.student_user_id GROUP BY e.offering_id, r.student_user_id), ranked AS (SELECT offering_id, student_user_id, avg_marks, ROW_NUMBER() OVER (PARTITION BY offering_id ORDER BY avg_marks DESC, student_user_id ASC) AS rn FROM student_avg) SELECT offering_id, student_user_id, avg_marks FROM ranked WHERE rn <= 3;",
        explanation:
          "## 🧠 Approach\n\nCalculate average marks per student per offering, rank students inside each offering, and keep the top 3.\n\n## 🔍 Explanation\n\n- `student_avg` joins enrollments with exam results and calculates average marks.\n- `PARTITION BY offering_id` ranks students separately for each course offering.\n- `ORDER BY avg_marks DESC, student_user_id ASC` puts highest average first and breaks ties by student id.\n- `rn <= 3` returns the top three students per offering.",
      },
    ],
  },
  {
    code: "EDUCATION_056",
    approaches: [
      {
        approach_title: "Moving AVG",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT student_user_id, exam_id, obtained_marks, AVG(obtained_marks) OVER (PARTITION BY student_user_id ORDER BY exam_id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg FROM exam_results WHERE obtained_marks IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nUse a window frame to calculate a 3-exam moving average for each student.\n\n## 🔍 Explanation\n\n- `PARTITION BY student_user_id` calculates moving averages independently per student.\n- `ORDER BY exam_id` defines exam sequence.\n- `ROWS BETWEEN 2 PRECEDING AND CURRENT ROW` includes the current exam and the previous two exams.\n- For the first one or two exams, the average is calculated using the available rows only.",
      },
      {
        approach_title: "Named window",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT student_user_id, exam_id, obtained_marks, AVG(obtained_marks) OVER w AS moving_avg FROM exam_results WHERE obtained_marks IS NOT NULL WINDOW w AS (PARTITION BY student_user_id ORDER BY exam_id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW);",
        explanation:
          "## 🧠 Approach\n\nUse a named window definition for the same 3-exam moving average.\n\n## 🔍 Explanation\n\n- `WINDOW w AS (...)` names the partition, order, and frame.\n- `AVG(obtained_marks) OVER w` applies that named window.\n- This is helpful when multiple window calculations share the same frame.",
      },
    ],
  },
  {
    code: "EDUCATION_057",
    approaches: [
      {
        approach_title: "GROUP top 5",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT student_user_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY student_user_id ORDER BY avg_marks DESC, student_user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate average exam marks per student, sort highest first, and return the top 5 students.\n\n## 🔍 Explanation\n\n- `WHERE obtained_marks IS NOT NULL` keeps scored exams only.\n- `GROUP BY student_user_id` calculates one average per student.\n- `ORDER BY avg_marks DESC, student_user_id ASC` follows the required sort order.\n- `LIMIT 5` returns the top five students.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT student_user_id, avg_marks FROM (SELECT student_user_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY student_user_id) student_averages ORDER BY avg_marks DESC, student_user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate student averages first, then sort and limit outside.\n\n## 🔍 Explanation\n\n- The inner query calculates average marks per student.\n- The outer query applies ranking and the top-5 limit.\n- This separates aggregation from ranking.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT student_user_id, avg_marks FROM (SELECT student_user_id, avg_marks, ROW_NUMBER() OVER (ORDER BY avg_marks DESC, student_user_id ASC) AS rn FROM (SELECT student_user_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY student_user_id) student_averages) ranked WHERE rn <= 5 ORDER BY avg_marks DESC, student_user_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank students by average marks using `ROW_NUMBER`, then keep the top 5.\n\n## 🔍 Explanation\n\n- Average marks are calculated first.\n- `ROW_NUMBER()` ranks students by average descending and student id ascending.\n- `rn <= 5` keeps the top five rows.\n- Final ordering keeps output aligned with the comparator rule.",
      },
    ],
  },
  {
    code: "EDUCATION_058",
    approaches: [
      {
        approach_title: "PERCENT_RANK",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT exam_id, student_user_id, PERCENT_RANK() OVER (PARTITION BY exam_id ORDER BY obtained_marks) AS percentile FROM exam_results WHERE obtained_marks IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nUse `PERCENT_RANK` to calculate each student's percentile position within an exam.\n\n## 🔍 Explanation\n\n- `PARTITION BY exam_id` calculates percentiles separately per exam.\n- `ORDER BY obtained_marks` ranks students from lowest to highest marks.\n- `PERCENT_RANK()` returns a value from 0 to 1 showing relative rank position.\n- Null marks are excluded before percentile calculation.",
      },
    ],
  },
  {
    code: "EDUCATION_059",
    approaches: [
      {
        approach_title: "ORDER LIMIT",
        approach_type: "sorting",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT student_user_id, attendance_percentage FROM enrollments WHERE attendance_percentage IS NOT NULL ORDER BY attendance_percentage DESC, student_user_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nSort enrollments by attendance percentage and return the top 10 students.\n\n## 🔍 Explanation\n\n- `attendance_percentage IS NOT NULL` removes missing attendance values.\n- `ORDER BY attendance_percentage DESC` puts highest attendance first.\n- `student_user_id ASC` breaks ties consistently.\n- `LIMIT 10` returns the top ten rows.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT student_user_id, attendance_percentage FROM (SELECT student_user_id, attendance_percentage, ROW_NUMBER() OVER (ORDER BY attendance_percentage DESC, student_user_id ASC) AS rn FROM enrollments WHERE attendance_percentage IS NOT NULL) ranked WHERE rn <= 10 ORDER BY attendance_percentage DESC, student_user_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank attendance rows with `ROW_NUMBER`, then return the first ten.\n\n## 🔍 Explanation\n\n- `ROW_NUMBER()` assigns a rank based on attendance descending and student id ascending.\n- `rn <= 10` keeps the top ten rows.\n- This is useful when the ranking value needs to be reused.",
      },
    ],
  },
  {
    code: "EDUCATION_060",
    approaches: [
      {
        approach_title: "Join fee plan",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT fp.program_id, SUM(fi.total_amount) AS total_revenue FROM fee_invoices fi JOIN student_fee_assignments sfa ON fi.fee_assignment_id = sfa.id JOIN fee_plans fp ON sfa.fee_plan_id = fp.id WHERE fp.program_id IS NOT NULL GROUP BY fp.program_id ORDER BY total_revenue DESC, fp.program_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nJoin invoices to fee assignments and fee plans to get the program for each invoice, then rank programs by revenue.\n\n## 🔍 Explanation\n\n- `fee_invoices` stores invoice amounts but not `program_id` directly.\n- `student_fee_assignments` connects invoices to fee plans.\n- `fee_plans.program_id` identifies the program generating the revenue.\n- `SUM(fi.total_amount)` calculates total revenue per program.\n- The final `ORDER BY` and `LIMIT 5` return the top five programs in the required order.",
      },
      {
        approach_title: "CTE revenue",
        approach_type: "cte",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH program_revenue AS (SELECT fp.program_id, SUM(fi.total_amount) AS total_revenue FROM fee_invoices fi JOIN student_fee_assignments sfa ON fi.fee_assignment_id = sfa.id JOIN fee_plans fp ON sfa.fee_plan_id = fp.id WHERE fp.program_id IS NOT NULL GROUP BY fp.program_id) SELECT program_id, total_revenue FROM program_revenue ORDER BY total_revenue DESC, program_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate revenue per program in a CTE, then sort and limit the result.\n\n## 🔍 Explanation\n\n- The CTE keeps the revenue calculation separate from the top-N selection.\n- This improves readability for a multi-table aggregation.\n- The final query applies the required ordering and returns only five rows.",
      },
    ],
  },
  {
    code: "EDUCATION_061",
    approaches: [
      {
        approach_title: "ROW_NUMBER top 2",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH student_avg AS (SELECT ex.offering_id, er.student_user_id, AVG(er.obtained_marks) AS avg_marks FROM exam_results er JOIN exams ex ON er.exam_id = ex.id WHERE ex.offering_id IS NOT NULL AND er.obtained_marks IS NOT NULL GROUP BY ex.offering_id, er.student_user_id), ranked AS (SELECT offering_id, student_user_id, avg_marks, ROW_NUMBER() OVER (PARTITION BY offering_id ORDER BY avg_marks DESC, student_user_id ASC) AS rn FROM student_avg) SELECT offering_id, student_user_id, avg_marks FROM ranked WHERE rn <= 2;",
        explanation:
          "## 🧠 Approach\n\nCalculate each student's average exam marks per course offering, rank students inside each offering, and keep the top two.\n\n## 🔍 Explanation\n\n- `exam_results` contains student marks.\n- `exams` provides the `offering_id`, so the marks are correctly tied to the course offering.\n- `AVG(er.obtained_marks)` calculates each student's average marks within that offering.\n- `ROW_NUMBER()` ranks students per offering by highest average marks.\n- `rn <= 2` returns exactly two students per offering when available.",
      },
    ],
  },
  {
    code: "EDUCATION_062",
    approaches: [
      {
        approach_title: "Program average",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH program_avg AS (SELECT program_id, AVG(cgpa) AS avg_program_cgpa FROM student_profiles WHERE program_id IS NOT NULL AND cgpa IS NOT NULL GROUP BY program_id) SELECT sp.user_id, sp.program_id, sp.cgpa FROM student_profiles sp JOIN program_avg pa ON sp.program_id = pa.program_id WHERE sp.cgpa > pa.avg_program_cgpa;",
        explanation:
          "## 🧠 Approach\n\nCompare each student's CGPA with the average CGPA of their own program.\n\n## 🔍 Explanation\n\n- The original CGPA trend question is not schema-valid because `student_profiles` has only one row per user and no `updated_at` history column.\n- This corrected version keeps the question hard and schema-valid by using a program-level comparison.\n- `program_avg` calculates average CGPA per program.\n- The final query returns students whose CGPA is above their program average.",
      },
      {
        approach_title: "Window average",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, program_id, cgpa FROM (SELECT user_id, program_id, cgpa, AVG(cgpa) OVER (PARTITION BY program_id) AS avg_program_cgpa FROM student_profiles WHERE program_id IS NOT NULL AND cgpa IS NOT NULL) x WHERE cgpa > avg_program_cgpa;",
        explanation:
          "## 🧠 Approach\n\nUse a window function to attach each program's average CGPA to every student row.\n\n## 🔍 Explanation\n\n- `AVG(cgpa) OVER (PARTITION BY program_id)` calculates the program average without collapsing rows.\n- Each student row keeps its own CGPA and receives the program average beside it.\n- The outer query filters students whose CGPA is above that average.",
      },
    ],
  },
  {
    code: "EDUCATION_063",
    approaches: [
      {
        approach_title: "LAG enrollment",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH enrollment_counts AS (SELECT co.course_id, co.term_id, COUNT(e.id) AS student_count FROM course_offerings co JOIN enrollments e ON co.id = e.offering_id WHERE e.enrollment_status = 'enrolled' GROUP BY co.course_id, co.term_id), ranked AS (SELECT course_id, term_id, student_count, LAG(student_count) OVER (PARTITION BY course_id ORDER BY term_id) AS prev_count FROM enrollment_counts) SELECT course_id, term_id, student_count FROM ranked WHERE prev_count IS NOT NULL AND student_count > prev_count;",
        explanation:
          "## 🧠 Approach\n\nCount enrolled students per course and term, then compare each term with the previous term.\n\n## 🔍 Explanation\n\n- `enrollments` has `offering_id`, not `academic_term_id`.\n- `course_offerings` provides both `course_id` and `term_id`.\n- The first CTE counts enrolled students per course per term.\n- `LAG(student_count)` gets the previous term's count for the same course.\n- The final filter keeps only terms where enrollment increased.",
      },
      {
        approach_title: "CTE split",
        approach_type: "cte",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH enrollment_counts AS (SELECT co.course_id, co.term_id, COUNT(e.id) AS student_count FROM course_offerings co JOIN enrollments e ON co.id = e.offering_id WHERE e.enrollment_status = 'enrolled' GROUP BY co.course_id, co.term_id), enrollment_trends AS (SELECT course_id, term_id, student_count, LAG(student_count) OVER (PARTITION BY course_id ORDER BY term_id) AS prev_count FROM enrollment_counts) SELECT course_id, term_id, student_count FROM enrollment_trends WHERE prev_count IS NOT NULL AND student_count > prev_count;",
        explanation:
          "## 🧠 Approach\n\nSeparate enrollment counting and trend comparison into two named CTEs.\n\n## 🔍 Explanation\n\n- `enrollment_counts` calculates the number of enrolled students per course and term.\n- `enrollment_trends` adds the previous term count using `LAG`.\n- The final query returns only course-term rows where the current count is greater than the previous count.",
      },
    ],
  },
  {
    code: "EDUCATION_064",
    approaches: [
      {
        approach_title: "FILTER all perfect",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT student_user_id FROM enrollments GROUP BY student_user_id HAVING COUNT(*) > 0 AND COUNT(*) = COUNT(*) FILTER (WHERE attendance_percentage = 100);",
        explanation:
          "## 🧠 Approach\n\nGroup enrollments by student and keep only students whose every enrollment has 100 attendance.\n\n## 🔍 Explanation\n\n- `COUNT(*)` counts all enrollments for the student.\n- `COUNT(*) FILTER (WHERE attendance_percentage = 100)` counts only perfect-attendance enrollments.\n- If both counts are equal, every enrollment has 100 attendance.\n- `COUNT(*) > 0` ensures the student has at least one enrollment.",
      },
      {
        approach_title: "BOOL_AND",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT student_user_id FROM enrollments GROUP BY student_user_id HAVING BOOL_AND(attendance_percentage = 100);",
        explanation:
          "## 🧠 Approach\n\nUse `BOOL_AND` to require every enrollment row to satisfy the perfect-attendance condition.\n\n## 🔍 Explanation\n\n- `BOOL_AND(attendance_percentage = 100)` returns true only when the condition is true for all rows in the group.\n- This is concise and expressive in PostgreSQL.\n- It may behave differently if attendance values are null, so the explicit count comparison is often clearer.",
      },
    ],
  },
  {
    code: "EDUCATION_065",
    approaches: [
      {
        approach_title: "FILTER all passed",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT e.offering_id FROM enrollments e JOIN exam_results r ON r.student_user_id = e.student_user_id GROUP BY e.offering_id HAVING COUNT(*) > 0 AND COUNT(*) = COUNT(*) FILTER (WHERE r.result_status = 'passed');",
        explanation:
          "## 🧠 Approach\n\nJoin course enrollments to exam results, group by offering, and keep offerings where every joined exam result is passed.\n\n## 🔍 Explanation\n\n- The join connects each offering's students to their exam results.\n- `COUNT(*)` counts all joined exam-result rows for that offering.\n- `COUNT(*) FILTER (WHERE r.result_status = 'passed')` counts only passed results.\n- If both counts match, every exam result for those students is passed.",
      },
      {
        approach_title: "BOOL_AND passed",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT e.offering_id FROM enrollments e JOIN exam_results r ON r.student_user_id = e.student_user_id GROUP BY e.offering_id HAVING BOOL_AND(r.result_status = 'passed');",
        explanation:
          "## 🧠 Approach\n\nUse `BOOL_AND` to require all joined exam results to be passed.\n\n## 🔍 Explanation\n\n- `BOOL_AND(r.result_status = 'passed')` returns true only if all rows in the offering group are passed.\n- This expresses the rule directly.\n- The count-based version is more explicit and includes the non-empty group condition.",
      },
      {
        approach_title: "No non-passed",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT e.offering_id FROM enrollments e WHERE EXISTS (SELECT 1 FROM exam_results r WHERE r.student_user_id = e.student_user_id) AND NOT EXISTS (SELECT 1 FROM enrollments e2 JOIN exam_results r2 ON r2.student_user_id = e2.student_user_id WHERE e2.offering_id = e.offering_id AND r2.result_status <> 'passed');",
        explanation:
          "## 🧠 Approach\n\nKeep offerings where at least one exam result exists and no non-passed result exists.\n\n## 🔍 Explanation\n\n- `EXISTS` ensures there is exam data for the offering's students.\n- `NOT EXISTS` rejects offerings where any joined exam result is not passed.\n- `DISTINCT` returns each qualifying offering once.",
      },
    ],
  },
  {
    code: "EDUCATION_066",
    approaches: [
      {
        approach_title: "FILTER counts",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT student_user_id, COUNT(*) FILTER (WHERE result_status = 'failed') AS failed_count, COUNT(*) FILTER (WHERE result_status = 'passed') AS passed_count FROM exam_results GROUP BY student_user_id HAVING COUNT(*) FILTER (WHERE result_status = 'failed') > COUNT(*) FILTER (WHERE result_status = 'passed');",
        explanation:
          "## 🧠 Approach\n\nCount failed and passed exams per student, then keep students whose failed count is greater.\n\n## 🔍 Explanation\n\n- `COUNT(*) FILTER (WHERE result_status = 'failed')` counts failed exams.\n- `COUNT(*) FILTER (WHERE result_status = 'passed')` counts passed exams.\n- `GROUP BY student_user_id` returns one row per student.\n- The `HAVING` clause compares the two conditional counts.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT student_user_id, SUM(CASE WHEN result_status = 'failed' THEN 1 ELSE 0 END) AS failed_count, SUM(CASE WHEN result_status = 'passed' THEN 1 ELSE 0 END) AS passed_count FROM exam_results GROUP BY student_user_id HAVING SUM(CASE WHEN result_status = 'failed' THEN 1 ELSE 0 END) > SUM(CASE WHEN result_status = 'passed' THEN 1 ELSE 0 END);",
        explanation:
          "## 🧠 Approach\n\nUse conditional sums to count failed and passed exam results.\n\n## 🔍 Explanation\n\n- Failed rows contribute `1` to `failed_count`.\n- Passed rows contribute `1` to `passed_count`.\n- Other statuses contribute `0` to both counts.\n- This is portable SQL, while `FILTER` is cleaner PostgreSQL syntax.",
      },
    ],
  },
  {
    code: "EDUCATION_067",
    approaches: [
      {
        approach_title: "BOOL_AND improvement",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH ranked AS (SELECT student_user_id, obtained_marks, LAG(obtained_marks) OVER (PARTITION BY student_user_id ORDER BY exam_id) AS prev_marks FROM exam_results WHERE obtained_marks IS NOT NULL) SELECT DISTINCT student_user_id FROM ranked GROUP BY student_user_id HAVING BOOL_AND(prev_marks IS NULL OR obtained_marks > prev_marks);",
        explanation:
          "## 🧠 Approach\n\nUse `LAG` to compare each exam mark with the previous exam mark, then require every comparison to show improvement.\n\n## 🔍 Explanation\n\n- The CTE calculates previous marks per student using exam order.\n- The first exam has no previous mark, so `prev_marks IS NULL` is allowed.\n- `obtained_marks > prev_marks` requires each later exam to be higher than the previous exam.\n- `BOOL_AND(...)` ensures every row for the student satisfies this condition.",
      },
      {
        approach_title: "No decline",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH ranked AS (SELECT student_user_id, obtained_marks, LAG(obtained_marks) OVER (PARTITION BY student_user_id ORDER BY exam_id) AS prev_marks FROM exam_results WHERE obtained_marks IS NOT NULL) SELECT DISTINCT student_user_id FROM ranked r WHERE NOT EXISTS (SELECT 1 FROM ranked x WHERE x.student_user_id = r.student_user_id AND x.prev_marks IS NOT NULL AND x.obtained_marks <= x.prev_marks);",
        explanation:
          "## 🧠 Approach\n\nReject students who have any exam where marks did not improve over the previous exam.\n\n## 🔍 Explanation\n\n- The CTE creates previous-mark comparisons.\n- The correlated `NOT EXISTS` checks for non-improvement rows.\n- If no such row exists, the student improved consistently.",
      },
    ],
  },
  {
    code: "EDUCATION_068",
    approaches: [
      {
        approach_title: "Primary teacher average",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT co.primary_teacher_id AS teacher_user_id, AVG(er.obtained_marks) AS avg_marks FROM course_offerings co JOIN enrollments e ON e.offering_id = co.id JOIN exams ex ON ex.offering_id = co.id JOIN exam_results er ON er.exam_id = ex.id AND er.student_user_id = e.student_user_id WHERE co.primary_teacher_id IS NOT NULL AND er.obtained_marks IS NOT NULL GROUP BY co.primary_teacher_id ORDER BY avg_marks DESC, teacher_user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nUse each course offering's primary teacher, connect the offering to enrolled students and exams, then calculate the teacher's average student marks.\n\n## 🔍 Explanation\n\n- `course_offerings.primary_teacher_id` is the schema-valid teacher column.\n- `enrollments` ensures the student belongs to the offering.\n- `exams` connects exam results to the same course offering.\n- `exam_results` provides the obtained marks for enrolled students.\n- `AVG(er.obtained_marks)` calculates average performance per teacher.\n- The final ordering returns the top five teachers by average marks, with teacher id as the tie-breaker.",
      },
      {
        approach_title: "CTE teacher scores",
        approach_type: "cte",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH teacher_scores AS (SELECT co.primary_teacher_id AS teacher_user_id, AVG(er.obtained_marks) AS avg_marks FROM course_offerings co JOIN enrollments e ON e.offering_id = co.id JOIN exams ex ON ex.offering_id = co.id JOIN exam_results er ON er.exam_id = ex.id AND er.student_user_id = e.student_user_id WHERE co.primary_teacher_id IS NOT NULL AND er.obtained_marks IS NOT NULL GROUP BY co.primary_teacher_id) SELECT teacher_user_id, avg_marks FROM teacher_scores ORDER BY avg_marks DESC, teacher_user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate average marks per teacher in a CTE, then sort and limit the result.\n\n## 🔍 Explanation\n\n- The CTE keeps the teacher performance calculation separate.\n- The final query applies the top-five ranking.\n- This is easier to read when the join path is long.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT teacher_user_id, avg_marks FROM (SELECT teacher_user_id, avg_marks, ROW_NUMBER() OVER (ORDER BY avg_marks DESC, teacher_user_id ASC) AS rn FROM (SELECT co.primary_teacher_id AS teacher_user_id, AVG(er.obtained_marks) AS avg_marks FROM course_offerings co JOIN enrollments e ON e.offering_id = co.id JOIN exams ex ON ex.offering_id = co.id JOIN exam_results er ON er.exam_id = ex.id AND er.student_user_id = e.student_user_id WHERE co.primary_teacher_id IS NOT NULL AND er.obtained_marks IS NOT NULL GROUP BY co.primary_teacher_id) teacher_scores) ranked WHERE rn <= 5 ORDER BY avg_marks DESC, teacher_user_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank teachers by average student marks using `ROW_NUMBER`, then keep the top five.\n\n## 🔍 Explanation\n\n- The inner query calculates average marks per teacher.\n- `ROW_NUMBER()` assigns a deterministic rank using average marks descending and teacher id ascending.\n- `rn <= 5` keeps the top five teachers.\n- The final `ORDER BY` matches the configured comparator order.",
      },
    ],
  },
  {
    code: "EDUCATION_069",
    approaches: [
      {
        approach_title: "GROUP top assignment",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT student_user_id, AVG(obtained_marks) AS avg_marks FROM assignment_submissions WHERE obtained_marks IS NOT NULL GROUP BY student_user_id ORDER BY avg_marks DESC, student_user_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate average assignment marks per student, sort highest first, and return the top 10.\n\n## 🔍 Explanation\n\n- `obtained_marks IS NOT NULL` keeps graded submissions only.\n- `GROUP BY student_user_id` calculates one average per student.\n- `ORDER BY avg_marks DESC, student_user_id ASC` follows the required sorting.\n- `LIMIT 10` returns the top ten students.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT student_user_id, avg_marks FROM (SELECT student_user_id, AVG(obtained_marks) AS avg_marks FROM assignment_submissions WHERE obtained_marks IS NOT NULL GROUP BY student_user_id) student_assignment_avg ORDER BY avg_marks DESC, student_user_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate assignment averages first, then sort and limit outside.\n\n## 🔍 Explanation\n\n- The inner query creates one average assignment score per student.\n- The outer query ranks and keeps the top ten.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT student_user_id, avg_marks FROM (SELECT student_user_id, avg_marks, ROW_NUMBER() OVER (ORDER BY avg_marks DESC, student_user_id ASC) AS rn FROM (SELECT student_user_id, AVG(obtained_marks) AS avg_marks FROM assignment_submissions WHERE obtained_marks IS NOT NULL GROUP BY student_user_id) student_assignment_avg) ranked WHERE rn <= 10 ORDER BY avg_marks DESC, student_user_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank students by average assignment marks and keep the top 10.\n\n## 🔍 Explanation\n\n- Student averages are computed first.\n- `ROW_NUMBER()` ranks by average marks descending and student id ascending.\n- `rn <= 10` keeps the top ten students.",
      },
    ],
  },
  {
    code: "EDUCATION_070",
    approaches: [
      {
        approach_title: "FILTER drop rate",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT offering_id, (COUNT(*) FILTER (WHERE enrollment_status = 'dropped')::numeric / COUNT(*)) AS drop_rate FROM enrollments GROUP BY offering_id HAVING COUNT(*) > 0 ORDER BY drop_rate DESC, offering_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate dropout percentage per offering, then return the top 5 highest drop rates.\n\n## 🔍 Explanation\n\n- `COUNT(*) FILTER (WHERE enrollment_status = 'dropped')` counts dropped enrollments.\n- `COUNT(*)` counts all enrollments for the offering.\n- Casting to `numeric` avoids integer division.\n- The ratio gives drop rate.\n- Ordering returns offerings with highest drop rate first.",
      },
      {
        approach_title: "SUM CASE rate",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT offering_id, (SUM(CASE WHEN enrollment_status = 'dropped' THEN 1 ELSE 0 END)::numeric / COUNT(*)) AS drop_rate FROM enrollments GROUP BY offering_id HAVING COUNT(*) > 0 ORDER BY drop_rate DESC, offering_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nUse conditional sums to calculate dropped enrollment count, then divide by total enrollments.\n\n## 🔍 Explanation\n\n- Dropped enrollments contribute `1`.\n- Other enrollments contribute `0`.\n- Dividing by total count gives the drop rate.\n- This is portable SQL, while `FILTER` is cleaner in PostgreSQL.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT offering_id, drop_rate FROM (SELECT offering_id, (COUNT(*) FILTER (WHERE enrollment_status = 'dropped')::numeric / COUNT(*)) AS drop_rate FROM enrollments GROUP BY offering_id HAVING COUNT(*) > 0) rates ORDER BY drop_rate DESC, offering_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate drop rate first, then sort and limit outside.\n\n## 🔍 Explanation\n\n- The inner query computes one drop rate per offering.\n- The outer query ranks those rates and returns the top five.\n- This keeps the ratio calculation separate from top-N selection.",
      },
    ],
  },
  {
    code: "EDUCATION_071",
    approaches: [
      {
        approach_title: "COUNT all exams",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT student_user_id FROM exam_results GROUP BY student_user_id HAVING COUNT(DISTINCT exam_id) = (SELECT COUNT(*) FROM exams);",
        explanation:
          "## 🧠 Approach\n\nCount distinct exams attempted by each student and compare it with the total number of exams.\n\n## 🔍 Explanation\n\n- `COUNT(DISTINCT exam_id)` counts how many unique exams each student attempted.\n- The subquery `SELECT COUNT(*) FROM exams` returns the total number of exams available.\n- If both counts are equal, the student has attempted every exam.\n- `GROUP BY student_user_id` returns one row per qualifying student.",
      },
      {
        approach_title: "NOT EXISTS division",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT er.student_user_id FROM exam_results er WHERE NOT EXISTS (SELECT 1 FROM exams e WHERE NOT EXISTS (SELECT 1 FROM exam_results er2 WHERE er2.student_user_id = er.student_user_id AND er2.exam_id = e.id));",
        explanation:
          "## 🧠 Approach\n\nUse relational division: keep students for whom no exam is missing.\n\n## 🔍 Explanation\n\n- The outer query starts from students who have exam results.\n- The first `NOT EXISTS` checks that there is no exam without a matching result for that student.\n- The inner `NOT EXISTS` searches for the student's attempt for each exam.\n- This directly expresses “attempted all exams.”",
      },
    ],
  },
  {
    code: "EDUCATION_072",
    approaches: [
      {
        approach_title: "FILTER no failures",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT student_user_id FROM exam_results GROUP BY student_user_id HAVING COUNT(*) FILTER (WHERE result_status = 'failed') = 0;",
        explanation:
          "## 🧠 Approach\n\nGroup exam results by student and keep students with zero failed results.\n\n## 🔍 Explanation\n\n- `GROUP BY student_user_id` creates one group per student.\n- `COUNT(*) FILTER (WHERE result_status = 'failed')` counts only failed exams.\n- `HAVING ... = 0` keeps students who never failed any exam.",
      },
      {
        approach_title: "BOOL_AND not failed",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT student_user_id FROM exam_results GROUP BY student_user_id HAVING BOOL_AND(result_status <> 'failed');",
        explanation:
          "## 🧠 Approach\n\nUse `BOOL_AND` to ensure every exam result is not failed.\n\n## 🔍 Explanation\n\n- `BOOL_AND(result_status <> 'failed')` returns true only if all rows for the student are non-failed.\n- This is concise PostgreSQL syntax.\n- The `FILTER` count version is more explicit for learners.",
      },
      {
        approach_title: "NOT EXISTS failed",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT er.student_user_id FROM exam_results er WHERE NOT EXISTS (SELECT 1 FROM exam_results f WHERE f.student_user_id = er.student_user_id AND f.result_status = 'failed');",
        explanation:
          "## 🧠 Approach\n\nReturn students for whom no failed exam result exists.\n\n## 🔍 Explanation\n\n- The outer query gets students from exam results.\n- The correlated subquery searches for failed results for the same student.\n- `NOT EXISTS` keeps only students with no matching failed row.\n- `DISTINCT` removes duplicates caused by multiple exam results.",
      },
    ],
  },
  {
    code: "EDUCATION_073",
    approaches: [
      {
        approach_title: "LAG after failure",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH ranked AS (SELECT student_user_id, obtained_marks, result_status, LAG(result_status) OVER (PARTITION BY student_user_id ORDER BY exam_id) AS prev_status, LAG(obtained_marks) OVER (PARTITION BY student_user_id ORDER BY exam_id) AS prev_marks FROM exam_results) SELECT DISTINCT student_user_id FROM ranked WHERE prev_status = 'failed' AND obtained_marks > prev_marks;",
        explanation:
          "## 🧠 Approach\n\nUse `LAG` to compare each exam with the student's previous exam.\n\n## 🔍 Explanation\n\n- `LAG(result_status)` gets the previous exam result status.\n- `LAG(obtained_marks)` gets the previous exam marks.\n- `prev_status = 'failed'` ensures the previous exam was failed.\n- `obtained_marks > prev_marks` ensures the next exam score improved.\n- `DISTINCT` returns each qualifying student once.",
      },
      {
        approach_title: "Self join next exam",
        approach_type: "join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT curr.student_user_id FROM exam_results prev JOIN exam_results curr ON curr.student_user_id = prev.student_user_id AND curr.exam_id > prev.exam_id WHERE prev.result_status = 'failed' AND curr.obtained_marks > prev.obtained_marks;",
        explanation:
          "## 🧠 Approach\n\nJoin failed exams to later exams by the same student and check if the later score is higher.\n\n## 🔍 Explanation\n\n- `prev` represents a failed exam.\n- `curr` represents a later exam for the same student.\n- The score comparison checks improvement after failure.\n- This can match any later exam, not strictly the immediate next exam, so the `LAG` version better matches the expected logic.",
      },
    ],
  },
  {
    code: "EDUCATION_074",
    approaches: [
      {
        approach_title: "JOIN top CGPA",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT e.offering_id, AVG(sp.cgpa) AS avg_cgpa FROM enrollments e JOIN student_profiles sp ON sp.user_id = e.student_user_id WHERE sp.cgpa IS NOT NULL GROUP BY e.offering_id ORDER BY avg_cgpa DESC, e.offering_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nJoin enrollments to student profiles, calculate average CGPA per course offering, and return the top 5.\n\n## 🔍 Explanation\n\n- `enrollments` maps students to course offerings.\n- `student_profiles` provides each student's CGPA.\n- `WHERE sp.cgpa IS NOT NULL` excludes missing CGPA values.\n- `GROUP BY e.offering_id` calculates one average per offering.\n- The order ranks highest average CGPA first.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT offering_id, avg_cgpa FROM (SELECT e.offering_id, AVG(sp.cgpa) AS avg_cgpa FROM enrollments e JOIN student_profiles sp ON sp.user_id = e.student_user_id WHERE sp.cgpa IS NOT NULL GROUP BY e.offering_id) course_cgpa ORDER BY avg_cgpa DESC, offering_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate average CGPA per offering first, then sort and limit outside.\n\n## 🔍 Explanation\n\n- The inner query computes offering-level average CGPA.\n- The outer query ranks those averages and returns the top five.\n- This separates aggregation from top-N selection.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT offering_id, avg_cgpa FROM (SELECT offering_id, avg_cgpa, ROW_NUMBER() OVER (ORDER BY avg_cgpa DESC, offering_id ASC) AS rn FROM (SELECT e.offering_id, AVG(sp.cgpa) AS avg_cgpa FROM enrollments e JOIN student_profiles sp ON sp.user_id = e.student_user_id WHERE sp.cgpa IS NOT NULL GROUP BY e.offering_id) course_cgpa) ranked WHERE rn <= 5 ORDER BY avg_cgpa DESC, offering_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank course offerings by average CGPA using `ROW_NUMBER`.\n\n## 🔍 Explanation\n\n- Average CGPA is calculated per offering first.\n- `ROW_NUMBER()` ranks offerings using average CGPA descending and offering id ascending.\n- `rn <= 5` keeps the top five rows.\n- The final ordering follows the comparator rule.",
      },
    ],
  },
  {
    code: "EDUCATION_075",
    approaches: [
      {
        approach_title: "MAX attempt count",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH attempt_counts AS (SELECT student_user_id, COUNT(*) AS attempt_count FROM exam_results GROUP BY student_user_id) SELECT student_user_id, attempt_count FROM attempt_counts WHERE attempt_count = (SELECT MAX(attempt_count) FROM attempt_counts);",
        explanation:
          "## 🧠 Approach\n\nCount exam attempts per student, then keep students whose count equals the maximum attempt count.\n\n## 🔍 Explanation\n\n- `attempt_counts` calculates each student's total exam attempts.\n- The scalar subquery finds the highest attempt count.\n- The final query returns all students tied for that maximum.\n- This correctly handles ties.",
      },
      {
        approach_title: "RANK max",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT student_user_id, attempt_count FROM (SELECT student_user_id, COUNT(*) AS attempt_count, RANK() OVER (ORDER BY COUNT(*) DESC) AS rnk FROM exam_results GROUP BY student_user_id) ranked WHERE rnk = 1;",
        explanation:
          "## 🧠 Approach\n\nRank students by attempt count and keep rank 1.\n\n## 🔍 Explanation\n\n- `COUNT(*)` calculates attempts per student.\n- `RANK() OVER (ORDER BY COUNT(*) DESC)` gives rank 1 to the highest count.\n- Tied students all receive rank 1.\n- This is compact and avoids a separate max subquery.",
      },
    ],
  },
  {
    code: "EDUCATION_076",
    approaches: [
      {
        approach_title: "DISTINCT perfect",
        approach_type: "distinct",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT offering_id FROM enrollments WHERE attendance_percentage = 100;",
        explanation:
          "## 🧠 Approach\n\nFilter enrollments with perfect attendance and return each course offering once.\n\n## 🔍 Explanation\n\n- `attendance_percentage = 100` identifies students with perfect attendance.\n- A course can have many such students.\n- `DISTINCT offering_id` ensures each qualifying course offering appears once.",
      },
      {
        approach_title: "GROUP BY offering",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT offering_id FROM enrollments WHERE attendance_percentage = 100 GROUP BY offering_id;",
        explanation:
          "## 🧠 Approach\n\nGroup perfect-attendance rows by offering to return unique offerings.\n\n## 🔍 Explanation\n\n- The `WHERE` clause keeps only perfect-attendance enrollments.\n- `GROUP BY offering_id` collapses duplicates.\n- This returns the same result as `DISTINCT`.",
      },
      {
        approach_title: "EXISTS perfect",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT e.offering_id FROM enrollments e WHERE EXISTS (SELECT 1 FROM enrollments x WHERE x.offering_id = e.offering_id AND x.attendance_percentage = 100);",
        explanation:
          "## 🧠 Approach\n\nCheck whether each offering has at least one perfect-attendance enrollment.\n\n## 🔍 Explanation\n\n- The correlated subquery searches for a 100% attendance row in the same offering.\n- `EXISTS` keeps offerings where such a row exists.\n- `DISTINCT` removes repeated offering ids.",
      },
    ],
  },
  {
    code: "EDUCATION_077",
    approaches: [
      {
        approach_title: "Join invoice payments",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT fi.student_user_id, SUM(p.paid_amount) AS total_paid FROM payments p JOIN fee_invoices fi ON p.invoice_id = fi.id WHERE p.payment_status = 'successful' GROUP BY fi.student_user_id ORDER BY total_paid DESC, fi.student_user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nJoin payments to invoices to identify the student, then sum successful payment amounts per student.\n\n## 🔍 Explanation\n\n- `payments` stores payment amounts but does not store `student_user_id` directly.\n- `fee_invoices` contains the `student_user_id` for each invoice.\n- `WHERE p.payment_status = 'successful'` keeps only successful payments.\n- `SUM(p.paid_amount)` calculates total paid fees per student.\n- The final ordering returns the top five students by total paid amount.",
      },
      {
        approach_title: "CTE paid totals",
        approach_type: "cte",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH paid_totals AS (SELECT fi.student_user_id, SUM(p.paid_amount) AS total_paid FROM payments p JOIN fee_invoices fi ON p.invoice_id = fi.id WHERE p.payment_status = 'successful' GROUP BY fi.student_user_id) SELECT student_user_id, total_paid FROM paid_totals ORDER BY total_paid DESC, student_user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate successful payment totals per student in a CTE, then rank the result.\n\n## 🔍 Explanation\n\n- The CTE performs the invoice join and aggregation.\n- The outer query applies the top-five ordering.\n- This keeps the aggregation logic separate from the ranking step.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT student_user_id, total_paid FROM (SELECT student_user_id, total_paid, ROW_NUMBER() OVER (ORDER BY total_paid DESC, student_user_id ASC) AS rn FROM (SELECT fi.student_user_id, SUM(p.paid_amount) AS total_paid FROM payments p JOIN fee_invoices fi ON p.invoice_id = fi.id WHERE p.payment_status = 'successful' GROUP BY fi.student_user_id) paid_totals) ranked WHERE rn <= 5 ORDER BY total_paid DESC, student_user_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank students by total successful payment amount and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query calculates total successful paid amount per student.\n- `ROW_NUMBER()` ranks students by `total_paid DESC` and `student_user_id ASC`.\n- `rn <= 5` keeps the top five rows.\n- The final `ORDER BY` matches the configured comparator order.",
      },
    ],
  },
  {
    code: "EDUCATION_078",
    approaches: [
      {
        approach_title: "Join due date",
        approach_type: "join_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT s.student_user_id FROM assignment_submissions s JOIN assignments a ON s.assignment_id = a.id WHERE s.submitted_at > a.due_at;",
        explanation:
          "## 🧠 Approach\n\nJoin submissions to assignments so each submission can be compared with its assignment due date.\n\n## 🔍 Explanation\n\n- `assignment_submissions` stores `submitted_at`, but not `due_at`.\n- `assignments` stores the assignment `due_at` value.\n- `s.submitted_at > a.due_at` identifies late submissions.\n- `DISTINCT` returns each late-submitting student only once.",
      },
      {
        approach_title: "GROUP late students",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT s.student_user_id FROM assignment_submissions s JOIN assignments a ON s.assignment_id = a.id WHERE s.submitted_at > a.due_at GROUP BY s.student_user_id;",
        explanation:
          "## 🧠 Approach\n\nGroup late submissions by student to produce a unique student list.\n\n## 🔍 Explanation\n\n- The join provides the due date for each submitted assignment.\n- The `WHERE` clause keeps only submissions after the due date.\n- `GROUP BY s.student_user_id` collapses multiple late submissions into one row per student.",
      },
    ],
  },
  {
    code: "EDUCATION_079",
    approaches: [
      {
        approach_title: "GROUP top assignments",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT offering_id, COUNT(*) AS assignment_count FROM assignments GROUP BY offering_id ORDER BY assignment_count DESC, offering_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount assignments per course offering and return the top 5 offerings.\n\n## 🔍 Explanation\n\n- `GROUP BY offering_id` creates one row per course offering.\n- `COUNT(*)` counts assignments in each offering.\n- `ORDER BY assignment_count DESC, offering_id ASC` follows the required sort order.\n- `LIMIT 5` returns the offerings with the most assignments.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT offering_id, assignment_count FROM (SELECT offering_id, COUNT(*) AS assignment_count FROM assignments GROUP BY offering_id) assignment_counts ORDER BY assignment_count DESC, offering_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate assignment counts first, then sort and limit outside.\n\n## 🔍 Explanation\n\n- The inner query computes assignment count per offering.\n- The outer query ranks those counts and keeps the top five.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT offering_id, assignment_count FROM (SELECT offering_id, assignment_count, ROW_NUMBER() OVER (ORDER BY assignment_count DESC, offering_id ASC) AS rn FROM (SELECT offering_id, COUNT(*) AS assignment_count FROM assignments GROUP BY offering_id) assignment_counts) ranked WHERE rn <= 5 ORDER BY assignment_count DESC, offering_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank offerings by assignment count using `ROW_NUMBER` and keep the top five.\n\n## 🔍 Explanation\n\n- Assignment counts are calculated first.\n- `ROW_NUMBER()` ranks by count descending and offering id ascending.\n- `rn <= 5` keeps the top five rows.\n- Final ordering matches the comparator config.",
      },
    ],
  },
  {
    code: "EDUCATION_080",
    approaches: [
      {
        approach_title: "GROUP top posts",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, COUNT(*) AS post_count FROM discussion_posts GROUP BY user_id ORDER BY post_count DESC, user_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCount discussion posts per user and return the top 10 users.\n\n## 🔍 Explanation\n\n- `GROUP BY user_id` creates one row per posting user.\n- `COUNT(*)` counts discussion posts for each user.\n- `ORDER BY post_count DESC, user_id ASC` ranks highest participation first.\n- `LIMIT 10` returns the top ten users.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, post_count FROM (SELECT user_id, COUNT(*) AS post_count FROM discussion_posts GROUP BY user_id) post_counts ORDER BY post_count DESC, user_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate post counts first, then rank and limit outside.\n\n## 🔍 Explanation\n\n- The inner query computes each user's post count.\n- The outer query sorts by post count and returns the top ten.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT user_id, post_count FROM (SELECT user_id, post_count, ROW_NUMBER() OVER (ORDER BY post_count DESC, user_id ASC) AS rn FROM (SELECT user_id, COUNT(*) AS post_count FROM discussion_posts GROUP BY user_id) post_counts) ranked WHERE rn <= 10 ORDER BY post_count DESC, user_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank users by discussion post count and keep the top ten.\n\n## 🔍 Explanation\n\n- User post counts are calculated first.\n- `ROW_NUMBER()` ranks users by post count descending and user id ascending.\n- `rn <= 10` keeps the top ten users.\n- Final ordering follows the comparator rule.",
      },
    ],
  },
  {
    code: "EDUCATION_081",
    approaches: [
      {
        approach_title: "Program average join",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH program_avg_cgpa AS (SELECT program_id, AVG(cgpa) AS avg_cgpa FROM student_profiles WHERE program_id IS NOT NULL AND cgpa IS NOT NULL GROUP BY program_id) SELECT sp.user_id, sp.program_id, sp.cgpa FROM student_profiles sp JOIN program_avg_cgpa pag ON sp.program_id = pag.program_id WHERE sp.cgpa IS NOT NULL AND sp.cgpa > pag.avg_cgpa;",
        explanation:
          "## 🧠 Approach\n\nCalculate average CGPA per program, join it back to students, then keep students above their own program average.\n\n## 🔍 Explanation\n\n- The CTE calculates one average CGPA per program.\n- The join gives each student access to their program average.\n- `sp.cgpa > pag.avg_cgpa` keeps only students above the benchmark for their program.",
      },
      {
        approach_title: "Window average",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, program_id, cgpa FROM (SELECT user_id, program_id, cgpa, AVG(cgpa) OVER (PARTITION BY program_id) AS avg_program_cgpa FROM student_profiles WHERE program_id IS NOT NULL AND cgpa IS NOT NULL) x WHERE cgpa > avg_program_cgpa;",
        explanation:
          "## 🧠 Approach\n\nUse a window average to attach each program's average CGPA to every student row.\n\n## 🔍 Explanation\n\n- `AVG(cgpa) OVER (PARTITION BY program_id)` calculates the program average.\n- The outer query filters students whose CGPA is greater than that average.\n- This avoids a separate grouped join.",
      },
    ],
  },
  {
    code: "EDUCATION_082",
    approaches: [
      {
        approach_title: "GROUP failed exams",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT student_user_id, COUNT(*) AS failed_exam_count FROM exam_results WHERE grade_letter = 'F' GROUP BY student_user_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nFilter failed exam rows, count failures per student, and keep students with more than one failure.\n\n## 🔍 Explanation\n\n- `grade_letter = 'F'` identifies failed exams.\n- `GROUP BY student_user_id` creates one row per student.\n- `HAVING COUNT(*) > 1` keeps students who failed multiple exams.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT student_user_id, failed_exam_count FROM (SELECT student_user_id, COUNT(*) AS failed_exam_count FROM exam_results WHERE grade_letter = 'F' GROUP BY student_user_id) failed_counts WHERE failed_exam_count > 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate failed exam counts first, then filter using the alias.\n\n## 🔍 Explanation\n\n- The inner query computes failure count per student.\n- The outer query keeps only rows where `failed_exam_count > 1`.\n- This avoids repeating the aggregate expression in `HAVING`.",
      },
    ],
  },
  {
    code: "EDUCATION_083",
    approaches: [
      {
        approach_title: "Teacher vs department",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH teacher_avg AS (SELECT tp.department_id, sf.teacher_user_id, AVG(sf.rating_value) AS avg_rating FROM student_feedback sf JOIN teacher_profiles tp ON sf.teacher_user_id = tp.user_id WHERE tp.department_id IS NOT NULL GROUP BY tp.department_id, sf.teacher_user_id), department_avg AS (SELECT department_id, AVG(avg_rating) AS dept_avg_rating FROM teacher_avg GROUP BY department_id) SELECT ta.department_id, ta.teacher_user_id, ROUND(ta.avg_rating, 2) AS avg_rating FROM teacher_avg ta JOIN department_avg da ON ta.department_id = da.department_id WHERE ta.avg_rating > da.dept_avg_rating;",
        explanation:
          "## 🧠 Approach\n\nCalculate each teacher's average rating, calculate department average teacher rating, then return teachers above their department average.\n\n## 🔍 Explanation\n\n- `teacher_avg` creates one average rating per teacher within a department.\n- `department_avg` averages those teacher-level averages per department.\n- The final join compares each teacher to their department benchmark.\n- `ROUND(ta.avg_rating, 2)` matches the expected output shape.",
      },
      {
        approach_title: "Window department avg",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT department_id, teacher_user_id, ROUND(avg_rating, 2) AS avg_rating FROM (SELECT department_id, teacher_user_id, avg_rating, AVG(avg_rating) OVER (PARTITION BY department_id) AS dept_avg_rating FROM (SELECT tp.department_id, sf.teacher_user_id, AVG(sf.rating_value) AS avg_rating FROM student_feedback sf JOIN teacher_profiles tp ON sf.teacher_user_id = tp.user_id WHERE tp.department_id IS NOT NULL GROUP BY tp.department_id, sf.teacher_user_id) teacher_avg) x WHERE avg_rating > dept_avg_rating;",
        explanation:
          "## 🧠 Approach\n\nUse a window average over teacher-level averages to get the department benchmark.\n\n## 🔍 Explanation\n\n- The innermost query calculates teacher average feedback rating.\n- `AVG(avg_rating) OVER (PARTITION BY department_id)` calculates the department average on each teacher row.\n- The outer query keeps teachers above that department average.",
      },
    ],
  },
  {
    code: "EDUCATION_084",
    approaches: [
      {
        approach_title: "Expected vs actual",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH offering_assignments AS (SELECT offering_id, COUNT(*) AS total_assignments FROM assignments GROUP BY offering_id), enrolled_students AS (SELECT offering_id, COUNT(*) AS total_students FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY offering_id), required_submissions AS (SELECT oa.offering_id, oa.total_assignments * es.total_students AS expected_submissions FROM offering_assignments oa JOIN enrolled_students es ON oa.offering_id = es.offering_id), actual_submissions AS (SELECT a.offering_id, COUNT(*) AS actual_submissions FROM assignments a JOIN assignment_submissions s ON a.id = s.assignment_id WHERE s.submission_status IN ('submitted', 'late_submitted', 'graded') GROUP BY a.offering_id) SELECT rs.offering_id FROM required_submissions rs JOIN actual_submissions ac ON rs.offering_id = ac.offering_id WHERE rs.expected_submissions = ac.actual_submissions;",
        explanation:
          "## 🧠 Approach\n\nCompare the required submission count with the actual valid submission count for each offering.\n\n## 🔍 Explanation\n\n- Required submissions are calculated as `total assignments × enrolled students`.\n- Actual submissions count rows with status `submitted`, `late_submitted`, or `graded`.\n- If expected and actual counts match, the offering is considered fully submitted according to the question's expected logic.\n- The `NOT EXISTS` version is not included because it checks student-by-student completeness, which is stricter and can produce a different row count.",
      },
      {
        approach_title: "Compact counts",
        approach_type: "cte",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH required_submissions AS (SELECT a.offering_id, COUNT(DISTINCT a.id) * COUNT(DISTINCT e.student_user_id) AS expected_submissions FROM assignments a JOIN enrollments e ON a.offering_id = e.offering_id WHERE e.enrollment_status = 'enrolled' GROUP BY a.offering_id), actual_submissions AS (SELECT a.offering_id, COUNT(*) AS actual_submissions FROM assignments a JOIN assignment_submissions s ON a.id = s.assignment_id WHERE s.submission_status IN ('submitted', 'late_submitted', 'graded') GROUP BY a.offering_id) SELECT rs.offering_id FROM required_submissions rs JOIN actual_submissions ac ON rs.offering_id = ac.offering_id WHERE rs.expected_submissions = ac.actual_submissions;",
        explanation:
          "## 🧠 Approach\n\nCalculate expected and actual submission counts using fewer CTEs.\n\n## 🔍 Explanation\n\n- The first CTE calculates expected submissions per offering using distinct assignment and enrolled-student counts.\n- The second CTE calculates valid actual submissions per offering.\n- The final query keeps only offerings where both counts match.\n- This is equivalent to the expected-count approach, while still avoiding the stricter student-by-student `NOT EXISTS` logic.",
      },
    ],
  },
  {
    code: "EDUCATION_085",
    approaches: [
      {
        approach_title: "LEFT anti join",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT fi.student_user_id FROM fee_invoices fi LEFT JOIN payments p ON fi.id = p.invoice_id AND p.payment_status = 'successful' WHERE p.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nStart from fee invoices and left join successful payments, then keep invoice rows with no successful payment.\n\n## 🔍 Explanation\n\n- `fee_invoices` ensures the student has invoice records.\n- The join only matches successful payments.\n- `p.id IS NULL` means no successful payment matched that invoice.\n- `DISTINCT` returns each qualifying student once.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT fi.student_user_id FROM fee_invoices fi WHERE NOT EXISTS (SELECT 1 FROM payments p WHERE p.invoice_id = fi.id AND p.payment_status = 'successful');",
        explanation:
          "## 🧠 Approach\n\nReturn students with invoices where no successful payment exists for the invoice.\n\n## 🔍 Explanation\n\n- The correlated subquery searches successful payments for each invoice.\n- `NOT EXISTS` keeps invoices without successful payment records.\n- `DISTINCT` prevents duplicate student ids.",
      },
    ],
  },
  {
    code: "EDUCATION_086",
    approaches: [
      {
        approach_title: "Self join overlap",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT t1.classroom_id, t1.weekday_no, t1.id AS slot_id_1, t2.id AS slot_id_2 FROM timetable_slots t1 JOIN timetable_slots t2 ON t1.classroom_id = t2.classroom_id AND t1.weekday_no = t2.weekday_no AND t1.id < t2.id AND t1.start_time < t2.end_time AND t2.start_time < t1.end_time WHERE t1.classroom_id IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nSelf join timetable slots to find overlapping slots in the same classroom on the same weekday.\n\n## 🔍 Explanation\n\n- `t1.classroom_id = t2.classroom_id` checks the same classroom.\n- `t1.weekday_no = t2.weekday_no` checks the same weekday.\n- `t1.id < t2.id` avoids comparing a row to itself and avoids duplicate reversed pairs.\n- `t1.start_time < t2.end_time AND t2.start_time < t1.end_time` is the standard interval-overlap condition.",
      },
    ],
  },
  {
    code: "EDUCATION_087",
    approaches: [
      {
        approach_title: "Teacher slot overlap",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH teacher_slots AS (SELECT ct.teacher_user_id, ts.weekday_no, ts.id AS slot_id, ts.start_time, ts.end_time FROM course_teachers ct JOIN timetable_slots ts ON ct.offering_id = ts.offering_id) SELECT ts1.teacher_user_id, ts1.weekday_no, ts1.slot_id AS slot_id_1, ts2.slot_id AS slot_id_2 FROM teacher_slots ts1 JOIN teacher_slots ts2 ON ts1.teacher_user_id = ts2.teacher_user_id AND ts1.weekday_no = ts2.weekday_no AND ts1.slot_id < ts2.slot_id AND ts1.start_time < ts2.end_time AND ts2.start_time < ts1.end_time;",
        explanation:
          "## 🧠 Approach\n\nCreate teacher timetable slots, then self join them to find overlapping slots for the same teacher.\n\n## 🔍 Explanation\n\n- The CTE maps each teacher to their timetable slots.\n- The self join compares slots for the same teacher and weekday.\n- `slot_id < slot_id` prevents duplicate pairs.\n- The time overlap condition identifies scheduling conflicts.",
      },
      {
        approach_title: "Inline self join",
        approach_type: "join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT ct1.teacher_user_id, ts1.weekday_no, ts1.id AS slot_id_1, ts2.id AS slot_id_2 FROM course_teachers ct1 JOIN timetable_slots ts1 ON ct1.offering_id = ts1.offering_id JOIN course_teachers ct2 ON ct2.teacher_user_id = ct1.teacher_user_id JOIN timetable_slots ts2 ON ct2.offering_id = ts2.offering_id AND ts1.weekday_no = ts2.weekday_no AND ts1.id < ts2.id AND ts1.start_time < ts2.end_time AND ts2.start_time < ts1.end_time;",
        explanation:
          "## 🧠 Approach\n\nJoin teacher assignments and timetable slots directly without a CTE.\n\n## 🔍 Explanation\n\n- This performs the same conflict check inline.\n- It avoids the named CTE but is harder to read.\n- The CTE version is preferred because it clearly separates teacher-slot mapping from overlap detection.",
      },
    ],
  },
  {
    code: "EDUCATION_088",
    approaches: [
      {
        approach_title: "Split averages",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH scored_exams AS (SELECT student_user_id, exam_id, obtained_marks, ROW_NUMBER() OVER (PARTITION BY student_user_id ORDER BY exam_id ASC) AS rn, COUNT(*) OVER (PARTITION BY student_user_id) AS total_exams FROM exam_results WHERE obtained_marks IS NOT NULL), split_scores AS (SELECT student_user_id, AVG(CASE WHEN rn <= total_exams / 2.0 THEN obtained_marks END) AS first_half_avg, AVG(CASE WHEN rn > total_exams / 2.0 THEN obtained_marks END) AS second_half_avg FROM scored_exams GROUP BY student_user_id) SELECT student_user_id, ROUND(first_half_avg, 2) AS first_half_avg, ROUND(second_half_avg, 2) AS second_half_avg FROM split_scores WHERE second_half_avg > first_half_avg;",
        explanation:
          "## 🧠 Approach\n\nOrder each student's exams, split their exam history into earlier and later halves, then compare the two averages.\n\n## 🔍 Explanation\n\n- `ROW_NUMBER()` gives each student's exams a sequence.\n- `COUNT(*) OVER` gives total exams per student.\n- The first half uses `rn <= total_exams / 2.0`.\n- The second half uses `rn > total_exams / 2.0`.\n- Students are returned only when the later average is greater than the earlier average.",
      },
      {
        approach_title: "FILTER split",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH scored_exams AS (SELECT student_user_id, exam_id, obtained_marks, ROW_NUMBER() OVER (PARTITION BY student_user_id ORDER BY exam_id ASC) AS rn, COUNT(*) OVER (PARTITION BY student_user_id) AS total_exams FROM exam_results WHERE obtained_marks IS NOT NULL), split_scores AS (SELECT student_user_id, AVG(obtained_marks) FILTER (WHERE rn <= total_exams / 2.0) AS first_half_avg, AVG(obtained_marks) FILTER (WHERE rn > total_exams / 2.0) AS second_half_avg FROM scored_exams GROUP BY student_user_id) SELECT student_user_id, ROUND(first_half_avg, 2) AS first_half_avg, ROUND(second_half_avg, 2) AS second_half_avg FROM split_scores WHERE second_half_avg > first_half_avg;",
        explanation:
          "## 🧠 Approach\n\nUse aggregate `FILTER` instead of `CASE` to calculate first-half and second-half averages.\n\n## 🔍 Explanation\n\n- The exam ordering logic is the same as the optimal approach.\n- `FILTER` makes each average condition explicit.\n- This produces the same result while improving readability for conditional aggregates.",
      },
    ],
  },
  {
    code: "EDUCATION_089",
    approaches: [
      {
        approach_title: "FILTER all active",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT program_id FROM student_profiles WHERE program_id IS NOT NULL GROUP BY program_id HAVING COUNT(*) = COUNT(*) FILTER (WHERE enrollment_status = 'active');",
        explanation:
          "## 🧠 Approach\n\nGroup students by program and keep programs where every mapped student is active.\n\n## 🔍 Explanation\n\n- `program_id IS NOT NULL` keeps mapped students only.\n- `COUNT(*)` counts all students in the program.\n- `COUNT(*) FILTER (WHERE enrollment_status = 'active')` counts active students.\n- If both counts are equal, all students in that program are active.",
      },
      {
        approach_title: "BOOL_AND active",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT program_id FROM student_profiles WHERE program_id IS NOT NULL GROUP BY program_id HAVING BOOL_AND(enrollment_status = 'active');",
        explanation:
          "## 🧠 Approach\n\nUse `BOOL_AND` to require every student in the program to be active.\n\n## 🔍 Explanation\n\n- `BOOL_AND(enrollment_status = 'active')` returns true only if all rows in the group satisfy the condition.\n- This is concise PostgreSQL syntax.\n- The count comparison is more explicit for learners.",
      },
      {
        approach_title: "No inactive student",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT sp.program_id FROM student_profiles sp WHERE sp.program_id IS NOT NULL AND NOT EXISTS (SELECT 1 FROM student_profiles x WHERE x.program_id = sp.program_id AND x.enrollment_status <> 'active');",
        explanation:
          "## 🧠 Approach\n\nReturn programs where no mapped student has a non-active status.\n\n## 🔍 Explanation\n\n- The correlated subquery searches for inactive/non-active students in the same program.\n- `NOT EXISTS` keeps programs with no such rows.\n- `DISTINCT` returns each qualifying program once.",
      },
    ],
  },
  {
    code: "EDUCATION_090",
    approaches: [
      {
        approach_title: "Compare averages",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH assignment_avg AS (SELECT student_user_id, AVG(obtained_marks) AS avg_assignment_score FROM assignment_submissions WHERE obtained_marks IS NOT NULL GROUP BY student_user_id), exam_avg AS (SELECT student_user_id, AVG(obtained_marks) AS avg_exam_score FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY student_user_id) SELECT aa.student_user_id, ROUND(aa.avg_assignment_score, 2) AS avg_assignment_score, ROUND(ea.avg_exam_score, 2) AS avg_exam_score FROM assignment_avg aa JOIN exam_avg ea ON aa.student_user_id = ea.student_user_id WHERE aa.avg_assignment_score > ea.avg_exam_score;",
        explanation:
          "## 🧠 Approach\n\nCalculate assignment average and exam average separately per student, then compare the two averages.\n\n## 🔍 Explanation\n\n- `assignment_avg` computes each student's average assignment score.\n- `exam_avg` computes each student's average exam score.\n- The join keeps students who have both assignment and exam averages.\n- The final filter returns students whose assignment average is higher than exam average.",
      },
      {
        approach_title: "Inline averages",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT aa.student_user_id, ROUND(aa.avg_assignment_score, 2) AS avg_assignment_score, ROUND(ea.avg_exam_score, 2) AS avg_exam_score FROM (SELECT student_user_id, AVG(obtained_marks) AS avg_assignment_score FROM assignment_submissions WHERE obtained_marks IS NOT NULL GROUP BY student_user_id) aa JOIN (SELECT student_user_id, AVG(obtained_marks) AS avg_exam_score FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY student_user_id) ea ON aa.student_user_id = ea.student_user_id WHERE aa.avg_assignment_score > ea.avg_exam_score;",
        explanation:
          "## 🧠 Approach\n\nUse derived tables instead of CTEs to calculate and compare assignment/exam averages.\n\n## 🔍 Explanation\n\n- One derived table calculates assignment averages.\n- The other calculates exam averages.\n- The final join and filter are identical to the CTE approach.",
      },
    ],
  },
  {
    code: "EDUCATION_091",
    approaches: [
      {
        approach_title: "ROW_NUMBER top 3",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH ranked_students AS (SELECT user_id, program_id, cgpa, ROW_NUMBER() OVER (PARTITION BY program_id ORDER BY cgpa DESC, user_id ASC) AS rn FROM student_profiles WHERE program_id IS NOT NULL AND cgpa IS NOT NULL) SELECT user_id, program_id, cgpa FROM ranked_students WHERE rn <= 3;",
        explanation:
          "## 🧠 Approach\n\nRank students inside each program by CGPA and keep exactly the top 3 rows per program.\n\n## 🔍 Explanation\n\n- `program_id IS NOT NULL` keeps only students mapped to a program.\n- `cgpa IS NOT NULL` keeps only students with valid CGPA values.\n- `PARTITION BY program_id` restarts ranking for every program.\n- `ORDER BY cgpa DESC, user_id ASC` ranks highest CGPA first and breaks ties by smaller user id.\n- `ROW_NUMBER()` gives every row a unique rank, so `rn <= 3` returns at most three students per program.\n- `DENSE_RANK` is not valid here because it returns top CGPA tiers and can return more than three rows when ties exist.",
      },
    ],
  },
  {
    code: "EDUCATION_092",
    approaches: [
      {
        approach_title: "Monthly collection",
        approach_type: "date_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DATE_TRUNC('month', paid_at) AS collection_month, ROUND(SUM(paid_amount), 2) AS total_collection FROM payments WHERE payment_status = 'successful' AND paid_at IS NOT NULL GROUP BY DATE_TRUNC('month', paid_at);",
        explanation:
          "## 🧠 Approach\n\nFilter successful payments, bucket them by payment month, and sum monthly collections.\n\n## 🔍 Explanation\n\n- `payment_status = 'successful'` keeps only collected payments.\n- `paid_at IS NOT NULL` ensures the payment has a timestamp.\n- `DATE_TRUNC('month', paid_at)` converts each timestamp to its month bucket.\n- `SUM(paid_amount)` calculates total collection for each month.\n- `ROUND(..., 2)` formats collection values.",
      },
      {
        approach_title: "CTE month bucket",
        approach_type: "cte",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH monthly_payments AS (SELECT DATE_TRUNC('month', paid_at) AS collection_month, paid_amount FROM payments WHERE payment_status = 'successful' AND paid_at IS NOT NULL) SELECT collection_month, ROUND(SUM(paid_amount), 2) AS total_collection FROM monthly_payments GROUP BY collection_month;",
        explanation:
          "## 🧠 Approach\n\nCreate monthly payment buckets first, then aggregate collections by month.\n\n## 🔍 Explanation\n\n- The CTE maps each successful payment to a collection month.\n- The outer query groups by that month and sums payment amount.\n- This separates date bucketing from aggregation.",
      },
    ],
  },
  {
    code: "EDUCATION_093",
    approaches: [
      {
        approach_title: "FILTER pass rate",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT e.offering_id, ROUND(100.0 * COUNT(*) FILTER (WHERE e.final_grade_letter IS NOT NULL AND e.final_grade_letter <> 'F') / COUNT(*), 2) AS pass_rate FROM enrollments e WHERE e.enrollment_status = 'completed' GROUP BY e.offering_id HAVING COUNT(*) > 0 ORDER BY pass_rate DESC, e.offering_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate pass percentage among completed enrollments per offering and return the top 5 offerings.\n\n## 🔍 Explanation\n\n- `WHERE enrollment_status = 'completed'` restricts the denominator to completed enrollments.\n- The filtered count includes rows where `final_grade_letter` is present and not `F`.\n- `100.0 * passed / total` calculates percentage as a decimal result.\n- `ROUND(..., 2)` formats pass rate.\n- Ordering returns the highest pass-rate offerings first.",
      },
      {
        approach_title: "SUM CASE rate",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT offering_id, ROUND(100.0 * SUM(CASE WHEN final_grade_letter IS NOT NULL AND final_grade_letter <> 'F' THEN 1 ELSE 0 END) / COUNT(*), 2) AS pass_rate FROM enrollments WHERE enrollment_status = 'completed' GROUP BY offering_id HAVING COUNT(*) > 0 ORDER BY pass_rate DESC, offering_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nUse conditional sums to count passed completed enrollments and divide by total completed enrollments.\n\n## 🔍 Explanation\n\n- Passing rows contribute `1`.\n- Failed or missing-grade rows contribute `0`.\n- Dividing by `COUNT(*)` gives the pass rate percentage.\n- This is portable SQL, while `FILTER` is cleaner in PostgreSQL.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT offering_id, pass_rate FROM (SELECT e.offering_id, ROUND(100.0 * COUNT(*) FILTER (WHERE e.final_grade_letter IS NOT NULL AND e.final_grade_letter <> 'F') / COUNT(*), 2) AS pass_rate FROM enrollments e WHERE e.enrollment_status = 'completed' GROUP BY e.offering_id HAVING COUNT(*) > 0) rates ORDER BY pass_rate DESC, offering_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate pass rate first, then sort and limit outside.\n\n## 🔍 Explanation\n\n- The inner query computes pass percentage per offering.\n- The outer query ranks offerings by pass rate and returns the top five.\n- This separates metric calculation from top-N selection.",
      },
    ],
  },
  {
    code: "EDUCATION_094",
    approaches: [
      {
        approach_title: "LAG attendance",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH attendance_history AS (SELECT student_user_id, offering_id, attendance_percentage, completion_date, LAG(attendance_percentage) OVER (PARTITION BY student_user_id ORDER BY completion_date ASC NULLS LAST, offering_id ASC) AS previous_attendance FROM enrollments WHERE attendance_percentage IS NOT NULL) SELECT student_user_id, offering_id, attendance_percentage, previous_attendance FROM attendance_history WHERE previous_attendance IS NOT NULL AND attendance_percentage < previous_attendance;",
        explanation:
          "## 🧠 Approach\n\nUse `LAG` to compare each student's attendance with their previous completed-course attendance.\n\n## 🔍 Explanation\n\n- `PARTITION BY student_user_id` compares attendance history separately per student.\n- `ORDER BY completion_date ASC NULLS LAST, offering_id ASC` defines the course completion sequence.\n- `LAG(attendance_percentage)` gets the previous attendance percentage.\n- The final filter keeps rows where current attendance is lower than previous attendance.",
      },
      {
        approach_title: "Inline LAG",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT student_user_id, offering_id, attendance_percentage, previous_attendance FROM (SELECT student_user_id, offering_id, attendance_percentage, LAG(attendance_percentage) OVER (PARTITION BY student_user_id ORDER BY completion_date ASC NULLS LAST, offering_id ASC) AS previous_attendance FROM enrollments WHERE attendance_percentage IS NOT NULL) attendance_history WHERE previous_attendance IS NOT NULL AND attendance_percentage < previous_attendance;",
        explanation:
          "## 🧠 Approach\n\nUse an inline derived table instead of a named CTE for the attendance comparison.\n\n## 🔍 Explanation\n\n- The inner query calculates previous attendance per student.\n- The outer query filters attendance drops.\n- It produces the same result as the CTE version, but the CTE version is easier to read.",
      },
    ],
  },
  {
    code: "EDUCATION_095",
    approaches: [
      {
        approach_title: "COUNT DISTINCT top",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT teacher_user_id, COUNT(DISTINCT offering_id) AS total_offerings FROM course_teachers GROUP BY teacher_user_id ORDER BY total_offerings DESC, teacher_user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount distinct course offerings handled by each teacher and return the top 5 teachers.\n\n## 🔍 Explanation\n\n- `COUNT(DISTINCT offering_id)` avoids double-counting the same teacher-offering mapping if duplicates exist.\n- `GROUP BY teacher_user_id` creates one workload total per teacher.\n- Ordering ranks highest workload first and breaks ties by teacher id.\n- `LIMIT 5` returns the top five teachers.",
      },
      {
        approach_title: "Pre-distinct offerings",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT teacher_user_id, COUNT(*) AS total_offerings FROM (SELECT DISTINCT teacher_user_id, offering_id FROM course_teachers) teacher_offerings GROUP BY teacher_user_id ORDER BY total_offerings DESC, teacher_user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nDeduplicate teacher-offering pairs first, then count offerings per teacher.\n\n## 🔍 Explanation\n\n- The inner query returns one row per unique teacher/offering pair.\n- The outer query counts those unique pairs by teacher.\n- This is equivalent to `COUNT(DISTINCT offering_id)` and makes deduplication explicit.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT teacher_user_id, total_offerings FROM (SELECT teacher_user_id, total_offerings, ROW_NUMBER() OVER (ORDER BY total_offerings DESC, teacher_user_id ASC) AS rn FROM (SELECT teacher_user_id, COUNT(DISTINCT offering_id) AS total_offerings FROM course_teachers GROUP BY teacher_user_id) counts) ranked WHERE rn <= 5 ORDER BY total_offerings DESC, teacher_user_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank teachers by workload using `ROW_NUMBER` and keep the top 5.\n\n## 🔍 Explanation\n\n- Distinct offering counts are calculated first.\n- `ROW_NUMBER()` ranks teachers by workload descending and teacher id ascending.\n- `rn <= 5` keeps the top five rows.\n- Final ordering matches the configured comparator rule.",
      },
    ],
  },
  {
    code: "EDUCATION_096",
    approaches: [
      {
        approach_title: "LAG failure",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH exam_failures AS (SELECT student_user_id, exam_id, grade_letter, LAG(grade_letter) OVER (PARTITION BY student_user_id ORDER BY exam_id ASC) AS previous_grade FROM exam_results) SELECT DISTINCT student_user_id FROM exam_failures WHERE grade_letter = 'F' AND previous_grade = 'F';",
        explanation:
          "## 🧠 Approach\n\nUse `LAG` to compare each exam grade with the student's previous exam grade.\n\n## 🔍 Explanation\n\n- `PARTITION BY student_user_id` checks consecutive exams separately for each student.\n- `ORDER BY exam_id ASC` defines exam sequence.\n- `previous_grade` contains the immediately previous grade.\n- If both current `grade_letter` and previous grade are `F`, the student had consecutive failures.\n- `DISTINCT` returns each qualifying student once.",
      },
      {
        approach_title: "Self join adjacent",
        approach_type: "join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT curr.student_user_id FROM exam_results curr JOIN exam_results prev ON prev.student_user_id = curr.student_user_id AND prev.exam_id < curr.exam_id WHERE curr.grade_letter = 'F' AND prev.grade_letter = 'F';",
        explanation:
          "## 🧠 Approach\n\nJoin failed exams to earlier failed exams for the same student.\n\n## 🔍 Explanation\n\n- `curr` is a failed exam row.\n- `prev` is an earlier failed exam row for the same student.\n- This detects repeated failures, but not strictly immediate consecutive failures unless exam ids are additionally constrained.\n- The `LAG` approach matches the expected consecutive logic better.",
      },
    ],
  },
  {
    code: "EDUCATION_097",
    approaches: [
      {
        approach_title: "Revenue per student",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH program_revenue AS (SELECT sp.program_id, SUM(p.paid_amount) AS total_revenue, COUNT(DISTINCT sp.user_id) AS total_students FROM payments p JOIN fee_invoices fi ON p.invoice_id = fi.id JOIN student_profiles sp ON fi.student_user_id = sp.user_id WHERE p.payment_status = 'successful' GROUP BY sp.program_id) SELECT program_id, ROUND(total_revenue / NULLIF(total_students, 0), 2) AS revenue_per_student FROM program_revenue ORDER BY revenue_per_student DESC, program_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate successful payment revenue and distinct students per program, then divide revenue by student count.\n\n## 🔍 Explanation\n\n- Payments join to invoices to identify the billed student.\n- Student profiles provide the student's program.\n- `SUM(p.paid_amount)` calculates successful revenue per program.\n- `COUNT(DISTINCT sp.user_id)` counts students contributing to the program revenue group.\n- `NULLIF(total_students, 0)` prevents division by zero.\n- Ordering returns the top five programs by revenue per student.",
      },
      {
        approach_title: "Inline revenue",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT program_id, ROUND(total_revenue / NULLIF(total_students, 0), 2) AS revenue_per_student FROM (SELECT sp.program_id, SUM(p.paid_amount) AS total_revenue, COUNT(DISTINCT sp.user_id) AS total_students FROM payments p JOIN fee_invoices fi ON p.invoice_id = fi.id JOIN student_profiles sp ON fi.student_user_id = sp.user_id WHERE p.payment_status = 'successful' GROUP BY sp.program_id) program_revenue ORDER BY revenue_per_student DESC, program_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nUse an inline derived table instead of a CTE for the program revenue calculation.\n\n## 🔍 Explanation\n\n- The derived table computes total revenue and student count per program.\n- The outer query calculates revenue per student and ranks programs.\n- This is equivalent to the CTE approach.",
      },
    ],
  },
  {
    code: "EDUCATION_098",
    approaches: [
      {
        approach_title: "GROUP view time",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, SUM(total_view_seconds) AS total_view_time FROM material_views GROUP BY user_id ORDER BY total_view_time DESC, user_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nSum learning-material view time per user and return the top 10 most engaged users.\n\n## 🔍 Explanation\n\n- `GROUP BY user_id` creates one row per user.\n- `SUM(total_view_seconds)` calculates total material view time.\n- Sorting by total view time descending ranks most engaged students first.\n- `user_id ASC` breaks ties consistently.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, total_view_time FROM (SELECT user_id, SUM(total_view_seconds) AS total_view_time FROM material_views GROUP BY user_id) view_totals ORDER BY total_view_time DESC, user_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate total view time first, then sort and limit outside.\n\n## 🔍 Explanation\n\n- The inner query calculates total material view time per user.\n- The outer query ranks those totals and returns the top ten.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT user_id, total_view_time FROM (SELECT user_id, total_view_time, ROW_NUMBER() OVER (ORDER BY total_view_time DESC, user_id ASC) AS rn FROM (SELECT user_id, SUM(total_view_seconds) AS total_view_time FROM material_views GROUP BY user_id) view_totals) ranked WHERE rn <= 10 ORDER BY total_view_time DESC, user_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank users by total view time and keep the top 10.\n\n## 🔍 Explanation\n\n- View time is aggregated per user first.\n- `ROW_NUMBER()` ranks users by total view time descending and user id ascending.\n- `rn <= 10` keeps the top ten rows.\n- Final ordering follows the configured comparator rule.",
      },
    ],
  },
  {
    code: "EDUCATION_099",
    approaches: [
      {
        approach_title: "JOIN top department",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT tp.department_id, ROUND(AVG(sf.rating_value), 2) AS avg_feedback_score FROM student_feedback sf JOIN teacher_profiles tp ON sf.teacher_user_id = tp.user_id WHERE tp.department_id IS NOT NULL GROUP BY tp.department_id ORDER BY avg_feedback_score DESC, tp.department_id ASC LIMIT 1;",
        explanation:
          "## 🧠 Approach\n\nJoin feedback to teacher profiles, calculate average feedback score per department, and return the best department.\n\n## 🔍 Explanation\n\n- `student_feedback` contains teacher feedback scores.\n- `teacher_profiles` maps teachers to departments.\n- `department_id IS NOT NULL` keeps only mapped teachers.\n- `AVG(sf.rating_value)` calculates the department feedback average.\n- `ORDER BY avg_feedback_score DESC, department_id ASC LIMIT 1` returns the department with the highest average, using department id as tie-breaker.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT department_id, avg_feedback_score FROM (SELECT tp.department_id, ROUND(AVG(sf.rating_value), 2) AS avg_feedback_score FROM student_feedback sf JOIN teacher_profiles tp ON sf.teacher_user_id = tp.user_id WHERE tp.department_id IS NOT NULL GROUP BY tp.department_id) dept_scores ORDER BY avg_feedback_score DESC, department_id ASC LIMIT 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate department feedback averages first, then sort and select the top department.\n\n## 🔍 Explanation\n\n- The inner query computes average score by department.\n- The outer query applies sorting and `LIMIT 1`.\n- This separates metric calculation from top selection.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT department_id, avg_feedback_score FROM (SELECT department_id, avg_feedback_score, ROW_NUMBER() OVER (ORDER BY avg_feedback_score DESC, department_id ASC) AS rn FROM (SELECT tp.department_id, ROUND(AVG(sf.rating_value), 2) AS avg_feedback_score FROM student_feedback sf JOIN teacher_profiles tp ON sf.teacher_user_id = tp.user_id WHERE tp.department_id IS NOT NULL GROUP BY tp.department_id) dept_scores) ranked WHERE rn = 1 ORDER BY avg_feedback_score DESC, department_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank departments by average feedback score and keep rank 1.\n\n## 🔍 Explanation\n\n- Department averages are calculated first.\n- `ROW_NUMBER()` ranks departments by average score descending and department id ascending.\n- `rn = 1` returns the single best department.",
      },
    ],
  },
  {
    code: "EDUCATION_100",
    approaches: [
      {
        approach_title: "Variance compare",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH student_variance AS (SELECT sp.program_id, e.student_user_id, VARIANCE(e.attendance_percentage) AS attendance_variance FROM enrollments e JOIN student_profiles sp ON e.student_user_id = sp.user_id WHERE e.attendance_percentage IS NOT NULL GROUP BY sp.program_id, e.student_user_id), program_avg_variance AS (SELECT program_id, AVG(attendance_variance) AS avg_variance FROM student_variance GROUP BY program_id) SELECT sv.student_user_id, sv.program_id, ROUND(sv.attendance_variance, 2) AS attendance_variance FROM student_variance sv JOIN program_avg_variance pav ON sv.program_id = pav.program_id WHERE sv.attendance_variance < pav.avg_variance;",
        explanation:
          "## 🧠 Approach\n\nCalculate each student's attendance variance, calculate average variance per program, then keep students below their program average variance.\n\n## 🔍 Explanation\n\n- `student_variance` measures how much each student's attendance percentage varies across enrollments.\n- `program_avg_variance` calculates the average student variance inside each program.\n- Lower variance means more consistent attendance.\n- The final query returns students whose variance is below the program's average variance.",
      },
    ],
  },
];
