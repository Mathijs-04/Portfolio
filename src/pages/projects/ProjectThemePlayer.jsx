import { useNavigate } from "react-router";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectThemePlayer() {
    const navigate = useNavigate();
    const carouselImages = ["/Portfolio/theme-player.webp", "/Portfolio/theme-player-2.webp"];

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
                        The Elder Scrolls Theme Player
                    </h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="The Elder Scrolls Theme Player" />
                    <div className="flex space-x-3 mb-4">
                        <SiHtml5 className="text-2xl text-blue-400" />
                        <SiCss3 className="text-2xl text-blue-400" />
                        <SiJavascript className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        A music player for The Elder Scrolls
                    </p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>The Elder Scrolls Music Player</Highlight> is a website that plays the main theme
                        music from all major games in <Highlight>The Elder Scrolls series</Highlight>. It was created as
                        part of a <Highlight>coding challenge</Highlight> where I had to build a website using{" "}
                        <Highlight>AI</Highlight> in just 1 minute. That&apos;s right, this entire website was made from
                        start to finish in under 60 seconds!
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/Elder-Scrolls-Theme-Player">
                        Link to the GitHub Repository
                    </ExternalLink>
                    <br />
                    <div className="mt-4"></div>
                    <ExternalLink href="https://mathijs-04.github.io/Elder-Scrolls-Theme-Player/">
                        Link to The Elder Scrolls Theme Player
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectThemePlayer;
