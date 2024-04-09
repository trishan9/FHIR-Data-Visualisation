"use client";

import Procedure from "@/components/Dashboard/Procedure";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { redirect } from "next/navigation";

export default function ProcedurePage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout>
        <Procedure />
      </DefaultLayout>
    </>
  );
}
