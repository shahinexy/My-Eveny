/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { BPTable } from "@/components/ui/core/BPTable";
import TablePagination from "@/components/ui/core/BPTable/TablePagination";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

const PlacesTable = () => {
  // Mock Data
  const { venuesList, meta } = {
    venuesList: [
      {
        id: "PL-001",
        venueName: "Stark Tower",
        location: "Manhattan, New York",
        capacity: "5000",
      },
      {
        id: "PL-002",
        venueName: "Avengers HQ",
        location: "Upstate, New York",
        capacity: "3000",
      },
      {
        id: "PL-003",
        venueName: "SHIELD Base",
        location: "Washington D.C.",
        capacity: "1500",
      },
      {
        id: "PL-004",
        venueName: "Wakanda Arena",
        location: "Birnin Zana",
        capacity: "8000",
      },
      {
        id: "PL-005",
        venueName: "Asgard Hall",
        location: "New Asgard",
        capacity: "4000",
      },
    ],
    meta: {
      total: 12,
      limit: 10,
      page: 2,
      totalPage: 2,
    },
  };

  const [searchQuery, setSearchQuery] = useState("");

  // Filtered Data
  const filteredVenues = useMemo(() => {
    return venuesList.filter((venue) =>
      venue.venueName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [venuesList, searchQuery]);

  // Table Columns
  const columns = [
    {
      accessorKey: "venue",
      header: "Venue",
      cell: ({ row }: any) => (
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-lg bg-gray-200">
            <div className="h-full w-full bg-gradient-to-br from-purple-400 to-pink-400" />
          </div>
          <span className="font-medium">{row?.original?.venueName}</span>
        </div>
      ),
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }: any) => <span>{row?.original?.location}</span>,
    },
    {
      accessorKey: "capacity",
      header: "Capacity",
      cell: ({ row }: any) => <span>{row?.original?.capacity}</span>,
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="border-b text-black">
        <div className="flex justify-between items-center px-6 py-8">
          <div className="">
            <h1 className="text-4xl font-bold ">Places</h1>
            <p className="mt-1 text-muted-foreground">
              Manage and view your available venues.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative mt-6 w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search Venues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6"
            />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="mx-auto px-6 py-8">
        <BPTable columns={columns} data={filteredVenues} />
        <div className="mt-4">
          <TablePagination totalPage={meta?.totalPage} />
        </div>
      </div>
    </div>
  );
};

export default PlacesTable;
