import React from "react";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  // {
  //   accessorKey: "resource",
  //   header: ({ column }) => {
  //     return <p className="pl-0">Type</p>;
  //   },
  //   cell: ({ row }) => {
  //     const type = row.original.resource.code?.text ?? "-";
  //     return <p>{type}</p>;
  //   },
  // },
  // {
  //   accessorKey: "resource",
  //   header: ({ column }) => {
  //     return <p className="pl-0">Value</p>;
  //   },
  //   cell: ({ row }) => {
  //     const valueString = row.original.resource.valueString ?? "-";
  //     const valueQuantity = row.original.resource.valueQuantity;
  //     return (
  //       <p>
  //         {valueString ||
  //           (valueQuantity
  //             ? `${valueQuantity.value} ${valueQuantity.unit}`
  //             : "-")}
  //       </p>
  //     );
  //   },
  // },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Date</p>;
    },
    cell: ({ row }) => {
      const date = row.original.resource.effectiveDateTime ?? "-";
      return <p>{date}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Patient Reference</p>;
    },
    cell: ({ row }) => {
      const patientReference = row.original.resource.subject?.reference ?? "-";
      return <p>{patientReference}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Performed By</p>;
    },
    cell: ({ row }) => {
      const performer = row.original.resource.performer?.[0]?.display ?? "-";
      return <p>{performer}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Vital Signs</p>;
    },
    cell: ({ row }) => {
      const components = row.original.resource.component;
      return (
        <ul>
          {components &&
            // @ts-ignore
            components.map((component, index) => (
              <li key={index}>
                {component.code?.coding?.[0]?.display}:{" "}
                {component.valueString ||
                  `${component.valueQuantity?.value} ${component.valueQuantity?.unit}`}
              </li>
            ))}
        </ul>
      );
    },
  },
];
