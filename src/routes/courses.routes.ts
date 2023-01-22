import { Router } from "express";
import {
  getByCostumerId,
  getRank,
} from "../controllers/courses.controllers.js";
import { sortRank, sortCourses } from "../middlewares/courses.middlewares.js";
import { customerExists } from "../middlewares/costumers.middleware.js";

const coursesRouter = Router();

coursesRouter.get("/rank", sortRank, getRank);
coursesRouter.get(
  "/courses/:customer_id",
  customerExists,
  sortCourses,
  getByCostumerId
);

export { coursesRouter };
