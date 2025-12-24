import {
    FaReact,
    FaNodeJs,
    FaLaravel,
    FaDatabase,
    FaVuejs
} from "react-icons/fa";
import {
    SiMongodb,
    SiTailwindcss,
    SiUnrealengine,
    SiJavascript,
    SiExpress,
    SiHtml5,
    SiCss3,
    SiOpenai
} from "react-icons/si";
import ExcaliburLogo from "/excalibur-logo-blue.webp";
import {useNavigate} from "react-router";
import {IoIosGitNetwork} from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";

const ExcaliburIcon = () => <img src={ExcaliburLogo} alt="Excalibur.js Logo" className="w-8 h-8 relative -top-1"/>;

const projects = [
    {
        name: "Portfolio",
        slug: "portfolio",
        description: "A showcase of my work and skills, built with React and Tailwind",
        image: "/Portfolio/portfolio.webp",
        tech: [FaReact, SiTailwindcss],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Mighty Models",
        slug: "mighty-models",
        description: "A Laravel website where users share their tabletop miniatures",
        image: "/Portfolio/mighty-models.webp",
        tech: [FaLaravel, SiTailwindcss, FaDatabase],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Full-Stack Game Collection",
        slug: "game-collection",
        description: "A MERN-stack collection with a dedicated Front- and Back-End",
        image: "/Portfolio/game-collection.webp",
        tech: [FaReact, FaNodeJs, SiMongodb, SiExpress, SiTailwindcss],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Open Hiring",
        slug: "open-hiring",
        description: "A Laravel-based job listing platform for inclusive hiring",
        image: "/Portfolio/open-hiring.webp",
        tech: [FaLaravel, SiTailwindcss, FaDatabase],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "SignTrail",
        slug: "sign-trail",
        description: "An educational sign language game for students",
        image: "/Portfolio/sign-trail-3.webp",
        tech: [FaReact, SiTailwindcss, FaDatabase, IoIosGitNetwork, ExcaliburIcon],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Dungeon Defender",
        slug: "dungeon-defender",
        description: "A web-based game built with Excalibur.js",
        image: "/Portfolio/dungeon.webp",
        tech: [ExcaliburIcon, SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "D&D-GPT",
        slug: "dnd-gpt",
        description: "Your AI Dungeon Master",
        image: "/Portfolio/dnd-gpt.webp",
        tech: [FaReact, SiOpenai, SiExpress],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Year 1 Portfolio",
        slug: "portfolio-y1",
        description: "A collection of my first-year projects",
        image: "/Portfolio/portfolio-y1.webp",
        tech: [SiHtml5, SiCss3, SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Fitness Finder",
        slug: "fitness-finder",
        description: "The app to help you find a gym",
        image: "/Portfolio/app.webp",
        tech: [FaReact],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "De Blije Bij",
        slug: "blije-bij",
        description: "The app for sustainable gardens",
        image: "/Portfolio/tuin.webp",
        tech: [FaReact, SiExpress],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "WARHAMMER Dice Roller",
        slug: "dice-roller",
        description: "The online dice rolling tool for Wargaming enthusiasts",
        image: "/Portfolio/dice-roller.webp",
        tech: [SiHtml5, SiCss3, SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Unreal Engine 5",
        slug: "unreal-engine",
        description: "A 3D landscape built in Unreal Engine 5",
        image: "/Portfolio/unreal-engine.webp",
        tech: [SiUnrealengine],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Flashcard Generator",
        slug: "flashcard-generator",
        description: "An AI-powered flashcard generator in Vue.js",
        image: "/Portfolio/flashcard-generator.webp",
        tech: [FaVuejs, IoIosGitNetwork],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Schild, Magie, Zwaard",
        slug: "schild-magie-zwaard",
        description: "A web-based game powered by Neural Networks",
        image: "/Portfolio/smz.webp",
        tech: [SiHtml5, SiCss3, SiJavascript, IoIosGitNetwork],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Gobbo Quest",
        slug: "gobbo-quest",
        description: "A simple web-based RPG",
        image: "/Portfolio/gobbo-quest.webp",
        tech: [SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "EXPCorp.",
        slug: "exp-corp",
        description: "A fictional company website specialized in VR experiences",
        image: "/Portfolio/exp-corp.webp",
        tech: [FaReact, SiTailwindcss, FaDatabase],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "AI Travel Planner",
        slug: "ai-travel-planner",
        description: "An AI-powered travel planning application",
        image: "/Portfolio/ai-travel-planner.webp",
        tech: [FaReact, SiTailwindcss, SiOpenai],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Pimcore Converter",
        slug: "pimcore-converter",
        description: "A data conversion tool for Pimcore CMS",
        image: "/Portfolio/pimcore-converter.webp",
        tech: [FaLaravel, FaDatabase, SiTailwindcss],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "Hosting Recommender",
        slug: "hosting-recommender",
        description: "A smart web hosting recommendation engine",
        image: "/Portfolio/hosting-recommender.webp",
        tech: [FaReact, FaNodeJs, SiMongodb, SiTailwindcss],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    // {
    //     name: "Coming Soon",
    //     slug: "coming-soon",
    //     description: "Projects I am currently working on",
    //     image: "/Portfolio/soon.webp",
    //     tech: [() => <FaQuestionCircle className="text-blue-500 text-2xl" />],
    //     hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    // },
];

function Projects() {
    const navigate = useNavigate();

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6 max-md:text-2xl">Projects</h1>
                <div className="bg-slate-800 p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`bg-gray-900 rounded-xl shadow-lg p-6 transition-all cursor-pointer ${project.hoverClass}`}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    navigate(`/projects/${project.slug}`);
                                }}
                            >
                                <img src={project.image} alt={project.name} className="project-image rounded-lg mb-4"/>
                                <h2 className="text-2xl font-semibold text-white">{project.name}</h2>
                                <p className="text-gray-400 font-body">{project.description}</p>
                                <div className="flex space-x-3 mt-4">
                                    {project.tech.map((Icon, i) => (
                                        <Icon key={i} className="text-2xl text-blue-400"/>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-gray-400 text-base border-t border-gray-700 pt-4 font-body text-justify">
                        These are some of my <strong className="text-[#60A5FA] font-semibold">favorite
                        projects</strong> that I’ve worked on over the past few years. Some of these are just <strong
                        className="text-[#60A5FA] font-semibold">hobby projects</strong>, while others were
                        created for <strong className="text-[#60A5FA] font-semibold">actual clients</strong>. These
                        projects do not only showcase my <strong className="text-[#60A5FA] font-semibold">current
                        skillset</strong>, but also reflect some of my <strong className="text-[#60A5FA] font-semibold">personal
                        interests</strong> and <strong className="text-[#60A5FA] font-semibold">hobbies</strong>.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
