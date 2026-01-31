import { useState, useEffect, useRef } from "react";
import {
    FaReact,
    FaNodeJs,
    FaLaravel,
    FaDatabase,
    FaVuejs,
    FaSort
} from "react-icons/fa";
import {
    SiMongodb,
    SiTailwindcss,
    SiUnrealengine,
    SiJavascript,
    SiExpress,
    SiHtml5,
    SiCss3,
    SiOpenai,
    SiPython,
    SiFastapi,
    SiDocker,
    SiJenkins,
    SiPhp
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
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 1
    },
    {
        name: "Mighty Models",
        slug: "mighty-models",
        description: "A Laravel website where users share their tabletop miniatures",
        image: "/Portfolio/mighty-models.webp",
        tech: [FaLaravel, SiTailwindcss, FaDatabase],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 2
    },
    {
        name: "Hosting Recommender",
        slug: "hosting-recommender",
        description: "A company website which recommends hosting packages",
        image: "/Portfolio/hosting-recommender.webp",
        tech: [FaVuejs, SiPython, SiOpenai, SiDocker],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 3
    },
    {
        name: "Pimcore Converter",
        slug: "pimcore-converter",
        description: "A tool to import Exceldata into Pimcore",
        image: "/Portfolio/pimcore-converter.webp",
        tech: [FaVuejs, SiPython, SiFastapi, SiPhp, SiOpenai, SiDocker],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 4
    },
    {
        name: "Full-Stack Game Collection",
        slug: "game-collection",
        description: "A MERN-stack collection with a dedicated Front- and Back-End",
        image: "/Portfolio/game-collection.webp",
        tech: [FaReact, FaNodeJs, SiMongodb, SiExpress, SiTailwindcss],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 5
    },
    {
        name: "Open Hiring",
        slug: "open-hiring",
        description: "A Laravel-based job listing platform for inclusive hiring",
        image: "/Portfolio/open-hiring.webp",
        tech: [FaLaravel, SiTailwindcss, FaDatabase],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 6
    },
    {
        name: "AI Travel Planner",
        slug: "ai-travel-planner",
        description: "An AI-powered travel planning application",
        image: "/Portfolio/ai-travel-planner.webp",
        tech: [FaVuejs, SiPython, SiFastapi, FaDatabase, SiOpenai, SiDocker],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 7
    },
    {
        name: "Fitness Finder",
        slug: "fitness-finder",
        description: "The app to help you find a gym",
        image: "/Portfolio/app.webp",
        tech: [FaReact],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 8
    },
    {
        name: "De Blije Bij",
        slug: "blije-bij",
        description: "The app for sustainable gardens",
        image: "/Portfolio/tuin.webp",
        tech: [FaReact, SiExpress],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 9
    },
    {
        name: "SignTrail",
        slug: "sign-trail",
        description: "An educational sign language game for students",
        image: "/Portfolio/sign-trail-3.webp",
        tech: [FaReact, SiTailwindcss, FaDatabase, IoIosGitNetwork, ExcaliburIcon],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 10
    },
    {
        name: "Dungeon Defender",
        slug: "dungeon-defender",
        description: "A web-based game built with Excalibur.js",
        image: "/Portfolio/dungeon.webp",
        tech: [ExcaliburIcon, SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 11
    },
    {
        name: "Year 1 Portfolio",
        slug: "portfolio-y1",
        description: "A collection of my first-year projects",
        image: "/Portfolio/portfolio-y1.webp",
        tech: [SiHtml5, SiCss3, SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 12
    },
    {
        name: "The Adventurers Armory",
        slug: "adventurers-armory",
        description: "A Fantasy Store Experience",
        image: "/Portfolio/armory.webp",
        tech: [FaVuejs],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400"
    },
    {
        name: "WARHAMMER Dice Roller",
        slug: "dice-roller",
        description: "The online dice rolling tool for Wargaming enthusiasts",
        image: "/Portfolio/dice-roller.webp",
        tech: [SiHtml5, SiCss3, SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 13
    },
    {
        name: "D&D-GPT",
        slug: "dnd-gpt",
        description: "Your AI Dungeon Master",
        image: "/Portfolio/dnd-gpt.webp",
        tech: [FaReact, SiOpenai, SiExpress],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 14
    },
    {
        name: "Unreal Engine 5",
        slug: "unreal-engine",
        description: "A 3D landscape built in Unreal Engine 5",
        image: "/Portfolio/unreal-engine.webp",
        tech: [SiUnrealengine],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 15
    },
    {
        name: "Schild, Magie, Zwaard",
        slug: "schild-magie-zwaard",
        description: "A web-based game powered by Neural Networks",
        image: "/Portfolio/smz.webp",
        tech: [SiHtml5, SiCss3, SiJavascript, IoIosGitNetwork],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 16
    },
    {
        name: "Gobbo Quest",
        slug: "gobbo-quest",
        description: "A simple web-based RPG",
        image: "/Portfolio/gobbo-quest.webp",
        tech: [SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 17
    },
    {
        name: "Flashcard Generator",
        slug: "flashcard-generator",
        description: "An AI-powered flashcard generator in Vue.js",
        image: "/Portfolio/flashcard-generator.webp",
        tech: [FaVuejs, IoIosGitNetwork],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 18
    },
    {
        name: "EXPCorp.",
        slug: "exp-corp",
        description: "A fictional company website specialized in VR experiences",
        image: "/Portfolio/exp-corp.webp",
        tech: [FaReact, SiTailwindcss, FaDatabase],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 19
    },
    {
        name: "The Adventurers Armory",
        slug: "adventurers-armory",
        description: "A Fantasy Store Experience",
        image: "/Portfolio/armory.webp",
        tech: [FaVuejs],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 20
    },
    // {
    //     name: "Coming Soon",
    //     slug: "coming-soon",
    //     description: "Projects I am currently working on",
    //     image: "/Portfolio/soon.webp",
    //     tech: [() => <FaQuestionCircle className="text-blue-500 text-2xl" />],
    //     hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
    //     order: 21
    // },
];

const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'new-old', label: 'New - Old' },
    { value: 'old-new', label: 'Old - New' },
    { value: 'a-z', label: 'A - Z' },
    { value: 'z-a', label: 'Z - A' }
];

function Projects() {
    const navigate = useNavigate();
    const [sortOption, setSortOption] = useState('default');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    const getSortedProjects = () => {
        const projectsCopy = [...projects];
        
        switch (sortOption) {
            case 'new-old':
                return projectsCopy.sort((a, b) => b.order - a.order);
            case 'old-new':
                return projectsCopy.sort((a, b) => a.order - b.order);
            case 'a-z':
                return projectsCopy.sort((a, b) => a.name.localeCompare(b.name));
            case 'z-a':
                return projectsCopy.sort((a, b) => b.name.localeCompare(a.name));
            default:
                return projectsCopy;
        }
    };

    const sortedProjects = getSortedProjects();
    const currentSortLabel = sortOptions.find(opt => opt.value === sortOption)?.label;

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6">
                <div className="flex items-start justify-between mb-6">
                    <h1 className="text-4xl font-panchang font-bold text-white max-md:text-2xl">Projects</h1>
                    <div className="relative mt-2" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors font-panchang"
                        >
                            <FaSort className="text-lg" />
                            <span>{currentSortLabel}</span>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-36 bg-slate-800 rounded-lg shadow-lg z-10 overflow-hidden">
                                {sortOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => {
                                            setSortOption(option.value);
                                            setIsDropdownOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2 text-white hover:bg-slate-700 transition-colors font-panchang ${sortOption === option.value ? 'bg-slate-700' : ''}`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                        {sortedProjects.map((project, index) => {
                            const isOddTotal = sortedProjects.length % 2 === 1;
                            const isLastItem = index === sortedProjects.length - 1;
                            const shouldCenter = isOddTotal && isLastItem;
                            
                            return (
                            <div
                                key={project.slug}
                                className={`bg-gray-900 rounded-xl shadow-lg p-6 transition-all cursor-pointer select-none hover:bg-gray-800 hover:scale-[1.01] ${shouldCenter ? 'md:col-span-2 md:justify-self-center md:w-1/2' : ''} ${project.hoverClass}`}
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
                            );
                        })}
                    </div>
                    <div className="mt-6 text-gray-400 text-base border-t border-gray-700 pt-4 font-body text-justify">
                        These are some of my <strong className="text-[#60A5FA] font-semibold">favorite
                        projects</strong> I’ve worked on so far. Some of these are <strong
                        className="text-[#60A5FA] font-semibold">hobby projects</strong>, while others were
                        created for <strong className="text-[#60A5FA] font-semibold">school</strong> or <strong className="text-[#60A5FA] font-semibold">work</strong>. These
                        projects showcase my <strong className="text-[#60A5FA] font-semibold">
                        skillset</strong> and reflect many of my <strong className="text-[#60A5FA] font-semibold">personal
                        interests</strong>!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
