import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import EmailModal from "./EmailModal";

import "../index.css";

const faqData = {
  "Course Details": [
    {
      question:
        "What topics are covered in the Ayatiworks Digital Marketing Training?",
      answer:
        "The training covers SEO, SEM, social media marketing, analytics, email campaigns, and more.",
    },
    {
      question:
        "Is this course suitable for beginners with no prior experience?",
      answer:
        "Absolutely! It is designed for beginners as well as marketing professionals.",
    },
    {
      question: "How long is the training program?",
      answer:
        "The program lasts approximately 6 to 8 weeks, with flexible schedules.",
    },
  ],
  Certification: [],
  "Payment & Pricing": [],
};

const FAQSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Course Details");
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12">
      <div className="container px-4 md:px-10 mx-auto">
        <h2 className="text-2xl md:text-4xl font-primary font-bold text-sky mb-3">
          Frequently ask questions
        </h2>
        <p className="text-gray-800 font-secondary font-medium mb-8">
          Got Questions? We’ve Got Answers!
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Category List */}
          <div className="space-y-6 min-w-[180px]">
            {Object.keys(faqData).map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null);
                }}
                className={`text-left font-semibold flex font-secondary items-center mb-3 transition-all duration-300 ${
                  activeCategory === category
                    ? "text-black"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <span className="ml-2 text-black">{">"}</span>
                )}
              </button>
            ))}
          </div>

          {/* Question List */}
          <div className="flex-1 space-y-4">
            {faqData[activeCategory].length > 0 ? (
              faqData[activeCategory].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => handleToggle(index)}
                    className="flex justify-between items-center font-secondary w-full text-left text-black font-medium text-sm md:text-base"
                  >
                    <span>
                      {index + 1}. {faq.question}
                    </span>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 font-tertiary text-sm text-gray-600 mt-2 overflow-hidden ${
                      openIndex === index ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 font-secondary">
                No FAQs available for this category yet.
              </p>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Request More Information
          </h3>
          <button className="bg-sky-500 text-white font-secondary font-semibold px-6 py-2 rounded-full hover:bg-sky-600 transition" 
          onClick={() => setModalOpen(true)} >
            Contact us
          </button>
          <EmailModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
