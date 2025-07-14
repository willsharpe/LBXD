"use client";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
  subsets: ["latin"],
});

interface NavBarProps {
  onSignInClick: () => void;
  onSignUpClick: () => void;
}

function NavBar({onSignInClick,onSignUpClick}:NavBarProps) {

  return (
    <header className={`flex justify-end gap-4 px-8 py-4 ${roboto.className}`}>
      <Link href="/">
        <button className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors duration-200">
          Home
        </button>
      </Link>
 
      <div onClick={onSignInClick} className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors duration-200 cursor-pointer">
          Sign In
      </div>
      

      <div onClick={onSignUpClick} className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors duration-200">
          Create Account
      </div>

      <Link href="/topRated">
        <button className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors duration-200">
            Top Rated
        </button>
      </Link>
      <Link href="/Upcoming">
        <button className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors duration-200">
          Upcoming
        </button>
      </Link>
      <Link href="/accountPage">
        <button className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors duration-200">
          Account
        </button>
      </Link>
    </header>
  );
}

export default NavBar;
