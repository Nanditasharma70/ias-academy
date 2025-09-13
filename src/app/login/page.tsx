"use client";

import { useState } from "react";

export default function Login() {
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
    alert("Logged in successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-[#1E3A8A] mb-6">
          Login
        </h2>

        {!otpSent ? (
          <>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-[#1E3A8A]"
            />
            <button
              onClick={handleSendOtp}
              className="w-full bg-[#1E3A8A] text-white py-3 rounded hover:bg-blue-800 transition"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-4 text-center">OTP sent to {mobile}</p>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-[#1E3A8A]"
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-[#FFD700] text-[#1E3A8A] py-2 rounded hover:bg-yellow-600 transition"
            >
              Verify OTP
            </button>
          </>
        )}

        <p className="text-center mt-4 text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="/register" className="text-[#1E3A8A] hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
