import { Router } from "express";

import ImmunizationsController from "./immunizations.controller";

const immunizationsRouter = Router();

immunizationsRouter.get("/", ImmunizationsController.getImmunizations);

export default immunizationsRouter;
