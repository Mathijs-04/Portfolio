import { FaVuejs, FaDatabase } from "react-icons/fa";
import { SiOpenai, SiPython, SiFastapi, SiDocker } from "react-icons/si";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectAITravelPlanner() {
    const carouselImages = ['/Portfolio/ai-travel-planner.webp', '/Portfolio/ai-travel-planner-2.webp', '/Portfolio/ai-travel-planner-3.webp', '/Portfolio/ai-travel-planner-4.webp', '/Portfolio/ai-travel-planner-5.webp', '/Portfolio/ai-travel-planner-6.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">AI Travel Planner</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaVuejs className="text-2xl text-blue-400"/>
                        <SiPython className="text-2xl text-blue-400"/>
                        <SiFastapi className="text-2xl text-blue-400"/>
                        <FaDatabase className="text-2xl text-blue-400"/>
                        <SiOpenai className="text-2xl text-blue-400"/>
                        <SiDocker className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">An AI-powered travel planning application</p>
                    <p className="text-justify font-body mb-4">
                        This <span className="text-blue-400 font-bold">AI Travel Planner</span> tool makes personalised travel plans to <span className="text-blue-400 font-bold">Kenya</span>. The user gets asked a few questions about preferences, budget, transport, accommodation and duration of the trip. These answers get stored and are used to collect the correct data from the <span className="text-blue-400 font-bold">Qdrant Vector Database</span>. These are integrated in the comprehensive system prompt, which includes all kinds of rules to make a correct travel plan. This vast prompt is sent to a model from <span className="text-blue-400 font-bold">OpenAI</span>, which generates a travel plan based on the specifications. This plan is returned to the <span className="text-blue-400 font-bold">Front-End</span>, where it is shown to the user. Here the user can interact with the plan, make small changes like changing accommodation and send it to their mail as confirmation. The <span className="text-blue-400 font-bold">Front-End</span> uses <span className="text-blue-400 font-bold">Vue.js</span>, while the <span className="text-blue-400 font-bold">Back-End</span> consists of <span className="text-blue-400 font-bold">Python</span>, <span className="text-blue-400 font-bold">FastAPI</span>, a <span className="text-blue-400 font-bold">Qdrant Vector Database</span> and calls to <span className="text-blue-400 font-bold">OpenAI</span>. This was one of the most comprehensive and challenging projects I have worked on so far!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectAITravelPlanner;

