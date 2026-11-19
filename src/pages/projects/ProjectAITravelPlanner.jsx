import { useNavigate } from "react-router";
import { FaVuejs, FaDatabase } from "react-icons/fa";
import { SiOpenai, SiPython, SiFastapi, SiDocker } from "react-icons/si";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectAITravelPlanner() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/ai-travel-planner.webp",
        "/Portfolio/ai-travel-planner-2.webp",
        "/Portfolio/ai-travel-planner-3.webp",
        "/Portfolio/ai-travel-planner-4.webp",
        "/Portfolio/ai-travel-planner-5.webp",
        "/Portfolio/ai-travel-planner-6.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">AI Travel Planner</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="AI Travel Planner" />
                    <div className="flex space-x-3 mb-4">
                        <FaVuejs className="text-2xl text-blue-400" />
                        <SiPython className="text-2xl text-blue-400" />
                        <SiFastapi className="text-2xl text-blue-400" />
                        <FaDatabase className="text-2xl text-blue-400" />
                        <SiOpenai className="text-2xl text-blue-400" />
                        <SiDocker className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        An AI-powered travel planning application
                    </p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>AI Travel Planner</Highlight> makes personalized <Highlight>travel plans</Highlight>{" "}
                        for trips to <Highlight>Kenya</Highlight>. The user answers a few questions about preferences,
                        budget, transport, accommodation and the duration of the trip. These answers are used to collect
                        the right data from a <Highlight>Qdrant</Highlight> vector database, which is added to an
                        extensive <Highlight>system prompt</Highlight> with all kinds of rules for a correct travel
                        plan. A model from <Highlight>OpenAI</Highlight> then generates the plan.
                    </p>
                    <p className="text-justify font-body mb-4">
                        Back in the Front-End, the user can interact with the plan, make small changes such as a
                        different accommodation, and send it to their email as confirmation. The Front-End uses{" "}
                        <Highlight>Vue.js</Highlight>, while the Back-End consists of <Highlight>Python</Highlight>,{" "}
                        <Highlight>FastAPI</Highlight>, the Qdrant vector database and calls to OpenAI. This was one of
                        the most comprehensive and challenging projects I have worked on so far!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectAITravelPlanner;
