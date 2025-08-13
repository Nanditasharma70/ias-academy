import { Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

export default function TopHeader() {
  return (
    <div>
      {/* Mobile Offer Line */}
      <div className="bg-[#FFD700] text-[#1E3A8A] text-center text-xs py-1 sm:hidden">
        🎉 Limited Time Offer: Enroll now & get 20% OFF!
      </div>

      {/* Desktop / Tablet Top Header */}
      <div className="hidden sm:block bg-[#FFD700] text-[#1E3A8A] text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between px-3 sm:px-4 py-2 gap-2 sm:gap-0">
          
          {/* Left Side - Contact Info */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-2 sm:gap-4 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Phone size={14} />
              <span className="truncate">+91-600-123-9999</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={14} />
              <span className="font-semibold truncate">
                iasacademy@gmail.com
              </span>
            </div>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex items-center justify-center sm:justify-end gap-2 flex-wrap">
            <a
              href="#"
              className="bg-[#1E3A8A] p-1 sm:p-1.5 rounded-full text-white hover:bg-[#152b63] transition"
            >
              <FaFacebookF size={12} />
            </a>
            <a
              href="#"
              className="bg-[#1E3A8A] p-1 sm:p-1.5 rounded-full text-white hover:bg-[#152b63] transition"
            >
              <FaTwitter size={12} />
            </a>
            <a
              href="#"
              className="bg-[#1E3A8A] p-1 sm:p-1.5 rounded-full text-white hover:bg-[#152b63] transition"
            >
              <FaYoutube size={12} />
            </a>
            <a
              href="#"
              className="bg-[#1E3A8A] p-1 sm:p-1.5 rounded-full text-white hover:bg-[#152b63] transition"
            >
              <FaInstagram size={12} />
            </a>
            <a
              href="#"
              className="bg-[#1E3A8A] p-1 sm:p-1.5 rounded-full text-white hover:bg-[#152b63] transition"
            >
              <FaTelegramPlane size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
