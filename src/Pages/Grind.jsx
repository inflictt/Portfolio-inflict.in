import Github from "./Github"

import Leetcode from "./Leetcode"
export default function Grind(){
    return(<>
    <section id="grind">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-6">
        <Github />
        <Leetcode />
        </div>
        
    </section>
    </>)
}