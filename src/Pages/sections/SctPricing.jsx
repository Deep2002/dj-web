import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SctPricing() {
  const h2Ref = useRef(null);
  const basicRef = useRef(null);
  const premiumRef = useRef(null);
  const deluxeRef = useRef(null);

  const isH2InView = useInView(h2Ref, { once: false });
  const isBasicInView = useInView(basicRef, { once: false });
  const isPremiumInView = useInView(premiumRef, { once: false });
  const isDeluxeInView = useInView(deluxeRef, { once: false });

  const scrollToContact = () => {
    const section = document.getElementById("getQuote");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20"
    >
      <motion.h2
        ref={h2Ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isH2InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-5xl sm:text-6xl font-bold mb-16 text-center font-bricolage tracking-tight"
      >
        Our Packages
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full">
        {/* Basic */}
        <motion.div
          ref={basicRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isBasicInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-gradient-to-br from-gray-800/60 to-gray-900/90 border border-gray-700 rounded-3xl p-10 flex flex-col hover:scale-105 transition shadow-lg"
        >
          <h3 className="text-3xl font-semibold mb-6 text-center">Basic</h3>
          <p className="text-4xl font-bold text-center text-blue-400 mb-10">
            $700
          </p>
          <ul className="space-y-5 text-left">
            {["2 Speakers", "1 Microphone", "Basic Lighting", "Mixer"].map(
              (item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-400 mr-3 text-xl">✓</span>
                  <span>{item}</span>
                </li>
              )
            )}
          </ul>
          <div className="mt-auto pt-10 flex justify-center">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition"
            >
              Book Now
            </button>
          </div>
        </motion.div>

        {/* Premium */}
        <motion.div
          ref={premiumRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isPremiumInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative bg-gradient-to-br from-indigo-600/70 to-purple-800/90 border-2 border-purple-500 rounded-3xl p-12 flex flex-col scale-105 shadow-2xl"
        >
          <div className="absolute top-0 right-0 bg-purple-500 text-xs font-semibold text-white px-3 py-1 rounded-bl-2xl rounded-tr-3xl">
            Most Popular
          </div>
          <h3 className="text-4xl font-semibold mb-6 text-center">Premium</h3>
          <p className="text-5xl font-bold text-center text-white mb-10">
            $1200
          </p>
          <ul className="space-y-5 text-left">
            {[
              "4 Speakers",
              "2 Microphones",
              "Upgraded Lighting Setup",
              "DJ Booth Setup",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-green-300 mr-3 text-xl">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10 flex justify-center">
            <button
              onClick={scrollToContact}
              className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition"
            >
              Book Now
            </button>
          </div>
        </motion.div>

        {/* Deluxe */}
        <motion.div
          ref={deluxeRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isDeluxeInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="bg-gradient-to-br from-gray-800/60 to-gray-900/90 border border-gray-700 rounded-3xl p-10 flex flex-col hover:scale-105 transition shadow-lg"
        >
          <h3 className="text-3xl font-semibold mb-6 text-center">Deluxe</h3>
          <p className="text-4xl font-bold text-center text-pink-400 mb-10">
            $2000
          </p>
          <ul className="space-y-5 text-left">
            {[
              "6 Speakers + Subwoofers",
              "4 Wireless Microphones",
              "Advanced Light Show + Lasers",
              "MC Hosting Available",
              "Special FX (Fog, CO2)",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-green-400 mr-3 text-xl">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10 flex justify-center">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full transition"
            >
              Book Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
