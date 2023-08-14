import Joi from 'joi';

export const model_schema = Joi.object({
  name: Joi.string().min(4).max(128).required(),
  picture: Joi.string().uri({ scheme: ['http', 'https'] }).max(128).required(),
  description: Joi.string().min(16).max(512).required(),
})

export const available_schema = Joi.object({
  available: Joi.boolean().required()
})