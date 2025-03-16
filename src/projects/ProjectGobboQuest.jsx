import React from 'react';
import { SiJavascript } from "react-icons/si";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectGobboQuest() {
    const carouselImages = ['/gobbo-quest.webp', '/gobbo-quest-2.webp', '/gobbo-quest-3.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Gobbo Quest</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <SiJavascript className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">A simple web-based RPG</p>
                    <p className="text-justify font-body mb-4"><span className="text-blue-400 font-bold">Gobbo Quest</span> is a simple <span className="text-blue-400 font-bold">top-down arcade game</span> made with <span className="text-blue-400 font-bold">MakeCode Arcade</span>. This game was made in a few hours with three other students as an introduction to the <span className="text-blue-400 font-bold">Game Development</span> course. <span className="text-blue-400 font-bold">Gobbo Quest</span> is a short <span className="text-blue-400 font-bold">top-down dungeon crawler</span> in which you have to explore a dungeon, slay enemies, and defeat the <span className="text-blue-400 font-bold">boss</span>. <span className="text-blue-400 font-bold">Gobbo Quest</span> works on both <span className="text-blue-400 font-bold">PC and mobile</span> and runs in the browser. This project was a fun way to explore the basic concepts of <span className="text-blue-400 font-bold">game development</span>.</p>
                    <a href="https://github.com/Mathijs-04/Gobbo-Quest-V2" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                    <br/>
                    <div className='mt-4'></div>
                    <a href="https://makecode.com/_2qvTbVe5JAd3" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to Gobbo Quest</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectGobboQuest;
