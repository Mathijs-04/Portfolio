import { NavLink, Outlet } from "react-router";
import Footer from "./Footer.jsx";
import { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";

function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-gray-900 text-white shadow font-panchang font-semibold gradient-underline-nav">
                <div className="md:hidden flex justify-between items-center p-4">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">{isMenuOpen ? <FiX /> : <FiMenu />}</button>
                </div>
                <div className={`md:hidden ${isMenuOpen ? 'absolute w-full bg-gray-900 z-50 gradient-underline-nav' : 'hidden'}`}>
                    <div className="flex flex-col items-start space-y-4 p-4 pt-2 pb-6">
                        <NavLink to="/" className={({ isActive }) => `text-sm ${isActive ? 'nav-link active' : 'nav-link'}`} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => `text-sm ${isActive ? 'nav-link active' : 'nav-link'}`} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                        <NavLink to="/experience" className={({ isActive }) => `text-sm ${isActive ? 'nav-link active' : 'nav-link'}`} onClick={() => setIsMenuOpen(false)}>Experience</NavLink>
                        <NavLink to="/about" className={({ isActive }) => `text-sm ${isActive ? 'nav-link active' : 'nav-link'}`} onClick={() => setIsMenuOpen(false)}>About</NavLink>
                    </div>
                </div>
                <div className="max-md:hidden container flex items-center justify-center p-6 mx-auto capitalize text-white">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active mx-1.5 sm:mx-6" : "nav-link mx-1.5 sm:mx-6"}>Home</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active mx-1.5 sm:mx-6" : "nav-link mx-1.5 sm:mx-6"}>Projects</NavLink>
                    <NavLink to="/experience" className={({ isActive }) => isActive ? "nav-link active mx-1.5 sm:mx-6" : "nav-link mx-1.5 sm:mx-6"}>Experience</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active mx-1.5 sm:mx-6" : "nav-link mx-1.5 sm:mx-6"}>About</NavLink>
                </div>
            </nav>
            <main className="flex-grow"><Outlet /></main>
            <Footer />
        </div>
    );
}

export default Layout;
