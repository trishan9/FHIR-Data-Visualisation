"use client";

import { redirect } from "next/navigation";
import Allergy from "@/components/Tables/Allergy";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

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
