import { useNavigate } from "react-router";
import { FaReact } from "react-icons/fa";
import { IoIosGitNetwork } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectObject1() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/object1.webp",
        "/Portfolio/object1-2.webp",
        "/Portfolio/object1-3.webp",
        "/Portfolio/object1-4.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">Object_1</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Object_1" />
                    <div className="flex space-x-3 mb-4">
                        <SiJavascript className="text-2xl text-blue-400" />
                        <FaReact className="text-2xl text-blue-400" />
                        <IoIosGitNetwork className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">An AI-driven 3D experiment</p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>Object_1</Highlight> is a <Highlight>digital art experiment</Highlight> involving 3D
                        web design. It was made primarily using <Highlight>React</Highlight> and{" "}
                        <Highlight>WebGL</Highlight>. I came up with this project when I wanted to experiment with{" "}
                        <Highlight>Claude Code</Highlight>&apos;s ability to work with 3D on the web. The entire website
                        was created using a <Highlight>single prompt</Highlight> in Claude Code. It features an abstract
                        3D object that evolves based on the user&apos;s scrolling interaction. It is not supposed to
                        make any sense. Instead, it is designed to evoke a sense of wonder and mystery. Feel free to
                        experience it yourself!
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/Object_01">
                        Link to the GitHub Repository
                    </ExternalLink>
                    <br />
                    <div className="mt-4"></div>
                    <ExternalLink href="https://mathijs-04.github.io/Object_01/">Link to Object_1</ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectObject1;
