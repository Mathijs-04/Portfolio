import { useNavigate } from "react-router";
import Typewriter from "typewriter-effect";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="gradient-background min-h-[85vh] flex items-center justify-center">
            <div className="text-center text-white">
                <h1 className="text-6xl font-panchang font-bold">Mathijs van der Meijde</h1>

                <div id="typewriter" className="mt-4 text-4xl text-white font-panchang font-semibold text-left overflow-hidden">
                    <Typewriter
                        options={{ loop: true, delay: "natural" }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(2000)
                                .typeString("Creative Developer")
                                .pauseFor(1500)
                                .deleteChars(18)
                                .typeString("Full Stack Web Developer")
                                .pauseFor(1500)
                                .deleteChars(24)
                                .typeString("Game Development Enthousiast")
                                .pauseFor(1500)
                                .deleteChars(28)
                                .typeString("Digital Designer")
                                .pauseFor(1500)
                                .deleteChars(8)
                                .typeString("Tech Enthusiast")
                                .pauseFor(1500)
                                .deleteChars(15)
                                .start();
                        }}
                    />
                </div>

                <br />

                <div className="mt-12 flex justify-center gap-4">
                    {[
                        { key: "projects", label: "My Projects" },
                        { key: "experience", label: "My Experience" },
                        { key: "about", label: "About Me" },
                    ].map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => navigate(`/${key}`)}
                            className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-[#6C5CE7] via-[#A29BFE] to-[#D6CCFF] group-hover:from-[#6C5CE7] group-hover:via-[#A29BFE] group-hover:to-[#D6CCFF] hover:text-white dark:text-white w-48 flex-shrink-0"
                        >
                            <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent w-full font-body font-bold">
                                {label}
                            </span>
                            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
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
