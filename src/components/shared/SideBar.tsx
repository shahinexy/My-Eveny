"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { removeCookie } from "@/utils/cookies";
import {
  BarChart2,
  Bell,
  ClipboardList,
  ClipboardMinus,
  Contact,
  LayoutDashboard,
  MapPin,
  Megaphone,
  Settings2,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const admin = [
  {
    title: "Home",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Events",
    url: "/admin/events",
    icon: ClipboardMinus,
  },
  {
    title: "Private Event",
    url: "/admin/private-event",
    icon: Contact,
  },
  {
    title: "Place",
    url: "/admin/place",
    icon: MapPin,
  },
  {
    title: "Pending Events",
    url: "/admin/pending-events",
    icon: ClipboardList,
  },
  {
    title: "User Management",
    url: "/admin/user-management",
    icon: Users,
  },
  {
    title: "Push Notification",
    url: "/admin/push-notification",
    icon: Bell,
  },
  {
    title: "Setting",
    url: "/admin/setting",
    icon: Settings2,
  },
  {
    title: "Reports",
    url: "/admin/reports",
    icon: BarChart2,
  },
];
const user = [
  {
    title: "Home",
    url: "/organizer",
    icon: LayoutDashboard,
  },
  {
    title: "Events",
    url: "/organizer/events",
    icon: ClipboardMinus,
  },
  {
    title: "Private Event",
    url: "/organizer/private-event",
    icon: Contact,
  },
  {
    title: "Marketing & Analysis",
    url: "/organizer/marketing-analysis",
    icon: Megaphone,
  },
  {
    title: "Place",
    url: "/organizer/place",
    icon: MapPin,
  },
  {
    title: "Payments",
    url: "/organizer/payments",
    icon: ClipboardList,
  },
  {
    title: "Followers",
    url: "/organizer/follower",
    icon: Users,
  },
  // {
  //   title: "Push Notification",
  //   url: "/organizer/push_notification",
  //   icon: Bell,
  // },
  {
    title: "Setting",
    url: "/organizer/setting",
    icon: Settings2,
  },
  // {
  //   title: "Reports",
  //   url: "/organizer/reports",
  //   icon: BarChart2,
  // },
];

const SideBar = () => {
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const items = pathName?.includes("admin") ? admin : user;

  const handleLolgout = () => {
    dispatch(logout());
    removeCookie("token");
    router.push("/login");
  };
  return (
    <Sidebar>
      <SidebarContent className="bg-white">
        <SidebarGroup />
        <div className="flex justify-center items-center">
          <Link href="/">
            <SidebarGroupLabel className="mb-14 mt-8 mx-auto">
              <Image
                src={"/icons/dashboardIcon.svg"}
                alt="logo"
                width={150}
                height={20}
              />
            </SidebarGroupLabel>
          </Link>
        </div>
        <SidebarGroupContent>
          <SidebarMenu className="px-4 ">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`text-[15px] font-semibold hover:bg-gray-100 hover:text-black py-6 px-8 rounded-xl ${
                    pathName === `${item.url}`
                      ? "bg-gradient-to-r from-indigo-800 to-pink-500  text-white font-semibold shadow-md hover:opacity-90 transition-all duration-300"
                      : "text-black"
                  }`}
                >
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="bg-white">
        <button
          onClick={handleLolgout}
          className="py-3 border border-red-400 text-black rounded-lg font-medium text-base"
        >
          Log out
        </button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideBar;
