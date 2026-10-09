import { useNavigate } from "react-router";
import { IoIosGitNetwork } from "react-icons/io";
import { SiCss3, SiHtml5, SiJavascript } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectSchildMagieZwaard() {
    const navigate = useNavigate();
    const carouselImages = ["/Portfolio/smz.webp", "/Portfolio/smz-2.webp"];

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
                        Schild, Magie, Zwaard
                    </h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Schild, Magie, Zwaard" />
                    <div className="flex space-x-3 mb-4">
                        <SiHtml5 className="text-blue-500 text-2xl" />
                        <SiCss3 className="text-blue-500 text-2xl" />
                        <SiJavascript className="text-blue-500 text-2xl" />
                        <IoIosGitNetwork className="text-blue-500 text-2xl" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        A web-based game powered by Neural Networks
                    </p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>Schild, Magie, Zwaard</Highlight> is a simple web-based game powered by a{" "}
                        <Highlight>Neural Network</Highlight>. It is a variation of{" "}
                        <Highlight>Rock, Paper, Scissors</Highlight>, created as an experiment in building my own AI
                        model using Neural Networks. The project consists of a Front-End where players interact with the
                        game and a Back-End that collects data, trains the model, and evaluates its performance. The
                        game uses live <Highlight>hand-tracking</Highlight> via your webcam. The Neural Network analyzes
                        gestures in real time to predict the player’s move, creating a competitive experience against
                        the computer. Through this project, I have learned a lot about Neural Networks, including how to
                        design, train, and deploy your very own Model.
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/PRG8-Interface">
                        Link to the GitHub Repository
                    </ExternalLink>
                    <br />
                    <div className="mt-4"></div>
                    <ExternalLink href="https://mathijs-04.github.io/PRG8-Interface/">Link to the Game</ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectSchildMagieZwaard;
