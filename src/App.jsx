// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {useState} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import About from "./About.jsx";
import Layout from "./Layout.jsx";

const router = createBrowserRouter(
    [
        {
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/projects",
                    element: <Projects />
                },
                {
                    path: "/experience",
                    element: <Experience />
                },
                {
                    path: "/about",
                    element: <About />
                }
            ]
        }
    ],
    { basename: "/react-notes-app" }
);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
