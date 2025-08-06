import React from 'react';
import CarouselComponent from "../ProjectCarousel.jsx";
import {SiExpress, SiOpenai} from "react-icons/si";
import {FaReact} from "react-icons/fa";

function ProjectFlashcardGenerator() {
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
                        <span className="text-blue-400 font-bold">D&D-GPT</span> is an <span className="text-blue-400 font-bold">AI Dungeon Master</span> for <span className="text-blue-400 font-bold">Dungeons & Dragons 5e</span>, powered by <span className="text-blue-400 font-bold">ChatGPT-3.5</span>. During a school course on <span className="text-blue-400 font-bold">AI Large Language Models</span>, I decided to create my own <span className="text-blue-400 font-bold">AI assistant</span>. To align with my personal interests, I developed an assistant for <span className="text-blue-400 font-bold">Dungeons & Dragons</span>. My <span className="text-blue-400 font-bold">AI</span> has access to the entire <span className="text-blue-400 font-bold">D&D 5e ruleset</span> and an <span className="text-blue-400 font-bold">API</span> that fetches random monsters, enabling it to answer <span className="text-blue-400 font-bold">D&D-related questions</span> and provide <span className="text-blue-400 font-bold">monster data</span> on demand. User <span className="text-blue-400 font-bold">chat history</span> is stored and can be reset with a single click. The <span className="text-blue-400 font-bold">front-end</span> was built using <span className="text-blue-400 font-bold">React</span>, while the <span className="text-blue-400 font-bold">back-end</span>, which communicates with the <span className="text-blue-400 font-bold">OpenAI API</span>, was developed with <span className="text-blue-400 font-bold">Express</span>. During this project, I have learned a lot about how <span className="text-blue-400 font-bold">Large Language Models</span> work, and how easy it is to experiment with them yourself.
                    </p>
                    <a href="https://github.com/Mathijs-04/PRG8-LLM" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectFlashcardGenerator;
