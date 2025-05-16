// components/EmailModal.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { LiaTimesCircle } from "react-icons/lia";

const EmailModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    // message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.promise(
      emailjs.send(
        "your_service_id",     // replace with your EmailJS service ID
        "your_template_id",    // replace with your template ID
        formData,
        "your_user_id"         // replace with your public key from EmailJS
      ),
      {
        loading: "Sending email...",
        success: () => {
          onClose(); // Close modal
          return "✅ Email sent successfully!";
        },
        error: "❌ Failed to send email. Please try again.",
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl p-8 sm:p-10">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-600 hover:text-red-600 transition text-4xl font-bold focus:outline-none"
          aria-label="Close modal"
        >
          <LiaTimesCircle size={32} />
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-bold text-center text-sky-600 mb-6">
          ✉️ Enquriy Form For Ayatiworks
        </h2>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="space-y-5 py-2">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="off"
            className="w-full px-4 py-3  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="off"
            className="w-full px-4 py-3 mt-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="off"
            className="w-full px-4 py-3 mt-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />
          {/* <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          ></textarea> */}

          <button
            type="submit"
            className="w-100 bg-sky-500 mt-3 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailModal;
