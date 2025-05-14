import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    icons: ['Message.svg', 'Lock.svg', 'Home.svg', 'Profile.svg', 'Pencil.svg'],
    text: 'Difference between Performance Marketing & Digital Marketing',
  },
  {
    icons: ['Lock.svg', 'Home.svg', 'Profile.svg', 'Pencil.svg', 'Message.svg'],
    text: 'The current and future demand for Performance Marketers',
  },
  {
    icons: ['Home.svg', 'Profile.svg', 'Pencil.svg', 'Message.svg', 'Lock.svg'],
    text: 'Remuneration & Career Journey of Performance Marketers',
  },
  {
    icons: ['Profile.svg', 'Pencil.svg', 'Message.svg', 'Lock.svg', 'Home.svg'],
    text: 'A to Z Blueprint of Strategies a Performance Marketer needs to know',
  },
  {
    icons: ['Pencil.svg', 'Message.svg', 'Lock.svg', 'Home.svg', 'Profile.svg'],
    text: 'Time Tested Growth Hacks a Performance Marketer needs to Master',
  },
];

const sizeClasses = ['w-10 h-10', 'w-12 h-12', 'w-16 h-16', 'w-12 h-12', 'w-10 h-10'];

const CourseIntro = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        What will you learn in the Course?
      </h2>

      {/* Timeline Icons */}
      <div className="relative flex items-center py-10 justify-center space-x-6 mb-6 w-full max-w-3xl">
        {/* Connecting line */}
        <div className="absolute top-1/2 left-0 right-0 border-t  border-gray-300 z-0 transform -translate-y-1/2"></div>

        {steps[index].icons.map((icon, i) => (
          <div
            key={i}
            className={`relative flex items-center justify-center ml-12 rounded-full shadow-md border 
            ${sizeClasses[i]} ${i === 2 ? 'ring-4 ring-sky-400' : ''}`}
          >
            <img
              src={`/${icon}`}
              alt="icon"
              className={`object-contain ${i === 2 ? 'w-15 h-15' : 'w-12 h-12'}`}
            />
          </div>
        ))}
      </div>

      {/* Text Animation */}
      <div className="min-h-[50px]">
        <AnimatePresence mode="wait">
          <motion.p
            key={steps[index].text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-sm md:text-base font-medium tracking-wide max-w-xl mx-auto mb-10"
          >
            {steps[index].text}
          </motion.p>
        </AnimatePresence>
      </div>

      <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-8 mt-3 rounded-full shadow">
        Get Started
      </button>
    </div>
  );
};

export default CourseIntro;
