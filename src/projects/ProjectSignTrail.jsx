import React from 'react';
import {FaDatabase, FaReact} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import CarouselComponent from "../ProjectCarousel.jsx";
import ExcaliburLogo from "/excalibur-logo-blue.webp";
import {IoIosGitNetwork} from "react-icons/io";

const ExcaliburIcon = () => <img src={ExcaliburLogo} alt="Excalibur.js Logo" className="w-8 h-8 relative -top-1"/>;

function ProjectSignTrail() {
    const carouselImages = ['/Portfolio/sign-trail.webp', '/Portfolio/sign-trail-2.webp', '/Portfolio/sign-trail-3.webp', '/Portfolio/sign-trail-4.webp', '/Portfolio/sign-trail-5.webp', '/Portfolio/sign-trail-6.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">SignTrail</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-2xl text-blue-400"/>
                        <SiTailwindcss className="text-2xl text-blue-400"/>
                        <FaDatabase className="text-2xl text-blue-400"/>
                        <IoIosGitNetwork className="text-2xl text-blue-400"/>
                        <ExcaliburIcon/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">An educational sign language game for students</p>
                    <p className="text-justify font-body mb-4">
                        <span className="text-blue-400 font-bold">SignTrail</span> is an educational game made for students learning <span className="text-blue-400 font-bold">sign language</span>. In our game, your goal is to help your snail reach the finish as fast as possible by doing the right sign language gestures. Our application features a <span className="text-blue-400 font-bold">difficulty system</span>, <span className="text-blue-400 font-bold">personal scoreboard</span>, <span className="text-blue-400 font-bold">gesture overview page</span> and <span className="text-blue-400 font-bold">official school login</span>, to make sure it is only accessible for actual students. During this project, we worked with a separate <span className="text-blue-400 font-bold">Front-End</span> and <span className="text-blue-400 font-bold">Back-End</span> team. I was part of the <span className="text-blue-400 font-bold">Front-End</span> team, and was responsible for making our website and game. One of the biggest challenges during this project was combining two <span className="text-blue-400 font-bold">JavaScript frameworks</span>, <span className="text-blue-400 font-bold">React</span> & <span className="text-blue-400 font-bold">Excalibur</span>, into a single product. It took some effort to get there, but in the end, we made it work!
                    </p>
                    <a href="https://github.com/Mathijs-04/TLE2-Front-End" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectSignTrail;
