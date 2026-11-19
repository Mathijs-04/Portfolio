import { useNavigate } from "react-router";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectGameCollection() {
    const navigate = useNavigate();
    const carouselImages = ["/Portfolio/game-collection.webp", "/Portfolio/game-collection-2.webp"];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 max-md:px-4 text-white">
                <div className="flex items-center gap-4 mb-6">
                    <button
                        onClick={() => navigate("/projects")}
                        className="text-4xl font-panchang font-bold text-white hover:opacity-75 transition-opacity cursor-pointer select-none"
                        title="Back to Projects"
                    >
                        ‹
                    </button>
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">
                        Full-Stack Game Collection
                    </h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Full-Stack Game Collection" />
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-2xl text-blue-400" />
                        <FaNodeJs className="text-2xl text-blue-400" />
                        <SiMongodb className="text-2xl text-blue-400" />
                        <SiExpress className="text-2xl text-blue-400" />
                        <SiTailwindcss className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        A MERN-stack collection with a dedicated Front-End and Back-End
                    </p>
                    <p className="text-justify font-body mb-4">
                        The goal of this project was to learn more about the differences between{" "}
                        <Highlight>Front-End</Highlight> and <Highlight>Back-End</Highlight> web development. By
                        combining the two, I created a website that stores data of popular{" "}
                        <Highlight>video games</Highlight>: the Back-End stores the game data, and the Front-End
                        retrieves and visualizes it.
                    </p>
                    <p className="text-justify font-body mb-4">
                        The Front-End uses <Highlight>React</Highlight> and <Highlight>Tailwind</Highlight>, while the
                        Back-End consists of <Highlight>Node.js</Highlight>, <Highlight>Express</Highlight> and{" "}
                        <Highlight>MongoDB</Highlight>. Even though the final product doesn&apos;t look too spectacular,
                        I think this was one of the most educational projects I have worked on so far.
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/PRG6-Front-End">
                        Link to the Front-End GitHub Repository
                    </ExternalLink>
                    <br />
                    <div className="mt-4"></div>
                    <ExternalLink href="https://github.com/Mathijs-04/PRG6-Back-End">
                        Link to the Back-End GitHub Repository
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectGameCollection;
