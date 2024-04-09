"use client";

import FamilyHistory from "@/components/Dashboard/FamilyHistory";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { redirect } from "next/navigation";

export default function FamilyHistoryPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout>
        <FamilyHistory />
      </DefaultLayout>
    </>
  );
}
