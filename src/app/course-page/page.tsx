"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";

interface Course {
  title: string;
  img: string;
  subjects: string[];
}

// Sample data with subjects assigned to each course
const allCourses: Course[] = [
  {
    title: "NEET Biology Masterclass",
    img: "/images/fcourse4.avif",
    subjects: ["Biology", "Current Affairs"],
  },
  {
    title: "JEE Main Physics & Chemistry",
    img: "/images/fcourse2.avif",
    subjects: ["Physics", "Chemistry"],
  },
  {
    title: "SSC CGL + CHSL Batch",
    img: "/images/fcourse3.avif",
    subjects: ["ssc"],
  },
  {
    title: "JEE Advanced Practice",
    img: "/images/fcourse2.avif",
    subjects: ["Physics", "Mathematics"],
  },
  {
    title: "Banking PO Complete",
    img: "/images/fcourse1.avif",
    subjects: ["Mathematics", "Logical Reasoning"],
  },
  {
    title: "NDA Mathematics",
    img: "/images/fcourse4.avif",
    subjects: ["Mathematics"],
  },
  {
    title: "CLAT Logical Reasoning",
    img: "/images/ifos.jpg",
    subjects: ["Logical Reasoning"],
  },
  {
    title: "GATE Computer Science",
    img: "/images/Mentorship.png",
    subjects: ["Computer Science"],
  },
];

// Define available subjects for tabs
const subjects = [
  "All",
  "Biology",
  "Physics",
  "ssc",
  "Chemistry",
  "Current Affairs",
  "Language",
  "Mathematics",
  "Logical Reasoning",
  "Computer Science",
];

export default function CoursesPage() {
  const [selectedSubject, setSelectedSubject] = useState("All");

  const filteredCourses = selectedSubject === "All"
    ? allCourses
    : allCourses.filter(course => course.subjects.includes(selectedSubject));

  return (
    <>
    <TopHeader/>
    <Header/>
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar with Tabs */}
        <div className="bg-white p-4 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-semibold text-[#1E3A8A] mb-4">Subjects</h2>
          <div className="flex flex-col space-y-2">
            {subjects.map((subject) => (
              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className={`text-left px-3 py-2 rounded hover:bg-[#1E3A8A] hover:text-white transition ${
                  selectedSubject === subject ? "bg-[#1E3A8A] text-white" : "text-gray-700"
                }`}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards */}
        <div className="lg:col-span-3 space-y-6">
          <h2 className="text-3xl font-bold text-[#1E3A8A]">Explore Our Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={course.img}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-[#1E3A8A] mb-2">{course.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">★ ★ ★ ★ ★</span>
                        <span className="text-sm text-gray-500">4.8</span>
                      </div>
                      <button className="text-[#1E3A8A] bg-[#FFD700] px-3 py-1 rounded hover:bg-yellow-600 transition text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">No courses found for this subject.</p>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
