"use client";

import Image from "next/image";



const courses = [
  { title: "General Studies PCM", img: "/images/General_Studies.jpg" },
  { title: "GS PCM - 2 Year Fledgling", img: "/images/gs.jpg" },
  { title: "Optional Subjects", img: "/images/Optional_Subject.jpg" },
  { title: "CSAT", img: "/images/CSAT.jpg" },
  { title: "Prelims Test Series", img: "/images/PrelimS.jpg" },
  { title: "UPSC Mentorship Program", img: "/images/Mentorship.png" },
  { title: "Module Courses", img: "/images/Module_Courses.jpg" },
  { title: "Mains Test Series", img: "/images/Mains.jpg" },
  { title: "Optional Subject Crash Course", img: "/images/Optional.jpg" },
  { title: "IFoS Programmes", img: "/images/ifos.jpg" },
  { title: "Interview Guidance Programme", img: "/images/interview.jpg" },
];

export default function FeaturedCourses() {
  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-3">
        <h2 className="text-center text-3xl font-semibold text-[#1E3A8A] mb-6">
          Our Featured UPSC CSE Courses
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-6 gap-4">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow hover:shadow-md transition p-2 flex flex-col items-center cursor-pointer border border-[#FFD700]"
            >
              {/* Image Container */}
              <div className="relative w-full h-24   rounded-lg overflow-hidden">
                <Image
                  src={course.img}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>


              {/* Title */}
              <p className="mt-2 text-center text-sm font-medium text-[#1E3A8A]">
                {course.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
