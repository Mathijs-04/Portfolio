import { FaLinkedin, FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";

function About() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">About Me</h1>
                <div className="bg-slate-800/90 p-6 rounded-lg overflow-hidden">
                    <div className="relative z-10">
                        <div className="font-body text-lg mb-5">
                            <Typewriter
                                options={{
                                    loop: false,
                                    delay: 0,
                                    html: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .pauseFor(500)
                                        .typeString("I’m <span class='underline no-underline'>Mathijs van der Meijde</span>, a second-year student and peercoach studying <span class='underline no-underline'>Creative Media and Game Technologies</span> at Rotterdam University of Applied Sciences. Throughout my CMGT studies, I work on a wide range of projects, including <span class='underline no-underline'>websites</span>, <span class='underline no-underline'>apps</span>, and <span class='underline no-underline'>games</span>. I enjoy exploring new technologies and expanding my skill set by learning different tools, frameworks, and development techniques.")
                                        .pauseFor(1000)
                                        .typeString(" I’m also a <span class='underline no-underline'>peercoach</span> at CMGT, coaching first-year students and helping them with their projects.")
                                        .pauseFor(1000)
                                        .typeString(" <br><br> During my projects, I often <span class='underline no-underline'>work in a team</span> and enjoy taking on a leading role. While I focus on building exciting products, I also actively address important aspects like <span class='underline no-underline'>security</span>, <span class='underline no-underline'>accessibility</span>, and <span class='underline no-underline'>user experience</span>. A key part of this process is maintaining clear communication and valuing the input of all team members to ensure we are all aligned and working towards the best possible solution. In addition to technical tasks, I contribute to <span class='underline no-underline'>prototyping</span>, <span class='underline no-underline'>iterating</span>, <span class='underline no-underline'>planning</span>, <span class='underline no-underline'>presenting</span>, and handling <span class='underline no-underline'>documentation</span>. I believe these non-technical tasks are just as crucial for the success of a project.")
                                        .pauseFor(1000)
                                        .typeString("<br><br> I’m constantly improving my knowledge of existing technologies while also diving into completely new ones to stay up-to-date with the rapidly evolving tech landscape. In the future, I’m <span class='underline no-underline'>open to new challenges</span> and looking to <span class='underline no-underline'>grow my skill set</span>, whether in web development or other areas of technology.")
                                        .pauseFor(1000)
                                        .typeString("<br><br> This portfolio showcases my <span class='underline no-underline'>favourite projects</span> and the technologies I’ve worked with so far. You can explore more of my work on my <span class='underline no-underline'>GitHub</span> page, and feel free to reach out to me through my <span class='underline no-underline'>LinkedIn</span> page!")
                                        .start();
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex space-x-4 mt-4">
                    <a href="https://github.com/Mathijs-04" target="_blank" className="group relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-[#6C5CE7] via-[#A29BFE] to-[#D6CCFF] group-hover:from-[#6C5CE7] group-hover:via-[#A29BFE] group-hover:to-[#D6CCFF] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-500">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center">
                            <FaGithub className="mr-2 text-lg" /> GitHub
                        </span>
                        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                            <div className="relative h-full w-8 bg-white/20"></div>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/mathijs-van-der-meijde-creative-developer/" target="_blank" className="group relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-[#6C5CE7] via-[#A29BFE] to-[#D6CCFF] group-hover:from-[#6C5CE7] group-hover:via-[#A29BFE] group-hover:to-[#D6CCFF] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-500">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center">
                            <FaLinkedin className="mr-2 text-lg" /> LinkedIn
                        </span>
                        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                            <div className="relative h-full w-8 bg-white/20"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
