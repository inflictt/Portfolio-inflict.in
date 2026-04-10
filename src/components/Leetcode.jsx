import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Leetcode() {
  const [stats, setStats] = useState(null);
  useEffect(() => {

    async function fetchStats() {
      const res = await fetch("https://leetcode-stats.tashif.codes/Saksham_lodha");
      const data = await res.json();
      console.log(data);
      setStats(data);
    }

    fetchStats();
  }, []);

  return (
<section className="flex flex-col w-full bg-zinc-900/60 rounded-3xl p-8">
<div className="flex flex-col"> 
    <div className="w-full mb-4 flex justify-between items-center">
        <span className="text-xl font-semibold text-white">
            LeetCode Stats
        </span>
        <Link
            to="https://leetcode.com/u/Saksham_lodha/"
            className="px-3 py-1.5 text-sm font-normal text-white bg-gray-800 rounded-xl border border-gray-700 hover:bg-gray-700 transition"
        >
            View Profile
        </Link>
    </div>


        {/* 4 consecutive divs */}
        <div className="flex w-full gap-4 py-7">

        <div className="lcBox lcBox--featured  flex-2">
            <div>
            <p className="text-gray-600 text-sm">Total Solved</p>
            <h3><span className="font-extrabold text-3xl text-teal-200">{stats?.totalSolved}</span>/<span>{stats?.totalQuestions}</span></h3>
            </div>
        </div>
        

                <div className="lcBox lcBox--featured p-10 flex-2">
            <div>
            <p className="text-gray-600 text-sm">Acceptance</p>
            <h3><span className="font-extrabold text-3xl text-white-200">
                {stats?.acceptanceRate}
                </span></h3>
            </div>
        </div>

        <div className="lcBox lcBox--featured p-10 flex-2">
            <div>
            <p className="text-gray-600 text-sm">Global rank
</p>
            <h3><span className="font-extrabold text-3xl text-white-200">
                {stats?.ranking}
                </span></h3>
            </div>
        </div>

<div className="lcBox p-5">
  {/* label row */}
  <div className="flex items-center gap-2 text-gray-500 text-xs tracking-[0.2em] uppercase font-medium">
    <span>Easy</span>
    <span className="text-gray-700">·</span>
    <span>Med</span>
    <span className="text-gray-700">·</span>
    <span>Hard</span>
  </div>

  {/* value row */}
  <div className="flex items-baseline gap-2 mt-2 text-2xl font-bold tracking-tight">
    <span className="text-teal-400">{stats?.easySolved}</span>
    <span className="text-gray-700 font-normal">·</span>
    <span className="text-amber-400">{stats?.mediumSolved}</span>
    <span className="text-gray-700 font-normal">·</span>
    <span className="text-red-400">{stats?.hardSolved}</span>
  </div>
</div>

        </div>
    </div>
  </section>)
}
// {stats?.acceptanceRate}