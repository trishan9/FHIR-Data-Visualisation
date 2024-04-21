import { Router } from "express";

import AllergiesController from "./allergies.controller";

const allergiesRouter = Router();

allergiesRouter.get("/", AllergiesController.getAllergies);

export default allergiesRouter;
