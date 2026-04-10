import { NavLink } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import profilePic from "../assets/Saksham.jpg";
import { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  // { id: "projects", label: "Projects" },
  { id: "grind", label: "Grind" },
  // { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
    const [mode,setMode] = useState(0)
    const handleModeChange = (mode) =>{
        setMode(mode+1)
    }
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="left-0 right-0 mx-auto fixed z-999 mt-2 rounded-4xl max-w-[95%] sm:max-w-6xl flex items-center gap-10 justify-between p-2 sm:p-3 bg-gray-700/30 backdrop-blur-md">
      
      {/* Left Logo */}
      <NavLink to="/" className="flex flex-row items-center gap-2 sm:gap-3 justify-center shrink-0">
        <img
          src={profilePic}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
          alt="profile"
        />
        <h4 className="text-white text-sm sm:text-base hidden sm:block">Saksham</h4>
       
      </NavLink>

      {/* Right Nav Links */}
      <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-max overflow-x-auto">
        {NAV_LINKS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="text-gray-500 text-xs sm:text-sm md:text-base px-2 sm:px-3 py-1 whitespace-nowrap transition-all"
          >
            {label}
          </button>
        ))}

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