import React from 'react';
import {FaReact, FaDatabase} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectEXPCorp() {
    const carouselImages = ['/Portfolio/exp-corp.webp', '/Portfolio/exp-corp-2.webp', '/Portfolio/exp-corp-3.webp', '/Portfolio/exp-corp-4.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">EXPCorp.</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-2xl text-blue-400"/>
                        <SiTailwindcss className="text-2xl text-blue-400"/>
                        <FaDatabase className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">A fictional company website specialized in VR experiences</p>
                    <p className="text-justify font-body mb-4"><span className="text-blue-400 font-bold">EXPCorp.</span> is a website for a fictional company that offers <span className="text-blue-400 font-bold">virtual experiences</span> to the elderly. This concept was created based on a brainstorming session during which our team shared ideas about <span className="text-blue-400 font-bold">dystopian</span> and <span className="text-blue-400 font-bold">utopian scenarios</span>. We decided to work on a fictional scenario in which <span className="text-blue-400 font-bold">Virtual Reality</span> takes over the world. Our next step was developing a website that suited that scenario, and <span className="text-blue-400 font-bold">EXPCorp.</span> was born. <span className="text-blue-400 font-bold">EXPCorp.</span> offers nine unique <span className="text-blue-400 font-bold">virtual experiences</span> that can be used with or without a <span className="text-blue-400 font-bold">VR headset</span>. The website also features a <span className="text-blue-400 font-bold">product page</span> and an interactive question system to determine which <span className="text-blue-400 font-bold">VR gear</span> suits you best. <span className="text-blue-400 font-bold">EXPCorp.</span> was never intended to be a solution, but rather a means to make people think about the future of technology.</p>
                    <a href="https://github.com/Mathijs-04/TLE1-SPRINT3" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                    <br/>
                    <div className='mt-4'></div>
                    <a href="https://stud.hosted.hr.nl/1068031/TLE1-SPRINT3/index.php" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to EXPCorp.</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectEXPCorp;
