import { Router } from "express";
import auth_router from './auth.routes.js';

export const routes = Router();
routes.use(auth_router)
