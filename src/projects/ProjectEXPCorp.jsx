import React from 'react';

function ProjectEXPCorp() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">EXPCorp.</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/exp-corp.webp" alt="EXPCorp." className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A fictional company website specialized in digital experiences</p>
                    <p className="text-justify">EXPCorp. is a website which offers virtual experiences to the elderly. It offers nine unique experiences which can be used with a VR-headset or just on your computer. The website also features a product page and an interactive question system to determine which VR-Gear suits you best.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectEXPCorp;
