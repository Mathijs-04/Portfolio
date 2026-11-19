import { useNavigate } from "react-router";
import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiMysql } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectEXPCorp() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/exp-corp.webp",
        "/Portfolio/exp-corp-2.webp",
        "/Portfolio/exp-corp-3.webp",
        "/Portfolio/exp-corp-4.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">EXPCorp.</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="EXPCorp." />
                    <div className="flex space-x-3 mb-4">
                        <SiHtml5 className="text-2xl text-blue-400" />
                        <SiCss3 className="text-2xl text-blue-400" />
                        <SiJavascript className="text-2xl text-blue-400" />
                        <SiPhp className="text-2xl text-blue-400" />
                        <SiMysql className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        A fictional company website specialized in VR experiences
                    </p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>EXPCorp.</Highlight> is a website for a <Highlight>fictional company</Highlight> that
                        offers virtual experiences to the elderly. The concept came from a team brainstorm about{" "}
                        <Highlight>dystopian and utopian scenarios</Highlight>, in which we chose a future where{" "}
                        <Highlight>Virtual Reality</Highlight> takes over the world. We then developed a website that
                        suited that scenario, and EXPCorp. was born.
                    </p>
                    <p className="text-justify font-body mb-4">
                        The website offers nine unique virtual experiences that can be used with or without a{" "}
                        <Highlight>VR headset</Highlight>, a product page, and an interactive{" "}
                        <Highlight>questionnaire</Highlight> that determines which VR gear suits you best. It was built
                        with <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight>, <Highlight>JavaScript</Highlight>,{" "}
                        <Highlight>PHP</Highlight> and <Highlight>MySQL</Highlight>. EXPCorp. was never meant to be a
                        solution, but rather a way to make people think about the future of technology.
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/TLE1-SPRINT3">
                        Link to the GitHub Repository
                    </ExternalLink>
                    <br />
                    <div className="mt-4"></div>
                    <ExternalLink href="https://stud.hosted.hr.nl/1068031/TLE1-SPRINT3/index.php">
                        Link to EXPCorp.
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectEXPCorp;
