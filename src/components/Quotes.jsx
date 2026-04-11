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
            artist: "KR$NA",
            quote: "Hota tha heart of gold, ab heart hai cold, just like the shoulders I used to get",
            Icon: krsna
        },
        {
            id: 5,
            artist: "Badshah",
            quote: "I lie with the lions and I roam with the elephants",
            Icon: badshah
        },
        {
            id: 6,
            artist: "King",
            quote: "Pehle kitna darta tha, ab kisi se darta nahi",
            Icon: king1
        }
    ];



    const [btnClickCount, setBtnClickCount] = useState(Math.floor((Math.random() * 10) % data.length)
    )

    const handleQuotesChange = (e) => {
        setBtnClickCount((btnClickCount + 1) % data.length)

    }
    const item = data[btnClickCount]; // pick the current one


    return (
        <section className="pb-12 px-4 sm:px-6">
            <div className="bg-[#252a29] border border-[#152524] p-4 sm:p-6 md:p-8 w-full rounded-2xl flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-10 opacity-80 transition-opacity duration-800">

                <img
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover shrink-0"
                    src={item.Icon}
                    alt={item.artist}
                />

                <div className="flex flex-col flex-1 px-1 sm:px-3 pt-2 text-center sm:text-left">
                    <p className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed">
                        "{item.quote}"
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-2">
                        - {item.artist}
                    </p>
                </div>

                <button
                    className="cursor-pointer hover:text-teal-700 text-xs sm:text-sm shrink-0"
                    onClick={handleQuotesChange}
                    type="button"
                >
                    Change
                </button>
            </div>
        </section>
    );
}