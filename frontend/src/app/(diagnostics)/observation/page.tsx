"use client";

import { redirect } from "next/navigation";
import Observation from "@/components/Tables/Observation";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function ObservationPage() {
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
