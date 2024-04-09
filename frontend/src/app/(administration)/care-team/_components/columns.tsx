import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  //   {
  //     accessorKey: "resource",
  //     header: ({ column }) => {
  //       return <p className="pl-0">CareTeam ID</p>;
  //     },
  //     cell: ({ row }) => {
  //       const resource = row.getValue("resource");
  //       return <p>{resource?.id ?? "-"}</p>;
  //     },
  //   },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Subject</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource?.subject?.reference ?? "-"}</p>;
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
      return <p>{resource?.encounter?.reference ?? "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Start Date</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      //@ts-ignore
      return <p>{resource?.period?.start?.slice(0, 10) ?? "-"}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Participant Role</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource?.participant
            ?.map((p: any) => p.role.map((r: any) => r.text).join(", "))
            .join(" | ") ?? "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Participant Name</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource?.participant?.map((p) => p.member.display).join(", ") ??
            "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Managing Organization</p>;
    },
    cell: ({ row }) => {
      const resource = row.getValue("resource");
      return (
        <p>
          {/* @ts-ignore */}
          {resource?.managingOrganization
            ?.map((org: any) => org.display)
            .join(", ") ?? "-"}
        </p>
      );
    },
  },
];
