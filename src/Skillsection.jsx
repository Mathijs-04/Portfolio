import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiUnrealengine, SiMongodb } from "react-icons/si";
import { MdSportsEsports } from "react-icons/md";

const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-400" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Excalibur.js", icon: <MdSportsEsports className="text-purple-500" /> },
    { name: "Unreal Engine 5", icon: <SiUnrealengine className="text-gray-300" /> },
];

const SkillsSection = () => {
    return (
        <section className="bg-black text-white py-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
                Title
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
    );
};

export default SkillsSection;
