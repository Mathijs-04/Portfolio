import React from 'react';
import CarouselComponent from "../ProjectCarousel.jsx";
import {SiExpress, SiOpenai} from "react-icons/si";
import {FaReact} from "react-icons/fa";

function ProjectDNDGPT() {
    const carouselImages = ['/Portfolio/dnd-gpt.webp', '/Portfolio/dnd-gpt-2.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">D&D-GPT</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-blue-500 text-2xl" />
                        <SiOpenai className="text-blue-500 text-2xl" />
                        <SiExpress className="text-blue-500 text-2xl" />
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">Your AI Dungeon Master</p>
                    <p className="text-justify font-body mb-4">
                        I am currently working on some very interesting projects which are not yet finished. These projects will be added to my portfolio soon, but I can already share some details about them. The first project I am working on is my first app in <span className="text-blue-400 font-bold">React Native</span> using <span className="text-blue-400 font-bold">Expo</span>. This app will have some very cool features, like <span className="text-blue-400 font-bold">live location tracking</span>, <span className="text-blue-400 font-bold">notification services</span>, <span className="text-blue-400 font-bold">biometric security</span> and an <span className="text-blue-400 font-bold">offline mode</span>. Another project I am working on is my very own <span className="text-blue-400 font-bold">Neural Network</span>, used to make accurate predictions based on <span className="text-blue-400 font-bold">gestures</span> tracked by a <span className="text-blue-400 font-bold">webcam</span>. The final project I am currently working on involves a self-made <span className="text-blue-400 font-bold">Large Language Model</span>. This is all I can share for now, but keep an eye out for the latest updates on these projects!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectDNDGPT;
