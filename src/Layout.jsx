import { Link, Outlet } from "react-router";

function Layout() {
    return (
        <>
            <header>
                <h1>Portfolio</h1>
            </header>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/projects"}>Projects</Link>
                <Link to={"/experience"}>Experience</Link>
                <Link to={"/about"}>About</Link>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;
