import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import About from "./About.jsx";
import Layout from "./Layout.jsx";

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
import ProjectSignTrail from "./projects/ProjectSignTrail.jsx";
import ProjectDNDGPT from "./projects/ProjectDNDGPT.jsx";
import ProjectSchildMagieZwaard from "./projects/ProjectSchildMagieZwaard.jsx";
import ProjectFitnessFinder from "./projects/ProjectFitnessFinder.jsx";
// import ProjectComingSoon from "./projects/ProjectComingSoon.jsx";
import NotFound from "./NotFound.jsx";

const router = createBrowserRouter(
    [
        {
            element: <Layout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/projects", element: <Projects /> },
                { path: "/experience", element: <Experience /> },
                { path: "/about", element: <About /> },

                { path: "/projects/portfolio", element: <ProjectPortfolio /> },
                { path: "/projects/game-collection", element: <ProjectGameCollection /> },
                { path: "/projects/open-hiring", element: <ProjectOpenHiring /> },
                { path: "/projects/mighty-models", element: <ProjectMightyModels /> },
                { path: "/projects/dungeon-defender", element: <ProjectDungeonDefender /> },
                { path: "/projects/exp-corp", element: <ProjectEXPCorp /> },
                { path: "/projects/portfolio-y1", element: <ProjectPortfolioY1 /> },
                { path: "/projects/unreal-engine", element: <ProjectUnrealEngine /> },
                { path: "/projects/dice-roller", element: <ProjectDiceRoller /> },
                { path: "/projects/gobbo-quest", element: <ProjectGobboQuest /> },
                { path: "/projects/sign-trail", element: <ProjectSignTrail /> },
                { path: "/projects/dnd-gpt", element: <ProjectDNDGPT /> },
                { path: "/projects/schild-magie-zwaard", element: <ProjectSchildMagieZwaard /> },
                { path: "/projects/fitness-finder", element: <ProjectFitnessFinder /> },
                // { path: "/projects/coming-soon", element: <ProjectComingSoon /> },
                { path: "*", element: <NotFound /> }
            ],
        },
    ],
    { basename: "/Portfolio" }
);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
