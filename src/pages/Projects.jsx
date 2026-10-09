import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaLaravel, FaDatabase, FaVuejs, FaSort } from "react-icons/fa";
import { IoIosGitNetwork } from "react-icons/io";
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
    SiPhp,
} from "react-icons/si";
import ExcaliburLogo from "/excalibur-logo-blue.webp";
import Highlight from "../components/Highlight.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

function ExcaliburIcon() {
    return <img src={ExcaliburLogo} alt="Excalibur.js Logo" className="w-8 h-8 relative -top-1" />;
}

const projects = [
    {
        name: "Portfolio",
        slug: "portfolio",
        description: "A showcase of my work and skills, built with React and Tailwind",
        image: "/Portfolio/portfolio.webp",
        tech: [FaReact, SiTailwindcss],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 7,
    },
    {
        name: "Object_1",
        slug: "object-1",
        description: "An AI-driven 3D experiment",
        image: "/Portfolio/object1.webp",
        tech: [SiJavascript, FaReact, IoIosGitNetwork],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 23,
    },
    {
        name: "Warhammer Rule Assistant",
        slug: "warhammer-rule-assistant",
        description: "The ultimate rule assistant for Warhammer players",
        image: "/Portfolio/warhammer-rule-assistant.webp",
        tech: [FaLaravel, FaVuejs, SiTailwindcss, SiPython, SiFastapi, SiOpenai, FaDatabase],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 21,
    },
    {
        name: "The Arcane Archive",
        slug: "arcane-archive",
        description: "A web-based Dungeon Synth music player",
        image: "/Portfolio/arcane-archive.webp",
        tech: [SiHtml5, SiCss3, SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 24,
    },
    {
        name: "Hosting Recommender",
        slug: "hosting-recommender",
        description: "A company website which recommends hosting packages",
        image: "/Portfolio/hosting-recommender.webp",
        tech: [FaVuejs, SiPython, SiOpenai, SiDocker],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 17,
    },
    {
        name: "Pimcore Converter",
        slug: "pimcore-converter",
        description: "A tool to import Excel data into Pimcore",
        image: "/Portfolio/pimcore-converter.webp",
        tech: [FaVuejs, SiPython, SiFastapi, SiPhp, SiOpenai, SiDocker],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 18,
    },
    {
        name: "Mighty Models",
        slug: "mighty-models",
        description: "A Laravel website where users share their tabletop miniatures",
        image: "/Portfolio/mighty-models.webp",
        tech: [FaLaravel, SiTailwindcss, FaDatabase],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 6,
    },
    {
        name: "Open Hiring",
        slug: "open-hiring",
        description: "A Laravel-based job listing platform for inclusive hiring",
        image: "/Portfolio/open-hiring.webp",
        tech: [FaLaravel, SiTailwindcss, FaDatabase],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 10,
    },
    {
        name: "AI Travel Planner",
        slug: "ai-travel-planner",
        description: "An AI-powered travel planning application",
        image: "/Portfolio/ai-travel-planner.webp",
        tech: [FaVuejs, SiPython, SiFastapi, FaDatabase, SiOpenai, SiDocker],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 19,
    },
    {
        name: "De Blije Bij",
        slug: "blije-bij",
        description: "The app for sustainable gardens",
        image: "/Portfolio/tuin.webp",
        tech: [FaReact, SiExpress],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 16,
    },
    {
        name: "Fitness Finder",
        slug: "fitness-finder",
        description: "An app to help you find a gym",
        image: "/Portfolio/app.webp",
        tech: [FaReact],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 14,
    },
    {
        name: "Unreal Engine Scene",
        slug: "unreal-engine-scene",
        description: "A cinematic scene in Unreal Engine 5.8",
        image: "/Portfolio/unreal-engine-scene.webp",
        tech: [SiUnrealengine],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 25,
    },
    {
        name: "Dungeon Defender",
        slug: "dungeon-defender",
        description: "A web-based game built with Excalibur.js",
        image: "/Portfolio/dungeon.webp",
        tech: [ExcaliburIcon, SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 4,
    },
    {
        name: "Year 1 Portfolio",
        slug: "portfolio-y1",
        description: "A collection of my first-year projects",
        image: "/Portfolio/portfolio-y1.webp",
        tech: [SiHtml5, SiCss3, SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 3,
    },
    {
        name: "The Adventurers Armory",
        slug: "adventurers-armory",
        description: "A Fantasy Store Experience",
        image: "/Portfolio/armory.webp",
        tech: [FaVuejs],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 20,
    },
    {
        name: "WARHAMMER Dice Roller",
        slug: "dice-roller",
        description: "An online dice rolling tool for wargaming enthusiasts",
        image: "/Portfolio/dice-roller.webp",
        tech: [SiHtml5, SiCss3, SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 1,
    },
    {
        name: "The Elder Scrolls Theme Player",
        slug: "elder-scrolls-theme-player",
        description: "A music player for The Elder Scrolls",
        image: "/Portfolio/theme-player.webp",
        tech: [SiHtml5, SiCss3, SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 22,
    },
    {
        name: "D&D-GPT",
        slug: "dnd-gpt",
        description: "Your AI Dungeon Master",
        image: "/Portfolio/dnd-gpt.webp",
        tech: [FaReact, SiOpenai, SiExpress],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 12,
    },
    {
        name: "Unreal Engine Landscape",
        slug: "unreal-engine",
        description: "A 3D landscape built in Unreal Engine 5",
        image: "/Portfolio/unreal-engine.webp",
        tech: [SiUnrealengine],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 5,
    },
    {
        name: "Full-Stack Game Collection",
        slug: "game-collection",
        description: "A MERN-stack collection with a dedicated Front- and Back-End",
        image: "/Portfolio/game-collection.webp",
        tech: [FaReact, FaNodeJs, SiMongodb, SiExpress, SiTailwindcss],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 9,
    },
    {
        name: "SignTrail",
        slug: "sign-trail",
        description: "An educational sign language game for students",
        image: "/Portfolio/sign-trail-3.webp",
        tech: [FaReact, SiTailwindcss, FaDatabase, IoIosGitNetwork, ExcaliburIcon],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 13,
    },
    {
        name: "Schild, Magie, Zwaard",
        slug: "schild-magie-zwaard",
        description: "A web-based game powered by Neural Networks",
        image: "/Portfolio/smz.webp",
        tech: [SiHtml5, SiCss3, SiJavascript, IoIosGitNetwork],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 11,
    },
    {
        name: "Gobbo Quest",
        slug: "gobbo-quest",
        description: "A simple web-based RPG",
        image: "/Portfolio/gobbo-quest.webp",
        tech: [SiJavascript],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 2,
    },
    {
        name: "Flashcard Generator",
        slug: "flashcard-generator",
        description: "An AI-powered flashcard generator in Vue.js",
        image: "/Portfolio/flashcard-generator.webp",
        tech: [FaVuejs, IoIosGitNetwork],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 15,
    },
    {
        name: "EXPCorp.",
        slug: "exp-corp",
        description: "A fictional company website specialized in VR experiences",
        image: "/Portfolio/exp-corp.webp",
        tech: [FaReact, SiTailwindcss, FaDatabase],
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        order: 8,
    },
];

const sortOptions = [
    { value: "default", label: "Default" },
    { value: "new-old", label: "New - Old" },
    { value: "old-new", label: "Old - New" },
    { value: "a-z", label: "A - Z" },
    { value: "z-a", label: "Z - A" },
];

const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function Projects() {
    const navigate = useNavigate();
    const [sortOption, setSortOption] = useState("default");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const measureGridRef = useRef(null);
    const entranceSlugsRef = useRef(new Set());
    const [entranceReady, setEntranceReady] = useState(false);

    useLayoutEffect(() => {
        if (entranceReady) return;

        const grid = measureGridRef.current;
        if (!grid) return;

        const viewportHeight = window.innerHeight;
        const slugs = new Set();

        grid.querySelectorAll("[data-project-slug]").forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < viewportHeight && rect.bottom > 0) {
                slugs.add(el.dataset.projectSlug);
            }
        });

        entranceSlugsRef.current = slugs;
        setEntranceReady(true);
    }, [entranceReady]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);

    const getSortedProjects = () => {
        const projectsCopy = [...projects];

        switch (sortOption) {
            case "new-old":
                return projectsCopy.sort((a, b) => b.order - a.order);
            case "old-new":
                return projectsCopy.sort((a, b) => a.order - b.order);
            case "a-z":
                return projectsCopy.sort((a, b) => a.name.localeCompare(b.name));
            case "z-a":
                return projectsCopy.sort((a, b) => b.name.localeCompare(a.name));
            default:
                return projectsCopy;
        }
    };

    const sortedProjects = getSortedProjects();
    const currentSortLabel = sortOptions.find((opt) => opt.value === sortOption)?.label;
    const entranceSlugs = entranceSlugsRef.current;

    const openProject = (slug) => {
        window.scrollTo(0, 0);
        navigate(`/projects/${slug}`);
    };

    const projectGridItems = sortedProjects.map((project, index) => {
        const isOddTotal = sortedProjects.length % 2 === 1;
        const isLastItem = index === sortedProjects.length - 1;
        const shouldCenter = isOddTotal && isLastItem;
        const centerClass = shouldCenter ? "md:col-span-2 md:justify-self-center md:w-1/2" : "";
        const animateOnEntrance = entranceSlugs.has(project.slug);

        return { project, centerClass, animateOnEntrance };
    });

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 max-md:px-4">
                <div className="flex items-start justify-between mb-6">
                    <h1 className="text-4xl font-panchang font-bold text-white max-md:text-2xl">Projects</h1>
                    <div className="relative mt-2" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex select-none items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors font-panchang"
                        >
                            <FaSort className="text-lg" />
                            <span>{currentSortLabel}</span>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-36 select-none bg-slate-800 rounded-lg shadow-lg z-10 overflow-hidden">
                                {sortOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => {
                                            setSortOption(option.value);
                                            setIsDropdownOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2 text-white hover:bg-slate-700 transition-colors font-panchang ${sortOption === option.value ? "bg-slate-700" : ""}`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-3 rounded-lg">
                    {!entranceReady ? (
                        <div ref={measureGridRef} className="grid md:grid-cols-2 gap-6">
                            {projectGridItems.map(({ project, centerClass }) => (
                                <div key={project.slug} data-project-slug={project.slug} className={centerClass}>
                                    <ProjectCard
                                        project={project}
                                        className="h-full"
                                        onClick={() => openProject(project.slug)}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            className="grid md:grid-cols-2 gap-6"
                            variants={gridVariants}
                            initial="hidden"
                            animate={entranceSlugs.size > 0 ? "visible" : false}
                        >
                            {projectGridItems.map(({ project, centerClass, animateOnEntrance }) => (
                                <motion.div
                                    key={project.slug}
                                    layout
                                    variants={animateOnEntrance ? itemVariants : undefined}
                                    initial={animateOnEntrance ? undefined : { opacity: 1, y: 0 }}
                                    className={centerClass}
                                    transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
                                >
                                    <ProjectCard
                                        project={project}
                                        className="h-full"
                                        onClick={() => openProject(project.slug)}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                    <div className="mt-6 text-gray-400 text-base border-t border-gray-700 pt-4 font-body md:text-justify">
                        A selection of projects I&apos;ve built so far, from personal experiments to{" "}
                        <Highlight as="strong">professional</Highlight> work. Together they show my{" "}
                        <Highlight as="strong">skills</Highlight> and the things I enjoy building.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
