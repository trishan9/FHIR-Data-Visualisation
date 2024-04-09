"use client";
import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { DataTable } from "@/app/(administration)/patient/_components/data-table";
import { columns } from "@/app/(administration)/patient/_components/columns";
import axios from "axios";

const FHIR_URL = process.env.NEXT_PUBLIC_FHIR_URL;

const Patient: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await axios.get(`${FHIR_URL}/Patient?_count=10000`);
        setData(
          data.data.entry
            .filter(
              (data: any) =>
                data.resource.name !=
                "FirstNamede35913d-e34f-4a02-983e-ba5d3f30fd21 MiddleName2d6399d1-a457-4d36-ac2d-b4b1160558ce",
            )
            .filter((entry: any) => entry.resource.name?.[0].given),
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
      <h2 className="mb-6 text-2xl font-semibold">Patient Table</h2>

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

export default Patient;
