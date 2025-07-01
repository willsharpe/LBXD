"use client";

import { Roboto_Mono } from "next/font/google";
import { motion, useMotionValue } from "framer-motion";
import NavBar from "./components/NavBar";
import { useState } from "react"
import { Rubik_Glitch } from "next/font/google";
import './styles/globals.css';
import MovieGrid from "./components/MovieGrid";
const rubik = Rubik_Glitch({
  subsets:['latin'],
  weight:'400',
  variable:'--font-glitch'
});

const roboto = Roboto_Mono({
  subsets:['latin'],
  
})

export default function Home(){

  return(
    <>
    
    <div className="relative h-[900px]  bg-center bg-no-repeat bg-cover "
    style={{ backgroundImage: `url('/306069-3840x2160-desktop-4k-interstellar-wallpaper.jpg')`, backgroundSize:'auto 700px'}}
    >

      <div className="relative z-20">
        <NavBar/>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        className={`text-center py-150 text-4xl font-bold my-10 ${roboto.className}`}
      >
        Letterboxd Clone
      </motion.div>
     

    </div>

    
    

    


    <div style={{marginBottom: '10px', paddingTop:'50px'}}>
      <motion.div
        initial= {{opacity:0,scale:0.95 }}
        whileInView={{ opacity: 1, scale:1}}
        transition={{ duration: 1.0}}
        viewport={{ once:true}}
        className="container mx-auto px-4">
          <MovieGrid />
      </motion.div>
    
    </div>
    

    
    </>
  );
}