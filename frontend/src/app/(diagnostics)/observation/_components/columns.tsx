import React from "react";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Date</p>;
    },
    cell: ({ row }) => {
      const date = row.original.resource.DATE.slice(0, 10) || "-";
      return <p>{date}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Patient</p>;
    },
    cell: ({ row }) => {
      const patientReference = row.original.resource.PATIENT || "-";
      return <p>{patientReference}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Category</p>;
    },
    cell: ({ row }) => {
      const category = row.original.resource.CATEGORY || "-";
      return <p className="capitalize">{category}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Description</p>;
    },
    cell: ({ row }) => {
      const description = row.original.resource.DESCRIPTION || "-";
      return <p>{description}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Value</p>;
    },
    cell: ({ row }) => {
      const value = row.original.resource.VALUE || "-";
      return <p>{value}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Units</p>;
    },
    cell: ({ row }) => {
      const units = row.original.resource.UNITS || "-";
      return <p>{units}</p>;
    },
  },
];
