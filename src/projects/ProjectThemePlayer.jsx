import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { useNavigate } from "react-router";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectThemePlayer() {
    const navigate = useNavigate();
    const carouselImages = [
        '/Portfolio/theme-player.webp',
        '/Portfolio/theme-player-2.webp'
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
                    <h1 className="text-4xl font-panchang font-bold text-white">The Elder Scrolls Theme Player</h1>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <SiHtml5 className="text-2xl text-blue-400"/>
                        <SiCss3 className="text-2xl text-blue-400"/>
                        <SiJavascript className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">A music player for The Elder Scrolls</p>
                    <p className="text-justify font-body mb-4">The <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Elder Scrolls Music Player</span> is a website that plays the <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">main theme music</span> from all major games in <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">The Elder Scrolls series</span>. It was created as part of a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">coding challenge</span> where I had to build a website using AI in just 1 minute. That's right, this entire website was made from start to finish in <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">under 60 seconds</span>!</p>
                    <a href="https://github.com/Mathijs-04/Elder-Scrolls-Theme-Player" className='text-lg font-body font-bold link-underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                    <br/>
                    <div className='mt-4'></div>
                    <a href="https://mathijs-04.github.io/Elder-Scrolls-Theme-Player/" className='text-lg font-body font-bold link-underline text-blue-400' target="_blank">Link to The Elder Scrolls Theme Player</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectThemePlayer;
