"use client";

import { redirect } from "next/navigation";
import Patient from "@/components/Tables/Patient";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function PatientPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }
  return (
    <>
      <DefaultLayout>
        <Patient />
      </DefaultLayout>
    </>
  );
}
