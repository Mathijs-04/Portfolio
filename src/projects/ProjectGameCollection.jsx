import React from 'react';

function ProjectGameCollection() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Full-Stack Game Collection</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/game-collection.webp" alt="Full-Stack Game Collection" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A MERN stack project with a separated Front- and Back-End</p>
                    <p className="text-justify">This project is a full-stack game collection built with the MERN stack. It features a separated front-end and back-end, providing a robust and scalable architecture.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectGameCollection;
