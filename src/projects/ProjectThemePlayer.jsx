import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { useNavigate } from "react-router";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectThemePlayer() {
    const navigate = useNavigate();
    const carouselImages = [
        '/Portfolio/theme-player.webp',
        '/Portfolio/theme-player-2.webp'
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
                    <h1 className="text-4xl font-panchang font-bold text-white">The Elder Scrolls Theme Player</h1>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <SiHtml5 className="text-2xl text-blue-400"/>
                        <SiCss3 className="text-2xl text-blue-400"/>
                        <SiJavascript className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">A music player for The Elder Scrolls</p>
                    <p className="text-justify font-body mb-4">
                        A more detailed description of this project will be added soon.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectThemePlayer;
