import React from 'react';
import {FaReact} from "react-icons/fa";
import CarouselComponent from "../ProjectCarousel.jsx";
import {SiExpress} from "react-icons/si";

function ProjectBlijeBij() {
    const carouselImages = ['/Portfolio/tuin.webp', '/Portfolio/tuin-2.webp', '/Portfolio/tuin-3.webp', '/Portfolio/tuin-4.webp' , '/Portfolio/tuin-5.webp', '/Portfolio/tuin-6.webp', '/Portfolio/tuin-7.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">De Blije Bij</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-blue-500 text-2xl" />
                        <SiExpress className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">The app for sustainable gardens</p>
                    <p className="text-justify font-body mb-4">
                        <span className="text-blue-400 font-bold">De Blije Bij</span> is a <span className="text-blue-400 font-bold">sustainability-focused garden app</span> built with <span className="text-blue-400 font-bold">React Native</span> and <span className="text-blue-400 font-bold">Expo Go</span>. The app helps users make their gardens more <span className="text-blue-400 font-bold">eco-friendly</span> by offering <span className="text-blue-400 font-bold">sustainable advice</span> based on the <span className="text-blue-400 font-bold">size</span>, <span className="text-blue-400 font-bold">types of plants</span>, <span className="text-blue-400 font-bold">amount of light</span> and <span className="text-blue-400 font-bold">soil type</span> of their garden. Users can <span className="text-blue-400 font-bold">design their own garden</span> using our <span className="text-blue-400 font-bold">grid system</span>, view <span className="text-blue-400 font-bold">statistics</span> on the sustainability of their garden, and discover new plants in a built-in <span className="text-blue-400 font-bold">plant encyclopedia</span>. All plant data is fetched through a <span className="text-blue-400 font-bold">custom-made Express API</span>. The app was made for a <span className="text-blue-400 font-bold">school project</span> about <span className="text-blue-400 font-bold">sustainable start-ups</span> and was developed in a <span className="text-blue-400 font-bold">team of six students</span>                    </p>
                    <a href="https://github.com/Mathijs-04/TLE-STARTUP" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectBlijeBij;
