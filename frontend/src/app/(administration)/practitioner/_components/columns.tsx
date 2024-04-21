"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Name</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        //@ts-ignore
        <p>{resource?.NAME || "-"}</p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Gender</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p className="capitalize">
          {/* @ts-ignore */}
          {resource?.GENDER || "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Speciality</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p className="capitalize">
          {/* @ts-ignore */}
          {resource?.SPECIALITY || "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Address</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource?.ADDRESS || "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">City</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource?.CITY || "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">State</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource?.STATE || "-"}
        </p>
      );
    },
  },
];
