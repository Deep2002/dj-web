import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";


export default function SctAboutMe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return (

        // about me section
        <div className="relative flex flex-col items-center justify-center md:min-h-[800px] w-screen h-screen bg-black text-white -mt-10 pl-10 pr-10">

            <motion.div 
                ref={ref}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full max-w-[20em] md:max-w-[25em] md:h-[25em] lg:max-w-[40em] lg:h-[40em] rounded-[30px] bg-gradient-to-br from-[#7373738c] via-black to-[#ffffff5b] border-[#ffffff5b] border-[0.2px] p-7 md:pt-14 md:pl-12 md:pr-12 md:pb-20 -mt-20 lg:pt-20 ">

                <motion.h1 
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold font-bricolage tracking-wide">
                    About Me
                </motion.h1>
                <motion.p
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="md:mt-4 lg:text-[1.5em] mt-2 text-[#9B9B9B]">
                    Bringing high-energy Bollywood, Hollywood, and Reggaetón beats to the club scene. Based in Dallas, I create unforgettable nights with seamless mixes, crowd-hyping transitions, and a deep understanding of the vibe. From chill lounge sets to peak-hour bangers, I make every moment flow.
                    <br/>
                    <br/>
                    Let’s turn up the night. 🎧🔥
                </motion.p>


            </motion.div>

            {/* Floating Squares */}
            <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="hidden md:block absolute top-24 -right-10 w-[15%] aspect-square pointer-events-none bg-gradient-to-br from-[#7373738c] via-black to-[#ffffff5b] border-[#ffffff5b] border-[0.2px] rounded-[40px]"/>
        
            <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.90 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hidden md:block absolute top-80 -left-10 w-[15%] aspect-square  pointer-events-none bg-gradient-to-br from-[#7373738c] via-black to-[#ffffff5b] border-[#ffffff5b] border-[0.2px] rounded-[40px]"/>
        
        
            <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.60 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="hidden md:block absolute top-[40em] left-40 w-[8%] aspect-square  pointer-events-none bg-gradient-to-br from-[#7373738c] via-black to-[#ffffff5b] border-[#ffffff5b] border-[0.2px] rounded-full"/>
        
            <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="hidden md:block absolute top-[30em] right-40 w-[8%] aspect-square  pointer-events-none bg-gradient-to-br from-[#7373738c] via-black to-[#ffffff5b] border-[#ffffff5b] border-[0.2px] rounded-full"/>
        
        
        </div>
    )

}