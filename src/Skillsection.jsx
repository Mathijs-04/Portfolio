import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaNodeJs, FaLaravel, FaDatabase, FaGithub } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiUnrealengine, SiMongodb, SiPostman, SiReact as SiReactNative } from "react-icons/si";

const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, hoverClass: "hover:shadow-[0_0_15px_5px_rgba(251,146,60,0.6)] hover:border-orange-500", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, hoverClass: "hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.6)] hover:border-blue-500", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, hoverClass: "hover:shadow-[0_0_15px_5px_rgba(251,191,36,0.6)] hover:border-yellow-400", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "PHP", icon: <FaPhp className="text-indigo-500" />, hoverClass: "hover:shadow-[0_0_15px_5px_rgba(99,102,241,0.6)] hover:border-indigo-500", link: "https://www.php.net/" },
    { name: "Laravel", icon: <FaLaravel className="text-red-500" />, hoverClass: "hover:shadow-[0_0_15px_5px_rgba(239,68,68,0.6)] hover:border-red-500", link: "https://laravel.com/" },
    { name: "React", icon: <FaReact className="text-blue-400" />, hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400", link: "https://react.dev/" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, hoverClass: "hover:shadow-[0_0_15px_5px_rgba(22,163,74,0.6)] hover:border-green-600", link: "https://www.mongodb.com/" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, hoverClass: "hover:shadow-[0_0_15px_5px_rgba(34,197,94,0.6)] hover:border-green-500", link: "https://nodejs.org/" },
    { name: "Express", icon: <SiExpress className="text-gray-400" />, hoverClass: "hover:shadow-[0_0_15px_5px_rgba(156,163,175,0.6)] hover:border-gray-400", link: "https://expressjs.com/" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" />, hoverClass: "hover:shadow-[0_0_15px_5px_rgba(45,212,191,0.6)] hover:border-teal-400", link: "https://tailwindcss.com/" },
    { name: "Excalibur.js", icon: <img src="/excalibur-logo.webp" alt="Excalibur.js Logo" className="w-10 h-10" />, hoverClass: "hover:shadow-[0_0_15px_5px_rgba(250,204,21,0.6)] hover:border-yellow-400", link: "https://excaliburjs.com/" },
    { name: "Unreal Engine 5", icon: <SiUnrealengine className="text-gray-300" />, hoverClass: "hover:shadow-[0_0_15px_5px_rgba(209,213,219,0.6)] hover:border-gray-300", link: "https://www.unrealengine.com/" },
    { name: "SQL", icon: <FaDatabase className="text-blue-600" />, hoverClass: "hover:shadow-[0_0_15px_5px_rgba(37,99,235,0.6)] hover:border-blue-600", link: "https://www.postgresql.org/" },
    { name: "Postman", icon: <SiPostman className="text-orange-500" />, hoverClass: "hover:shadow-[0_0_15px_5px_rgba(249,115,22,0.6)] hover:border-orange-500", link: "https://www.postman.com/" },
    { name: "GitHub", icon: <FaGithub className="text-white" />, hoverClass: "hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.6)] hover:border-white", link: "https://github.com/" },
    { name: "React Native", icon: <SiReactNative className="text-blue-500" />, hoverClass: "hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.6)] hover:border-blue-500", link: "https://reactnative.dev/" },
];

const SkillsSection = () => {
    return (
        <div className="gradient-background min-h-screen">
            <section className="text-white py-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">My Developer Toolkit (So Far)</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center px-6">
                    {skills.map((skill, index) => (
                        <a key={index} href={skill.link} target="_blank" className={`bg-gray-900 border border-transparent rounded-xl p-4 flex flex-col items-center shadow-md transition-all duration-300 ${skill.hoverClass}`}>
                            <div className="text-4xl">{skill.icon}</div>
                            <p className="mt-2 text-sm">{skill.name}</p>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SkillsSection;
