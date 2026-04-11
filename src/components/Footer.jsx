import { useEffect, useState } from "react"
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import saksham from "../assets/front-inflict.jpg";

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

                <div className="grid grid-cols-[auto_1fr_auto] gap-8 items-center py-12">

                    {/* Identity */}
                    <div className="flex items-center gap-4 px-20">
                        <div><img className="w-16 h-16 rounded-full  flex items-center justify-center ring-1"
                            src={saksham} alt="" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl font-semibold text-white tracking-tight leading-tight">
                                Saksham Lodha
                            </h2>
                            <p className="text-xs text-gray-400">
                                Full Stack Developer · India → World
                            </p>

                        </div>
                    </div>

                    {/* Vertical divider */}
                    <div className="w-px h-20 mx-auto bg-linear-to-b from-transparent via-teal-400/40 to-transparent"></div>

                    {/* Tagline */}
                    <div className="max-w-sm">
                        <h3 className="text-base font-medium text-white mb-2 leading-tight ">
                            Thanks for scrolling this far.
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            I build things on the internet. Occasionally they work & always they teach me something.
                        </p>
                    </div>

                </div>
                <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* LEFT: copyright + visitor */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-xs sm:text-sm text-gray-600">
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
                    <div className="flex items-center gap-4">


                        <div className="flex items-center gap-3">
                            {socials.map(({ id, Icon, url, label }) => (
                                <button
                                    key={id}
                                    onClick={() => window.open(url, "_blank")}
                                    aria-label={label}
                                    className="cursor-pointer rounded-full p-3 border border-gray-900 text-gray-600 hover:text-teal-300 hover:border-teal-400/40 hover:-translate-y-1 transition-all"
                                >
                                    <Icon className="text-lg" />
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </footer >
    );
}