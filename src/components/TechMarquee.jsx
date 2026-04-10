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
    <section className="py-6 bg-black text-white border-y border-cyan-400/20">
      <Marquee speed={80} pauseOnHover gradient={false}>
        <div className="flex gap-16 text-lg font-semibold">
          {techs.map(({ name, Icon, color }) => (
            <span key={name} className="flex items-center gap-3 mx-8">
              <Icon size={28} style={{ color }} />
              {name}
            </span>
          ))}
        </div>
      </Marquee>
    </section>
  );
}