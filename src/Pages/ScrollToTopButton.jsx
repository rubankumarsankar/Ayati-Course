import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import "../index.css";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-sky-600 text-white p-3 rounded-full shadow-lg hover:bg-sky-700 transition-all duration-300"
        aria-label="Scroll to Top"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
