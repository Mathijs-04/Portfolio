import { useNavigate } from "react-router";
import Typewriter from "typewriter-effect";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="gradient-background min-h-screen flex items-center justify-center">
            <div className="text-center text-white">
                <h1 className="text-6xl font-panchang font-bold">Mathijs van der Meijde</h1>

                <div id="typewriter" className="mt-4 text-4xl text-white font-panchang font-semibold text-left overflow-hidden">
                    <Typewriter
                        options={{
                            loop: true,
                            delay: 75,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(2500)
                                .typeString("String <strong>1</strong>")
                                .pauseFor(300)
                                .deleteChars(8)
                                .typeString("String <strong>2</strong>")
                                .pauseFor(300)
                                .deleteChars(8)
                                .typeString("String <strong>3</strong>")
                                .pauseFor(300)
                                .deleteChars(8)
                                .pauseFor(1000)
                                .start();
                        }}
                    />
                </div>

                <br />

                <div className="mt-4">
                    {["projects", "experience", "about"].map((page) => (
                        <button
                            key={page}
                            onClick={() => navigate(`/${page}`)}
                            className="group relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg
                            bg-gradient-to-br from-[#6C5CE7] via-[#A29BFE] to-[#D6CCFF]
                            group-hover:from-[#6C5CE7] group-hover:via-[#A29BFE] group-hover:to-[#D6CCFF]
                            hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-500"
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md
                                group-hover:bg-transparent group-hover:dark:bg-transparent">
                                {page === "projects" ? "My Projects" : page === "experience" ? "My Experience" : "About Me"}
                            </span>
                            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)]
                                group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                <div className="relative h-full w-8 bg-white/20"></div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
