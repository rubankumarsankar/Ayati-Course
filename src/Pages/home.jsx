import React, { useState, useEffect } from "react";
import { ImPower } from "react-icons/im";
import "../styles/home.css";
import "../index.css";
import EmailModal from "./EmailModal";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const texts = ["Learn", "Advertise", "Succeed"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="bg-gradient-to-r font-blue-50 to-white min-h-100 hero-section  mx-auto hero-section::before">
      {/* Header */}
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3">
          <img src="/ayatiworks_logo.svg" alt="Ayatiworks Logo" className="h-10" />
        </a>

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-sky font-secondary nav-button">Home</a>
          <a href="#" onClick={() => setModalOpen(true)} className="hover:text-sky font-secondary nav-button">
            Contact us
          </a>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
          <a href="/" className="block hover:text-sky font-secondary nav-button">Home</a>
          <a href="#" onClick={() => setModalOpen(true)} className="block hover:text-sky font-secondary nav-button">
            Contact us
          </a>
        </div>
      )}

      {/* Main Hero */}
      <main className="text-center container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl font-bold font-primary leading-tight mb-4">
          Ayatiworks Performance <br />
          Marketing Mastery{" "}
          <span className="inline-block align-middle">
            <img src="/Vector.svg" alt="" className="inline h-6 sm:h-6 md:h-12" />
          </span>{" "}
          Course
        </h1>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 mt-3 mb-3 font-secondary">
          Learn in-demand skills, earn industry certifications, and get career
          support in our <br className="hidden md:block" />
          Online Program. Conducted by Industry Experts you can Trust.
        </p>

        <h5 className="md:mb-2 font-medium text-sm sm:text-xs md:text-lg font-secondary">
          30 days Live PMM Course
        </h5>

        {/* Typewriter */}
        <div className="md:mt-4 mb-6">
          <span className={`text-lg sm:text-xl md:text-3xl lg:text-4xl font-secondary font-bold transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
            {texts[currentTextIndex]}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:mt-4">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="text-white font-tertiary bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2"
          >
            Get Started
          </button>
          <EmailModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
          {/* <button
            type="button"
            className="text-sky-600 font-tertiary hover:text-white border-2 border-white hover:bg-sky-500 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2"
          >
            Join the Course
          </button> */}
        </div>
      </main>

      {/* Feature Highlights */}
      <div className="container mx-auto sm:px-0 md:px-6 lg:px-8 py-2 md:py-6 font-secondary">
        <div className="bg-white font-primary rounded-xl sm:mt-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 text-center text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg">
          <div className="md:py-2 rounded">
            <h4 className="text-xl font-bold font-tertiary mt-2">100%</h4>
            <p className="font-secondary">Live & Interactive</p>
          </div>
          <div className="md:py-2 rounded">
            <h4 className="text-xl font-bold font-tertiary mt-2">Hands-</h4>
            <p className="font-secondary">On Learning</p>
          </div>
          <div className="md:py-2 rounded">
            <h4 className="text-xl font-bold font-tertiary mt-2">Certification</h4>
            <p className="font-secondary">Guaranteed</p>
          </div>
          <div className="md:py-2 rounded">
            <h4 className="text-xl font-bold font-tertiary mt-2">Bag an Internship</h4>
            <p className="font-secondary">in Ayatiworks</p>
          </div>
        </div>
      </div>
    </section>  

    </>
    

    
  );
};

export default Hero;
