import useTilt from "../hooks/useTilt.js";

function ProjectCard({ project, onClick, className = "" }) {
    const { ref, onMouseMove, onMouseLeave } = useTilt({ max: 4, scale: 1.015 });

    return (
        <div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            className={`relative bg-gray-900 rounded-xl shadow-lg p-4 lg:p-6 transition-[background-color,box-shadow] duration-500 cursor-pointer select-none will-change-transform hover:bg-gray-800 ${project.hoverClass} ${className}`}
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
            <img src={project.image} alt={`Preview of ${project.name}`} className="project-image rounded-lg mb-4" />
            <h2 className="text-xl lg:text-2xl font-semibold text-white">{project.name}</h2>
            <p className="text-gray-400 font-body">{project.description}</p>
            <div className="flex space-x-3 mt-4">
                {project.tech.map((Icon, i) => (
                    <Icon key={i} className="text-2xl text-blue-400" />
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;
