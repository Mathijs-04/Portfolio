import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiOpenai } from "react-icons/si";
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
                        <FaReact className="text-2xl text-blue-400"/>
                        <SiTailwindcss className="text-2xl text-blue-400"/>
                        <SiOpenai className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">An AI-powered travel planning application</p>
                    <p className="text-justify font-body mb-4"><strong className='text-[#60A5FA] font-semibold'>AI Travel Planner</strong> is a web application that uses artificial intelligence to help users plan their perfect trip. Whether you're looking for destination recommendations, itinerary creation, or travel tips, our AI assistant has you covered. Built with <strong className='text-[#60A5FA] font-semibold'>React</strong>, <strong className='text-[#60A5FA] font-semibold'>Tailwind CSS</strong>, and powered by <strong className='text-[#60A5FA] font-semibold'>OpenAI</strong>, this application provides personalized travel planning based on your preferences, budget, and interests. The intuitive interface makes it easy to explore destinations and create custom travel itineraries.</p>
                    <a href="https://github.com" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                    <br/>
                    <div className='mt-4'></div>
                    <a href="#" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the Application</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectAITravelPlanner;

