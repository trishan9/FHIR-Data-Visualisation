import { db } from "@/lib/db";
import { Request, Response } from "express";

const getAllergies = async (req: Request, res: Response) => {
  try {
    const allergies = await db.allergies.findMany({
      take: 500
    });
    res.json({
      success: true,
      allergies,
      
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

export default { getAllergies };
