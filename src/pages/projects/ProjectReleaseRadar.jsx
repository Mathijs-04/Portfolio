import { useNavigate } from "react-router";
import { FaReact } from "react-icons/fa";
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
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        Your personalized game release calendar
                    </p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>Release Radar</Highlight> is your{" "}
                        <Highlight>personalized game release calendar</Highlight>. I created this prototype to solve a
                        problem I ran into myself: there are a lot of upcoming games I look forward to, but they all
                        release at different times, on different platforms, and some don&apos;t even have a release
                        date yet. I couldn&apos;t keep track of them all, so I built Release Radar.
                    </p>
                    <p className="text-justify font-body mb-4">
                        It&apos;s a simple <Highlight>React</Highlight> app hosted on{" "}
                        <Highlight>GitHub Pages</Highlight>. You can add all of your anticipated game releases, along
                        with extra information such as images and notes. Once your games are added, they are displayed
                        in a <Highlight>timeline</Highlight> or <Highlight>agenda view</Highlight>. Existing listings
                        can also be edited, for example when a game gets delayed.
                    </p>
                    <p className="text-justify font-body mb-4">
                        All data is stored in your browser&apos;s <Highlight>local storage</Highlight>, and you can{" "}
                        <Highlight>export and import</Highlight> it as JSON, either as a backup or to transfer it to
                        another device. This prototype is free to use and available through the link below!
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
