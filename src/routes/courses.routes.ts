import { Router } from "express";
import { getRank } from "../controllers/courses.controllers.js";
import { sortRank } from "../middlewares/courses.middlewares.js";

const coursesRouter = Router();

coursesRouter.get("/rank", sortRank, getRank);

export { coursesRouter };
