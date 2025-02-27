import { NavLink, Outlet } from "react-router";

function Layout() {
    return (
        <>
            <nav className="bg-gray-900 text-white shadow font-panchang font-semibold">
                <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-gray-800 dark:text-gray-200 border-b-2 border-[#60A5FA] mx-1.5 sm:mx-6" : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-[#60A5FA] mx-1.5 sm:mx-6"}>Home</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "text-gray-800 dark:text-gray-200 border-b-2 border-[#60A5FA] mx-1.5 sm:mx-6" : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-[#60A5FA] mx-1.5 sm:mx-6"}>Projects</NavLink>
                    <NavLink to="/experience" className={({ isActive }) => isActive ? "text-gray-800 dark:text-gray-200 border-b-2 border-[#60A5FA] mx-1.5 sm:mx-6" : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-[#60A5FA] mx-1.5 sm:mx-6"}>Experience</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-gray-800 dark:text-gray-200 border-b-2 border-[#60A5FA] mx-1.5 sm:mx-6" : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-[#60A5FA] mx-1.5 sm:mx-6"}>About</NavLink>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
