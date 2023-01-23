import connectionDB from "../database/connectionDB.js";
import { Customer, EmailUpdateForm } from "../protocols/customer.js";
import { CustomersRank } from "../protocols/customers-rank.js";

async function insertCustomer(customer: Customer): Promise<string> {
  const { rows } = await connectionDB.query(
    `
         INSERT INTO "customers" ("name", "cpf", "email") 
         VALUES ($1, $2, $3) RETURNING name as customer_name;`,
    [customer.name, customer.cpf, customer.email]
  );
  const name: string = rows[0].customer_name;
  return name;
}

async function checkCustomer(customer_id: number): Promise<boolean> {
  const { rowCount } = await connectionDB.query(
    `
  SELECT * FROM "customers" WHERE customers.id = $1;`,
    [customer_id]
  );
  const customerExists = Boolean(rowCount);
  if (customerExists) {
    return true;
  } else {
    throw { detail: `Costumer not found` };
  }
}

async function getFullRank(): Promise<CustomersRank[]> {
  const { rows } = await connectionDB.query(`
  SELECT 
    customers.name AS customer,
    COALESCE(COUNT(enrollments.course_id),0) AS courses
  FROM customers
  LEFT JOIN enrollments ON enrollments.customer_id = customers.id
  GROUP BY customers.name
  ORDER BY courses DESC;
  ;`);
  const rank: CustomersRank[] = rows;
  return rank;
}

async function getRankByTop(top: number): Promise<CustomersRank[]> {
  const { rows } = await connectionDB.query(
    `
  SELECT 
    customers.name AS customer,
    COALESCE(COUNT(enrollments.course_id),0) AS courses
  FROM customers
  LEFT JOIN enrollments ON enrollments.customer_id = customers.id
  GROUP BY customers.name
  ORDER BY courses DESC
  LIMIT $1;
  ;`,
    [top]
  );
  const rank: CustomersRank[] = rows;
  return rank;
}

async function updateEmail(emailForm: EmailUpdateForm): Promise<string> {
  const { rows } = await connectionDB.query(
    `
  UPDATE customers
  SET email = $1
  WHERE email = $2
  RETURNING name;
  ;`,
    [emailForm.new_email, emailForm.previous_email]
  );
  const name: string = rows[0]?.name;
  if (!name) {
    throw { detail: `There's no ${emailForm.previous_email} registered.` };
  }
  return name;
}

export const customersRepository = {
  insertCustomer,
  checkCustomer,
  getFullRank,
  getRankByTop,
  updateEmail,
};
