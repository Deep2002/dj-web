import React from "react";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    date: "Loading Up..",
    title: "Garba Night",
    link: "https://maps.google.com",
  },
  {
    date: "May 23rd",
    title: "Bollywood Night - Top Shots",
    link: "https://www.google.com/maps/place/Sambuca+360+Live+Italian+Kitchen/@33.0770116,-96.8261197,17z/data=!3m2!4b1!5s0x864c3cb3c7277e63:0x7edf0a3a6f70b685!4m6!3m5!1s0x864c3cb3b611069b:0x44b61042d0ec7c39!8m2!3d33.0770117!4d-96.8212488!16s%2Fg%2F1tfcj4mz?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    date: "April 14th",
    title: "Alibaba Hooka Lounge ",
    link: "https://www.google.com/maps/place/Ali+Baba+Hookah+Lounge/@32.8652684,-96.9785134,17z/data=!3m1!4b1!4m6!3m5!1s0x864e835eda425d45:0x398336612e30de8b!8m2!3d32.8652684!4d-96.9759385!16s%2Fg%2F11pr4vxk8_?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    date: "March 15th",
    title: "Biggest DFW Holi",
    link: "https://maps.google.com",
  },
];

export default function SctEvent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section
      id="events"
      className="w-full bg-black px-4 py-10 sm:py-12 flex justify-center"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40, scale: 1 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-6xl rounded-xl  shadow-xl backdrop-blur-md]"
      >
        <h2 className="text-white text-5xl sm:text-6xl font-bold mb-16 text-center font-bricolage tracking-tight py-10">
          Upcoming Events
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40, scale: 1 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          {events.map((event, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#333] rounded-lg p-4 sm:p-5 shadow hover:shadow-lg transition-all"
            >
              <div className="flex items-start sm:items-center space-x-3">
                <span className="bg-red-600 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                  {event.date}
                </span>
                <span className="text-white text-sm sm:text-base font-medium">
                  {event.title}
                </span>
              </div>

              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline text-xs sm:text-sm mt-2 sm:mt-0 sm:ml-4"
              >
                Direction →
              </a>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
