import { db } from "@/lib/db";
import { Request, Response } from "express";

const getPatients = async (req: Request, res: Response) => {
  try {
    const patients = await db.patients.findMany({
      // skip: 0,
      // take: 10,
    });
    res.json({
      success: true,
      patients,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

export default { getPatients };
