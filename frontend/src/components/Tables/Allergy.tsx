"use client";

import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { DataTable } from "@/components/Tables/data-table";
import { columns } from "@/app/(clinical)/allergy/_components/columns";

const FHIR_URL = process.env.NEXT_PUBLIC_FHIR_URL;

const Allergy: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await axios.get(`${FHIR_URL}/Allergies`);
        setData(
          data.data.allergies.map((allergy: any) => {
            return {
              resource: allergy,
            };
          }),
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h2 className="mb-6 text-2xl font-semibold">Allergy Table</h2>

      {isLoading && (
        <div className="my-12 flex w-full items-center justify-center">
          <Loader2 className="h-16 w-16 animate-spin" />
        </div>
      )}

      {data?.length && !isLoading && (
        <DataTable columns={columns} data={data} />
      )}
    </>
  );
};

export default Allergy;
