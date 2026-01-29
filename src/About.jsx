import {useState} from "react";
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {RiSpeedLine} from "react-icons/ri";
import Typewriter from "typewriter-effect";

function About() {
    const [skipAnimation, setSkipAnimation] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);
    const finalText = `I'm <strong class='text-[#60A5FA] font-semibold'>Mathijs van der Meijde</strong>, a third-year student studying <strong class='text-[#60A5FA] font-semibold'>Creative Media and Game Technologies</strong> at Rotterdam University of Applied Sciences. Throughout my CMGT studies, I work on a wide range of projects, including <strong class='text-[#60A5FA] font-semibold'>websites</strong>, <strong class='text-[#60A5FA] font-semibold'>apps</strong>, and <strong class='text-[#60A5FA] font-semibold'>games</strong>. I enjoy exploring new technologies and expanding my skill set by learning different tools, frameworks, and development techniques. In my second year, I was a <strong class='text-[#60A5FA] font-semibold'>peercoach</strong> at CMGT, coaching first-year students and helping them with their projects. <br><br>I'm currently <strong class='text-[#60A5FA] font-semibold'>working</strong> at <strong class='text-[#60A5FA] font-semibold'>Bitfactory (Part of NOBEARS)</strong>, a <strong class='text-[#60A5FA] font-semibold'>Digital Agency</strong> based in Rotterdam. I'm working in the <strong class='text-[#60A5FA] font-semibold'>Data and AI</strong> team, where I'm taking on my own <strong class='text-[#60A5FA] font-semibold'>projects</strong> as well as <strong class='text-[#60A5FA] font-semibold'>collaborating</strong> on team efforts. This internship gives me the opportunity to gain <strong class='text-[#60A5FA] font-semibold'>real-world experience</strong>, improve my <strong class='text-[#60A5FA] font-semibold'>development skills</strong>, and learn what it's like to work in a <strong class='text-[#60A5FA] font-semibold'>professional web development environment</strong>. I'm learning from experienced developers and contributing to innovative digital solutions. <br><br>During my projects, I like to <strong class='text-[#60A5FA] font-semibold'>work in a team</strong> and experiment with <strong class='text-[#60A5FA] font-semibold'>new technologies</strong>. While I'm building exciting products, I also address important aspects like <strong class='text-[#60A5FA] font-semibold'>security</strong>, <strong class='text-[#60A5FA] font-semibold'>accessibility</strong>, and <strong class='text-[#60A5FA] font-semibold'>user experience</strong>. I'm constantly trying to improve my knowledge of existing technologies while also diving into completely new ones to stay up-to-date with the rapidly evolving tech landscape. In the future, I'm <strong class='text-[#60A5FA] font-semibold'>open to new challenges</strong> and looking to <strong class='text-[#60A5FA] font-semibold'>grow my skill set</strong>, whether in webdevelopment or other areas of technology. <br><br>This portfolio showcases my <strong class='text-[#60A5FA] font-semibold'>favourite projects</strong> and the technologies I've worked with so far. You can explore more of my work on my <strong class='text-[#60A5FA] font-semibold'>GitHub</strong> page, and feel free to reach out to me through my <strong class='text-[#60A5FA] font-semibold'>LinkedIn</strong> page!`;
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6 max-md:text-2xl">About Me</h1>
                <div className="relative bg-slate-800/90 p-6 rounded-lg overflow-hidden">
                    <div className="font-body text-base md:text-lg mb-5 px-3 leading-relaxed md:text-justify">
                        {skipAnimation ? <div dangerouslySetInnerHTML={{__html: finalText}}/> : (
                            <Typewriter options={{loop: false, delay: 25, html: true}} onInit={(typewriter) => {
                                typewriter.typeString(finalText).callFunction(() => setAnimationComplete(true)).start();
                            }}/>
                        )}
                    </div>
                    <button
                        className={`absolute bottom-2 right-2 p-2 rounded-full text-white transition ${animationComplete ? "bg-gray-500 cursor-default" : "bg-blue-500 hover:bg-blue-600"}`}
                        onClick={() => {
                            setSkipAnimation(true);
                            setAnimationComplete(true);
                        }} disabled={animationComplete}>
                        <RiSpeedLine className="text-xl"/>
                    </button>
                </div>
                <div className="flex space-x-4 mt-4 max-md:flex-col max-md:space-x-0 max-md:gap-4">
                    <a href="https://github.com/Mathijs-04" target="_blank"
                       className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 max-md:text-white rounded-lg bg-gradient-to-br from-[#6C5CE7] via-[#A29BFE] to-[#D6CCFF] md:hover:text-white dark:text-white max-md:w-full">
                            <span
                                className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-md md:group-hover:bg-transparent md:group-hover:dark:bg-transparent flex items-center justify-center w-full">
                                <FaGithub className="mr-2 text-lg"/> GitHub
                            </span>
                        <div
                            className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] md:group-hover:duration-1000 md:group-hover:[transform:skew(-12deg)_translateX(100%)] max-md:hidden">
                            <div className="relative h-full w-8 bg-white/20"></div>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/mathijs-van-der-meijde-creative-developer/" target="_blank"
                       className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 max-md:text-white rounded-lg bg-gradient-to-br from-[#6C5CE7] via-[#A29BFE] to-[#D6CCFF] md:hover:text-white dark:text-white max-md:w-full">
                         <span
                             className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-md md:group-hover:bg-transparent md:group-hover:dark:bg-transparent flex items-center justify-center w-full">
                            <FaLinkedin className="mr-2 text-lg"/> LinkedIn
                         </span>
                        <div
                            className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] md:group-hover:duration-1000 md:group-hover:[transform:skew(-12deg)_translateX(100%)] max-md:hidden">
                            <div className="relative h-full w-8 bg-white/20"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
