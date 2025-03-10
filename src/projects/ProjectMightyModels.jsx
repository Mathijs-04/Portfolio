import React from 'react';

function ProjectMightyModels() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Mighty Models</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <img src="/mighty-models.webp" alt="Mighty Models" className="project-image rounded-lg mb-4"/>
                    <p className="text-lg text-justify mb-4">A Laravel website where users share their miniatures</p>
                    <p className="text-justify">Mighty Models is a website for showcasing your miniature models to the world. You can view and like models from other users and upload your own models to the website. Mighty Models was made using PHP framework Laravel for the course Programming 5. The website features a login system, a like system and a post system. Users can delete and edit their own posts, and the admin has the authority to hide posts. This website only works while the PHP server is hosted, so unfortunately it is not available at the moment.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectMightyModels;
