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
    <section className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-3xl font-bold text-[#1E3A8A] mb-10">
          Our Featured UPSC CSE Courses
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-3 flex flex-col items-center cursor-pointer border border-[#FFD700]"
            >
              {/* Image */}
              <div className="relative w-full h-24 sm:h-28 md:h-32 rounded-lg overflow-hidden">
                <Image
                  src={course.img}
                  alt={course.title}
                  fill
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         (max-width: 1280px) 33vw,
                         20vw"
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <p className="mt-3 text-center text-xs sm:text-sm md:text-base font-medium text-[#1E3A8A]">
                {course.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
