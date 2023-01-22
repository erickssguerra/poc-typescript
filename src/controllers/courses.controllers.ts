import { Request, Response } from "express";

export async function getRank(req: Request, res: Response) {
  const { top } = req.query;
}
