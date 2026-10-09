import { useNavigate } from "react-router";
import { FaLaravel, FaDatabase } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectOpenHiring() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/open-hiring.webp",
        "/Portfolio/open-hiring-2.webp",
        "/Portfolio/open-hiring-3.webp",
        "/Portfolio/open-hiring-4.webp",
        "/Portfolio/open-hiring-5.webp",
        "/Portfolio/open-hiring-6.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">Open Hiring</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Open Hiring" />
                    <div className="flex space-x-3 mb-4">
                        <FaLaravel className="text-2xl text-blue-400" />
                        <SiTailwindcss className="text-2xl text-blue-400" />
                        <FaDatabase className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        A Laravel-based job listing platform for inclusive hiring
                    </p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>The Open Hiring Project</Highlight> was one of the most challenging, but also fun
                        projects I have worked on so far. Open Hiring was developed for none other than digital agency{" "}
                        <Highlight>iO Digital</Highlight>. iO gave us the challenge to work on an unconventional
                        application platform for <Highlight>inclusive hiring</Highlight>. With Open Hiring, you skip the
                        traditional application process and get to work right away. Our employer-focused version of the
                        Open Hiring system was developed in just 15 days in a team of five students. The website uses{" "}
                        <Highlight>Laravel</Highlight>, <Highlight>Tailwind</Highlight>, and{" "}
                        <Highlight>SQLite</Highlight>, and features an extended login system, company pages system,
                        vacancy posting system, an employee invite system, and lastly a vacancy overview. I enjoyed
                        overcoming the challenges this project posed, and am thankful for getting to work on this
                        project.
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/TLE1-Agency">
                        Link to the GitHub Repository
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectOpenHiring;
