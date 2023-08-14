import { Router } from 'express';
import auth_router from './auth.routes.js';
import models_router from './models.routes.js';

export const routes = Router();
routes.use(auth_router);
routes.use(models_router);
