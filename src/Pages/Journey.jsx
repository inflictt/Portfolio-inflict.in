import { Deck } from "@ikefakis/react-polaroid-photo-deck";
import "@ikefakis/react-polaroid-photo-deck/style.css";
import { IoLocation } from "react-icons/io5";

export default function Journey() {

    const cards = [
        {
            url: "https://picsum.photos/id/1003/820/1180",
            date: "2022",
            caption: "10th (CBSE)\n📍 St. Paul's School\n90%",
        },
        {
            url: "https://picsum.photos/id/1011/1200/800",
            date: "2024",
            caption: "12th (CBSE)\n📍 CPS School\n70%",
        },
        {
            url: "https://picsum.photos/id/1036/800/1100",
            date: "2024 - 2028",
            caption: "B.Tech CSE\n📍 BML Munjal University\nCGPA: 8.33",
        },
        {
            url: "https://picsum.photos/id/1040/800/1100",
            date: "2025",
            caption: "🥉 TechStorm Hackathon\n3rd Place\nLed team & built Ashrafi",
        },
        {
            url: "https://picsum.photos/id/1050/800/1100",
            date: "2025",
            caption: "💻 DSA Progress\n240+ Problems Solved\n75+ Day Streak",
        },
        {
            url: "https://picsum.photos/id/1060/800/1100",
            date: "2025",
            caption: "🏆 Academic Recognition\nSneakPeak selected for I&E Compendium",
        },
    ];

    return (
        <section
            id="journey"
            className="px-4 sm:px-6 md:px-8 py-10  overflow-x-hidden"
        >
            {/* Heading */}
            <p className="text-base sm:text-lg md:text-2xl text-teal-500">
                - Journey
            </p>

            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl p-1 leading-tight">
                Where I've been.
            </h2>

            <p className=" relative text-gray-500 text-sm sm:text-base p-1 mb-6">
                Three years, few chapters. The shortest version of how I got here.
            </p>

            <div className="relative w-full h-[70vh] sm:h-[80vh] rounded-2xl overflow-hidden ">

                {/* 🔥 Blur Glass Layer */}
                <div className="absolute inset-0 backdrop-blur-xl bg-black/20 z-0"></div>

                {/* 🔥 Deck */}
                <div className="relative w-full h-[70vh] sm:h-[80vh] rounded-2xl overflow-hidden  flex items-center justify-center">

                    <Deck
                        cards={[...cards].reverse()}
                        className="w-full h-full scale-110"
                    // /style={{ width: "120%", height: "100%" }}
                    />

                </div>

            </div>
        </section>
    );
}