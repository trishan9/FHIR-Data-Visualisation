"use client";

import { redirect } from "next/navigation";
import Practitioner from "@/components/Tables/Practitioner";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function PractitionerPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }
  return (
    <>
      <DefaultLayout>
        <Practitioner />
      </DefaultLayout>
    </>
  );
}
