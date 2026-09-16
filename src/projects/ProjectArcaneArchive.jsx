import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { useNavigate } from "react-router";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectArcaneArchive() {
    const navigate = useNavigate();
    const carouselImages = [
        '/Portfolio/arcane-archive.webp',
        '/Portfolio/arcane-archive-2.webp',
        '/Portfolio/arcane-archive-3.webp'
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
                    <h1 className="text-4xl font-panchang font-bold text-white">The Arcane Archive</h1>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <SiHtml5 className="text-2xl text-blue-400"/>
                        <SiCss3 className="text-2xl text-blue-400"/>
                        <SiJavascript className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">A web-based Dungeon Synth music player</p>
                    <p className="text-justify font-body mb-4">The <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Arcane Archive</span> is a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">web-based Dungeon Synth music player</span>. <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Dungeon Synth</span> is a niche type of <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">electronic music</span> featuring <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">fantasy-style ambient music</span>. I really like this genre and the <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">distinct visual style</span> that comes with it. I liked the style so much that I decided to try my own hand at making a design with this style. I built this application for a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">design project</span> for the <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">User Experience Design Course</span> at school. The biggest challenge of this project was translating this very distinct <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Dark Fantasy</span> style to a simple webpage, but I think it turned out great. It features a couple of my <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">favorite tracks</span>, so go check it out!</p>
                    <a href="https://github.com/Mathijs-04/The-Arcane-Archive" className='text-lg font-body font-bold link-underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                    <br/>
                    <div className='mt-4'></div>
                    <a href="https://mathijs-04.github.io/The-Arcane-Archive/" className='text-lg font-body font-bold link-underline text-blue-400' target="_blank">Link to The Arcane Archive</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectArcaneArchive;
