import { useState } from 'react'
import '../index.css'


const curriculumData = [
  {
    logo: "/google.svg",
    title: "Google Ads",
    description:
      "Develop and manage effective campaigns to boost visibility and drive conversions. PPC, Display ads, Search, Video, Shopping, and App Ads",
  },
  {
    logo: "/meta.svg",
    title: "Meta Ads",
    description:
      "Harness the power of Facebook and Instagram advertising to engage your target audience.",
  },
  {
    logo: "/linkedin.svg",
    title: "LinkedIn Ads",
    description:
      "Utilize LinkedIn's platform for B2B marketing and lead generation.",
  },
  {
    logo: "/Ads.svg",
    title: "Programmatic Advertising",
    description:
      "Understand automated ad buying to optimize your marketing strategies.",
  },
];

const CurriculumSection = () => {
  return (
    <section className="bg-white py-15 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl sm:text-4xl font-primary font-bold text-center text-sky mb-2 py-2">
        Our Curriculum Covers
      </h2>
      <p className="text-center font-secondary text-lg text-black font-medium mb-10 py-4">
        Master 19+ powerful digital marketing modules in live interactive
        sessions, <br />
        scheduled from <b>(8:00 PM To 9:00 PM)</b>.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 py-4">
        {curriculumData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between"
          >
            <div>
              <img src={item.logo} alt={item.title} className="h-8 mb-4" />
              <h3 className="text-lg font-semibold font-primary tracking-widest mb-3">
                {item.title}
              </h3>
              <p className="text-gray-800 font-secondary text-sm">{item.description}</p>
            </div>

            {/* Avatar group */}
            <div className="flex items-center mt-6 space-x-2">
              <img
                src="/av1.svg"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <img
                src="/av2.svg"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <img
                src="/av3.svg"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-sm font-medium text-gray-600">
                +1
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurriculumSection;
