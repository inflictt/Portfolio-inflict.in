import Github from "../components/Github"

import Leetcode from "../components/Leetcode"
export default function Grind() {
    return (<>
        <section id="grind">
            <div>
                <div>
                    <p className="text-md  text-teal-500 text-2xl">- Grind   </p>
                    <div className="w-1/2">
                        <div className="text-md font-bold text-5xl p-2">Showing up every day.</div>
                        <div className="text-md text-gray-500  p-2">A snapshot of where I spend my keyboard hours when no one's watching.</div>
                    </div></div>
                <div className="max-w-5xl mx-auto px-6 flex flex-col gap-6">
                    <Github />
                    <Leetcode />
                </div>
            </div>
        </section >
    </>)
}