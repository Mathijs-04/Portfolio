import { useNavigate } from "react-router";
import { FaVuejs } from "react-icons/fa";
import { SiPython, SiOpenai, SiDocker } from "react-icons/si";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectHostingRecommender() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/hosting-recommender.webp",
        "/Portfolio/hosting-recommender-2.webp",
        "/Portfolio/hosting-recommender-3.webp",
        "/Portfolio/hosting-recommender-4.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">Hosting Recommender</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Hosting Recommender" />
                    <div className="flex space-x-3 mb-4">
                        <FaVuejs className="text-2xl text-blue-400" />
                        <SiPython className="text-2xl text-blue-400" />
                        <SiOpenai className="text-2xl text-blue-400" />
                        <SiDocker className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        A company website which recommends hosting packages
                    </p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>Hosting Recommender</Highlight> is an <Highlight>internal company tool</Highlight>{" "}
                        that helps employees find the right <Highlight>hosting package</Highlight> for customers. Based
                        on the answers to a few simple questions, it recommends the right package, along with pricing
                        and technical specifications. If users don&apos;t understand a question or have additional
                        questions, they can ask the built-in <Highlight>chatbot</Highlight> for help, which is powered
                        by a model from <Highlight>OpenAI</Highlight>.
                    </p>
                    <p className="text-justify font-body mb-4">
                        The Front-End was built with <Highlight>Vue.js</Highlight> and the Back-End uses{" "}
                        <Highlight>Python</Highlight>. I built this tool in a <Highlight>single day</Highlight> as an
                        experiment, but it is now being used throughout the entire company.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectHostingRecommender;
