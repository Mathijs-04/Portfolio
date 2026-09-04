import {FaReact} from "react-icons/fa";
import { useNavigate } from "react-router";
import CarouselComponent from "../ProjectCarousel.jsx";
import {SiExpress} from "react-icons/si";

function ProjectBlijeBij() {
    const navigate = useNavigate();
    const carouselImages = ['/Portfolio/tuin.webp', '/Portfolio/tuin-2.webp', '/Portfolio/tuin-3.webp', '/Portfolio/tuin-4.webp' , '/Portfolio/tuin-5.webp', '/Portfolio/tuin-6.webp', '/Portfolio/tuin-7.webp'];

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
                    <h1 className="text-4xl font-panchang font-bold text-white">De Blije Bij</h1>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-blue-500 text-2xl" />
                        <SiExpress className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">The app for sustainable gardens</p>
                    <p className="text-justify font-body mb-4">
                        <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">De Blije Bij</span> is a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">sustainability-focused garden app</span> built with <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">React Native</span> and <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Expo Go</span>. The app helps users make their gardens more <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">eco-friendly</span> by offering <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">sustainable advice</span> based on the <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">size</span>, <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">types of plants</span>, <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">amount of light</span> and <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">soil type</span> of their garden. Users can <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">design their own garden</span> using our <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">grid system</span>, view <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">statistics</span> on the sustainability of their garden, and discover new plants in a built-in <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">plant encyclopedia</span>. All plant data is fetched through a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">custom-made Express API</span>. The app was made for a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">school project</span> about <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">sustainable start-ups</span> and was developed in a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">team of six students</span>                    </p>
                    <a href="https://github.com/Mathijs-04/TLE-STARTUP" className='text-lg font-body font-bold link-underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectBlijeBij;
