import { NextFunction, Request, Response } from "express";
import { CustomersRank } from "../protocols/customers-rank.js";
import { customersRepository } from "../repositories/customers.repository.js";

export async function customerExists(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> {
  const { customer_id } = req.params;
  if (!Number(customer_id) || Number(customer_id) <= 0) {
    return res
      .status(500)
      .send({ message: "Customer_id must be a valid number!" });
  } else {
    try {
      await customersRepository.checkCustomer(Number(customer_id));
      res.locals.customerExists = customer_id;
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: err.detail });
    }
  }
  next();
}

export async function sortCustomersRank(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> {
  const { top } = res.locals.topQuery;

  if (!Number(top)) {
    try {
      const rank: CustomersRank[] = await customersRepository.getFullRank();
      res.locals.rank = rank;
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  }

  if (Number(top)) {
    try {
      const rank: CustomersRank[] = await customersRepository.getRankByTop(
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
