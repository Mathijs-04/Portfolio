import { FaVuejs } from "react-icons/fa";
import { SiPython, SiOpenai, SiDocker } from "react-icons/si";
import CarouselComponent from "../ProjectCarousel.jsx";

function ProjectHostingRecommender() {
    const carouselImages = ['/Portfolio/hosting-recommender.webp', '/Portfolio/hosting-recommender-2.webp', '/Portfolio/hosting-recommender-3.webp', '/Portfolio/hosting-recommender-4.webp'];

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl font-panchang font-bold text-white mb-6">Hosting Recommender</h1>
                <div className="bg-slate-800 p-6 rounded-lg mb-5">
                    <CarouselComponent images={carouselImages}/>
                    <div className="flex space-x-3 mb-4">
                        <FaVuejs className="text-2xl text-blue-400"/>
                        <SiPython className="text-2xl text-blue-400"/>
                        <SiOpenai className="text-2xl text-blue-400"/>
                        <SiDocker className="text-2xl text-blue-400"/>
                    </div>
                    <p className="text-lg text-justify mb-4 font-body font-bold">A company website which recommends hosting packages</p>
                    <p className="text-justify font-body mb-4"><strong className='text-[#60A5FA] font-semibold'>Hosting Recommender</strong> is an intelligent full-stack application that helps users find the perfect hosting solution for their specific needs. Using a sophisticated matching algorithm, the application analyzes user requirements and provides personalized hosting recommendations from a comprehensive database of providers. Built with <strong className='text-[#60A5FA] font-semibold'>React</strong> on the frontend and <strong className='text-[#60A5FA] font-semibold'>Node.js</strong> with <strong className='text-[#60A5FA] font-semibold'>MongoDB</strong> on the backend, this MERN-stack application offers real-time filtering, comparisons, and detailed provider information. The intuitive interface allows users to easily specify their requirements and receive curated recommendations based on performance, price, and features.</p>
                    <a href="https://github.com" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the GitHub Repository</a>
                    <br/>
                    <div className='mt-4'></div>
                    <a href="#" className='text-lg font-body font-bold underline text-blue-400' target="_blank">Link to the Application</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectHostingRecommender;

