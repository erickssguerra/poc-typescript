import { Router } from "express";
import {
  getByCostumerId,
  getCoursesRank,
} from "../controllers/courses.controllers.js";
import {
  sortCoursesRank,
  sortCourses,
} from "../middlewares/courses.middlewares.js";
import { customerExists } from "../middlewares/customers.middleware.js";
import { validateQuery } from "../middlewares/schemas.validation.js";
import { topQuerySchema } from "../schemas/top-query.schema.js";

const coursesRouter: Router = Router();

coursesRouter.get(
  "/rank/courses",
  validateQuery(topQuerySchema, "topQuery"),
  sortCoursesRank,
  getCoursesRank
);
coursesRouter.get(
  "/courses/:customer_id",
  customerExists,
  sortCourses,
  getByCostumerId
);

export { coursesRouter };
