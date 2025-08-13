"use client";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <div className="flex items-center gap-6">
            {/* Logo */}
            <span className="font-bold text-xl text-[#FFD700]">
              IAS Academy
            </span>

            {/* All Courses Button */}
            <button className="border border-[#FFD700] text-[#FFD700] px-4 py-2 rounded-md hover:bg-[#1E3A8A] hover:text-white transition">
              All Courses <span className="ml-1">▾</span>
            </button>
          </div>

          {/* Right Side: Login/Register */}
          <Link
            href="/login"
            className="bg-[#FFD700] text-[#1E3A8A] font-semibold px-4 py-2 rounded-md hover:bg-[#1E3A8A] hover:text-white transition"
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
          <Link href="/courses" className="block hover:text-[#FFD700] transition">
            Courses
          </Link>
          <Link href="/about" className="block hover:text-[#FFD700] transition">
            About Us
          </Link>
          <Link href="/contact" className="block hover:text-[#FFD700] transition">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
