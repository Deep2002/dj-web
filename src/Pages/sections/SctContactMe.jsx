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
          Contact Us
        </h2>

        <form
          action="https://formsubmit.co/963789fb7642e30ea90e2863a95fd0f0"
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

          <div className="flex flex-col md:flex-row gap-4">
            <select
              name="countryCode"
              className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none w-full md:w-1/4 h-10"
              required
            >
              <option value="+1">+1 (USA/Canada)</option>
              <option value="+91">+91 (India)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+61">+61 (Australia)</option>
              <option value="+49">+49 (Germany)</option>
              <option value="+33">+33 (France)</option>
              <option value="+81">+81 (Japan)</option>
              <option value="+55">+55 (Brazil)</option>
              <option value="+34">+34 (Spain)</option>
              <option value="+39">+39 (Italy)</option>
              <option value="+52">+52 (Mexico)</option>
              <option value="+971">+971 (UAE)</option>
              <option value="+45">+45 (Denmark)</option>
              <option value="+47">+47 (Norway)</option>
              <option value="+46">+46 (Sweden)</option>
              <option value="+53">+53 (Cuba)</option>
              <option value="+62">+62 (Indonesia)</option>
              <option value="+27">+27 (South Africa)</option>
              <option value="+54">+54 (Argentina)</option>
              <option value="+1">+1 (Canada)</option>
              <option value="+20">+20 (Egypt)</option>
              <option value="+66">+66 (Thailand)</option>
              <option value="+82">+82 (South Korea)</option>
              <option value="+354">+354 (Iceland)</option>
              <option value="+380">+380 (Ukraine)</option>
            </select>

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none w-full md:w-3/4"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
          />

          <textarea
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
