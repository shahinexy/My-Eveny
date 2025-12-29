/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BPTable } from "@/components/ui/core/BPTable";
import TablePagination from "@/components/ui/core/BPTable/TablePagination";
import { ColumnDef } from "@tanstack/react-table";

const AttendeesListTable = () => {
  const { attendeesList, meta } = {
    attendeesList: [
      {
        id: "ORD-001",
        attendeeName: "Tony Stark",
        email: "tony@starkindustries.com",
        ticketName: "VIP Pass - Concert 2025",
        quantity: 10,
        type: "VIP",
        price: "$120",
        date: "2025-10-20",
        status: "Check-in",
      },
      {
        id: "ORD-002",
        attendeeName: "Steve Rogers",
        email: "steve@avengers.com",
        ticketName: "Standard Entry - Concert 2025",
        quantity: 2,
        type: "Standard",
        price: "$60",
        date: "2025-10-21",
        status: "Register",
      },
      {
        id: "ORD-003",
        attendeeName: "Natasha Romanoff",
        email: "natasha@shield.org",
        ticketName: "Backstage Access - Concert 2025",
        quantity: 10,
        type: "Premium",
        price: "$250",
        date: "2025-10-22",
        status: "Check-in",
      },
      {
        id: "ORD-004",
        attendeeName: "Bruce Banner",
        email: "bruce@researchlab.io",
        ticketName: "Science Expo VIP",
        quantity: 5,
        type: "VIP",
        price: "$180",
        date: "2025-10-23",
        status: "Register",
      },
      {
        id: "ORD-005",
        attendeeName: "Clint Barton",
        email: "clint@hawkeye.com",
        ticketName: "Music Fest - Group Entry",
        quantity: 8,
        type: "Group",
        price: "$90",
        date: "2025-10-24",
        status: "Check-in",
      },
      {
        id: "ORD-005",
        attendeeName: "Clint Barton",
        email: "clint@hawkeye.com",
        ticketName: "Music Fest - Group Entry",
        quantity: 8,
        type: "Group",
        price: "$90",
        date: "2025-10-24",
        status: "Check-in",
      },
      {
        id: "ORD-005",
        attendeeName: "Clint Barton",
        email: "clint@hawkeye.com",
        ticketName: "Music Fest - Group Entry",
        quantity: 8,
        type: "Group",
        price: "$90",
        date: "2025-10-24",
        status: "Check-in",
      },
    ],
    meta: {
      total: 12,
      limit: 10,
      page: 2,
      totalPage: 2,
    },
  };

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "attendeeName",
      header: "Attendee Name",
      cell: ({ row }) => <span>{row?.original?.attendeeName}</span>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <span className="">{row?.original?.email}</span>,
    },

    {
      accessorKey: "quantity",
      header: "Quantity",
      cell: ({ row }) => <span>{row?.original?.quantity}</span>,
    },
    {
      accessorKey: "type",
      header: "Ticket Type",
      cell: ({ row }) => <span>{row?.original?.type}</span>,
    },

    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status?.toLowerCase() || "unknown";
        const label = status.charAt(0).toUpperCase() + status.slice(1);

        let bgClass = "";
        let textClass = "";

        switch (status) {
          case "paid":
            bgClass = "bg-[#E0F8F3]";
            textClass = "text-[#00B187]";
            break;
          case "free":
            bgClass = "bg-[#FFF5E6]";
            textClass = "text-[#FFA500]";
            break;
          case "pending":
            bgClass = "bg-[#E6E6FF]";
            textClass = "text-[#5A3FFF]";
            break;
          case "cancelled":
            bgClass = "bg-[#FDEDED]";
            textClass = "text-[#FF4D4F]";
            break;
          default:
            bgClass = "bg-gray-200";
            textClass = "text-gray-600";
        }

        return (
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${bgClass} ${textClass}`}
          >
            {label}
          </span>
        );
      },
    },
  ];

  return (
    <div>
      <BPTable columns={columns} data={(attendeesList as any) || []} />
      <TablePagination totalPage={meta?.totalPage} />
    </div>
  );
};

export default AttendeesListTable;
