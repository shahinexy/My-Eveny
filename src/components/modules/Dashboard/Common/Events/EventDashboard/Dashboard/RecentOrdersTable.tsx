/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BPTable } from "@/components/ui/core/BPTable";
import { ColumnDef } from "@tanstack/react-table";

const RecentOrdersTable = () => {
  const { recentOrders, meta } = {
    recentOrders: [
      {
        id: "ORD-001",
        ticketName: "VIP Pass - Concert 2025",
        customerName: "Tony Stark",
        type: "VIP",
        price: "$120",
        date: "2025-10-20",
      },
      {
        id: "ORD-002",
        ticketName: "Standard Entry - Concert 2025",
        customerName: "Steve Rogers",
        type: "Standard",
        price: "$60",
        date: "2025-10-21",
        status: "Free",
      },
      {
        id: "ORD-003",
        ticketName: "Backstage Access - Concert 2025",
        customerName: "Natasha Romanoff",
        type: "Premium",
        price: "$250",
        date: "2025-10-22",
      },
    ],
    meta: {
      total: 3,
      limit: 10,
      page: 1,
      totalPage: 1,
    },
  };

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "order",
      header: "Order",
      cell: ({ row }) => <span>{row?.original?.id}</span>,
    },
    {
      accessorKey: "ticketName",
      header: "Ticket Name",
      cell: ({ row }) => <span>{row?.original?.ticketName}</span>,
    },
    {
      accessorKey: "customerName",
      header: "Customer",
      cell: ({ row }) => <span>{row?.original?.customerName}</span>,
    },
    {
      accessorKey: "type",
      header: "Type",
      cell: ({ row }) => <span>{row?.original?.type}</span>,
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => <span>{row?.original?.price}</span>,
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => (
        <span>{new Date(row?.original?.date).toLocaleDateString()}</span>
      ),
    },
    // {
    //   accessorKey: "status",
    //   header: "Status",
    //   cell: ({ row }) => {
    //     const status = row.original.status.toLowerCase();
    //     const label = status.charAt(0).toUpperCase() + status.slice(1);

    //     let bgClass = "";
    //     let textClass = "";

    //     switch (status) {
    //       case "paid":
    //         bgClass = "bg-[#E0F8F3]";
    //         textClass = "text-[#00B187]";
    //         break;
    //       case "free":
    //         bgClass = "bg-[#FFF5E6]";
    //         textClass = "text-[#FFA500]";
    //         break;
    //       case "cancelled":
    //         bgClass = "bg-[#FDEDED]";
    //         textClass = "text-[#FF4D4F]";
    //         break;
    //       default:
    //         bgClass = "bg-gray-200";
    //         textClass = "text-gray-600";
    //     }

    //     return (
    //       <span
    //         className={`px-4 py-1 rounded-full text-sm font-medium ${bgClass} ${textClass}`}
    //       >
    //         {label}
    //       </span>
    //     );
    //   },
    // },
  ];

  return (
    <div>
      <div>
        <h1 className="text-2xl mb-4 font-semibold text-gray-800">
          Recent Orders
        </h1>
      </div>

      <BPTable columns={columns} data={(recentOrders as any) || []} />

      {/* Example: {<TablePagination totalPage={meta?.totalPage} />} */}
    </div>
  );
};

export default RecentOrdersTable;
