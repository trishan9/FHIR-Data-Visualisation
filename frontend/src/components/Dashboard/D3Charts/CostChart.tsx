import React, { useEffect, useState } from "react";
import axios from "axios";
import AreaChart from "./AreaChart";

const FHIR_URL = process.env.NEXT_PUBLIC_FHIR_URL;

const CostChart = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCostData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${FHIR_URL}/Claim`);
        const claimEntries = response.data.claims;

        const transformedData = claimEntries.map((entry: any) => ({
          id: entry.ID,
          created: entry.FROMDATE,
          total: entry.AMOUNT || entry.PAYMENTS,
        }));

        setData(
          transformedData
            .filter((data: any) => data.total > 0 && data.created)
            .sort((a: any, b: any) => a.created.localeCompare(b.created))
            .slice(70),
        );
      } catch (error) {
        console.error("Error fetching claim data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getCostData();
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
