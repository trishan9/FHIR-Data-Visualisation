"use client";

import { redirect } from "next/navigation";
import Claim from "@/components/Tables/Claim";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function ClaimPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout>
        <Claim />
      </DefaultLayout>
    </>
  );
}
