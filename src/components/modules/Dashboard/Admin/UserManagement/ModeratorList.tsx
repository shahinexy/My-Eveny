/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BPTable } from "@/components/ui/core/BPTable";
import TablePagination from "@/components/ui/core/BPTable/TablePagination";
import { ColumnDef } from "@tanstack/react-table";

const ModeratorList = () => {
  const { moderatorList, meta } = {
    moderatorList: [
      {
        moderatorName: "John Doe",
        email: "john.doe@example.com",
        password: "••••••••",
        phoneNumber: "+1 234 567 8901",
        permissions: "Full Access",
      },
      {
        moderatorName: "Sarah Khan",
        email: "sarah.k@example.com",
        password: "••••••••",
        phoneNumber: "+1 987 654 3210",
        permissions: "Event Management",
      },
      {
        moderatorName: "Alex Lee",
        email: "alex.lee@example.com",
        password: "••••••••",
        phoneNumber: "+44 7000 111222",
        permissions: "User Management",
      },
      {
        moderatorName: "Maria Gomez",
        email: "maria.gomez@example.com",
        password: "••••••••",
        phoneNumber: "+34 600 987654",
        permissions: "Limited Access",
      },
      {
        moderatorName: "David Smith",
        email: "david.smith@example.com",
        password: "••••••••",
        phoneNumber: "+1 555 234 7890",
        permissions: "Moderator Only",
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
      accessorKey: "moderatorName",
      header: "Moderator Name",
      cell: ({ row }) => <span>{row.original.moderatorName}</span>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <span>{row.original.email}</span>,
    },
    {
      accessorKey: "password",
      header: "Password",
      cell: ({ row }) => <span>{row.original.password}</span>,
    },
    {
      accessorKey: "phoneNumber",
      header: "Phone Number",
      cell: ({ row }) => <span>{row.original.phoneNumber}</span>,
    },
    {
      accessorKey: "permissions",
      header: "Permissions",
      cell: ({ row }) => <span>{row.original.permissions}</span>,
    },
  ];

  return (
    <div className="space-y-4">
      <BPTable columns={columns} data={moderatorList || []} />
      <TablePagination totalPage={meta.totalPage} />
    </div>
  );
};

export default ModeratorList;
