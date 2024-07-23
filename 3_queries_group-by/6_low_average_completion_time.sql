SELECT students.name AS student, AVG(assignment_submissions.duration) AS average_completion_time, AVG(assignments.duration) AS average_suggested_time
FROM students
JOIN assignment_submissions ON students.id = assignment_submissions.student_id
JOIN assignments ON assignment_submissions.assignment_id = assignments.id
WHERE students.end_date IS NULL
GROUP BY students.name
HAVING AVG(assignment_submissions.duration) < AVG(assignments.duration)
ORDER BY average_completion_time;
