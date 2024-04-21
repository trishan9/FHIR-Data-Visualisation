"use client";

import { redirect } from "next/navigation";
import Condition from "@/components/Tables/Condition";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function ConditionPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout>
        <Condition />
      </DefaultLayout>
    </>
  );
}
