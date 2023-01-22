import { Router } from "express";
import { getRank } from "../controllers/courses.controllers.js";

const coursesRouter = Router();

coursesRouter.get("/rank", getRank)

export default coursesRouter;
