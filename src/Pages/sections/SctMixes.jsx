import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SctMixes() {
  const h2Ref = useRef(null); // Separate ref for the h2 element
  const isH2InView = useInView(h2Ref, { once: false });

  const iframe1Ref = useRef(null); // Separate ref for the first iframe
  const isIframe1InView = useInView(iframe1Ref, { once: false });

  const iframe2Ref = useRef(null); // Separate ref for the second iframe
  const isIframe2InView = useInView(iframe2Ref, { once: false });

  const iframe3Ref = useRef(null); // Separate ref for the third iframe
  const isIframe3InView = useInView(iframe3Ref, { once: false });

  const buttonRef = useRef(null); // Separate ref for the button
  const isButtonInView = useInView(buttonRef, { once: false });

  return (
    <div className="py-20 bg-black">
      <motion.h2
        ref={h2Ref}
        initial={{ opacity: 0, y: 40, scale: 1 }}
        animate={isH2InView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-white text-4xl sm:text-3xl md:text-4xl font-bold text-center mb-12 font-bricolage"
      >
        My Mixes
      </motion.h2>

      <div className="flex justify-center items-center px-5 md:px-10 w-full flex-col">
        <div className="w-full max-w-6xl aspect-video">
          <motion.iframe
            ref={iframe1Ref}
            initial={{ opacity: 0, y: 40, scale: 1 }}
            animate={isIframe1InView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-[166] rounded-lg"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1993257819&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=true&show_teaser=false"
          />
          <motion.iframe
            ref={iframe2Ref}
            initial={{ opacity: 0, y: 40, scale: 1 }}
            animate={isIframe2InView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-[166] pt-6 rounded-lg"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1927842944&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=true&show_teaser=false"
          />
          <motion.iframe
            ref={iframe3Ref}
            initial={{ opacity: 0, y: 40, scale: 1 }}
            animate={isIframe3InView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-[166] pt-6 rounded-lg"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1911591197&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=true&show_teaser=false"
          />
        </div>
        <motion.button
          ref={buttonRef}
          initial={{ opacity: 0, y: 40, scale: 1 }}
          animate={isButtonInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-8 px-6 py-3 bg-[#333] text-white rounded-lg hover:bg-[#111] transition-colors"
        >
          <a
            href="https://soundcloud.com/deep-parmar-122230752"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-semibold"
          >
            More on SoundCloud →
          </a>
        </motion.button>
      </div>
    </div>
  );
}
