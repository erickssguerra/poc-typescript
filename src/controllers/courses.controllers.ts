import { Request, Response } from "express";
import { CoursesRank } from "../protocols/courses-rank";

export function getCoursesRank(req: Request, res: Response) {
  const rank: CoursesRank[] = res.locals.rank;
  return res.status(200).send(rank);
}

export function getByCostumerId(req: Request, res: Response) {
  const courses: string[] = res.locals.courses;
  return res.status(200).send(courses);
}
