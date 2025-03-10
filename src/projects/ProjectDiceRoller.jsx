import React from 'react';

function ProjectDiceRoller() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">WARHAMMER Dice Roller</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/dice-roller.webp" alt="WARHAMMER Dice Roller" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A dice rolling tool for Wargaming enthusiasts</p>
                    <p className="text-justify">A website to roll your Warhammer Dice",
                        projectText: Warhammer Dice Roller is a simple online tool to roll dice. It was created because of my own frustrations during the Warhammer Tabletop Game. During this game, players have to roll a lot of dice, and it can be quite time-consuming. I wanted to make this easier by creating a simple website to roll a lot of dice at once. This website works both on PC and Mobile.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectDiceRoller;
