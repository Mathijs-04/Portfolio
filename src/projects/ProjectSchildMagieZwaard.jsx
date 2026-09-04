import CarouselComponent from "../ProjectCarousel.jsx";
import {SiCss3, SiHtml5, SiJavascript} from "react-icons/si";
import { useNavigate } from "react-router";
import {IoIosGitNetwork} from "react-icons/io";

function ProjectSchildMagieZwaard() {
    const navigate = useNavigate();
    const carouselImages = ['/Portfolio/smz.webp', "/Portfolio/smz-2.webp"];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <div className="flex items-center gap-4 mb-6">
                    <button
                        onClick={() => navigate('/projects')}
                        className="text-4xl font-panchang font-bold text-white hover:opacity-75 transition-opacity cursor-pointer"
                        title="Back to Projects"
                    >
                        ‹
                    </button>
                    <h1 className="text-4xl font-panchang font-bold text-white">Schild, Magie, Zwaard</h1>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <SiHtml5 className="text-blue-500 text-2xl" />
                        <SiCss3 className="text-blue-500 text-2xl" />
                        <SiJavascript className="text-blue-500 text-2xl" />
                        <IoIosGitNetwork className="text-blue-500 text-2xl" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">A web-based game powered by Neural Networks</p>
                    <p className="text-justify font-body mb-4">
                        <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Schild, Magie, Zwaard</span> is a simple <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">web-based game</span> powered by a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Neural Network</span>. It is a variation of <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Rock, Paper, Scissors</span>, created as an experiment in building my own <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">AI model</span> using <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Neural Networks</span>. The project consists of a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">front-end</span> where players interact with the game and a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">back-end</span> that collects data, trains the model, and evaluates its performance. The game uses <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">live hand-tracking</span> via your <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">webcam</span>. The <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Neural Network</span> analyzes gestures in real time to predict the player’s move, creating a competitive experience against the computer. Through this project, I have learned a lot about <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Neural Networks</span>, including how to design, train, and deploy your very own <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Model</span>.
                    </p>
                    <a href="https://github.com/Mathijs-04/PRG8-Interface" className='text-lg font-body font-bold link-underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                    <br/>
                    <div className='mt-4'></div>
                    <a href="https://mathijs-04.github.io/PRG8-Interface/" className='text-lg font-body font-bold link-underline text-blue-400' target="_blank">Link to the Game</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectSchildMagieZwaard;
