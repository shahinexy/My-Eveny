"use client";

import AppUserList from "@/components/modules/Dashboard/Admin/UserManagement/AppUserList";
import EventOrganizerList from "@/components/modules/Dashboard/Admin/UserManagement/EventOrganizerList";
import ModeratorList from "@/components/modules/Dashboard/Admin/UserManagement/ModeratorList";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type TabType = "app-user" | "event-organizer" | "moderator";

const tabs: { id: TabType; label: string }[] = [
  { id: "app-user", label: "App User" },
  { id: "event-organizer", label: "Event Organizer" },
  { id: "moderator", label: "Moderator" },
];

export default function UserManagement() {
  const [activeTab, setActiveTab] = useState<TabType>("app-user");
  const [open, setOpen] = useState(false);

  // form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.phone) {
      alert("Phone number is required!");
      return;
    }

    console.log("Submitted Moderator Data:", formData);

    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
    });

    // Close modal
    setOpen(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "app-user":
        return <AppUserList />;
      case "event-organizer":
        return <EventOrganizerList />;
      case "moderator":
        return <ModeratorList />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <div className="px-4 mx-auto">
        {/* Header */}
        <div className="mb-8 ">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold  mb-6">
              User Management
            </h1>

            {activeTab === "moderator" && (
              <Button
                className="py-6 px-8"
                variant="gradient"
                onClick={() => setOpen(true)}
              >
                + Add Moderator
              </Button>
            )}
          </div>

          <div className="flex gap-2 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium text-sm transition-colors relative ${
                  activeTab === tab.id
                    ? ""
                    : "text-muted-foreground hover:"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        <Card className="overflow-hidden border border-gray-400 shadow-none">
          <div className="p-4 bg-white">{renderTabContent()}</div>
        </Card>
      </div>

      {/* Add Moderator Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle>Add New Moderator</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 py-2">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter moderator name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter moderator email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />
            </div>

            <DialogFooter>
              <Button
                variant="outline"
                type="button"
                className="bg-white"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button variant="gradient" type="submit">
                Add Moderator
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
