import Github from "../components/Github"

import Leetcode from "../components/Leetcode"
export default function Grind() {
    return (<>
        <section id="grind" className="px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <div>
                <div>
                    <p className="text-base sm:text-lg md:text-2xl text-teal-500">- Grind   </p>
                    <div className="w-full md:w-2/3 lg:w-1/2">
                        <div className="font-bold text-3xl sm:text-4xl md:text-5xl p-1 sm:p-2 leading-tight">Showing up every day.</div>
                        <div className="text-gray-500 text-sm sm:text-base p-1 sm:p-2">A snapshot of where I spend my keyboard hours when no one's watching.</div>
                    </div></div>
                <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 flex flex-col gap-4 sm:gap-6">
                    <Github />
                    <Leetcode />
                </div>
            </div>
        </section >
    </>)
}