import React, { useState, useEffect } from "react";
import { ImPower } from "react-icons/im";
import "../styles/home.css";
import "../index.css";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    setIsOpen(false);
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-white min-h-screen hero-section hero-section::before">
      {/* Header */}
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/ayatiworks_logo.svg"
            alt="Ayatiworks Logo"
            className="h-10"
          />
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-sky font-secondary nav-button">
            Home
          </a>
          <a href="#" className="hover:text-sky font-secondary nav-button">
            Contact us
          </a>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
          <a
            href="#"
            className="block hover:text-sky font-secondary nav-button"
          >
            Home
          </a>
          <a
            href="#"
            className="block hover:text-sky font-secondary nav-button"
          >
            Contact us
          </a>
        </div>
      )}

      {/* Main Hero */}
      <main className="text-center container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-primary leading-tight mb-4">
          Ayatiworks Performance <br />
          Marketing Mastery{" "}
          <span className="inline-block">
            <img src="/Vector.svg" alt="" className="h-12" />
          </span>{" "}
          Course
        </h1>

        <p className="text-gray-700 mt-3 mb-3 text-sm sm:text-base font-secondary md:text-lg lg:text-xl">
          Learn in-demand skills, earn industry certifications, and get career
          support in our <br className="hidden md:block" />
          Online Program. Conducted by Industry Experts you can Trust.
        </p>

        <h5 className="mb-2 font-medium text-sm sm:text-base md:text-lg font-secondary">
          30 days Live PMM Course
        </h5>
        {/* Typewriter */}
        <div className="mt-4 mb-6">
          <span
            className={`text-lg sm:text-xl md:text-3xl font-secondary lg:text-4xl font-bold ${
              fade ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
          >
            {texts[currentTextIndex]}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          <button
            type="button"
            className="text-white font-tertiary bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-sm sm:text-base md:text-lg px-6 py-2.5"
          >
            Get Started
          </button>
          <button
            type="button"
            className="text-sky-600 font-tertiary hover:text-white border-2 border-white hover:bg-sky-500 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm sm:text-base md:text-lg px-6 py-2.5"
          >
            Join the Course
          </button>
        </div>
      </main>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>

            <h2 className="text-xl font-bold mb-4">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Feature Highlights */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 font-secondary">
        <div className="bg-white font-primary rounded-xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-800 text-sm sm:text-base md:text-lg">
          <div className="p-1 rounded">
            <h4 className="text-xl font-bold font-tertiary">100%</h4>
            <p className="font-secondary">Live & Interactive</p>
          </div>
          <div className="p-1 rounded">
            <h4 className="text-xl font-bold font-tertiary">Hands-</h4>
            <p className="font-secondary">On Learning</p>
          </div>
          <div className="p-1  rounded">
            <h4 className="text-xl font-bold font-tertiary">Certification</h4>
            <p className="font-secondary">Guaranteed</p>
          </div>
          <div className="p-1 rounded">
            <h4 className="text-xl font-bold font-tertiary">
              Bag an Internship
            </h4>
            <p className="font-secondary">in Ayatiworks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
