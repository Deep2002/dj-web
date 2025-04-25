// footer section
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SctFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="w-full bg-black py-10 overflow-hidden bg-black flex items-center justify-center -mt-24 p-10">
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-white text-xs"
      >
        © 2025 All rights reserved. Designed by{" "}
        <a
          href="https://www.linkedin.com/in/krish-parmar-1430b9212?trk=people-guest_people_search-card"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:underline items-center justify-center font-semibold text-white"
        >
          Krish Parmar
        </a>
        . And Developed by{" "}
        <a
          href="https://www.instagram.com/dj_deep_foreal/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:underline items-center justify-center font-semibold text-white"
        >
          Deep Parmar
        </a>
      </motion.p>
    </div>
  );
}
