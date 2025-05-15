import React from "react";
import { motion } from "framer-motion";
import "../index.css";


const steps = [
  { label: "Step 1", text: "Step on to our AdQuarter Mastery Program", top: "18%", left: "17%" },
  { label: "Step 2", text: "Join Our Community of Learners & Experts on WhatsApp after the payment", top: "54.5%", left: "33.5%" },
  { label: "Step 3", text: "Attend live 5 interactive Course", top: "25%", left: "38%" },
  { label: "Step 4", text: "Work on Live Projects", top: "76%", left: "63%" },
  { label: "Step 5", text: "Learn other courses if interested", top: "26.5%", left: "64%" },
  { label: "Step 6", text: "Bag your internship on Ayin’s Ship", top: "24%", left: "92%" },
];

const RoadMap = () => {
  return (
    <div className="relative w-full px-4 py-12 max-w-9xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-sky mb-6">
        Road Map
      </h2>

      {/* Background Roadmap Image */}
      <div className="relative w-full">
        <img
          src="/Fream-1.svg"
          alt="Roadmap"
          className="w-full h-auto object-contain"
        />

        {/* Overlay Step Content */}
        <div className="absolute inset-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="absolute max-w-[150px] sm:max-w-[180px] text-[12px] sm:text-sm md:text-base"
              style={{
                top: step.top,
                left: step.left,
                transform: "translate(-50%, -50%)"
              }}
            >
              <div className=" backdrop-blur-sx  p-2 ">
                <p className="text-gray-700 font-tertiary font-medium">{step.text}</p>
                <p className="font-semibold font-tertiary text-sky-600">{step.label}</p>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
