"use client";

import { redirect } from "next/navigation";
import Location from "@/components/Tables/Location";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function LocationPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }
  return (
    <>
      <DefaultLayout>
        <Location />
      </DefaultLayout>
    </>
  );
}
