"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader2, Pill, Stethoscope, User2, Users } from "lucide-react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CardDataStats from "@/components/CardDataStats";
import ChartOne from "@/components/Dashboard/ChartOne";
import ChartTwo from "@/components/Dashboard/ChartTwo";
import ChartThree from "@/components/Dashboard/ChartThree";
import ChartFour from "@/components/Dashboard/ChartFour";
import ChartFive from "@/components/Dashboard/ChartFive";
import ChartSix from "@/components/Dashboard/ChartSix";
import ChartSeven from "@/components/Dashboard/ChartSeven";
import ChartEight from "@/components/Dashboard/ChartEight";
import ChartNine from "@/components/Dashboard/ChartNine";

const FHIR_URL = process.env.NEXT_PUBLIC_FHIR_URL;

export default function Home() {
  const [data, setData] = useState<any>([]);
  const [ageData, setAgeData] = useState<any>([]);
  const [raceData, setRaceData] = useState<any>([]);
  const [popularMedication, setPopularMedication] = useState<string>("");
  const [practitionerCount, setPractitionerCount] = useState<number>(0);
  const [maxAgeRange, setMaxAgeRange] = useState<string>("");
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
      try {
        setIsLoading(true);
        const data = await axios.get(`${FHIR_URL}/Patient`);
        data.data.patients
          .map((data: any) => {
            return {
              value: data.GENDER ?? "unspecified",
            };
          })
          .map((data: any) => {
            if (data.value == "M") {
              maleCount.value++;
            } else if (data.value == "F") {
              femaleCount.value++;
            }
          });
        maleCount.value = (maleCount.value / data.data.patients.length) * 100;
        femaleCount.value =
          (femaleCount.value / data.data.patients.length) * 100;

        setData([maleCount, femaleCount, data.data.patients.length]);

        const ageCounts: { [key: string]: number } = {
          "2-16": 0,
          "17-30": 0,
          "31-45": 0,
          "46-65": 0,
          "65+": 0,
        };

        const raceCounts: { [key: string]: number } = {
          White: 0,
          Black: 0,
          Asian: 0,
          Other: 0,
        };

        data.data.patients.forEach((entry: any) => {
          const birthYear = entry.BIRTHDATE
            ? parseInt(entry.BIRTHDATE.slice(0, 4))
            : undefined;
          const race = entry.RACE;
          if (birthYear) {
            const age = 2024 - birthYear;
            if (age <= 16) {
              ageCounts["2-16"]++;
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

          if (race == "white") {
            raceCounts["White"]++;
          } else if (race == "black") {
            raceCounts["Black"]++;
          } else if (race == "asian") {
            raceCounts["Asian"]++;
          } else {
            raceCounts["Other"]++;
          }
        });

        const practitionersData = await axios.get(`${FHIR_URL}/Practitioner`);

        let maxValue = 0;
        let maxAgeRange = "";
        for (const ageRange in ageCounts) {
          if (ageCounts.hasOwnProperty(ageRange)) {
            const count = ageCounts[ageRange];
            if (count > maxValue) {
              maxValue = count;
              maxAgeRange = ageRange;
            }
          }
        }
        setMaxAgeRange(maxAgeRange);
        setAgeData(Object.entries(ageCounts));
        setRaceData(Object.entries(raceCounts));
        setPractitionerCount(practitionersData.data.practitioners.length);
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
            <CardDataStats title="Total Patients" total={data[2]}>
              <Users className="text-primary" />
            </CardDataStats>

            <CardDataStats
              title="Most Prescribed Medication"
              total={popularMedication}
            >
              <Pill className="text-primary" />
            </CardDataStats>

            <CardDataStats title="Majority Age Group" total={maxAgeRange}>
              <User2 className="text-primary" />
            </CardDataStats>

            <CardDataStats
              title="Total Practitioners"
              total={practitionerCount + ""}
            >
              <Stethoscope className="text-primary" />
            </CardDataStats>
          </div>
        )}

        {isLoading && <Loader2 className="m-16 h-16 w-16 animate-spin" />}

        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
          {/* @ts-ignore */}
          {!isLoading && <ChartOne data={data} isLoading={isLoading} />}

          {!isLoading && (
            //@ts-ignore
            <ChartTwo setPopularMedication={setPopularMedication} />
          )}

          {!isLoading && (
            //@ts-ignore
            <ChartThree raceData={raceData} isLoading={isLoading} />
          )}

          {!isLoading && <ChartFour />}

          {!isLoading && <ChartFive />}

          {/* @ts-ignore */}
          {!isLoading && <ChartSix ageData={ageData} isLoading={isLoading} />}

          {!isLoading && <ChartSeven />}

          {!isLoading && <ChartEight />}

          {!isLoading && <ChartNine />}
        </div>
      </DefaultLayout>
    </>
  );
}
