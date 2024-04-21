import { Router } from "express";

import CareplanController from "./careplan.controller";

const careplanRouter = Router();

careplanRouter.get("/", CareplanController.getCareplans);

export default careplanRouter;
