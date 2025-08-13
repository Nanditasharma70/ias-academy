import { Phone, Mail } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaTelegramPlane } from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className="bg-[#FFD700] text-[#1E3A8A] text-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2">
        
        {/* Left Side - Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+91-600-123-9999</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span className="font-semibold">iasacademy@gmail.com</span>
          </div>
        </div>

        {/* Right Side - Social Icons + Search */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 md:mt-0">
        
          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a href="#" className="bg-[#1E3A8A] p-1.5 rounded-full text-white"><FaFacebookF size={14} /></a>
            <a href="#" className="bg-[#1E3A8A] p-1.5 rounded-full text-white"><FaTwitter size={14} /></a>
            <a href="#" className="bg-[#1E3A8A] p-1.5 rounded-full text-white"><FaYoutube size={14} /></a>
            <a href="#" className="bg-[#1E3A8A] p-1.5 rounded-full text-white"><FaInstagram size={14} /></a>
            <a href="#" className="bg-[#1E3A8A] p-1.5 rounded-full text-white"><FaTelegramPlane size={14} /></a>
          </div>

         
        </div>
      </div>
    </div>
  );
}
