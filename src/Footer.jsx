import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 px-8">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <span className="text-sm text-gray-400">
                    © 2023 Mathijs van der Meijde. All Rights Reserved.
                </span>

                <ul className="flex space-x-6 mt-3 md:mt-0">
                    <li>
                        <a href="#" className="hover:text-gray-400">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-400">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
