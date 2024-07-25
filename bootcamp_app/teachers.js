const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx"
});

const cohortName = process.argv[2];
const values = [`%${cohortName}%`];

const queryString = `
  SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM assistance_requests
  JOIN teachers ON assistance_requests.teacher_id = teachers.id
  JOIN students ON assistance_requests.student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
  WHERE cohorts.name LIKE $1
  ORDER BY teacher;
`;

pool.query(queryString, values)
  .then((res) => {
    res.rows.forEach((row) => {
      console.log(`${row.cohort}: ${row.teacher}`);
    });
  })
  .catch((err) => console.error("query error", err.stack));
