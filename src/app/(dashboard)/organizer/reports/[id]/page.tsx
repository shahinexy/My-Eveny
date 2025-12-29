"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronDown, Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ReportsDetails() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const handleActionSelect = (action: string) => {
    setSelectedAction(action);
    setIsDropdownOpen(false);
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl">
        {/* Header */}
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Reports Details
        </h1>

        {/* Report Card */}
        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          {/* User Info */}
          <div className="flex items-start gap-4 mb-6">
            <Image
              src="/images/boy.png"
              alt="User"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Wade Warren
              </h2>
            </div>
          </div>

          {/* Report Details */}
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <span className="font-semibold text-foreground min-w-fit">
                Report:
              </span>
              <span className="text-foreground">Rude behavior</span>
            </div>
            <div className="flex gap-4">
              <span className="font-semibold text-foreground min-w-fit">
                Venue:
              </span>
              <span className="text-foreground">National Music Fest</span>
            </div>
            <div className="flex gap-4">
              <span className="font-semibold text-foreground min-w-fit">
                Description:
              </span>
              <span className="text-foreground text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisl ut a.
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            {/* Take Action Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
              >
                <span>Take Action</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg p-4 z-10">
                  <div className="space-y-3">
                    {/* Send Warning Option */}
                    <button
                      onClick={() => handleActionSelect("warning")}
                      className="w-full flex items-center justify-between p-3 hover:bg-muted rounded-lg transition-colors text-left"
                    >
                      <span className="text-foreground">Send Warning</span>
                      {selectedAction === "warning" ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>

                    {/* Permanent Block Option */}
                    <button
                      onClick={() => handleActionSelect("block")}
                      className="w-full flex items-center justify-between p-3 hover:bg-muted rounded-lg transition-colors text-left"
                    >
                      <span className="text-foreground">Permanent Block</span>
                      {selectedAction === "block" ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Complete Button */}
            <Link href="/admin/reports">
              <Button className="bg-purple-700 hover:bg-purple-800 text-white px-8">
                Complete
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
