import React from 'react';
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectPortfolioY1() {
    const carouselImages = ['/Portfolio/portfolio-y1.webp', '/Portfolio/portfolio-y1-2.webp', '/Portfolio/portfolio-y1-3.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Year 1 Portfolio</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <SiHtml5 className="text-2xl text-blue-400"/>
                        <SiCss3 className="text-2xl text-blue-400"/>
                        <SiJavascript className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">A collection of my first-year projects</p>
                    <p className="text-justify font-body mb-4">This was my previous <span className="text-blue-400 font-bold">portfolio website</span>, which I used before making my current one. This portfolio showcased most of my <span className="text-blue-400 font-bold">first-year</span> projects and some of my <span className="text-blue-400 font-bold">second-year</span> projects I had worked on. This website was made entirely in plain <span className="text-blue-400 font-bold">HTML</span>, <span className="text-blue-400 font-bold">CSS</span>, and <span className="text-blue-400 font-bold">JavaScript</span>. One of the main reasons I decided to make a new portfolio was to challenge myself to build my portfolio using more advanced <span className="text-blue-400 font-bold">webdevelopment</span> tools and techniques.</p>
                    <a href="https://github.com/Mathijs-04/Jaar-1-Portfolio" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                    <br/>
                    <div className='mt-4'></div>
                    <a href="https://mathijs-04.github.io/Jaar-1-Portfolio/" className='text-lg font-body font-bold underline text-blue-400 mt-4' target="_blank">Link to my year 1 portfolio</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectPortfolioY1;
