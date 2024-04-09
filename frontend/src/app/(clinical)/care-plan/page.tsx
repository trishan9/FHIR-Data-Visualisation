"use client";

import CarePlan from "@/components/Dashboard/CarePlan";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { redirect } from "next/navigation";

export default function CarePlanPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout>
        <CarePlan />
      </DefaultLayout>
    </>
  );
}
