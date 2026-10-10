import { useNavigate } from "react-router";
import { FaLaravel, FaVuejs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiPython, SiFastapi, SiOpenai } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectWarhammerRuleAssistant() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/warhammer-rule-assistant.webp",
        "/Portfolio/warhammer-rule-assistant-2.webp",
        "/Portfolio/warhammer-rule-assistant-3.webp",
        "/Portfolio/warhammer-rule-assistant-4.webp",
        "/Portfolio/warhammer-rule-assistant-5.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">
                        Warhammer Rule Assistant
                    </h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Warhammer Rule Assistant" />
                    <div className="flex flex-wrap gap-3 mb-4">
                        <FaLaravel className="text-2xl text-blue-400" />
                        <FaVuejs className="text-2xl text-blue-400" />
                        <SiTailwindcss className="text-2xl text-blue-400" />
                        <SiPython className="text-2xl text-blue-400" />
                        <SiFastapi className="text-2xl text-blue-400" />
                        <SiOpenai className="text-2xl text-blue-400" />
                        <FaDatabase className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        The ultimate rule assistant for Warhammer players
                    </p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>Warhammer Rule Assistant</Highlight> is a tool for Warhammer players who want to
                        spend more time fighting battles and less time searching through rulebooks. I have been working
                        on this application for the past few months as part of my third-year school project. With this
                        tool, users can answer rule-related questions within seconds instead of constantly pausing games
                        to look up specific rules. The application contains vectorized Warhammer rules for both{" "}
                        <Highlight>Age of Sigmar</Highlight> and <Highlight>40,000</Highlight>. When a user asks a
                        question, the relevant vector data is attached to the prompt and sent to an AI model, which
                        generates an answer based on the official rules. Each answer includes a short explanation, a
                        more detailed explanation, and the official source.
                    </p>
                    <p className="text-justify font-body mb-4">
                        The application also features a PDF viewer with official rulebooks, which are connected to
                        answers through highlighted keywords. When a user clicks one of these keywords, they are sent to
                        the correct rulebook and page where that rule is mentioned. Besides answering rules questions,
                        this tool also helps players build ready-to-use armies. The Front-End was built with{" "}
                        <Highlight>Vue.js</Highlight> and <Highlight>Tailwind</Highlight>, while the{" "}
                        <Highlight>Python</Highlight> Back-End uses <Highlight>FastAPI</Highlight> to manage calls to{" "}
                        <Highlight>OpenAI</Highlight> and retrieve vector data. <Highlight>Laravel</Highlight> acts as
                        the bridge between the Front-End and Back-End. This project has been one of the most
                        challenging, but also one of the most fun, projects I have worked on so far!
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/PLE-MVP">
                        Link to the GitHub Repository
                    </ExternalLink>
                    <br />
                    <br />
                    <ExternalLink href="https://mathijs-04.github.io/PLE-Onepager/">
                        Link to Promo Page
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectWarhammerRuleAssistant;
