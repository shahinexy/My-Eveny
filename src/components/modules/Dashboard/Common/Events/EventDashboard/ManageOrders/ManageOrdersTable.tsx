/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BPTable } from "@/components/ui/core/BPTable";
import TablePagination from "@/components/ui/core/BPTable/TablePagination";
import { ColumnDef } from "@tanstack/react-table";

const ManageOrdersTable = () => {
  const { manageOrders, meta } = {
    manageOrders: [
      {
        id: "ORD-001",
        ticketName: "VIP Pass - Concert 2025",
        quantity: 10,
        type: "VIP",
        price: "$120",
        date: "2025-10-20",
      },
      {
        id: "ORD-002",
        ticketName: "Standard Entry - Concert 2025",
        quantity: 2,
        type: "Standard",
        price: "$60",
        date: "2025-10-21",
        status: "Free",
      },
      {
        id: "ORD-003",
        ticketName: "Backstage Access - Concert 2025",
        quantity: 10,
        type: "Premium",
        price: "$250",
        date: "2025-10-22",
      },
      {
        id: "ORD-003",
        ticketName: "Backstage Access - Concert 2025",
        quantity: 10,
        type: "Premium",
        price: "$250",
        date: "2025-10-22",
      },
      {
        id: "ORD-003",
        ticketName: "Backstage Access - Concert 2025",
        quantity: 10,
        type: "Premium",
        price: "$250",
        date: "2025-10-22",
      },
      {
        id: "ORD-003",
        ticketName: "Backstage Access - Concert 2025",
        quantity: 10,
        type: "Premium",
        price: "$250",
        date: "2025-10-22",
      },
      {
        id: "ORD-003",
        ticketName: "Backstage Access - Concert 2025",
        quantity: 10,
        type: "Premium",
        price: "$250",
        date: "2025-10-22",
      },
      {
        id: "ORD-003",
        ticketName: "Backstage Access - Concert 2025",
        quantity: 10,
        type: "Premium",
        price: "$250",
        date: "2025-10-22",
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
      accessorKey: "quantity",
      header: "Quantity",
      cell: ({ row }) => <span>{row?.original?.quantity}</span>,
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
  ];

  return (
    <div>
      <BPTable columns={columns} data={(manageOrders as any) || []} />
      {<TablePagination totalPage={meta?.totalPage} />}
    </div>
  );
};

export default ManageOrdersTable;
