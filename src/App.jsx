import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { MotionConfig } from "framer-motion";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import ProjectAITravelPlanner from "./pages/projects/ProjectAITravelPlanner.jsx";
import ProjectAdventurersArmory from "./pages/projects/ProjectAdventurersArmory.jsx";
import ProjectArcaneArchive from "./pages/projects/ProjectArcaneArchive.jsx";
import ProjectBlijeBij from "./pages/projects/ProjectBlijeBij.jsx";
import ProjectComingSoon from "./pages/projects/ProjectComingSoon.jsx";
import ProjectDNDGPT from "./pages/projects/ProjectDNDGPT.jsx";
import ProjectDiceRoller from "./pages/projects/ProjectDiceRoller.jsx";
import ProjectDungeonDefender from "./pages/projects/ProjectDungeonDefender.jsx";
import ProjectEchoesOfTheRealm from "./pages/projects/ProjectEchoesOfTheRealm.jsx";
import ProjectEXPCorp from "./pages/projects/ProjectEXPCorp.jsx";
import ProjectFitnessFinder from "./pages/projects/ProjectFitnessFinder.jsx";
import ProjectFlashcardGenerator from "./pages/projects/ProjectFlashcardGenerator.jsx";
import ProjectGameCollection from "./pages/projects/ProjectGameCollection.jsx";
import ProjectGobboQuest from "./pages/projects/ProjectGobboQuest.jsx";
import ProjectHostingRecommender from "./pages/projects/ProjectHostingRecommender.jsx";
import ProjectMightyModels from "./pages/projects/ProjectMightyModels.jsx";
import ProjectObject1 from "./pages/projects/ProjectObject1.jsx";
import ProjectOpenHiring from "./pages/projects/ProjectOpenHiring.jsx";
import ProjectPimcoreConverter from "./pages/projects/ProjectPimcoreConverter.jsx";
import ProjectPortfolio from "./pages/projects/ProjectPortfolio.jsx";
import ProjectPortfolioY1 from "./pages/projects/ProjectPortfolioY1.jsx";
import ProjectSchildMagieZwaard from "./pages/projects/ProjectSchildMagieZwaard.jsx";
import ProjectSignTrail from "./pages/projects/ProjectSignTrail.jsx";
import ProjectThemePlayer from "./pages/projects/ProjectThemePlayer.jsx";
import ProjectUnrealEngine from "./pages/projects/ProjectUnrealEngine.jsx";
import ProjectUnrealEngineScene from "./pages/projects/ProjectUnrealEngineScene.jsx";
import ProjectWarhammerRuleAssistant from "./pages/projects/ProjectWarhammerRuleAssistant.jsx";

const router = createBrowserRouter(
    [
        {
            element: <Layout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/projects", element: <Projects /> },
                { path: "/skills", element: <Skills /> },
                { path: "/experience", element: <Navigate to="/skills" replace /> },
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
                { path: "/projects/blije-bij", element: <ProjectBlijeBij /> },
                { path: "/projects/flashcard-generator", element: <ProjectFlashcardGenerator /> },
                { path: "/projects/coming-soon", element: <ProjectComingSoon /> },
                { path: "/projects/ai-travel-planner", element: <ProjectAITravelPlanner /> },
                { path: "/projects/pimcore-converter", element: <ProjectPimcoreConverter /> },
                { path: "/projects/hosting-recommender", element: <ProjectHostingRecommender /> },
                { path: "/projects/adventurers-armory", element: <ProjectAdventurersArmory /> },
                { path: "/projects/warhammer-rule-assistant", element: <ProjectWarhammerRuleAssistant /> },
                { path: "/projects/object-1", element: <ProjectObject1 /> },
                { path: "/projects/elder-scrolls-theme-player", element: <ProjectThemePlayer /> },
                { path: "/projects/arcane-archive", element: <ProjectArcaneArchive /> },
                { path: "/projects/unreal-engine-scene", element: <ProjectUnrealEngineScene /> },
                { path: "/projects/echoes-of-the-realm", element: <ProjectEchoesOfTheRealm /> },
                { path: "*", element: <NotFound /> },
            ],
        },
    ],
    { basename: "/Portfolio" },
);

function App() {
    return (
        <MotionConfig reducedMotion="user">
            <RouterProvider router={router} />
        </MotionConfig>
    );
}

export default App;
