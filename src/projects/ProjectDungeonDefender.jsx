import React from 'react';

function ProjectDungeonDefender() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Dungeon Defender</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/dungeon-defender.webp" alt="Dungeon Defender" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A web-based game built with Excalibur.js</p>
                    <p className="text-justify">
                        <strong className="text-[#60A5FA] font-semibold">Dungeon Defender</strong> is a 2D Arcade Game made with <strong className="text-[#60A5FA] font-semibold">JavaScript</strong> in the gaming framework <strong className="text-[#60A5FA] font-semibold">Excalibur.js</strong>. This was the first ever game I developed entirely by myself. In <strong className="text-[#60A5FA] font-semibold">Dungeon Defender</strong>, the goal is to fight off as many enemies as possible and defend the dungeon. Defeating enemies gives you more points. When you are hit three times, the game ends and you will have to try again. <strong className="text-[#60A5FA] font-semibold">Excalibur.js</strong> games run entirely in your browser, so no downloads are required.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectDungeonDefender;
