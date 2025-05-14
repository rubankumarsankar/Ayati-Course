import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4 md:px-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/ayatiworks_logo.svg"
            alt="Ayatiworks Logo"
            className="h-8"
          />
          {/* <span className="text-sky-600 font-medium text-sm">next is now</span> */}
        </div>

        {/* Middle: Links */}
        <div className="flex space-x-6 text-sm font-semibold text-gray-700">
          <a href="/privacy-policy" className="hover:text-sky transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-sky transition">
            Terms & Conditions
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky border border-sky-100 p-2 rounded-full hover:bg-sky-100 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky border border-sky-100 p-2 rounded-full hover:bg-sky-100 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky border border-sky-100 p-2 rounded-full hover:bg-sky-100 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky border border-sky-100 p-2 rounded-full hover:bg-sky-100 transition"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
