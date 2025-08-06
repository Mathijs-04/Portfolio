import React from 'react';
import CarouselComponent from "../ProjectCarousel.jsx";
import {FaVuejs} from "react-icons/fa";
import {IoIosGitNetwork} from "react-icons/io";

function ProjectFlashcardGenerator() {
    const carouselImages = ['/Portfolio/flashcard-generator.webp', '/Portfolio/flashcard-generator-2.webp', '/Portfolio/flashcard-generator-3.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Flashcard Generator</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaVuejs className="text-blue-500 text-2xl" />
                        <IoIosGitNetwork className="text-blue-500 text-2xl" />
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">An AI-powered flashcard generator in Vue.js</p>
                    <p className="text-justify font-body mb-4">
                        This simple application generates a <span className="text-blue-400 font-bold">flashcard-style</span> question and answer based on a topic of your choice. This project was made using the <span className="text-blue-400 font-bold">Vue.js</span> framework and <span className="text-blue-400 font-bold">HuggingFace&#39;s</span> model <span className="text-blue-400 font-bold">Mistral-7B-Instruct-v0.2</span>. I started this project to learn the basics of the <span className="text-blue-400 font-bold">Vue.js</span> framework and experiment with running a <span className="text-blue-400 font-bold">LLM</span> locally. The model I chose for this project is downloaded and cached in the user&#39;s browser and uses <span className="text-blue-400 font-bold">WebGPU</span> to run. The more powerful your <span className="text-blue-400 font-bold">GPU</span>, the faster the flashcards will be generated. Since the entire model needs to be downloaded locally, the first load takes a lot longer than usual. After that, the model is cached and will load much quicker. Since the model is running locally in your browser, none of the input data will be stored. Not all browsers support <span className="text-blue-400 font-bold">WebGPU</span>, but it is supported by most popular browsers like <span className="text-blue-400 font-bold">Chrome</span>, <span className="text-blue-400 font-bold">Edge</span>, <span className="text-blue-400 font-bold">Firefox</span>, and <span className="text-blue-400 font-bold">Safari</span>. Since this is a relatively simple model and I haven&#39;t yet been able to make my <span className="text-blue-400 font-bold">prompt engineering</span> watertight, the quality of the flashcard varies greatly based on the topic, and sometimes it outright refuses to generate one. You could also convince the model to break the rules and generate content other than flashcards, so I suggest you try and experiment a bit with it!
                    </p>
                    <a href="https://github.com/Mathijs-04/Vue.js-Flashcards" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                    <br/>
                    <div className='mt-4'></div>
                    <a href="https://mathijs-04.github.io/Vue.js-Flashcards/" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the Flashcard Generator</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectFlashcardGenerator;
