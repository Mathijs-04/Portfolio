import { useNavigate } from "react-router";
import { FaVuejs } from "react-icons/fa";
import { IoIosGitNetwork } from "react-icons/io";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectFlashcardGenerator() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/flashcard-generator.webp",
        "/Portfolio/flashcard-generator-2.webp",
        "/Portfolio/flashcard-generator-3.webp",
    ];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 max-md:px-4 text-white">
                <div className="flex items-center gap-4 mb-6">
                    <button
                        onClick={() => navigate("/projects")}
                        className="text-4xl font-panchang font-bold text-white hover:opacity-75 transition-opacity cursor-pointer select-none"
                        title="Back to Projects"
                    >
                        ‹
                    </button>
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">Flashcard Generator</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Flashcard Generator" />
                    <div className="flex space-x-3 mb-4">
                        <FaVuejs className="text-blue-500 text-2xl" />
                        <IoIosGitNetwork className="text-blue-500 text-2xl" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        An AI-powered flashcard generator in Vue.js
                    </p>
                    <p className="text-justify font-body mb-4">
                        This application generates a <Highlight>flashcard-style</Highlight> question and answer on a
                        topic of your choice. I started it to learn the basics of <Highlight>Vue.js</Highlight> and to
                        experiment with running an <Highlight>LLM locally</Highlight>. It uses the{" "}
                        <Highlight>Mistral-7B-Instruct-v0.2</Highlight> model, which is downloaded and cached in your
                        browser and runs on your GPU through <Highlight>WebGPU</Highlight>. Because the model runs
                        locally, none of your input is stored, and a more powerful GPU generates flashcards faster.
                    </p>
                    <p className="text-justify font-body mb-4">
                        The first load takes a while, since the entire model needs to be downloaded, but after that it
                        loads much quicker. WebGPU is supported by most popular browsers, like Chrome, Edge, Firefox and
                        Safari. My <Highlight>prompt engineering</Highlight> isn&apos;t watertight yet, so the quality
                        of the flashcards varies by topic, and sometimes the model refuses outright or can be convinced
                        to break the rules. Feel free to experiment with it!
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/Vue.js-Flashcards">
                        Link to the GitHub Repository
                    </ExternalLink>
                    <br />
                    <div className="mt-4"></div>
                    <ExternalLink href="https://mathijs-04.github.io/Vue.js-Flashcards/">
                        Link to the Flashcard Generator
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectFlashcardGenerator;
