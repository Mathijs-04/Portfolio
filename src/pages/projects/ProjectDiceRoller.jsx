import { useNavigate } from "react-router";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectDiceRoller() {
    const navigate = useNavigate();
    const carouselImages = ["/Portfolio/dice-roller.webp", "/Portfolio/dice-roller-2.webp"];

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
                        WARHAMMER Dice Roller
                    </h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="WARHAMMER Dice Roller" />
                    <div className="flex space-x-3 mb-4">
                        <SiHtml5 className="text-2xl text-blue-400" />
                        <SiCss3 className="text-2xl text-blue-400" />
                        <SiJavascript className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        An online dice rolling tool for wargaming enthusiasts
                    </p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>WARHAMMER Dice Roller</Highlight> is a simple online tool to roll many dice at once.
                        I was inspired to work on this small hobby project because of my own frustrations during the{" "}
                        <Highlight>WARHAMMER Tabletop Game</Highlight>. When playing WARHAMMER, players have to roll a
                        lot of dice, and it can be quite time-consuming. I wanted to ease the pain by creating a simple
                        website to roll a lot of dice at once. By using the online WARHAMMER Dice Roller, you spend less
                        time rolling dice, and more time conquering the world! This simple website was developed using{" "}
                        <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight>, and <Highlight>JavaScript</Highlight>,
                        and works on both PC and Mobile.
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/Dice-Roller">
                        Link to the GitHub Repository
                    </ExternalLink>
                    <br />
                    <div className="mt-4"></div>
                    <ExternalLink href="https://mathijs-04.github.io/Dice-Roller/">
                        Link to the Dice Roller
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectDiceRoller;
