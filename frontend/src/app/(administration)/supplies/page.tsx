"use client";

import { redirect } from "next/navigation";
import Supplies from "@/components/Tables/Supplies";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function SuppliesPage() {
  if (!localStorage.getItem("accessToken")) {
    return redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout>
        <Supplies />
      </DefaultLayout>
    </>
  );
}
