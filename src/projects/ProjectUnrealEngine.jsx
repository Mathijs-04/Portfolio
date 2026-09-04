import { SiUnrealengine } from "react-icons/si";
import { useNavigate } from "react-router";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectUnrealEngine() {
    const navigate = useNavigate();
    const carouselImages = ['/Portfolio/unreal-engine.webp', '/Portfolio/unreal-engine-2.webp'];

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
                    <h1 className="text-4xl font-panchang font-bold text-white">Unreal Engine 5</h1>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages} />
                    <div className="flex space-x-3 mb-4">
                        <SiUnrealengine className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">A 3D landscape built in Unreal Engine 5</p>
                    <p className="text-justify font-body">This <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Unreal Engine 5</span> environment is my first ever project in Unreal Engine. I wanted to learn more about <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Unreal Engine 5</span> and <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">3D Development</span>, so I created this fantasy environment with castles in it. While making this environment I experimented with various tools and techniques in <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Unreal Engine 5</span>, like <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Nanite</span>, <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Lumen</span>, <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Landscaping</span>, <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Modular Design</span>, and the UE5 <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Blueprint</span> system. During this project, I followed an <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Unreal Engine 5 Beginner Tutorial</span> by Unreal Sensei. I was positively surprised by the amount of possibilities <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">UE5</span> has, and want to work on more of these projects in the future.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectUnrealEngine;
