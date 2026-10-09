import { motion } from "framer-motion";
import { FaBriefcase, FaExternalLinkAlt, FaGithub, FaGraduationCap, FaLinkedin } from "react-icons/fa";
import Highlight from "../components/Highlight.jsx";

const GITHUB_URL = "https://github.com/Mathijs-04";
const LINKEDIN_URL = "https://www.linkedin.com/in/mathijs-van-der-meijde-creative-developer/";

const roles = [
    { icon: FaBriefcase, title: "Full-Stack Developer", at: "NOBEARS Rotterdam", href: "https://www.nobears.com/" },
    {
        icon: FaGraduationCap,
        title: "Student Creative Media & Game Technologies",
        at: "Hogeschool Rotterdam",
        href: "https://www.hogeschoolrotterdam.nl/",
    },
];

const sections = [
    {
        icon: FaBriefcase,
        title: "Work",
        text: (
            <>
                I currently work as a <Highlight as="strong">Full-Stack Developer</Highlight> at NOBEARS, a business
                accelerator based in Rotterdam. There I work on challenging projects, collaborate on team efforts and
                learn from experienced developers.
            </>
        ),
    },
    {
        icon: FaGraduationCap,
        title: "School",
        text: (
            <>
                I&apos;m studying <Highlight as="strong">Creative Media and Game Technologies</Highlight> at Hogeschool
                Rotterdam, now in my fourth year. I work on all kinds of creative tech projects, which lets me grow as
                both a designer and a developer.
            </>
        ),
    },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: "easeOut" },
});

function LinkButton({ href, onClick, icon: Icon, children, className = "" }) {
    const classes = `group relative inline-flex select-none items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg bg-gradient-to-br from-[#351B54] via-[#2D4180] to-[#2568A8] md:hover:text-white btn-white-text max-md:w-full ${className}`;
    const content = (
        <>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md md:group-hover:bg-transparent flex items-center justify-center w-full text-white">
                {Icon && <Icon className="mr-2 text-lg text-white" />}
                {children}
            </span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] md:group-hover:duration-1000 md:group-hover:[transform:skew(-12deg)_translateX(100%)] max-md:hidden pointer-events-none">
                <div className="relative h-full w-8 bg-white/20"></div>
            </div>
        </>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noreferrer" className={classes}>
                {content}
            </a>
        );
    }
    return (
        <button type="button" onClick={onClick} className={classes}>
            {content}
        </button>
    );
}

function About() {
    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 max-md:px-4 text-white">
                <motion.h1 {...fadeUp()} className="text-4xl max-md:text-2xl font-panchang font-bold text-white mb-6">
                    About Me
                </motion.h1>

                <motion.div
                    {...fadeUp(0.1)}
                    className="relative overflow-hidden bg-slate-800/90 p-6 pt-7 max-md:p-4 max-md:pt-5 rounded-lg"
                >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA]" />
                    <div className="grid items-center justify-items-center gap-6 md:justify-items-stretch md:grid-cols-[auto_1fr] md:gap-x-8">
                        <div className="shrink-0 select-none p-0.5 rounded-full bg-gradient-to-br from-[#6C5CE7] to-[#60A5FA]">
                            <img
                                src="/Portfolio/profile.webp"
                                alt="Portrait of Mathijs van der Meijde"
                                width="900"
                                height="1200"
                                className="h-36 w-36 md:h-44 md:w-44 rounded-full object-cover object-[50%_20%] block"
                            />
                        </div>

                        <div className="min-w-0 w-full font-body max-md:text-center">
                            <h2 className="text-3xl md:text-4xl font-panchang font-bold">Mathijs van der Meijde</h2>

                            <ul className="mt-5 flex flex-col gap-2.5">
                                {roles.map(({ icon: Icon, title, at, href }) => (
                                    <li
                                        key={title}
                                        className="flex flex-wrap select-none items-center justify-between gap-x-6 gap-y-1 rounded-full max-md:rounded-2xl bg-gray-900 border border-white/10 px-5 py-2.5 text-sm text-left"
                                    >
                                        <span className="flex items-center gap-3">
                                            <Icon className="shrink-0 text-blue-400" />
                                            <span className="font-semibold">{title}</span>
                                        </span>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="link-underline group inline-flex items-center gap-2 max-md:pl-7"
                                        >
                                            <span className="font-semibold text-blue-400">{at}</span>
                                            <FaExternalLinkAlt className="text-[10px] text-gray-400 transition-colors group-hover:text-blue-400" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    {...fadeUp(0.2)}
                    className="bg-slate-800/90 rounded-lg p-6 max-md:p-4 mt-4 lg:mt-6 flex flex-col gap-6 lg:gap-8"
                >
                    <div className="relative pl-5 md:pl-6">
                        <span className="absolute left-0 inset-y-1 w-1 rounded-full bg-gradient-to-b from-[#6C5CE7] to-[#60A5FA]" />
                        <p className="font-body text-lg md:text-xl leading-relaxed text-gray-100 text-pretty">
                            I love building for <Highlight as="strong">the web</Highlight>, working with{" "}
                            <Highlight as="strong">3D</Highlight>, experimenting with{" "}
                            <Highlight as="strong">AI</Highlight> and developing{" "}
                            <Highlight as="strong">games</Highlight>. I enjoy exploring the latest technologies and
                            using them to build things that are both fun and functional, from experiments to products.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                        {sections.map(({ icon: Icon, title, text }) => (
                            <div key={title} className="rounded-xl bg-gray-900/70 border border-white/5 p-5 md:p-6">
                                <div className="flex items-center gap-3 mb-4 select-none">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-blue-400 text-lg">
                                        <Icon />
                                    </span>
                                    <h3 className="font-panchang font-semibold text-lg">{title}</h3>
                                </div>
                                <p className="font-body text-gray-300 leading-7 lg:text-justify">{text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                        <LinkButton href={LINKEDIN_URL} icon={FaLinkedin}>
                            LinkedIn
                        </LinkButton>
                        <LinkButton href={GITHUB_URL} icon={FaGithub}>
                            GitHub
                        </LinkButton>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
