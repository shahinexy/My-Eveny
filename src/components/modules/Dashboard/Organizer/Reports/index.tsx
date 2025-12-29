"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import Events from "./Events";
import Venue from "./Venue";

type TabType = "events" | "venue";

const tabs: { id: TabType; label: string }[] = [
  { id: "events", label: "Events" },
  { id: "venue", label: "Venue" },
];

export default function Reports() {
  const [activeTab, setActiveTab] = useState<TabType>("events");

  const renderTabContent = () => {
    switch (activeTab) {
      case "events":
        return <Events />;
      case "venue":
        return <Venue />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen p-6">
      <div className="px-4 mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-6">
            User Management
          </h1>

          <div className="flex gap-2 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium text-sm transition-colors relative ${
                  activeTab === tab.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
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

        <Card className="overflow-hidden">
          <div className="p-4">{renderTabContent()}</div>
        </Card>
      </div>
    </main>
  );
}
