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
        row.original.resource.medicationCodeableConcept?.text ?? "-";
      return <p>{medication}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Category</p>;
    },
    cell: ({ row }) => {
      const category = row.original.resource.category?.text ?? "-";
      return <p>{category}</p>;
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
      return <p className="pl-0">Performer</p>;
    },
    cell: ({ row }) => {
      const performer =
        row.original.resource.performer?.[0]?.actor?.display ?? "-";
      return <p>{performer}</p>;
    },
  },
];
