/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BPTable } from "@/components/ui/core/BPTable";
import TablePagination from "@/components/ui/core/BPTable/TablePagination";
import { ColumnDef } from "@tanstack/react-table";

const EventOrganizerList = () => {
  const { organizerList, meta } = {
    organizerList: [
      {
        organizerName: "John Doe",
        email: "john.doe@example.com",
        totalEvent: 15,
        totalEarn: "$12,000",
        phoneNumber: "+1 234 567 8901",
      },
      {
        organizerName: "Sarah Khan",
        email: "sarah.k@example.com",
        totalEvent: 8,
        totalEarn: "$7,500",
        phoneNumber: "+1 987 654 3210",
      },
      {
        organizerName: "Alex Lee",
        email: "alex.lee@example.com",
        totalEvent: 22,
        totalEarn: "$18,900",
        phoneNumber: "+44 7000 111222",
      },
      {
        organizerName: "Maria Gomez",
        email: "maria.gomez@example.com",
        totalEvent: 12,
        totalEarn: "$9,200",
        phoneNumber: "+34 600 987654",
      },
      {
        organizerName: "David Smith",
        email: "david.smith@example.com",
        totalEvent: 19,
        totalEarn: "$14,350",
        phoneNumber: "+1 555 234 7890",
      },
    ],
    meta: {
      total: 12,
      limit: 10,
      page: 1,
      totalPage: 2,
    },
  };

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "organizerName",
      header: "Organizer Name",
      cell: ({ row }) => <span>{row.original.organizerName}</span>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <span>{row.original.email}</span>,
    },
    {
      accessorKey: "totalEvent",
      header: "Total Event",
      cell: ({ row }) => <span>{row.original.totalEvent}</span>,
    },
    {
      accessorKey: "totalEarn",
      header: "Total Earn",
      cell: ({ row }) => <span>{row.original.totalEarn}</span>,
    },
    {
      accessorKey: "phoneNumber",
      header: "Phone Number",
      cell: ({ row }) => <span>{row.original.phoneNumber}</span>,
    },
  ];

  return (
    <div className="space-y-4">
      <BPTable columns={columns} data={organizerList || []} />
      <TablePagination totalPage={meta.totalPage} />
    </div>
  );
};

export default EventOrganizerList;
