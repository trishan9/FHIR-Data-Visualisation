import { db } from "@/lib/db";
import { Request, Response } from "express";

const getObservations = async (req: Request, res: Response) => {
  try {
    const { type } = req.query;
    const observations = await db.observations.findMany({
      take: 5500,
      where: {
        CATEGORY: {
          in: ["vital-signs", "laboratory", "survey"]
        }
      }
    });

    let observationsData = observations;
    if (type == "laboratory") {
      observationsData = observations.filter(
        (observation) => observation.CATEGORY == "laboratory"
      );
    } else if (type == "vital-signs") {
      observationsData = observations.filter(
        (observation) => observation.CATEGORY == "vital-signs"
      );
    } else if (type == "survey") {
      observationsData = observations.filter(
        (observation) => observation.CATEGORY == "survey"
      );
    }

    res.json({
      success: true,
      observations: observationsData,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

export default { getObservations };
