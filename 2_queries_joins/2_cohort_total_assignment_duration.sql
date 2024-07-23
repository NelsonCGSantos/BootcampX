SELECT SUM(assignment_submissions.duration) AS total_duration 
FROM students
JOIN assignment_submissions ON students.id = assignment_submissions.student_id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = 'FEB12';