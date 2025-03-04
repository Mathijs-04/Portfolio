import React from 'react';

function ProjectMightyModels() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Mighty Models</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/public/mighty-models.webp" alt="Mighty Models" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A Laravel website where users share their miniatures</p>
                    <p className="text-justify">Mighty Models is a Laravel-based website where users can share their miniature models. It features user authentication, image uploads, and a community-driven content system.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectMightyModels;
