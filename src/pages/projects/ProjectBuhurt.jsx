import { useNavigate } from "react-router";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectBuhurt() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/buhurt.webp",
        "/Portfolio/buhurt-2.webp",
        "/Portfolio/buhurt-3.webp",
        "/Portfolio/buhurt-4.webp",
        "/Portfolio/buhurt-5.webp",
        "/Portfolio/buhurt-6.webp",
        "/Portfolio/buhurt-7.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">Buhurt</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Buhurt" />
                    <div className="flex space-x-3 mb-4">
                        <SiHtml5 className="text-2xl text-blue-400" />
                        <SiCss3 className="text-2xl text-blue-400" />
                        <SiJavascript className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        A tribute to the greatest sport of all time
                    </p>
                    <p className="text-justify font-body mb-4">
                        This website is a tribute to my favourite sport of all time: <Highlight>Buhurt</Highlight>.
                        Wondering what Buhurt is? Then this website is the place to find out! It covers the <Highlight>rules</Highlight>, the <Highlight>weapons</Highlight> and the{" "}
                        <Highlight>armor</Highlight> that make this full-contact medieval combat sport so special.
                    </p>
                    <p className="text-justify font-body mb-4">
                        The entire site is built with plain <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight> and{" "}
                        <Highlight>JavaScript</Highlight>, without any frameworks. Besides the informational pages, it
                        features an <Highlight>interactive battle simulation</Highlight> and a{" "}
                        <Highlight>photo collection</Highlight>. Go check it out through the links below and learn more
                        about this amazing sport!
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/Buhurt">
                        Link to the GitHub Repository
                    </ExternalLink>
                    <br />
                    <div className="mt-4"></div>
                    <ExternalLink href="https://mathijs-04.github.io/Buhurt/">Link to Buhurt</ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectBuhurt;
