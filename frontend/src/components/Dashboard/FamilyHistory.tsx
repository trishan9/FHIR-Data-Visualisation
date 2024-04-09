"use client";
import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { DataTable } from "@/app/(administration)/patient/_components/data-table";
import { columns } from "@/app/(clinical)/family-history/_components/columns";
import axios from "axios";

const FHIR_URL = process.env.NEXT_PUBLIC_FHIR_URL;

const FamilyHistory: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await axios.get(
          `${FHIR_URL}/FamilyMemberHistory?_count=10000`,
        );
        setData(
          data.data.entry
            .filter((data: any) => data.resource.patient?.reference)
            .filter(
              (data: any) => data.resource.relationship?.coding?.[0]?.display,
            ),
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
      <h2 className="mb-6 text-2xl font-semibold">Family History Table</h2>

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

export default FamilyHistory;
