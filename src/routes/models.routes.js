import { Router } from "express";
import { getModelDetailsById, getModelsAvailables, getModelsByUserId, postModelAvailabilityById, postModels } from '../controllers/models.controller.js';
import { validateAuth } from '../middlewares/auth.validate.js';
import { validateSchema } from "../middlewares/schema.validate.js";
import { model_schema } from '../schemas/models.schemas.js';

const models_router = Router();
models_router.get("/models", validateAuth, getModelsAvailables);
models_router.get("/models/manage", validateAuth, getModelsByUserId);
models_router.get("/models/:id/details", validateAuth, getModelDetailsById);
models_router.post("/models", validateAuth, validateSchema(model_schema), postModels);
models_router.post("/models/:id/:available", validateAuth, postModelAvailabilityById);
export default models_router;
