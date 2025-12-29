import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center">
      <div className="space-y-6 max-w-md">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          404 - Under Construction
        </h1>

        <p className="text-xl text-muted-foreground">
          We&apos;re working on this page. Please check back later or return to
          the homepage.
        </p>

        <iframe
          className="w-full max-w-sm mx-auto h-64 md:h-80"
          src="https://lottie.host/embed/9a0ea178-1368-4057-a575-e8c6e921499a/FzDqBHrNXn.lottie"
        ></iframe>

        <Button className="mt-8">
          <Link href="/" className="flex gap-2 items-center">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
