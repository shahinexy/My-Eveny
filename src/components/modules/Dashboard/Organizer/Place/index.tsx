"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Edit2, List, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function VenuePage() {
  const [view, setView] = useState<"list" | "calendar">("list");
  //   const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto container px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Place</h1>
          <p className="mt-1 text-sm text-gray-500">
            Here is Your Venue Analytics
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto container px-6 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            {/* <div className="relative flex-1 sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search Venue"
                value={searchQuery}F
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div> */}

            {/* View Toggle */}
            <div className="flex gap-2">
              <Button
                onClick={() => setView("list")}
                className={`gap-2 ${
                  view === "list"
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-gray-300"
                }`}
              >
                <List className="h-4 w-4" />
                List
              </Button>
              <Button
                onClick={() => setView("calendar")}
                variant={view === "calendar" ? "default" : "outline"}
                className={
                  view === "calendar"
                    ? "bg-purple-600  text-white"
                    : "bg-gray-300"
                }
              >
                <Calendar className="h-4 w-4" />
                Calendar
              </Button>
            </div>

            {/* Add Venue Button */}

            <Link href="/Admin/place/places">
              <Button variant="gradient" className="gap-2 py-6 px-8">
                <Plus className="h-4 w-4" />
                Add Venue
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Column Headers */}
      {/* <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-600">
            <div>Venue</div>
            <div>Locations</div>
            <div>Status</div>
          </div>
        </div>
      </div> */}

      {/* Empty State */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Add New Venue Card */}
          <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              <Edit2 className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Add New Venue
            </h3>
            <p className="mb-6 text-sm text-gray-600">
              Fill in the location name, address, and key details to create and
              save a new venue for hosting your events.
            </p>
            <Link href="/Admin/place/places">
              {" "}
              <Button className="bg-gray-100 py-6 px-8 text-gray-900 hover:bg-gray-200">
                Add Venue
              </Button>
            </Link>
          </div>

          {/* How To Add Venue Card */}
          <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              <BookOpen className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              How To Add Venue
            </h3>
            <p className="mb-6 text-sm text-gray-600">
              A quick guide to entering and saving venue details for your
              events.
            </p>
            <Button className="bg-gray-100 py-6 px-8 text-gray-900 hover:bg-gray-200">
              Watch video
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
