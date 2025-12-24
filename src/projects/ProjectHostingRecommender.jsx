import { FaVuejs } from "react-icons/fa";
import { SiPython, SiOpenai, SiDocker } from "react-icons/si";
import { useNavigate } from "react-router";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectHostingRecommender() {
    const navigate = useNavigate();
    const carouselImages = ['/Portfolio/hosting-recommender.webp', '/Portfolio/hosting-recommender-2.webp', '/Portfolio/hosting-recommender-3.webp', '/Portfolio/hosting-recommender-4.webp'];

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
                    <h1 className="text-4xl font-panchang font-bold text-white">Hosting Recommender</h1>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaVuejs className="text-2xl text-blue-400"/>
                        <SiPython className="text-2xl text-blue-400"/>
                        <SiOpenai className="text-2xl text-blue-400"/>
                        <SiDocker className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">A company website which recommends hosting packages</p>
                    <p className="text-justify font-body mb-4">
                        <span className="text-blue-400 font-bold">Hosting Recommender</span> is an internal company tool. This tool helps <span className="text-blue-400 font-bold">employees</span> find the right hosting package for customers, based on a few simple questions. Based on the answers on these questions, the correct package is recommended, along with pricing and technical specifications. This tool was built in a single day as an experiment, but is now being used throughout the entire company. The <span className="text-blue-400 font-bold">Front-End</span> was built using <span className="text-blue-400 font-bold">Vue.js</span>, the <span className="text-blue-400 font-bold">Back-End</span> uses <span className="text-blue-400 font-bold">Python</span>. If users do not understand a question or have additional questions, they can ask the <span className="text-blue-400 font-bold">chatbot</span> for help. This chatbot is powered using a model from <span className="text-blue-400 font-bold">OpenAI</span>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectHostingRecommender;

