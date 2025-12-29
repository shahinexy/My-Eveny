"use client";
import { MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const PlaceCard = ({ data }: { data: number }) => {
  const { resolvedTheme } = useTheme();
  return (
    <Link
      href={`/place/${"123456789"}`}
      className={`rounded-t-3xl ${
        resolvedTheme === "light"
          ? "bg-white shadow-[0_0_12px_rgba(0,0,0,0.18)]"
          : "bg-black shadow-primary shadow-sm"
      }`}
    >
      <div className="relative w-full h-40 rounded-2xl overflow-hidden">
        <Image
          src={"/images/place-img.jpeg"}
          alt="image"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-2 p-3 text-start">
        <div className="flex justify-between gap-2 items-center">
          <h3 className="line-clamp-1 text-lg font-medium">
            National Music Festival
          </h3>
          {data % 2 === 0 ? (
            <FaHeart className="text-xl text-[#AD00FF] cursor-pointer" />
          ) : (
            <FaRegHeart className="text-xl text-[#AD00FF] cursor-pointer" />
          )}
        </div>

        <div className="space-y-1 text-sm">
          <p className="text-gray-600">Close at: 10 PM </p>
          <p className="flex gap-1 items-center">
            <MapPin size={15} /> Garden Park, New York
          </p>
        </div>
        <div className="space-y-2">
          {/* <h3 className="line-clamp-1 font-medium text-base">From UGX175.26</h3> */}
          <div className="flex gap-3">
            <button className="bg-gray-200 text-gray-800 px-2 rounded-full text-xs">
              Dj
            </button>
            <button className="bg-gray-200 text-gray-800 px-2 rounded-full text-xs">
              Food
            </button>
            <button className="bg-gray-200 text-gray-800 px-2 rounded-full text-xs">
              Afrobeats
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
