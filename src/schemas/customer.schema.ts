import joi from "joi";

export const customerSchema = joi.object({
    name: joi.string().required(),
    cpf: joi.string().required().length(11),
    email: joi.string().email().required()
});