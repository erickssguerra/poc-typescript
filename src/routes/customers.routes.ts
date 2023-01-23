import { Router } from "express";
import {
  getCustomersRank,
  registerCustomer,
  updateCustomer,
} from "../controllers/customers.controllers.js";
import { sortCustomersRank } from "../middlewares/customers.middleware.js";
import {
  validateBody,
  validateQuery,
} from "../middlewares/schemas.validation.js";
import { customerSchema, emailSchema } from "../schemas/customer.schema.js";
import { topQuerySchema } from "../schemas/top-query.schema.js";

const customersRouter: Router = Router();

customersRouter.post(
  "/register",
  validateBody(customerSchema, "validatedCustomer"),
  registerCustomer
);
customersRouter.get(
  "/rank/customers",
  validateQuery(topQuerySchema, "topQuery"),
  sortCustomersRank,
  getCustomersRank
);

customersRouter.put(
  "/update/email",
  validateBody(emailSchema, "validatedEmail"),
  updateCustomer
);

export { customersRouter };
