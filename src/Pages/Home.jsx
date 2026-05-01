import { useEffect, useState } from "react";
import { useRef } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoIosCloudDownload } from "react-icons/io";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import spiritImg from "../assets/saksham-sprite.svg"

import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useGSAP } from "@gsap/react";

export default function Home() {
    const spriteRef = useRef(null);

    useGSAP(() => {
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
        { role: "Frontend Learner", id: 0 },
        { role: "MERN Developer", id: 1 },
        { role: "Django Developer", id: 2 },
        { role: "Backend Enthusiast", id: 3 }
    ];
    const [currId, setCurrId] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrId((prev) => (prev + 1) % ROLES.length)
        }, 3000);
        return () => clearInterval(interval);
    }, []
    )

    return (
        <div id="home" className="pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20 px-4 sm:px-6 flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-6 xl:gap-10" >

            <div className="w-full lg:max-w-xl xl:max-w-2xl text-center lg:text-left" >
                <h4 className="text-base sm:text-lg md:text-xl text-gray-600">Hi , I am</h4>
                <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-extrabold leading-none bg-black/85">
                    Saksham
                </h1>

                <div className="relative bg-black my-4 sm:my-5 border border-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 w-fit mx-auto lg:mx-0 text-teal-500 text-xs sm:text-sm md:text-base">
                    <span>{ROLES[currId].role}</span>
                </div>

                <p className="text-gray-500 bg-black/85 text-sm sm:text-base leading-relaxed">Full Stack Developer specializing in modern web applications with <span className="text-teal-500 underline">React,</span> <span className="text-teal-500 underline">Node.js,</span> and <span className="text-teal-500 underline">Django</span> . I build scalable, performant solutions with AI integration.</p>

                <div className="flex flex-row flex-wrap justify-center lg:justify-start my-4 gap-3">
                    <button
                        onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="inline-flex items-center transition-transform duration-300 hover:-translate-y-1 px-4 sm:px-5 md:px-7 py-2 rounded-xl cursor-pointer bg-linear-to-r from-cyan-400 to-teal-600 text-black font-semibold gap-1.5 shadow-lg text-sm sm:text-base">
                        Let's Talk <CiLocationArrow1 />


                    </button>

                    <button
                        onClick={() => window.open("/SAKSHAM_LODHA_RESUME.pdf", "_blank")}
                        className="inline-flex items-center transition-transform duration-300 hover:-translate-y-1 px-4 sm:px-5 md:px-7 py-2 rounded-xl cursor-pointer gap-1.5 border-2 border-gray-700 text-white font-semibold opacity-100 shadow-lg bg-black/85 text-sm sm:text-base">
                        Resume <IoIosCloudDownload />


                    </button>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 bg-black/75 flex-wrap">
                    <span className="text-gray-600"><button
                        onClick={() => window.open("https://x.com/Saksham1172975", "_blank")}
                        className="cursor-pointer rounded-2xl p-2.5 sm:p-3 md:p-4 border border-gray-900 text-sm transition-transform duration-300 hover:-translate-y-2"> <RiTwitterXLine className="text-base sm:text-lg md:text-xl" /> </button></span>

                    <span
                        onClick={() => window.open("https://www.linkedin.com/in/sakshamlodha", "_blank")}
                        className="text-gray-600"><button className="cursor-pointer rounded-2xl p-2.5 sm:p-3 md:p-4 border border-gray-900 text-sm transition-transform duration-300 hover:-translate-y-2"> <FaLinkedin className="text-base sm:text-lg md:text-xl" /> </button></span>

                    <span className="text-gray-600"><button
                        onClick={() => window.open("https://github.com/inflictt/", "_blank")}
                        className="cursor-pointer rounded-2xl p-2.5 sm:p-3 md:p-4 border border-gray-900 text-sm transition-transform duration-300 hover:-translate-y-2"> <FaGithub className="text-base sm:text-lg md:text-xl" /> </button></span>

                    <span className="text-gray-600">
                        <button
                            onClick={() => window.open("mailto:realsaksham06@gmail.com", "_blank")}
                            className="cursor-pointer rounded-2xl p-2.5 sm:p-3 md:p-4 border border-gray-900 text-sm transition-transform duration-300 hover:-translate-y-2"> <IoIosMail className="text-base sm:text-lg md:text-xl" />
                        </button>
                    </span>

                </div>
            </div>

            {/* right image card */}
            {/* right image card */}
            <div ref={spriteRef} className="flex items-center justify-center shrink-0">
                <img src={spiritImg} alt="Saksham" className="w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[420px] max-w-full h-auto" />
            </div>
        </div>
    )
}