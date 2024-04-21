import React from "react";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Vaccine</p>;
    },
    cell: ({ row }) => {
      const vaccine = row.original.resource.DESCRIPTION || "-";
      return <p>{vaccine}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Patient</p>;
    },
    cell: ({ row }) => {
      const patient = row.original.resource.PATIENT || "-";
      return <p>{patient}</p>;
    },
  },
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
      return <p className="pl-0">Base Cost</p>;
    },
    cell: ({ row }) => {
      const baseCost = row.original.resource.BASE_COST || "-";
      return <p>{baseCost}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Occurrence Date</p>;
    },
    cell: ({ row }) => {
      const occurrenceDate = row.original.resource.DATE.slice(0, 10) || "-";
      return <p>{occurrenceDate}</p>;
    },
  },
];
