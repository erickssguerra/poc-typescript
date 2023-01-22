import joi from "joi";

export const enrollmentSchema = joi.object({
    customer_id: joi.number().required(),
    course_id: joi.number().required()
});