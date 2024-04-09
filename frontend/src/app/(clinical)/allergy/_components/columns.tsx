import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Allergen</p>;
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
      return <p className="pl-0">Clinical Status</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource?.clinicalStatus?.coding?.[0]?.display ?? "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Verification Status</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource?.verificationStatus?.coding?.[0]?.display ?? "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Recorded Date</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource?.recordedDate ?? "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Reaction</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource?.reaction?.map(
            (reaction: any) =>
              reaction.manifestation?.[0]?.coding?.[0]?.display ?? "-",
          )}
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
        <p>
          {/* @ts-ignore */}
          {resource?.reaction?.map((reaction: any) => reaction.severity ?? "-")}
        </p>
      );
    },
  },
];
