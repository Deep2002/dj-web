import { useEffect, useRef } from "react";
import homebg from "../Assets/Images/homebg.jpg";
import homgbglg from "../Assets/Images/homebglg.png";
import logo from "../Assets/Logos/logo.png";
import { Icon } from '@iconify/react';

import {motion} from "framer-motion"
import SctAboutMe from "./sections/SctAboutMe";



export default function  Home() {



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
        rounded-full text-white text-[20px] z-20"
      >
        <a><img src={logo} width={60} height={60}/></a>
        <div className="hidden md:flex gap-12">
          <a>Upcoming events</a>
          <a>Photos</a>
          <a>Mixes</a>
        </div>
        <div className="flex gap-3 items-center">
          <a className="bg-black py-2 px-5 rounded-full border-l-[0.2px] border-white hidden md:block">Contact us</a>
          <button className="md:hidden">
            <Icon icon="pepicons-pop:menu" color="#fff" width={28} height={28} />
          </button>
        </div>
      </div>

      {/* Centered Content */}
      <motion.div  
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className=" absolute inset-0 flex -top-10 flex-col items-center justify-center text-white text-center z-20">
        <h1 className="text-5xl md:text-7xl font-bold font-climateCrisis tracking-wide">
          DJ DEEP
          <br />
          FOREAL
        </h1>
        <p className="mt-4 md:text-lg text-sm font-light font-bricolage ">
          Bollywood | Nepali | Tollywood | Reggaeton </p>
        <motion.button 
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                
        className="bg-black mt-10 w-[15rem] md:w-[20rem] py-2 px-5 text-2xl rounded-full border-l-[0.1px] border-white ">Get a quote</motion.button>
      </motion.div>
    </div>
    <SctAboutMe/>
    </div>
  );
}
