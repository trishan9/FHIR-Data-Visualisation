import { db } from "@/lib/db";
import { Request, Response } from "express";

const getPractitioners = async (req: Request, res: Response) => {
  try {
    const practitioners = await db.providers.findMany({take: 1000});
    res.json({
      success: true,
      practitioners,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

export default { getPractitioners };
