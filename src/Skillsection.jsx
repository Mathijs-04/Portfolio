import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaPhp,
    FaReact,
    FaNodeJs,
    FaLaravel,
    FaDatabase,
    FaGithub,
    FaPython, FaDocker
} from "react-icons/fa";
import {
    SiExpress,
    SiTailwindcss,
    SiUnrealengine,
    SiMongodb,
    SiPostman,
    SiVuedotjs,
    SiFastapi,
    SiJenkins
} from "react-icons/si";

const skills = [
    {
        name: "HTML",
        icon: <FaHtml5 className="text-orange-500"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(251,146,60,0.6)] hover:border-orange-500",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        name: "CSS",
        icon: <FaCss3Alt className="text-blue-500"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.6)] hover:border-blue-500",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(251,191,36,0.6)] hover:border-yellow-400",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        name: "PHP",
        icon: <FaPhp className="text-indigo-500"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(99,102,241,0.6)] hover:border-indigo-500",
        link: "https://www.php.net/"
    },
    {
        name: "React",
        icon: <FaReact className="text-blue-400"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] hover:border-blue-400",
        link: "https://react.dev/"
    },
    {
        name: "Vue.js",
        icon: <SiVuedotjs className="text-[#42b883]"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(66,184,131,0.6)] hover:border-[#42b883]",
        link: "https://vuejs.org/"
    },
    {
        name: "Tailwind",
        icon: <SiTailwindcss className="text-teal-400"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(45,212,191,0.6)] hover:border-teal-400",
        link: "https://tailwindcss.com/"
    },
    {
        name: "Laravel",
        icon: <FaLaravel className="text-red-500"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(239,68,68,0.6)] hover:border-red-500",
        link: "https://laravel.com/"
    },
    {
        name: "SQL",
        icon: <FaDatabase className="text-blue-600"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(37,99,235,0.6)] hover:border-blue-600",
        link: "https://www.postgresql.org/"
    },
    {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(34,197,94,0.6)] hover:border-green-500",
        link: "https://nodejs.org/"
    },
    {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(22,163,74,0.6)] hover:border-green-600",
        link: "https://www.mongodb.com/"
    },
    {
        name: "Express",
        icon: <SiExpress className="text-gray-400"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(156,163,175,0.6)] hover:border-gray-400",
        link: "https://expressjs.com/"
    },
    {
        name: "Python",
        icon: <FaPython className="text-[#3776AB]"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(55,118,171,0.6)] hover:border-[#3776AB]",
        link: "https://www.python.org/"
    },
    {
        name: "FastAPI",
        icon: <SiFastapi className="text-[#009688]"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(0,150,136,0.6)] hover:border-[#009688]",
        link: "https://fastapi.tiangolo.com/"
    },
    {
        name: "Unreal Engine 5",
        icon: <SiUnrealengine className="text-gray-300"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(209,213,219,0.6)] hover:border-gray-300",
        link: "https://www.unrealengine.com/"
    },
    {
        name: "GitHub",
        icon: <FaGithub className="text-white"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.6)] hover:border-white",
        link: "https://github.com/"
    },
    {
        name: "Docker",
        icon: <FaDocker className="text-[#2496ED]"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(36,150,237,0.6)] hover:border-[#2496ED]",
        link: "https://www.docker.com/"
    },
    {
        name: "Excalibur.js",
        icon: <img src="/Portfolio/excalibur-logo.webp" alt="Excalibur.js Logo" className="w-10 h-10"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(250,204,21,0.6)] hover:border-yellow-400",
        link: "https://excaliburjs.com/"
    },
    {
        name: "Postman",
        icon: <SiPostman className="text-orange-500"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(249,115,22,0.6)] hover:border-orange-500",
        link: "https://www.postman.com/"
    },
    {
        name: "Jenkins",
        icon: <SiJenkins className="text-[#D24939]"/>,
        hoverClass: "hover:shadow-[0_0_15px_5px_rgba(210,73,57,0.6)] hover:border-[#D24939]",
        link: "https://www.jenkins.io/"
    },
];

const SkillsSection = () => {
    return (
        <div className="gradient-background min-h-screen">
            <section className="text-white py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl font-panchang font-bold text-white mb-6 max-md:text-lg">Experience</h1>
                    <div className="bg-slate-800 p-6 rounded-lg">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                            {skills.map((skill, index) => (
                                <a
                                    key={index}
                                    href={skill.link}
                                    target="_blank"
                                    className={`bg-gray-900 border border-transparent rounded-xl p-4 flex flex-col items-center shadow-md transition-all duration-300 hover:bg-gray-800 ${skill.hoverClass}`}
                                >
                                    <div className="text-4xl">{skill.icon}</div>
                                    <p className="mt-2 text-sm font-body">{skill.name}</p>
                                </a>
                            ))}
                        </div>
                        <div className="mt-6 text-gray-400 text-base border-t border-gray-700 pt-4 text-justify">
                            These images represent the <strong className="text-[#60A5FA] font-semibold">languages</strong>, <strong className="text-[#60A5FA] font-semibold">frameworks</strong>, and <strong className="text-[#60A5FA] font-semibold">tools</strong> I often work with during my projects. I am always eager to explore
                            new technologies and <strong className="text-[#60A5FA] font-semibold">expand my skill
                            set</strong>, so I look forward to <strong className="text-[#60A5FA] font-semibold">growing
                            this toolkit</strong> in the years to come.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SkillsSection;
