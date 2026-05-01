import MarqueeModule from "react-fast-marquee";
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const Marquee = MarqueeModule.default || MarqueeModule;

const techs = [
  { name: "React.js", Icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", Icon: FaNodeJs, color: "#83CD29" },
  { name: "Django", Icon: SiDjango, color: "#0C4B33" },
  { name: "Python", Icon: FaPython, color: "#3776AB" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Express", Icon: SiExpress, color: "#ffffff" },
  { name: "Git", Icon: FaGitAlt, color: "#F05032" },
];

export default function TechMarquee() {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8">
      <p className="text-base sm:text-lg md:text-2xl text-teal-500"> - Tech Stack  </p>
      <div className="w-full md:w-2/3 lg:w-1/2">
        <div className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-1 sm:p-2 leading-tight">What I work with</div>
        <div className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl p-1 sm:p-2">A pragmatic stack, boring where it pays, novel where it earns its weight.</div>
      </div>

      <section className="py-4 sm:py-6 bg-black text-white">
        <Marquee speed={80} pauseOnHover gradient={false}>
          <div className="flex gap-4 sm:gap-8 md:gap-12 lg:gap-16 text-sm sm:text-base md:text-lg font-semibold ">
            {techs.map(({ name, Icon, color }) => (
              <span key={name} className="flex items-center gap-2 sm:gap-3 mx-3 sm:mx-6 md:mx-8 border border-gray-500 bg-gray-100/10 rounded-3xl sm:rounded-4xl p-2 sm:p-3 whitespace-nowrap">
                <Icon size={22} className="sm:w-7 sm:h-7" style={{ color }} />
                {name}
              </span>
            ))}
          </div>
        </Marquee>

        <Marquee speed={80} pauseOnHover grad ient={false} direction="right">
          <div className="flex gap-4 py-3 sm:py-5 sm:gap-8 md:gap-12 lg:gap-16 text-sm sm:text-base md:text-lg font-semibold ">
            {techs.map(({ name, Icon, color }) => (
              <span key={name} className="flex items-center gap-2 sm:gap-3 mx-3 sm:mx-6 md:mx-8 border border-gray-500 bg-gray-100/10 rounded-3xl sm:rounded-4xl p-2 sm:p-3 whitespace-nowrap">
                <Icon size={22} className="sm:w-7 sm:h-7" style={{ color }} />
                {name}
              </span>
            ))}
          </div>
        </Marquee>

      </section>
    </div>
  );
}