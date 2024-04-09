"use client";

import MedicationStatement from "@/components/Dashboard/MedicationStatement";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { redirect } from "next/navigation";

export default function MedicationStatementPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout>
        <MedicationStatement />
      </DefaultLayout>
    </>
  );
}
