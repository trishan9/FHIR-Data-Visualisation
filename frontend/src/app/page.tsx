"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader2, Pill, Stethoscope, User2, Users } from "lucide-react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChartOne from "@/components/Charts/ChartOne";
import ChartTwo from "@/components/Charts/ChartTwo";
import ChartThree from "@/components/Charts/ChartThree";
import ChartFour from "@/components/Charts/ChartFour";
import CardDataStats from "@/components/CardDataStats";
import ChartFive from "@/components/Charts/ChartFive";
import ChartSix from "@/components/Charts/ChartSix";

const FHIR_URL = process.env.NEXT_PUBLIC_FHIR_URL;

export default function Home() {
  const [data, setData] = useState<any>([]);
  const [ageData, setAgeData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      return redirect("/auth/signin");
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      const maleCount = { key: "male", value: 0 };
      const femaleCount = { key: "female", value: 0 };
      const unspecifiedCount = { key: "unspecified", value: 0 };
      try {
        setIsLoading(true);
        const data = await axios.get(`${FHIR_URL}/Patient?_count=10000`);
        data.data.entry
          .map((data: any) => {
            return {
              value: data.resource.gender ?? "unspecified",
            };
          })
          .map((data: any) => {
            if (data.value == "male") {
              maleCount.value++;
            } else if (data.value == "female") {
              femaleCount.value++;
            } else {
              unspecifiedCount.value++;
            }
          });
        maleCount.value = (maleCount.value / data.data.entry.length) * 100;
        femaleCount.value = (femaleCount.value / data.data.entry.length) * 100;
        unspecifiedCount.value =
          (unspecifiedCount.value / data.data.entry.length) * 100;
        setData([maleCount, femaleCount, unspecifiedCount]);
        console.log([maleCount, femaleCount, unspecifiedCount]);

        const ageCounts: { [key: string]: number } = {
          "0-2": 0,
          "3-16": 0,
          "17-30": 0,
          "31-45": 0,
          "46-65": 0,
          "65+": 0,
        };

        data.data.entry.forEach((entry: any) => {
          const birthYear = entry.resource.birthDate
            ? parseInt(entry.resource.birthDate.slice(0, 4))
            : undefined;
          if (birthYear) {
            const age = 2024 - birthYear;
            if (age <= 2) {
              ageCounts["0-2"]++;
            } else if (age <= 16) {
              ageCounts["3-16"]++;
            } else if (age <= 30) {
              ageCounts["17-30"]++;
            } else if (age <= 45) {
              ageCounts["31-45"]++;
            } else if (age <= 65) {
              ageCounts["46-65"]++;
            } else {
              ageCounts["65+"]++;
            }
          }
        });
        setAgeData(Object.entries(ageCounts));
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
      <DefaultLayout>
        <Breadcrumb pageName="Data Visualization" />

        {!isLoading && (
          <div className="grid-cols- 1 mb-8 grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <CardDataStats title="Total Patients" total="500">
              <Users className="text-primary" />
            </CardDataStats>

            <CardDataStats title="Most Prescribed Medication" total="-">
              <Pill className="text-primary" />
            </CardDataStats>

            <CardDataStats title="Majority Age Group" total="-">
              <User2 className="text-primary" />
            </CardDataStats>

            <CardDataStats title="Total Practitioners" total="500">
              <Stethoscope className="text-primary" />
            </CardDataStats>
          </div>
        )}

        {isLoading && <Loader2 className="m-16 h-16 w-16 animate-spin" />}

        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
          {!isLoading && <ChartOne />}
          {/* @ts-ignore */}
          {!isLoading && <ChartTwo data={data} isLoading={isLoading} />}

          {!isLoading && <ChartThree />}

          {/* @ts-ignore */}
          {!isLoading && <ChartFour ageData={ageData} isLoading={isLoading} />}

          {!isLoading && <ChartFive />}

          {!isLoading && <ChartSix />}
        </div>
      </DefaultLayout>
    </>
  );
}
