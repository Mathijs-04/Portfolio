import { SiJavascript } from "react-icons/si";
import { useNavigate } from "react-router";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectGobboQuest() {
    const navigate = useNavigate();
    const carouselImages = ['/Portfolio/gobbo-quest.webp', '/Portfolio/gobbo-quest-2.webp', '/Portfolio/gobbo-quest-3.webp'];

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
                    <h1 className="text-4xl font-panchang font-bold text-white">Gobbo Quest</h1>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <SiJavascript className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">A simple web-based RPG</p>
                    <p className="text-justify font-body mb-4"><span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Gobbo Quest</span> is a simple <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">top-down arcade game</span> made with <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">MakeCode Arcade</span>. This game was made in a few hours with three other students as an introduction to the <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">game development</span> course. <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Gobbo Quest</span> is a short <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">top-down dungeon crawler</span> in which you have to explore a dungeon, slay enemies, and defeat the <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">boss</span>. <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Gobbo Quest</span> works on both <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">PC and mobile</span> and runs in the browser. This project was a fun way to explore the basic concepts of <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">game development</span>.</p>
                    <a href="https://github.com/Mathijs-04/Gobbo-Quest-V2" className='text-lg font-body font-bold link-underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                    <br/>
                    <div className='mt-4'></div>
                    <a href="https://makecode.com/_2qvTbVe5JAd3" className='text-lg font-body font-bold link-underline text-blue-400' target="_blank">Link to Gobbo Quest</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectGobboQuest;
