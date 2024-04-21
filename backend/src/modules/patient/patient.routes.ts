import { Router } from "express";

import PatientController from "./patient.controller";

const patientRouter = Router();

patientRouter.get("/", PatientController.getPatients);

export default patientRouter;
