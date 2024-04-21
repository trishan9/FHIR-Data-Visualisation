import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Last Name</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        //@ts-ignore
        <p>{resource?.LAST || "-"}</p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">First Name</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource?.FIRST || "-"}
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
      return <p>{resource?.BIRTHDATE || "-"}</p>;
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
        <p>
          {/* @ts-ignore */}
          {resource?.GENDER || "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Race</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource?.RACE || "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Ethnicity</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource?.ETHNICITY || "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Passport</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource?.PASSPORT || "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Social Security Number</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource?.SSN || "-"}
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
      return <p className="pl-0">County</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource?.COUNTY || "-"}
        </p>
      );
    },
  },
];
