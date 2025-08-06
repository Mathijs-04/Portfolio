import {FaQuestionCircle} from "react-icons/fa";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectComingSoon() {
    const carouselImages = ['/Portfolio/soon.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Coming Soon</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaQuestionCircle className="text-blue-500 text-2xl" />
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">Projects I am currently working on</p>
                    <p className="text-justify font-body mb-4">
                        I am currently working on some projects which are not yet finished. These projects will be added to my portfolio soon, so keep an eye out for the latest updates!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectComingSoon;
