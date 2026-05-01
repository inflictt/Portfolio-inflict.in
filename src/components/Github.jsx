import { Link } from "react-router-dom"
import { GitHubCalendar } from "react-github-calendar";

export default function Github() {
  return (
    <section className="flex flex-col items-center w-full bg-zinc-900/60 rounded-2xl sm:rounded-3xl mt-4 sm:mt-6 p-3 sm:p-5 md:p-6 lg:p-8 overflow-x-auto">
      <div className="w-full mb-3 sm:mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-3 md:gap-0">
        <span className="text-base sm:text-lg md:text-xl font-semibold text-white">
          Github Activity
        </span>

        <Link
          to="https://github.com/inflictt"
          className="px-3 py-1.5 text-xs sm:text-sm font-normal text-white bg-gray-800 rounded-xl border border-gray-700 hover:bg-gray-700 transition w-fit"
        >
          View Profile
        </Link>
      </div>

      <div className="w-full overflow-x-auto">
        <GitHubCalendar
          username="inflictt"
          colorScheme="dark"
          fontSize={14}
          blockSize={12}
          blockMargin={3}
        />
      </div>
    </section>
  );
}