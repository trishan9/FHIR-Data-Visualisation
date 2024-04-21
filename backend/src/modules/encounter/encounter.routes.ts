import { Router } from "express";

import EncounterController from "./encounter.controller";

const encounterRouter = Router();

encounterRouter.get("/", EncounterController.getEncounters);

export default encounterRouter;
