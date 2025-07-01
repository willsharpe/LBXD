"use client";
import NameFields from "./components/logIn";
import { Roboto_Mono } from "next/font/google";
import { motion, useMotionValue } from "framer-motion";
import NavBar from "./components/NavBar";
import { Martian_Mono } from "next/font/google";
import { Rubik_Glitch } from "next/font/google";
import './styles/globals.css';
import MovieGrid from "./components/MovieGrid";
const rubik = Rubik_Glitch({
  subsets:['latin'],
  weight:'400',
  variable:'--font-glitch'
});

const martian = Martian_Mono({
  subsets:['latin'],
  variable: '--font-martian'
})

export default function Home(){
  return(
    <>
    
    
    <NavBar/>
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-bold my-10"
      >
        Welcome to the Letterboxd Clone
      </motion.div>

    <h1 className={`${rubik.className}`}>Sign Up Page</h1>
    <h2 className={`${martian.className}`}>
      This is Martian
    </h2>
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