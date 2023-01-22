import { Router } from "express";
import { coursesRouter } from "./courses.routes.js";
import { customersRouter } from "./customers.routes.js";
import { enrollmentsRouter } from "./enrollments.routes.js";

const router: Router = Router();
router.use(customersRouter);
router.use(enrollmentsRouter);
router.use(coursesRouter);

export default router;
