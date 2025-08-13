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
      subjects: ["POLITY", "ECONOMICS", "ENVIRONMENT", "SCIENCE & TECH", "CURRENT AFFAIRS"],
      oldPrice: "₹ 14,999/-",
      newPrice: "₹ 8,249/-",
    },
    {
      discount: "30%",
      tag: "#UPSCMainsMastery",
      tagColor: "bg-green-600",
      title: "UPSC MAINS ANSWER WRITING",
      lang: "English Medium",
      subjects: ["ETHICS", "ESSAY", "GS PAPER 1-4", "OPTIONAL WRITING PRACTICE"],
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
            <div className="bg-gradient-to-r from-[#FFD700] to-yellow-100 p-6 m-6 md:p-10 flex flex-col md:flex-row items-center gap-6 rounded-lg shadow-lg">
              {/* Discount Box */}
              <div className="bg-[#1E3A8A] text-white p-6 rounded-lg text-center">
                <p className="text-lg font-bold">FLAT</p>
                <p className="text-5xl font-extrabold">{offer.discount}</p>
                <p className="text-lg font-bold">OFF</p>
              </div>

              {/* Right Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs ${offer.tagColor} text-white px-2 py-0.5 rounded`}>
                    {offer.tag}
                  </span>
                  <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded">
                    LIMITED TIME OFFER
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-green-700">{offer.title}</h2>
                <p className="text-sm text-gray-700 mb-2">{offer.lang}</p>

                {/* Subjects */}
                <div className="flex flex-wrap gap-2 text-sm text-white bg-[#1E3A8A] p-2 rounded">
                  {offer.subjects.map((subj, i) => (
                    <span key={i} className="px-2">• {subj}</span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mt-3">
                  <span className="flex items-center gap-1 bg-orange-100 text-orange-600 px-2 py-1 rounded">
                    <Play size={14} /> LIVE ONLINE
                  </span>
                  <span className="line-through text-gray-500">{offer.oldPrice}</span>
                  <span className="text-xl font-bold text-red-600">{offer.newPrice}</span>
                </div>

                {/* Button */}
                <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                  Hurry, Grab Now →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="prev-btn absolute top-1/2 left-0 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10">
        <ChevronLeft />
      </button>
      <button className="next-btn absolute top-1/2 right-0 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10">
        <ChevronRight />
      </button>
    </div>
  );
}
