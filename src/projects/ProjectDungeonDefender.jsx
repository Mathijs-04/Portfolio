import React from 'react';

function ProjectDungeonDefender() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Dungeon Defender</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/public/dungeon-defender.webp" alt="Dungeon Defender" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A browser-based game built with Excalibur.js</p>
                    <p className="text-justify">Dungeon Defender is a browser-based game built with Excalibur.js. It features engaging gameplay and a responsive design, providing an enjoyable gaming experience.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectDungeonDefender;
