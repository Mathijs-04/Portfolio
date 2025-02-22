import { FaReact, FaNodeJs, FaLaravel, FaUnity, FaPhp, FaDiceD20 } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiUnrealengine, SiJavascript } from "react-icons/si";

const projects = [
    {
        name: "Portfolio",
        description: "A showcase of my work, built with React and Tailwind CSS.",
        image: "https://placehold.co/600x400",
        tech: [FaReact, SiTailwindcss],
    },
    {
        name: "Open Hiring",
        description: "A Laravel-based job listing platform for inclusive hiring.",
        image: "https://placehold.co/600x400",
        tech: [FaLaravel, FaPhp, SiTailwindcss],
    },
    {
        name: "Full-Stack Web",
        description: "A MERN stack project featuring CRUD operations.",
        image: "https://placehold.co/600x400",
        tech: [FaReact, FaNodeJs, SiMongodb, SiTailwindcss],
    },
    {
        name: "Mighty Models",
        description: "A Laravel website where users share miniatures.",
        image: "https://placehold.co/600x400",
        tech: [FaLaravel, FaPhp, SiTailwindcss],
    },
    {
        name: "Dungeon Defender",
        description: "A browser-based RPG built with Excalibur.js.",
        image: "https://placehold.co/600x400",
        tech: [SiJavascript],
    },
    {
        name: "EXPCorp.",
        description: "A fictional gaming company website.",
        image: "https://placehold.co/600x400",
        tech: [FaReact, SiTailwindcss],
    },
    {
        name: "Year 1 Portfolio",
        description: "A collection of my first-year projects.",
        image: "https://placehold.co/600x400",
        tech: [FaReact, SiTailwindcss],
    },
    {
        name: "Unreal Engine 5",
        description: "A 3D game prototype built in Unreal Engine 5.",
        image: "https://placehold.co/600x400",
        tech: [SiUnrealengine],
    },
    {
        name: "WARHAMMER Dice Roller",
        description: "A dice rolling tool for Warhammer enthusiasts.",
        image: "https://placehold.co/600x400",
        tech: [FaDiceD20, SiJavascript],
    },
    {
        name: "Gobbo Quest",
        description: "A fun roguelike made in Unity.",
        image: "https://placehold.co/600x400",
        tech: [FaUnity],
    },
];

function Projects() {
    return (
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
                                <Icon key={i} className="text-2xl text-blue-400" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
