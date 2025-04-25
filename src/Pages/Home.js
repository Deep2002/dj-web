import homebg from "../Assets/Images/homebg.jpg";
import homgbglg from "../Assets/Images/homebglg.png";
import logo from "../Assets/Logos/logo.png";
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";

import SctAboutMe from "./sections/SctAboutMe";
import SctGallery from "./sections/SctGallery";
import SctEvent from "./sections/SctEvent";
import SctMixes from "./sections/SctMixes";
import SctContactMe from "./sections/SctContactMe";
import SctFooter from "./sections/SctFooter";
import { useState } from "react";

export default function Home() {
  const scrollToGetQuote = () => {
    const section = document.getElementById("getQuote");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToEvents= () => {
    const section = document.getElementById("events");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMixes= () => {
    const section = document.getElementById("mixes");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToGallery = () => {
    const section = document.getElementById("gallery");
    section?.scrollIntoView({ behavior: "smooth" });
  };


  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div>
      <div className="relative min-h-[800px] w-screen h-screen font-bricolage overflow-hidden">
        {/* Background image layer */}
        <img
          src={homebg}
          alt="background img"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Gradient overlay */}
        <img
          src={homgbglg}
          alt="bg gradient img"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

        {/* Navbar */}
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1590px] h-[60px] 
          flex items-center justify-between px-5 md:px-10
          bg-gradient-to-r from-[#7373738c] via-black to-[#ffffff5b]
          rounded-full text-white text-[20px] z-30"
        >
          <a href="#"><img src={logo} width={60} height={60} /></a>
          <div className="hidden md:flex gap-8 text-[0.8em] lg:text-[1em]">
            <button className="hover:underline" onClick={scrollToEvents}>Upcoming events</button>
            <button className="hover:underline" onClick={scrollToGallery}>Gallery</button>
            <button className="hover:underline" onClick={scrollToMixes}>Mixes</button>
            <button className="hover:underline" onClick={scrollToGetQuote}>Pricing</button>
          </div>
          <div className="flex gap-3 items-center">
            {/* Desktop button */}
            <button
              onClick={scrollToGetQuote}
              className="bg-black py-2 px-5 rounded-full border border-white hidden md:block"
            >
              Contact us
            </button>

            {/* Mobile button (icon for now, can be full button if you want) */}
            <button onClick={toggleMenu} className="md:hidden">
              <Icon
                icon={!isMenuVisible ? 'pepicons-pop:menu' : 'pepicons-pop:menu-off'}
                color="#fff"
                width={28}
                height={28}
              />
            </button>
          </div>

          {isMenuVisible && (
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-black rounded-lg shadow-lg p-5 w-[90%] max-w-[300px] z-40 md:hidden">
              <ul className="flex flex-col gap-4 text-white text-lg">
                <li><button onClick={scrollToEvents}>Upcoming events</button></li>
                <li><button onClick={scrollToGallery}>Gallery</button></li>
                <li><button onClick={scrollToMixes}>Mixes</button></li>
                <li><button onClick={scrollToGetQuote}>Pricing</button></li>
              </ul>
            </div>
          )}
        </div>

        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0 flex -top-10 flex-col items-center justify-center text-white text-center z-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-climateCrisis tracking-wide">
            DJ DEEP
            <br />
            FOREAL
          </h1>
          <p className="mt-4 md:text-lg text-sm font-light font-bricolage">
            Bollywood | Nepali | Tollywood | Reggaeton
          </p>
          <motion.button
            onClick={scrollToGetQuote}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-black mt-10 w-[15rem] md:w-[20rem] py-2 px-5 text-2xl rounded-full border-[0.1px] border-white hover:bg-[#fff] hover:text-black transition-all duration-500 ease-in-out"
          >
            Get a quote
          </motion.button>
        </motion.div>
      </div>

      <SctAboutMe />
      <SctGallery />
      <SctEvent />
      <SctMixes />
      <SctContactMe />
      <SctFooter />
    </div>
  );
}
