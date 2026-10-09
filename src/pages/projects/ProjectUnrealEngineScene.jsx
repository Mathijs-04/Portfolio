import { useNavigate } from "react-router";
import { SiUnrealengine } from "react-icons/si";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectUnrealEngineScene() {
    const navigate = useNavigate();
    const carouselImages = ["/Portfolio/unreal-engine-scene.webp", "/Portfolio/unreal-engine-scene-2.webp"];

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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">Unreal Engine Scene</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Unreal Engine Scene" />
                    <div className="flex space-x-3 mb-4">
                        <SiUnrealengine className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        A cinematic scene in Unreal Engine 5.8
                    </p>
                    <p className="text-justify font-body">
                        This <Highlight>cinematic cave scene</Highlight> in <Highlight>Unreal Engine 5.8</Highlight> was
                        a short experiment for a 3D Design school course. With this project, I wanted to experiment with
                        Unreal&apos;s <Highlight>lighting systems</Highlight> and its{" "}
                        <Highlight>cinematography</Highlight> options. I also experimented with the{" "}
                        <Highlight>Blueprint</Highlight> system to make a realistic-looking candle flame.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectUnrealEngineScene;
