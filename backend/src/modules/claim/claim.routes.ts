import { Router } from "express";

import ClaimController from "./claim.controller";

const claimRouter = Router();

claimRouter.get("/", ClaimController.getClaims);

export default claimRouter;
