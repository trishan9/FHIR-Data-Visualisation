import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Patient</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        //@ts-ignore
        <p>{resource?.Id || "-"}</p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Birth Place</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource?.BIRTHPLACE || "-"}
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
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Zip</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource?.ZIP || "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Latitude</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource?.LAT.slice(0, 6) || "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Longitude</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource?.LON.slice(0, 6) || "-"}
        </p>
      );
    },
  },
];
