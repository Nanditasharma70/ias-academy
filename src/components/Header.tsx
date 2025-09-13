"use client";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const courses = [
  "UPSC Prelims Foundation",
  "UPSC Mains Foundation",
  "UPSC Prelims Test Series",
  "UPSC Mains Test Series",
  "UPSC Optional Subjects",
  "UPSC Current Affairs Program",
  "UPSC Crash Course",
  "UPSC Interview Guidance Program",
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <header className="bg-[#1E3A8A] shadow-sm py-3 sm:py-4 px-2">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        {/* Mobile Layout */}
        <div className="flex sm:hidden items-center justify-between gap-3">
          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#FFD700] p-2 rounded-md hover:bg-[#152b63] transition"
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <span className="font-bold text-lg text-[#FFD700]">IAS Academy</span>

          {/* Call Icon */}
          <a
            href="tel:+916001239999"
            className="text-[#FFD700] p-2 rounded-md hover:bg-[#152b63] transition"
          >
            <Phone size={20} />
          </a>

          {/* Login/Register */}
          <Link
            href="/login"
            className="bg-[#FFD700] text-[#1E3A8A] font-semibold px-3 py-1.5 rounded-md hover:bg-[#1E3A8A] hover:text-white transition text-sm"
          >
            Login
          </Link>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex justify-between items-center">
          {/* Left Side: Logo + All Courses */}
          <div className=" ms-6 flex items-center gap-6">
            {/* Logo */}
            <span className="font-bold text-xl text-[#FFD700]">
              IAS Academy
            </span>

            {/* All Courses Button */}
            <div className=" mx-6 relative inline-block text-left">
              {/* Button */}
              <button
                onClick={() => setOpen(!open)}
                className="border border-[#FFD700] text-[#FFD700] px-4 py-2 rounded-md hover:bg-[#1E3A8A] hover:text-white transition"
              >
                UPSC Course <span className="ml-1">▾</span>
              </button>
               <Link
            href="/course-page"
            className=" ms-10 text-[#FFD700]  font-semibold px-4 py-2 transition"
          >


            Govt Exam



          </Link>
     

              {/* Dropdown Menu */}
              {open && (
                <div className="absolute mt-2 w-[600px] bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {courses.map((course, idx) => (
                      <div
                        key={idx}
                        className="border border-gray-200 rounded-lg p-3 hover:bg-[#1E3A8A] hover:text-white transition shadow-sm cursor-pointer"
                      >
                        <a href="#" className="block text-gray-700 hover:text-white font-medium">
                          {course}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

              )}
            </div>
          </div>

          {/* Right Side: Login/Register */}
          <Link
            href="/register"
            className="bg-[#FFD700] text-[#1E3A8A] font-semibold px-4 py-2 rounded-md hover:bg-yellow-400  transition"
          >
            Login & Register
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
     {menuOpen && (
  <div className="sm:hidden bg-[#152b63] text-white px-4 py-3 space-y-2">
    <Link href="/" className="block hover:text-[#FFD700] transition">
      Home
    </Link>
    <button
      onClick={() => setCoursesOpen(true)}
      className="w-full flex justify-between items-center hover:text-[#FFD700] transition"
    >
      Courses
      <ChevronRight className="w-5 h-5" />
    </button>
    <Link href="/about" className="block hover:text-[#FFD700] transition">
      About Us
    </Link>
    <Link href="/contact" className="block hover:text-[#FFD700] transition">
      Contact
    </Link>
  </div>
)}

{coursesOpen && (
  <div className="fixed top-0 left-0 w-72 h-full bg-gray-100 shadow-xl z-50 transition-transform">
    <div className="flex items-center justify-between p-4 border-b">
      {/* Back Button */}
      <button
        onClick={() => setCoursesOpen(false)}
        className="flex items-center text-gray-700 hover:text-[#152b63]"
      >
        <ChevronLeft className="w-5 h-5 mr-1" /> Back
      </button>
      {/* Close Button */}
      <button
        onClick={() => {
          setCoursesOpen(false);
          setMenuOpen(false);
        }}
        className="text-gray-700 hover:text-red-600"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
    <ul className="p-4 space-y-3">
      {courses.map((course, idx) => (
        <li key={idx}>
          <a
            href="#"
            className="block p-3 rounded-lg shadow bg-white hover:bg-[#152b63] hover:text-white transition"
          >
            {course}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}

    </header>
  );
}
