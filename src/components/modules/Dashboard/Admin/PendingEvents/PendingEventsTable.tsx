/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { BPTable } from "@/components/ui/core/BPTable";
import TablePagination from "@/components/ui/core/BPTable/TablePagination";

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
        status: "Ongoing",
        type: "General",
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
        status: "Ongoing",
        type: "General",
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
        status: "Ongoing",
        type: "General",
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
        status: "Ongoing",
        type: "General",
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
        status: "Ongoing",
        type: "General",
      },
    ],
    meta: {
      total: 12,
      limit: 10,
      page: 2,
      totalPage: 2,
    },
  };

  const handleAcceptClick = (attendee: any) => {
    console.log("accept:", attendee);
    // Here you can
  };
  const handleRejectClick = (attendee: any) => {
    console.log("delete:", attendee);
    // Here you can
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
          <span className="font-medium">{row?.original?.title}</span>
        </div>
      ),
    },
    {
      accessorKey: "soldTicket",
      header: "Sold Ticket",
      cell: ({ row }) => {
        const sold = row?.original?.soldTickets || 0;
        const total = row?.original?.totalTickets || 1;
        const progress = (sold / total) * 100;

        return (
          <div>
            <div className="text-sm font-medium">
              {sold}/{total}
            </div>
            {progress > 0 && (
              <div className="w-32 h-2 bg-gray-200 rounded-full mt-2">
                <div
                  className="h-full bg-purple-600 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "type",
      header: "Ticket Type",
      cell: ({ row }) => <span>{row?.original?.type || "General"}</span>,
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => {
        const attendee = row.original;
        return (
          <div className="flex gap-2">
            {" "}
            <Button
              onClick={() => handleAcceptClick(attendee)}
              className="rounded-2xl text-black bg-white hover:bg-gray-100 duration-300"
            >
              Accept
            </Button>
            <Button
              onClick={() => handleRejectClick(attendee)}
              className="rounded-2xl text-black bg-white hover:bg-gray-100 duration-300"
            >
              Reject
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <BPTable columns={columns} data={attendeesList || []} />
      <TablePagination totalPage={meta?.totalPage} />
    </div>
  );
};

export default PendingEventsTable;
