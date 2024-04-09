"use client";

import Medication from "@/components/Dashboard/Medication";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { redirect } from "next/navigation";

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
