"use client";

import { redirect } from "next/navigation";
import Procedure from "@/components/Tables/Procedure";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

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
