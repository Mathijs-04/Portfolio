import React from 'react';
import {FaLaravel, FaDatabase} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectMightyModels() {
    const carouselImages = ['/mighty-models.webp', '/mighty-models-2.webp', '/mighty-models-3.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Mighty Models</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaLaravel className="text-2xl text-blue-400"/>
                        <SiTailwindcss className="text-2xl text-blue-400"/>
                        <FaDatabase className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">A Laravel website where users share their tabletop miniatures</p>
                    <p className="text-justify font-body mb-4"><span className="text-blue-400 font-bold">Mighty Models</span> is a website for showcasing your <span className="text-blue-400 font-bold">miniature models</span> to the world. This was my first ever <span className="text-blue-400 font-bold">Laravel project</span> I worked on. It was also one of my first experiences with <span className="text-blue-400 font-bold">Tailwind CSS</span>. For data storage, I have used an <span className="text-blue-400 font-bold">SQLite database</span>. On <span className="text-blue-400 font-bold">Mighty Models</span>, you can view and like models from other users and upload your own models to the website. It also features a <span className="text-blue-400 font-bold">login system</span>, a <span className="text-blue-400 font-bold">like system</span>, and a <span className="text-blue-400 font-bold">post system</span>. Users can delete and edit their own posts, and the admin has the authority to hide posts. <span className="text-blue-400 font-bold">Mighty Models</span> is one of my <span className="text-blue-400 font-bold">favorite projects</span> I have worked on, not only because I like the end result, but also because I have learned a lot about <span className="text-blue-400 font-bold">web development</span> and frameworks during the process.</p>
                    <a href="https://github.com/Mathijs-04/PRG5-Eindopdracht" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectMightyModels;
