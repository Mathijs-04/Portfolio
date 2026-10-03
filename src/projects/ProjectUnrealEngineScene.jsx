import { SiUnrealengine } from "react-icons/si";
import { useNavigate } from "react-router";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectUnrealEngineScene() {
    const navigate = useNavigate();
    const carouselImages = [
        '/Portfolio/unreal-engine-scene.webp',
        '/Portfolio/unreal-engine-scene-2.webp',
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
                    <h1 className="text-4xl font-panchang font-bold text-white">Unreal Engine Scene</h1>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages} />
                    <div className="flex space-x-3 mb-4">
                        <SiUnrealengine className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">A cinematic scene in Unreal Engine 5.8</p>
                    <p className="text-justify font-body">This <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">cinematic cave scene</span> in <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Unreal Engine 5.8</span> was a short experiment for a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">3D Design</span> school course. With this project, I wanted to experiment with Unreal's <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">lighting systems</span> and its <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">cinematography</span> options. I also experimented with the <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Blueprint</span> system to make a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">realistic-looking candle flame</span>.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectUnrealEngineScene;
