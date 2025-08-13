"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const locations = [
  { img: "/images/location1.jpg" },
  { img: "/images/location2.jpg" },
  { img: "/images/location3.jpg" },
  { img: "/images/location4.jpg" },
  { img: "/images/location5.jpg" },
  { img: "/images/location6.jpg" },
];

export default function CoachingLocations() {
  return (
    <section className="bg-[#F8FAFC] py-10 px-6">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold text-[#1E3A8A] mb-6 text-center">
          Our UPSC CSE Coaching Locations
        </h2>

        <div className="relative flex items-center ">
          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="w-full"
          >
            {locations.map((location, idx) => (
              <SwiperSlide key={idx}>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 my-4">
                  <Image
                    src={location.img}
                    alt={`Location ${idx + 1}`}
                    className="w-full h-44 object-cover"
                  />
                </div>
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
