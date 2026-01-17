"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Are the keyboards hot-swappable?",
    answer: "Yes! You can change switches anytime without soldering.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide with tracking included.",
  },
  {
    question: "Can I customize RGB lighting?",
    answer: "Absolutely! Every keyboard has fully customizable RGB profiles.",
  },
  {
    question: "Do you provide a warranty?",
    answer: "Yes, all keyboards come with a 1-year warranty.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="px-6 md:px-20 py-20 mx-6 md:mx-20">
      <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-gray-200 rounded-2xl p-6 cursor-pointer bg-gray-200 shadow-md transition-all hover:shadow-lg"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-black text-lg">{faq.question}</h3>
                <div
                  className={`text-indigo-500 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {isOpen && (
                <p className="mt-4 text-black text-sm transition-all">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
