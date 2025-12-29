import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ReduxProvider from "@/redux/provider/ReduxProvider";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Choptop",
  description:
    "Choptop is an all-in-one event management platform that helps you plan, host, and manage events effortlessly. Create stunning event pages, handle registrations, track attendees, and deliver unforgettable experiences — all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${spaceGrotesk.variable} ${poppins.variable} antialiased font-poppins`}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="bottom-right" richColors />
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
