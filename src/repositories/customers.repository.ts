import connectionDB from "../database/connectionDB.js";
import Customer from "../protocols/customer.js";

async function insertCustomer(customer: Customer) {
  const confirmation = await connectionDB.query(
    `
         INSERT INTO "customers" ("name", "cpf", "email") 
         VALUES ($1, $2, $3);`,
    [customer.name, customer.cpf, customer.email]
  );
  return confirmation.rowCount;
}

export const customersRepository = {
  insertCustomer,
};
