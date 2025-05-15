import React from "react";
import { motion } from "framer-motion";
import "../index.css";

// import certificateImg from "/Clip.svg";

const Certificate = () => {
  return (
    <>
      <div className="w-full px-4 py-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col-reverse sm:flex-row items-center relative justify-between gap-10">
          {/* Text Content on the Left */}
          <div className="w-full sm:w-3/3 bg-white border flex-col-4 border-blue-200 shadow-md rounded-lg p-6 text-center sm:text-left">
            <h2 className="text-xl md:text-2xl font-primary text-left font-bold text-sky-500 mb-1">
              Certificate of
            </h2>
            <h2 className="text-xl md:text-2xl font-primary font-bold text-left text-sky-500 mb-4">
              Achievement
            </h2>
            <p className="text-gray-700 font-secondary text-sm sm:text-base text-left leading-relaxed">
              Gain a recognized Digital Marketing Certification to boost your{" "}
              <br />
              professional profile and accelerate your career growth.
            </p>
          </div>

          {/* Certificate Image on the Right */}
          <div className="w-full flex flex-col-2 absolute justify-end">
            <img
              src="/Clip.svg"
              alt="Certificate Preview"
              className="w-full max-w-[350px] items-end sm:max-w-[400px] object-contain shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
