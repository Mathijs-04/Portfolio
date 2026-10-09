import { useNavigate } from "react-router";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectPortfolio() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/portfolio.webp",
        "/Portfolio/portfolio-2.webp",
        "/Portfolio/portfolio-3.webp",
        "/Portfolio/portfolio-4.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">Portfolio</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Portfolio" />
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-2xl text-blue-400" />
                        <SiTailwindcss className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        A showcase of my work and skills
                    </p>
                    <p className="text-justify font-body mb-4">
                        This <Highlight>portfolio website</Highlight> presents a selection of my projects, my professional
                        experience and an overview of my skills. It is also a place where I experiment with modern{" "}
                        <Highlight>web development</Highlight> techniques, and it continues to grow alongside my work.
                    </p>
                    <p className="text-justify font-body mb-4">
                        The site is a single-page application built with <Highlight>React</Highlight> and bundled with{" "}
                        <Highlight>Vite</Highlight>. Navigation between pages is handled by{" "}
                        <Highlight>React Router</Highlight>, and the design is styled with <Highlight>Tailwind CSS</Highlight>{" "}
                        to keep the layout consistent across desktop and mobile devices.
                    </p>
                    <p className="text-justify font-body mb-4">
                        For motion and interactivity, I use <Highlight>Framer Motion</Highlight> for page and scroll
                        animations, the <Highlight>typewriter-effect</Highlight> package for the animated text on the home
                        page, and a custom image carousel with fullscreen viewing. Icons come from{" "}
                        <Highlight>react-icons</Highlight>, and the code is checked
                        with <Highlight>ESLint</Highlight>.
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/Portfolio">
                        Link to the GitHub Repository
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectPortfolio;
