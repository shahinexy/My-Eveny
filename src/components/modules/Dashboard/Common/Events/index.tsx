"use client";

import { useState } from "react";
import EventsList from "./EventsList";
import CreateEvent from "../CreateEvent";

// Main App Component
const EventFlowApp = () => {
  const [currentStep, setCurrentStep] = useState("list");


  const handleCreateEvent = () => {
    setCurrentStep("create");
  };

  return (
    <div className="flex bg-gray-50">
      {currentStep === "list" && (
        <EventsList onCreateEvent={handleCreateEvent} />
      )}
      {currentStep === "create" && (
        <CreateEvent
          onBack={() => setCurrentStep("list")}
        />
      )}
    </div>
  );
};

export default EventFlowApp;
