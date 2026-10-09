import { useNavigate } from "react-router";
import { SiJavascript } from "react-icons/si";
import ExcaliburLogo from "/excalibur-logo-blue.webp";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

const ExcaliburIcon = () => <img src={ExcaliburLogo} alt="Excalibur.js Logo" className="w-8 h-8 relative -top-1" />;

function ProjectDungeonDefender() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/dungeon-defender.webp",
        "/Portfolio/dungeon-defender-2.webp",
        "/Portfolio/dungeon-defender-3.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">Dungeon Defender</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Dungeon Defender" />
                    <div className="flex space-x-3 mb-4">
                        <ExcaliburIcon />
                        <SiJavascript className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        A web-based game built with Excalibur.js
                    </p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>Dungeon Defender</Highlight> is a <Highlight>2D Arcade Game</Highlight> made with{" "}
                        <Highlight>JavaScript</Highlight> in the gaming framework <Highlight>Excalibur.js</Highlight>.
                        This was the first ever game I developed entirely by myself. In Dungeon Defender, the goal is to
                        fight off as many enemies as possible and defend the dungeon. Defeating enemies gives you more
                        points. When you are hit three times, the game ends and you will have to try again. Excalibur.js
                        games run entirely in your browser, so no downloads are required.
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/Dungeon-Defender">
                        Link to the GitHub Repository
                    </ExternalLink>
                    <br />
                    <div className="mt-4"></div>
                    <ExternalLink href="https://mathijs-04.github.io/Dungeon-Defender/">
                        Link to Dungeon Defender
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectDungeonDefender;
