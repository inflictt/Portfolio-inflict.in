import { CiLocationArrow1 } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

import { MdDarkMode } from "react-icons/md";
import profilePic from "../assets/front-inflict.webp";
import { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "grind", label: "Grind" },
  { id: "journey", label: "Journey" },
  // { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [mode, setMode] = useState(0)
  const handleModeChange = (mode) => {
    setMode(mode + 1)
  }
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="left-0 right-0 mx-auto fixed z-999 mt-2 rounded-3xl sm:rounded-4xl max-w-[95%] sm:max-w-3xl md:max-w-4xl lg:max-w-6xl flex items-center gap-2 sm:gap-4 md:gap-8 lg:gap-10 justify-between p-2 sm:p-3 bg-gray-700/30 backdrop-blur-md">

      {/* Left Logo */}
      <NavLink to="/" className="flex flex-row items-center gap-2 sm:gap-3 justify-center shrink-0">
        <img
          src={profilePic}
          className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full"
          alt="profile"
        />
        <h4 className="text-white text-sm sm:text-base hidden sm:block">Saksham</h4>

      </NavLink>

      {/* Right Nav Links */}
      <nav className="flex items-center gap-1 sm:gap-3 md:gap-6 lg:gap-10 w-max overflow-x-auto">
        {NAV_LINKS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="text-gray-500 text-xs sm:text-sm md:text-base px-1.5 sm:px-2 md:px-3 py-1 whitespace-nowrap cursor-pointer transition-all"
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 rounded-3xl cursor-pointer bg-teal-300 text-black gap-1 shadow-lg text-xs sm:text-sm md:text-base whitespace-nowrap shrink-0">
          Hire me <MdOutlineArrowOutward />


        </button>
        {/* <NavLink 
            className={({isActive})=>`block py-2 pr-2 sm:pr-4 pl-1 sm:pl-3 text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors duration-200 ${
                    isActive
                      ? "text-teal-700 font-bold "
                      : "text-gray-700"}`
           } to="/blogs">Blogs
        </NavLink> */}

      </nav>
    </header>
  );
}