import joi, { ObjectSchema } from "joi";

export const topQuerySchema: ObjectSchema = joi.object({
  top: joi.number().min(0),
});
