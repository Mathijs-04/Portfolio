import React from 'react';

function ProjectGameCollection() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Full-Stack Game Collection</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/game-collection.webp" alt="Full-Stack Game Collection" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A MERN-stack collection with a dedicated Front- and Back-End</p>
                    <p className="text-justify">The <span className="text-blue-400 font-bold">Full-Stack Game Collection</span> is one of the latest projects I have worked on. The goal of this project was to learn more about the differences between <span className="text-blue-400 font-bold">Front-End</span> and <span className="text-blue-400 font-bold">Back-End</span> web development. This project uses <span className="text-blue-400 font-bold">React.js</span> and <span className="text-blue-400 font-bold">Tailwind CSS</span> as the most important Front-End components. The Back-End consists of <span className="text-blue-400 font-bold">Node.js</span>, <span className="text-blue-400 font-bold">MongoDB</span>, and <span className="text-blue-400 font-bold">Express</span>. By combining the Front-End and Back-End, I have created a website that stores data of popular video games. The game data is stored by the Back-End and retrieved and visualized by the Front-End. Even though the final product itself doesn't look too spectacular, I think this project was one of the most educational projects I have worked on so far.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectGameCollection;
