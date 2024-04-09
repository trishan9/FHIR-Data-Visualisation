import React, { useEffect, useState } from "react";
import axios from "axios";
import AreaChart from "./AreaChart";

const FHIR_URL = process.env.NEXT_PUBLIC_FHIR_URL;

const CostChart = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getMedicationData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${FHIR_URL}/Claim?_count=10000`);
        const claimEntries = response.data.entry;

        const transformedData = claimEntries.map((entry: any) => ({
          id: entry.resource.id,
          created: entry.resource.created,
          total: entry.resource.total,
        }));

        setData(
          transformedData
            .filter((data: any) => data.total?.value > 0 && data.created)
            .sort((a: any, b: any) => a.created.localeCompare(b.created))
            .slice(70),
        );
      } catch (error) {
        console.error("Error fetching claim data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getMedicationData();
  }, []);

  return (
    <div className="flex items-center gap-16">
      <div className="w-full">
        {isLoading ? (
          <div className="ml-4">Loading...</div>
        ) : (
          <AreaChart data={data} />
        )}
      </div>
    </div>
  );
};

export default CostChart;
