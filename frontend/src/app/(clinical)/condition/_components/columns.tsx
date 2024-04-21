import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Start</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource?.START || "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Stop</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource?.STOP || "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Condition</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource?.DESCRIPTION || "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Patient</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource?.PATIENT || "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Encounter</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource?.ENCOUNTER || "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Code</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource?.CODE || "-"}</p>;
    },
  },
];
