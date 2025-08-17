"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  { url: "https://www.youtube.com/embed/QxMHDZJdXzw" },
  { url: "https://www.youtube.com/embed/QxMHDZJdXzw" },
  { url: "https://www.youtube.com/embed/QxMHDZJdXzw" },
  { url: "https://www.youtube.com/embed/QxMHDZJdXzw" },
  { url: "https://www.youtube.com/embed/QxMHDZJdXzw" },
];

export default function VideoCarousel() {
  return (
    <section className="bg-white py-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1E3A8A] mb-6">
          Latest Videos & Toppers’ Talks
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              480: { slidesPerView: 1.5, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="w-full"
          >
            {videos.map((video, idx) => (
              <SwiperSlide key={idx}>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 my-4 aspect-video">
                  <iframe
                    src={video.url}
                    title={`Video ${idx + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="swiper-prev absolute -left-3 sm:-left-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFD700] text-[#1E3A8A] rounded-full p-2 sm:p-3 shadow-md hover:bg-[#1E3A8A] hover:text-white transition duration-300 flex items-center justify-center">
            <ChevronLeft className="w-5 h-5" />
          </div>
          <div className="swiper-next absolute -right-3 sm:-right-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFD700] text-[#1E3A8A] rounded-full p-2 sm:p-3 shadow-md hover:bg-[#1E3A8A] hover:text-white transition duration-300 flex items-center justify-center">
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
