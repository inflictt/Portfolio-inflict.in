import { useState } from "react"
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


export default function Footer(){
    const [visitor,setVisitor] =useState(1) 
    return(
        
    <footer className="bg-black py-4 px-4 sm:px-6">
        
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 items-center sm:items-start">
            <div>
            <span className="text-gray-600 text-sm sm:text-base">You are the <span className="text-teal-500">{visitor}</span> visitor</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <span className="  text-gray-600"><button 
            onClick={() => window.open("https://x.com/Saksham1172975", "_blank")}
            className=" cursor-pointer rounded-full p-3 sm:p-4 border border-gray-900 text-sm transition-transform duration-300 hover:-translate-y-2"> <RiTwitterXLine  className="text-lg sm:text-xl"/> </button></span>

            <span 
            onClick={() => window.open("https://www.linkedin.com/in/sakshamlodha", "_blank")}
            className="  text-gray-600"><button className=" cursor-pointer rounded-full p-3 sm:p-4 border border-gray-900 text-sm transition-transform duration-300 hover:-translate-y-2"> <FaLinkedin className="text-lg sm:text-xl" /> </button></span>

            <span className="  text-gray-600"><button 
            onClick={() => window.open("https://github.com/inflictt/", "_blank")}
            className=" cursor-pointer rounded-full p-3 sm:p-4 border border-gray-900 text-sm transition-transform duration-300 hover:-translate-y-2"> <FaGithub className="text-lg sm:text-xl" /> </button></span>

            <span className="  text-gray-600">
                <button 
                    onClick={() => window.open("mailto:realsaksham06@gmail.com", "_blank")}
                    className=" cursor-pointer rounded-full p-3 sm:p-4 border border-gray-900 text-sm transition-transform duration-300 hover:-translate-y-2"> <IoIosMail className="text-lg sm:text-xl" /> 
                    </button>
            </span>

            </div>
        </div>
        <div className="my-4">
            <span className=" flex flex-1 justify-center items-center text-gray-600"><button className=" cursor-pointer rounded-xl w-38 h-8 border border-gray-900 text-sm transition-transform duration-300 hover:-translate-y-1"> ☕ Buy Me A Coffee</button></span>
        </div>
        <div className="flex flex-col sm:flex-row flex-1 items-center justify-between gap-2 sm:gap-0 text-center sm:text-left">

            <span className="text-gray-600 text-xs sm:text-sm">© 2026. All rights reserved <span className="text-teal-300">Saksham Lodha</span></span>


            
        
            <span className="text-gray-600 text-xs sm:text-sm">You are # <span className="text-teal-300">{visitor}</span> visitor</span>
   
        </div>
    </footer>)
}