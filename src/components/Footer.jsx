import { useEffect, useState } from "react"
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import saksham from "../assets/front-inflict.webp";

export default function Footer() {
    const [visitorCount, setVisitorCount] = useState(null);

    useEffect(() => {
        // Increment and get count in one call
        fetch("https://countapi.mileshilliard.com/api/v1/hit/inflict-visits")
            .then(res => res.json())
            .then(data => setVisitorCount(Number(data.value)))
            .catch(err => console.error("Count failed:", err));
    }, []);
    const socials = [
        { id: 0, Icon: RiTwitterXLine, url: "https://x.com/Saksham1172975", label: "Twitter" },
        { id: 1, Icon: FaLinkedin, url: "https://www.linkedin.com/in/sakshamlodha", label: "LinkedIn" },
        { id: 2, Icon: FaGithub, url: "https://github.com/inflictt/", label: "GitHub" },
        { id: 3, Icon: IoIosMail, url: "mailto:realsaksham06@gmail.com", label: "Email" },
    ];

    return (
        <footer>

            <div className="bg-black border-t border-zinc-900">

                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-8 items-center py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-0">

                    {/* Identity */}
                    <div className="flex items-center justify-center md:justify-start gap-4 md:px-12 lg:px-20">
                        <div><img className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center ring-1"
                            src={saksham} alt="" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-tight leading-tight">
                                Saksham Lodha
                            </h2>
                            <p className="text-xs text-gray-400">
                                Full Stack Developer · India → World
                            </p>

                        </div>
                    </div>

                    {/* Vertical divider — hidden on mobile (stacked layout) */}
                    <div className="hidden md:block w-px h-20 mx-auto bg-linear-to-b from-transparent via-teal-400/40 to-transparent"></div>

                    {/* Tagline */}
                    <div className="max-w-sm text-center md:text-left mx-auto md:mx-0 px-2 sm:px-0">
                        <h3 className="text-base font-medium text-white mb-2 leading-tight ">
                            Made it to the end.
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Every line on this site is something I wrote, broke, and rewrote. Thanks for taking the time, it means more than you'd think.
                        </p>
                    </div>

                </div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">

                    {/* LEFT: copyright + visitor */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                        <span>
                            © 2026. All rights reserved{" "}
                            <span className="text-teal-300">Saksham Lodha</span>
                        </span>
                        <span className="hidden sm:inline text-zinc-800">|</span>
                        <span>
                            You are # <span className="text-teal-300">{visitorCount?.toLocaleString() ?? "..."}</span> visitor
                        </span>
                    </div>

                    {/* RIGHT: coffee button + socials */}
                    <div className="flex items-center gap-3 sm:gap-4">


                        <div className="flex items-center gap-2 sm:gap-3">
                            {socials.map(({ id, Icon, url, label }) => (
                                <button
                                    key={id}
                                    onClick={() => window.open(url, "_blank")}
                                    aria-label={label}
                                    className="cursor-pointer rounded-full p-2.5 sm:p-3 border border-gray-900 text-gray-600 hover:text-teal-300 hover:border-teal-400/40 hover:-translate-y-1 transition-all"
                                >
                                    <Icon className="text-base sm:text-lg" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center overflow-hidden px-2" >

                <p className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[180px] font-extrabold tracking-tight 
                bg-linear-to-b from-gray-600 to-black 
                bg-clip-text text-transparent 
                select-none leading-none break-all">
                    SAKSHAM
                </p>

            </div>

        </footer >
    );
}