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
                        <Highlight>fantasy store experience</Highlight>, made in <Highlight>Vue.js</Highlight> as a fun
                        hobby project. What started as the idea of building a fictional webshop for fun evolved into the
                        project you see here.
                    </p>
                    <p className="text-justify font-body mb-4">
                        It features a <Highlight>loading screen</Highlight>, a <Highlight>landing page</Highlight>, a
                        storefront with over 30 unique items, and a <Highlight>detail page</Highlight> with its own
                        description for every item. An <Highlight>audio system</Highlight> adds sound effects and
                        different background tracks, and a full-screen button lets you get the full experience. The
                        interface is built with <Highlight>PrimeVue</Highlight> components.
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
