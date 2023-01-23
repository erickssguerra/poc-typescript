import joi from "joi";

export const customerSchema = joi.object({
  name: joi.string().required(),
  cpf: joi.string().required().length(11),
  email: joi.string().email().required(),
});

export const emailSchema = joi.object({
  previous_email: joi.string().email().required(),
  new_email: joi.string().email().required(),
});
