import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choptop",
  description:
    "Choptop is an all-in-one event management platform that helps you plan, host, and manage events effortlessly. Create stunning event pages, handle registrations, track attendees, and deliver unforgettable experiences — all in one place.",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="fixed top-0 w-full z-50 ">
        <Navbar />
      </header>
      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default CommonLayout;
