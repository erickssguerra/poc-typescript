import connectionDB from "../database/connectionDB.js";
import { Enrollment, EnrollmentDetails } from "../protocols/enrollment.js";

async function enroll(enrollment: Enrollment) {
  const { rows } = await connectionDB.query(
    `
      WITH enrolled_customer as (
        INSERT INTO "enrollments" ("customer_id", "course_id") 
        VALUES ($1, $2) RETURNING * ) 
    SELECT
        customers.name AS customer,
        courses.name AS course
    FROM enrolled_customer
    JOIN customers ON enrolled_customer.customer_id = customers.id
    JOIN courses ON enrolled_customer.course_id = courses.id;`,
    [enrollment.customer_id, enrollment.course_id]
  );
  return rows[0] as EnrollmentDetails;
}

export const enrollmentsRepository = {
  enroll,
};
