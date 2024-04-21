import { db } from "@/lib/db";
import { Request, Response } from "express";

const getCareplans = async (req: Request, res: Response) => {
  try {
    const careplans = await db.careplans.findMany({
      take: 500
    });
    res.json({
      success: true,
      careplans,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

export default { getCareplans };
