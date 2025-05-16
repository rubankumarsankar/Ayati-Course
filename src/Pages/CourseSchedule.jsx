import React, { useState, useEffect  } from "react";
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
  const [activeWeek, setActiveWeek] = useState(0); // Default to Week 1

  // Auto-rotate through weeks
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWeek((prev) => (prev + 1) % weeks.length);
    }, 4000); // Change week every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-white max-w-7xl mx-auto px-6 py-14 font-sans">
      <div className="grid grid-cols-12 gap-6 items-start relative">
        <div className="col-span-1"></div>

        {/* Left Column - Week Selector */}
        <div className="col-span-4 relative">
          <div className="space-y-6 pl-6 relative">
            {weeks.map((week, i) => (
              <div
                key={i}
                onClick={() => setActiveWeek(i)}
                className="relative cursor-pointer transition-all"
              >
                <h4 className={`text-xl font-primary font-bold ${i === activeWeek ? "text-sky" : "text-gray-600"}`}>
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
                {/* Timeline dot */}
                <div className="absolute left-67.5 top-1">
                  <div className={`w-4 h-4 rounded-full border-3  ${i === activeWeek ? week.color : week.color}`}></div>
                </div>
              </div>
            ))}
            {/* Vertical timeline line */}
            <div className="absolute left-75 top-1 bottom-1 w-px h-100 bg-gray-300"></div>
          </div>
        </div>

        {/* Right Column - Days */}
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
