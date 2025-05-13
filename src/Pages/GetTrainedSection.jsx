import React from "react";

const GetTrainedSection = () => {
  return (
    <section className="px-4 py-12 md:py-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2">
          {/* Avatars */}
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="/av1.svg"
              alt="Avatar 1"
              className="w-10 h-10 rounded-full"
            />
            <img
              src="/av2.svg"
              alt="Avatar 2"
              className="w-10 h-10 rounded-full"
            />
            <img
              src="/av3.svg"
              alt="Avatar 3"
              className="w-10 h-10 rounded-full"
            />
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
              +1
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Get Trained by!
          </h2>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            Learn from the Best, Succeed with the Best. Join Ayatiworks'
            expert-led training, designed to equip you with industry-proven
            strategies and insights from professionals who have worked with
            top-tier global clients.
          </p>

          {/* Button */}
          <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all">
            Read More
          </button>
        </div>

        {/* Right Side Cards */}
        <div className="border-3 rounded-xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Card 01 */}
            <div className="relative border-b md:border-r p-6">
              <div className="absolute -top-[10px] left-4 bg-white px-2 text-sm font-bold">
                01
              </div>
              <h3 className="font-bold text-lg mt-4">20+ Years of Expertise</h3>
              <p className="text-gray-800 mt-2 text-sm">
                Learn from seasoned professionals shaping the industry.
              </p>
            </div>

            {/* Card 02 */}
            <div className="relative border-b p-6">
              <div className="absolute -top-[10px] left-4 bg-white px-2 text-sm font-bold">
                02
              </div>
              <h3 className="font-bold text-lg mt-4">
                High-Ticket Client Strategies
              </h3>
              <p className="text-gray-800 mt-2 text-sm">
                Learn from seasoned professionals shaping the industry.
              </p>
            </div>

            {/* Card 03 */}
            <div className="relative col-span-1 md:col-span-2 p-6">
              <div className="absolute -top-[10px] left-4 bg-white px-2 text-sm font-bold">
                03
              </div>
              <h3 className="font-bold text-lg mt-4">Global Mentorship</h3>
              <p className="text-gray-800 mt-2 text-sm">
                Gain insights from experts handling premium global clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default GetTrainedSection;
