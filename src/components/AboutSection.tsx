"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gray-200 py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-10 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        
        {/* Left Content */}
        <div>
          {/* Tag */}
          <span className="inline-block bg-gray-300 text-gray-700 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
            Live + Recorded • Hindi & English
          </span>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E3A8A] leading-snug">
            Crack <span className="text-[#FFD700]">UPSC CSE</span> with Structure & Mentorship
          </h1>

          {/* Paragraph */}
          <p className="mt-3 text-gray-600 text-base sm:text-lg max-w-xl">
            Live classes, recorded lectures, test series, and personalised guidance 
            for Prelims, Mains & Interview.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-wrap gap-3 sm:gap-4">
            <button className="bg-[#1E3A8A] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow hover:bg-blue-900 transition text-sm sm:text-base">
              Join Free Demo
            </button>
            <button className="bg-white border border-gray-300 text-gray-800 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition text-sm sm:text-base">
              View Courses
            </button>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white shadow rounded-2xl py-4 sm:py-6 text-center">
              <p className="text-xl sm:text-2xl font-bold text-gray-900">1500+</p>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">Video Lectures</p>
            </div>
            <div className="bg-white shadow rounded-2xl py-4 sm:py-6 text-center">
              <p className="text-xl sm:text-2xl font-bold text-gray-900">300+</p>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">Selections Mentored</p>
            </div>
            <div className="bg-white shadow rounded-2xl py-4 sm:py-6 text-center">
              <p className="text-xl sm:text-2xl font-bold text-gray-900">98%</p>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-2 sm:p-3 max-w-xs sm:max-w-sm lg:max-w-md">
            <Image
              src="/images/about-img.avif" // replace with your actual image
              alt="Mentorship session"
              width={500}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
