"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { removeCookie } from "@/utils/cookies";
import { MapPin, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiSearch, FiSliders } from "react-icons/fi";
import { HiMenuAlt1 } from "react-icons/hi";

type FormData = {
  query: string;
  location: string;
};

const navLinks = [
  {
    name: "Find Events",
    path: "/find-events",
  },
  {
    name: "Host Event",
    path: "/host-events",
  },
  {
    name: "Discover Places",
    path: "/discover-places",
  },
];

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const { data } = useGetMeQuery(undefined);
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  const userData = data?.data;

  const handleNavLinkClick = () => {
    setIsSheetOpen(false);
  };

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      query: "",
      location: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Search data:", data);
    router.push("/search");
  };

  const handleLogout = () => {
    dispatch(logout());
    removeCookie("token");
    router.push("/login");
  };

  const navColor = [
    "/search",
    "/terms-of-service",
    "/privacy-policy",
    "/payment",
    "/find-events",
    "/discover-places",
  ];

  return (
    <div
      className={`md:p-3 px-1 ${
        navColor.includes(pathName) ? "bg-primary" : "bg-black/20 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1950px] mx-auto flex justify-between items-center gap-2 text-white">
        {/* small device menu */}
        <div className="flex items-center gap-4 md:gap-5">
          <div className="lg:hidden mt-2">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger>
                <HiMenuAlt1 className="text-3xl cursor-pointer text-white" />
              </SheetTrigger>
              <SheetContent side="left" className=" ">
                <nav className="mt-5">
                  <ul className="space-y-2 flex flex-col z-40">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={`${link.path}`}
                        className={`${
                          pathName === `${link.path}`
                            ? "bg-primary text-white px-5 py-2 rounded-md"
                            : ""
                        } hover:bg-primary hover:text-white px-5 py-2 rounded-md duration-300`}
                        onClick={handleNavLinkClick}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </ul>
                </nav>

                <div className="mt-8">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-80 flex items-center gap-2 bg-white rounded-lg p-2"
                  >
                    <input
                      {...register("query")}
                      type="text"
                      placeholder="Find things, Places to go"
                      className="flex-1 outline-none min-w-0 px-3 py-2 text-sm text-black bg-white"
                    />
                    <button
                      type="submit"
                      className="bg-primary hover:bg-orange-500  duration-300 text-white px-4 py-2 rounded-lg"
                    >
                      <FiSearch />
                    </button>
                  </form>
                </div>
                <SheetClose asChild>
                  <Button variant="outline" className="mt-5 w-full bg-primary">
                    Close
                  </Button>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>

          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              height={120}
              width={300}
              alt="logo"
              className="md:w-20 w-14"
            />
          </Link>
        </div>

        {/* search form  */}
        <div className="md:block hidden">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full items-center gap-2 bg-white rounded-lg lg:p-2 p-1"
          >
            <input
              {...register("query")}
              type="text"
              placeholder="Find things, Places to go"
              className="outline-none xl:w-[200px]  lg:w-[120px] md:w-28 lg:px-4 px-1 lg:py-2 py-1 rounded-full bg-white text-black text-sm"
            />
            <div className="flex items-center gap-2 border-l border-gray-300 lg:pl-4 pl-2">
              <span className="text-gray-800">
                {" "}
                <MapPin />{" "}
              </span>
              <input
                {...register("location")}
                type="text"
                placeholder="Location"
                className="outline-none xl:w-[150px] lg:w-[100px] md:w-24 bg-white text-black lg:px-2 px-1 rounded-full text-sm"
              />
            </div>

            <button
              type="button"
              className="bg-primary hover:bg-orange-500 duration-300 text-white p-2 rounded-full"
            >
              <FiSliders size={18} />
            </button>

            <button
              type="submit"
              className="bg-primary hover:bg-orange-500  duration-300 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <FiSearch />
              <span className="xl:inline-block lg:hidden inline-block text-sm">
                Search
              </span>
            </button>
          </form>
        </div>
        {/* large device menu  */}
        <div className="lg:flex hidden items-center">
          <ul className="text-white">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={`${link.path}`}
                className={`px-3 py-1 hover:border-b border-white duration-300 whitespace-nowrap ${
                  pathName === `${link.path}` ? "border-b" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>

        {/* login register  */}
        <div className="flex md:gap-3 gap-2 items-center">
          <div className="inline-block">
            {resolvedTheme === "light" ? (
              <div
                onClick={() => setTheme("dark")}
                className="cursor-pointer bg-primary/80 md:p-2 p-1 rounded-full"
              >
                <Sun />
              </div>
            ) : (
              <div
                onClick={() => setTheme("light")}
                className="cursor-pointer bg-black/20 md:p-2 p-1 rounded-full"
              >
                <Moon />
              </div>
            )}
          </div>
          {userData ? (
            <div className="flex gap-3">
              <div className=" flex gap-2 items-center md:px-4 px-2 md:py-2 py-[2px] rounded-full bg-white">
                <Image
                  src={
                    userData?.profileImage ||
                    "/public/placeholders/image_placeholder.png"
                  }
                  height={100}
                  width={100}
                  alt="profile"
                />
                <div className="">
                  <p className="text-sm">{userData?.fullName}</p>
                  <p className="font-medium text-sm">{userData?.role}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-white text-black px-8 py-3 font-medium rounded-md hover:bg-white duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href={"/login"}>
              <button className="bg-white text-black md:text-base text-sm whitespace-nowrap md:px-8 px-3 md:py-3 py-2 font-medium rounded-md hover:bg-white duration-300">
                Log in
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
