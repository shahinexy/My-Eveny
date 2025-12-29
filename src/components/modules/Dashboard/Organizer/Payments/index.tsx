"use client";

// import { Card } from "@/components/ui/card";
// import { useState } from "react";
import PendingEventsTable from "./PendingEventsTable";

// type TabType = "payouts" | "chargesInvoices" | "bankPayments";

// const tabs: { id: TabType; label: string }[] = [
//   { id: "payouts", label: "Payouts" },
//   { id: "chargesInvoices", label: "Charges & Invoices" },
//   { id: "bankPayments", label: "Bank Payments" },
// ];

export default function Payments() {
  // const [activeTab, setActiveTab] = useState<TabType>("payouts");

  // const renderTabContent = () => {
  //   switch (activeTab) {
  //     case "payouts":
  //       return <PendingEventsTable />;
  //     case "chargesInvoices":
  //       return <p>Coming Soon</p>;
  //     case "bankPayments":
  //       return <p>Coming Soon</p>;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <div className="min-h-screen p-6">
      <div className="px-4 mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold  mb-6">Payments</h1>

          {/* <div className="flex gap-2 border-b border-border">
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
          </div> */}
        </div>
        <PendingEventsTable />
        {/* <Card className="overflow-hidden border border-black">
          <div className="p-4 bg-white">{renderTabContent()}</div>
        </Card> */}
      </div>
    </div>
  );
}
