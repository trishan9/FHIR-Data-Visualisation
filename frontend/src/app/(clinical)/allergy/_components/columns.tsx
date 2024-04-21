import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Allergy</p>;
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
      return <p className="pl-0">Type</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p className="capitalize">{resource?.TYPE || "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Category</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return (
        <p className="capitalize">
          {/* @ts-ignore */}
          {resource?.CATEGORY || "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Severity</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return (
        <p className="capitalize">
          {/* @ts-ignore */}
          {resource?.SEVERITY1 || "-"}
        </p>
      );
    },
  },
];
