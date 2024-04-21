import { Router } from "express";

import SuppliesController from "./supplies.controller";

const suppliesRouter = Router();

suppliesRouter.get("/", SuppliesController.getSupplies);

export default suppliesRouter;
