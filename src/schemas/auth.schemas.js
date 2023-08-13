import Joi from 'joi';

export const signup_schema = Joi.object({
  name: Joi.string().min(4).max(40).required(),
  email: Joi.string().email().max(128).required(),
  password: Joi.string().min(3).required(),
  phone: Joi.string().min(7).max(15).pattern(/^\+?\d{1,14}$/).required(),
  CPF: Joi.string().length(11).pattern(/^\d+$/).required(),
})

export const signin_schema = Joi.object({
  email: Joi.string().email().max(128).required(),
  password: Joi.string().min(3).required()
})
