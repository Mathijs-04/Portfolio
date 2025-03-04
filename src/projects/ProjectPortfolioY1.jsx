import React from 'react';

function ProjectPortfolioY1() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Year 1 Portfolio</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/public/portfolio-y1.webp" alt="Year 1 Portfolio" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A collection of my first-year projects</p>
                    <p className="text-justify">This project is a collection of my first-year projects, showcasing my early work and progress in web development. It includes various projects built with HTML, CSS, and JavaScript.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectPortfolioY1;
