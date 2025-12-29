"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function OrganizerProfile() {
  const [formData, setFormData] = useState({
    name: "Wade Warren",
    phone: "",
    address1: "Platis Gialos, Mykonos, Greece",
    address2: "Platis Gialos, Mykonos, Greece",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving changes:", formData);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Logo Section */}
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">Organizer Logo</p>
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z5aw2EPx0aGNnN9DbQxQJREf5bTXEp.png"
                alt="Organizer Logo"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Add Phone Number"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition"
            />
          </div>

          {/* Address 1 Field */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition"
            />
          </div>

          {/* Address 2 Field */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-6">
            <Button
              onClick={handleSave}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-lg font-medium transition"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
