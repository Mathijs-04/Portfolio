import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import Footer from "./Footer.jsx";

const SITE_NAME = "Mathijs van der Meijde";
const HOME_TITLE = `${SITE_NAME} | Creative Technologist`;

const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/about", label: "About" },
];

function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const heading = document.querySelector("main h1")?.textContent?.trim();
        if (pathname === "/" || !heading) {
            document.title = HOME_TITLE;
            return;
        }
        document.title = `${heading === "404" ? "Page Not Found" : heading} | ${SITE_NAME}`;
    }, [pathname]);

    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-gray-900 text-white shadow font-panchang font-semibold gradient-underline-nav select-none">
                <div className="md:hidden flex justify-between items-center px-4 py-3">
                    <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold">
                        Mathijs van der Meijde
                    </NavLink>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        className="text-2xl p-1 -mr-1"
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
                <div
                    className={`md:hidden ${isMenuOpen ? "absolute w-full bg-gray-900 z-50 gradient-underline-nav" : "hidden"}`}
                >
                    <div className="flex flex-col items-start space-y-1 px-4 pt-1 pb-5">
                        {links.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                className={({ isActive }) =>
                                    `text-base py-2 ${isActive ? "nav-link active" : "nav-link"}`
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className="max-md:hidden container flex items-center justify-center p-6 mx-auto capitalize text-white">
                    {links.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                isActive ? "nav-link active mx-1.5 sm:mx-6" : "nav-link mx-1.5 sm:mx-6"
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
            </nav>
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
