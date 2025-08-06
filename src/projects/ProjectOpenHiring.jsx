import { FaLaravel, FaDatabase } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectOpenHiring() {
    const carouselImages = ['/Portfolio/open-hiring.webp', '/Portfolio/open-hiring-2.webp', '/Portfolio/open-hiring-3.webp', '/Portfolio/open-hiring-4.webp', '/Portfolio/open-hiring-5.webp', '/Portfolio/open-hiring-6.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Open Hiring</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaLaravel className="text-2xl text-blue-400"/>
                        <SiTailwindcss className="text-2xl text-blue-400"/>
                        <FaDatabase className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">A Laravel-based job listing platform for inclusive hiring</p>
                    <p className="text-justify font-body mb-4"><span className="text-blue-400 font-bold">The Open Hiring Project</span> was one of the most challenging, but also fun projects I have worked on so far. <span className="text-blue-400 font-bold">Open Hiring</span> was developed for none other than digital agency <span className="text-blue-400 font-bold">IO Digital</span>. <span className="text-blue-400 font-bold">IO</span> gave us the challenge to work on an unconventional application platform for inclusive hiring. With <span className="text-blue-400 font-bold">Open Hiring</span>, you skip the traditional application process and get to work right away. Our employer-focused version of the <span className="text-blue-400 font-bold">Open Hiring system</span> was developed in just 15 days in a team of five students. The website uses <span className="text-blue-400 font-bold">Laravel</span>, <span className="text-blue-400 font-bold">Tailwind</span>, and <span className="text-blue-400 font-bold">SQLite</span>, and features an extended <span className="text-blue-400 font-bold">login system</span>, <span className="text-blue-400 font-bold">company pages system</span>, <span className="text-blue-400 font-bold">vacancy posting system</span>, an <span className="text-blue-400 font-bold">employee invite system</span>, and lastly a <span className="text-blue-400 font-bold">vacancy overview</span>. I enjoyed overcoming the challenges this project posed, and am thankful for getting to work on this project.</p>
                    <a href="https://github.com/Mathijs-04/TLE1-Agency" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectOpenHiring;
