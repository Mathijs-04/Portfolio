

function init() {
    fillDivs();
}

let projects = [
    {
        projectTitle: "Gobbo Quest",
        projectDescription: "This is the description for Project 1.",
        projectImage: "./IMG/IMG1.webp"
    },
    {
        projectTitle: "Game Magazine",
        projectDescription: "This is the description for Project 2.",
        projectImage: "./IMG/IMG2.webp"
    },
    {
        projectTitle: "Denise Kookt!",
        projectDescription: "This is the description for Project 3.",
        projectImage: "./IMG/IMG3.webp"
    },
    {
        projectTitle: "Reis Rust",
        projectDescription: "This is the description for Project 4.",
        projectImage: "./IMG/IMG4.webp"
    },
    {
        projectTitle: "Gabber Gandalf",
        projectDescription: "This is the description for Project 5.",
        projectImage: "./IMG/IMG5.webp"
    },
    {
        projectTitle: "Game Database",
        projectDescription: "This is the description for Project 6.",
        projectImage: "./IMG/IMG6.webp"
    },
    {
        projectTitle: "Asus Rog Ally",
        projectDescription: "This is the description for Project 7.",
        projectImage: "./IMG/IMG7.webp"
    },
    {
        projectTitle: "Temp Tracker",
        projectDescription: "This is the description for Project 8.",
        projectImage: "./IMG/IMG8.webp"
    },
    {
        projectTitle: "CLE4 Game",
        projectDescription: "This is the description for Project 9.",
        projectImage: "./IMG/IMG9.webp"
    },
];

function fillDivs() {

};

window.onload = function() {
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