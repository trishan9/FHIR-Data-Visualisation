"use client";

import MedicationRequest from "@/components/Dashboard/Request";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { redirect } from "next/navigation";

export default function MedicationRequestPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout>
        <MedicationRequest />
      </DefaultLayout>
    </>
  );
}
