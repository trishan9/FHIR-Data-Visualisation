"use client";

import Specimen from "@/components/Dashboard/Specimen";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { redirect } from "next/navigation";

export default function SpecimenPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout>
        <Specimen />
      </DefaultLayout>
    </>
  );
}
