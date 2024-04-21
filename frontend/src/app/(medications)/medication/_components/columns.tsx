import React from "react";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Encounter</p>;
    },
    cell: ({ row }) => {
      const encounter = row.original.resource.ENCOUNTER || "-";
      return <p>{encounter}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Medication</p>;
    },
    cell: ({ row }) => {
      const medicationName = row.original.resource.DESCRIPTION || "-";
      return <p className="capitalize">{medicationName}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Cost</p>;
    },
    cell: ({ row }) => {
      const cost = row.original.resource.TOTALCOST || "-";
      return <p>{cost}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Dispenses</p>;
    },
    cell: ({ row }) => {
      const dispenses = row.original.resource.DISPENSES || "-";
      return <p>{dispenses}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Reason</p>;
    },
    cell: ({ row }) => {
      const reason = row.original.resource.REASONDESCRIPTION || "-";
      return <p>{reason}</p>;
    },
  },
];
