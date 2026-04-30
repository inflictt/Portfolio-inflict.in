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
    <div>
      <p className="text-md  text-teal-500 text-2xl"> - Tech Stack  </p>
      <div className="w-1/2">
        <div className="text-md font-bold text-6xl p-2">What I work with</div>
        <div className="text-md text-gray-500  text-xl p-2">A pragmatic stack — boring where it pays, novel where it earns its weight.</div>
      </div>

      <section className="py-6 bg-black text-white  ">
        <Marquee speed={80} pauseOnHover gradient={false}>
          <div className="flex gap-8 sm:gap-12 md:gap-16  text-base sm:text-lg font-semibold ">
            {techs.map(({ name, Icon, color }) => (
              <span key={name} className="flex items-center  gap-3 mx-8 border border-gray-500 bg-gray-100/10 rounded-4xl p-3">
                <Icon size={28} style={{ color }} />
                {name}
              </span>
            ))}
          </div>
        </Marquee>

        <Marquee speed={80} pauseOnHover grad ient={false} direction="right">
          <div className="flex gap-8 py-5 sm:gap-12 md:gap-16  text-base sm:text-lg font-semibold ">
            {techs.map(({ name, Icon, color }) => (
              <span key={name} className="flex items-center  gap-3 mx-8 border border-gray-500 bg-gray-100/10 rounded-4xl p-3">
                <Icon size={28} style={{ color }} />
                {name}
              </span>
            ))}
          </div>
        </Marquee>

      </section>
    </div>
  );
}