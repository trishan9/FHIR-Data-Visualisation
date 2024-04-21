"use client";

import { redirect } from "next/navigation";
import CarePlan from "@/components/Tables/CarePlan";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

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
