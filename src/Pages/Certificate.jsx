import React from "react";
import { motion } from "framer-motion";
// import certificateImg from "/Clip.svg";

const Certificate = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-10 bg-white">
      {/* Left Text Block */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-md text-center lg:text-left"
      >
        <h2 className="text-2xl font-medium text-gray-800 mb-4">
          Certificate of{" "}
          <span className="font-semibold text-black">Achievement</span>
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Gain a recognized Digital Marketing Certification to boost your
          professional profile and accelerate your career growth.
        </p>
      </motion.div>

      {/* Certificate Image */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xl shadow-xl rounded-xl overflow-hidden"
      >
        <img
          src="/Clip.svg"
          alt="Certificate of Achievement"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Certificate;
