import { NavLink } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import profilePic from "../assets/Saksham.jpg";
import { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "grind", label: "Grind" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
    const [mode,setMode] = useState(0)
    const handleModeChange = (mode) =>{
        setMode(mode+1)
    }
    const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);   
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="left-0 right-0 mx-auto fixed z-999 mt-2 rounded-4xl max-w-6xl flex items-center  justify-between p-3 bg-gray-700/30 backdrop-blur-md">
      
      {/* Left Logo */}
      <NavLink to="/" className="flex flex-row items-center gap-3 justify-center">
        <img
          src={profilePic}
          className="w-10 h-10 rounded-full"
          alt="profile"
        />
        <h4 className="text-white">Saksham</h4>
       
      </NavLink>

      {/* Right Nav Links */}
        <nav className="flex items-center gap-8 w-max">
        {NAV_LINKS.map(({ id, label }) => (
            <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-gray-500 [&.active]:text-blue-600 [&.active]:font-bold"

    >
                {label}
            </button>
            ))}

        <NavLink 
            className={({isActive})=>`block py-2 pr-4 pl-3 transition-colors duration-200 ${
                    isActive
                      ? "text-teal-700 font-bold "
                      : "text-gray-700"}`
           } to="/blogs">Blogs
        </NavLink>

      </nav>
    </header>
  );
}