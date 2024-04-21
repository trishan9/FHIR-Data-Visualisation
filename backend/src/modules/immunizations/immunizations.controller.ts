import { db } from "@/lib/db";
import { Request, Response } from "express";

const getImmunizations = async (req: Request, res: Response) => {
  try {
    const immunizations = await db.immunizations.findMany({
      take: 500
    });
    res.json({
      success: true,
      immunizations,
      
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

export default { getImmunizations };
