import { db } from "@/lib/db";
import { Request, Response } from "express";

const getMedications = async (req: Request, res: Response) => {
  try {
    const medications = await db.medications.findMany({
      take: 500
    });
    res.json({
      success: true,
      medications,
      
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

export default { getMedications };
