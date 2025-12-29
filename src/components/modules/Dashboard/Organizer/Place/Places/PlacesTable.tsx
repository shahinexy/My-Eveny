/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import {
  Calendar,
  Clock,
  Link2,
  List,
  MapPin,
  Plus,
  Search,
  Tag,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const PlacesTable = () => {
  const [open, setOpen] = useState(false);
  const [addVenueOpen, setAddVenueOpen] = useState(false);
  const [selectedAttendee, setSelectedAttendee] = useState<any>(null);

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
    ],
    meta: {
      total: 12,
      limit: 10,
      page: 2,
      totalPage: 2,
    },
  };

  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");
  const [searchQuery, setSearchQuery] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    venueName: "",
    venueLocation: "",
    aboutVenue: "",
    capacity: "",
    highlights: "",
    tags: "",
    socialLinks: [""],
  });

  const [availabilitySlots, setAvailabilitySlots] = useState([
    {
      id: 1,
      selectedDays: [] as string[],
      openingTime: "",
      closingTime: "",
    },
  ]);

  const [errors, setErrors] = useState<any>({});

  const days = ["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev: any) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSocialLinkChange = (index: number, value: string) => {
    const newLinks = [...formData.socialLinks];
    newLinks[index] = value;
    setFormData((prev) => ({ ...prev, socialLinks: newLinks }));
  };

  const addSocialLink = () => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: [...prev.socialLinks, ""],
    }));
  };

  const removeSocialLink = (index: number) => {
    const newLinks = formData.socialLinks.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, socialLinks: newLinks }));
  };

  const addTimeSlot = () => {
    setAvailabilitySlots((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        selectedDays: [],
        openingTime: "",
        closingTime: "",
      },
    ]);
  };

  const removeTimeSlot = (id: number) => {
    setAvailabilitySlots((prev) => prev.filter((slot) => slot.id !== id));
  };

  const handleDayToggle = (slotId: number, day: string) => {
    setAvailabilitySlots((prev) =>
      prev.map((slot) => {
        if (slot.id === slotId) {
          const newDays = slot.selectedDays.includes(day)
            ? slot.selectedDays.filter((d) => d !== day)
            : [...slot.selectedDays, day];
          return { ...slot, selectedDays: newDays };
        }
        return slot;
      })
    );
  };

  const handleSelectAllDays = (slotId: number) => {
    setAvailabilitySlots((prev) =>
      prev.map((slot) => {
        if (slot.id === slotId) {
          const allSelected = slot.selectedDays.length === days.length;
          return { ...slot, selectedDays: allSelected ? [] : [...days] };
        }
        return slot;
      })
    );
  };

  const handleTimeChange = (
    slotId: number,
    field: "openingTime" | "closingTime",
    value: string
  ) => {
    setAvailabilitySlots((prev) =>
      prev.map((slot) => {
        if (slot.id === slotId) {
          return { ...slot, [field]: value };
        }
        return slot;
      })
    );
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.venueName.trim())
      newErrors.venueName = "Venue name is required";
    if (!formData.venueLocation.trim())
      newErrors.venueLocation = "Venue location is required";
    if (!formData.aboutVenue.trim())
      newErrors.aboutVenue = "About venue is required";
    if (!formData.capacity.trim()) newErrors.capacity = "Capacity is required";
    if (!formData.highlights.trim())
      newErrors.highlights = "Highlights are required";
    if (!formData.tags.trim()) newErrors.tags = "Tags are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      console.log("❌ Validation failed", errors);
      return;
    }

    const submitData = {
      ...formData,
      socialLinks: formData.socialLinks.filter((link) => link.trim() !== ""),
      availability: availabilitySlots
        .map((slot) => ({
          days: slot.selectedDays,
          openingTime: slot.openingTime,
          closingTime: slot.closingTime,
        }))
        .filter((slot) => slot.days.length > 0),
      submittedAt: new Date().toISOString(),
    };

    console.log("✅ Form Submitted Successfully:", submitData);

    // Reset form
    setFormData({
      venueName: "",
      venueLocation: "",
      aboutVenue: "",
      capacity: "",
      highlights: "",
      tags: "",
      socialLinks: [""],
    });
    setAvailabilitySlots([
      {
        id: 1,
        selectedDays: [],
        openingTime: "",
        closingTime: "",
      },
    ]);
    setErrors({});
    setAddVenueOpen(false);
  };

  const columns = [
    {
      accessorKey: "venue",
      header: "Venue",
      cell: ({ row }: any) => (
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-lg bg-gray-200">
            <div className="h-full w-full bg-gradient-to-br from-purple-400 to-pink-400" />
          </div>
          <span className="font-medium">{row?.original?.attendeeName}</span>
        </div>
      ),
    },
    {
      accessorKey: "locations",
      header: "Locations",
      cell: ({ row }: any) => <span>{row?.original?.email}</span>,
    },
    {
      accessorKey: "capacity",
      header: "Capacity",
      cell: ({ row }: any) => <span>{row?.original?.type}</span>,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="border-b border-border bg-card">
        <div className="mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-foreground">Place</h1>
          <p className="mt-1 text-muted-foreground">
            Here is Your Venue Analytics
          </p>
        </div>
      </div>

      <div className="border-b border-border bg-card">
        <div className="mx-auto px-6 py-6">
          <div className="flex gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex justify-center items-center gap-4">
              <div className="relative flex-1 sm:max-w-sm">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search Private Events"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-6"
                />
              </div>
              <div className="">
                <div className="flex gap-2 rounded-full bg-muted p-1">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-colors ${
                      viewMode === "list"
                        ? "bg-purple-600 text-white"
                        : "text-foreground hover:bg-muted-foreground/10"
                    }`}
                  >
                    <List className="h-5 w-5" />
                    List
                  </button>
                  <button
                    onClick={() => setViewMode("calendar")}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-colors ${
                      viewMode === "calendar"
                        ? "bg-purple-600 text-white"
                        : "text-foreground hover:bg-muted-foreground/10"
                    }`}
                  >
                    <Calendar className="h-5 w-5" />
                    Calendar
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => setAddVenueOpen(true)}
                className="flex items-center gap-2 rounded-full bg-purple-600 px-6 py-2 text-white hover:bg-purple-700"
              >
                <Plus className="h-5 w-5" />
                Add Venue
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-6 py-8">
        <BPTable columns={columns} data={attendeesList || []} />
        <TablePagination totalPage={meta?.totalPage} />
      </div>

      {/* Enhanced Add Venue Modal */}
      <Dialog open={addVenueOpen} onOpenChange={setAddVenueOpen}>
        <DialogContent className="max-w-2xl bg-white p-0 max-h-[90vh] overflow-y-auto">
          <DialogHeader className=" top-0 z-10 bg-gradient-to-r  py-5">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-2xl ms-4 font-bold text-black">
                  Add New Venue
                </DialogTitle>
                {/* <p className="text-purple-100 text-sm mt-1">
                  Fill in the venue details below
                </p> */}
              </div>
              <button
                onClick={() => setAddVenueOpen(false)}
                className="rounded-full p-2 hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>
          </DialogHeader>

          <div className="px-6 py-6 space-y-6">
            {/* Venue Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-600" />
                Venue Name<span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="e.g., Grand Ballroom"
                value={formData.venueName}
                onChange={(e) => handleInputChange("venueName", e.target.value)}
                className={`bg-gray-50 border-gray-200  ${
                  errors.venueName ? "border-red-500" : ""
                }`}
              />
              {errors.venueName && (
                <p className="text-xs text-red-500">{errors.venueName}</p>
              )}
            </div>

            {/* Venue Location */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-600" />
                Venue Location<span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="e.g., 123 Main Street, New York, NY"
                value={formData.venueLocation}
                onChange={(e) =>
                  handleInputChange("venueLocation", e.target.value)
                }
                className={`bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500 ${
                  errors.venueLocation ? "border-red-500" : ""
                }`}
              />
              {errors.venueLocation && (
                <p className="text-xs text-red-500">{errors.venueLocation}</p>
              )}
            </div>

            {/* About Venue */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-800">
                About Venue<span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Describe the venue..."
                value={formData.aboutVenue}
                onChange={(e) =>
                  handleInputChange("aboutVenue", e.target.value)
                }
                className={`w-full min-h-[100px] p-3 rounded-lg border bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none resize-none ${
                  errors.aboutVenue ? "border-red-500" : ""
                }`}
              />
              {errors.aboutVenue && (
                <p className="text-xs text-red-500">{errors.aboutVenue}</p>
              )}
            </div>

            {/* Capacity & Highlights - Side by Side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                  <Users className="h-4 w-4 text-purple-600" />
                  Capacity<span className="text-red-500">*</span>
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 500"
                  value={formData.capacity}
                  onChange={(e) =>
                    handleInputChange("capacity", e.target.value)
                  }
                  className={`bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500 ${
                    errors.capacity ? "border-red-500" : ""
                  }`}
                />
                {errors.capacity && (
                  <p className="text-xs text-red-500">{errors.capacity}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-800">
                  Highlights<span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="e.g., WiFi, Parking"
                  value={formData.highlights}
                  onChange={(e) =>
                    handleInputChange("highlights", e.target.value)
                  }
                  className={`bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500 ${
                    errors.highlights ? "border-red-500" : ""
                  }`}
                />
                {errors.highlights && (
                  <p className="text-xs text-red-500">{errors.highlights}</p>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                <Tag className="h-4 w-4 text-purple-600" />
                Tags<span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="e.g., Wedding, Corporate, Conference"
                value={formData.tags}
                onChange={(e) => handleInputChange("tags", e.target.value)}
                className={`bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500 ${
                  errors.tags ? "border-red-500" : ""
                }`}
              />
              {errors.tags && (
                <p className="text-xs text-red-500">{errors.tags}</p>
              )}
            </div>

            {/* Social Media Links */}
            <div className="space-y-3 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                  <Link2 className="h-4 w-4 " />
                  Social Media Links
                </label>
                <button
                  onClick={addSocialLink}
                  className="text-sm text-purple-600 bg-white border border-purple-600 rounded-full px-3 py-1 hover:bg-purple-600 hover:text-white transition-colors"
                >
                  + Add Link
                </button>
              </div>

              {formData.socialLinks.map((link, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder="https://..."
                    value={link}
                    onChange={(e) =>
                      handleSocialLinkChange(index, e.target.value)
                    }
                    className="bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                  {formData.socialLinks.length > 1 && (
                    <button
                      onClick={() => removeSocialLink(index)}
                      className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Availability Section */}
            <div className="space-y-4 border-t-2 border-purple-200 pt-6">
              <div className="flex items-center justify-between">
                <label className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  Availability Schedule
                </label>
                <button
                  onClick={addTimeSlot}
                  className="text-sm text-purple-600 bg-purple-50 border border-purple-600 rounded-full px-4 py-1.5 hover:bg-purple-600 hover:text-white transition-colors"
                >
                  + Add Time Slot
                </button>
              </div>

              {availabilitySlots.map((slot, index) => (
                <div
                  key={slot.id}
                  className="space-y-4 bg-gray-50 p-4 rounded-lg border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-800">
                      Time Slot {index + 1}
                    </h4>
                    {availabilitySlots.length > 1 && (
                      <button
                        onClick={() => removeTimeSlot(slot.id)}
                        className="text-red-600 hover:bg-red-50 p-1 rounded transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  {/* Select Days */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Select Days
                      </span>
                      <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={slot.selectedDays.length === days.length}
                          onChange={() => handleSelectAllDays(slot.id)}
                          className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        Select All
                      </label>
                    </div>

                    <div className="grid grid-cols-7 gap-2">
                      {days.map((day) => (
                        <button
                          key={day}
                          onClick={() => handleDayToggle(slot.id, day)}
                          className={`py-2.5 text-xs font-semibold rounded-lg transition-all ${
                            slot.selectedDays.includes(day)
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                              : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Time */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <label className="text-xs font-medium text-gray-600 mb-1 block">
                        Opening Time
                      </label>
                      <Input
                        type="time"
                        value={slot.openingTime}
                        onChange={(e) =>
                          handleTimeChange(
                            slot.id,
                            "openingTime",
                            e.target.value
                          )
                        }
                        className="bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500 pl-3 pr-10"
                      />
                      <Clock className="absolute right-3 top-[30px] h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>

                    <div className="relative">
                      <label className="text-xs font-medium text-gray-600 mb-1 block">
                        Closing Time
                      </label>
                      <Input
                        type="time"
                        value={slot.closingTime}
                        onChange={(e) =>
                          handleTimeChange(
                            slot.id,
                            "closingTime",
                            e.target.value
                          )
                        }
                        className="bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500 pl-3 pr-10"
                      />
                      <Clock className="absolute right-3 top-[30px] h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <DialogFooter className="sticky bottom-0 bg-white border-t px-6 py-4 flex gap-3">
            <Button
              variant="outline"
              onClick={() => setAddVenueOpen(false)}
              className="flex-1 rounded-full bg-white border-gray-300 hover:bg-gray-50 font-semibold"
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              onClick={handleSubmit}
              className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg"
            >
              Add Venue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Email Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white">
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
              <label className="text-sm font-medium text-gray-700">
                Subject
              </label>
              <Input
                placeholder="Enter email subject"
                className="focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Write your message here..."
                className="min-h-[120px] p-3 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-red-500 focus:outline-none resize-none"
              ></textarea>
            </div>
          </div>

          <DialogFooter className="pt-4">
            <Button
              className="bg-white"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button className="bg-purple-700 hover:bg-purple-600 text-white">
              Send Email
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PlacesTable;
