import { useNavigate } from "react-router";
import { FaVuejs } from "react-icons/fa";
import { SiPhp, SiPython, SiFastapi, SiOpenai, SiDocker } from "react-icons/si";
import Highlight from "../../components/Highlight.jsx";
import ProjectCarousel from "../../components/ProjectCarousel.jsx";

function ProjectPimcoreConverter() {
    const navigate = useNavigate();
    const carouselImages = [
        "/Portfolio/pimcore-converter.webp",
        "/Portfolio/pimcore-converter-2.webp",
        "/Portfolio/pimcore-converter-3.webp",
        "/Portfolio/pimcore-converter-4.webp",
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
                    <h1 className="text-4xl max-md:text-2xl font-panchang font-bold text-white">Pimcore Converter</h1>
                </div>
                <div className="bg-slate-800 p-6 max-md:p-4 rounded-lg mb-5">
                    <ProjectCarousel images={carouselImages} name="Pimcore Converter" />
                    <div className="flex space-x-3 mb-4">
                        <FaVuejs className="text-2xl text-blue-400" />
                        <SiPython className="text-2xl text-blue-400" />
                        <SiFastapi className="text-2xl text-blue-400" />
                        <SiPhp className="text-2xl text-blue-400" />
                        <SiOpenai className="text-2xl text-blue-400" />
                        <SiDocker className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">
                        A tool to import Excel data into Pimcore
                    </p>
                    <p className="text-justify font-body mb-4">
                        <Highlight>Pimcore Converter</Highlight> is a tool made for e-commerce teams using{" "}
                        <Highlight>Pimcore</Highlight>. Pimcore is used to store large quantities of product data. Many
                        companies still store this data in large <Highlight>Excel</Highlight> sheets. Converting these
                        into Pimcore manually is a huge task, which is why I built this tool. You can enter your Pimcore
                        credentials in this tool and upload your Excel data, either by uploading the file or providing a{" "}
                        <Highlight>Google Drive</Highlight> Link. The Converter uses AI to sample the product data and
                        make sure the correct folders, classes and items are created in Pimcore. Since it processes in
                        batches, there is no limit to the size of the data you can convert. The Front-End was built
                        using <Highlight>Vue.js</Highlight>, the Back-End uses <Highlight>Python</Highlight>,{" "}
                        <Highlight>FastAPI</Highlight>, <Highlight>Symfony PHP</Highlight> and a model from{" "}
                        <Highlight>OpenAI</Highlight>. This tool works together with a small Pimcore Bundle, which
                        handles our request within your Pimcore Environment.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectPimcoreConverter;
