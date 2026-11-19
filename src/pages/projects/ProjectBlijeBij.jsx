import { useNavigate } from "react-router";
import { FaReact } from "react-icons/fa";
import { SiExpo, SiExpress } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectBlijeBij() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/tuin.webp",
        "/Portfolio/tuin-2.webp",
        "/Portfolio/tuin-3.webp",
        "/Portfolio/tuin-4.webp",
        "/Portfolio/tuin-5.webp",
        "/Portfolio/tuin-6.webp",
        "/Portfolio/tuin-7.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">De Blije Bij</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="De Blije Bij" />
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-blue-500 text-2xl" />
                        <SiExpo className="text-2xl text-blue-400" />
                        <SiExpress className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        The app for sustainable gardens
                    </p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>De Blije Bij</Highlight> is a{" "}
                        <Highlight>sustainability-focused garden app</Highlight> built with{" "}
                        <Highlight>React Native</Highlight> and <Highlight>Expo Go</Highlight>. It helps users make
                        their gardens more eco-friendly with advice based on the size, plants, amount of light and soil
                        type of their garden.
                    </p>
                    <p className="text-justify font-body mb-4">
                        Users can design their own garden with our <Highlight>grid system</Highlight>, view statistics
                        on its sustainability, and discover new plants in a built-in{" "}
                        <Highlight>plant encyclopedia</Highlight>. All plant data is fetched through a custom-made{" "}
                        <Highlight>Express API</Highlight>. The app was made for a school project about{" "}
                        <Highlight>sustainable start-ups</Highlight> and was developed in a team of six students.
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/TLE-STARTUP">
                        Link to the GitHub Repository
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectBlijeBij;
