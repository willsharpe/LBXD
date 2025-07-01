import Link from "next/link";
import { Roboto_Mono } from "next/font/google";
import { useState } from "react";

const roboto = Roboto_Mono({
  subsets: ["latin"],
});

function NavBar() {
    
  return (
    <header className={`flex justify-end gap-4 px-8 py-4 ${roboto.className}`}>
      <Link href="/">
        <button className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors duration-200">
          Home
        </button>
      </Link>
      
      
      
      
      <Link href="/login">
        <button className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors duration-200">
          Login
        </button>
      </Link>

      <Link href="/signup">
        <button className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors duration-200">
          Create Account
        </button>
      </Link>
      <Link href="/topRated">
        <button className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors duration-200">
            Top Rated
        </button>
        </Link>
    </header>
  );
}

export default NavBar;
