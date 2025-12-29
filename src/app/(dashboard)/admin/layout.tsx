import SideBar from "@/components/shared/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choptop",
  description:
    "Choptop is an all-in-one event management platform that helps you plan, host, and manage events effortlessly. Create stunning event pages, handle registrations, track attendees, and deliver unforgettable experiences — all in one place.",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <SideBar />
      <main className="w-full bg-[#f9fafb] text-black border-none">
        <SidebarTrigger />
        <div className="max-w-full mx-auto md:py-5 md:px-0 px-3">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};

export default CommonLayout;
