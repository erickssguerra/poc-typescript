import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export function validateBody(schema: ObjectSchema, parameter: string) {
  return validate(schema, "body", parameter);
}

export function validateQuery(schema: ObjectSchema, parameter: string) {
  return validate(schema, "query", parameter);
}

export function validateParams(schema: ObjectSchema, parameter: string) {
  return validate(schema, "params", parameter);
}

function validate(schema: ObjectSchema, type: string, parameter: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type], { abortEarly: false });

    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }
    res.locals[parameter] = req[type];
    next();
  };
}
