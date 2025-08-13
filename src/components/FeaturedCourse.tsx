"use client";

import Image from "next/image";



const courses = [
  { title: "General Studies PCM", img: "/images/general-studies.png" },
  { title: "GS PCM - 2 Year Fledgling", img: "/images/gs-2year.png" },
  { title: "Optional Subjects", img: "/images/optional-subjects.png" },
  { title: "CSAT", img: "/images/csat.png" },
  { title: "Prelims Test Series", img: "/images/prelims-test.png" },
  { title: "UPSC Mentorship Program", img: "/images/mentorship.png" },
  { title: "Module Courses", img: "/images/module.png" },
  { title: "Mains Test Series", img: "/images/mains-test.png" },
  { title: "Optional Subject Crash Course", img: "/images/optional-crash.png" },
  { title: "IFoS Programmes", img: "/images/ifos.png" },
  { title: "Interview Guidance Programme", img: "/images/interview.png" },
];

export default function FeaturedCourses() {
  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-3">
        <h2 className="text-center text-xl font-semibold text-[#1E3A8A] mb-6">
          Our Featured UPSC CSE Courses
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-6 gap-4">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow hover:shadow-md transition p-2 flex flex-col items-center cursor-pointer border border-[#FFD700]"
            >
              {/* Image Container */}
              <div className="w-full h-24 bg-[#1E3A8A] flex items-center justify-center rounded-lg overflow-hidden">
                <Image
                  src={course.img}
                  alt={course.title}
                  className="w-14 h-14 object-contain"
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
