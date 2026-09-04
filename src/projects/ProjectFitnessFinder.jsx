import {FaReact} from "react-icons/fa";
import { useNavigate } from "react-router";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectFitnessFinder() {
    const navigate = useNavigate();
    const carouselImages = ['/Portfolio/app.webp', '/Portfolio/app-2.webp', '/Portfolio/app-3.webp', '/Portfolio/app-4.webp'];

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
                    <h1 className="text-4xl font-panchang font-bold text-white">Fitness Finder</h1>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-blue-500 text-2xl" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">An app to help you find a gym</p>
                    <p className="text-justify font-body mb-4">
                        <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Fitness Finder</span> is my very first <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">native app</span> and was made using <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">React Native</span> and <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Expo Go</span>. Fitness Finder gives you an overview of <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">gyms near your location</span>, and helps you navigate to them. The app offers a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">list view</span> of every single <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Basic-Fit</span> in the Netherlands, and allows you to add them to your <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">favorites list</span>. When selecting a gym, it is shown on the <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">map</span>, and a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">compass</span> guides you to the location. In the <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">settings page</span>, the user can switch to <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">dark mode</span>, or translate the app from <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">English</span> to either <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Dutch</span> or <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">German</span>. This project was mostly intended to learn more about <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">mobile development</span>, and test out some cool features like <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">biometric security</span>, <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">offline mode</span> and <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">user location</span>.
                    </p>
                    <a href="https://github.com/Mathijs-04/PRG7" className='text-lg font-body font-bold link-underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectFitnessFinder;
