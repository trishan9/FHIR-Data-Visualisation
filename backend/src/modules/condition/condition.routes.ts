import { Router } from "express";

import ConditionController from "./condition.controller";

const conditionRouter = Router();

conditionRouter.get("/", ConditionController.getConditions);

export default conditionRouter;
