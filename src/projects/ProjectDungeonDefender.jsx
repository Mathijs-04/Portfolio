import React from 'react';

function ProjectDungeonDefender() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Dungeon Defender</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/dungeon-defender.webp" alt="Dungeon Defender" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A browser-based game built with Excalibur.js</p>
                    <p className="text-justify">Dungeon Defender is a 2D Arcade Game made with JavaScript in Excalibur.js for the course Programming 4. In Dungeon Defender, the goal is to fight off as many enemies as possible and defend the dungeon. Killing enemies gives you more points. When you are hit three times, you die and will have to try again. Excalibur.js games run in your browser, so no downloads are required.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectDungeonDefender;
