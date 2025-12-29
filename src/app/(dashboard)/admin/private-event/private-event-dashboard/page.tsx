"use client";

// import { Sidebar } from "@/components/modules/Dashboard/Admin/PrivateEvent/PrivateEventDashboard/Sidebar";
import { AttendeesContent } from "@/components/modules/Dashboard/Common/Events/EventDashboard/AttendeesList";
import { CheckInContent } from "@/components/modules/Dashboard/Common/Events/EventDashboard/CheckInContent";
import { DashboardContent } from "@/components/modules/Dashboard/Common/Events/EventDashboard/Dashboard/Dashboard";
import { EmailsContent } from "@/components/modules/Dashboard/Common/Events/EventDashboard/EmailToAttendees";
import { OrdersContent } from "@/components/modules/Dashboard/Common/Events/EventDashboard/ManageOrders";
import { Sidebar } from "@/components/modules/Dashboard/Common/Events/EventDashboard/Sidebar";
import { useState } from "react";

const EventDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} onSelect={setActiveMenu} />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        {activeMenu === "dashboard" && <DashboardContent />}
        {activeMenu === "orders" && <OrdersContent />}
        {activeMenu === "attendees" && <AttendeesContent />}
        {activeMenu === "emails" && <EmailsContent />}
        {activeMenu === "checkin" && <CheckInContent />}
        {/* {activeMenu === "invite_people" && <InvitePeopleContent />} */}
      </div>
    </div>
  );
};

export default EventDashboard;
