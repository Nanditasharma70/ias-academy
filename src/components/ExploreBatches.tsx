"use client";
import { useState, useRef } from "react";
import Image from "next/image";

interface Course {
  id: number;
  type: "ONLINE" | "OFFLINE";
  title: string;
  lang: string;
  img: string;
  start?: string;
  end?: string;
  price: string;
  oldPrice?: string;
}

type CoursesByTab = {
  [key: string]: Course[];
};

export default function ExploreBatches() {
  const tabs: string[] = [
    "Repeaters",
    "GS Foundation",
    "Degree Programs",
    "Combo (GS+Optional)",
    "Optional",
    "Test Series",
  ];

  const [activeTab, setActiveTab] = useState<string>("Test Series");

  const allCourses: CoursesByTab = {
    Repeaters: [
      {
        id: 1,
        type: "ONLINE",
        title: "Repeaters Batch 2026 – Advanced Prep",
        lang: "Hinglish",
        img: "/images/course-pre-main.jpg",
        start: "5 Aug 2025",
        end: "30 Apr 2026",
        price: "₹14999",
        oldPrice: "₹19999",
      },
    ],
    "GS Foundation": [
      {
        id: 2,
        type: "OFFLINE",
        title: "GS Foundation 2026 (Classroom Program)",
        lang: "English",
        img: "/images/course-pre-main.jpg",
        start: "1 Sep 2025",
        end: "31 May 2026",
        price: "₹29999",
        oldPrice: "₹34999",
      },
    ],
    "Degree Programs": [
      {
        id: 3,
        type: "ONLINE",
        title: "BA + UPSC Integrated Program",
        lang: "English",
        img: "/images/ba-upsc.jpg",
        start: "15 Aug 2025",
        end: "15 May 2028",
        price: "₹79999",
        oldPrice: "₹89999",
      },
      {
        id: 4,
        type: "ONLINE",
        title: "BA + UPSC Integrated Program",
        lang: "English",
        img: "/images/ba-upsc.jpg",
        start: "15 Aug 2025",
        end: "15 May 2028",
        price: "₹79999",
        oldPrice: "₹89999",
      },
    ],
    "Combo (GS+Optional)": [
      {
        id: 5,
        type: "ONLINE",
        title: "GS + Public Administration (Combo) 2026",
        lang: "Hinglish",
        img: "/images/course-pre-main.jpg",
        start: "10 Aug 2025",
        end: "10 May 2026",
        price: "₹44999",
        oldPrice: "₹49999",
      },
    ],
    Optional: [
      {
        id: 6,
        type: "OFFLINE",
        title: "Geography Optional 2026",
        lang: "English",
        img: "/images/course-geograhy.jpg",
        start: "5 Sep 2025",
        end: "5 Mar 2026",
        price: "₹24999",
        oldPrice: "₹29999",
      },
    ],
    "Test Series": [
      {
        id: 7,
        type: "ONLINE",
        title: "CSAT Test Series (Target 2026) – (Online)",
        lang: "Hinglish",
        img: "/images/course-csat.png",
        start: "27 Jul 2025",
        end: "31 May 2026",
        price: "₹1999",
        oldPrice: "₹5499",
      },
      {
        id: 8,
        type: "OFFLINE",
        title: "Prelims Test Series (GS) (Target 2026) – (Offline)",
        lang: "English",
        img: "/images/course-prelims.jpg",
        start: "",
        end: "",
        price: "₹15999",
        oldPrice: "₹19999",
      },
      {
        id: 9,
        type: "ONLINE",
        title: "SRIJAN 2.0 (Pre + Mains) 2026 (Hinglish)",
        lang: "Hinglish",
        img: "/images/course-pre-main.jpg",
        start: "28 Jul 2025",
        end: "30 Sep 2026",
        price: "₹9999",
        oldPrice: "₹19999",
      },

    ],
  };

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth * 0.8; // Scroll 80% of container width
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const coursesToShow = allCourses[activeTab] || [];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold mb-6">
          Explore Our Batches
        </h2>

        {/* Tabs */}
        <div className="flex bg-gray-200 justify-center mb-6 overflow-x-auto scrollbar-hide space-x-6 pt-2 px-2 sm:px-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 pb-2 px-2 whitespace-nowrap ${activeTab === tab
                ? "text-[#1E3A8A] border-b-2 border-[#1E3A8A] font-semibold"
                : "text-gray-600"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

      {/* Carousel without chevrons - Smooth Slide */}
<div className="relative">
  <div
    ref={scrollRef}
    className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
  >
    {coursesToShow.map((course) => (
      <div
        key={course.id}
        className="bg-white border rounded-xl shadow-sm overflow-hidden flex-shrink-0 w-64 sm:w-68 md:w-72 snap-center"
      >
        {/* Image */}
        <div className="relative">
          <Image
            src={course.img}
            alt={course.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <span
            className={`absolute top-2 left-2 px-3 py-1 text-xs font-bold text-white rounded-tr-lg rounded-bl-lg ${
              course.type === "ONLINE" ? "bg-blue-600" : "bg-red-600"
            }`}
          >
            {course.type}
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-sm">{course.title}</h3>
          <span className="inline-block bg-gray-200 text-xs px-2 py-1 rounded mt-2">
            {course.lang}
          </span>

          {course.start && course.end && (
            <p className="text-xs text-gray-600 mt-2">
              Starts on {course.start} Ends on {course.end}
            </p>
          )}

          <div className="mt-2">
            <span className="text-[#1E3A8A] font-bold mr-2">
              {course.price}
            </span>
            {course.oldPrice && (
              <span className="line-through text-gray-400 text-sm">
                {course.oldPrice}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex space-x-2 mt-4">
            <button className="flex-1 border border-[#1E3A8A] text-[#1E3A8A] py-1 rounded hover:bg-[#1E3A8A] hover:text-white transition">
              EXPLORE
            </button>
            <button className="flex-1 bg-[#1E3A8A] text-white py-1 rounded hover:bg-blue-900 transition">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



        {/* Get More */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#1E3A8A] hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
            Get More Batches
          </button>
        </div>
      </div>
    </section>
  );
}
