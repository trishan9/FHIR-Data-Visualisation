import { db } from "@/lib/db";
import { Request, Response } from "express";

const getEncounters = async (req: Request, res: Response) => {
  try {
    const encounters = await db.encounters.findMany({
      take: 500
    });
    res.json({
      success: true,
      encounters,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

export default { getEncounters };
