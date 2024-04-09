"use client";

import MedicationDispense from "@/components/Dashboard/Dispense";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { redirect } from "next/navigation";

export default function MedicationRequestPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout>
        <MedicationDispense />
      </DefaultLayout>
    </>
  );
}
