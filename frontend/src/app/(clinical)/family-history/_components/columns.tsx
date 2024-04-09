import React from "react";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Relationship</p>;
    },
    cell: ({ row }) => {
      const relationship =
        row.original.resource.relationship?.coding?.[0]?.display ?? "-";
      return <p>{relationship}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Condition</p>;
    },
    cell: ({ row }) => {
      const condition =
        row.original.resource.condition?.[0]?.code?.coding?.[0]?.display ?? "-";
      return <p>{condition}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Contributed To Death</p>;
    },
    cell: ({ row }) => {
      const contributedToDeath = row.original.resource.condition?.[0]
        ?.contributedToDeath
        ? "Yes"
        : "No";
      return <p>{contributedToDeath}</p>;
    },
  },
  // {
  //   accessorKey: "resource",
  //   header: ({ column }) => {
  //     return <p className="pl-0">Onset</p>;
  //   },
  //   cell: ({ row }) => {
  //     const onsetAge = row.original.resource.condition?.[0]?.onsetAge;
  //     const onsetString = row.original.resource.condition?.[0]?.onsetString;
  //     const onsetPeriod = row.original.resource.condition?.[0]?.onsetPeriod;
  //     return (
  //       <p>
  //         {onsetAge
  //           ? `${onsetAge.value} ${onsetAge.unit ?? ""}`
  //           : onsetString
  //             ? onsetString
  //             : onsetPeriod
  //               ? `${onsetPeriod.start} to ${onsetPeriod.end}`
  //               : "-"}
  //       </p>
  //     );
  //   },
  // },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Notes</p>;
    },
    cell: ({ row }) => {
      const notes = row.original.resource.condition?.[0]?.note;
      return (
        <ul>
          {notes
            ? notes.map((note: { text: string }, index: number) => (
                <li key={index}>{note.text}</li>
              ))
            : "-"}
        </ul>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Patient Reference</p>;
    },
    cell: ({ row }) => {
      const patientReference = row.original.resource.patient?.reference ?? "-";
      return <p>{patientReference}</p>;
    },
  },
];
