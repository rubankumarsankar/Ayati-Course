import React from "react";
import "../index.css";

const featureBadges = [
  { icon: "/Profile.svg", text: "Small Batch Trainings" },
  { icon: "/Chat.svg", text: "One to One Attention" },
  { icon: "/Lock.svg", text: "Book Your Spot Now!" },
];

const features1 = [
  { icon: "/Home.svg", text: "Live Interactive Classes (8:00 PM To 9:00 PM)" },
  { icon: "/Pencil.svg", text: "Agency Focused Training" },
  { icon: "/Chat.svg", text: "Comprehensive Curriculum" },
  { icon: "/Message.svg", text: "Get hold of the Recordings to Class" },
  { icon: "/Profile.svg", text: "CBL – Community Based Learning" },
  { icon: "/Home.svg", text: "Build Your Personal Brand" },
  { icon: "/Wallet.svg", text: "Live Projects Based Learning" },
  { icon: "/Lock.svg", text: "Learn from Digital Marketing Agency Experts" },
];

const features2 = [
  { icon: "/Lock.svg", text: "Learn from Digital Marketing Agency Experts" },
  { icon: "/Wallet.svg", text: "Live Projects Based Learning" },
  { icon: "/Home.svg", text: "Build Your Personal Brand" },
  { icon: "/Profile.svg", text: "CBL – Community Based Learning" },
  { icon: "/Message.svg", text: "Get hold of the Recordings to Class" },
  { icon: "/Chat.svg", text: "Comprehensive Curriculum" },
  { icon: "/Pencil.svg", text: "Agency Focused Training" },
  { icon: "/Home.svg", text: "Live Interactive Classes (8:00 PM To 9:00 PM)" },
];

export default function HighlightsSection() {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* Top Badges */}
      <div className="px-4 py-8 max-w-7xl mx-auto">
        {/* Wrapper Card */}
        <div className="bg-white shadow-lg rounded-2xl ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {featureBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-1 bg-gray-50  rounded-xl"
              >
                <img src={badge.icon} alt="" className="w-25 h-20" />
                <span className="text-sm text-secondary font-medium text-gray-800">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      <div className="w-full px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col-reverse sm:flex-row items-center relative justify-between gap-10">
        {/* Text Content on the Left */}
        <div className="w-full sm:w-3/3 bg-white border flex-col-4 border-blue-200 shadow-md rounded-lg p-6 text-center sm:text-left">
          <h2 className="text-xl md:text-2xl text-left font-bold text-sky mb-1">
            Earn Career Certificate
          </h2>
          
          <p className="text-gray-700 font-secondary text-sm sm:text-base text-left leading-relaxed">
            Add this credential to your LinkedIn profile, resume, or CV. <br />
            Share it on social media and in your performance review.
          </p>
        </div>

        {/* Certificate Image on the Right */}
        <div className="w-full sm:flex flex-col-2 absolute object-contain hidden sm:block sm:justify-end">
          <img
            src="/Certificate-1.svg"
            alt="Certificate Preview"
            className="w-full max-w-[250px] items-end sm:max-w-[300px] object-contain shadow-md"
          />
        </div>
      </div>
    </div>


      {/* <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-10 py-10 px-4">
        
        <div className="w-full sm:w-3/3 flex-cols-2  bg-white border relative border-blue-200 shadow-md rounded-lg p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-sky-500">
            Earn Career Certificate
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Add this credential to your LinkedIn profile, resume, or CV. <br />
            Share it on social media and in your performance review.
          </p>
        </div>

       
        <div className="w-100 flex absolute mr-5 justify-end-safe ">
          <img
            src="/Certificate-1.svg"
            alt="Certificate Preview"
            className=" max-w-[250px] sm:max-w-[300px]  rounded-xl shadow-md "
          />
        </div>
      </div> */}

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 py-3 lg:grid-cols-4 gap-3">
        {features1.map((item, index) => (
          <div
            key={index}
            className="flex gap-0 bg-white rounded-xl shadow-md"
          >
            <img src={item.icon} alt="" className="w-20 h-20 " />
            <p className="text-sm font-bold font-tertiary text-gray-800 mt-4 mr-5">{item.text}</p>
          </div>
        ))}
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-3">
        {features2.map((item, index) => (
          <div
            key={index}
            className="flex gap-0 bg-white rounded-xl shadow-md"
          >
            <img src={item.icon} alt="" className="w-20 h-20 " />
            <p className="text-sm font-bold text-gray-800 mt-4 mr-5">{item.text}</p>
          </div>
        ))}
      </div> */}

      {/* Features Section with Animation */}
      {/* Animation styles */}
      {/* <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(0); }
            100% { transform: translateX(50%); }
          }
        `}
      </style> */}

      {/* <div className="space-y-6 overflow-hidden">
        <div className="w-full overflow-hidden">
          <div
            className="flex w-max"
            style={{
              animation: "scroll-right 40s linear infinite",
            }}
          >
            {[...features2, ...features1].map((item, index) => (
              <div
                key={`right-${index}`}
                className="flex items-center gap-2 bg-white shadow-md rounded-xl min-w-[250px] mx-2 py-2 px-4"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-15 h-15 object-contain"
                />
                <p className="text-sm font-semibold text-gray-800">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div
            className="flex w-max"
            style={{
              animation: "scroll-left 40s linear infinite",
            }}
          >
            {[...features2, ...features2].map((item, index) => (
              <div
                key={`left-${index}`}
                className="flex items-center gap-2 bg-white shadow-md rounded-xl min-w-[250px] mx-2 py-2 px-4"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-15 h-15 object-contain"
                />
                <p className="text-sm font-semibold text-gray-800">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
