import { Router } from "express";
import { enrollCustomer } from "../controllers/enrollments.controllers.js";
import { validateBody } from "../middlewares/schemas.validation.js";
import { enrollmentSchema } from "../schemas/enrollment.schema.js";

const enrollmentsRouter: Router = Router();

enrollmentsRouter.post(
  "/enroll",
  validateBody(enrollmentSchema, "validEnrollment"),
  enrollCustomer
);

export { enrollmentsRouter };
