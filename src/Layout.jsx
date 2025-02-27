import { NavLink, Outlet } from "react-router";

function Layout() {
    return (
        <>
            <nav className="bg-gray-900 text-white shadow font-panchang font-semibold gradient-underline-nav">
                <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active mx-1.5 sm:mx-6" : "nav-link mx-1.5 sm:mx-6"}>Home</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active mx-1.5 sm:mx-6" : "nav-link mx-1.5 sm:mx-6"}>Projects</NavLink>
                    <NavLink to="/experience" className={({ isActive }) => isActive ? "nav-link active mx-1.5 sm:mx-6" : "nav-link mx-1.5 sm:mx-6"}>Experience</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active mx-1.5 sm:mx-6" : "nav-link mx-1.5 sm:mx-6"}>About</NavLink>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
