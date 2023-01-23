import { NextFunction, Request, Response } from "express";
import { CoursesRank } from "../protocols/courses-rank.js";
import { coursesRepository } from "../repositories/courses.repository.js";

export async function sortCoursesRank(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<CoursesRank>> {
  const { top } = res.locals.topQuery;

  if (!Number(top)) {
    try {
      const rank: CoursesRank[] = await coursesRepository.getFullRank();
      res.locals.rank = rank;
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  }

  if (Number(top)) {
    try {
      const rank: CoursesRank[] = await coursesRepository.getRankByTop(
        Number(top)
      );
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
): Promise<Response<CoursesRank[]>> {
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
