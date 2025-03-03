import {FaLinkedin, FaGithub} from "react-icons/fa";

function About() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white ">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">About Me</h1>
                <p className="font-body text-lg text-justify mb-5 bg-slate-800 p-6 rounded-lg">
                    Placeholder:

                    I’m Mathijs van der
                    Meijde, a second-year student and peer coach studying Creative Media & Game Technologies at
                    Rotterdam University of Applied Sciences. I work on a variety of projects, including websites, apps,
                    games, and IoT devices. I also enjoy exploring new technologies and experimenting with different
                    frameworks.

                    I am an organized and detail-oriented person who values structure and planning. I work well in a
                    team and appreciate how different skills can complement each other. I also feel comfortable taking
                    on leadership roles, ensuring that a project stays on track through clear communication and good
                    collaboration.

                    This portfolio highlights the projects I’ve worked on, the skills I’ve developed, and the experience
                    I’ve gained. Feel free to reach out if you have any questions or suggestions!

                </p>
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/mathijs-van-der-meijde-creative-developer/" target="_blank"
                       className="group relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg
                            bg-gradient-to-br from-[#6C5CE7] via-[#A29BFE] to-[#D6CCFF]
                            group-hover:from-[#6C5CE7] group-hover:via-[#A29BFE] group-hover:to-[#D6CCFF]
                            hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-500">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md
                                group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center">
                            <FaLinkedin className="mr-2 text-lg"/> LinkedIn
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
                            <FaGithub className="mr-2 text-lg"/> GitHub
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
