import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function SctMixes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="py-20 bg-black">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 40, scale: 1 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-white text-4xl sm:text-3xl md:text-4xl font-bold font-bold text-center mb-12 font-bricolage"
      >
        My Mixes
      </motion.h2>

      <div className="flex justify-center items-center px-4">
        <div className="w-full max-w-6xl aspect-video">
          <motion.iframe
            ref={ref}
            initial={{ opacity: 0, y: 40, scale: 1 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-[166] rounded-lg"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1993257819&color=%233e61a4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"
          />
          <motion.iframe
            ref={ref}
            initial={{ opacity: 0, y: 40, scale: 1 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-[166] pt-6 rounded-lg"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1927842944&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"
          />
          <motion.iframe
            ref={ref}
            initial={{ opacity: 0, y: 40, scale: 1 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-[166] pt-6 rounded-lg"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1911591197&color=%23363e49&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"
          />
        </div>
      </div>
    </div>
  );
}

// <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1927842944&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true
