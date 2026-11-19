import { useNavigate } from "react-router";
import { FaDatabase, FaReact } from "react-icons/fa";
import { IoIosGitNetwork } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import ExcaliburLogo from "/excalibur-logo-blue.webp";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

const ExcaliburIcon = () => <img src={ExcaliburLogo} alt="Excalibur.js Logo" className="w-8 h-8 relative -top-1" />;

function ProjectSignTrail() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/sign-trail.webp",
        "/Portfolio/sign-trail-2.webp",
        "/Portfolio/sign-trail-3.webp",
        "/Portfolio/sign-trail-4.webp",
        "/Portfolio/sign-trail-5.webp",
        "/Portfolio/sign-trail-6.webp",
    ];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 max-md:px-4 text-white">
                <div className="flex items-center gap-4 mb-6">
                    <button
                        onClick={() => navigate("/projects")}
                        className="text-4xl font-panchang font-bold text-white hover:opacity-75 transition-opacity cursor-pointer select-none"
                        title="Back to Projects"
                    >
                        ‹
                    </button>
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">SignTrail</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="SignTrail" />
                    <div className="flex space-x-3 mb-4">
                        <FaReact className="text-2xl text-blue-400" />
                        <SiTailwindcss className="text-2xl text-blue-400" />
                        <FaDatabase className="text-2xl text-blue-400" />
                        <IoIosGitNetwork className="text-2xl text-blue-400" />
                        <ExcaliburIcon />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        An educational sign language game for students
                    </p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>SignTrail</Highlight> is an <Highlight>educational game</Highlight> for students
                        learning <Highlight>sign language</Highlight>. Your goal is to help your snail reach the finish
                        as fast as possible by making the right sign language gestures in front of your{" "}
                        <Highlight>webcam</Highlight>. The game features a <Highlight>difficulty system</Highlight>, a{" "}
                        <Highlight>personal scoreboard</Highlight>, a gesture overview page and an official{" "}
                        <Highlight>school login</Highlight>, so it is only accessible to actual students.
                    </p>
                    <p className="text-justify font-body mb-4">
                        We worked with a separate Front-End and Back-End team. I was part of the{" "}
                        <Highlight>Front-End team</Highlight> and was responsible for the website and the game. One of
                        the biggest challenges was combining two JavaScript frameworks, <Highlight>React</Highlight> and{" "}
                        <Highlight>Excalibur.js</Highlight>, into a single product. It took some effort to get there,
                        but in the end, we made it work!
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/TLE2-Front-End">
                        Link to the GitHub Repository
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectSignTrail;
