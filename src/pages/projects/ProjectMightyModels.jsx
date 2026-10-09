import { useNavigate } from "react-router";
import { FaLaravel, FaDatabase } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectMightyModels() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/mighty-models.webp",
        "/Portfolio/mighty-models-2.webp",
        "/Portfolio/mighty-models-3.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">Mighty Models</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Mighty Models" />
                    <div className="flex space-x-3 mb-4">
                        <FaLaravel className="text-2xl text-blue-400" />
                        <SiTailwindcss className="text-2xl text-blue-400" />
                        <FaDatabase className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        A Laravel website where users share their tabletop miniatures
                    </p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>Mighty Models</Highlight> is a website for showcasing your{" "}
                        <Highlight>miniature models</Highlight> to the world. This was the first ever{" "}
                        <Highlight>Laravel</Highlight> project I worked on. It was also one of my first experiences with{" "}
                        <Highlight>Tailwind</Highlight>. For data storage, I have used an <Highlight>SQLite</Highlight>{" "}
                        database. On Mighty Models, you can view and like models from other users and upload your own
                        models to the website. It also features a login system, a like system, and a post system. Users
                        can delete and edit their own posts, and the admin has the authority to hide posts. Mighty
                        Models is one of my favorite projects I have worked on, not only because I like the end result,
                        but also because I have learned a lot about web development and frameworks during the process.
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/PRG5-Eindopdracht">
                        Link to the GitHub Repository
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectMightyModels;
