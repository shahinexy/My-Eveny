/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Calendar,
  ChevronRight,
  ImageIcon,
  Menu,
  MoreVertical,
  Plus,
  Search,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const initialEvents = [
  {
    id: 1,
    date: 19,
    title: "Worker Workshop",
    time: "Wed, Sep 20, 2025, 09:00 AM",
    soldTickets: 47,
    totalTickets: 200,
    grossAmount: 30000,
    status: "Ongoing",
  },
  {
    id: 2,
    date: 20,
    title: "Tech Conference",
    time: "Thu, Sep 21, 2025, 09:00 AM",
    soldTickets: 150,
    totalTickets: 250,
    grossAmount: 45000,
    status: "Ongoing",
  },
];

const EventsList = ({ onCreateEvent }: any) => {
  const [viewMode, setViewMode] = useState("list");
  const [searchQuery, setSearchQuery] = useState("");

  const path = usePathname();

  return (
    <div className="flex-1 bg-gray-50">
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-semibold">
                  {path === "/organizer/events" ? "Events" : "Privet Events"}{" "}
                </h1>
                <p className="text-sm text-gray-500">
                  Hi! Here&apos;s your Analytics
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Events"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 bg-white text-black"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                </div>
                <Button
                  variant="gradient"
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-colors"
                  onClick={onCreateEvent}
                >
                  <Plus className="w-5 h-5" />
                  Create Event
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                className={`px-6 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                  viewMode === "list"
                    ? "bg-gradient-to-l to-[#2C096D] from-[#C12274] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setViewMode("list")}
              >
                <Menu className="w-4 h-4" />
                List
              </button>
              <button
                className={`px-6 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                  viewMode === "calendar"
                    ? "bg-gradient-to-l to-[#2C096D] from-[#C12274] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setViewMode("calendar")}
              >
                <Calendar className="w-4 h-4" />
                Calendar
              </button>
            </div>
          </div>

          <EventsTable events={initialEvents} />

          <div className="p-4 flex items-center justify-between border-t border-gray-200">
            <div className="text-sm text-gray-600">Page 1 of 10</div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm">
                1
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm flex items-center gap-2 hover:bg-purple-700 transition-colors">
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsList;

const EventsTable = ({ events }: any) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Event
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Sold Ticket
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Gross Amount
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Status
            </th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {events.map((event: any) => {
            const progress = (event.soldTickets / event.totalTickets) * 100;

            return (
              <tr
                key={event.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  <Link
                    href={`/organizer/events/event-dashboard`}
                    className="flex items-center gap-4"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-semibold">{event.date}</div>
                    </div>
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-gray-500">{event.time}</div>
                    </div>
                  </Link>
                </td>

                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium">
                      {event.soldTickets}/{event.totalTickets}
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
                </td>

                <td className="px-6 py-4">
                  <div className="font-medium">
                    ${event.grossAmount.toLocaleString()}
                  </div>
                </td>

                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600">{event.status}</span>
                </td>

                <td className="px-6 py-4">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreVertical className="w-5 h-5 text-gray-400" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
