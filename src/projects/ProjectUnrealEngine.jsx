import React from 'react';

function ProjectUnrealEngine() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Unreal Engine 5</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/unreal-engine.webp" alt="Unreal Engine 5" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A 3D game prototype built in Unreal Engine 5</p>
                    <p className="text-justify">This Unreal Engine 5 environment is my first project in Unreal Engine. I wanted to learn more about Unreal Engine 5 and 3D-Development, so I built this forest environment with castles in it. While making this environment I experimented with various tools and techniques in Unreal Engine 5, like Nanite, Lumen, Landscaping, Modular Design and the UE5 Blueprint system. During this project I followed the Unreal Engine 5 Beginner Tutorial by Unreal Sensei. I highly recommend this free starter course to anyone who wants to learn Unreal Engine 5. You can find the full course on YouTube.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectUnrealEngine;
