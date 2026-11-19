import { useNavigate } from "react-router";
import { SiThreedotjs } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectBiotopia() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/biotopia.webp",
        "/Portfolio/biotopia-2.webp",
        "/Portfolio/biotopia-3.webp",
        "/Portfolio/biotopia-4.webp",
        "/Portfolio/biotopia-5.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">Biotopia</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Biotopia" />
                    <div className="flex space-x-3 mb-4">
                        <SiThreedotjs className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        An award-winning Hackathon project
                    </p>
                    <p className="text-justify font-body mb-4">
                        Biotopia is a <Highlight>3D web experience</Highlight> built with{" "}
                        <Highlight>Three.js</Highlight> during the <Highlight>Hackathon Immersive Tech 2026</Highlight>{" "}
                        in Rotterdam, where I worked on it for three days in a team of six. It is an educational
                        experience that teaches young people about life in their gardens and the importance of{" "}
                        <Highlight>flowers</Highlight> and <Highlight>insects</Highlight>.
                    </p>
                    <p className="text-justify font-body mb-4">
                        We built it in collaboration with <Highlight>Bioto</Highlight>, the company behind the{" "}
                        <Highlight>Plantenluisteraar</Highlight>: a device that measures environmental data such as
                        light, temperature and moisture. Using a <Highlight>live connection</Highlight> to one of these
                        devices in a real garden in Rotterdam, we created a virtual version of that garden which responds
                        to the measured data. When more moisture is detected, for example, it starts to rain.
                    </p>
                    <p className="text-justify font-body mb-4">
                        To make the garden more immersive, you can also experience it as a{" "}
                        <Highlight>butterfly</Highlight> or a <Highlight>bee</Highlight>. Fly around and land on all
                        kinds of flowers to learn about their role in the ecosystem, or collect nectar as a bee to make
                        honey. With this project, our team won <Highlight>first place</Highlight> in the category{" "}
                        <Highlight>Best Use of Immersive Technology</Highlight>!
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/Hackaton-Immersive-Tech">
                        Link to the GitHub Repository
                    </ExternalLink>
                    <br />
                    <div className="mt-4"></div>
                    <ExternalLink href="https://mathijs-04.github.io/Hackaton-Immersive-Tech/garden/">
                        Link to Biotopia
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectBiotopia;
