import { db } from "@/lib/db";
import { Request, Response } from "express";

const getProcedures = async (req: Request, res: Response) => {
  try {
    const procedures = await db.procedures.findMany({
      take: 500
    });
    res.json({
      success: true,
      procedures,
      
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

export default { getProcedures };
