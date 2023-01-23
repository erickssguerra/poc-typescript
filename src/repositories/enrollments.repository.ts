import connectionDB from "../database/connectionDB.js";
import { Enrollment, EnrollmentDetails } from "../protocols/enrollment.js";

async function enroll(enrollment: Enrollment): Promise<EnrollmentDetails> {
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
  const confirmation: EnrollmentDetails = rows[0];
  return confirmation;
}

async function unenroll(unerollment: Enrollment): Promise<EnrollmentDetails> {
  await connectionDB.query(`
  DO $$
  BEGIN
    IF NOT EXISTS (SELECT * FROM customers WHERE customers.id = ${unerollment.customer_id} ) THEN
      RAISE USING DETAIL = 'customer_id not found';
    ELSE 
      IF NOT EXISTS (SELECT * FROM courses WHERE courses.id = ${unerollment.course_id}) THEN
        RAISE USING DETAIL = 'course_id not found';
      END IF;
    END IF;
  END $$;`);

  const { rows } = await connectionDB.query(
    `
    WITH enrolled_customer as (
      DELETE FROM "enrollments" 
      WHERE "customer_id" = $1 AND "course_id" = $2 
      RETURNING * ) 
    SELECT
      customers.name AS customer,
      courses.name AS course
    FROM enrolled_customer
    JOIN customers ON enrolled_customer.customer_id = customers.id
    JOIN courses ON enrolled_customer.course_id = courses.id;
    ;`,
    [unerollment.customer_id, unerollment.course_id]
  );
  const confirmation: EnrollmentDetails = rows[0];
  if (!confirmation) {
    throw {
      detail: `The customer is not enrolled in this course.`,
    };
  }
  return confirmation;
}

export const enrollmentsRepository = {
  enroll,
  unenroll,
};
