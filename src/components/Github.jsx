import {Link} from "react-router-dom"
import { GitHubCalendar } from "react-github-calendar";

export default function Github() {
  return (
    <section className="flex flex-col items-center w-full bg-zinc-900/60 rounded-3xl p-8">
        <div className="w-full mb-4 flex justify-between ">
        <span className="text-xl font-semibold text-white">
            Github Activity
        </span>

        <Link
            to="https://github.com/inflictt"
            className="px-3 py-1.5 text-sm font-normal text-white bg-gray-800 rounded-xl border border-gray-700 hover:bg-gray-700 transition"
        >
            View Profile
        </Link>
        </div>

      <GitHubCalendar
        username="inflictt"
        colorScheme="dark"
        fontSize={14}
        blockSize={12}
        blockMargin={3}
      />
    </section>
  );
}