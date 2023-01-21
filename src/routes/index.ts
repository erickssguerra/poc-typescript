import { Router } from "express";
import { customersRouter } from "./customers.routes.js";
import { enrollmentsRouter } from "./enrollments.routes.js";

const router: Router = Router();
router.use(customersRouter);
router.use(enrollmentsRouter);

export default router;