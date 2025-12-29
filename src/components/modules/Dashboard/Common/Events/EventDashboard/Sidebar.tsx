"use client";

import {
  Calendar,
  CheckSquare,
  ClipboardList,
  Mail,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  onSelect: (menu: string) => void;
  activeMenu: string;
}

export const Sidebar = ({ onSelect, activeMenu }: SidebarProps) => {
  const menuItems = [
    { key: "dashboard", label: "Dashboard", icon: Calendar },
    { key: "orders", label: "Manage Orders", icon: ClipboardList },
    { key: "attendees", label: "Attendees List", icon: Users },
    { key: "emails", label: "Emails to Attendees", icon: Mail },
    { key: "checkin", label: "Check-in", icon: CheckSquare },
  ];

  return (
    <div className="w-80 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Header */}
      <div className="relative px-5 pt-4 bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Purple wave accent */}
        <div className="absolute top-0 right-0 w-28 h-28 --translate-y-4">
          <Image
            src="/images/Vector 7269.png"
            alt="Decorative wave accent"
            fill
            className="object-contain opacity-80"
          />
        </div>

        <div className="relative p-5 border-b border-gray-200 space-y-5">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Worker Workshop
          </h2>

          <div className="flex items-center text-sm text-gray-500 mb-4">
            {/* Calendar icon */}
            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
            Sat, Nov 01, 2025, 10:00 AM
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-lg font-medium flex items-center justify-center">
            Publish
            <svg
              className="w-3 h-3 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <Link
            href={"/find-events/123456789"}
            className="w-full border border-purple-700  text-purple-700 py-2.5 rounded-lg font-medium flex items-center justify-center"
          >
            Preview
          </Link>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-3 space-y-1">
        {menuItems.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
              activeMenu === key
                ? "bg-purple-100 text-purple-700"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
};
