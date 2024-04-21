"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Organization Name</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource.NAME || "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Contact Number</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource.PHONE || "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">City</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource.CITY || "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">State</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource.STATE || "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Address</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource.ADDRESS || "-"}</p>;
    },
  },
];
