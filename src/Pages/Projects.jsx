import prj1 from "../assets/prj1.webp";
import prj2 from "../assets/prj2.webp";
// export default function Gifs() {
//     return (
//     );
// }
export default function Projects() {
    return (<>

        <section id="projects" className="px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <div>
                <div>
                    <p className="text-base sm:text-lg md:text-2xl text-teal-500">- Proejcts   </p>
                    <div className="w-full md:w-2/3 lg:w-1/2">
                        <div className="font-bold text-3xl sm:text-4xl md:text-5xl p-1 sm:p-2 ">Things I've shipped</div>
                        <div className="text-gray-500 text-sm sm:text-base p-1 ">
                            <p>
                                A handful of recent projects. Each one taught me something I didn't know going in.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            {/* main project card */}
            <div className="ParentDiv flex flex-row gap-1 justify-center h-95">

                <div className="img1 "> <img src={prj1} alt="My project 1" className="w-full h-full object-cover" /></div>
                <div className="img1 "> <img src={prj2} alt="My project 1" className="w-full h-full object-cover" /></div>

            </div>
        </section>
    </>)
}
