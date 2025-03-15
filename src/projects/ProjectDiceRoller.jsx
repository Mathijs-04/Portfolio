import React from 'react';

function ProjectDiceRoller() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">WARHAMMER Dice Roller</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/dice-roller.webp" alt="WARHAMMER Dice Roller" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">An online dice rolling tool for Wargaming enthusiasts</p>
                    <p className="text-justify">
                        <strong className='text-[#60A5FA] font-semibold'>WARHAMMER Dice Roller</strong> is a simple online tool to roll many dice at once. I was inspired to work on this small hobby project because of my own frustrations during the <strong class='text-[#60A5FA] font-semibold'>WARHAMMER Tabletop Game</strong>. When playing <strong class='text-[#60A5FA] font-semibold'>WARHAMMER</strong>, players have to roll a lot of dice, and it can be quite time-consuming. I wanted to ease the pain by creating a simple website to roll a lot of dice at once. By using the online <strong class='text-[#60A5FA] font-semibold'>WARHAMMER Dice Roller</strong>, you spend less time rolling dice, and more time conquering the world! This simple website was developed using <strong class='text-[#60A5FA] font-semibold'>HTML</strong>, <strong class='text-[#60A5FA] font-semibold'>CSS</strong>, and <strong class='text-[#60A5FA] font-semibold'>JavaScript</strong>, and works on both <strong class='text-[#60A5FA] font-semibold'>PC</strong> and <strong class='text-[#60A5FA] font-semibold'>Mobile</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectDiceRoller;
