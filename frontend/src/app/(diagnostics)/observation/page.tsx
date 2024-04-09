"use client";

import Observation from "@/components/Dashboard/Observation";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { redirect } from "next/navigation";

export default function FamilyHistoryPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout>
        <Observation />
      </DefaultLayout>
    </>
  );
}
