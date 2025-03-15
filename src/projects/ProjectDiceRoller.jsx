import React from 'react';
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectDiceRoller() {
    const carouselImages = ['/dice-roller.webp', '/dice-roller.webp', '/dice-roller.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">WARHAMMER Dice Roller</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <SiHtml5 className="text-2xl text-blue-400"/>
                        <SiCss3 className="text-2xl text-blue-400"/>
                        <SiJavascript className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">An online dice rolling tool for Wargaming enthusiasts</p>
                    <p className="text-justify font-body mb-4"><strong className='text-[#60A5FA] font-semibold'>WARHAMMER Dice Roller</strong> is a simple online tool to roll many dice at once. I was inspired to work on this small hobby project because of my own frustrations during the <strong className='text-[#60A5FA] font-semibold'>WARHAMMER Tabletop Game</strong>. When playing <strong className='text-[#60A5FA] font-semibold'>WARHAMMER</strong>, players have to roll a lot of dice, and it can be quite time-consuming. I wanted to ease the pain by creating a simple website to roll a lot of dice at once. By using the online <strong className='text-[#60A5FA] font-semibold'>WARHAMMER Dice Roller</strong>, you spend less time rolling dice, and more time conquering the world! This simple website was developed using <strong className='text-[#60A5FA] font-semibold'>HTML</strong>, <strong className='text-[#60A5FA] font-semibold'>CSS</strong>, and <strong className='text-[#60A5FA] font-semibold'>JavaScript</strong>, and works on both <strong className='text-[#60A5FA] font-semibold'>PC</strong> and <strong className='text-[#60A5FA] font-semibold'>Mobile</strong>.</p>
                    <a href="https://github.com/Mathijs-04/Dice-Roller" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                    <br/>
                    <div className='mt-4'></div>
                    <a href="https://mathijs-04.github.io/Dice-Roller/" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the Dice Roller</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectDiceRoller;
