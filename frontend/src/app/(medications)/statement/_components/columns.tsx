import React from "react";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Medication</p>;
    },
    cell: ({ row }) => {
      const medication =
        row.original.resource.medicationReference?.reference ?? "-";
      return <p>{medication}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Status</p>;
    },
    cell: ({ row }) => {
      const status = row.original.resource.status ?? "-";
      return <p>{status}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Subject</p>;
    },
    cell: ({ row }) => {
      const subject = row.original.resource.subject?.reference ?? "-";
      return <p>{subject}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Context</p>;
    },
    cell: ({ row }) => {
      const context = row.original.resource.context?.reference ?? "-";
      return <p>{context}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Effective DateTime</p>;
    },
    cell: ({ row }) => {
      const effectiveDateTime = row.original.resource.effectiveDateTime ?? "-";
      return <p>{effectiveDateTime}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Date Asserted</p>;
    },
    cell: ({ row }) => {
      const dateAsserted = row.original.resource.dateAsserted ?? "-";
      return <p>{dateAsserted}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Reason</p>;
    },
    cell: ({ row }) => {
      const reason = row.original.resource.reasonCode?.[0]?.text ?? "-";
      return <p>{reason}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Dosage</p>;
    },
    cell: ({ row }) => {
      const dosage =
        row.original.resource.dosage?.[0]?.doseAndRate?.[0]?.doseQuantity
          ?.value ?? "-";
      return <p>{dosage}</p>;
    },
  },
];
