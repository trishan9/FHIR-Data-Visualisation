"use client";

import Allergy from "@/components/Dashboard/Allergy";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { redirect } from "next/navigation";

export default function AllergyPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout>
        <Allergy />
      </DefaultLayout>
    </>
  );
}
