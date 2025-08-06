import CarouselComponent from "../ProjectCarousel.jsx";
import {SiCss3, SiHtml5, SiJavascript} from "react-icons/si";
import {IoIosGitNetwork} from "react-icons/io";

function ProjectSchildMagieZwaard() {
    const carouselImages = ['/Portfolio/smz.webp', "/Portfolio/smz-2.webp"];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Schild, Magie, Zwaard</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <SiHtml5 className="text-blue-500 text-2xl" />
                        <SiCss3 className="text-blue-500 text-2xl" />
                        <SiJavascript className="text-blue-500 text-2xl" />
                        <IoIosGitNetwork className="text-blue-500 text-2xl" />
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">A web-based game powered by Neural Networks</p>
                    <p className="text-justify font-body mb-4">
                        <span className="text-blue-400 font-bold">Schild, Magie, Zwaard</span> is a simple <span className="text-blue-400 font-bold">web-based game</span> powered by a <span className="text-blue-400 font-bold">Neural Network</span>. It is a variation of <span className="text-blue-400 font-bold">Rock, Paper, Scissors</span>, created as an experiment in building my own <span className="text-blue-400 font-bold">AI model</span> using <span className="text-blue-400 font-bold">Neural Networks</span>. The project consists of a <span className="text-blue-400 font-bold">front-end</span> where players interact with the game and a <span className="text-blue-400 font-bold">back-end</span> that collects data, trains the model, and evaluates its performance. The game uses <span className="text-blue-400 font-bold">live hand-tracking</span> via your <span className="text-blue-400 font-bold">webcam</span>. The <span className="text-blue-400 font-bold">Neural Network</span> analyzes gestures in real time to predict the player’s move, creating a competitive experience against the computer. Through this project, I have learned a lot about <span className="text-blue-400 font-bold">Neural Networks</span>, including how to design, train, and deploy your very own <span className="text-blue-400 font-bold">Model</span>.
                    </p>
                    <a href="https://github.com/Mathijs-04/PRG8-Interface" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                    <br/>
                    <div className='mt-4'></div>
                    <a href="https://mathijs-04.github.io/PRG8-Interface/" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the Game</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectSchildMagieZwaard;
