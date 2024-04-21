import { db } from "@/lib/db";
import { Request, Response } from "express";

const getConditions = async (req: Request, res: Response) => {
  try {
    const conditions = await db.conditions.findMany({
      take: 500
    });
    res.json({
      success: true,
      conditions,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

export default { getConditions };
