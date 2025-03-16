import React from 'react';
import {FaReact, FaNodeJs} from "react-icons/fa";
import {SiMongodb, SiExpress, SiTailwindcss} from "react-icons/si";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectGameCollection() {
    const carouselImages = ['/game-collection.webp', '/game-collection-2.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Full-Stack Game Collection</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-2xl text-blue-400"/>
                        <FaNodeJs className="text-2xl text-blue-400"/>
                        <SiMongodb className="text-2xl text-blue-400"/>
                        <SiExpress className="text-2xl text-blue-400"/>
                        <SiTailwindcss className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">A MERN-stack collection with a dedicated Front- and Back-End</p>
                    <p className="text-justify font-body mb-4">The <span className="text-blue-400 font-bold">Full-Stack Game Collection</span> is one of the latest projects I have worked on. The goal of this project was to learn more about the differences between <span className="text-blue-400 font-bold">Front-End</span> and <span className="text-blue-400 font-bold">Back-End</span> web development. This project uses <span className="text-blue-400 font-bold">React.js</span> and <span className="text-blue-400 font-bold">Tailwind CSS</span> as the most important Front-End components. The Back-End consists of <span className="text-blue-400 font-bold">Node.js</span>, <span className="text-blue-400 font-bold">MongoDB</span>, and <span className="text-blue-400 font-bold">Express</span>. By combining the Front-End and Back-End, I have created a website that stores data of popular video games. The game data is stored by the Back-End and retrieved and visualized by the Front-End. Even though the final product itself doesn't look too spectacular, I think this project was one of the most educational projects I have worked on so far.</p>
                    <a href="https://github.com/Mathijs-04/PRG6-Front-End" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the Front-End GitHub Repository</a>
                    <br/>
                    <div className='mt-4'></div>
                    <a href="https://github.com/Mathijs-04/PRG6-Back-End" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the Back-End GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectGameCollection;
