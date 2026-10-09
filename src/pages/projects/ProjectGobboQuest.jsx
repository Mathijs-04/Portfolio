import { useNavigate } from "react-router";
import { SiJavascript } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectGobboQuest() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/gobbo-quest.webp",
        "/Portfolio/gobbo-quest-2.webp",
        "/Portfolio/gobbo-quest-3.webp",
    ];

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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">Gobbo Quest</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Gobbo Quest" />
                    <div className="flex space-x-3 mb-4">
                        <SiJavascript className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">A simple web-based RPG</p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>Gobbo Quest</Highlight> is a simple <Highlight>top-down arcade game</Highlight> made
                        with <Highlight>MakeCode Arcade</Highlight>. This game was made in a few hours with three other
                        students as an introduction to the game development course. Gobbo Quest is a short top-down{" "}
                        <Highlight>dungeon crawler</Highlight> in which you have to explore a dungeon, slay enemies, and
                        defeat the boss. Gobbo Quest works on both PC and mobile and runs in the browser. This project
                        was a fun way to explore the basic concepts of game development.
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/Gobbo-Quest-V2">
                        Link to the GitHub Repository
                    </ExternalLink>
                    <br />
                    <div className="mt-4"></div>
                    <ExternalLink href="https://makecode.com/_2qvTbVe5JAd3">Link to Gobbo Quest</ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectGobboQuest;
