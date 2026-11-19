import { useNavigate } from "react-router";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectReleaseRadar() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/release-radar.webp",
        "/Portfolio/release-radar-2.webp",
        "/Portfolio/release-radar-3.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">Release Radar</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Release Radar" />
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-2xl text-blue-400" />
                        <SiTypescript className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        Your personalized game release calendar
                    </p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>Release Radar</Highlight> is your personalized{" "}
                        <Highlight>game release calendar</Highlight>. I created this prototype to solve a problem I ran
                        into myself: there are a lot of upcoming games I look forward to, but they all release at
                        different times, on different platforms, and some don&apos;t even have a release date yet. I
                        couldn&apos;t keep track of them all, so I built Release Radar.
                    </p>
                    <p className="text-justify font-body mb-4">
                        It&apos;s a simple <Highlight>React</Highlight> app written in <Highlight>TypeScript</Highlight>{" "}
                        and hosted on <Highlight>GitHub Pages</Highlight>. You can add your anticipated games with extra
                        information such as images and notes, view them in a <Highlight>timeline</Highlight> or{" "}
                        <Highlight>agenda</Highlight>, and edit them when a game gets delayed. All data is stored
                        locally in your browser and can be exported and imported as <Highlight>JSON</Highlight>, as a
                        backup or to move it to another device. It is free to use, so give it a try!
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/Release-Radar">
                        Link to the GitHub Repository
                    </ExternalLink>
                    <br />
                    <div className="mt-4"></div>
                    <ExternalLink href="https://mathijs-04.github.io/Release-Radar/">
                        Link to Release Radar
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectReleaseRadar;
