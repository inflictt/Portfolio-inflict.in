import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Grind from "./Grind"
import Achievements from "./Achievements"
import Contact from "./Contact"
import BlogOverview from "./BlogOverview"
import MyPlayer from "./MyPlayer"
import TechMarquee from "./TechMarquee";
export default function Portfolio(){
    return (
        <>
        <Home />
        <TechMarquee/>
        <About />

        {/* <Projects /> */}
        <Grind />
        {/* <Achievements /> */}
        <Contact />

        </>
    )
}