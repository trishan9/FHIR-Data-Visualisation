import { db } from "@/lib/db";
import { Request, Response } from "express";

const getSupplies = async (req: Request, res: Response) => {
  try {
    const supplies = await db.supplies.findMany({
      take: 500
    });
    res.json({
      success: true,
      supplies,
      
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

export default { getSupplies };
