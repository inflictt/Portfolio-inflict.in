/* Grind - live proof-of-work: GitHub contribution heatmap (jogruber API)
   recolored to the lime scale, plus LeetCode stats tiles (tashif API). */
import { useEffect, useState } from "react";

const LEVELS = ["var(--soft)", "#EAEDBE", "#DFE87E", "var(--lime)", "#A9B32E"];
const MN = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const fmtRank = (n) => !n ? "-" : n >= 1e6 ? `${Math.round(n / 1e5) / 10}M` : n >= 1e3 ? `${Math.round(n / 1e3)}k` : `${n}`;

const Card = ({ title, href, children }) => (
  <div className="rounded-[20px] p-[clamp(20px,2.6vw,32px)] backdrop-blur-2xl bg-white/50 border border-white/55 shadow-[0_18px_50px_rgba(20,20,18,0.1),inset_0_1px_0_rgba(255,255,255,0.7)]">
    <div className="flex justify-between items-center gap-3 mb-5">
      <span className="text-[clamp(20px,2.2vw,27px)] tracking-tight" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>{title}</span>
      <a href={href} target="_blank" rel="noopener"
         className="px-4 py-2 rounded-full text-[12px] font-semibold tracking-wide bg-white/45 border border-white/60 hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors">
        View Profile ↗
      </a>
    </div>
    {children}
  </div>
);

export default function Grind() {
  const [gh, setGh] = useState(null);
  const [lc, setLc] = useState(null);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/inflictt?y=last")
      .then((r) => r.json()).then(setGh).catch(() => setGh({ error: true }));
    fetch("https://leetcode-stats.tashif.codes/Saksham_lodha")
      .then((r) => r.json()).then(setLc).catch(() => {});
  }, []);

  const days = gh?.contributions ?? [];
  const months = [];
  if (days.length) {
    let last = -1;
    for (let i = 0; i < days.length; i += 7) {
      const m = new Date(days[i].date + "T00:00:00").getMonth();
      months.push(m !== last ? MN[m] : "");
      last = m;
    }
  }
  const total = gh?.total?.lastYear ?? days.reduce((a, d) => a + d.count, 0);

  return (
    <section id="grind" className="relative z-[1] max-w-[1180px] mx-auto px-6 pb-32">
      <div className="text-center text-[12px] font-semibold tracking-[0.14em] opacity-55">THE GRIND · SHOWING UP EVERY DAY</div>
      <h2 className="mt-3 mb-11 text-center font-normal text-[clamp(36px,4.6vw,64px)] leading-none tracking-tight"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
        Proof of <em className="italic">work</em>.
      </h2>

      <Card title="GitHub Activity" href="https://github.com/inflictt">
        <div className="overflow-x-auto pb-1">
          <div className="w-fit mx-auto">
            <div className="flex text-[10.5px] font-semibold tracking-wide opacity-55 mb-[7px]">
              {months.map((m, i) => <span key={i} className="shrink-0 w-[15.5px]">{m}</span>)}
            </div>
            <div className="grid grid-flow-col gap-[3.5px]" style={{ gridTemplateRows: "repeat(7,12px)", gridAutoColumns: "12px" }}>
              {days.map((d) => (
                <i key={d.date} title={`${d.date} · ${d.count} contributions`}
                   className="w-3 h-3 rounded-[3px]" style={{ background: LEVELS[d.level] }} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-3 mt-4 text-[12.5px] opacity-70 max-w-[860px] mx-auto">
          <span>{gh?.error ? "Could not load GitHub activity right now." : gh ? `${total} contributions in the last year` : "Loading contributions…"}</span>
          <span className="inline-flex items-center gap-1 text-[11px]">
            Less {LEVELS.map((c, i) => <i key={i} className="w-3 h-3 rounded-[3px] inline-block" style={{ background: c }} />)} More
          </span>
        </div>
      </Card>

      <div className="mt-4">
        <Card title="LeetCode Stats" href="https://leetcode.com/u/Saksham_lodha/">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { l: "Total Solved", v: <>
                  <span className="font-bold text-[clamp(24px,2.6vw,34px)] tracking-tight">{lc?.totalSolved ?? "-"}</span>
                  {lc?.totalQuestions && <span className="text-sm opacity-55">/{lc.totalQuestions}</span>}
                </> },
              { l: "Acceptance", v: <span className="font-bold text-[clamp(24px,2.6vw,34px)] tracking-tight">{lc?.acceptanceRate ?? "-"}</span> },
              { l: "Global Rank", v: <span className="font-bold text-[clamp(24px,2.6vw,34px)] tracking-tight">{fmtRank(lc?.ranking)}</span> },
              { l: "Easy · Med · Hard", v: (
                  <span className="flex justify-center gap-3 font-bold text-[clamp(18px,2vw,26px)]">
                    <b className="text-[#5E9E4D]">{lc?.easySolved ?? "-"}</b>
                    <b className="text-[#C98A1B]">{lc?.mediumSolved ?? "-"}</b>
                    <b className="text-[#C4504A]">{lc?.hardSolved ?? "-"}</b>
                  </span>
                ) },
            ].map((box) => (
              <div key={box.l} className="border border-[var(--line)] rounded-[14px] p-[clamp(16px,2vw,26px)] bg-white/30 text-center">
                <p className="m-0 mb-2 text-[11px] font-semibold tracking-[0.12em] uppercase opacity-55">{box.l}</p>
                <h3 className="m-0 flex items-baseline justify-center gap-1">{box.v}</h3>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
