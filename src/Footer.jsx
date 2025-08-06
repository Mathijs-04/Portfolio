import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4 md:py-6 px-4 md:px-8 font-body font-semibold gradient-underline-footer">
            <div className="flex flex-col md:flex-row justify-between items-center max-md:space-y-4">
                <span className="text-xs md:text-base text-center md:text-left">Designed & developed by <span className="text-[#60A5FA]">Mathijs van der Meijde</span></span>
                <ul className="flex space-x-4 md:space-x-6 text-white">
                    <li>
                        <a href="https://www.linkedin.com/in/mathijs-van-der-meijde-creative-developer/" target="_blank" className="flex items-center text-sm md:text-base">
                            <FaLinkedin className="mr-1 md:mr-2" /><span className="max-md:hidden">LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Mathijs-04" target="_blank" className="flex items-center text-sm md:text-base">
                            <FaGithub className="mr-1 md:mr-2" /><span className="max-md:hidden">GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
