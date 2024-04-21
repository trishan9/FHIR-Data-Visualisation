import React from "react";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Id</p>;
    },
    cell: ({ row }) => {
      const id = row.original.resource.CLAIMID || "-";
      return <p>{id}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Charge Id</p>;
    },
    cell: ({ row }) => {
      const chargeId = row.original.resource.CHARGEID || "-";
      return <p>{chargeId}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Patient</p>;
    },
    cell: ({ row }) => {
      const patient = row.original.resource.PATIENTID || "-";
      return <p>{patient}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Type</p>;
    },
    cell: ({ row }) => {
      const type = row.original.resource.TYPE || "-";
      return <p>{type}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Amount</p>;
    },
    cell: ({ row }) => {
      const amount =
        row.original.resource.AMOUNT || row.original.resource.PAYMENTS || "-";
      return <p>{amount}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Method</p>;
    },
    cell: ({ row }) => {
      const method = row.original.resource.METHOD || "-";
      return <p>{method}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Notes</p>;
    },
    cell: ({ row }) => {
      const method = row.original.resource.NOTES || "-";
      return <p>{method}</p>;
    },
  },
];
