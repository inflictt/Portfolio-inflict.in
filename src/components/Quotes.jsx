import { useEffect, useState } from "react"
import king from "../assets/king.jpg";
import king1 from "../assets/king1.png";
import ikka from "../assets/ikka.webp";
import raftaar from "../assets/raftaar.png";
import krsna from "../assets/krsna.jpg";
import badshah from "../assets/badshah.jpeg";
import karma from "../assets/karma.jpeg";

export default function Quotes() {
    const data = [
        {
            id: 0,
            artist: "Raftaar",
            quote: "Always try to be the provider and not the receiver, and all your problems will be solved.",
            Icon: raftaar
        },
        {
            id: 1,
            artist: "Karma",
            quote: "It's victory scars, bro. Every time it pains, I remember what the sacrifice was worth.",
            Icon: karma
        },
        {
            id: 2,
            artist: "Ikka",
            quote: "I don't want to just make music as I want to be legendary.",
            Icon: ikka
        },
        {
            id: 3,
            artist: "King",
            quote: "I want my work to be valued even if my face is forgotten.",
            Icon: king
        },
        {
            id: 4,
            artist: "Badshah",
            quote: "I lie with the lions and I roam with the elephants",
            Icon: badshah
        },
    ];



    const [btnClickCount, setBtnClickCount] = useState(Math.floor((Math.random() * 10) % data.length)
    )

    const handleQuotesChange = (e) => {
        setBtnClickCount((btnClickCount + 1) % data.length)

    }
    const item = data[btnClickCount]; // pick the current one


    return (
        <section className="pb-6 sm:pb-9 px-3 sm:px-4 md:px-6">
            <div className="bg-[#252a29] border border-[#152524] min-h-32 p-3 sm:p-5 md:p-6 lg:p-8 w-full rounded-2xl flex flex-col sm:flex-row items-center gap-3 sm:gap-5 md:gap-8 lg:gap-10 opacity-80 transition-opacity duration-800">

                <img
                    className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover shrink-0"
                    src={item.Icon}
                    alt={item.artist}
                />

                <div className="flex flex-col flex-1 px-1 sm:px-2 md:px-3 pt-1 sm:pt-2 text-center sm:text-left min-w-0">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-relaxed">
                        "{item.quote}"
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-1.5 sm:mt-2">
                        - {item.artist}
                    </p>
                </div>

                <button
                    className="cursor-pointer hover:text-teal-700 text-xs sm:text-sm shrink-0 px-3 py-1.5 sm:px-0 sm:py-0 border border-gray-700 sm:border-0 rounded-full sm:rounded-none"
                    onClick={handleQuotesChange}
                    type="button"
                >
                    Change
                </button>
            </div>
        </section>
    );
}