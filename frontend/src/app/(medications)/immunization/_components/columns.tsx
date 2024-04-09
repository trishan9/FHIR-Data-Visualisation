import React from "react";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Vaccine</p>;
    },
    cell: ({ row }) => {
      const vaccine = row.original.resource.vaccineCode?.text ?? "-";
      return <p>{vaccine}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Patient</p>;
    },
    cell: ({ row }) => {
      const patient = row.original.resource.patient?.reference ?? "-";
      return <p>{patient}</p>;
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
      return <p className="pl-0">Occurrence Date</p>;
    },
    cell: ({ row }) => {
      const occurrenceDate = row.original.resource.occurrenceDateTime ?? "-";
      return <p>{occurrenceDate}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Encounter</p>;
    },
    cell: ({ row }) => {
      const encounter = row.original.resource.encounter?.reference ?? "-";
      return <p>{encounter}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Reason</p>;
    },
    cell: ({ row }) => {
      const reason =
        row.original.resource.reasonCode?.[0]?.coding?.[0]?.display ?? "-";
      return <p>{reason}</p>;
    },
  },
];
