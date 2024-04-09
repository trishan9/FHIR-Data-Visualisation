"use client";

import ImagingStudy from "@/components/Dashboard/ImagingStudy";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { redirect } from "next/navigation";

export default function ImagingStudyPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout>
        <ImagingStudy />
      </DefaultLayout>
    </>
  );
}
