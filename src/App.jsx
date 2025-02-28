import {createBrowserRouter, RouterProvider} from 'react-router';
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import About from "./About.jsx";
import Layout from "./Layout.jsx";
import Footer from "./Footer.jsx";

import ProjectPortfolio from "./projects/ProjectPortfolio.jsx";
import ProjectGameCollection from "./projects/ProjectGameCollection.jsx";
import ProjectOpenHiring from "./projects/ProjectOpenHiring.jsx";
import ProjectMightyModels from "./projects/ProjectMightyModels.jsx";
import ProjectDungeonDefender from "./projects/ProjectDungeonDefender.jsx";
import ProjectEXPCorp from "./projects/ProjectEXPCorp.jsx";
import ProjectPortfolioY1 from "./projects/ProjectPortfolioY1.jsx";
import ProjectUnrealEngine from "./projects/ProjectUnrealEngine.jsx";
import ProjectDiceRoller from "./projects/ProjectDiceRoller.jsx";
import ProjectGobboQuest from "./projects/ProjectGobboQuest.jsx";

const router = createBrowserRouter([
        {
            element: <Layout/>,
            children: [
                {path: "/", element: <Home/>},
                {path: "/projects", element: <Projects/>},
                {path: "/experience", element: <Experience/>},
                {path: "/about", element: <About/>},

                {path: "/projects/portfolio", element: <ProjectPortfolio/>},
                {path: "/projects/game-collection", element: <ProjectGameCollection/>},
                {path: "/projects/open-hiring", element: <ProjectOpenHiring/>},
                {path: "/projects/mighty-models", element: <ProjectMightyModels/>},
                {path: "/projects/dungeon-defender", element: <ProjectDungeonDefender/>},
                {path: "/projects/exp-corp", element: <ProjectEXPCorp/>},
                {path: "/projects/portfolio-y1", element: <ProjectPortfolioY1/>},
                {path: "/projects/unreal-engine", element: <ProjectUnrealEngine/>},
                {path: "/projects/dice-roller", element: <ProjectDiceRoller/>},
                {path: "/projects/gobbo-quest", element: <ProjectGobboQuest/>},
            ]
        }
    ]
    // { basename: "/portfolio" }
);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
            <Footer/>
        </>
    );
}

export default App;
