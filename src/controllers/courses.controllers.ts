import { Request, Response } from "express";
import { Rank } from "../protocols/rank";

export async function getRank(req: Request, res: Response) {
  const rank: Rank[] = res.locals.rank;
  return res.status(200).send(rank);
}
