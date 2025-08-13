"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function HeroSlider() {
  const offers = [
    {
      discount: "59%",
      tag: "#15thAugWithPW",
      tagColor: "bg-orange-500",
      title: "UPSC OPTIONAL 2026",
      lang: "Hinglish / हिन्दी",
      subjects: [
        "ANTHROPOLOGY",
        "SOCIOLOGY",
        "PSIR",
        "GEOGRAPHY",
        "HISTORY",
        "MATHEMATICS",
        "PUBLIC ADMINISTRATION",
        "हिन्दी साहित्य",
      ],
      oldPrice: "₹ 22,999/-",
      newPrice: "₹ 9,499/-",
    },
    {
      discount: "45%",
      tag: "#SummerUPSC",
      tagColor: "bg-blue-500",
      title: "UPSC PRELIMS CRASH COURSE",
      lang: "English / हिन्दी",
      subjects: [
        "POLITY",
        "ECONOMICS",
        "ENVIRONMENT",
        "SCIENCE & TECH",
        "CURRENT AFFAIRS",
      ],
      oldPrice: "₹ 14,999/-",
      newPrice: "₹ 8,249/-",
    },
    {
      discount: "30%",
      tag: "#UPSCMainsMastery",
      tagColor: "bg-green-600",
      title: "UPSC MAINS ANSWER WRITING",
      lang: "English Medium",
      subjects: [
        "ETHICS",
        "ESSAY",
        "GS PAPER 1-4",
        "OPTIONAL WRITING PRACTICE",
      ],
      oldPrice: "₹ 12,999/-",
      newPrice: "₹ 9,099/-",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        autoplay={{ delay: 4000 }}
        loop
        className="w-full"
      >
        {offers.map((offer, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-gradient-to-r from-[#FFD700] to-yellow-100 px-4 sm:px-6 py-6 m-3 sm:m-6 flex flex-col md:flex-row items-center gap-4 sm:gap-6 rounded-lg shadow-lg">
              {/* Discount Box */}
              <div className="bg-[#1E3A8A] text-white p-4 sm:p-6 rounded-lg text-center min-w-[100px] sm:min-w-[140px]">
                <p className="text-sm sm:text-base font-bold">FLAT</p>
                <p className="text-3xl sm:text-5xl font-extrabold">
                  {offer.discount}
                </p>
                <p className="text-sm sm:text-base font-bold">OFF</p>
              </div>

              {/* Right Content */}
              <div className="flex-1 w-full">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`text-xs sm:text-sm ${offer.tagColor} text-white px-2 py-0.5 rounded`}
                  >
                    {offer.tag}
                  </span>
                  <span className="text-xs sm:text-sm bg-red-500 text-white px-2 py-0.5 rounded">
                    LIMITED TIME OFFER
                  </span>
                </div>

                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-green-700">
                  {offer.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-700 mb-2">
                  {offer.lang}
                </p>

                {/* Subjects */}
                <div className="flex flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm text-white bg-[#1E3A8A] p-2 rounded">
                  {offer.subjects.map((subj, i) => (
                    <span key={i} className="px-1 sm:px-2">
                      • {subj}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3">
                  <span className="flex items-center gap-1 bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs sm:text-sm">
                    <Play size={14} /> LIVE ONLINE
                  </span>
                  <span className="line-through text-gray-500 text-xs sm:text-sm">
                    {offer.oldPrice}
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-red-600">
                    {offer.newPrice}
                  </span>
                </div>

                {/* Button */}
                <button className="mt-4 bg-red-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm md:text-base">
                  Hurry, Grab Now →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="prev-btn absolute top-1/2 left-1 sm:left-0 -translate-y-1/2 bg-white shadow p-1 sm:p-2 rounded-full z-10">
        <ChevronLeft size={18} className="sm:size-5" />
      </button>
      <button className="next-btn absolute top-1/2 right-1 sm:right-0 -translate-y-1/2 bg-white shadow p-1 sm:p-2 rounded-full z-10">
        <ChevronRight size={18} className="sm:size-5" />
      </button>
    </div>
  );
}
