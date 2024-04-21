import { Router } from "express";

import MedicationsController from "./medication.controller";

const medicationsRouter = Router();

medicationsRouter.get("/", MedicationsController.getMedications);

export default medicationsRouter;
