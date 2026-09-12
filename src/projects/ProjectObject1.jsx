import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { IoIosGitNetwork } from "react-icons/io";
import { useNavigate } from "react-router";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectObject1() {
    const navigate = useNavigate();
    const carouselImages = [
        '/Portfolio/object1.webp',
        '/Portfolio/object1-2.webp',
        '/Portfolio/object1-3.webp',
        '/Portfolio/object1-4.webp'
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
                    <h1 className="text-4xl font-panchang font-bold text-white">Object_1</h1>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <SiJavascript className="text-2xl text-blue-400"/>
                        <FaReact className="text-2xl text-blue-400"/>
                        <IoIosGitNetwork className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">An AI driven 3D experiment</p>
                    <p className="text-justify font-body mb-4">
                        A more detailed description of this project will be added soon.
                    </p>
                    <a href="https://github.com/Mathijs-04/Object_01" className='text-lg font-body font-bold link-underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                    <br/>
                    <div className='mt-4'></div>
                    <a href="https://mathijs-04.github.io/Object_01/" className='text-lg font-body font-bold link-underline text-blue-400' target="_blank">Link to Object_1</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectObject1;
