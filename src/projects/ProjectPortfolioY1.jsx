import React from 'react';

function ProjectPortfolioY1() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Year 1 Portfolio</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/portfolio-y1.webp" alt="Year 1 Portfolio" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A collection of my first-year projects</p>
                    <p className="text-justify">This was my previous portfolio website, which I used before making my current one. This portfolio showcased most of my first-year projects and some of my second-year projects I had worked on. This website was made entirely in plain <span className="text-blue-400 font-bold">HTML</span>, <span className="text-blue-400 font-bold">CSS</span>, and <span className="text-blue-400 font-bold">JavaScript</span>. One of the main reasons I decided to make a new portfolio was to challenge myself to build my portfolio using more advanced <span className="text-blue-400 font-bold">web development</span> tools and techniques.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectPortfolioY1;
