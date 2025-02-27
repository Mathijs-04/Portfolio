import {FaReact, FaNodeJs, FaLaravel, FaDatabase} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiUnrealengine, SiJavascript, SiExpress, SiHtml5, SiCss3 } from "react-icons/si";
import ExcaliburLogo from "/excalibur-logo-blue.webp";
const ExcaliburIcon = () => <img src={ExcaliburLogo} alt="Excalibur.js Logo" className="w-8 h-8 relative -top-1" />;

const projects = [
    {
        name: "Portfolio",
        description: "A showcase of my work and skills, built with React and Tailwind CSS",
        image: "https://placehold.co/600x400",
        tech: [FaReact, SiTailwindcss],
    },
    {
        name: "Open Hiring",
        description: "A Laravel-based job listing platform for inclusive hiring",
        image: "https://placehold.co/600x400",
        tech: [FaLaravel, SiTailwindcss, FaDatabase],
    },
    {
        name: "Full-Stack Game Database",
        description: "A MERN stack project with a seperated Front- and Back-End",
        image: "https://placehold.co/600x400",
        tech: [FaReact, FaNodeJs, SiMongodb, SiExpress, SiTailwindcss],
    },
    {
        name: "Mighty Models",
        description: "A Laravel website where users share their miniatures",
        image: "https://placehold.co/600x400",
        tech: [FaLaravel, SiTailwindcss, FaDatabase],
    },
    {
        name: "Dungeon Defender",
        description: "A browser-based game built with Excalibur.js",
        image: "https://placehold.co/600x400",
        tech: [ExcaliburIcon, SiJavascript],
    },
    {
        name: "EXPCorp.",
        description: "A fictional company website specialized in digital experiences",
        image: "https://placehold.co/600x400",
        tech: [FaReact, SiTailwindcss, FaDatabase],
    },
    {
        name: "Year 1 Portfolio",
        description: "A collection of my first-year projects",
        image: "https://placehold.co/600x400",
        tech: [SiHtml5, SiCss3, SiJavascript],
    },
    {
        name: "Unreal Engine 5",
        description: "A 3D game prototype built in Unreal Engine 5",
        image: "https://placehold.co/600x400",
        tech: [SiUnrealengine],
    },
    {
        name: "WARHAMMER Dice Roller",
        description: "A dice rolling tool for Wargaming enthusiasts",
        image: "https://placehold.co/600x400",
        tech: [SiHtml5, SiCss3, SiJavascript],
    },
    {
        name: "Gobbo Quest",
        description: "A web-based RPG, made in a single day",
        image: "https://placehold.co/600x400",
        tech: [SiJavascript],
    },
];

function Projects() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6">
                <h1 className="text-4xl font-bold text-white mb-6">Projects</h1>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-blue-500/50 transition-all"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="rounded-lg mb-4"
                            />
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
            </div>
        </div>
    );
}

export default Projects;
