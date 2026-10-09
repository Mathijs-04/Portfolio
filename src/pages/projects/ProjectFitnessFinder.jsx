import { useNavigate } from "react-router";
import { FaReact } from "react-icons/fa";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectFitnessFinder() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/app.webp",
        "/Portfolio/app-2.webp",
        "/Portfolio/app-3.webp",
        "/Portfolio/app-4.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">Fitness Finder</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Fitness Finder" />
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-blue-500 text-2xl" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">An app to help you find a gym</p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>Fitness Finder</Highlight> is my very first <Highlight>native app</Highlight> and was
                        made using <Highlight>React Native</Highlight> and <Highlight>Expo Go</Highlight>. Fitness
                        Finder gives you an overview of gyms near your location, and helps you navigate to them. The app
                        offers a list view of every single <Highlight>Basic-Fit</Highlight> in the Netherlands, and
                        allows you to add them to your favorites list. When selecting a gym, it is shown on the map, and
                        a compass guides you to the location. In the settings page, the user can switch to dark mode, or
                        translate the app from English to either Dutch or German. This project was mostly intended to
                        learn more about mobile development, and test out some cool features like biometric security,
                        offline mode and user location.
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/PRG7">Link to the GitHub Repository</ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectFitnessFinder;
