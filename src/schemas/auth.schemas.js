import Joi from 'joi';

export const signup_schema = Joi.object({
  name: Joi.string().min(4).max(40).required(),
  cpf: Joi.string().length(11).pattern(/^\d+$/).required(),
  phone: Joi.string().min(10).max(11).pattern(/^\d+$/).required(),
  email: Joi.string().email().max(128).required(),
  password: Joi.string().min(3).required(),
})

export const signin_schema = Joi.object({
  email: Joi.string().email().max(128).required(),
  password: Joi.string().min(3).required()
})
