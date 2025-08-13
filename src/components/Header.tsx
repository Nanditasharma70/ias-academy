"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#1E3A8A] shadow-sm py-4 px-2">
      <div className="container mx-auto flex justify-between items-center  px-4">
        <div className="flex items-center gap-6 space-x-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg text-[#FFD700]">IAS Academy</span>
        </div>

        {/* All Courses Button */}
        <button className="border border-[#FFD700] text-[#FFD700] px-4 py-2 rounded-md hover:bg-[#1E3A8A] hover:text-white transition">
          All Courses <span className="ml-1">▾</span>
        </button>
</div>
        {/* Login & Register */}
        <Link
          href="/login"
          className="bg-[#FFD700] text-[#1E3A8A] font-semibold px-4 py-2 rounded-md hover:bg-[#1E3A8A] hover:text-white transition"
        >
          Login & Register
        </Link>
      </div>
    </header>
  );
}
