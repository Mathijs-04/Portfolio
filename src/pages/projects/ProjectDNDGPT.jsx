import { useNavigate } from "react-router";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiOpenai } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectDNDGPT() {
    const navigate = useNavigate();
    const carouselImages = ["/Portfolio/dnd-gpt.webp", "/Portfolio/dnd-gpt-2.webp"];

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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">D&D-GPT</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="D&D-GPT" />
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-blue-500 text-2xl" />
                        <SiOpenai className="text-blue-500 text-2xl" />
                        <SiExpress className="text-blue-500 text-2xl" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">Your AI Dungeon Master</p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>D&D-GPT</Highlight> is an AI Dungeon Master for{" "}
                        <Highlight>Dungeons & Dragons 5e</Highlight>, powered by <Highlight>ChatGPT-3.5</Highlight>.
                        During a school course on AI <Highlight>Large Language Models</Highlight>, I decided to create
                        my own AI assistant. To align with my personal interests, I developed an assistant for Dungeons
                        & Dragons. My AI has access to the entire D&D 5e ruleset and an API that fetches random
                        monsters, enabling it to answer D&D-related questions and provide monster data on demand. User
                        chat history is stored and can be reset with a single click. The Front-End was built using{" "}
                        <Highlight>React</Highlight>, while the Back-End, which communicates with the{" "}
                        <Highlight>OpenAI API</Highlight>, was developed with <Highlight>Express</Highlight>. During
                        this project, I have learned a lot about how Large Language Models work, and how easy it is to
                        experiment with them yourself.
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/PRG8-LLM">
                        Link to the GitHub Repository
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectDNDGPT;
