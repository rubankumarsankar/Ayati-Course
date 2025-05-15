import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../index.css";

// Carousel data
const audienceData = [
  { title: "Marketing Professionals", image: "/c1.svg" },
  { title: "Business Owners & Entrepreneurs", image: "/c2.svg" },
  { title: "Students & Fresh Graduates", image: "/c3.svg" },
  { title: "Home Makers", image: "/c5.svg" },
  { title: "Self-Employed People", image: "/c6.svg" },
  { title: "Small Business Owners", image: "/c7.svg" },
];

// Duplicate list for smooth loop
const repeatedData = [...audienceData, ...audienceData];

const WhoShouldJoinCarousel = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollSpeed = 0.5; // Slower for smoothness

    const autoScroll = () => {
      if (!isPaused) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0; // Loop back
        }
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="relative py-16 px-4 md:px-12 bg-white font-sans overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-sky">
          You should be a part of our
        </h2>
        <p className="text-gray-800 text-sm font-bold md:text-base mt-4">
          Ayatiworks’ Performance Marketing: The 4-Pillar <br />
          Digital Marketing Course
        </p>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 bottom-0 left-5 w-10 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div className="absolute top-0 bottom-0 right-5 w-10 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

      {/* Carousel */}
      <div
        ref={scrollRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex gap-4 overflow-x-scroll no-scrollbar scroll-smooth"
        style={{
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {repeatedData.map((audience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: (index % audienceData.length) * 0.1,
            }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-44 sm:w-52 md:w-60 lg:w-64 h-100 md:h-64 relative rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={audience.image}
              alt={audience.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 w-full bg-black bg-opacity-50 py-2 text-center">
              <p className="text-white text-sm font-semibold px-2">
                {audience.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhoShouldJoinCarousel;
