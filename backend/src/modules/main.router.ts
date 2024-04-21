import { Router } from "express";

import authRouter from "./auth/auth.routes";
import patientRouter from "./patient/patient.routes";
import encounterRouter from "./encounter/encounter.routes";
import claimRouter from "./claim/claim.routes";
import conditionRouter from "./condition/condition.routes";
import practitionerRouter from "./practitioner/practitioner.routes";
import organizationRouter from "./organization/organization.routes";
import careplanRouter from "./careplan/careplan.routes";
import allergiesRouter from "./allergies/allergies.routes";
import medicationsRouter from "./medication/medication.routes";
import immunizationsRouter from "./immunizations/immunizations.routes";
import observationsRouter from "./observations/observations.routes";
import proceduresRouter from "./procedures/procedures.routes";
import suppliesRouter from "./supplies/supplies.routes";

const router = Router();

router.use("/auth", authRouter);

router.use("/Claim", claimRouter);
router.use("/Condition", conditionRouter);
router.use("/Encounter", encounterRouter);
router.use("/Patient", patientRouter);
router.use("/Practitioner", practitionerRouter);
router.use("/Organization", organizationRouter);
router.use("/CarePlan", careplanRouter);
router.use("/Allergies", allergiesRouter);
router.use("/Medications", medicationsRouter);
router.use("/Immunizations", immunizationsRouter);
router.use("/Observations", observationsRouter);
router.use("/Procedures", proceduresRouter);
router.use("/Supplies", suppliesRouter);

export default router;
