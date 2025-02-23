import React from "react";
import {FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaNodeJs, FaLaravel, FaDatabase, FaGithub} from "react-icons/fa";
import {SiExpress, SiTailwindcss, SiUnrealengine, SiMongodb, SiPostman} from "react-icons/si";

const skills = [
    {name: "HTML", icon: <FaHtml5 className="text-orange-500"/>},
    {name: "CSS", icon: <FaCss3Alt className="text-blue-500"/>},
    {name: "JavaScript", icon: <FaJs className="text-yellow-400"/>},
    {name: "PHP", icon: <FaPhp className="text-indigo-500"/>},
    {name: "Laravel", icon: <FaLaravel className="text-red-500"/>},
    {name: "React", icon: <FaReact className="text-blue-400"/>},
    {name: "MongoDB", icon: <SiMongodb className="text-green-600"/>},
    {name: "Node.js", icon: <FaNodeJs className="text-green-500"/>},
    {name: "Express", icon: <SiExpress className="text-gray-400"/>},
    {name: "Tailwind", icon: <SiTailwindcss className="text-teal-400"/>},
    {name: "Excalibur.js", icon: <img src="/excalibur-logo.webp" alt="Excalibur.js Logo" className="w-10 h-10"/>},
    {name: "Unreal Engine 5", icon: <SiUnrealengine className="text-gray-300"/>},
    {name: "SQL", icon: <FaDatabase className="text-blue-600"/>},
    {name: "Postman", icon: <SiPostman className="text-orange-500"/>},
    {name: "GitHub", icon: <FaGithub className="text-black"/>},
    {name: "Placeholder", icon: <div className="w-10 h-10 bg-gray-500"/>}
];

const SkillsSection = () => {
    return (
        <div className="gradient-background min-h-screen">
            <section className="text-white py-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
                    Placeholder Title
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center px-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 rounded-xl p-4 flex flex-col items-center shadow-md"
                        >
                            <div className="text-4xl">{skill.icon}</div>
                            <p className="mt-2 text-sm">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SkillsSection;
