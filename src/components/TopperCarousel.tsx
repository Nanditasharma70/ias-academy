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
      img: "/toppers/ashi.jpg",
    },
    {
      name: "Mayank Tripathi",
      rank: "AIR 10 - UPSC CSE 2024",
      course: "General Studies PCM (10 Months)",
      img: "/toppers/mayank.jpg",
    },
    {
      name: "Shakti Dubey",
      rank: "AIR 01 - UPSC CSE 2024",
      course: "General Studies PCM (10 Months)",
      img: "/toppers/shakti.jpg",
    },
    {
      name: "Komal Punia",
      rank: "AIR 6 - UPSC CSE 2024",
      course: "General Studies PCM (10 Months)",
      img: "/toppers/komal.jpg",
    },
    {
      name: "Aayushi Bansal",
      rank: "AIR 7 - UPSC CSE 2024",
      course: "General Studies PCM (10 Months)",
      img: "/toppers/aayushi.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? toppers.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === toppers.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Toppers List Button */}
        <div className="text-center mb-4">
          <button className="bg-[#FFD700] text-[#1E3A8A] px-6 py-2 rounded-full font-semibold hover:bg-[#1E3A8A] hover:text-white transition">
            Toppers List →
          </button>
        </div>

        {/* Carousel */}
        <div className="flex items-center justify-center gap-4">
          <button onClick={prevSlide} className="p-2 rounded-full bg-[#FFD700] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition">
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-4 overflow-hidden">
            {toppers.map((topper, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                    isActive ? "scale-110 border-2 border-[#FFD700]" : "scale-95 opacity-80"
                  }`}
                  style={{ minWidth: "180px" }}
                >
                  <Image
                    src={topper.img}
                    alt={topper.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="bg-[#1E3A8A] text-white w-full p-2 text-center">
                    <h3 className="text-sm font-semibold">{topper.name}</h3>
                    <p className="text-xs">{topper.rank}</p>
                    <p className="text-[10px] opacity-90">{topper.course}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button onClick={nextSlide} className="p-2 rounded-full bg-[#FFD700] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-6 space-x-4 text-sm font-semibold">
          <button className="px-4 py-2 bg-[#FFD700] text-[#1E3A8A] rounded-full">General Studies</button>
          <button className="px-4 py-2 border border-[#FFD700] text-[#1E3A8A] rounded-full">Optional</button>
          <button className="px-4 py-2 border border-[#FFD700] text-[#1E3A8A] rounded-full">IGP</button>
          <button className="px-4 py-2 border border-[#FFD700] text-[#1E3A8A] rounded-full">Module Courses</button>
          <button className="px-4 py-2 border border-[#FFD700] text-[#1E3A8A] rounded-full">Test Series</button>
        </div>
      </div>
    </section>
  );
}
