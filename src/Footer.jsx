import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 px-8 font-body font-semibold gradient-underline-footer">
            <div className="flex flex-col md:flex-row justify-between items-center px-6">

                <span className="text-sm md:text-base font-semibold text-white">
                    Designed & developed by <span className="text-[#60A5FA]">Mathijs van der Meijde</span>
                </span>

                <ul className="flex space-x-6 mt-3 md:mt-0 text-gray-400">
                    <li>
                        <a href="https://www.linkedin.com/in/mathijs-van-der-meijde-creative-developer/"
                           target="_blank"
                           className="border-b-2 border-transparent hover:text-gray-200 hover:border-[#60A5FA] transition-colors duration-200 flex items-center">
                            <FaLinkedin className="mr-2 text-lg"/> LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Mathijs-04"
                           target="_blank"
                           className="border-b-2 border-transparent hover:text-gray-200 hover:border-[#60A5FA] transition-colors duration-200 flex items-center">
                            <FaGithub className="mr-2 text-lg"/> GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
