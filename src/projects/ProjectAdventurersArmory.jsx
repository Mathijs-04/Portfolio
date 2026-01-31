import { useNavigate } from "react-router";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectAdventurersArmory() {
    const navigate = useNavigate();
    const carouselImages = ['/Portfolio/armory.webp', '/Portfolio/armory-2.webp', '/Portfolio/armory-3.webp'];

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
                    <p className="text-lg text-justify mb-4 font-body font-bold">A Fantasy Store Experience</p>
                    <p className="text-justify font-body mb-4">The <span className="text-blue-400 font-bold">Adventurers Armory</span> is a digital <span className="text-blue-400 font-bold">Fantasy Store Experience</span>. It was made in <span className="text-blue-400 font-bold">Vue</span> as a fun <span className="text-blue-400 font-bold">hobby project</span>. I came up with the idea of creating a fictional webshop for fun, which evolved into the project you are seeing right now. It features a <span className="text-blue-400 font-bold">loading screen</span>, a <span className="text-blue-400 font-bold">landing page</span>, a <span className="text-blue-400 font-bold">storefront</span> with over 30 unique items and a <span className="text-blue-400 font-bold">detail page</span> with unique descriptions for each item. The website also features an <span className="text-blue-400 font-bold">audio system</span> with <span className="text-blue-400 font-bold">sound effects</span> and different <span className="text-blue-400 font-bold">background tracks</span> to listen to. It also includes a <span className="text-blue-400 font-bold">full-screen button</span> which enables users to get the full experience.</p>
                    <a href="https://github.com/Mathijs-04/The-Adventurers-Armory" className='text-lg font-body font-bold underline text-blue-400' target="_blank" rel="noreferrer">Link to the GitHub Repository</a>
                    <br/>
                    <div className='mt-4'></div>
                    <a href="https://mathijs-04.github.io/The-Adventurers-Armory/" className='text-lg font-body font-bold underline text-blue-400' target="_blank" rel="noreferrer">Link to The Adventurers Armory</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectAdventurersArmory;
