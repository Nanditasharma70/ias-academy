"use client";

import { useState } from "react";

export default function Register() {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOtp = () => {
    // TODO: Call API to send OTP
    console.log("Sending OTP to", mobile);
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    // TODO: Call API to verify OTP
    console.log("Verifying OTP", otp, "for", mobile);
    alert("OTP verified! Registration successful.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-3xl font-extrabold text-center text-[#1E3A8A] mb-2">
          Register
        </h2>

        <p className="text-center text-gray-600 mb-6">
           Register with otp.
        </p>

        {!otpSent ? (
          <>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
            />
            <button
              onClick={handleSendOtp}
              className="w-full bg-[#1E3A8A] text-white py-2 rounded-lg hover:bg-blue-900 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <p className="text-center text-gray-700 mb-4">
              OTP has been sent to <span className="font-semibold">{mobile}</span>
            </p>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-[#FFD700] text-[#1E3A8A] py-3 rounded-lg hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Verify OTP
            </button>
          </>
        )}

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-[#1E3A8A] hover:underline font-medium">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
