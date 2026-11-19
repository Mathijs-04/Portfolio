import { useNavigate } from "react-router";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import ExternalLink from "../../components/ExternalLink.jsx";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectEchoesOfTheRealm() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/echoes-of-the-realm.webp",
        "/Portfolio/echoes-of-the-realm-2.webp",
        "/Portfolio/echoes-of-the-realm-3.webp",
        "/Portfolio/echoes-of-the-realm-4.webp",
        "/Portfolio/echoes-of-the-realm-5.webp",
        "/Portfolio/echoes-of-the-realm-6.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">Echoes of the Realm</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Echoes of the Realm" />
                    <div className="flex space-x-3 mb-4">
                        <SiHtml5 className="text-2xl text-blue-400" />
                        <SiCss3 className="text-2xl text-blue-400" />
                        <SiJavascript className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        A Fantasy Soundscape Generator
                    </p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>Echoes of the Realm</Highlight> is a web-based{" "}
                        <Highlight>fantasy soundscape generator</Highlight>. Tired of searching YouTube for the perfect
                        ambience for your tabletop adventures, only to be interrupted by ads? Then this is exactly what
                        you need! Pick one of six locations and set the <Highlight>danger level</Highlight>, from a cozy
                        campfire to a dreadful dungeon. The sound never stops playing and adjusts itself to your needs.
                    </p>
                    <p className="text-justify font-body mb-4">
                        I made this project for a <Highlight>sound design</Highlight> course at school. The sound engine
                        runs in the browser on the <Highlight>Web Audio API</Highlight> and blends about 34 looping beds
                        and 45 one-shot effects into one continuous soundscape. Every clip has a{" "}
                        <Highlight>mood score</Highlight>, and <Highlight>weighted randomness</Highlight> picks clips
                        that fit the vibe without ever sounding identical. One-shots fire more often as the danger
                        rises, and each one is placed near or far using volume, panning and{" "}
                        <Highlight>reverb</Highlight>. Feel free to try it out!
                    </p>
                    <ExternalLink href="https://github.com/Mathijs-04/Echoes-of-the-Realm">
                        Link to the GitHub Repository
                    </ExternalLink>
                    <br />
                    <div className="mt-4"></div>
                    <ExternalLink href="https://mathijs-04.github.io/Echoes-of-the-Realm/">
                        Link to Echoes of the Realm
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectEchoesOfTheRealm;
