import React from 'react';

function ProjectDiceRoller() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">WARHAMMER Dice Roller</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/dice-roller.webp" alt="WARHAMMER Dice Roller" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A dice rolling tool for Wargaming enthusiasts</p>
                    <p className="text-justify">WARHAMMER Dice Roller is a tool for Wargaming enthusiasts to roll dice. It features a user-friendly interface and accurate dice rolling mechanics.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectDiceRoller;
