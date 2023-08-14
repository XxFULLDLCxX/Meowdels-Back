import { createModel, readModelDetailsById, readModelsAvailables, readModelsByUserId, updateModelAvailabilityById } from '../repository/models.repository.js';
import { available_schema } from '../schemas/models.schemas.js';

export const postModels = async (req, res) => {
  try {
    const { name, picture, description, userId } = res.locals;
    await createModel(name, picture, description, userId);
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getModelsByUserId = async (req, res) => {
  try {
    const { userId } = res.locals;
    const { rows: models } = await readModelsByUserId(userId);
    res.send(models);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


export const getModelsAvailables = async (req, res) => {
  try {
    const { rows: models } = await readModelsAvailables();
    res.send(models);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getModelDetailsById = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows: [models] } = await readModelDetailsById(id);
    res.send(models);

  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const postModelAvailabilityById = async (req, res) => {
  try {
    const { id, available, userId } = { ...res.locals, ...req.params };
    const validation = available_schema.validate({ available })
    if (validation.error) {
      const error = validation.error.details[0].message;
      return res.status(400).send(error);
    }

    await updateModelAvailabilityById(userId, id, available);
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
