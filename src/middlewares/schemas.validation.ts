import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export function validateBody(schemaParam: ObjectSchema, parameter: string) {
    return validate(schemaParam, "body", parameter);
};

export function validateParams(schemaParam: ObjectSchema, parameter: string) {
    return validate(schemaParam, "params", parameter);
};

function validate(schema: ObjectSchema, type: string, parameter: string ) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[type], { abortEarly: false });
    
        if (error) {
            const errors = error.details.map((detail)=> detail.message);
            return res.status(422).send(errors);
        }
        res.locals[parameter] = req[type];
        next();
    }
}