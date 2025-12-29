/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BPTable } from "@/components/ui/core/BPTable";
import TablePagination from "@/components/ui/core/BPTable/TablePagination";
import { ColumnDef } from "@tanstack/react-table";

const AppUserList = () => {
  const { appUserList, meta } = {
    appUserList: [
      {
        userName: "John Doe",
        email: "john.doe@example.com",
        dateOfBirth: "1995-03-15",
        gender: "Male",
        phoneNumber: "+1 234 567 8901",
        joinedDate: "2025-10-20",
      },
      {
        userName: "Sarah Khan",
        email: "sarah.k@example.com",
        dateOfBirth: "1998-07-22",
        gender: "Female",
        phoneNumber: "+1 987 654 3210",
        joinedDate: "2025-10-21",
      },
      {
        userName: "Alex Lee",
        email: "alex.lee@example.com",
        dateOfBirth: "1992-01-05",
        gender: "Male",
        phoneNumber: "+44 7000 111222",
        joinedDate: "2025-10-22",
      },
      {
        userName: "Maria Gomez",
        email: "maria.gomez@example.com",
        dateOfBirth: "1999-06-12",
        gender: "Female",
        phoneNumber: "+34 600 987654",
        joinedDate: "2025-10-23",
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
      accessorKey: "userName",
      header: "User Name",
      cell: ({ row }) => <span>{row.original.userName}</span>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <span>{row.original.email}</span>,
    },
    {
      accessorKey: "dateOfBirth",
      header: "Date Of Birth",
      cell: ({ row }) => <span>{row.original.dateOfBirth}</span>,
    },
    {
      accessorKey: "gender",
      header: "Gender",
      cell: ({ row }) => <span>{row.original.gender}</span>,
    },
    {
      accessorKey: "phoneNumber",
      header: "Phone Number",
      cell: ({ row }) => <span>{row.original.phoneNumber}</span>,
    },
    {
      accessorKey: "joinedDate",
      header: "Joined Date",
      cell: ({ row }) => <span>{row.original.joinedDate}</span>,
    },
  ];

  return (
    <div className="space-y-4">
      <BPTable columns={columns} data={appUserList || []} />
      <TablePagination totalPage={meta.totalPage} />
    </div>
  );
};

export default AppUserList;
