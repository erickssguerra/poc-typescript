import joi from "joi";

export const topQuerySchema = joi.object({
    top: joi.number().min(0)
});