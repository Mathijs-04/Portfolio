import useTilt from "../hooks/useTilt.js";
import Reveal from "./Reveal.jsx";

function ProjectCard({ project, onClick, center = false, delay = 0 }) {
    const { ref, onMouseMove, onMouseLeave } = useTilt({ max: 4, scale: 1.015 });

    return (
        <Reveal layout delay={delay} y={20} className={center ? "md:col-span-2 md:justify-self-center md:w-1/2" : ""}>
            <div
                ref={ref}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
                className={`relative bg-gray-900 rounded-xl shadow-lg p-6 transition-[background-color,box-shadow] duration-500 cursor-pointer select-none will-change-transform hover:bg-gray-800 ${project.hoverClass}`}
                style={{ transformStyle: "preserve-3d" }}
            >
                <div
                    className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500"
                    style={{
                        opacity: "var(--sheen-opacity, 0)",
                        background:
                            "radial-gradient(circle at var(--sheen-x, 50%) var(--sheen-y, 50%), rgba(162,155,254,0.18), transparent 60%)",
                    }}
                />
                <img src={project.image} alt={project.name} className="project-image rounded-lg mb-4" />
                <h2 className="text-2xl font-semibold text-white">{project.name}</h2>
                <p className="text-gray-400 font-body">{project.description}</p>
                <div className="flex space-x-3 mt-4">
                    {project.tech.map((Icon, i) => (
                        <Icon key={i} className="text-2xl text-blue-400" />
                    ))}
                </div>
            </div>
        </Reveal>
    );
}

export default ProjectCard;
