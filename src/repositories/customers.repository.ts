import connectionDB from "../database/connectionDB.js";
import Customer from "../protocols/customer.js";

async function insertCustomer(customer: Customer) {
  const {rows} = await connectionDB.query(
    `
         INSERT INTO "customers" ("name", "cpf", "email") 
         VALUES ($1, $2, $3) RETURNING name as customer_name;`,
    [customer.name, customer.cpf, customer.email]
  );
  return rows[0].customer_name;
}

export const customersRepository = {
  insertCustomer,
};
