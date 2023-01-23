import joi, { ObjectSchema } from "joi";

export const enrollmentSchema: ObjectSchema = joi.object({
  customer_id: joi.number().required(),
  course_id: joi.number().required(),
});
