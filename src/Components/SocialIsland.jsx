import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function DynamicIsland() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -14, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="absolute w-fit p-2 rounded-full bg-gradient-to-br from-[#ffffff30] to-[#ffffff10] border-2 border-white/30 shadow-md backdrop-blur-md flex space-x-4 px-5 mt-[500px] md:mt-[600px] justify-center items-center"
    >
      {/* Icons */}
      <a
        href="https://instagram.com/dj_deep_foreal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          icon="skill-icons:instagram"
          width={28}
          className="text-white text-2xl hover:scale-110 transition-transform duration-300"
        />
      </a>
      <a
        href="https://www.facebook.com/deep.parmar.161214/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          icon="logos:facebook"
          width={28}
          className="text-white text-2xl hover:scale-110 transition-transform duration-300"
        />
      </a>
      <a
        href="https://www.youtube.com/@dj_deep_foreal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          icon="logos:youtube-icon"
          width={29}
          className="text-white text-2xl hover:scale-110 transition-transform duration-300"
        />
      </a>
      <a
        href="https://soundcloud.com/deep-parmar-122230752"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          icon="logos:soundcloud"
          width={35}
          className="text-white text-2xl hover:scale-110 transition-transform duration-300"
        />
      </a>
    </motion.div>
  );
}
