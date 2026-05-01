import { useEffect, useState } from "react"
// FIX [PERF]: Removed all `import king from "../assets/king.jpg"` etc.
// Reason: Importing images at the top of the file makes Vite bundle them
// into your JS — meaning all 7 artist photos download on page load,
// even though only 1 shows at a time. This wasted ~1–2 MB of bandwidth.
// Solution: Move all 7 images to /public/quotes/ folder and reference
// them as plain string paths below. The browser will then only fetch
// each image when its <img> tag actually appears in the DOM.

export default function Quotes() {
    // FIX [PERF]: Image paths now point to /public/quotes/ instead of
    // bundled imports. Filenames assume you've also converted them to
    // .webp via squoosh.app or `cwebp` (typically 60–80% smaller than jpg/png).
    // If you haven't converted yet, just keep the original .jpg/.png/.jpeg
    // extensions here — the lazy-loading fix below will still help.
    const data = [
        {
            id: 0,
            artist: "Raftaar",
            quote: "Always try to be the provider and not the receiver, and all your problems will be solved.",
            Icon: "/quotes/raftaar.webp"
        },
        {
            id: 1,
            artist: "Karma",
            quote: "It's victory scars, bro. Every time it pains, I remember what the sacrifice was worth.",
            Icon: "/quotes/karma.webp"
        },
        {
            id: 2,
            artist: "Ikka",
            quote: "I don't want to just make music as I want to be legendary.",
            Icon: "/quotes/ikka.webp"
        },
        {
            id: 3,
            artist: "King",
            quote: "I want my work to be valued even if my face is forgotten.",
            Icon: "/quotes/king.webp"
        },
        {
            id: 4,
            artist: "Badshah",
            quote: "I lie with the lions and I roam with the elephants",
            Icon: "/quotes/badshah.webp"
        },
    ];

    // FIX [LOGIC]: Original used `Math.floor((Math.random() * 10) % data.length)`
    // which is a confusing way to pick a random index. The cleaner, idiomatic
    // version is `Math.floor(Math.random() * data.length)` — it gives an even
    // distribution across all items in the array, guaranteed.
    const [btnClickCount, setBtnClickCount] = useState(
        Math.floor(Math.random() * data.length)
    )

    const handleQuotesChange = (e) => {
        setBtnClickCount((btnClickCount + 1) % data.length)
    }
    const item = data[btnClickCount]; // pick the current one


    return (
        <section className="pb-6 sm:pb-9 px-3 sm:px-4 md:px-6">
            <div className="bg-[#252a29] border border-[#152524] min-h-32 p-3 sm:p-5 md:p-6 lg:p-8 w-full rounded-2xl flex flex-col sm:flex-row items-center gap-3 sm:gap-5 md:gap-8 lg:gap-10 opacity-80 transition-opacity duration-800">

                <img
                    // FIX [PERF]: `loading="lazy"` tells the browser not to
                    // download this image until the user scrolls near it.
                    // Native HTML attribute, supported in all modern browsers.
                    loading="lazy"

                    // FIX [PERF]: `decoding="async"` tells the browser it can
                    // decode the image off the main thread, so decoding doesn't
                    // block your hero animation or button clicks while the
                    // image is being processed.
                    decoding="async"

                    className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover shrink-0"
                    src={item.Icon}

                    // FIX [A11Y]: Original `alt={item.artist}` was OK, but a
                    // screen reader hearing just "Raftaar" with no context is
                    // confusing. Adding "portrait" makes the role of the image
                    // clear: "Raftaar portrait, image".
                    alt={`${item.artist} portrait`}
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
                    // FIX [A11Y]: Added an `aria-label` so screen readers know
                    // what this button does. The visible text "Change" is
                    // ambiguous out of context — "change what?". The aria-label
                    // gives the full picture: "Show next quote".
                    // (If you change the visible text to something clearer like
                    // "Next quote", you can drop the aria-label entirely.)
                    aria-label="Show next quote"

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