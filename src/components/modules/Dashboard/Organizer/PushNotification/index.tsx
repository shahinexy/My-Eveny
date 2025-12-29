"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bell, Plus, Upload, X } from "lucide-react";
import { useState } from "react";

interface Notification {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "Maintenance notice",
    description:
      "Scheduled maintenance will occur tonight in 2 AM. Please join the meeting.",
    timestamp: "1 hours ago",
    read: false,
  },
  {
    id: "2",
    title: "Maintenance notice",
    description:
      "Scheduled maintenance will occur tonight in 2 AM. Please join the meeting.",
    timestamp: "1 hours ago",
    read: false,
  },
  {
    id: "3",
    title: "Maintenance notice",
    description:
      "Scheduled maintenance will occur tonight in 2 AM. Please join the meeting.",
    timestamp: "1 hours ago",
    read: false,
  },
  {
    id: "4",
    title: "Maintenance notice",
    description:
      "Scheduled maintenance will occur tonight in 2 AM. Please join the meeting.",
    timestamp: "1 hours ago",
    read: false,
  },
  {
    id: "5",
    title: "Maintenance notice",
    description:
      "Scheduled maintenance will occur tonight in 2 AM. Please join the meeting.",
    timestamp: "1 hours ago",
    read: false,
  },
  {
    id: "6",
    title: "Maintenance notice",
    description:
      "Scheduled maintenance will occur tonight in 2 AM. Please join the meeting.",
    timestamp: "1 hours ago",
    read: false,
  },
];

export default function NotificationsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    category: "",
    picture: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        picture: file,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Notification submitted:", {
      title: formData.title,
      message: formData.message,
      category: formData.category,
      picture: formData.picture?.name || null,
    });
    setFormData({ title: "", message: "", category: "", picture: null });
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="px-4 mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Push Notifications
            </h1>
            <p className="text-gray-500">Here is Your Analytics</p>
          </div>
          <Button
            variant="gradient"
            onClick={() => setIsModalOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2 flex items-center gap-2"
          >
            <Plus size={20} />
            Add Notifications
          </Button>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className="p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    <Bell size={14} className="text-gray-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {notification.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {notification.description}
                  </p>
                </div>

                {/* Right side - Status and Time */}
                <div className="flex-shrink-0 flex flex-col items-end gap-3">
                  <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                  <span className="text-gray-500 text-sm whitespace-nowrap">
                    {notification.timestamp}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md bg-white border-0 shadow-lg">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  New Notifications
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Notification Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Notification Title<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter notification title"
                    className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                {/* Notification Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Notification Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter notification message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    required
                  />
                </div>

                {/* Add Picture */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Add Picture
                  </label>
                  <label className="flex flex-col items-center justify-center w-full px-4 py-8 bg-gray-100 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col items-center justify-center">
                      <Upload size={32} className="text-gray-400 mb-2" />
                      <span className="text-sm text-gray-400">
                        {formData.picture
                          ? formData.picture.name
                          : "Upload Picture Here"}
                      </span>
                    </div>
                    <input
                      type="file"
                      name="picture"
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*"
                    />
                  </label>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Category<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Choose category</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="update">Update</option>
                    <option value="alert">Alert</option>
                    <option value="info">Info</option>
                  </select>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Send Notification
                  </button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      )}
    </main>
  );
}
