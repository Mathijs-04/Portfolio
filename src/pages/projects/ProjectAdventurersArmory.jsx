import { useNavigate } from "react-router";
import { FaVuejs } from "react-icons/fa";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectAdventurersArmory() {
    const navigate = useNavigate();
    const carouselImages = ["/Portfolio/armory.webp", "/Portfolio/armory-2.webp", "/Portfolio/armory-3.webp"];

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
                        The Adventurers Armory
                    </h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="The Adventurers Armory" />
                    <div className="flex space-x-3 mb-4">
                        <FaVuejs className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">A Fantasy Store Experience</p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>The Adventurers Armory</Highlight> is a digital{" "}
                        <Highlight>Fantasy Store Experience</Highlight>. It was made in <Highlight>Vue.js</Highlight> as
                        a fun hobby project. I came up with the idea of creating a{" "}
                        <Highlight>fictional webshop</Highlight> for fun, which evolved into the project you are seeing
                        right now. It features a loading screen, a landing page, a storefront with over 30 unique items
                        and a detail page with unique descriptions for each item. The website also features an audio
                        system with sound effects and different background tracks to listen to. It also includes a
                        full-screen button which enables users to get the full experience.
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/The-Adventurers-Armory">
                        Link to the GitHub Repository
                    </ExternalLink>
                    <br />
                    <div className="mt-4"></div>
                    <ExternalLink href="https://mathijs-04.github.io/The-Adventurers-Armory/">
                        Link to The Adventurers Armory
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectAdventurersArmory;
