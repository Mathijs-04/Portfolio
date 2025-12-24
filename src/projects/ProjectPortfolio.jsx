import {FaReact} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import { useNavigate } from "react-router";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectPortfolio() {
    const navigate = useNavigate();
    const carouselImages = ['/Portfolio/portfolio.webp', '/Portfolio/portfolio-2.webp', '/Portfolio/portfolio-3.webp'];

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
                    <h1 className="text-4xl font-panchang font-bold text-white">Portfolio</h1>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-2xl text-blue-400"/>
                        <SiTailwindcss className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">A showcase of my work and skills, built with React and Tailwind</p>
                    <p className="text-justify font-body mb-4">This <span className="text-blue-400 font-bold">portfolio website</span> is a collection of my favorite projects, my experience so far, and some personal information. The base of this project consists of <span className="text-blue-400 font-bold">React</span> and <span className="text-blue-400 font-bold">Tailwind</span>, but I have experimented with implementing some cool extras. I have tried out some new techniques, like using a <span className="text-blue-400 font-bold">JavaScript</span> Typewriter package, using an animated gradient background, making image carousels and importing various icons through <span className="text-blue-400 font-bold">React</span>. Besides creating a place to show my work, this portfolio was also intended to explore new possibilities of <span className="text-blue-400 font-bold">webdevelopment</span>.</p>
                    <a href="https://github.com/Mathijs-04/Portfolio" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectPortfolio;
