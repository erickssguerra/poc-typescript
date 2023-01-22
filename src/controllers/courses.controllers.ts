import { Request, Response } from "express";
import { Rank } from "../protocols/rank";

export function getRank(req: Request, res: Response) {
  const rank: Rank[] = res.locals.rank;
  return res.status(200).send(rank);
}

export function getByCostumerId(req: Request, res: Response) {
  const courses: string[] = res.locals.courses;
  return res.status(200).send(courses);
}
