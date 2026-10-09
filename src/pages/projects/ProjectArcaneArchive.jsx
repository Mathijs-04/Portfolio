import { useNavigate } from "react-router";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectArcaneArchive() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/arcane-archive.webp",
        "/Portfolio/arcane-archive-2.webp",
        "/Portfolio/arcane-archive-3.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">The Arcane Archive</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="The Arcane Archive" />
                    <div className="flex space-x-3 mb-4">
                        <SiHtml5 className="text-2xl text-blue-400" />
                        <SiCss3 className="text-2xl text-blue-400" />
                        <SiJavascript className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        A web-based Dungeon Synth music player
                    </p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>The Arcane Archive</Highlight> is a web-based <Highlight>Dungeon Synth</Highlight>{" "}
                        music player. Dungeon Synth is a niche type of <Highlight>electronic music</Highlight> featuring
                        fantasy-style ambient music. I really like this genre and the distinct visual style that comes
                        with it. I liked the style so much that I decided to try my own hand at making a design with
                        this style. I built this application for a design project for the User Experience Design Course
                        at school. The biggest challenge of this project was translating this very distinct{" "}
                        <Highlight>Dark Fantasy</Highlight> style to a simple webpage, but I think it turned out great.
                        It features a couple of my favorite tracks, so go check it out!
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/The-Arcane-Archive">
                        Link to the GitHub Repository
                    </ExternalLink>
                    <br />
                    <div className="mt-4"></div>
                    <ExternalLink href="https://mathijs-04.github.io/The-Arcane-Archive/">
                        Link to The Arcane Archive
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectArcaneArchive;
