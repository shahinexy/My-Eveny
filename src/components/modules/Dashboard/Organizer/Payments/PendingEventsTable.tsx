/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BPTable } from "@/components/ui/core/BPTable";
import TablePagination from "@/components/ui/core/BPTable/TablePagination";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

const PendingEventsTable = () => {
  const { attendeesList, meta } = {
    attendeesList: [
      {
        id: 1,
        date: 19,
        title: "Worker Workshop",
        time: "Wed, Sep 20, 2025, 09:00 AM",
        soldTickets: 47,
        totalTickets: 200,
        grossAmount: 30000,
        eventId: "#335tyt45",
        status: "Ongoing",
        type: "VIP",
      },
      {
        id: 2,
        date: 20,
        title: "Tech Conference",
        time: "Thu, Sep 21, 2025, 09:00 AM",
        soldTickets: 150,
        totalTickets: 250,
        grossAmount: 45000,
        eventId: "#335tyt46",
        status: "Completed",
        type: "General",
      },
      {
        id: 3,
        date: 25,
        title: "Music Fest",
        time: "Mon, Oct 10, 2025, 06:00 PM",
        soldTickets: 300,
        totalTickets: 500,
        grossAmount: 80000,
        eventId: "#335tyt47",
        status: "Pending",
        type: "VIP",
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
      accessorKey: "event",
      header: "Event",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-lg bg-gray-200">
            <div className="h-full w-full bg-gradient-to-br from-purple-400 to-pink-400" />
          </div>
          <div>
            <div className="font-medium">{row.original.title}</div>
            <div className="text-xs text-muted-foreground">
              {row.original.time}
            </div>
          </div>
        </div>
      ),
    },
    {
      accessorKey: "soldTicket",
      header: "Sold Ticket",
      cell: ({ row }) => {
        const sold = row.original.soldTickets || 0;
        const total = row.original.totalTickets || 1;
        const progress = (sold / total) * 100;

        return (
          <div>
            <div className="text-sm font-medium">
              {sold}/{total}
            </div>
            <div className="w-32 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-800 to-pink-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "grossAmount",
      header: "Total Amount",
      cell: ({ row }) => (
        <span className="font-medium">
          ${row.original.grossAmount.toLocaleString()}
        </span>
      ),
    },
    {
      accessorKey: "afterCharges",
      header: "After Charges",
      cell: ({ row }) => {
        const net = row.original.grossAmount * 0.9; // example: 10% fee
        return <span className=" font-medium">${net.toLocaleString()}</span>;
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status;

        return (
          <button className={cn("px-3 py-1 text-xs font-medium rounded-full")}>
            {status}
          </button>
        );
      },
    },
  ];

  return (
    <div>
      <BPTable columns={columns} data={attendeesList || []} />
      <div className="mt-4">
        <TablePagination totalPage={meta?.totalPage} />
      </div>
    </div>
  );
};

export default PendingEventsTable;
