"use client";

import { redirect } from "next/navigation";
import Immunization from "@/components/Tables/Immunization";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

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
