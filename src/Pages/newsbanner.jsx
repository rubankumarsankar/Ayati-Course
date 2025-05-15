import { useState } from "react";
import "../index.css";



function NewsBanner() {
  return (
    <section className="w-full bg-sky-50 overflow-hidden py-3">
      <div className="whitespace-nowrap">
        <div className="animate-marquee text-secondary text-sky-700 text-xl font-light tracking-wider">
          Master in-demand digital marketing skills with live expert guidance, real-world projects at ₹3999 only.
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default NewsBanner;



