import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SctGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const media = [];

  for (let i = 1; i <= 20; i++) {
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
    <div className="w-[300px] h-[380px] rounded-xl overflow-hidden bg-neutral-800 shrink-0">
      {type === "video" ? (
        <video
          src={src}
          className="w-full h-full object-cover"
          loop
          muted
          autoPlay
          playsInline
          preload="none"
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
    <div className="w-full overflow-hidden bg-black py-20">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 40, scale: 1 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-white text-4xl md:text-4xl font-bold font-bold text-center mb-12 font-bricolage"
      >
        Gallery
      </motion.h2>
      <div className="relative w-full">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"], ease: "easeInOut" }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[...media, ...media].map((item, idx) => (
            <MediaItem key={idx} {...item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
