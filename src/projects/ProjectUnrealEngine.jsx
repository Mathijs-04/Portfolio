import React from 'react';
import { SiUnrealengine } from "react-icons/si";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectUnrealEngine() {
    const carouselImages = ['/unreal-engine.webp', '/unreal-engine.webp', '/unreal-engine.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Unreal Engine 5</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages} />
                    <div className="flex space-x-3 mb-4">
                        <SiUnrealengine className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">A 3D landscape built in Unreal Engine 5</p>
                    <p className="text-justify font-body">This Unreal Engine 5 environment is my first ever project in Unreal Engine. I wanted to learn more about <span className="text-blue-400 font-bold">Unreal Engine 5</span> and <span className="text-blue-400 font-bold">3D Development</span>, so I created this fantasy environment with castles in it. While making this environment I experimented with various tools and techniques in <span className="text-blue-400 font-bold">Unreal Engine 5</span>, like <span className="text-blue-400 font-bold">Nanite</span>, <span className="text-blue-400 font-bold">Lumen</span>, <span className="text-blue-400 font-bold">Landscaping</span>, <span className="text-blue-400 font-bold">Modular Design</span>, and the UE5 <span className="text-blue-400 font-bold">Blueprint</span> system. During this project, I followed an <span className="text-blue-400 font-bold">Unreal Engine 5 Beginner Tutorial</span> by Unreal Sensei. I was positively surprised by the amount of possibilities <span className="text-blue-400 font-bold">UE5</span> has, and want to work on more of these projects in the future.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectUnrealEngine;
