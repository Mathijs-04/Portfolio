window.addEventListener('load', init);

let projectIndex = 0;

function init() {
    fillDivs();
    updateFeaturedProjects();
}

let projects = [
    {
        projectTitle: "Gobbo Quest",
        projectImage: "./IMG/IMG1.webp",
        projectDescription: "This is the description for Gobbo Quest.",
        projectText: "This is the text for Gobbo Quest."
    },
    {
        projectTitle: "Game Magazine",
        projectImage: "./IMG/IMG2.webp",
        projectDescription: "This is the description for Game Magazine.",
        projectText: "This is the text for Game Magazine."
    },
    {
        projectTitle: "Denise Kookt!",
        projectImage: "./IMG/IMG3.webp",
        projectDescription: "This is the description for Denise Kookt!.",
        projectText: "This is the text for Denise Kookt!."
    },
    {
        projectTitle: "Reis Rust",
        projectImage: "./IMG/IMG4.webp",
        projectDescription: "This is the description for Reis Rust.",
        projectText: "This is the text for Reis Rust."
    },
    {
        projectTitle: "Gabber Gandalf",
        projectImage: "./IMG/IMG5.webp",
        projectDescription: "This is the description for Gabber Gandalf.",
        projectText: "This is the text for Gabber Gandalf."
    },
    {
        projectTitle: "Game Database",
        projectImage: "./IMG/IMG6.webp",
        projectDescription: "This is the description for Game Database.",
        projectText: "This is the text for Game Database."
    },
    {
        projectTitle: "Asus Rog Ally",
        projectImage: "./IMG/IMG7.webp",
        projectDescription: "This is the description for Asus Rog Ally.",
        projectText: "This is the text for Asus Rog Ally."
    },
    {
        projectTitle: "Temp Tracker",
        projectImage: "./IMG/IMG8.webp",
        projectDescription: "This is the description for Temp Tracker.",
        projectText: "This is the text for Temp Tracker."
    },
    {
        projectTitle: "CLE4 Game",
        projectImage: "./IMG/IMG9.webp",
        projectDescription: "This is the description for CLE4 Game.",
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

if (window.location.pathname.endsWith('project.html')) {
    window.onload = function () {
        let params = new URLSearchParams(window.location.search);

        let projectIndex = params.get('project');

        let project = projects[projectIndex];

        document.querySelector('main h1').textContent = project.projectTitle;
        document.querySelector('main img').src = project.projectImage;
        document.querySelector('main p').textContent = project.projectDescription;
    }
}