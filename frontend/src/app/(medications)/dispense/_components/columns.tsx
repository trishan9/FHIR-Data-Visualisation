import React from "react";
import { ColumnDef } from "@tanstack/react-table";

interface MedicationDispense {
  fullUrl: string;
  resource: {
    resourceType: string;
    id: string;
    status: string;
    medicationCodeableConcept: {
      text: string;
    };
    subject: {
      reference: string;
    };
    performer: {
      actor: {
        reference: string;
      };
    }[];
    authorizingPrescription: {
      reference: string;
    }[];
    quantity: {
      value: number;
      unit: string;
    };
    daysSupply: {
      value: number;
      unit: string;
    };
    whenHandedOver: string;
  };
}

export const columns: ColumnDef<MedicationDispense>[] = [
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Medication</p>;
    },
    cell: ({ row }) => {
      const medication =
        row.original.resource?.medicationCodeableConcept?.text ?? "-";
      return <p>{medication}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Subject</p>;
    },
    cell: ({ row }) => {
      const subject = row.original.resource?.subject?.reference ?? "-";
      return <p>{subject}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Performer</p>;
    },
    cell: ({ row }) => {
      const performers = row?.original?.resource?.performer?.map(
        (performer) => performer.actor.reference,
      );
      return (
        <ul>
          {performers?.map((performer, index) => (
            <li key={index}>{performer}</li>
          ))}
        </ul>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Authorizing Prescription</p>;
    },
    cell: ({ row }) => {
      const prescriptions = row.original.resource?.authorizingPrescription?.map(
        (prescription) => prescription.reference,
      );
      return (
        <ul>
          {prescriptions?.map((prescription, index) => (
            <li key={index}>{prescription}</li>
          ))}
        </ul>
      );
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Quantity</p>;
    },
    cell: ({ row }) => {
      const quantity = `${row.original.resource?.quantity?.value} ${row.original.resource?.quantity?.unit}`;
      return <p>{quantity}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">Days Supply</p>;
    },
    cell: ({ row }) => {
      const daysSupply = `${row.original.resource?.daysSupply?.value} ${row.original.resource?.daysSupply?.unit}`;
      return <p>{daysSupply}</p>;
    },
  },
  {
    accessorKey: "resource",
    header: ({ column }) => {
      return <p className="pl-0">When Handed Over</p>;
    },
    cell: ({ row }) => {
      const whenHandedOver = row.original.resource?.whenHandedOver ?? "-";
      return <p>{whenHandedOver}</p>;
    },
  },
];
