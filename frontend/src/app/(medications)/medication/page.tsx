"use client";

import { redirect } from "next/navigation";
import Medication from "@/components/Tables/Medication";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function MedicationPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout>
        <Medication />
      </DefaultLayout>
    </>
  );
}
