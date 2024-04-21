import { Router } from "express";

import PractitionerController from "./practitioner.controller";

const practitionerRouter = Router();

practitionerRouter.get("/", PractitionerController.getPractitioners);

export default practitionerRouter;
