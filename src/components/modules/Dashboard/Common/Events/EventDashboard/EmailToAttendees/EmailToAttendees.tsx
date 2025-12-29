/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { BPTable } from "@/components/ui/core/BPTable";
import TablePagination from "@/components/ui/core/BPTable/TablePagination";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import RichTextEditor from "./RichTextEditor";

const EmailToAttendeesTable = () => {
  const [open, setOpen] = useState(false);
  const [selectedAttendee, setSelectedAttendee] = useState<any>(null);
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    console.log("Saving HTML:", description);
    // Send to backend with axios or fetch...
  };

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
    ],
    meta: {
      total: 12,
      limit: 10,
      page: 2,
      totalPage: 2,
    },
  };

  const handleSendEmailClick = (attendee: any) => {
    setSelectedAttendee(attendee);
    setOpen(true);
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
      cell: ({ row }) => <span>{row?.original?.email}</span>,
    },
    {
      accessorKey: "type",
      header: "Ticket Type",
      cell: ({ row }) => <span>{row?.original?.type}</span>,
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => {
        const attendee = row.original;
        return (
          <Button
            onClick={() => handleSendEmailClick(attendee)}
            className="rounded-2xl text-black bg-white hover:bg-gray-100 duration-300"
          >
            Send Email
          </Button>
        );
      },
    },
  ];

  return (
    <div>
      <BPTable columns={columns} data={(attendeesList as any) || []} />
      <TablePagination totalPage={meta?.totalPage} />

      {/* Email Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white text-black">
          <DialogHeader>
            <DialogTitle>Send Email</DialogTitle>
            <DialogDescription>
              {selectedAttendee ? (
                <>
                  Sending email to{" "}
                  <span className="font-semibold">
                    {selectedAttendee.attendeeName}
                  </span>{" "}
                  ({selectedAttendee.email})
                </>
              ) : (
                "Fill out the details below to send an email."
              )}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex flex-col space-y-1.5">
              <label>Subject</label>
              <Input
                placeholder="Enter email subject"
                className="focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            <h3>Message</h3>

            <RichTextEditor value={description} onChange={setDescription} />

            <div className="flex justify-between gap-6 mt-6">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Submit
              </button>

              <button
                className="bg-black text-white px-4 py-2 rounded"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>

          <DialogFooter className="pt-4"></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmailToAttendeesTable;
