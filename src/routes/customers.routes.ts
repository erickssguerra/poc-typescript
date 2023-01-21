import { Router } from "express";
import { registerCustomer } from "../controllers/customers.controllers.js";
import { validateBody } from "../middlewares/schemas.validation.js";
import { customerSchema } from "../schemas/customer.schema.js";

const customersRouter: Router = Router();

customersRouter.post("/register", validateBody(customerSchema, "validatedCustomer") , registerCustomer )

export { customersRouter };