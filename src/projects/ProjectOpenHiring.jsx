import React from 'react';

function ProjectOpenHiring() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Open Hiring</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/public/open-hiring.webp" alt="Open Hiring" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A Laravel-based job listing platform for inclusive hiring</p>
                    <p className="text-justify">Open Hiring is a Laravel-based job listing platform that promotes inclusive hiring practices. It features job listings, user authentication, and a responsive design.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectOpenHiring;
