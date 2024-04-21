import { db } from "@/lib/db";
import { Request, Response } from "express";

const getClaims = async (req: Request, res: Response) => {
  try {
    const claims = await db.claims_transactions.findMany({
      take: 500,
      where: {
        FROMDATE: {
          gte: '2007-01-01',
        },
      },
    });
    res.json({
      success: true,
      claims,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

export default { getClaims };
