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
      return <p className="pl-0">Intent</p>;
    },
    cell: ({ row }) => {
      const intent = row.original.resource.intent ?? "-";
      return <p>{intent}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Patient</p>;
    },
    cell: ({ row }) => {
      const patient = row.original.resource.subject?.reference ?? "-";
      return <p>{patient}</p>;
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
      return <p className="pl-0">Authored On</p>;
    },
    cell: ({ row }) => {
      const authoredOn = row.original.resource.authoredOn ?? "-";
      return <p>{authoredOn}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Requester</p>;
    },
    cell: ({ row }) => {
      const requester = row.original.resource.requester?.display ?? "-";
      return <p>{requester}</p>;
    },
  },
];
