import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Family Name</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        //@ts-ignore
        <p>{(resource?.name?.length && resource?.name[0]?.family) ?? "-"}</p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Given Name</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {(resource?.name?.length && resource?.name[0]?.given?.join(" ")) ??
            "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Date of Birth</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource?.birthDate ?? "-"}</p>;
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
          {(resource?.telecom?.length && resource?.telecom[1]?.value) ?? "-"}
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
          {(resource?.address?.length && resource?.address[0]?.city) ?? "-"}
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
          {(resource?.address?.length && resource?.address[0]?.state) ?? "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pr-0 text-right">Last Modified</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p className="ml-4 text-right">
          {/* @ts-ignore */}
          {(resource?.meta?.lastUpdated &&
            //@ts-ignore
            resource?.meta?.lastUpdated.slice(0, 10)) ??
            "-"}
        </p>
      );
    },
  },
];
