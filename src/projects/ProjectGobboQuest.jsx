import React from 'react';

function ProjectGobboQuest() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Gobbo Quest</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/gobbo-quest.webp" alt="Gobbo Quest" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A web-based RPG, made in a single day</p>
                    <p className="text-justify">Gobbo Quest is a Top-Down Arcade Game made with Makecode Arcade. This Game was made in a few hours with three other students as an introduction to the course Game Development. Gobbo Quest is a short Top Down Dungeon Crawler in which you have to explore a dungeon, kill enemies and defeat the Boss. Gobbo Quest works on both PC and Mobile and runs in the browser.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectGobboQuest;
