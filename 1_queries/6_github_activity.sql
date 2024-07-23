SELECT name, email, phone
from students
WHERE end_date IS NOT NULL AND github IS NULL;