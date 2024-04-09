import React from "react";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Type</p>;
    },
    cell: ({ row }) => {
      const type = row.original.resource.code?.text ?? "-";
      return <p>{type}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Date</p>;
    },
    cell: ({ row }) => {
      const date = row.original.resource.effectiveDateTime ?? "-";
      return <p>{date}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Patient Reference</p>;
    },
    cell: ({ row }) => {
      const patientReference = row.original.resource.subject?.reference ?? "-";
      return <p>{patientReference}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Performed By</p>;
    },
    cell: ({ row }) => {
      const performer = row.original.resource.performer?.[0]?.display ?? "-";
      return <p>{performer}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Report Text</p>;
    },
    cell: ({ row }) => {
      const reportText = row.original.resource.presentedForm?.[0]?.data ?? "-";
      // Convert base64 encoded string to plain text
      const decodedText = reportText == "-" ? reportText : atob(reportText);
      return <p>{decodedText}</p>;
    },
  },
];
