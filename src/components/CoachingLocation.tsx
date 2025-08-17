"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const locations = [
  { img: "/images/location1.webp" },
  { img: "/images/location2.webp" },
  { img: "/images/location3.webp" },
  { img: "/images/location4.webp" },
  { img: "/images/location5.webp" },
  { img: "/images/location2.webp" },
];

export default function CoachingLocations() {
  return (
    <section className="bg-[#F8FAFC] py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-6 text-center">
          Our Coaching Locations
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            spaceBetween={12}
            slidesPerView={1.1}
            breakpoints={{
              480: { slidesPerView: 1.5, spaceBetween: 14 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 18 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="w-full"
          >
            {locations.map((location, idx) => (
              <SwiperSlide key={idx}>
                <a
                  href={location.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 my-3 sm:my-4 aspect-video">
                    <Image
                      src={location.img}
                      alt={`Location ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="swiper-prev absolute -left-2 sm:-left-4 md:-left-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFD700] text-[#1E3A8A] rounded-full p-1 sm:p-3 shadow-md hover:bg-[#1E3A8A] hover:text-white transition duration-300">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4" />
          </div>
          <div className="swiper-next absolute -right-2 sm:-right-4 md:-right-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFD700] text-[#1E3A8A] rounded-full p-1 sm:p-3 shadow-md hover:bg-[#1E3A8A] hover:text-white transition duration-300">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
