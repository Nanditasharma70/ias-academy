"use client";

import Image from "next/image";

export default function FeatureCourse() {
  const courses = [
    {
      id: 1,
      title: "GS Foundation (12m)",
      desc: "Complete syllabus & mentorship",
      img: "/images/fcourse1.avif",
    },
    {
      id: 2,
      title: "Prelims Crash",
      desc: "10-week intensive",
      img: "/images/fcourse2.avif",
    },
    {
      id: 3,
      title: "Mains Writing",
      desc: "Daily practice",
      img: "/images/fcourse3.avif",
    },
    {
      id: 4,
      title: "Interview Guidance",
      desc: "Mock panels",
      img: "/images/fcourse4.avif",
    },
  ];

  return (
    <section className="bg-[#F9FBFD] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-[#1E3A8A]">
          Foundation Courses
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-44 sm:h-48 md:h-52 rounded-lg overflow-hidden">
                <Image
                  src={course.img}
                  alt={course.title}
                  fill
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         25vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="mt-4 text-center sm:text-left">
                <h3 className="font-semibold text-base sm:text-lg">{course.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mt-1">{course.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
