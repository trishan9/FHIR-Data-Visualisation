"use client";

import Report from "@/components/Dashboard/Report";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { redirect } from "next/navigation";

export default function FamilyHistoryPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout>
        <Report />
      </DefaultLayout>
    </>
  );
}
