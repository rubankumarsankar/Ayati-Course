import React, { useState, useEffect } from "react";
import "../styles/home.css";
import { ImPower } from "react-icons/im";
import Eg1 from "./eg1";

export default function PMMCoursePage() {
  const [isOpen, setIsOpen] = useState(false);
  const texts = ["Learn", "Advertise", "Succeed"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length); // change text
        setFade(true); // start fade-in
      }, 500); // fade-out duration
    }, 3000); // total cycle every 3s

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    console.log("Form submitted!");
    setIsOpen(false);
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-white min-h-screen hero-section">
      {/* Header */}
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Ayatiworks Logo" className="h-10" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a
              href="#home"
              className="hover:text-sky transition nav-button"
            >
              Home
            </a>
            <a
              href="#contact"
              className="hover:text-sky transition nav-button"
            >
              Contact us
            </a>
          </nav>

          {/* Mobile Menu Button */}
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
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
            <a href="#home" className="block hover:text-sky-600 transition">
              Home
            </a>
            <a href="#contact" className="block hover:text-sky-600 transition">
              Contact us
            </a>
          </div>
        )}
      </header>

      {/* Main Section */}
      <main className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Ayatiworks Performance{" "}
          <br className="hidden md:block mt-3 text-sky-600" />
          Marketing Mastery{" "}
          <span className="inline-block mt-3 text-sky-400">
            <ImPower style={{ height: 35 }} />
          </span>{" "}
          Course
        </h1>

        <p className="text-muted mt-3 mb-3">
          Learn in-demand skills, earn industry certifications, and get career
          support in our <br className="d-none d-md-block" />
          Online Program. Conducted by Industry Experts you can Trust.
        </p>
        <h5 className="mb-2">30 days Live PMM Course</h5>

        {/* Typewriter Text */}
        <div className="fade-container mt-4 mb-6">
          <span className={`fade-text ${fade ? "fade-in" : "fade-out"}`}>
            {texts[currentTextIndex]}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-5 mb-12 mt-6">
          {/*  Home Icon */}
          <i
            className="bi bi-meta position-absolute text-primary fs-1 animate-bounce "
            style={{ top: "200px", left: "350px" }}
          ></i>
          <i
            className="bi bi-youtube position-absolute text-danger fs-2 animate-rotate"
            style={{ top: "200px", right: "350px" }}
          ></i>

          <button
            type="button"
            class="text-white bg-sky-300 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-sky-500 dark:hover:bg-sky-600 focus:outline-none dark:focus:ring-sky-700"
            onClick={() => setIsOpen(true)}
          >
            Get Started
          </button>

          <button
            type="button"
            class="text-sky-800 hover:text-white border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-sky-500 dark:text-sky-500 dark:hover:text-white dark:hover:bg-sky-500 dark:focus:ring-sky-800"
          >
            Join the Course
          </button>

          {/*  Home Icon */}
          <i
            className="bi bi-linkedin position-absolute text-info fs-2 animate-pulse"
            style={{ bottom: "350px", left: "450px" }}
          ></i>
          <i
            className="bi bi-google position-absolute text-warning fs-2 animate-scale"
            style={{ bottom: "350px", right: "450px" }}
          ></i>
        </div>
      </main>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
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
      <div className="container px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center text-gray-800 text-sm font-medium divide-y md:divide-y-0 md:divide-x divide-gray-300">
          <div className="px-2 py-2">
            <h4 className="text-xl font-bold">100%</h4>
            <p>Live & Interactive</p>
          </div>
          <div className="px-2 py-2">
            <h4 className="text-xl font-bold">Hands-</h4>
            <p>On Learning</p>
          </div>
          <div className="px-2 py-2">
            <h4 className="text-xl font-bold">Certification</h4>
            <p>Guaranteed</p>
          </div>
          <div className="px-2 py-2">
            <h4 className="text-xl font-bold">Bag an Internship</h4>
            <p>in Ayatiworks</p>
          </div>
        </div>
      </div>
    </section>
  );
}
