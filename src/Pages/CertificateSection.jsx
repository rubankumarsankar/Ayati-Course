import React from "react";

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
                <span className="text-sm font-medium text-gray-800">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      
      <div className="flex flex-col sm:flex-row items-start w-full  sm:items-center">
        <div className="w-full text-left bg-white absolute border border-blue-200 shadow-md rounded-lg p-6 sm:w-4/5">
          <h2 className="text-lg font-bold text-sky-600 mb-1" style={{color:"#16d4f6"}}>
            Earn Career Certificate
          </h2>
          <p className="text-gray-700 text-sm">
            Add this credential to your LinkedIn profile, resume, or CV. <br />
            Share it on social media and in your performance review.
          </p>
        </div>
        {/* Image goes on top on small screens, to the right on larger */}
        <div className="sm:w-1/3 flex relative justify-center top-10 left-180 mb-4 sm:mb-0">
          <img
            src="/Certificate.svg"
            alt="Certificate Preview"
            className="max-w-[360px]"
          />
        </div>
      </div>

      {/* Features Grid */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {features1.map((item, index) => (
          <div
            key={index}
            className="flex gap-0 bg-white rounded-xl shadow-md"
          >
            <img src={item.icon} alt="" className="w-20 h-20 " />
            <p className="text-sm font-bold text-gray-800 mt-4 mr-5">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-3">
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
      <style>
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
      </style>

      <div className="space-y-6 overflow-hidden">
        {/* Left to Right Scroll */}
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

        {/* Right to Left Scroll */}
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
      </div>
    </div>
  );
}
