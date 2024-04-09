import React from "react";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Location Id</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource.id ?? "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Location</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");

      //@ts-ignore
      return <p>{resource.name ?? "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Contact</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource.telecom?.[0]?.system === "phone"
            ? //@ts-ignore
              resource.telecom[0].value
            : "-"}
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
      //@ts-ignore
      const address = resource.address;
      if (!address) return <p>-</p>;
      const fullAddress = `${address.line?.[0] ?? ""}, ${address.city}, ${address.state} ${address.postalCode}, ${address.country}`;
      return <p>{fullAddress}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Last Modified</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p className="ml-4">
          {/* @ts-ignore */}
          {resource.meta?.lastUpdated
            ? //@ts-ignore
              resource.meta.lastUpdated.slice(0, 10)
            : "-"}
        </p>
      );
    },
  },
];
