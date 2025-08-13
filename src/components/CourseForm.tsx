"use client";
import { useState } from "react";

export default function CourseForm() {
  const [courseType, setCourseType] = useState("online");

  return (
    <section className="bg-gray-100 rounded-lg py-6 mx-6">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-2 mb-6">
          <button
            onClick={() => setCourseType("online")}
            className={`px-2 w-[38%] py-2 rounded-full font-semibold border transition ${
              courseType === "online"
                ? "bg-[#1E3A8A] text-white border-[#1E3A8A]"
                : "bg-white text-[#1E3A8A] border-[#FFD700] "
            }`}
          >
            Online Courses
          </button>
          <button
            onClick={() => setCourseType("offline")}
            className={`px-2 w-[38%] py-2 rounded-full font-semibold border transition ${
              courseType === "offline"
                ? "bg-[#1E3A8A] text-white border-[#1E3A8A]"
                : "bg-white text-[#1E3A8A] border-[#FFD700] "
            }`}
          >
            Offline Courses
          </button>
        </div>

        {/* Form */}
        <form className="flex flex-wrap gap-3 items-center justify-center">
          <input
            type="text"
            placeholder="Name*"
            className="border border-[#FFD700] px-3 py-2 w-48 bg-white text-[#1E3A8A] placeholder-gray-500 focus:outline-none focus:border-white"
          />
          <input
            type="email"
            placeholder="Email*"
            className="border border-[#FFD700] px-3 py-2 w-48 bg-white text-[#1E3A8A] placeholder-gray-500 focus:outline-none focus:border-white"
          />
          <input
            type="tel"
            placeholder="Mobile*"
            className="border border-[#FFD700] px-3 py-2 w-48 bg-white text-[#1E3A8A] placeholder-gray-500 focus:outline-none focus:border-white"
          />
          <select
            className="border border-[#FFD700] px-3 py-2 w-48 bg-white text-[#1E3A8A] focus:outline-none focus:border-white"
          >
            <option>Select Batch</option>
            <option>Batch 1</option>
            <option>Batch 2</option>
            <option>Batch 3</option>
          </select>

          {/* Google reCAPTCHA placeholder */}
          <div className="flex items-center border border-[#FFD700] px-3 py-2 bg-white text-[#1E3A8A]">
            <input type="checkbox" className="mr-2" />
            <label>I&apos;m not a robot</label>
          </div>

          <button
            type="submit"
            className="bg-[#1E3A8A] text-white px-6 py-2 font-semibold border border-[#1E3A8A] rounded hover:bg-white hover:text-[#1E3A8A] transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}
