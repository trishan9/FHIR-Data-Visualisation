"use client";

import { redirect } from "next/navigation";
import Organization from "@/components/Tables/Organization";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function OrganizationPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }
  return (
    <>
      <DefaultLayout>
        <Organization />
      </DefaultLayout>
    </>
  );
}
