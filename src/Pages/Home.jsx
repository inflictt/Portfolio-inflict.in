import { useEffect, useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import profilePic from "../assets/Saksham.jpg";
import { MdDarkMode } from "react-icons/md";
import spiritImg from "../assets/saksham-sprite.svg"
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useGSAP } from "@gsap/react";

export default function Home(){
    const spriteRef = useRef(null);

        useGSAP(()=>{
            gsap.to(spriteRef.current, {
        y: 300,
        x: 150,
        rotation: 25,
        scale: 0.4,
        opacity: 0,
        ease: "power3.in",
        scrollTrigger: {
            trigger: spriteRef.current,
            start: "top 30%",
            end: "+=500",
            scrub: 1.2,
        },
        });
        })


    const ROLES = [
        {role:"Frontend Learner",id:0},
        {role:"MERN Developer",id:1},
        {role:"Django Developer",id:2},
        {role:"Backend Enthusiast",id:3},
        {role:"Gamer",id:4}
        ];
    const [currId,setCurrId] = useState(0)

    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrId((prev)=>(prev+1) % ROLES.length)
        }, 3000);
        return () => clearInterval(interval);
        },[]
    )

    return (
        <div id="home" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-4" >

                <div className="w-full lg:w-lg text-center lg:text-left" >
                <h4 className="text-lg sm:text-xl text-gray-600">Hi , I am</h4>
                <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none bg-black/85">
                Saksham
                </h1>

                <div className="relative bg-black my-4 sm:my-5 border border-white rounded-full px-4 py-2 w-fit mx-auto lg:mx-0 text-teal-500 text-sm sm:text-base">
                <span>{ROLES[currId].role}</span>
                </div>

                <p className="text-gray-500 bg-black/85 text-sm sm:text-base">Full Stack Developer specializing in modern web applications with <span className="text-teal-500 underline">React,</span> <span className="text-teal-500 underline">Node.js,</span> and <span className="text-teal-500 underline">Django</span> . I build scalable, performant solutions with AI integration.</p>
                
                    <div className="flex flex-row flex-wrap justify-center lg:justify-start my-4 gap-3 sm:gap-0">
                        <button 
                         onClick={() => {
                                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                            className="transition-transform duration-300 hover:-translate-y-1 px-5 sm:px-7 py-2 rounded-xl cursor-pointer bg-linear-to-r from-cyan-400 to-teal-600 text-black font-semibold gap-9 shadow-lg text-sm sm:text-base">
                        Contact
                        </button>
                        
                        <button 
                        onClick={() => window.open("/SAKSHAM_LODHA_RESUME.pdf", "_blank")}
                            className="transition-transform duration-300 hover:-translate-y-1 sm:mx-6 px-5 sm:px-7 py-2 rounded-xl cursor-pointer gap-8 border-2 border-gray-700 text-white font-semibold opacity-100 shadow-lg bg-black/85 text-sm sm:text-base">Resume
                        </button>                    
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 bg-black/75">
                                <span className="  text-gray-600"><button 
                                onClick={() => window.open("https://x.com/Saksham1172975", "_blank")}
                                className=" cursor-pointer rounded-2xl p-3 sm:p-4 border border-gray-900 text-sm transition-transform duration-300 hover:-translate-y-2"> <RiTwitterXLine  className="text-lg sm:text-xl"/> </button></span>
                    
                                <span 
                                onClick={() => window.open("https://www.linkedin.com/in/sakshamlodha", "_blank")}
                                className="  text-gray-600"><button className=" cursor-pointer rounded-2xl p-3 sm:p-4 border border-gray-900 text-sm transition-transform duration-300 hover:-translate-y-2"> <FaLinkedin className="text-lg sm:text-xl" /> </button></span>
                    
                                <span className="  text-gray-600"><button 
                                onClick={() => window.open("https://github.com/inflictt/", "_blank")}
                                className=" cursor-pointer rounded-2xl p-3 sm:p-4 border border-gray-900 text-sm transition-transform duration-300 hover:-translate-y-2"> <FaGithub className="text-lg sm:text-xl" /> </button></span>
                    
                                <span className="  text-gray-600">
                                    <button 
                                        onClick={() => window.open("mailto:realsaksham06@gmail.com", "_blank")}
                                        className=" cursor-pointer rounded-2xl p-3 sm:p-4 border border-gray-900 text-sm transition-transform duration-300 hover:-translate-y-2"> <IoIosMail className="text-lg sm:text-xl" /> 
                                        </button>
                                </span>
                    
                                </div>
                            </div>

            {/* right image card */}
                {/* right image card */}
               <div ref={spriteRef} className="flex items-center justify-center">
                    <img src={spiritImg} alt="Saksham" className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-120" />
                </div>
        </div>
    )
}