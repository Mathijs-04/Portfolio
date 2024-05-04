window.addEventListener('load', init);

let projectIndex = 0;

function init() {
    fillDivs();
    updateFeaturedProjects();
}

let projects = [
    {
        projectTitle: "Gobbo Quest",
        projectDescription: "This is the description for Gobbo Quest.",
        projectImage: "./IMG/IMG1.webp"
    },
    {
        projectTitle: "Game Magazine",
        projectDescription: "This is the description for Game Magazine.",
        projectImage: "./IMG/IMG2.webp"
    },
    {
        projectTitle: "Denise Kookt!",
        projectDescription: "This is the description for Denise Kookt!.",
        projectImage: "./IMG/IMG3.webp"
    },
    {
        projectTitle: "Reis Rust",
        projectDescription: "This is the description for Reis Rust.",
        projectImage: "./IMG/IMG4.webp"
    },
    {
        projectTitle: "Gabber Gandalf",
        projectDescription: "This is the description for Gabber Gandalf.",
        projectImage: "./IMG/IMG5.webp"
    },
    {
        projectTitle: "Game Database",
        projectDescription: "This is the description for Game Database.",
        projectImage: "./IMG/IMG6.webp"
    },
    {
        projectTitle: "Asus Rog Ally",
        projectDescription: "This is the description for Asus Rog Ally.",
        projectImage: "./IMG/IMG7.webp"
    },
    {
        projectTitle: "Temp Tracker",
        projectDescription: "This is the description for Temp Tracker.",
        projectImage: "./IMG/IMG8.webp"
    },
    {
        projectTitle: "CLE4 Game",
        projectDescription: "This is the description for CLE4 Game.",
        projectImage: "./IMG/IMG9.webp"
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