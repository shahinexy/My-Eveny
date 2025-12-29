"use client";
import Image from "next/image";
import Link from "next/link";
import MyContainer from "../common/MyContainer";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const pathName = usePathname();
  const footerNav = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/discover-places",
      name: "Venue",
    },
    {
      path: "/create-event",
      name: "Create Event",
    },
    {
      path: "/about",
      name: "About",
    },
  ];

  const hiddenFooter = ["/find-events", "/discover-places"];

  return (
    <section
      className={`md:m-5  rounded-xl text-white py-7 ${
        resolvedTheme == "light" ? "bg-primary" : "bg-black"
      } ${hiddenFooter.includes(pathName) ? "hidden" : ""}`}
    >
      <MyContainer>
        <div className="flex gap-2 items-center">
          <Image src={"/images/logo.png"} alt="logo" width={90} height={90} />
        </div>
        <div className="md:p-7 p-5 md:space-y-5 space-y-4 border-y md:my-7 my-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between md:gap-3 gap-6">
            <div className="md:space-y-4 space-y-3">
              <h4 className="md:text-2xl text-xl font-medium">Special Links</h4>
              <ul className="space-y-2">
                {footerNav?.map((link) => (
                  <li key={link.path}>
                    <Link key={link.path} href={`${link.path}`}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="w-full flex gap-6">
                <Link
                  href={"/"}
                  className="bg-white w-12 h-12 rounded-full flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#000000"
                      d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"
                    />
                  </svg>
                </Link>
                <Link
                  href={"/"}
                  className="bg-white w-12 h-12 rounded-full flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#000000"
                      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                    />
                  </svg>
                </Link>
                <Link
                  href={"/"}
                  className="bg-white w-12 h-12 rounded-full flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#000000"
                      d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599c.28.28.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598a2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233c0-2.136.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92c.28-.28.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334z"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="md:space-y-4 space-y-3">
              <h4 className="md:text-2xl text-xl font-medium">Legal & Data</h4>
              <ul className="space-y-2">
                <li>
                  <Link href={`/privacy-policy`}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={`/terms-of-service`}>Terms of Service</Link>
                </li>
              </ul>
            </div>

            <div className="md:space-y-4 space-y-3">
              <h4 className="md:text-2xl text-xl font-medium">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href={`/contact`}>Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="md:space-y-4 space-y-3">
              <h4 className="md:text-2xl text-xl font-medium">Address</h4>
              <ul className="space-y-2">
                <li>6391 Elgin St. Celina, Delaware 10299</li>
                <li>+(907) 555-0101</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-sm">Copyright © 2010-2025 All rights reserved.</p>
      </MyContainer>
    </section>
  );
};

export default Footer;
