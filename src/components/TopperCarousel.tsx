"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ToppersCarousel() {
  const toppers = [
    {
      name: "Ashi Sharma",
      rank: "AIR 12 - UPSC CSE 2024",
      course: "General Studies PCM (10 Months)",
      img: "/images/Rank_12.webp",
    },
    {
      name: "Mayank Tripathi",
      rank: "AIR 10 - UPSC CSE 2024",
      course: "General Studies PCM (10 Months)",
      img: "/images/Rank_10.webp",
    },
    {
      name: "Shakti Dubey",
      rank: "AIR 01 - UPSC CSE 2024",
      course: "General Studies PCM (10 Months)",
      img: "/images/Rank_1.webp",
    },
    {
      name: "Komal Punia",
      rank: "AIR 6 - UPSC CSE 2024",
      course: "General Studies PCM (10 Months)",
      img: "/images/Rank_6.webp",
    },
    {
      name: "Aayushi Bansal",
      rank: "AIR 7 - UPSC CSE 2024",
      course: "General Studies PCM (10 Months)",
      img: "/images/Rank_7.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? toppers.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === toppers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-4 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Toppers List Button */}
        <div className="text-center mb-4">
          <button className="bg-[#FFD700] text-[#1E3A8A] px-6 py-2 rounded-full font-semibold hover:bg-[#1E3A8A] hover:text-white transition">
            Toppers List →
          </button>
        </div>

        {/* Carousel */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-[#FFD700] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Mobile view - show only active card */}
          <div className="flex gap-4 overflow-hidden sm:hidden">
            {toppers.map((topper, index) => {
              if (index !== currentIndex) return null; // Only show active
              return (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-lg overflow-hidden shadow-md scale-105 border-2 border-[#FFD700]"
                  style={{ minWidth: "220px" }}
                >
                  <Image
                    src={topper.img}
                    alt={topper.name}
                    width={200}
                    height={150}
                    className="w-full h-48 object-cover"
                  />
                  <div className="bg-[#1E3A8A] text-white w-full rounded-tl-xl rounded-br-xl p-4 text-center">
                    <h3 className="text-sm font-semibold">{topper.name}</h3>
                    <p className="text-xs">{topper.rank}</p>
                    <p className="text-[10px] opacity-90">{topper.course}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop view - show all */}
          <div className="hidden sm:flex gap-4 overflow-hidden">
            {toppers.map((topper, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                    isActive
                      ? "scale-110 border-2 border-[#FFD700]"
                      : "scale-95 opacity-80"
                  }`}
                  style={{ minWidth: "180px" }}
                >
                  <Image
                    src={topper.img}
                    alt={topper.name}
                    width={200}
                    height={150}
                    className="w-full h-48 object-cover"
                  />
                  <div className="bg-[#1E3A8A] text-white w-full rounded-tl-xl rounded-br-xl p-4 text-center">
                    <h3 className="text-sm font-semibold">{topper.name}</h3>
                    <p className="text-xs">{topper.rank}</p>
                    <p className="text-[10px] opacity-90">{topper.course}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-[#FFD700] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Tabs */}
        {/* Tabs */}
<div className="mt-6 ms-6 text-sm font-semibold">
  <div className="flex overflow-x-auto space-x-4 scrollbar-hide px-2 sm:justify-center">
    <button className="flex-shrink-0 px-4 py-2 bg-[#FFD700] text-[#1E3A8A] rounded-full">
      General Studies
    </button>
    <button className="flex-shrink-0 px-4 py-2 border border-[#FFD700] text-[#1E3A8A] rounded-full">
      Optional
    </button>
    <button className="flex-shrink-0 px-4 py-2 border border-[#FFD700] text-[#1E3A8A] rounded-full">
      IGP
    </button>
    <button className="flex-shrink-0 px-4 py-2 border border-[#FFD700] text-[#1E3A8A] rounded-full">
      Module Courses
    </button>
    <button className="flex-shrink-0 px-4 py-2 border border-[#FFD700] text-[#1E3A8A] rounded-full">
      Test Series
    </button>
  </div>
</div>

      </div>
    </section>
  );
}
