import connectionDB from "../database/connectionDB.js";
import Customer from "../protocols/customer.js";

async function insertCustomer(customer: Customer) {
  const { rows } = await connectionDB.query(
    `
         INSERT INTO "customers" ("name", "cpf", "email") 
         VALUES ($1, $2, $3) RETURNING name as customer_name;`,
    [customer.name, customer.cpf, customer.email]
  );
  return rows[0].customer_name;
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

export const customersRepository = {
  insertCustomer,
  checkCustomer,
};
