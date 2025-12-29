/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BPTable } from "@/components/ui/core/BPTable";
import { ColumnDef } from "@tanstack/react-table";
import { Menu } from "lucide-react";
import { useState } from "react";

const SalesByTicketTable = () => {
  const { estimates, meta } = {
    estimates: [
      {
        ticketName: "VIP Pass - Concert 2025",
        soldTicket: "120",
        status: "Free",
      },
      {
        ticketName: "Standard Entry - Concert 2025",
        soldTicket: "350",
        status: "Paid",
      },
      {
        ticketName: "Backstage Access - Concert 2025",
        soldTicket: "25",
        status: "Paid",
      },
    ],
    meta: {
      total: 5,
      limit: 10,
      page: 1,
      totalPage: 1,
    },
  };

  console.log("estimates", estimates);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "ticketName",
      header: "Ticket Name",
      cell: ({ row }) => (
        <span className="flex items-center text-xl gap-6">
          <Menu /> {row?.original?.ticketName}
        </span>
      ),
    },
    {
      accessorKey: "soldTicket",
      header: "Sold Ticket",
      cell: ({ row }) => <span>{row?.original?.soldTicket}</span>,
    },

    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status.toLowerCase();
        const label = status.charAt(0).toUpperCase() + status.slice(1);

        let bgClass = "";
        let textClass = "";

        switch (status) {
          case "available":
            bgClass = "bg-[#E0F8F3]";
            textClass = "text-[#00B187]";
            break;
          case "pending":
            bgClass = "bg-[#FFF5E6]";
            textClass = "text-[#FFA500]";
            break;
          case "reject":
            bgClass = "bg-[#FDEDED]";
            textClass = "text-[#FF4D4F]";
            break;
          default:
            bgClass = "bg-gray-200";
            textClass = "text-gray-600";
        }

        return (
          <span
            className={`px-4 py-1 rounded-full text-sm font-medium ${bgClass} ${textClass}`}
          >
            {label}
          </span>
        );
      },
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-2xl mb-4 font-semibold text-gray-800">
          Sales by ticket type
        </h1>
      </div>

      <BPTable columns={columns} data={(estimates as any) || []} />

      {/* {<TablePagination totalPage={meta?.totalPage} />} */}
    </div>
  );
};

export default SalesByTicketTable;
