"use client";

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
          {(resource?.name?.length && resource?.name[0]?.given?.[0]) ?? "-"}
        </p>
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
          {(resource?.gender && resource?.gender) ?? "-"}
        </p>
      );
    },
  },
  // {
  //   accessorKey: "resource",
  //   header: ({ column }) => {
  //     return <p className="pl-0">Provider Number</p>;
  //   },
  //   cell: ({ row }) => {
  //     const resource = row.getValue("resource");
  //     return (
  //       <p>
  //         {/* @ts-ignore */}
  //         {(resource?.identifier?.length &&
  //           //@ts-ignore
  //           resource.identifier?.find(
  //             //@ts-ignore
  //             (id) => id.type?.coding?.[0]?.code === "PRN",
  //           )?.value) ??
  //           "-"}
  //       </p>
  //     );
  //   },
  // },
  // {
  //   accessorKey: "resource",
  //   header: ({ column }) => {
  //     return <p className="pl-0">National Provider Identifier</p>;
  //   },
  //   cell: ({ row }) => {
  //     const resource = row.getValue("resource");
  //     return (
  //       <p>
  //         {/* @ts-ignore */}
  //         {(resource?.identifier?.length &&
  //           //@ts-ignore
  //           resource.identifier?.find(
  //             //@ts-ignore
  //             (id) => id.type?.coding?.[0]?.code === "NPI",
  //           )?.value) ??
  //           "-"}
  //       </p>
  //     );
  //   },
  // },
  // {
  //   accessorKey: "resource",
  //   header: ({ column }) => {
  //     return <p className="pl-0">Provider Cross Reference Number</p>;
  //   },
  //   cell: ({ row }) => {
  //     const resource = row.getValue("resource");
  //     return (
  //       <p>
  //         {/* @ts-ignore */}
  //         {(resource?.identifier?.length &&
  //           //@ts-ignore
  //           resource.identifier?.find(
  //             //@ts-ignore
  //             (id) => id.type?.coding?.[0]?.code === "PCRN",
  //           )?.value) ??
  //           "-"}
  //       </p>
  //     );
  //   },
  // },
  // {
  //   accessorKey: "resource",
  //   header: ({ column }) => {
  //     return <p className="pl-0">Provider Master Identifier</p>;
  //   },
  //   cell: ({ row }) => {
  //     const resource = row.getValue("resource");
  //     return (
  //       <p>
  //         {/* @ts-ignore */}
  //         {(resource?.identifier?.length &&
  //           //@ts-ignore
  //           resource.identifier?.find(
  //             //@ts-ignore
  //             (id) => id.type?.coding?.[0]?.code === "PRM",
  //           )?.value) ??
  //           "-"}
  //       </p>
  //     );
  //   },
  // },
  // {
  //   accessorKey: "resource",
  //   header: ({ column }) => {
  //     return <p className="pl-0">Social Security Number</p>;
  //   },
  //   cell: ({ row }) => {
  //     const resource = row.getValue("resource");
  //     return (
  //       <p>
  //         {/* @ts-ignore */}
  //         {(resource?.identifier?.length &&
  //           //@ts-ignore
  //           resource.identifier?.find(
  //             //@ts-ignore
  //             (id) => id.type?.coding?.[0]?.code === "SS",
  //           )?.value) ??
  //           "-"}
  //       </p>
  //     );
  //   },
  // },
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
      return <p className="pl-0">Country</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {(resource?.address?.length && resource?.address[0]?.country) ?? "-"}
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
  // {
  //   accessorKey: "resource",
  //   header: ({ column }) => {
  //     return <p className="pl-0">Language</p>;
  //   },
  //   cell: ({ row }) => {
  //     const resource = row.getValue("resource");
  //     return (
  //       <p>
  //         {/* @ts-ignore */}
  //         {(resource?.communication?.length &&
  //           //@ts-ignore/

  //           resource?.communication[0]?.coding?.[0]?.display) ??
  //           "-"}
  //       </p>
  //     );
  //   },
  // },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pr-0 text-right">Last Modified</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p className="ml-4">
          {/* @ts-ignore */}
          {(resource?.meta && resource?.meta?.lastUpdated.slice(0, 10)) ?? "-"}
        </p>
      );
    },
  },
];
