import React from 'react';

function ProjectPortfolio() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Portfolio</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/portfolio.webp" alt="Portfolio" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A showcase of my work and skills, built with React and Tailwind</p>
                    <p className="text-justify">This portfolio website is a collection of my favorite projects, my experience so far, and some personal information. The base of this project consists of <span className="text-blue-400 font-bold">React</span> and <span className="text-blue-400 font-bold">Tailwind</span>, but I have experimented with implementing some cool extras. I have tried out some new techniques, like using a JavaScript <span className="text-blue-400 font-bold">Typewriter</span> package, using an animated gradient background, and importing various <span className="text-blue-400 font-bold">Icons</span> through <span className="text-blue-400 font-bold">React</span>. Besides creating a place to show my work, this portfolio was also intended to explore the possibilities of <span className="text-blue-400 font-bold">web development</span>.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectPortfolio;
