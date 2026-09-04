import CarouselComponent from "../ProjectCarousel.jsx";
import {SiExpress, SiOpenai} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import { useNavigate } from "react-router";

function ProjectDNDGPT() {
    const navigate = useNavigate();
    const carouselImages = ['/Portfolio/dnd-gpt.webp', '/Portfolio/dnd-gpt-2.webp'];

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
                    <h1 className="text-4xl font-panchang font-bold text-white">D&D-GPT</h1>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-blue-500 text-2xl" />
                        <SiOpenai className="text-blue-500 text-2xl" />
                        <SiExpress className="text-blue-500 text-2xl" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">Your AI Dungeon Master</p>
                    <p className="text-justify font-body mb-4">
                        <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">D&D-GPT</span> is an <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">AI Dungeon Master</span> for <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Dungeons & Dragons 5e</span>, powered by <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">ChatGPT-3.5</span>. During a school course on <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">AI Large Language Models</span>, I decided to create my own <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">AI assistant</span>. To align with my personal interests, I developed an assistant for <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Dungeons & Dragons</span>. My <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">AI</span> has access to the entire <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">D&D 5e ruleset</span> and an <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">API</span> that fetches random monsters, enabling it to answer <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">D&D-related questions</span> and provide <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">monster data</span> on demand. User <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">chat history</span> is stored and can be reset with a single click. The <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">front-end</span> was built using <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">React</span>, while the <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">back-end</span>, which communicates with the <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">OpenAI API</span>, was developed with <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Express</span>. During this project, I have learned a lot about how <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Large Language Models</span> work, and how easy it is to experiment with them yourself.
                    </p>
                    <a href="https://github.com/Mathijs-04/PRG8-LLM" className='text-lg font-body font-bold link-underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectDNDGPT;
