import { FaQuestionCircle } from "react-icons/fa";
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
                    <div className="flex space-x-3 mb-4">
                        <FaQuestionCircle className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">Placeholder subtitle for the Warhammer Rule Assistant project</p>
                    <p className="text-justify font-body mb-4">
                        <span className="text-blue-400 font-bold">Warhammer Rule Assistant</span> is a placeholder project description. This page is ready to describe the goal, features, technology, and design choices behind the project once the final copy is available.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectWarhammerRuleAssistant;
