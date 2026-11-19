import { useNavigate } from "react-router";
import { SiUnrealengine } from "react-icons/si";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectUnrealEngine() {
    const navigate = useNavigate();
    const carouselImages = ["/Portfolio/unreal-engine.webp", "/Portfolio/unreal-engine-2.webp"];

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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">
                        Unreal Engine Landscape
                    </h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Unreal Engine Landscape" />
                    <div className="flex space-x-3 mb-4">
                        <SiUnrealengine className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        A 3D landscape built in Unreal Engine 5
                    </p>
                    <p className="text-justify font-body mb-4">
                        This <Highlight>fantasy environment</Highlight> with castles was my first ever project in{" "}
                        <Highlight>Unreal Engine 5</Highlight>. I wanted to learn more about Unreal Engine and 3D
                        development, and followed a beginner tutorial by <Highlight>Unreal Sensei</Highlight> along the
                        way.
                    </p>
                    <p className="text-justify font-body">
                        While building the environment, I experimented with various tools and techniques, like{" "}
                        <Highlight>Nanite</Highlight>, <Highlight>Lumen</Highlight>, <Highlight>landscaping</Highlight>,{" "}
                        <Highlight>modular design</Highlight> and the <Highlight>Blueprint</Highlight> system. I was
                        positively surprised by the number of possibilities Unreal Engine 5 offers, and I want to work
                        on more projects like this in the future.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectUnrealEngine;
