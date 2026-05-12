import { FaLaravel, FaVuejs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiPython, SiFastapi, SiOpenai } from "react-icons/si";
import { useNavigate } from "react-router";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectWarhammerRuleAssistant() {
    const navigate = useNavigate();
    const carouselImages = [
        '/Portfolio/warhammer-rule-assistant.webp',
        '/Portfolio/warhammer-rule-assistant-2.webp',
        '/Portfolio/warhammer-rule-assistant-3.webp',
        '/Portfolio/warhammer-rule-assistant-4.webp',
        '/Portfolio/warhammer-rule-assistant-5.webp'
    ];

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
                    <h1 className="text-4xl font-panchang font-bold text-white">Warhammer Rule Assistant</h1>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex flex-wrap gap-3 mb-4">
                        <FaLaravel className="text-2xl text-blue-400"/>
                        <FaVuejs className="text-2xl text-blue-400"/>
                        <SiTailwindcss className="text-2xl text-blue-400"/>
                        <SiPython className="text-2xl text-blue-400"/>
                        <SiFastapi className="text-2xl text-blue-400"/>
                        <SiOpenai className="text-2xl text-blue-400"/>
                        <FaDatabase className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">The ultimate rule assistant for Warhammer players</p>
                    <p className="text-justify font-body mb-4">
                        <span className="text-blue-400 font-bold">Warhammer Rule Assistant</span> is a tool for <span className="text-blue-400 font-bold">Warhammer players</span> who want to spend more time fighting battles and less time searching through rulebooks. I have been working on this application for the past few months as part of my <span className="text-blue-400 font-bold">third-year school project</span>. With this tool, users can answer <span className="text-blue-400 font-bold">rule-related questions</span> within seconds instead of constantly pausing games to look up specific rules. The application contains <span className="text-blue-400 font-bold">vectorized Warhammer rules</span> for both <span className="text-blue-400 font-bold">Age of Sigmar</span> and <span className="text-blue-400 font-bold">Warhammer 40,000</span>. When a user asks a question, the relevant vector data is attached to the prompt and sent to an <span className="text-blue-400 font-bold">AI model</span>, which generates an answer based on the official rules. Each answer includes a short explanation, a more detailed explanation, and the official source.
                    </p>
                    <p className="text-justify font-body mb-4">
                        The application also features a <span className="text-blue-400 font-bold">PDF viewer</span> with official rulebooks, which are connected to answers through highlighted keywords. When a user clicks one of these keywords, they are sent to the correct rulebook and page where that rule is mentioned. Besides answering rules questions, this tool also helps players build <span className="text-blue-400 font-bold">ready-to-use armies</span>. The <span className="text-blue-400 font-bold">Front-End</span> was built with <span className="text-blue-400 font-bold">Vue</span> and <span className="text-blue-400 font-bold">Tailwind</span>, while the <span className="text-blue-400 font-bold">Python Back-End</span> uses <span className="text-blue-400 font-bold">FastAPI</span> to manage calls to <span className="text-blue-400 font-bold">OpenAI</span> and retrieve vector data. This project has been one of the most challenging, but also one of the most fun, projects I have worked on so far. It is still a work in progress, so expect new updates in the future!
                    </p>
                    <a href="https://github.com/Mathijs-04/PLE-MVP" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectWarhammerRuleAssistant;
