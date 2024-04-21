import { db } from "@/lib/db";
import { Request, Response } from "express";

const getOrganizations = async (req: Request, res: Response) => {
  try {
    const organizations = await db.organizations.findMany();
    res.json({
      success: true,
      organizations,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

export default { getOrganizations };
