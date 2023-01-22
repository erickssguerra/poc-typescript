import { NextFunction, Request, Response } from "express";
import { customersRepository } from "../repositories/customers.repository.js";

export async function customerExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
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
