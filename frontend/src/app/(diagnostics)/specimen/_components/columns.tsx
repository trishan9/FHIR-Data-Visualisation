import React from "react";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Type</p>;
    },
    cell: ({ row }) => {
      const type = row.original.resource.type?.coding?.[0]?.display ?? "-";
      return <p>{type}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Accession Identifier</p>;
    },
    cell: ({ row }) => {
      const accessionIdentifier =
        row.original.resource.accessionIdentifier?.value ?? "-";
      return <p>{accessionIdentifier}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Container Type</p>;
    },
    cell: ({ row }) => {
      const containerType =
        row.original.resource.container?.[0]?.type?.coding?.[0]?.display ?? "-";
      return <p>{containerType}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Container Identifier</p>;
    },
    cell: ({ row }) => {
      const containerIdentifier =
        row.original.resource.container?.[0]?.identifier?.[0]?.value ?? "-";
      return <p>{containerIdentifier}</p>;
    },
  },
];
