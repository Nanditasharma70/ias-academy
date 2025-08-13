"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Which coaching is best for UPSC?",
    answer:
      "IAS Academy is one of the leading institutes providing high-quality UPSC preparation with experienced faculty and proven results.",
  },
  {
    question: "Does IAS Academy offer online courses?",
    answer:
      "Yes, we offer both online and offline batches with flexible timings for working professionals and students.",
  },
  {
    question: "Where is IAS Academy located?",
    answer:
      "We are located in the heart of the city, close to public transport for easy access.",
  },
  {
    question: "Does IAS Academy provide test series?",
    answer:
      "Yes, we provide prelims, mains, and optional subject test series with detailed feedback.",
  },
];

export default function FAQAndLocation() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10 px-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6 ms-6">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800"
                >
                  {faq.question}
                  {openIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#1E3A8A]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#1E3A8A]" />
                  )}
                </button>
                {openIndex === idx && (
                  <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Location</h2>
          <p className="text-[#1E3A8A] font-semibold mb-3">New Delhi</p>
          <div className="flex items-start gap-3 text-gray-700">
            <MapPin className="w-6 h-6 text-[#1E3A8A] mt-1" />
            <p className="leading-relaxed">
              IAS Academy <br />
              23-B, Knowledge Hub, <br />
              Connaught Place, <br />
              New Delhi - 110001
            </p>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Landmark: Near Rajiv Chowk Metro Gate No. 5
          </p>
          <a
            href="https://maps.app.goo.gl/example"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium text-[#1E3A8A] hover:underline"
          >
            📍 View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
