import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Leetcode() {
  const [stats, setStats] = useState(null);
  useEffect(() => {

    async function fetchStats() {
      const res = await fetch("https://leetcode-stats.tashif.codes/Saksham_lodha");
      const data = await res.json();
      setStats(data);
    }

    fetchStats();
  }, []);
  const formatRank = (num) => {
    if (!num) return "0";
    if (num >= 1000000) return `${Math.round(num / 100000) / 10}M`;
    if (num >= 1000) return `${Math.round(num / 1000)}k`;
    return num;
  };

  return (
    <section className="flex flex-col w-full bg-zinc-900/60 rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6 lg:p-8">
      <div className="flex flex-col">
        <div className="w-full mb-3 sm:mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-3 md:gap-0">
          <span className="text-base sm:text-lg md:text-xl font-semibold text-white">
            LeetCode Stats
          </span>
          <Link
            to="https://leetcode.com/u/Saksham_lodha/"
            className="px-3 py-1.5 text-xs sm:text-sm font-normal text-white bg-gray-800 rounded-xl border border-gray-700 hover:bg-gray-700 transition w-fit"
          >
            View Profile
          </Link>
        </div>


        {/* 4 consecutive divs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-3 sm:gap-4 py-3 sm:py-5 md:py-7">

          <div className="lcBox lcBox--featured p-4 sm:p-5 md:p-6 lg:p-10 flex-2">
            <div>
              <p className="text-gray-600 text-xs sm:text-sm">Total Solved</p>
              <h3 className="mt-1"><span className="font-extrabold text-xl sm:text-2xl md:text-3xl text-teal-200">{stats?.totalSolved}</span>/<span className="text-sm sm:text-base">{stats?.totalQuestions}</span></h3>
            </div>
          </div>


          <div className="lcBox lcBox--featured p-4 sm:p-5 md:p-6 lg:p-10 flex-2">
            <div>
              <p className="text-gray-600 text-xs sm:text-sm">Acceptance</p>
              <h3 className="mt-1"><span className="font-extrabold text-xl sm:text-2xl md:text-3xl text-white-200">
                {stats?.acceptanceRate}
              </span></h3>
            </div>
          </div>

          <div className="lcBox lcBox--featured p-4 sm:p-5 md:p-6 lg:p-10 flex-2">
            <div>
              <p className="text-gray-600 text-xs sm:text-sm">Global rank
              </p>
              <h3 className="mt-1"><span className="font-extrabold text-xl sm:text-2xl md:text-3xl text-white-200">
                {formatRank(stats?.ranking)}
              </span></h3>
            </div>
          </div>

          <div className="lcBox p-3 sm:p-4 md:p-5">
            {/* label row */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium">
              <span>Easy</span>
              <span className="text-gray-700">·</span>
              <span>Med</span>
              <span className="text-gray-700">·</span>
              <span>Hard</span>
            </div>

            {/* value row */}
            <div className="flex items-baseline gap-1.5 sm:gap-2 mt-1.5 sm:mt-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
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