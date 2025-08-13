"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const videos = [
  { img: "/images/video1.jpg", url: "https://www.youtube.com/watch?v=xxxx" },
  { img: "/images/video2.jpg", url: "https://www.youtube.com/watch?v=xxxx" },
  { img: "/images/video3.jpg", url: "https://www.youtube.com/watch?v=xxxx" },
  { img: "/images/video4.jpg", url: "https://www.youtube.com/watch?v=xxxx" },
  { img: "/images/video5.jpg", url: "https://www.youtube.com/watch?v=xxxx" },
];

export default function VideoCarousel() {
  return (
    <section className="bg-white py-8 px-8">
     <div className="max-w-7xl mx-auto px-6 text-center">
  <h2 className="text-xl font-semibold text-[#1E3A8A] mb-6">
    Latest Videos & Toppers’ Talks
  </h2>

        <div className="relative flex items-center">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {videos.map((video, idx) => (
              <SwiperSlide key={idx}>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 my-4">
                    <Image
                      src={video.img}
                      alt={`Video ${idx + 1}`}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="swiper-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFD700] text-[#1E3A8A] rounded-full p-3 shadow-md hover:bg-[#1E3A8A] hover:text-white transition duration-300">
            ❮
          </div>
          <div className="swiper-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFD700] text-[#1E3A8A] rounded-full p-3 shadow-md hover:bg-[#1E3A8A] hover:text-white transition duration-300">
            ❯
          </div>
        </div>
      </div>
    </section>
  );
}
