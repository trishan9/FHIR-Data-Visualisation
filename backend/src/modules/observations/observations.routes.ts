import { Router } from "express";

import ObservationsController from "./observations.controller";

const observationsRouter = Router();

observationsRouter.get("/", ObservationsController.getObservations);

export default observationsRouter;
