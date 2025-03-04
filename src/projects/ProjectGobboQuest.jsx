import React from 'react';

function ProjectGobboQuest() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Gobbo Quest</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/public/gobbo-quest.webp" alt="Gobbo Quest" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A web-based RPG, made in a single day</p>
                    <p className="text-justify">Gobbo Quest is a web-based RPG created in a single day. It features simple gameplay mechanics and a fun, engaging storyline.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectGobboQuest;
