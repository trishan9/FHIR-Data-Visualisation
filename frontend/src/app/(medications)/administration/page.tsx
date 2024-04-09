"use client";

import MedicationAdministration from "@/components/Dashboard/MedicationAdministration";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { redirect } from "next/navigation";

export default function MedicationAdministrationPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout>
        <MedicationAdministration />
      </DefaultLayout>
    </>
  );
}
