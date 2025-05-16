import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";

const weeks = [
  {
    title: "Week 1",
    subtitle: "Meta Ads (Facebook & Instagram)",
    color: "bg-blue-500",
    startDay: 1,
    days: [
      "Meta Ads Basics: Account Setup & Campaign Structure",
      "Audience Targeting & Segmentation Strategies",
      "Ad Creatives & Compelling Copywriting",
      "Campaign Performance: Metrics & Optimization",
      "Retargeting & Advanced Meta Strategies",
    ],
  },
  {
    title: "Week 2",
    subtitle: "Google Ads (Search, Display, & Shopping)",
    color: "bg-pink-300",
    startDay: 6,
    days: [
      "Google Ads Foundations: Account & Campaign Types",
      "Search Campaigns: Keywords & Text Ads",
      "Display & Video: Visual Ads & YouTube",
      "Google Shopping: Product Feeds & Campaigns",
      "Performance Analysis & Optimization in Google Ads",
    ],
  },
  {
    title: "Week 3",
    subtitle: "LinkedIn Ads",
    color: "bg-purple-300",
    startDay: 11,
    days: [
      "LinkedIn Ads: Objectives & Professional Targeting",
      "Lead Generation: Forms & Targeted Audiences",
      "Sponsored Content & InMail Campaigns",
      "Campaign Management & Reporting on LinkedIn",
      "B2B Strategies & Account-Based Marketing",
    ],
  },
  {
    title: "Week 4",
    subtitle: "Programmatic Advertising",
    color: "bg-green-300",
    startDay: 16,
    days: [
      "Programmatic Intro: DSPs & the Ecosystem",
      "Data & Targeting: DMPs & Audience Segments",
      "Creative & Formats: DCO & Native Ads",
      "Campaign Setup & Performance Optimization",
      "Advanced Programmatic & Future Trends",
    ],
  },
];

const CourseSchedule = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWeek((prev) => (prev + 1) % weeks.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white max-w-7xl mx-auto px-6 py-14 font-sans">
      {/* Mobile View */}
      <div className="block md:hidden space-y-4">
        <div className="flex justify-center gap-2 flex-wrap">
          {weeks.map((week, i) => (
            <button
              key={i}
              onClick={() => setActiveWeek(i)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-sm ${i === activeWeek ? `${week.color} text-white` : "bg-gray-200 text-gray-700"}`}
            >
              {week.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeWeek}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-center text-sky-600">{weeks[activeWeek].subtitle}</h3>
            {weeks[activeWeek].days.map((day, idx) => (
              <p
                key={idx}
                className="text-base text-gray-800 border-b border-gray-200 pb-2"
              >
                <span className="font-semibold">
                  Day {weeks[activeWeek].startDay + idx}:
                </span>{" "}
                {day}
              </p>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-12 gap-6 items-start relative">
        <div className="col-span-1"></div>
        <div className="col-span-4 relative">
          <div className="space-y-6 pl-6 relative">
            {weeks.map((week, i) => (
              <div
                key={i}
                onClick={() => setActiveWeek(i)}
                className="relative cursor-pointer transition-all"
              >
                <h4
                  className={`text-xl font-primary font-bold ${
                    i === activeWeek ? "text-sky" : "text-gray-600"
                  }`}
                >
                  {week.title}
                </h4>
                {i === activeWeek && (
                  <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-lg font-secondary text-sky"
                  >
                    {week.subtitle}
                  </motion.p>
                )}
                <div className="absolute left-67.5 top-1">
                  <div
                    className={`w-5 h-5 rounded-full ${week.color}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWeek}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {weeks[activeWeek].days.map((day, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="pt-1" />
                  <p className="text-lg font-tertiary text-gray-800">
                    <span className="font-semibold">
                      Day {weeks[activeWeek].startDay + idx}:
                    </span>{" "}
                    {day}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CourseSchedule;