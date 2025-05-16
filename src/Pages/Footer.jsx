import React from "react";
import "../index.css";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
          <a
            href="https://ayatiworks.com/privacy-policy"
            className="hover:text-sky font-secondary transition nav-button"
          >
            Privacy Policy
          </a>
          <a
            href="https://ayatiworks.com/terms-and-conditions"
            className="hover:text-sky font-secondary  transition nav-button"
          >
            Terms & Conditions
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-5">
          <a
            href="https://www.linkedin.com/company/ayatiworks/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky border border-sky-100 p-2 rounded-full hover:bg-sky-200 hover:tex-white transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/ayatiworkstechnologies/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky border border-sky-100 p-2 rounded-full hover:bg-sky-200 hover:tex-white transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/ayatiworks/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky border border-sky-100 p-2 rounded-full hover:bg-sky-200 hover:tex-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@ayatiworks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky border border-sky-100 p-2 rounded-full hover:bg-sky-200 hover:tex-white transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://x.com/i/flow/login?redirect_after_login=%2FAyatiworks1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky border border-sky-100 p-2 rounded-full hover:bg-sky-200 hover:tex-white transition"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
