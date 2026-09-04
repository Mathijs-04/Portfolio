import {FaLaravel, FaDatabase} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import { useNavigate } from "react-router";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectMightyModels() {
    const navigate = useNavigate();
    const carouselImages = ['/Portfolio/mighty-models.webp', '/Portfolio/mighty-models-2.webp', '/Portfolio/mighty-models-3.webp'];

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
                    <h1 className="text-4xl font-panchang font-bold text-white">Mighty Models</h1>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaLaravel className="text-2xl text-blue-400"/>
                        <SiTailwindcss className="text-2xl text-blue-400"/>
                        <FaDatabase className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">A Laravel website where users share their tabletop miniatures</p>
                    <p className="text-justify font-body mb-4"><span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Mighty Models</span> is a website for showcasing your <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">miniature models</span> to the world. This was the first ever <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Laravel</span> project I worked on. It was also one of my first experiences with <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Tailwind CSS</span>. For data storage, I have used an <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">SQLite database</span>. On <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Mighty Models</span>, you can view and like models from other users and upload your own models to the website. It also features a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">login system</span>, a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">like system</span>, and a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">post system</span>. Users can delete and edit their own posts, and the admin has the authority to hide posts. <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Mighty Models</span> is one of my <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">favorite projects</span> I have worked on, not only because I like the end result, but also because I have learned a lot about <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">webdevelopment</span> and frameworks during the process.</p>
                    <a href="https://github.com/Mathijs-04/PRG5-Eindopdracht" className='text-lg font-body font-bold link-underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectMightyModels;
