import React from 'react';
import {FaReact} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectPortfolio() {
    const carouselImages = ['/portfolio.webp', '/portfolio-2.webp', '/portfolio-3.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Portfolio</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-2xl text-blue-400"/>
                        <SiTailwindcss className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">A showcase of my work and skills, built with React and Tailwind</p>
                    <p className="text-justify font-body mb-4">This portfolio website is a collection of my favorite projects, my experience so far, and some personal information. The base of this project consists of <span className="text-blue-400 font-bold">React</span> and <span className="text-blue-400 font-bold">Tailwind</span>, but I have experimented with implementing some cool extras. I have tried out some new techniques, like using a JavaScript <span className="text-blue-400 font-bold">Typewriter</span> package, using an animated gradient background, making image carousels and importing various <span className="text-blue-400 font-bold">Icons</span> through <span className="text-blue-400 font-bold">React</span>. Besides creating a place to show my work, this portfolio was also intended to explore the possibilities of <span className="text-blue-400 font-bold">web development</span>.</p>
                    <a href="https://github.com/Mathijs-04/Portfolio" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectPortfolio;
