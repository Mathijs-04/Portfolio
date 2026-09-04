import { FaVuejs } from "react-icons/fa";
import { SiPhp, SiPython, SiFastapi, SiOpenai, SiDocker } from "react-icons/si";
import { useNavigate } from "react-router";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectPimoreConverter() {
    const navigate = useNavigate();
    const carouselImages = ['/Portfolio/pimcore-converter.webp', '/Portfolio/pimcore-converter-2.webp', '/Portfolio/pimcore-converter-3.webp', '/Portfolio/pimcore-converter-4.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <div className="flex items-center gap-4 mb-6">
                    <button
                        onClick={() => navigate('/projects')}
                        className="text-4xl font-panchang font-bold text-white hover:opacity-75 transition-opacity cursor-pointer"
                        title="Back to Projects"
                    >
                        ‹
                    </button>
                    <h1 className="text-4xl font-panchang font-bold text-white">Pimcore Converter</h1>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaVuejs className="text-2xl text-blue-400"/>
                        <SiPython className="text-2xl text-blue-400"/>
                        <SiFastapi className="text-2xl text-blue-400"/>
                        <SiPhp className="text-2xl text-blue-400"/>
                        <SiOpenai className="text-2xl text-blue-400"/>
                        <SiDocker className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-xl text-justify mb-4 font-body font-extrabold">A tool to import Exceldata into Pimcore</p>
                    <p className="text-justify font-body mb-4">
                        <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Pimcore Converter</span> is tool made for e-commerce teams using <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Pimcore</span>. Pimcore is used to store large quantities of product data. Many companies still store this data in large <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Excelsheets</span>. Converting these into Pimcore manually is a huge task, which is why I built this tool. You can enter your <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Pimcore credentials</span> in this tool and upload your Exceldata, either by uploading the file or providing a <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Google Drive Link</span>. The Converter uses <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">AI</span> to sample the product data and make sure the correct folders, classes and items are created in Pimcore. Since it processes in batches, there is no limit to the size of the data you can convert. The <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Front-End</span> was built using <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Vue.js</span>, the <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Back-End</span> uses <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Python</span>, <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">FastAPI</span>, <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Symfony PHP</span> and a model from <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">OpenAI</span>. This tool works together with a small <span className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-bold">Pimcore Bundle</span>, which handles our request within your Pimcore Environment.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectPimoreConverter;

