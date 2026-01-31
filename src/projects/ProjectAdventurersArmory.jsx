import { useNavigate } from "react-router";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectAdventurersArmory() {
    const navigate = useNavigate();
    const carouselImages = ['/Portfolio/armory-1.webp', '/Portfolio/armory-2.webp', '/Portfolio/armory-3.webp'];

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
                    <h1 className="text-4xl font-panchang font-bold text-white">The Adventurers Armory</h1>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        {/* Add tech stack icons here */}
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">Add your project description here</p>
                    <p className="text-justify font-body mb-4">This is a placeholder for your project details. Edit this section to describe <span className="text-blue-400 font-bold">what your project does</span>, the <span className="text-blue-400 font-bold">technologies you used</span>, and any <span className="text-blue-400 font-bold">key features</span> you want to highlight.</p>
                    <a href="https://github.com" className='text-lg font-body font-bold underline text-blue-400' target="_blank" rel="noreferrer">Link to the GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectAdventurersArmory;
