import { Request, Response } from "express";

export function registerCustomer(req: Request, res: Response){
    const customer = res.locals.validatedCustomer
    res.send(customer)
}