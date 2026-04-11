import { useEffect, useState } from "react"
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


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
                        <button className="cursor-pointer px-4 h-9 rounded-xl border border-gray-900 text-sm text-gray-400 hover:text-teal-300 hover:border-teal-400/40 transition-all">
                            ☕ Buy Me A Coffee
                        </button>

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