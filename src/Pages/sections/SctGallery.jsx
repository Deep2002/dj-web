import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SctGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const media = [];

  for (let i = 1; i <= 10; i++) {
    // Limiting to 10 pairs
    try {
      media.push({
        type: "image",
        src: require(`../../Assets/Images/${i}.jpg`),
      });
    } catch (e) {
      console.error(`Image ${i}.jpg not found`);
    }

    try {
      media.push({
        type: "video",
        src: require(`../../Assets/Videos/${i}.mp4`),
      });
    } catch (e) {
      console.warn(`Video ${i}.mp4 not found`);
    }
  }

  const MediaItem = ({ type, src }) => (
    <div className="w-[300px] h-[380px] rounded-xl overflow-hidden bg-neutral-800 shrink-0 will-change-transform">
      {type === "video" ? (
        <video
          src={src}
          className="w-full h-full object-cover"
          loop
          muted
          autoPlay
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          src={src}
          alt="media"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  );

  return (
    <div id="gallery" className="w-full bg-black py-20 overflow-hidden">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-white text-4xl font-bold text-center mb-12 font-bricolage"
      >
        Gallery
      </motion.h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {[...media, ...media].map((item, idx) => (
            <MediaItem key={idx} {...item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
