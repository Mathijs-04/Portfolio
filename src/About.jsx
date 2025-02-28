import { FaLinkedin, FaGithub } from "react-icons/fa";

function About() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white ">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">About Me</h1>
                <p className="font-body text-lg text-justify mb-5 bg-slate-800 p-6 rounded-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/mathijs-van-der-meijde-creative-developer/" target="_blank" className="group relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg
                            bg-gradient-to-br from-[#6C5CE7] via-[#A29BFE] to-[#D6CCFF]
                            group-hover:from-[#6C5CE7] group-hover:via-[#A29BFE] group-hover:to-[#D6CCFF]
                            hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-500">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md
                                group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center">
                            <FaLinkedin className="mr-2 text-lg" /> LinkedIn
                        </span>
                        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)]
                                group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                            <div className="relative h-full w-8 bg-white/20"></div>
                        </div>
                    </a>
                    <a href="https://github.com/Mathijs-04" target="_blank" className="group relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg
                            bg-gradient-to-br from-[#6C5CE7] via-[#A29BFE] to-[#D6CCFF]
                            group-hover:from-[#6C5CE7] group-hover:via-[#A29BFE] group-hover:to-[#D6CCFF]
                            hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-500">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md
                                group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center">
                            <FaGithub className="mr-2 text-lg" /> GitHub
                        </span>
                        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)]
                                group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                            <div className="relative h-full w-8 bg-white/20"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
