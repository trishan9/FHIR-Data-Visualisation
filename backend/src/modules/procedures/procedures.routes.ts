import { Router } from "express";

import ProceduresController from "./procedures.controller";

const proceduresRouter = Router();

proceduresRouter.get("/", ProceduresController.getProcedures);

export default proceduresRouter;
