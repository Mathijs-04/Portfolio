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
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">The ultimate rule assistant for Warhammer players</p>
                    <p className="text-justify font-body mb-4">
                        <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Warhammer Rule Assistant</span> is a tool for <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Warhammer players</span> who want to spend more time fighting battles and less time searching through rulebooks. I have been working on this application for the past few months as part of my <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">third-year school project</span>. With this tool, users can answer <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">rule-related questions</span> within seconds instead of constantly pausing games to look up specific rules. The application contains <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">vectorized Warhammer rules</span> for both <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Age of Sigmar</span> and <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">40,000</span>. When a user asks a question, the relevant vector data is attached to the prompt and sent to an <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">AI model</span>, which generates an answer based on the official rules. Each answer includes a short explanation, a more detailed explanation, and the official source.
                    </p>
                    <p className="text-justify font-body mb-4">
                        The application also features a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">PDF viewer</span> with official rulebooks, which are connected to answers through highlighted keywords. When a user clicks one of these keywords, they are sent to the correct rulebook and page where that rule is mentioned. Besides answering rules questions, this tool also helps players build <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">ready-to-use armies</span>. The <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Front-End</span> was built with <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Vue</span> and <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Tailwind</span>, while the <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Python Back-End</span> uses <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">FastAPI</span> to manage calls to <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">OpenAI</span> and retrieve vector data. This project has been one of the most challenging, but also one of the most fun, projects I have worked on so far!
                    </p>
                    <a href="https://github.com/Mathijs-04/PLE-MVP" className='text-lg font-body font-bold link-underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                    <br/>
                    <br/>
                    <a href="https://mathijs-04.github.io/PLE-Onepager/" className='text-lg font-body font-bold link-underline text-blue-400' target="_blank">Link to Promo Onepager</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectWarhammerRuleAssistant;
