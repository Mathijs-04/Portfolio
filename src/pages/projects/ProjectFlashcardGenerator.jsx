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
                        This simple application generates a flashcard-style question and answer based on a topic of your
                        choice. This project was made using the <Highlight>Vue.js</Highlight> framework and{" "}
                        <Highlight>HuggingFace</Highlight>&#39;s model <Highlight>Mistral-7B-Instruct-v0.2</Highlight>.
                        I started this project to learn the basics of the Vue.js framework and experiment with running a{" "}
                        <Highlight>LLM</Highlight> locally. The model I chose for this project is downloaded and cached
                        in the user&#39;s browser and uses <Highlight>WebGPU</Highlight> to run. The more powerful your
                        GPU, the faster the flashcards will be generated. Since the entire model needs to be downloaded
                        locally, the first load takes a lot longer than usual. After that, the model is cached and will
                        load much quicker. Since the model is running locally in your browser, none of the input data
                        will be stored. Not all browsers support WebGPU, but it is supported by most popular browsers
                        like <Highlight>Chrome</Highlight>, <Highlight>Edge</Highlight>, <Highlight>Firefox</Highlight>,
                        and <Highlight>Safari</Highlight>. Since this is a relatively simple model and I haven&#39;t yet
                        been able to make my prompt engineering watertight, the quality of the flashcard varies greatly
                        based on the topic, and sometimes it outright refuses to generate one. You could also convince
                        the model to break the rules and generate content other than flashcards, so I suggest you try
                        and experiment a bit with it!
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
