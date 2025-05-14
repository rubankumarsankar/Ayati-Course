import React from "react";
import { motion } from "framer-motion";

const steps = [
  { label: "Step 1", text: "Step on to our AdQuarter Mastery Program", top: "26.5%", left: "18.5%" },
  { label: "Step 2", text: "Join Our Community of Learners & Experts on WhatsApp after the payment", top: "61%", left: "34%" },
  { label: "Step 3", text: "Attend live 5 interactive Course", top: "30%", left: "38%" },
  { label: "Step 4", text: "Work on Live Projects", top: "72%", left: "62%" },
  { label: "Step 5", text: "Learn other courses if interested", top: "31%", left: "63%" },
  { label: "Step 6", text: "Bag your internship on Ayin’s Ship", top: "32%", left: "90%" },
];

const RoadMap = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl sm:text-4xl font-bold text-center text-sky mb-2 py-2">
        Road Map
      </h2>
      {/* Roadmap image as background */}
      <img
        src="/Fream-1.svg" // replace with your actual image path
        alt="Roadmap"
        className="w-full h-auto"
      />

      {/* Overlay content */}
      <div className="absolute inset-0">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.3 }}
            viewport={{ once: true }}
            className="absolute w-40 text-sm md:text-base"
            style={{ top: step.top, left: step.left, transform: "translate(-50%, -50%)" }}
          >
            <div className=" p-2 ">
              <p className="font-bold text-sky-600">{step.label}</p>
              <p className="text-black-500 font-bold">{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;
