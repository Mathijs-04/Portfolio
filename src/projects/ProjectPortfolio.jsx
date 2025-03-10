import React from 'react';

function ProjectPortfolio() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Portfolio</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/portfolio.png" alt="Portfolio" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A showcase of my work and skills, built with React and Tailwind</p>
                    <p className="text-justify">This project is a comprehensive portfolio showcasing my work and skills. It is built with React and Tailwind CSS, providing a modern and responsive design.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectPortfolio;
