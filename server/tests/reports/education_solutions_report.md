# Solutions Evaluation Report (education)

**Summary:**
- Total Approaches: 218
- Passed: 218
- Failed: 0

## Detailed Results
### ✅ PASS : EDUCATION_001 - COUNT all
```sql
SELECT COUNT(*) AS total_institutions FROM institutions;
```

### ✅ PASS : EDUCATION_001 - COUNT id
```sql
SELECT COUNT(id) AS total_institutions FROM institutions;
```

### ✅ PASS : EDUCATION_002 - Filter active
```sql
SELECT COUNT(*) AS active_campuses FROM campuses WHERE is_active = true;
```

### ✅ PASS : EDUCATION_002 - CASE count
```sql
SELECT COUNT(CASE WHEN is_active = true THEN 1 END) AS active_campuses FROM campuses;
```

### ✅ PASS : EDUCATION_003 - Filter active terms
```sql
SELECT term_name, academic_year FROM academic_terms WHERE status = 'active';
```

### ✅ PASS : EDUCATION_003 - IN filter
```sql
SELECT term_name, academic_year FROM academic_terms WHERE status IN ('active');
```

### ✅ PASS : EDUCATION_004 - Filter active students
```sql
SELECT user_id, admission_number, enrollment_status FROM student_profiles WHERE enrollment_status = 'active';
```

### ✅ PASS : EDUCATION_004 - CASE filter
```sql
SELECT user_id, admission_number, enrollment_status FROM student_profiles WHERE CASE WHEN enrollment_status = 'active' THEN true ELSE false END;
```

### ✅ PASS : EDUCATION_005 - ORDER LIMIT
```sql
SELECT user_id, employee_code, hire_date FROM teacher_profiles WHERE hire_date IS NOT NULL ORDER BY hire_date DESC, user_id ASC LIMIT 10;
```

### ✅ PASS : EDUCATION_005 - ROW_NUMBER
```sql
SELECT user_id, employee_code, hire_date FROM (SELECT user_id, employee_code, hire_date, ROW_NUMBER() OVER (ORDER BY hire_date DESC, user_id ASC) AS rn FROM teacher_profiles WHERE hire_date IS NOT NULL) t WHERE rn <= 10;
```

### ✅ PASS : EDUCATION_006 - Filter mandatory
```sql
SELECT id, course_title, credit_value FROM courses WHERE is_mandatory = true AND is_active = true;
```

### ✅ PASS : EDUCATION_006 - CASE filter
```sql
SELECT id, course_title, credit_value FROM courses WHERE (CASE WHEN is_mandatory = true AND is_active = true THEN true ELSE false END);
```

### ✅ PASS : EDUCATION_007 - Capacity filter
```sql
SELECT id, campus_id, room_name, seating_capacity FROM classrooms WHERE seating_capacity >= 100;
```

### ✅ PASS : EDUCATION_007 - CASE filter
```sql
SELECT id, campus_id, room_name, seating_capacity FROM classrooms WHERE CASE WHEN seating_capacity >= 100 THEN true ELSE false END;
```

### ✅ PASS : EDUCATION_008 - ORDER ascending
```sql
SELECT id, offering_id, assignment_title, due_at FROM assignments ORDER BY due_at ASC, id ASC;
```

### ✅ PASS : EDUCATION_008 - ROW_NUMBER sort
```sql
SELECT id, offering_id, assignment_title, due_at FROM (SELECT id, offering_id, assignment_title, due_at, ROW_NUMBER() OVER (ORDER BY due_at ASC, id ASC) AS rn FROM assignments) t ORDER BY rn;
```

### ✅ PASS : EDUCATION_009 - Filter successful
```sql
SELECT id, invoice_id, paid_amount, paid_at FROM payments WHERE payment_status = 'successful';
```

### ✅ PASS : EDUCATION_009 - IN filter
```sql
SELECT id, invoice_id, paid_amount, paid_at FROM payments WHERE payment_status IN ('successful');
```

### ✅ PASS : EDUCATION_010 - Filter open tickets
```sql
SELECT id, institution_id, user_id, issue_type, priority FROM support_tickets WHERE ticket_status = 'open';
```

### ✅ PASS : EDUCATION_010 - CASE filter
```sql
SELECT id, institution_id, user_id, issue_type, priority FROM support_tickets WHERE CASE WHEN ticket_status = 'open' THEN true ELSE false END;
```

### ✅ PASS : EDUCATION_011 - GROUP roles
```sql
SELECT user_role, COUNT(*) AS total_users FROM users GROUP BY user_role;
```

### ✅ PASS : EDUCATION_011 - COUNT id
```sql
SELECT user_role, COUNT(id) AS total_users FROM users GROUP BY user_role;
```

### ✅ PASS : EDUCATION_011 - Window count
```sql
SELECT DISTINCT user_role, total_users FROM (SELECT user_role, COUNT(*) OVER (PARTITION BY user_role) AS total_users FROM users) x;
```

### ✅ PASS : EDUCATION_012 - GROUP levels
```sql
SELECT program_level, COUNT(*) AS total_programs FROM programs GROUP BY program_level;
```

### ✅ PASS : EDUCATION_012 - COUNT id
```sql
SELECT program_level, COUNT(id) AS total_programs FROM programs GROUP BY program_level;
```

### ✅ PASS : EDUCATION_012 - Window count
```sql
SELECT DISTINCT program_level, total_programs FROM (SELECT program_level, COUNT(*) OVER (PARTITION BY program_level) AS total_programs FROM programs) x;
```

### ✅ PASS : EDUCATION_013 - GROUP room AVG
```sql
SELECT room_type, ROUND(AVG(seating_capacity), 2) AS avg_capacity FROM classrooms GROUP BY room_type;
```

### ✅ PASS : EDUCATION_013 - Manual average
```sql
SELECT room_type, ROUND(SUM(seating_capacity)::numeric / NULLIF(COUNT(seating_capacity), 0), 2) AS avg_capacity FROM classrooms GROUP BY room_type;
```

### ✅ PASS : EDUCATION_013 - Window AVG
```sql
SELECT DISTINCT room_type, avg_capacity FROM (SELECT room_type, ROUND(AVG(seating_capacity) OVER (PARTITION BY room_type), 2) AS avg_capacity FROM classrooms) x;
```

### ✅ PASS : EDUCATION_014 - GROUP status
```sql
SELECT enrollment_status, COUNT(*) AS total_students FROM student_profiles GROUP BY enrollment_status;
```

### ✅ PASS : EDUCATION_014 - COUNT user id
```sql
SELECT enrollment_status, COUNT(user_id) AS total_students FROM student_profiles GROUP BY enrollment_status;
```

### ✅ PASS : EDUCATION_014 - Window count
```sql
SELECT DISTINCT enrollment_status, total_students FROM (SELECT enrollment_status, COUNT(*) OVER (PARTITION BY enrollment_status) AS total_students FROM student_profiles) x;
```

### ✅ PASS : EDUCATION_015 - GROUP assignment type
```sql
SELECT assignment_type, COUNT(*) AS total_assignments FROM assignments GROUP BY assignment_type;
```

### ✅ PASS : EDUCATION_015 - COUNT id
```sql
SELECT assignment_type, COUNT(id) AS total_assignments FROM assignments GROUP BY assignment_type;
```

### ✅ PASS : EDUCATION_015 - Window count
```sql
SELECT DISTINCT assignment_type, total_assignments FROM (SELECT assignment_type, COUNT(*) OVER (PARTITION BY assignment_type) AS total_assignments FROM assignments) x;
```

### ✅ PASS : EDUCATION_016 - GROUP rating
```sql
SELECT employment_type, ROUND(AVG(rating_score), 2) AS avg_rating FROM teacher_profiles WHERE rating_score IS NOT NULL GROUP BY employment_type;
```

### ✅ PASS : EDUCATION_016 - Manual average
```sql
SELECT employment_type, ROUND(SUM(rating_score) / NULLIF(COUNT(rating_score), 0), 2) AS avg_rating FROM teacher_profiles WHERE rating_score IS NOT NULL GROUP BY employment_type;
```

### ✅ PASS : EDUCATION_016 - Window AVG
```sql
SELECT DISTINCT employment_type, avg_rating FROM (SELECT employment_type, ROUND(AVG(rating_score) OVER (PARTITION BY employment_type), 2) AS avg_rating FROM teacher_profiles WHERE rating_score IS NOT NULL) x;
```

### ✅ PASS : EDUCATION_017 - GROUP fee category
```sql
SELECT fee_category, COUNT(*) AS total_fee_plans FROM fee_plans GROUP BY fee_category;
```

### ✅ PASS : EDUCATION_017 - COUNT id
```sql
SELECT fee_category, COUNT(id) AS total_fee_plans FROM fee_plans GROUP BY fee_category;
```

### ✅ PASS : EDUCATION_017 - Window count
```sql
SELECT DISTINCT fee_category, total_fee_plans FROM (SELECT fee_category, COUNT(*) OVER (PARTITION BY fee_category) AS total_fee_plans FROM fee_plans) x;
```

### ✅ PASS : EDUCATION_018 - Successful method sum
```sql
SELECT payment_method, ROUND(SUM(paid_amount), 2) AS total_paid_amount FROM payments WHERE payment_status = 'successful' GROUP BY payment_method;
```

### ✅ PASS : EDUCATION_018 - FILTER sum
```sql
SELECT payment_method, ROUND(SUM(paid_amount) FILTER (WHERE payment_status = 'successful'), 2) AS total_paid_amount FROM payments GROUP BY payment_method HAVING SUM(paid_amount) FILTER (WHERE payment_status = 'successful') IS NOT NULL;
```

### ✅ PASS : EDUCATION_018 - SUM CASE
```sql
SELECT payment_method, ROUND(SUM(CASE WHEN payment_status = 'successful' THEN paid_amount ELSE 0 END), 2) AS total_paid_amount FROM payments GROUP BY payment_method HAVING SUM(CASE WHEN payment_status = 'successful' THEN paid_amount ELSE 0 END) > 0;
```

### ✅ PASS : EDUCATION_019 - GROUP priority
```sql
SELECT priority, COUNT(*) AS total_tickets FROM support_tickets GROUP BY priority;
```

### ✅ PASS : EDUCATION_019 - COUNT id
```sql
SELECT priority, COUNT(id) AS total_tickets FROM support_tickets GROUP BY priority;
```

### ✅ PASS : EDUCATION_019 - Window count
```sql
SELECT DISTINCT priority, total_tickets FROM (SELECT priority, COUNT(*) OVER (PARTITION BY priority) AS total_tickets FROM support_tickets) x;
```

### ✅ PASS : EDUCATION_020 - AVG graded marks
```sql
SELECT ROUND(AVG(obtained_marks), 2) AS avg_obtained_marks FROM assignment_submissions WHERE obtained_marks IS NOT NULL;
```

### ✅ PASS : EDUCATION_020 - Manual average
```sql
SELECT ROUND(SUM(obtained_marks) / NULLIF(COUNT(obtained_marks), 0), 2) AS avg_obtained_marks FROM assignment_submissions WHERE obtained_marks IS NOT NULL;
```

### ✅ PASS : EDUCATION_021 - Subquery average
```sql
SELECT user_id, admission_number, cgpa FROM student_profiles WHERE cgpa > (SELECT AVG(cgpa) FROM student_profiles WHERE cgpa IS NOT NULL);
```

### ✅ PASS : EDUCATION_021 - CTE average
```sql
WITH avg_cgpa AS (SELECT AVG(cgpa) AS overall_avg FROM student_profiles WHERE cgpa IS NOT NULL) SELECT sp.user_id, sp.admission_number, sp.cgpa FROM student_profiles sp CROSS JOIN avg_cgpa a WHERE sp.cgpa > a.overall_avg;
```

### ✅ PASS : EDUCATION_022 - Credit filter
```sql
SELECT id, course_title, credit_value FROM courses WHERE credit_value > 4;
```

### ✅ PASS : EDUCATION_023 - Boolean filter
```sql
SELECT id, assignment_title, due_at, max_late_days FROM assignments WHERE allow_late_submission = true;
```

### ✅ PASS : EDUCATION_023 - Boolean shorthand
```sql
SELECT id, assignment_title, due_at, max_late_days FROM assignments WHERE allow_late_submission;
```

### ✅ PASS : EDUCATION_024 - Future date filter
```sql
SELECT id, exam_name, exam_date, exam_type FROM exams WHERE exam_date > CURRENT_DATE;
```

### ✅ PASS : EDUCATION_025 - Filtered count
```sql
SELECT COUNT(*) AS published_results FROM exam_results WHERE result_status = 'published';
```

### ✅ PASS : EDUCATION_025 - Conditional count
```sql
SELECT COUNT(*) FILTER (WHERE result_status = 'published') AS published_results FROM exam_results;
```

### ✅ PASS : EDUCATION_026 - Completed filter
```sql
SELECT material_id, user_id, progress_percent FROM material_views WHERE completed = true;
```

### ✅ PASS : EDUCATION_026 - Boolean shorthand
```sql
SELECT material_id, user_id, progress_percent FROM material_views WHERE completed;
```

### ✅ PASS : EDUCATION_027 - Pinned filter
```sql
SELECT id, offering_id, thread_title, created_at FROM discussion_threads WHERE is_pinned = true;
```

### ✅ PASS : EDUCATION_027 - Boolean shorthand
```sql
SELECT id, offering_id, thread_title, created_at FROM discussion_threads WHERE is_pinned;
```

### ✅ PASS : EDUCATION_028 - Active filter
```sql
SELECT id, scholarship_name, scholarship_type, amount_value FROM scholarships WHERE is_active = true;
```

### ✅ PASS : EDUCATION_028 - Boolean shorthand
```sql
SELECT id, scholarship_name, scholarship_type, amount_value FROM scholarships WHERE is_active;
```

### ✅ PASS : EDUCATION_029 - Overdue filter
```sql
SELECT id, student_user_id, invoice_number, total_amount, due_date FROM fee_invoices WHERE invoice_status = 'overdue';
```

### ✅ PASS : EDUCATION_030 - ORDER BY LIMIT
```sql
SELECT id, user_id, event_name, event_category, event_time FROM app_events ORDER BY event_time DESC, id ASC LIMIT 20;
```

### ✅ PASS : EDUCATION_030 - Window rank
```sql
SELECT id, user_id, event_name, event_category, event_time FROM (SELECT id, user_id, event_name, event_category, event_time, ROW_NUMBER() OVER (ORDER BY event_time DESC, id ASC) AS rn FROM app_events) ranked_events WHERE rn <= 20 ORDER BY event_time DESC, id ASC;
```

### ✅ PASS : EDUCATION_031 - GROUP enrolled
```sql
SELECT offering_id, COUNT(*) AS enrolled_students FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY offering_id;
```

### ✅ PASS : EDUCATION_031 - FILTER count
```sql
SELECT offering_id, COUNT(*) FILTER (WHERE enrollment_status = 'enrolled') AS enrolled_students FROM enrollments GROUP BY offering_id HAVING COUNT(*) FILTER (WHERE enrollment_status = 'enrolled') > 0;
```

### ✅ PASS : EDUCATION_032 - AVG attendance
```sql
SELECT offering_id, ROUND(AVG(attendance_percentage), 2) AS avg_attendance FROM enrollments WHERE attendance_percentage IS NOT NULL GROUP BY offering_id;
```

### ✅ PASS : EDUCATION_032 - Manual average
```sql
SELECT offering_id, ROUND(SUM(attendance_percentage) / COUNT(attendance_percentage), 2) AS avg_attendance FROM enrollments WHERE attendance_percentage IS NOT NULL GROUP BY offering_id;
```

### ✅ PASS : EDUCATION_033 - GROUP exam type
```sql
SELECT exam_type, COUNT(*) AS total_exams FROM exams GROUP BY exam_type;
```

### ✅ PASS : EDUCATION_034 - AVG exam score
```sql
SELECT exam_id, ROUND(AVG(obtained_marks), 2) AS avg_score FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY exam_id;
```

### ✅ PASS : EDUCATION_034 - Manual average
```sql
SELECT exam_id, ROUND(SUM(obtained_marks) / COUNT(obtained_marks), 2) AS avg_score FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY exam_id;
```

### ✅ PASS : EDUCATION_035 - GROUP issue type
```sql
SELECT issue_type, COUNT(*) AS total_tickets FROM support_tickets GROUP BY issue_type;
```

### ✅ PASS : EDUCATION_036 - Successful AVG
```sql
SELECT ROUND(AVG(paid_amount), 2) AS avg_paid_amount FROM payments WHERE payment_status = 'successful';
```

### ✅ PASS : EDUCATION_036 - FILTER average
```sql
SELECT ROUND(AVG(paid_amount) FILTER (WHERE payment_status = 'successful'), 2) AS avg_paid_amount FROM payments;
```

### ✅ PASS : EDUCATION_037 - GROUP status
```sql
SELECT course_status, COUNT(*) AS total_offerings FROM course_offerings GROUP BY course_status;
```

### ✅ PASS : EDUCATION_038 - GROUP department
```sql
SELECT department_id, COUNT(*) AS total_teachers FROM teacher_profiles WHERE department_id IS NOT NULL GROUP BY department_id;
```

### ✅ PASS : EDUCATION_039 - GROUP material type
```sql
SELECT material_type, COUNT(*) AS total_materials FROM learning_materials GROUP BY material_type;
```

### ✅ PASS : EDUCATION_040 - AVG feedback
```sql
SELECT feedback_category, ROUND(AVG(rating_value), 2) AS avg_rating FROM student_feedback GROUP BY feedback_category;
```

### ✅ PASS : EDUCATION_040 - Manual average
```sql
SELECT feedback_category, ROUND(SUM(rating_value)::numeric / NULLIF(COUNT(rating_value), 0), 2) AS avg_rating FROM student_feedback GROUP BY feedback_category;
```

### ✅ PASS : EDUCATION_041 - GROUP HAVING
```sql
SELECT student_user_id, COUNT(*) AS enrollment_count FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY student_user_id HAVING COUNT(*) > 1;
```

### ✅ PASS : EDUCATION_041 - Subquery filter
```sql
SELECT student_user_id, enrollment_count FROM (SELECT student_user_id, COUNT(*) AS enrollment_count FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY student_user_id) student_enrollments WHERE enrollment_count > 1;
```

### ✅ PASS : EDUCATION_041 - Window count
```sql
SELECT DISTINCT student_user_id, enrollment_count FROM (SELECT student_user_id, COUNT(*) OVER (PARTITION BY student_user_id) AS enrollment_count FROM enrollments WHERE enrollment_status = 'enrolled') x WHERE enrollment_count > 1;
```

### ✅ PASS : EDUCATION_042 - GROUP HAVING
```sql
SELECT teacher_user_id, COUNT(*) AS course_count FROM course_teachers GROUP BY teacher_user_id HAVING COUNT(*) > 1;
```

### ✅ PASS : EDUCATION_042 - Subquery filter
```sql
SELECT teacher_user_id, course_count FROM (SELECT teacher_user_id, COUNT(*) AS course_count FROM course_teachers GROUP BY teacher_user_id) teacher_courses WHERE course_count > 1;
```

### ✅ PASS : EDUCATION_042 - Window count
```sql
SELECT DISTINCT teacher_user_id, course_count FROM (SELECT teacher_user_id, COUNT(*) OVER (PARTITION BY teacher_user_id) AS course_count FROM course_teachers) x WHERE course_count > 1;
```

### ✅ PASS : EDUCATION_043 - GROUP top 5
```sql
SELECT offering_id, COUNT(*) AS student_count FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY offering_id ORDER BY student_count DESC, offering_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_043 - Subquery top
```sql
SELECT offering_id, student_count FROM (SELECT offering_id, COUNT(*) AS student_count FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY offering_id) offering_counts ORDER BY student_count DESC, offering_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_043 - ROW_NUMBER top
```sql
SELECT offering_id, student_count FROM (SELECT offering_id, student_count, ROW_NUMBER() OVER (ORDER BY student_count DESC, offering_id ASC) AS rn FROM (SELECT offering_id, COUNT(*) AS student_count FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY offering_id) counts) ranked WHERE rn <= 5 ORDER BY student_count DESC, offering_id ASC;
```

### ✅ PASS : EDUCATION_044 - ORDER LIMIT
```sql
SELECT user_id, admission_number, cgpa FROM student_profiles WHERE cgpa IS NOT NULL ORDER BY cgpa DESC, user_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_044 - ROW_NUMBER top
```sql
SELECT user_id, admission_number, cgpa FROM (SELECT user_id, admission_number, cgpa, ROW_NUMBER() OVER (ORDER BY cgpa DESC, user_id ASC) AS rn FROM student_profiles WHERE cgpa IS NOT NULL) ranked WHERE rn <= 5 ORDER BY cgpa DESC, user_id ASC;
```

### ✅ PASS : EDUCATION_045 - LEFT anti join
```sql
SELECT co.id FROM course_offerings co LEFT JOIN enrollments e ON e.offering_id = co.id WHERE e.id IS NULL;
```

### ✅ PASS : EDUCATION_045 - NOT EXISTS
```sql
SELECT co.id FROM course_offerings co WHERE NOT EXISTS (SELECT 1 FROM enrollments e WHERE e.offering_id = co.id);
```

### ✅ PASS : EDUCATION_045 - NOT IN
```sql
SELECT id FROM course_offerings WHERE id NOT IN (SELECT offering_id FROM enrollments WHERE offering_id IS NOT NULL);
```

### ✅ PASS : EDUCATION_046 - LEFT anti join
```sql
SELECT sp.user_id FROM student_profiles sp LEFT JOIN assignment_submissions s ON s.student_user_id = sp.user_id WHERE s.id IS NULL;
```

### ✅ PASS : EDUCATION_046 - NOT EXISTS
```sql
SELECT sp.user_id FROM student_profiles sp WHERE NOT EXISTS (SELECT 1 FROM assignment_submissions s WHERE s.student_user_id = sp.user_id);
```

### ✅ PASS : EDUCATION_046 - NOT IN
```sql
SELECT user_id FROM student_profiles WHERE user_id NOT IN (SELECT student_user_id FROM assignment_submissions WHERE student_user_id IS NOT NULL);
```

### ✅ PASS : EDUCATION_047 - LEFT anti join
```sql
SELECT a.id FROM assignments a LEFT JOIN assignment_submissions s ON s.assignment_id = a.id WHERE s.id IS NULL;
```

### ✅ PASS : EDUCATION_047 - NOT EXISTS
```sql
SELECT a.id FROM assignments a WHERE NOT EXISTS (SELECT 1 FROM assignment_submissions s WHERE s.assignment_id = a.id);
```

### ✅ PASS : EDUCATION_047 - NOT IN
```sql
SELECT id FROM assignments WHERE id NOT IN (SELECT assignment_id FROM assignment_submissions WHERE assignment_id IS NOT NULL);
```

### ✅ PASS : EDUCATION_048 - DISTINCT failed
```sql
SELECT DISTINCT student_user_id FROM exam_results WHERE result_status = 'failed';
```

### ✅ PASS : EDUCATION_048 - GROUP BY student
```sql
SELECT student_user_id FROM exam_results WHERE result_status = 'failed' GROUP BY student_user_id;
```

### ✅ PASS : EDUCATION_049 - GROUP HAVING AVG
```sql
SELECT exam_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY exam_id HAVING AVG(obtained_marks) > 75;
```

### ✅ PASS : EDUCATION_049 - Subquery filter
```sql
SELECT exam_id, avg_marks FROM (SELECT exam_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY exam_id) exam_averages WHERE avg_marks > 75;
```

### ✅ PASS : EDUCATION_049 - Window average
```sql
SELECT DISTINCT exam_id, avg_marks FROM (SELECT exam_id, AVG(obtained_marks) OVER (PARTITION BY exam_id) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL) x WHERE avg_marks > 75;
```

### ✅ PASS : EDUCATION_050 - GROUP top 5
```sql
SELECT exam_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY exam_id ORDER BY avg_marks DESC, exam_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_050 - Subquery top
```sql
SELECT exam_id, avg_marks FROM (SELECT exam_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY exam_id) exam_averages ORDER BY avg_marks DESC, exam_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_050 - ROW_NUMBER top
```sql
SELECT exam_id, avg_marks FROM (SELECT exam_id, avg_marks, ROW_NUMBER() OVER (ORDER BY avg_marks DESC, exam_id ASC) AS rn FROM (SELECT exam_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY exam_id) exam_averages) ranked WHERE rn <= 5 ORDER BY avg_marks DESC, exam_id ASC;
```

### ✅ PASS : EDUCATION_051 - RANK by CGPA
```sql
SELECT user_id, cgpa, RANK() OVER (ORDER BY cgpa DESC) AS rank FROM student_profiles WHERE cgpa IS NOT NULL;
```

### ✅ PASS : EDUCATION_052 - Running COUNT
```sql
SELECT offering_id, id, COUNT(*) OVER (PARTITION BY offering_id ORDER BY created_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_enrollments FROM enrollments;
```

### ✅ PASS : EDUCATION_052 - ROW_NUMBER equivalent
```sql
SELECT offering_id, id, ROW_NUMBER() OVER (PARTITION BY offering_id ORDER BY created_at, id) AS running_enrollments FROM enrollments;
```

### ✅ PASS : EDUCATION_053 - DENSE_RANK second
```sql
SELECT user_id, cgpa FROM (SELECT user_id, cgpa, DENSE_RANK() OVER (ORDER BY cgpa DESC) AS rnk FROM student_profiles WHERE cgpa IS NOT NULL) x WHERE rnk = 2;
```

### ✅ PASS : EDUCATION_053 - Second max subquery
```sql
SELECT user_id, cgpa FROM student_profiles WHERE cgpa = (SELECT MAX(cgpa) FROM student_profiles WHERE cgpa < (SELECT MAX(cgpa) FROM student_profiles WHERE cgpa IS NOT NULL));
```

### ✅ PASS : EDUCATION_054 - LAG gap
```sql
SELECT student_user_id, MAX(gap_days) AS max_gap_days FROM (SELECT student_user_id, EXTRACT(EPOCH FROM (submitted_at - LAG(submitted_at) OVER (PARTITION BY student_user_id ORDER BY submitted_at))) / 86400 AS gap_days FROM assignment_submissions) x GROUP BY student_user_id;
```

### ✅ PASS : EDUCATION_054 - CTE gap
```sql
WITH submission_gaps AS (SELECT student_user_id, EXTRACT(EPOCH FROM (submitted_at - LAG(submitted_at) OVER (PARTITION BY student_user_id ORDER BY submitted_at))) / 86400 AS gap_days FROM assignment_submissions) SELECT student_user_id, MAX(gap_days) AS max_gap_days FROM submission_gaps GROUP BY student_user_id;
```

### ✅ PASS : EDUCATION_055 - ROW_NUMBER top 3
```sql
WITH student_avg AS (SELECT e.offering_id, r.student_user_id, AVG(r.obtained_marks) AS avg_marks FROM exam_results r JOIN enrollments e ON e.student_user_id = r.student_user_id GROUP BY e.offering_id, r.student_user_id), ranked AS (SELECT offering_id, student_user_id, avg_marks, ROW_NUMBER() OVER (PARTITION BY offering_id ORDER BY avg_marks DESC, student_user_id ASC) AS rn FROM student_avg) SELECT offering_id, student_user_id, avg_marks FROM ranked WHERE rn <= 3;
```

### ✅ PASS : EDUCATION_056 - Moving AVG
```sql
SELECT student_user_id, exam_id, obtained_marks, AVG(obtained_marks) OVER (PARTITION BY student_user_id ORDER BY exam_id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg FROM exam_results WHERE obtained_marks IS NOT NULL;
```

### ✅ PASS : EDUCATION_056 - Named window
```sql
SELECT student_user_id, exam_id, obtained_marks, AVG(obtained_marks) OVER w AS moving_avg FROM exam_results WHERE obtained_marks IS NOT NULL WINDOW w AS (PARTITION BY student_user_id ORDER BY exam_id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW);
```

### ✅ PASS : EDUCATION_057 - GROUP top 5
```sql
SELECT student_user_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY student_user_id ORDER BY avg_marks DESC, student_user_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_057 - Subquery top
```sql
SELECT student_user_id, avg_marks FROM (SELECT student_user_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY student_user_id) student_averages ORDER BY avg_marks DESC, student_user_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_057 - ROW_NUMBER top
```sql
SELECT student_user_id, avg_marks FROM (SELECT student_user_id, avg_marks, ROW_NUMBER() OVER (ORDER BY avg_marks DESC, student_user_id ASC) AS rn FROM (SELECT student_user_id, AVG(obtained_marks) AS avg_marks FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY student_user_id) student_averages) ranked WHERE rn <= 5 ORDER BY avg_marks DESC, student_user_id ASC;
```

### ✅ PASS : EDUCATION_058 - PERCENT_RANK
```sql
SELECT exam_id, student_user_id, PERCENT_RANK() OVER (PARTITION BY exam_id ORDER BY obtained_marks) AS percentile FROM exam_results WHERE obtained_marks IS NOT NULL;
```

### ✅ PASS : EDUCATION_059 - ORDER LIMIT
```sql
SELECT student_user_id, attendance_percentage FROM enrollments WHERE attendance_percentage IS NOT NULL ORDER BY attendance_percentage DESC, student_user_id ASC LIMIT 10;
```

### ✅ PASS : EDUCATION_059 - ROW_NUMBER top
```sql
SELECT student_user_id, attendance_percentage FROM (SELECT student_user_id, attendance_percentage, ROW_NUMBER() OVER (ORDER BY attendance_percentage DESC, student_user_id ASC) AS rn FROM enrollments WHERE attendance_percentage IS NOT NULL) ranked WHERE rn <= 10 ORDER BY attendance_percentage DESC, student_user_id ASC;
```

### ✅ PASS : EDUCATION_060 - Join fee plan
```sql
SELECT fp.program_id, SUM(fi.total_amount) AS total_revenue FROM fee_invoices fi JOIN student_fee_assignments sfa ON fi.fee_assignment_id = sfa.id JOIN fee_plans fp ON sfa.fee_plan_id = fp.id WHERE fp.program_id IS NOT NULL GROUP BY fp.program_id ORDER BY total_revenue DESC, fp.program_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_060 - CTE revenue
```sql
WITH program_revenue AS (SELECT fp.program_id, SUM(fi.total_amount) AS total_revenue FROM fee_invoices fi JOIN student_fee_assignments sfa ON fi.fee_assignment_id = sfa.id JOIN fee_plans fp ON sfa.fee_plan_id = fp.id WHERE fp.program_id IS NOT NULL GROUP BY fp.program_id) SELECT program_id, total_revenue FROM program_revenue ORDER BY total_revenue DESC, program_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_061 - ROW_NUMBER top 2
```sql
WITH student_avg AS (SELECT ex.offering_id, er.student_user_id, AVG(er.obtained_marks) AS avg_marks FROM exam_results er JOIN exams ex ON er.exam_id = ex.id WHERE ex.offering_id IS NOT NULL AND er.obtained_marks IS NOT NULL GROUP BY ex.offering_id, er.student_user_id), ranked AS (SELECT offering_id, student_user_id, avg_marks, ROW_NUMBER() OVER (PARTITION BY offering_id ORDER BY avg_marks DESC, student_user_id ASC) AS rn FROM student_avg) SELECT offering_id, student_user_id, avg_marks FROM ranked WHERE rn <= 2;
```

### ✅ PASS : EDUCATION_062 - Program average
```sql
WITH program_avg AS (SELECT program_id, AVG(cgpa) AS avg_program_cgpa FROM student_profiles WHERE program_id IS NOT NULL AND cgpa IS NOT NULL GROUP BY program_id) SELECT sp.user_id, sp.program_id, sp.cgpa FROM student_profiles sp JOIN program_avg pa ON sp.program_id = pa.program_id WHERE sp.cgpa > pa.avg_program_cgpa;
```

### ✅ PASS : EDUCATION_062 - Window average
```sql
SELECT user_id, program_id, cgpa FROM (SELECT user_id, program_id, cgpa, AVG(cgpa) OVER (PARTITION BY program_id) AS avg_program_cgpa FROM student_profiles WHERE program_id IS NOT NULL AND cgpa IS NOT NULL) x WHERE cgpa > avg_program_cgpa;
```

### ✅ PASS : EDUCATION_063 - LAG enrollment
```sql
WITH enrollment_counts AS (SELECT co.course_id, co.term_id, COUNT(e.id) AS student_count FROM course_offerings co JOIN enrollments e ON co.id = e.offering_id WHERE e.enrollment_status = 'enrolled' GROUP BY co.course_id, co.term_id), ranked AS (SELECT course_id, term_id, student_count, LAG(student_count) OVER (PARTITION BY course_id ORDER BY term_id) AS prev_count FROM enrollment_counts) SELECT course_id, term_id, student_count FROM ranked WHERE prev_count IS NOT NULL AND student_count > prev_count;
```

### ✅ PASS : EDUCATION_063 - CTE split
```sql
WITH enrollment_counts AS (SELECT co.course_id, co.term_id, COUNT(e.id) AS student_count FROM course_offerings co JOIN enrollments e ON co.id = e.offering_id WHERE e.enrollment_status = 'enrolled' GROUP BY co.course_id, co.term_id), enrollment_trends AS (SELECT course_id, term_id, student_count, LAG(student_count) OVER (PARTITION BY course_id ORDER BY term_id) AS prev_count FROM enrollment_counts) SELECT course_id, term_id, student_count FROM enrollment_trends WHERE prev_count IS NOT NULL AND student_count > prev_count;
```

### ✅ PASS : EDUCATION_064 - FILTER all perfect
```sql
SELECT student_user_id FROM enrollments GROUP BY student_user_id HAVING COUNT(*) > 0 AND COUNT(*) = COUNT(*) FILTER (WHERE attendance_percentage = 100);
```

### ✅ PASS : EDUCATION_064 - BOOL_AND
```sql
SELECT student_user_id FROM enrollments GROUP BY student_user_id HAVING BOOL_AND(attendance_percentage = 100);
```

### ✅ PASS : EDUCATION_065 - FILTER all passed
```sql
SELECT e.offering_id FROM enrollments e JOIN exam_results r ON r.student_user_id = e.student_user_id GROUP BY e.offering_id HAVING COUNT(*) > 0 AND COUNT(*) = COUNT(*) FILTER (WHERE r.result_status = 'passed');
```

### ✅ PASS : EDUCATION_065 - BOOL_AND passed
```sql
SELECT e.offering_id FROM enrollments e JOIN exam_results r ON r.student_user_id = e.student_user_id GROUP BY e.offering_id HAVING BOOL_AND(r.result_status = 'passed');
```

### ✅ PASS : EDUCATION_065 - No non-passed
```sql
SELECT DISTINCT e.offering_id FROM enrollments e WHERE EXISTS (SELECT 1 FROM exam_results r WHERE r.student_user_id = e.student_user_id) AND NOT EXISTS (SELECT 1 FROM enrollments e2 JOIN exam_results r2 ON r2.student_user_id = e2.student_user_id WHERE e2.offering_id = e.offering_id AND r2.result_status <> 'passed');
```

### ✅ PASS : EDUCATION_066 - FILTER counts
```sql
SELECT student_user_id, COUNT(*) FILTER (WHERE result_status = 'failed') AS failed_count, COUNT(*) FILTER (WHERE result_status = 'passed') AS passed_count FROM exam_results GROUP BY student_user_id HAVING COUNT(*) FILTER (WHERE result_status = 'failed') > COUNT(*) FILTER (WHERE result_status = 'passed');
```

### ✅ PASS : EDUCATION_066 - SUM CASE
```sql
SELECT student_user_id, SUM(CASE WHEN result_status = 'failed' THEN 1 ELSE 0 END) AS failed_count, SUM(CASE WHEN result_status = 'passed' THEN 1 ELSE 0 END) AS passed_count FROM exam_results GROUP BY student_user_id HAVING SUM(CASE WHEN result_status = 'failed' THEN 1 ELSE 0 END) > SUM(CASE WHEN result_status = 'passed' THEN 1 ELSE 0 END);
```

### ✅ PASS : EDUCATION_067 - BOOL_AND improvement
```sql
WITH ranked AS (SELECT student_user_id, obtained_marks, LAG(obtained_marks) OVER (PARTITION BY student_user_id ORDER BY exam_id) AS prev_marks FROM exam_results WHERE obtained_marks IS NOT NULL) SELECT DISTINCT student_user_id FROM ranked GROUP BY student_user_id HAVING BOOL_AND(prev_marks IS NULL OR obtained_marks > prev_marks);
```

### ✅ PASS : EDUCATION_067 - No decline
```sql
WITH ranked AS (SELECT student_user_id, obtained_marks, LAG(obtained_marks) OVER (PARTITION BY student_user_id ORDER BY exam_id) AS prev_marks FROM exam_results WHERE obtained_marks IS NOT NULL) SELECT DISTINCT student_user_id FROM ranked r WHERE NOT EXISTS (SELECT 1 FROM ranked x WHERE x.student_user_id = r.student_user_id AND x.prev_marks IS NOT NULL AND x.obtained_marks <= x.prev_marks);
```

### ✅ PASS : EDUCATION_068 - Primary teacher average
```sql
SELECT co.primary_teacher_id AS teacher_user_id, AVG(er.obtained_marks) AS avg_marks FROM course_offerings co JOIN enrollments e ON e.offering_id = co.id JOIN exams ex ON ex.offering_id = co.id JOIN exam_results er ON er.exam_id = ex.id AND er.student_user_id = e.student_user_id WHERE co.primary_teacher_id IS NOT NULL AND er.obtained_marks IS NOT NULL GROUP BY co.primary_teacher_id ORDER BY avg_marks DESC, teacher_user_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_068 - CTE teacher scores
```sql
WITH teacher_scores AS (SELECT co.primary_teacher_id AS teacher_user_id, AVG(er.obtained_marks) AS avg_marks FROM course_offerings co JOIN enrollments e ON e.offering_id = co.id JOIN exams ex ON ex.offering_id = co.id JOIN exam_results er ON er.exam_id = ex.id AND er.student_user_id = e.student_user_id WHERE co.primary_teacher_id IS NOT NULL AND er.obtained_marks IS NOT NULL GROUP BY co.primary_teacher_id) SELECT teacher_user_id, avg_marks FROM teacher_scores ORDER BY avg_marks DESC, teacher_user_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_068 - ROW_NUMBER top
```sql
SELECT teacher_user_id, avg_marks FROM (SELECT teacher_user_id, avg_marks, ROW_NUMBER() OVER (ORDER BY avg_marks DESC, teacher_user_id ASC) AS rn FROM (SELECT co.primary_teacher_id AS teacher_user_id, AVG(er.obtained_marks) AS avg_marks FROM course_offerings co JOIN enrollments e ON e.offering_id = co.id JOIN exams ex ON ex.offering_id = co.id JOIN exam_results er ON er.exam_id = ex.id AND er.student_user_id = e.student_user_id WHERE co.primary_teacher_id IS NOT NULL AND er.obtained_marks IS NOT NULL GROUP BY co.primary_teacher_id) teacher_scores) ranked WHERE rn <= 5 ORDER BY avg_marks DESC, teacher_user_id ASC;
```

### ✅ PASS : EDUCATION_069 - GROUP top assignment
```sql
SELECT student_user_id, AVG(obtained_marks) AS avg_marks FROM assignment_submissions WHERE obtained_marks IS NOT NULL GROUP BY student_user_id ORDER BY avg_marks DESC, student_user_id ASC LIMIT 10;
```

### ✅ PASS : EDUCATION_069 - Subquery top
```sql
SELECT student_user_id, avg_marks FROM (SELECT student_user_id, AVG(obtained_marks) AS avg_marks FROM assignment_submissions WHERE obtained_marks IS NOT NULL GROUP BY student_user_id) student_assignment_avg ORDER BY avg_marks DESC, student_user_id ASC LIMIT 10;
```

### ✅ PASS : EDUCATION_069 - ROW_NUMBER top
```sql
SELECT student_user_id, avg_marks FROM (SELECT student_user_id, avg_marks, ROW_NUMBER() OVER (ORDER BY avg_marks DESC, student_user_id ASC) AS rn FROM (SELECT student_user_id, AVG(obtained_marks) AS avg_marks FROM assignment_submissions WHERE obtained_marks IS NOT NULL GROUP BY student_user_id) student_assignment_avg) ranked WHERE rn <= 10 ORDER BY avg_marks DESC, student_user_id ASC;
```

### ✅ PASS : EDUCATION_070 - FILTER drop rate
```sql
SELECT offering_id, (COUNT(*) FILTER (WHERE enrollment_status = 'dropped')::numeric / COUNT(*)) AS drop_rate FROM enrollments GROUP BY offering_id HAVING COUNT(*) > 0 ORDER BY drop_rate DESC, offering_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_070 - SUM CASE rate
```sql
SELECT offering_id, (SUM(CASE WHEN enrollment_status = 'dropped' THEN 1 ELSE 0 END)::numeric / COUNT(*)) AS drop_rate FROM enrollments GROUP BY offering_id HAVING COUNT(*) > 0 ORDER BY drop_rate DESC, offering_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_070 - Subquery top
```sql
SELECT offering_id, drop_rate FROM (SELECT offering_id, (COUNT(*) FILTER (WHERE enrollment_status = 'dropped')::numeric / COUNT(*)) AS drop_rate FROM enrollments GROUP BY offering_id HAVING COUNT(*) > 0) rates ORDER BY drop_rate DESC, offering_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_071 - COUNT all exams
```sql
SELECT student_user_id FROM exam_results GROUP BY student_user_id HAVING COUNT(DISTINCT exam_id) = (SELECT COUNT(*) FROM exams);
```

### ✅ PASS : EDUCATION_071 - NOT EXISTS division
```sql
SELECT DISTINCT er.student_user_id FROM exam_results er WHERE NOT EXISTS (SELECT 1 FROM exams e WHERE NOT EXISTS (SELECT 1 FROM exam_results er2 WHERE er2.student_user_id = er.student_user_id AND er2.exam_id = e.id));
```

### ✅ PASS : EDUCATION_072 - FILTER no failures
```sql
SELECT student_user_id FROM exam_results GROUP BY student_user_id HAVING COUNT(*) FILTER (WHERE result_status = 'failed') = 0;
```

### ✅ PASS : EDUCATION_072 - BOOL_AND not failed
```sql
SELECT student_user_id FROM exam_results GROUP BY student_user_id HAVING BOOL_AND(result_status <> 'failed');
```

### ✅ PASS : EDUCATION_072 - NOT EXISTS failed
```sql
SELECT DISTINCT er.student_user_id FROM exam_results er WHERE NOT EXISTS (SELECT 1 FROM exam_results f WHERE f.student_user_id = er.student_user_id AND f.result_status = 'failed');
```

### ✅ PASS : EDUCATION_073 - LAG after failure
```sql
WITH ranked AS (SELECT student_user_id, obtained_marks, result_status, LAG(result_status) OVER (PARTITION BY student_user_id ORDER BY exam_id) AS prev_status, LAG(obtained_marks) OVER (PARTITION BY student_user_id ORDER BY exam_id) AS prev_marks FROM exam_results) SELECT DISTINCT student_user_id FROM ranked WHERE prev_status = 'failed' AND obtained_marks > prev_marks;
```

### ✅ PASS : EDUCATION_073 - Self join next exam
```sql
SELECT DISTINCT curr.student_user_id FROM exam_results prev JOIN exam_results curr ON curr.student_user_id = prev.student_user_id AND curr.exam_id > prev.exam_id WHERE prev.result_status = 'failed' AND curr.obtained_marks > prev.obtained_marks;
```

### ✅ PASS : EDUCATION_074 - JOIN top CGPA
```sql
SELECT e.offering_id, AVG(sp.cgpa) AS avg_cgpa FROM enrollments e JOIN student_profiles sp ON sp.user_id = e.student_user_id WHERE sp.cgpa IS NOT NULL GROUP BY e.offering_id ORDER BY avg_cgpa DESC, e.offering_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_074 - Subquery top
```sql
SELECT offering_id, avg_cgpa FROM (SELECT e.offering_id, AVG(sp.cgpa) AS avg_cgpa FROM enrollments e JOIN student_profiles sp ON sp.user_id = e.student_user_id WHERE sp.cgpa IS NOT NULL GROUP BY e.offering_id) course_cgpa ORDER BY avg_cgpa DESC, offering_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_074 - ROW_NUMBER top
```sql
SELECT offering_id, avg_cgpa FROM (SELECT offering_id, avg_cgpa, ROW_NUMBER() OVER (ORDER BY avg_cgpa DESC, offering_id ASC) AS rn FROM (SELECT e.offering_id, AVG(sp.cgpa) AS avg_cgpa FROM enrollments e JOIN student_profiles sp ON sp.user_id = e.student_user_id WHERE sp.cgpa IS NOT NULL GROUP BY e.offering_id) course_cgpa) ranked WHERE rn <= 5 ORDER BY avg_cgpa DESC, offering_id ASC;
```

### ✅ PASS : EDUCATION_075 - MAX attempt count
```sql
WITH attempt_counts AS (SELECT student_user_id, COUNT(*) AS attempt_count FROM exam_results GROUP BY student_user_id) SELECT student_user_id, attempt_count FROM attempt_counts WHERE attempt_count = (SELECT MAX(attempt_count) FROM attempt_counts);
```

### ✅ PASS : EDUCATION_075 - RANK max
```sql
SELECT student_user_id, attempt_count FROM (SELECT student_user_id, COUNT(*) AS attempt_count, RANK() OVER (ORDER BY COUNT(*) DESC) AS rnk FROM exam_results GROUP BY student_user_id) ranked WHERE rnk = 1;
```

### ✅ PASS : EDUCATION_076 - DISTINCT perfect
```sql
SELECT DISTINCT offering_id FROM enrollments WHERE attendance_percentage = 100;
```

### ✅ PASS : EDUCATION_076 - GROUP BY offering
```sql
SELECT offering_id FROM enrollments WHERE attendance_percentage = 100 GROUP BY offering_id;
```

### ✅ PASS : EDUCATION_076 - EXISTS perfect
```sql
SELECT DISTINCT e.offering_id FROM enrollments e WHERE EXISTS (SELECT 1 FROM enrollments x WHERE x.offering_id = e.offering_id AND x.attendance_percentage = 100);
```

### ✅ PASS : EDUCATION_077 - Join invoice payments
```sql
SELECT fi.student_user_id, SUM(p.paid_amount) AS total_paid FROM payments p JOIN fee_invoices fi ON p.invoice_id = fi.id WHERE p.payment_status = 'successful' GROUP BY fi.student_user_id ORDER BY total_paid DESC, fi.student_user_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_077 - CTE paid totals
```sql
WITH paid_totals AS (SELECT fi.student_user_id, SUM(p.paid_amount) AS total_paid FROM payments p JOIN fee_invoices fi ON p.invoice_id = fi.id WHERE p.payment_status = 'successful' GROUP BY fi.student_user_id) SELECT student_user_id, total_paid FROM paid_totals ORDER BY total_paid DESC, student_user_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_077 - ROW_NUMBER top
```sql
SELECT student_user_id, total_paid FROM (SELECT student_user_id, total_paid, ROW_NUMBER() OVER (ORDER BY total_paid DESC, student_user_id ASC) AS rn FROM (SELECT fi.student_user_id, SUM(p.paid_amount) AS total_paid FROM payments p JOIN fee_invoices fi ON p.invoice_id = fi.id WHERE p.payment_status = 'successful' GROUP BY fi.student_user_id) paid_totals) ranked WHERE rn <= 5 ORDER BY total_paid DESC, student_user_id ASC;
```

### ✅ PASS : EDUCATION_078 - Join due date
```sql
SELECT DISTINCT s.student_user_id FROM assignment_submissions s JOIN assignments a ON s.assignment_id = a.id WHERE s.submitted_at > a.due_at;
```

### ✅ PASS : EDUCATION_078 - GROUP late students
```sql
SELECT s.student_user_id FROM assignment_submissions s JOIN assignments a ON s.assignment_id = a.id WHERE s.submitted_at > a.due_at GROUP BY s.student_user_id;
```

### ✅ PASS : EDUCATION_079 - GROUP top assignments
```sql
SELECT offering_id, COUNT(*) AS assignment_count FROM assignments GROUP BY offering_id ORDER BY assignment_count DESC, offering_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_079 - Subquery top
```sql
SELECT offering_id, assignment_count FROM (SELECT offering_id, COUNT(*) AS assignment_count FROM assignments GROUP BY offering_id) assignment_counts ORDER BY assignment_count DESC, offering_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_079 - ROW_NUMBER top
```sql
SELECT offering_id, assignment_count FROM (SELECT offering_id, assignment_count, ROW_NUMBER() OVER (ORDER BY assignment_count DESC, offering_id ASC) AS rn FROM (SELECT offering_id, COUNT(*) AS assignment_count FROM assignments GROUP BY offering_id) assignment_counts) ranked WHERE rn <= 5 ORDER BY assignment_count DESC, offering_id ASC;
```

### ✅ PASS : EDUCATION_080 - GROUP top posts
```sql
SELECT user_id, COUNT(*) AS post_count FROM discussion_posts GROUP BY user_id ORDER BY post_count DESC, user_id ASC LIMIT 10;
```

### ✅ PASS : EDUCATION_080 - Subquery top
```sql
SELECT user_id, post_count FROM (SELECT user_id, COUNT(*) AS post_count FROM discussion_posts GROUP BY user_id) post_counts ORDER BY post_count DESC, user_id ASC LIMIT 10;
```

### ✅ PASS : EDUCATION_080 - ROW_NUMBER top
```sql
SELECT user_id, post_count FROM (SELECT user_id, post_count, ROW_NUMBER() OVER (ORDER BY post_count DESC, user_id ASC) AS rn FROM (SELECT user_id, COUNT(*) AS post_count FROM discussion_posts GROUP BY user_id) post_counts) ranked WHERE rn <= 10 ORDER BY post_count DESC, user_id ASC;
```

### ✅ PASS : EDUCATION_081 - Program average join
```sql
WITH program_avg_cgpa AS (SELECT program_id, AVG(cgpa) AS avg_cgpa FROM student_profiles WHERE program_id IS NOT NULL AND cgpa IS NOT NULL GROUP BY program_id) SELECT sp.user_id, sp.program_id, sp.cgpa FROM student_profiles sp JOIN program_avg_cgpa pag ON sp.program_id = pag.program_id WHERE sp.cgpa IS NOT NULL AND sp.cgpa > pag.avg_cgpa;
```

### ✅ PASS : EDUCATION_081 - Window average
```sql
SELECT user_id, program_id, cgpa FROM (SELECT user_id, program_id, cgpa, AVG(cgpa) OVER (PARTITION BY program_id) AS avg_program_cgpa FROM student_profiles WHERE program_id IS NOT NULL AND cgpa IS NOT NULL) x WHERE cgpa > avg_program_cgpa;
```

### ✅ PASS : EDUCATION_082 - GROUP failed exams
```sql
SELECT student_user_id, COUNT(*) AS failed_exam_count FROM exam_results WHERE grade_letter = 'F' GROUP BY student_user_id HAVING COUNT(*) > 1;
```

### ✅ PASS : EDUCATION_082 - Subquery filter
```sql
SELECT student_user_id, failed_exam_count FROM (SELECT student_user_id, COUNT(*) AS failed_exam_count FROM exam_results WHERE grade_letter = 'F' GROUP BY student_user_id) failed_counts WHERE failed_exam_count > 1;
```

### ✅ PASS : EDUCATION_083 - Teacher vs department
```sql
WITH teacher_avg AS (SELECT tp.department_id, sf.teacher_user_id, AVG(sf.rating_value) AS avg_rating FROM student_feedback sf JOIN teacher_profiles tp ON sf.teacher_user_id = tp.user_id WHERE tp.department_id IS NOT NULL GROUP BY tp.department_id, sf.teacher_user_id), department_avg AS (SELECT department_id, AVG(avg_rating) AS dept_avg_rating FROM teacher_avg GROUP BY department_id) SELECT ta.department_id, ta.teacher_user_id, ROUND(ta.avg_rating, 2) AS avg_rating FROM teacher_avg ta JOIN department_avg da ON ta.department_id = da.department_id WHERE ta.avg_rating > da.dept_avg_rating;
```

### ✅ PASS : EDUCATION_083 - Window department avg
```sql
SELECT department_id, teacher_user_id, ROUND(avg_rating, 2) AS avg_rating FROM (SELECT department_id, teacher_user_id, avg_rating, AVG(avg_rating) OVER (PARTITION BY department_id) AS dept_avg_rating FROM (SELECT tp.department_id, sf.teacher_user_id, AVG(sf.rating_value) AS avg_rating FROM student_feedback sf JOIN teacher_profiles tp ON sf.teacher_user_id = tp.user_id WHERE tp.department_id IS NOT NULL GROUP BY tp.department_id, sf.teacher_user_id) teacher_avg) x WHERE avg_rating > dept_avg_rating;
```

### ✅ PASS : EDUCATION_084 - Expected vs actual
```sql
WITH offering_assignments AS (SELECT offering_id, COUNT(*) AS total_assignments FROM assignments GROUP BY offering_id), enrolled_students AS (SELECT offering_id, COUNT(*) AS total_students FROM enrollments WHERE enrollment_status = 'enrolled' GROUP BY offering_id), required_submissions AS (SELECT oa.offering_id, oa.total_assignments * es.total_students AS expected_submissions FROM offering_assignments oa JOIN enrolled_students es ON oa.offering_id = es.offering_id), actual_submissions AS (SELECT a.offering_id, COUNT(*) AS actual_submissions FROM assignments a JOIN assignment_submissions s ON a.id = s.assignment_id WHERE s.submission_status IN ('submitted', 'late_submitted', 'graded') GROUP BY a.offering_id) SELECT rs.offering_id FROM required_submissions rs JOIN actual_submissions ac ON rs.offering_id = ac.offering_id WHERE rs.expected_submissions = ac.actual_submissions;
```

### ✅ PASS : EDUCATION_084 - Compact counts
```sql
WITH required_submissions AS (SELECT a.offering_id, COUNT(DISTINCT a.id) * COUNT(DISTINCT e.student_user_id) AS expected_submissions FROM assignments a JOIN enrollments e ON a.offering_id = e.offering_id WHERE e.enrollment_status = 'enrolled' GROUP BY a.offering_id), actual_submissions AS (SELECT a.offering_id, COUNT(*) AS actual_submissions FROM assignments a JOIN assignment_submissions s ON a.id = s.assignment_id WHERE s.submission_status IN ('submitted', 'late_submitted', 'graded') GROUP BY a.offering_id) SELECT rs.offering_id FROM required_submissions rs JOIN actual_submissions ac ON rs.offering_id = ac.offering_id WHERE rs.expected_submissions = ac.actual_submissions;
```

### ✅ PASS : EDUCATION_085 - LEFT anti join
```sql
SELECT DISTINCT fi.student_user_id FROM fee_invoices fi LEFT JOIN payments p ON fi.id = p.invoice_id AND p.payment_status = 'successful' WHERE p.id IS NULL;
```

### ✅ PASS : EDUCATION_085 - NOT EXISTS
```sql
SELECT DISTINCT fi.student_user_id FROM fee_invoices fi WHERE NOT EXISTS (SELECT 1 FROM payments p WHERE p.invoice_id = fi.id AND p.payment_status = 'successful');
```

### ✅ PASS : EDUCATION_086 - Self join overlap
```sql
SELECT t1.classroom_id, t1.weekday_no, t1.id AS slot_id_1, t2.id AS slot_id_2 FROM timetable_slots t1 JOIN timetable_slots t2 ON t1.classroom_id = t2.classroom_id AND t1.weekday_no = t2.weekday_no AND t1.id < t2.id AND t1.start_time < t2.end_time AND t2.start_time < t1.end_time WHERE t1.classroom_id IS NOT NULL;
```

### ✅ PASS : EDUCATION_087 - Teacher slot overlap
```sql
WITH teacher_slots AS (SELECT ct.teacher_user_id, ts.weekday_no, ts.id AS slot_id, ts.start_time, ts.end_time FROM course_teachers ct JOIN timetable_slots ts ON ct.offering_id = ts.offering_id) SELECT ts1.teacher_user_id, ts1.weekday_no, ts1.slot_id AS slot_id_1, ts2.slot_id AS slot_id_2 FROM teacher_slots ts1 JOIN teacher_slots ts2 ON ts1.teacher_user_id = ts2.teacher_user_id AND ts1.weekday_no = ts2.weekday_no AND ts1.slot_id < ts2.slot_id AND ts1.start_time < ts2.end_time AND ts2.start_time < ts1.end_time;
```

### ✅ PASS : EDUCATION_087 - Inline self join
```sql
SELECT ct1.teacher_user_id, ts1.weekday_no, ts1.id AS slot_id_1, ts2.id AS slot_id_2 FROM course_teachers ct1 JOIN timetable_slots ts1 ON ct1.offering_id = ts1.offering_id JOIN course_teachers ct2 ON ct2.teacher_user_id = ct1.teacher_user_id JOIN timetable_slots ts2 ON ct2.offering_id = ts2.offering_id AND ts1.weekday_no = ts2.weekday_no AND ts1.id < ts2.id AND ts1.start_time < ts2.end_time AND ts2.start_time < ts1.end_time;
```

### ✅ PASS : EDUCATION_088 - Split averages
```sql
WITH scored_exams AS (SELECT student_user_id, exam_id, obtained_marks, ROW_NUMBER() OVER (PARTITION BY student_user_id ORDER BY exam_id ASC) AS rn, COUNT(*) OVER (PARTITION BY student_user_id) AS total_exams FROM exam_results WHERE obtained_marks IS NOT NULL), split_scores AS (SELECT student_user_id, AVG(CASE WHEN rn <= total_exams / 2.0 THEN obtained_marks END) AS first_half_avg, AVG(CASE WHEN rn > total_exams / 2.0 THEN obtained_marks END) AS second_half_avg FROM scored_exams GROUP BY student_user_id) SELECT student_user_id, ROUND(first_half_avg, 2) AS first_half_avg, ROUND(second_half_avg, 2) AS second_half_avg FROM split_scores WHERE second_half_avg > first_half_avg;
```

### ✅ PASS : EDUCATION_088 - FILTER split
```sql
WITH scored_exams AS (SELECT student_user_id, exam_id, obtained_marks, ROW_NUMBER() OVER (PARTITION BY student_user_id ORDER BY exam_id ASC) AS rn, COUNT(*) OVER (PARTITION BY student_user_id) AS total_exams FROM exam_results WHERE obtained_marks IS NOT NULL), split_scores AS (SELECT student_user_id, AVG(obtained_marks) FILTER (WHERE rn <= total_exams / 2.0) AS first_half_avg, AVG(obtained_marks) FILTER (WHERE rn > total_exams / 2.0) AS second_half_avg FROM scored_exams GROUP BY student_user_id) SELECT student_user_id, ROUND(first_half_avg, 2) AS first_half_avg, ROUND(second_half_avg, 2) AS second_half_avg FROM split_scores WHERE second_half_avg > first_half_avg;
```

### ✅ PASS : EDUCATION_089 - FILTER all active
```sql
SELECT program_id FROM student_profiles WHERE program_id IS NOT NULL GROUP BY program_id HAVING COUNT(*) = COUNT(*) FILTER (WHERE enrollment_status = 'active');
```

### ✅ PASS : EDUCATION_089 - BOOL_AND active
```sql
SELECT program_id FROM student_profiles WHERE program_id IS NOT NULL GROUP BY program_id HAVING BOOL_AND(enrollment_status = 'active');
```

### ✅ PASS : EDUCATION_089 - No inactive student
```sql
SELECT DISTINCT sp.program_id FROM student_profiles sp WHERE sp.program_id IS NOT NULL AND NOT EXISTS (SELECT 1 FROM student_profiles x WHERE x.program_id = sp.program_id AND x.enrollment_status <> 'active');
```

### ✅ PASS : EDUCATION_090 - Compare averages
```sql
WITH assignment_avg AS (SELECT student_user_id, AVG(obtained_marks) AS avg_assignment_score FROM assignment_submissions WHERE obtained_marks IS NOT NULL GROUP BY student_user_id), exam_avg AS (SELECT student_user_id, AVG(obtained_marks) AS avg_exam_score FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY student_user_id) SELECT aa.student_user_id, ROUND(aa.avg_assignment_score, 2) AS avg_assignment_score, ROUND(ea.avg_exam_score, 2) AS avg_exam_score FROM assignment_avg aa JOIN exam_avg ea ON aa.student_user_id = ea.student_user_id WHERE aa.avg_assignment_score > ea.avg_exam_score;
```

### ✅ PASS : EDUCATION_090 - Inline averages
```sql
SELECT aa.student_user_id, ROUND(aa.avg_assignment_score, 2) AS avg_assignment_score, ROUND(ea.avg_exam_score, 2) AS avg_exam_score FROM (SELECT student_user_id, AVG(obtained_marks) AS avg_assignment_score FROM assignment_submissions WHERE obtained_marks IS NOT NULL GROUP BY student_user_id) aa JOIN (SELECT student_user_id, AVG(obtained_marks) AS avg_exam_score FROM exam_results WHERE obtained_marks IS NOT NULL GROUP BY student_user_id) ea ON aa.student_user_id = ea.student_user_id WHERE aa.avg_assignment_score > ea.avg_exam_score;
```

### ✅ PASS : EDUCATION_091 - ROW_NUMBER top 3
```sql
WITH ranked_students AS (SELECT user_id, program_id, cgpa, ROW_NUMBER() OVER (PARTITION BY program_id ORDER BY cgpa DESC, user_id ASC) AS rn FROM student_profiles WHERE program_id IS NOT NULL AND cgpa IS NOT NULL) SELECT user_id, program_id, cgpa FROM ranked_students WHERE rn <= 3;
```

### ✅ PASS : EDUCATION_092 - Monthly collection
```sql
SELECT DATE_TRUNC('month', paid_at) AS collection_month, ROUND(SUM(paid_amount), 2) AS total_collection FROM payments WHERE payment_status = 'successful' AND paid_at IS NOT NULL GROUP BY DATE_TRUNC('month', paid_at);
```

### ✅ PASS : EDUCATION_092 - CTE month bucket
```sql
WITH monthly_payments AS (SELECT DATE_TRUNC('month', paid_at) AS collection_month, paid_amount FROM payments WHERE payment_status = 'successful' AND paid_at IS NOT NULL) SELECT collection_month, ROUND(SUM(paid_amount), 2) AS total_collection FROM monthly_payments GROUP BY collection_month;
```

### ✅ PASS : EDUCATION_093 - FILTER pass rate
```sql
SELECT e.offering_id, ROUND(100.0 * COUNT(*) FILTER (WHERE e.final_grade_letter IS NOT NULL AND e.final_grade_letter <> 'F') / COUNT(*), 2) AS pass_rate FROM enrollments e WHERE e.enrollment_status = 'completed' GROUP BY e.offering_id HAVING COUNT(*) > 0 ORDER BY pass_rate DESC, e.offering_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_093 - SUM CASE rate
```sql
SELECT offering_id, ROUND(100.0 * SUM(CASE WHEN final_grade_letter IS NOT NULL AND final_grade_letter <> 'F' THEN 1 ELSE 0 END) / COUNT(*), 2) AS pass_rate FROM enrollments WHERE enrollment_status = 'completed' GROUP BY offering_id HAVING COUNT(*) > 0 ORDER BY pass_rate DESC, offering_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_093 - Subquery top
```sql
SELECT offering_id, pass_rate FROM (SELECT e.offering_id, ROUND(100.0 * COUNT(*) FILTER (WHERE e.final_grade_letter IS NOT NULL AND e.final_grade_letter <> 'F') / COUNT(*), 2) AS pass_rate FROM enrollments e WHERE e.enrollment_status = 'completed' GROUP BY e.offering_id HAVING COUNT(*) > 0) rates ORDER BY pass_rate DESC, offering_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_094 - LAG attendance
```sql
WITH attendance_history AS (SELECT student_user_id, offering_id, attendance_percentage, completion_date, LAG(attendance_percentage) OVER (PARTITION BY student_user_id ORDER BY completion_date ASC NULLS LAST, offering_id ASC) AS previous_attendance FROM enrollments WHERE attendance_percentage IS NOT NULL) SELECT student_user_id, offering_id, attendance_percentage, previous_attendance FROM attendance_history WHERE previous_attendance IS NOT NULL AND attendance_percentage < previous_attendance;
```

### ✅ PASS : EDUCATION_094 - Inline LAG
```sql
SELECT student_user_id, offering_id, attendance_percentage, previous_attendance FROM (SELECT student_user_id, offering_id, attendance_percentage, LAG(attendance_percentage) OVER (PARTITION BY student_user_id ORDER BY completion_date ASC NULLS LAST, offering_id ASC) AS previous_attendance FROM enrollments WHERE attendance_percentage IS NOT NULL) attendance_history WHERE previous_attendance IS NOT NULL AND attendance_percentage < previous_attendance;
```

### ✅ PASS : EDUCATION_095 - COUNT DISTINCT top
```sql
SELECT teacher_user_id, COUNT(DISTINCT offering_id) AS total_offerings FROM course_teachers GROUP BY teacher_user_id ORDER BY total_offerings DESC, teacher_user_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_095 - Pre-distinct offerings
```sql
SELECT teacher_user_id, COUNT(*) AS total_offerings FROM (SELECT DISTINCT teacher_user_id, offering_id FROM course_teachers) teacher_offerings GROUP BY teacher_user_id ORDER BY total_offerings DESC, teacher_user_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_095 - ROW_NUMBER top
```sql
SELECT teacher_user_id, total_offerings FROM (SELECT teacher_user_id, total_offerings, ROW_NUMBER() OVER (ORDER BY total_offerings DESC, teacher_user_id ASC) AS rn FROM (SELECT teacher_user_id, COUNT(DISTINCT offering_id) AS total_offerings FROM course_teachers GROUP BY teacher_user_id) counts) ranked WHERE rn <= 5 ORDER BY total_offerings DESC, teacher_user_id ASC;
```

### ✅ PASS : EDUCATION_096 - LAG failure
```sql
WITH exam_failures AS (SELECT student_user_id, exam_id, grade_letter, LAG(grade_letter) OVER (PARTITION BY student_user_id ORDER BY exam_id ASC) AS previous_grade FROM exam_results) SELECT DISTINCT student_user_id FROM exam_failures WHERE grade_letter = 'F' AND previous_grade = 'F';
```

### ✅ PASS : EDUCATION_096 - Self join adjacent
```sql
SELECT DISTINCT curr.student_user_id FROM exam_results curr JOIN exam_results prev ON prev.student_user_id = curr.student_user_id AND prev.exam_id < curr.exam_id WHERE curr.grade_letter = 'F' AND prev.grade_letter = 'F';
```

### ✅ PASS : EDUCATION_097 - Revenue per student
```sql
WITH program_revenue AS (SELECT sp.program_id, SUM(p.paid_amount) AS total_revenue, COUNT(DISTINCT sp.user_id) AS total_students FROM payments p JOIN fee_invoices fi ON p.invoice_id = fi.id JOIN student_profiles sp ON fi.student_user_id = sp.user_id WHERE p.payment_status = 'successful' GROUP BY sp.program_id) SELECT program_id, ROUND(total_revenue / NULLIF(total_students, 0), 2) AS revenue_per_student FROM program_revenue ORDER BY revenue_per_student DESC, program_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_097 - Inline revenue
```sql
SELECT program_id, ROUND(total_revenue / NULLIF(total_students, 0), 2) AS revenue_per_student FROM (SELECT sp.program_id, SUM(p.paid_amount) AS total_revenue, COUNT(DISTINCT sp.user_id) AS total_students FROM payments p JOIN fee_invoices fi ON p.invoice_id = fi.id JOIN student_profiles sp ON fi.student_user_id = sp.user_id WHERE p.payment_status = 'successful' GROUP BY sp.program_id) program_revenue ORDER BY revenue_per_student DESC, program_id ASC LIMIT 5;
```

### ✅ PASS : EDUCATION_098 - GROUP view time
```sql
SELECT user_id, SUM(total_view_seconds) AS total_view_time FROM material_views GROUP BY user_id ORDER BY total_view_time DESC, user_id ASC LIMIT 10;
```

### ✅ PASS : EDUCATION_098 - Subquery top
```sql
SELECT user_id, total_view_time FROM (SELECT user_id, SUM(total_view_seconds) AS total_view_time FROM material_views GROUP BY user_id) view_totals ORDER BY total_view_time DESC, user_id ASC LIMIT 10;
```

### ✅ PASS : EDUCATION_098 - ROW_NUMBER top
```sql
SELECT user_id, total_view_time FROM (SELECT user_id, total_view_time, ROW_NUMBER() OVER (ORDER BY total_view_time DESC, user_id ASC) AS rn FROM (SELECT user_id, SUM(total_view_seconds) AS total_view_time FROM material_views GROUP BY user_id) view_totals) ranked WHERE rn <= 10 ORDER BY total_view_time DESC, user_id ASC;
```

### ✅ PASS : EDUCATION_099 - JOIN top department
```sql
SELECT tp.department_id, ROUND(AVG(sf.rating_value), 2) AS avg_feedback_score FROM student_feedback sf JOIN teacher_profiles tp ON sf.teacher_user_id = tp.user_id WHERE tp.department_id IS NOT NULL GROUP BY tp.department_id ORDER BY avg_feedback_score DESC, tp.department_id ASC LIMIT 1;
```

### ✅ PASS : EDUCATION_099 - Subquery top
```sql
SELECT department_id, avg_feedback_score FROM (SELECT tp.department_id, ROUND(AVG(sf.rating_value), 2) AS avg_feedback_score FROM student_feedback sf JOIN teacher_profiles tp ON sf.teacher_user_id = tp.user_id WHERE tp.department_id IS NOT NULL GROUP BY tp.department_id) dept_scores ORDER BY avg_feedback_score DESC, department_id ASC LIMIT 1;
```

### ✅ PASS : EDUCATION_099 - ROW_NUMBER top
```sql
SELECT department_id, avg_feedback_score FROM (SELECT department_id, avg_feedback_score, ROW_NUMBER() OVER (ORDER BY avg_feedback_score DESC, department_id ASC) AS rn FROM (SELECT tp.department_id, ROUND(AVG(sf.rating_value), 2) AS avg_feedback_score FROM student_feedback sf JOIN teacher_profiles tp ON sf.teacher_user_id = tp.user_id WHERE tp.department_id IS NOT NULL GROUP BY tp.department_id) dept_scores) ranked WHERE rn = 1 ORDER BY avg_feedback_score DESC, department_id ASC;
```

### ✅ PASS : EDUCATION_100 - Variance compare
```sql
WITH student_variance AS (SELECT sp.program_id, e.student_user_id, VARIANCE(e.attendance_percentage) AS attendance_variance FROM enrollments e JOIN student_profiles sp ON e.student_user_id = sp.user_id WHERE e.attendance_percentage IS NOT NULL GROUP BY sp.program_id, e.student_user_id), program_avg_variance AS (SELECT program_id, AVG(attendance_variance) AS avg_variance FROM student_variance GROUP BY program_id) SELECT sv.student_user_id, sv.program_id, ROUND(sv.attendance_variance, 2) AS attendance_variance FROM student_variance sv JOIN program_avg_variance pav ON sv.program_id = pav.program_id WHERE sv.attendance_variance < pav.avg_variance;
```

