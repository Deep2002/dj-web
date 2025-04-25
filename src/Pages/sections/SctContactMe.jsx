import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SctContactMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section
      id="getQuote"
      className="min-h-screen bg-black flex items-center justify-center px-4 -mt-24"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="backdrop-blur-md bg-gradient-to-br from-[#7373738c] via-black to-[#ffffff5b] border-[#ffffff5b] border-[0.2px] shadow-xl rounded-lg p-8 sm:p-10 w-full max-w-md sm:max-w-lg relative"
      >
        <h2 className="text-white text-3xl sm:text-4xl font-bold text-center mb-8 font-bricolage">
          Get a Quote
        </h2>

        <form
          action="https://formsubmit.co/f2096fbcaefa0ee6645a8b05f153b829"
          method="POST"
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            required
            className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
          />
          <textarea
            type="text"
            name="message"
            placeholder="What are you looking for?"
            rows="4"
            required
            className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </section>
  );
}
