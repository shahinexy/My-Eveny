"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import OrganizerProfile from "./GeneralSettings";
import PasswordSetting from "./PasswordSetting";

type TabType = "general_settingsr" | "password_setting";

const tabs: { id: TabType; label: string }[] = [
  { id: "general_settingsr", label: "General Settings" },
  { id: "password_setting", label: "Password Setting" },
];

export default function ProfileSetting() {
  const [activeTab, setActiveTab] = useState<TabType>("general_settingsr");

  const renderTabContent = () => {
    switch (activeTab) {
      case "general_settingsr":
        return <OrganizerProfile />;
      case "password_setting":
        return <PasswordSetting />;
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
