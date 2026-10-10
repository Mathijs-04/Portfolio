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
                        <Highlight>Fantasy Soundscape Generator</Highlight>. Tired of endlessly searching YouTube for
                        the perfect ambience to accompany your tabletop adventures, only to be interrupted by ads or
                        forced to find a new playlist every time your party enters a different setting? Then Echoes of
                        the Realm is exactly what you need! This simple online tool lets users pick a setting and
                        adjust the <Highlight>danger level</Highlight>, from a cozy campfire to a dreadful dungeon. The
                        sound never stops playing; it adjusts itself based on your needs.
                    </p>
                    <p className="text-justify font-body mb-4">
                        I made this project for a <Highlight>sound design</Highlight> course at school. It works as
                        follows: the sound engine runs in the browser on the <Highlight>Web Audio API</Highlight>,
                        blending about 34 looping beds and 45 one-shot effects into a continuous soundscape. Every clip
                        carries a <Highlight>mood score</Highlight> from calm to intense. You choose one of six
                        locations and a danger slider, and the selection follows that vibe with{" "}
                        <Highlight>weighted randomness</Highlight>, so it feels right but never identical.
                    </p>
                    <p className="text-justify font-body mb-4">
                        One main ambient loop plus one or two layers form the bed, with slow{" "}
                        <Highlight>crossfades</Highlight> when layers drift to new material every minute or two.
                        One-shots are gated by location, mood, and simple context (day versus night beds, a storm
                        already playing, and similar rules), and they fire more often as danger rises. Each event is
                        placed at random as near, mid, or far using volume, pan, filtering, and{" "}
                        <Highlight>reverb</Highlight>, while the overall wetness grows with danger so tense moments feel
                        larger and more enclosed.
                    </p>
                    <p className="text-justify font-body mb-4">
                        Feel free to try it out through the link below!
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
