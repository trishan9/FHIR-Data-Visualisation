import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Clinical Status</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource?.clinicalStatus?.coding?.[0]?.display ?? "-"}</p>;
    },
  },
  // {
  //   accessorKey: "resource",
  //   header: ({ column }) => {
  //     return <p className="pl-0">Verification Status</p>;
  //   },
  //   cell: ({ row }) => {
  //     const resource = row.getValue("resource");
  //     //@ts-ignore
  //     return <p>{resource?.verificationStatus?.coding[0]?.display ?? "-"}</p>;
  //   },
  // },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Category</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource?.category?.[0]?.coding?.[0]?.display ?? "-"}</p>;
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
      return <p>{resource?.code?.text ?? "-"}</p>;
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
      return <p>{resource?.severity?.coding?.[0]?.display ?? "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Subject</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource?.subject?.reference?.split("/")[1] ?? "-"}</p>;
    },
  },
  // {
  //   accessorKey: "resource",
  //   header: ({ column }) => {
  //     return <p className="pl-0">Encounter</p>;
  //   },
  //   cell: ({ row }) => {
  //     const resource = row.getValue("resource");
  //     //@ts-ignore
  //     return <p>{resource?.encounter?.reference?.split("/")[1] ?? "-"}</p>;
  //   },
  // },
  // {
  //   accessorKey: "resource",
  //   header: ({ column }) => {
  //     return <p className="pl-0">Asserter</p>;
  //   },
  //   cell: ({ row }) => {
  //     const resource = row.getValue("resource");
  //     //@ts-ignore
  //     return <p>{resource?.asserter?.reference?.split("/")[1] ?? "-"}</p>;
  //   },
  // },
  // {
  //   accessorKey: "resource",
  //   header: ({ column }) => {
  //     return <p className="pl-0">Body Site</p>;
  //   },
  //   cell: ({ row }) => {
  //     const resource = row.getValue("resource");
  //     //@ts-ignore
  //     return <p>{resource?.bodySite?.coding?.[0]?.display ?? "-"}</p>;
  //   },
  // },
];
