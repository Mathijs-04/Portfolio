import {FaReact, FaNodeJs, FaLaravel, FaDatabase} from "react-icons/fa";
import {SiMongodb, SiTailwindcss, SiUnrealengine, SiJavascript, SiExpress, SiHtml5, SiCss3} from "react-icons/si";
import ExcaliburLogo from "/excalibur-logo-blue.webp";
import {useNavigate} from "react-router";

const ExcaliburIcon = () => <img src={ExcaliburLogo} alt="Excalibur.js Logo" className="w-8 h-8 relative -top-1"/>;

const projects = [
    {
        name: "Portfolio",
        slug: "portfolio",
        description: "A showcase of my work and skills, built with React and Tailwind",
        image: "./public/portfolio.png",
        tech: [FaReact, SiTailwindcss],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Mighty Models",
        slug: "mighty-models",
        description: "A Laravel website where users share their miniatures",
        image: "./public/mighty-models.webp",
        tech: [FaLaravel, SiTailwindcss, FaDatabase],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Full-Stack Game Collection",
        slug: "game-collection",
        description: "A MERN stack project with a separated Front- and Back-End",
        image: "./public/game-collection.webp",
        tech: [FaReact, FaNodeJs, SiMongodb, SiExpress, SiTailwindcss],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Open Hiring",
        slug: "open-hiring",
        description: "A Laravel-based job listing platform for inclusive hiring",
        image: "./public/open-hiring.webp",
        tech: [FaLaravel, SiTailwindcss, FaDatabase],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Dungeon Defender",
        slug: "dungeon-defender",
        description: "A browser-based game built with Excalibur.js",
        image: "./public/dungeon-defender.webp",
        tech: [ExcaliburIcon, SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "EXPCorp.",
        slug: "exp-corp",
        description: "A fictional company website specialized in digital experiences",
        image: "./public/exp-corp.webp",
        tech: [FaReact, SiTailwindcss, FaDatabase],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Year 1 Portfolio",
        slug: "portfolio-y1",
        description: "A collection of my first-year projects",
        image: "./public/portfolio-y1.webp",
        tech: [SiHtml5, SiCss3, SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Unreal Engine 5",
        slug: "unreal-engine",
        description: "A 3D game prototype built in Unreal Engine 5",
        image: "./public/unreal-engine.webp",
        tech: [SiUnrealengine],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "WARHAMMER Dice Roller",
        slug: "dice-roller",
        description: "A dice rolling tool for Wargaming enthusiasts",
        image: "./public/dice-roller.webp",
        tech: [SiHtml5, SiCss3, SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Gobbo Quest",
        slug: "gobbo-quest",
        description: "A web-based RPG, made in a single day",
        image: "./public/gobbo-quest.webp",
        tech: [SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
];

function Projects() {
    const navigate = useNavigate();

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Projects</h1>
                <div className="bg-slate-800 p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`bg-gray-900 rounded-xl shadow-lg p-6 transition-all cursor-pointer ${project.hoverClass}`}
                                onClick={() => navigate(`/projects/${project.slug}`)} // Navigate on click
                            >
                                <img src={project.image} alt={project.name} className="project-image rounded-lg mb-4"/>
                                <h2 className="text-2xl font-semibold text-white">{project.name}</h2>
                                <p className="text-gray-400">{project.description}</p>
                                <div className="flex space-x-3 mt-4">
                                    {project.tech.map((Icon, i) => (
                                        <Icon key={i} className="text-2xl text-blue-400"/>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-gray-400 text-base border-t border-gray-700 pt-4">
                        These are some of my <strong className="text-[#60A5FA] font-semibold">favorite
                        projects</strong> that I’ve worked on over the past few years. Some of these are <strong
                        className="text-[#60A5FA] font-semibold">hobby projects</strong>, while others were
                        created <strong className="text-[#60A5FA] font-semibold">for actual clients</strong>. These
                        projects not only showcase my <strong className="text-[#60A5FA] font-semibold">current
                        skillset</strong> but also reflect my <strong className="text-[#60A5FA] font-semibold">personal
                        interests and hobbies</strong>.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
