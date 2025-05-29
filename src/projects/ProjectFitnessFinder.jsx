import React from 'react';
import {FaReact} from "react-icons/fa";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectFitnessFinder() {
    const carouselImages = ['/Portfolio/app.webp', '/Portfolio/app-2.webp', '/Portfolio/app-3.webp', '/Portfolio/app-4.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Fitness Finder</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-blue-500 text-2xl" />
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">An app to help you find a gym</p>
                    <p className="text-justify font-body mb-4">
                        <span className="text-blue-400 font-bold">Fitness Finder</span> is my very first <span className="text-blue-400 font-bold">native app</span> and was made using <span className="text-blue-400 font-bold">React Native</span> and <span className="text-blue-400 font-bold">Expo Go</span>. Fitness Finder gives you an overview of <span className="text-blue-400 font-bold">gyms near your location</span>, and helps you navigate to them. The app offers a <span className="text-blue-400 font-bold">list view</span> of every single <span className="text-blue-400 font-bold">Basic-Fit</span> in the Netherlands, and allows you to add them to your <span className="text-blue-400 font-bold">favorites list</span>. When selecting a gym, it is shown on the <span className="text-blue-400 font-bold">map</span>, and a <span className="text-blue-400 font-bold">compass</span> guides you to the location. In the <span className="text-blue-400 font-bold">settings page</span>, the user can switch to <span className="text-blue-400 font-bold">dark mode</span>, or translate the app from <span className="text-blue-400 font-bold">English</span> to either <span className="text-blue-400 font-bold">Dutch</span> or <span className="text-blue-400 font-bold">German</span>. This project was mostly intended to learn more about <span className="text-blue-400 font-bold">mobile development</span>, and test out some cool features like <span className="text-blue-400 font-bold">biometric security</span>, <span className="text-blue-400 font-bold">offline mode</span> and <span className="text-blue-400 font-bold">user location</span>.
                    </p>
                    <a href="https://github.com/Mathijs-04/PRG7" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectFitnessFinder;
