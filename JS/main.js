window.addEventListener('load', init);

let projectIndex = 0;

function init() {
    fillDivs();
    updateFeaturedProjects();
}

let projects = [
    {
        projectTitle: "Dungeon Defender",
        projectImage: "./IMG/IMG1.webp",
        projectDescription: "A 2D Arcade Game made in Excalibur.js",
        projectText: "This is the text for Dungeon Defender."
    },
    {
        projectTitle: "Gobbo Quest",
        projectImage: "./IMG/IMG2.webp",
        projectDescription: "A Top-Down RPG made in Makecode Arcade",
        projectText: "This is the text for Gobbo Quest."
    },
    {
        projectTitle: "Game Magazine",
        projectImage: "./IMG/IMG3.webp",
        projectDescription: "An Online Game Magazine made in HTML,CSS and JS",
        projectText: "This is the text for Game Magazine."
    },
    {
        projectTitle: "Denise Kookt!",
        projectImage: "./IMG/IMG4.webp",
        projectDescription: "An Online Reservation System using a Database",
        projectText: "Denise was altijd al gepassioneerd over koken. Haar liefde voor de keuken begon al op jonge leeftijd, toen ze haar grootmoeder hielp bij het bereiden van traditionele familierecepten. Deze vroege ervaringen legden de basis voor haar culinaire avontuur. Na haar studie aan een prestigieuze kookschool in Frankrijk, keerde Denise terug naar haar geboortestad met een koffer vol nieuwe technieken en een hart vol dromen. Denise opende een klein, gezellig restaurant in het hart van de stad, genaamd \"Denise's Delights\". Hier combineerde ze haar kennis van klassieke Franse keuken met lokale ingrediënten en invloeden. Haar menu wisselde regelmatig, geïnspireerd door de seizoenen en de verse producten die ze op de markt vond. Wat Denise's kookstijl bijzonder maakte, was haar aandacht voor detail en haar liefde voor experimenteren. Ze stond bekend om haar creatieve combinaties, zoals een delicate lavendeltaart met honing van een lokale imker of een hartige venkelsoep geserveerd met een vleugje saffraan. Haar gerechten waren niet alleen een lust voor de smaakpapillen, maar ook voor het oog – prachtig gepresenteerd en altijd met een persoonlijke touch. Naast haar restaurant deelde Denise haar passie via kooklessen en workshops. Mensen van alle leeftijden kwamen samen in haar warme, uitnodigende keuken om te leren en te genieten. Denise geloofde sterk in de verbindende kracht van voedsel en zag elke maaltijd als een kans om mensen samen te brengen. Haar reputatie groeide snel, en al snel werd \"Denise's Delights\" een favoriete bestemming voor zowel locals als toeristen. Denise werd uitgenodigd op kookshows, schreef een populaire kookboekserie en startte zelfs haar eigen YouTube-kanaal, waar ze haar favoriete recepten en kooktips deelde. Ondanks haar succes bleef Denise bescheiden en toegewijd aan haar roots. Ze bleef nieuwe smaken ontdekken en deelde haar kennis en passie met iedereen om haar heen. Voor Denise was koken meer dan een beroep – het was haar manier om liefde en vreugde de wereld in te brengen, één gerecht tegelijk."
    },
    {
        projectTitle: "Reis Rust",
        projectImage: "./IMG/IMG5.webp",
        projectDescription: "A simplified route planner for public transport",
        projectText: "This is the text for Reis Rust."
    },
    {
        projectTitle: "Gabber Gandalf",
        projectImage: "./IMG/IMG6.webp",
        projectDescription: "A fun side project for a fictional artist",
        projectText: "This is the text for Gabber Gandalf."
    },
    {
        projectTitle: "Game Database",
        projectImage: "./IMG/IMG7.webp",
        projectDescription: "A game Database using a login system",
        projectText: "This is the text for Game Database."
    },
    {
        projectTitle: "Asus Rog Ally",
        projectImage: "./IMG/IMG8.webp",
        projectDescription: "A product page for the Asus Rog Ally",
        projectText: "This is the text for Asus Rog Ally."
    },
    {
        projectTitle: "CLE4 Game",
        projectImage: "./IMG/IMG9.webp",
        projectDescription: "A 2D Game made with a team",
        projectText: "This is the text for CLE4 Game."
    },
];

function fillDivs() {
    let projectDivs = document.querySelectorAll('.project');

    for (let i = 0; i < projects.length; i++) {
        let projectTitleElement = projectDivs[i].querySelector('.projectTitle');
        let projectDescriptionElement = projectDivs[i].querySelector('.projectDescription');
        let projectImageElement = projectDivs[i].querySelector('.projectImage');

        projectTitleElement.textContent = projects[i].projectTitle;
        projectDescriptionElement.textContent = projects[i].projectDescription;
        projectImageElement.src = projects[i].projectImage;

        if (window.location.pathname.endsWith('index.html')) {
            projectDivs[i].addEventListener('click', function () {
                window.location.href = 'project.html?project=' + i;
            });
        }

        if (window.location.pathname.endsWith('projects.html')) {
            projectDivs[i].addEventListener('click', function () {
                window.location.href = 'project.html?project=' + i;
            });
        }
    }
}

function updateFeaturedProjects() {
    let projectDivs = document.querySelectorAll('.project');

    for (let i = 0; i < 3; i++) {
        let currentIndex = (projectIndex + i) % projects.length;
        let projectTitleElement = projectDivs[i].querySelector('.projectTitle');
        let projectDescriptionElement = projectDivs[i].querySelector('.projectDescription');
        let projectImageElement = projectDivs[i].querySelector('.projectImage');

        projectTitleElement.textContent = projects[currentIndex].projectTitle;
        projectDescriptionElement.textContent = projects[currentIndex].projectDescription;
        projectImageElement.src = projects[currentIndex].projectImage;

        projectDivs[i].addEventListener('click', function () {
            window.location.href = 'project.html?project=' + currentIndex;
        });
    }
}

function moveRight() {
    projectIndex = (projectIndex + 1) % projects.length;
    updateFeaturedProjects();
}

function moveLeft() {
    projectIndex = (projectIndex - 1 + projects.length) % projects.length;
    updateFeaturedProjects();
}

window.onload = function () {
    if (window.location.pathname.endsWith('project.html')) {
        let params = new URLSearchParams(window.location.search);

        let projectIndex = params.get('project');

        let project = projects[projectIndex];

        document.querySelector('main h1').textContent = project.projectTitle;
        document.querySelector('main img').src = project.projectImage;
        document.querySelector('main p').textContent = project.projectDescription;
        document.querySelector('main .projectText').textContent = project.projectText;
    }
}