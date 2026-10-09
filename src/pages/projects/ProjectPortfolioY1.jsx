import { useNavigate } from "react-router";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectPortfolioY1() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/portfolio-y1.webp",
        "/Portfolio/portfolio-y1-2.webp",
        "/Portfolio/portfolio-y1-3.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">Year 1 Portfolio</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Year 1 Portfolio" />
                    <div className="flex space-x-3 mb-4">
                        <SiHtml5 className="text-2xl text-blue-400" />
                        <SiCss3 className="text-2xl text-blue-400" />
                        <SiJavascript className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        A collection of my first-year projects
                    </p>
                    <p className="text-justify font-body mb-4">
                        This was my previous <Highlight>portfolio website</Highlight>, which I used before making my
                        current one. This portfolio showcased most of my first-year projects and some of my second-year
                        projects I had worked on. This website was made entirely in plain <Highlight>HTML</Highlight>,{" "}
                        <Highlight>CSS</Highlight>, and <Highlight>JavaScript</Highlight>. One of the main reasons I
                        decided to make a new portfolio was to challenge myself to build my portfolio using more
                        advanced <Highlight>web development</Highlight> tools and techniques.
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/Jaar-1-Portfolio">
                        Link to the GitHub Repository
                    </ExternalLink>
                    <br />
                    <div className="mt-4"></div>
                    <ExternalLink href="https://mathijs-04.github.io/Jaar-1-Portfolio/">
                        Link to my year 1 portfolio
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectPortfolioY1;
