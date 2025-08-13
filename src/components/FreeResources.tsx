"use client";
import { Book, Target, FileText, Calendar, List } from "lucide-react";

export default function FreeResources() {
  const resources = [
    {
      icon: <Book size={28} className="text-[#1E3A8A]" />,
      title: "Books & Magazines",
      desc: "Udaan, Prahaar, Current Affairs Magazines etc.",
      color: "bg-[#E0E7FF]", // Light blue background
    },
    {
      icon: <Target size={28} className="text-red-600" />,
      title: "UPSC PYQs",
      desc: "Prelims, Mains & Optional PYQs with Solutions",
      color: "bg-red-50",
    },
    {
      icon: <FileText size={28} className="text-[#1E3A8A]" />,
      title: "UPSC Notes",
      desc: "Comprehensive, Short & NCERT-Based Notes",
      color: "bg-[#E0E7FF]",
    },
    {
      icon: <Calendar size={28} className="text-red-600" />,
      title: "CA & Editorials",
      desc: "Daily Current Affairs & Editorial Analysis",
      color: "bg-red-50",
    },
    {
      icon: <List size={28} className="text-[#1E3A8A]" />,
      title: "Other Resources",
      desc: "Prelims Practice, Mains Practice & Blogs etc.",
      color: "bg-[#E0E7FF]",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[#1E3A8A] mb-8">
          Free Resources
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {resources.map((res, idx) => (
            <div
              key={idx}
              className={`${res.color} p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-200`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {res.icon}
                </div>
                <h3 className="font-semibold text-[#1E3A8A]">{res.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{res.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
