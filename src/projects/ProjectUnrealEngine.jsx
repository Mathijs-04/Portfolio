import React from 'react';

function ProjectUnrealEngine() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Unreal Engine 5</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/public/unreal-engine.webp" alt="Unreal Engine 5" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A 3D game prototype built in Unreal Engine 5</p>
                    <p className="text-justify">This project is a 3D game prototype built in Unreal Engine 5. It showcases advanced graphics and gameplay mechanics, providing an immersive gaming experience.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectUnrealEngine;
