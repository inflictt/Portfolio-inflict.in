import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Grind from "./Grind"
import Achievements from "./Achievements"
import Contact from "./Contact"
import BlogOverview from "./BlogOverview"
import TechMarquee from "../components/TechMarquee";
import Quotes from "../components/Quotes"
export default function Portfolio(){
    return (
        <>
        <Home />
        <Quotes />
        <About />
        <TechMarquee/>
        {/* <Projects /> */}
        <Grind />
        {/* <Achievements /> */}
        <Contact />

        </>
    )
}