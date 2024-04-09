import React from "react";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Medication Name</p>;
    },
    cell: ({ row }) => {
      const medicationName =
        row.original.resource.code?.coding?.[0]?.display ?? "-";
      return <p>{medicationName}</p>;
    },
  },
  // {
  //   accessorKey: "resource",
  //   header: ({ column }) => {
  //     return <p className="pl-0">Manufacturer</p>;
  //   },
  //   cell: ({ row }) => {
  //     const manufacturer = row.original.resource.manufacturer?.reference ?? "-";
  //     return <p>{manufacturer}</p>;
  //   },
  // },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Form</p>;
    },
    cell: ({ row }) => {
      const form = row.original.resource.form?.coding?.[0]?.display ?? "-";
      return <p>{form}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Ingredients</p>;
    },
    cell: ({ row }) => {
      const ingredients =
        row.original.resource.ingredient
          ?.map(
            (ingredient: any) =>
              ingredient.itemCodeableConcept?.coding?.[0]?.display,
          )
          .join(", ") ?? "-";
      return <p>{ingredients}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Strength</p>;
    },
    cell: ({ row }) => {
      const strengthNumerator =
        row.original.resource.ingredient?.[0]?.strength?.numerator?.value ??
        "-";
      const unit0 =
        row.original.resource.ingredient?.[0]?.strength?.numerator?.code ?? "-";
      const strengthDenominator =
        row.original.resource.ingredient?.[0]?.strength?.denominator?.value ??
        "-";
      const unit =
        row.original.resource.ingredient?.[0]?.strength?.denominator?.code ??
        "-";
      return (
        <p>
          {strengthNumerator}
          {unit0} / {strengthDenominator}
          {unit}
        </p>
      );
    },
  },
];
