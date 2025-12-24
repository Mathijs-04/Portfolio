import { FaVuejs } from "react-icons/fa";
import { SiPhp, SiPython, SiFastapi, SiOpenai, SiDocker } from "react-icons/si";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectPimoreConverter() {
    const carouselImages = ['/Portfolio/pimcore-converter.webp', '/Portfolio/pimcore-converter-2.webp', '/Portfolio/pimcore-converter-3.webp', '/Portfolio/pimcore-converter-4.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Pimcore Converter</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaVuejs className="text-2xl text-blue-400"/>
                        <SiPhp className="text-2xl text-blue-400"/>
                        <SiPython className="text-2xl text-blue-400"/>
                        <SiFastapi className="text-2xl text-blue-400"/>
                        <SiOpenai className="text-2xl text-blue-400"/>
                        <SiDocker className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">A tool to import Exceldata into Pimcore</p>
                    <p className="text-justify font-body mb-4"><strong className='text-[#60A5FA] font-semibold'>Pimcore Converter</strong> is a robust tool designed to streamline data conversion and migration tasks within the <strong className='text-[#60A5FA] font-semibold'>Pimcore</strong> content management system. This application simplifies the process of converting and transforming data formats, making it easier for content managers and developers to work with complex data structures. Built with <strong className='text-[#60A5FA] font-semibold'>Laravel</strong> and featuring a clean <strong className='text-[#60A5FA] font-semibold'>Tailwind CSS</strong> interface, this tool provides a user-friendly way to handle data conversions with support for multiple data formats and sources. The application includes validation, error handling, and detailed logging for all conversion operations.</p>
                    <a href="https://github.com" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                    <br/>
                    <div className='mt-4'></div>
                    <a href="#" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the Application</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectPimoreConverter;

