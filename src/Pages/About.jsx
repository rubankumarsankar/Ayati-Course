import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col justify-center items-center px-4 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sky font-bold text-3xl md:text-5xl"
          >
            Founder & CEO
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Upendran
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-600 text-lg"
          >
            Digital Marketer, Entrepreneur, Sales Trainer & A Mentor.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="font-semibold text-black text-lg"
          >
            Ayatiworks an Award-Winning Company
          </motion.p>

          {/* Avatars and Experience */}
          <div className="flex flex-wrap items-center gap-6 mt-6">
            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <img
                src="/av1.svg"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <img
                src="/av2.svg"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <img
                src="/av3.svg"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-sm font-medium text-gray-600">
                +1
              </div>
            </div>

            {/* Experience */}
            <div className="flex flex-wrap gap-3">
              {[
                { title: "12 years of", subtitle: "Mentoring" },
                {
                  title: "12 years of",
                  subtitle: "Handling Digital Marketing",
                },
                {
                  title: "5+ Crores Budgets",
                  subtitle: "Handled in Digital Advertising",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1 + i * 0.2 }}
                  className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-gray-100 shadow-sm"
                >
                  <div>
                    <p className="text-sm font-bold">{item.title}</p>
                    <p className="text-xs text-gray-600">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-sky-500 text-white font-bold px-8 py-3 rounded-full shadow"
            >
              Get Started
            </motion.button>

            <motion.a
              href="#how-it-works"
              className="text-black font-medium flex items-center gap-1 hover:underline"
            >
              How it works <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
        
        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img src="/Pen.svg" alt="Mascot" className="w-72 md:w-96" />
        </motion.div>
      </div>

      {/* Trusted by section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="bg-gray-50 rounded-xl border mt-16 p-6 w-full max-w-4xl text-center"
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 text-gray-700 text-lg font-medium">
          <span>
            Learn Performance Marketing from the Experts who worked with…
          </span>

          <div className="relative w-32 h-8 overflow-hidden">
            <motion.img
              src="/volvo.svg"
              alt="Volvo"
              className="absolute left-0 top-0 h-6 md:h-8"
              animate={{ x: [0, 60, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="/nippo.svg"
              alt="Nippo"
              className="absolute left-16 top-0 h-6 md:h-8"
              animate={{ x: [0, -60, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
