import React from "react";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Modality</p>;
    },
    cell: ({ row }) => {
      const modality =
        row.original.resource.series?.[0]?.modality?.display ?? "-";
      return <p>{modality}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Body Site</p>;
    },
    cell: ({ row }) => {
      const bodySite =
        row.original.resource.series?.[0]?.bodySite?.display ?? "-";
      return <p>{bodySite}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Started</p>;
    },
    cell: ({ row }) => {
      const started = row.original.resource.started ?? "-";
      return <p>{started}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Location</p>;
    },
    cell: ({ row }) => {
      const location = row.original.resource.location?.display ?? "-";
      return <p>{location}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Instance Title</p>;
    },
    cell: ({ row }) => {
      const instanceTitle =
        row.original.resource.series?.[0]?.instance?.[0]?.title ?? "-";
      return <p>{instanceTitle}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Subject</p>;
    },
    cell: ({ row }) => {
      const subject = row.original.resource.subject?.reference ?? "-";
      return <p>{subject}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Series</p>;
    },
    cell: ({ row }) => {
      const seriesNumber = row.original.resource.series?.[0]?.number ?? "-";
      return <p>{seriesNumber}</p>;
    },
  },
];
