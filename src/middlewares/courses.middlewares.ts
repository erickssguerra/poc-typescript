import { NextFunction, Request, Response } from "express";
import { Rank } from "../protocols/rank.js";
import { coursesRepository } from "../repositories/courses.repository.js";

export async function sortRank(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<Rank>> {
  const { top } = req.query;
  if (!top || Number(top) === 0) {
    try {
      const rank: Rank[] = await coursesRepository.getFullRank();
      res.locals.rank = rank;
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }

  if ((!Number(top) && top && Number(top) !== 0) || Number(top) < 0) {
    return res
      .status(500)
      .send({ message: "Query parameter must be a valid number!" });
  }
  if (Number(top)) {
    try {
      const rank: Rank[] = await coursesRepository.getRankByTop(Number(top));
      res.locals.rank = rank;
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  }
  next();
}

export async function sortCourses(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { customer_id } = req.params;
  try {
    const courses = await coursesRepository.filterByCustomer(
      Number(customer_id)
    );
    res.locals.courses = courses;
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.detail });
  }
  next();
}
