import { Router } from "express";

import OrganizationController from "./organization.controller";

const organizationRouter = Router();

organizationRouter.get("/", OrganizationController.getOrganizations);

export default organizationRouter;
