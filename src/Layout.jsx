import { Link, Outlet } from "react-router";

function Layout() {
    return (
        <>
            <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
                <h1 className="text-lg font-semibold">Mathijs van der Meijde</h1>

                <div className="flex space-x-6 pr-4">
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                    <Link to="/projects" className="hover:text-gray-400">Projects</Link>
                    <Link to="/experience" className="hover:text-gray-400">Experience</Link>
                    <Link to="/about" className="hover:text-gray-400">About</Link>
                </div>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default Layout;
