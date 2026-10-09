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
                        This <Highlight>AI Travel Planner</Highlight> tool makes personalized travel plans to{" "}
                        <Highlight>Kenya</Highlight>. The user gets asked a few questions about preferences, budget,
                        transport, accommodation and duration of the trip. These answers get stored and are used to
                        collect the correct data from the <Highlight>Qdrant Vector Database</Highlight>. These are
                        integrated in the comprehensive system prompt, which includes all kinds of rules to make a
                        correct travel plan. This vast prompt is sent to a model from <Highlight>OpenAI</Highlight>,
                        which generates a travel plan based on the specifications. This plan is returned to the
                        Front-End, where it is shown to the user. Here the user can interact with the plan, make small
                        changes like changing accommodation and send it to their mail as confirmation. The Front-End
                        uses <Highlight>Vue.js</Highlight>, while the Back-End consists of <Highlight>Python</Highlight>
                        , <Highlight>FastAPI</Highlight>, a Qdrant Vector Database and calls to OpenAI. This was one of
                        the most comprehensive and challenging projects I have worked on so far!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectAITravelPlanner;
