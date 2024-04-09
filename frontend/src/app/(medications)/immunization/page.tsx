"use client";

import Immunization from "@/components/Dashboard/Immunization";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { redirect } from "next/navigation";

export default function ImmunizationPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout>
        <Immunization />
      </DefaultLayout>
    </>
  );
}
