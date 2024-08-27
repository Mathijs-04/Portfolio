window.addEventListener('load', init);

let projectIndex = 0;

function init() {
    preloadImages();
    fillDivs();
    updateFeaturedProjects();
}

function preloadImages() {
    for (let i = 0; i < projects.length; i++) {
        let img = new Image();
        img.src = projects[i].projectImage;
    }
}

let projects = [
    {
        projectTitle: "Dungeon Defender",
        projectImage: "./IMG/IMG1.webp",
        projectDescription: "A 2D Arcade Game made in Excalibur.js",
        projectText: "Dungeon Defender is a 2D Arcade Game made with JavaScript in Excalibur.js for the course Programming 4. In Dungeon Defender, the goal is to fight off as many enemies as possible and defend the dungeon. Killing enemies gives you more points. When you are hit three times, you die and will have to try again. Excalibur.js games run in your browser, so no downloads are required.",
        projectLink1: "https://mathijs-04.github.io/Dungeon-Defender/",
        projectLink2: "https://github.com/Mathijs-04/Dungeon-Defender"
    },
    {
        projectTitle: "Game Magazine",
        projectImage: "./IMG/IMG3.webp",
        projectDescription: "A Game Magazine made in HTML, CSS and JS",
        projectText: "This website is an Online Game Magazine made for the course Programming 3. The website is made with HTML, CSS, JavaScript and PHP. This Game Magazine features different games and has a favourite system. During this project, I learned about API's, Local Storage, Event Listeners and JSON. This Website only works while the PHP server is hosted, so unfortunately it is not active at the moment."
    },
    {
        projectTitle: "Unreal Engine 5",
        projectImage: "./IMG/IMG11.webp",
        projectDescription: "Unreal Engine 5 Castle Environment",
        projectText: "This Unreal Engine 5 environment is my first project in Unreal Engine. I wanted to learn more about Unreal Engine 5 and 3D-Development, so I built this forest environment with castles in it. While making this environment I experimented with various tools and techniques in Unreal Engine 5, like Nanite, Lumen, Landscaping, Modular Design and the UE5 Blueprint system. During this project I followed the Unreal Engine 5 Beginner Tutorial by Unreal Sensei. I highly recommend this free starter course to anyone who wants to learn Unreal Engine 5. You can find the full course on YouTube.",
        projectLink1: "https://www.youtube.com/watch?v=k-zMkzmduqI",
    },
    {
        projectTitle: "Gabber Gandalf",
        projectImage: "./IMG/IMG6.webp",
        projectDescription: "A fun Side Project about a Fictional Artist",
        projectText: "Gabber Gandalf was a short side project made in a single day. It was made to experiment with CSS Frameworks. The website features the fictional artist Gabber Gandalf. The website also contains a merchandise page.",
        projectLink1: "https://mathijs-04.github.io/Gabber-Gandalf/"
    },
    {
        projectTitle: "Punchpark",
        projectImage: "./IMG/IMG9.webp",
        projectDescription: "A 2D Arcade Boxing Game",
        projectText: "Punchpark is a 2D Boxing Game made in Excalibur.js. This Game was made with JavaScript in a team of eight students during our latest Game Development Project. Every student has their own personal bossfight in the game. Punchpark is made to be played on an Arcade Machine, but also works on PC if you connect a controller. You can find out more about Punchpark on the Instagram-page @punchpark.game",
        projectLink1: "https://vincentbenders.github.io/CLE4/",
        projectLink2: "https://github.com/VincentBenders/CLE4"
    },
    {
        projectTitle: "Warhammer Dice Roller",
        projectImage: "./IMG/IMG10.webp",
        projectDescription: "A website to roll your Warhammer Dice",
        projectText: "Warhammer Dice Roller is a simple online tool to roll dice. It was created because of my own frustrations during the Warhammer Tabletop Game. During this game, players have to roll a lot of dice, and it can be quite time-consuming. I wanted to make this easier by creating a simple website to roll a lot of dice at once. This website works both on PC and Mobile.",
        projectLink1: "https://mathijs-04.github.io/Dice-Roller/",
        projectLink2: "https://github.com/Mathijs-04/Dice-Roller"
    },
    {
        projectTitle: "Denise Kookt!",
        projectImage: "./IMG/IMG4.webp",
        projectDescription: "An Online Reservation System using a Database",
        projectText: "Denise Kookt! is an Online Reservation System using a Database. This project was made with a team of four students, and it was out first ever project for a client. The Reservation System features a login system, Admin panel, Admin calendar, various forms and a database with all accounts and reservations. Denise Kookt! won the prize for best Reservation System during the CLE2 Project Weeks. This Website only works while the PHP server is hosted, so unfortunately it is not active at the moment.",
        projectLink1: "https://github.com/SEVerhaak/CLE2",
    },
    {
        projectTitle: "Reis Rust",
        projectImage: "./IMG/IMG5.webp",
        projectDescription: "A simplified Route Planner for Public Transport",
        projectText: "Reis Rust is a simplified Route Planner designed for people with intellectual disabilities. This Web Application was made with a team and was the result of various tests we did with our Target Audience. Reis Rust uses local storage to store your saved routes. It also features a Settings page on which you can change the Color Scheme of the Application.",
        projectLink1: "https://mathijs-04.github.io/CLE3-APP/",
        projectLink2: "https://github.com/Mathijs-04/CLE3-APP"
    },
    {
        projectTitle: "Gobbo Quest",
        projectImage: "./IMG/IMG2.webp",
        projectDescription: "A Top-Down Arcade RPG",
        projectText: "Gobbo Quest is a Top-Down Arcade Game made with Makecode Arcade. This Game was made in a few hours with three other students as an introduction to the course Game Development. Gobbo Quest is a short Top Down Dungeon Crawler in which you have to explore a dungeon, kill enemies and defeat the Boss. Gobbo Quest works on both PC and Mobile and runs in the browser.",
        projectLink1: "https://makecode.com/_2qvTbVe5JAd3",
        projectLink2: "https://github.com/Mathijs-04/Gobbo-Quest-V2"
    },
    {
        projectTitle: "Asus Rog Ally",
        projectImage: "./IMG/IMG8.webp",
        projectDescription: "A Product Page for the Asus Rog Ally",
        projectText: "This product page for the Asus Rog Ally was one of the first ever websites I made. It was made for the course Front-End Development using only HTML and CSS. There are two versions of this page. The first one is a bit simpler, the second one is more advanced and works on Mobile as well.",
        projectLink1: "https://mathijs-04.github.io/Frontend-Tussenopdracht/",
        projectLink2: "https://mathijs-04.github.io/Frontend-Eindopdracht/"
    },
    {
        projectTitle: "Game Database",
        projectImage: "./IMG/IMG7.webp",
        projectDescription: "A Game Database using a Login System",
        projectText: "This Game Database was made for the course Programming 2. It was the first time I used PHP and a Database in a project. The Game Database features a login system and various security measures. If you are logged in as an Admin, you can view, add, edit and delete games from the Database. This Website only works while the PHP server is hosted, so unfortunately it is not active at the moment.",
    },
    {
        projectTitle: "Coming Soon",
        projectImage: "./IMG/IMG12.webp",
        projectDescription: "A new project will be added soon",
        projectText: "A new project will be added here in the near future.",
    },
];

function fillDivs() {
    let projectDivs = document.querySelectorAll('.project');

    projectDivs.forEach((projectDiv, i) => {
        if (i < projects.length) {
            let projectTitleElement = projectDiv.querySelector('.projectTitle');
            let projectDescriptionElement = projectDiv.querySelector('.projectDescription');
            let projectImageElement = projectDiv.querySelector('.projectImage');

            projectTitleElement.textContent = projects[i].projectTitle;
            projectDescriptionElement.textContent = projects[i].projectDescription;
            projectImageElement.src = projects[i].projectImage;

            projectDiv.addEventListener('click', function () {
                window.location.href = 'project.html?project=' + i;
            });
        }
    });
}

function updateFeaturedProjects() {
    let projectDivs = document.querySelectorAll('.project');

    for (let i = 0; i < 3; i++) {
        if (i >= projectDivs.length) break;

        let currentIndex;
        if (window.matchMedia('(min-width: 100px) and (max-width: 800px)').matches) {
            currentIndex = (projectIndex + i) % projects.length;
        } else {
            currentIndex = (projectIndex + i) % projects.length;
        }

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
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/Portfolio/')) {
        let arrowDowns = document.querySelectorAll('.arrowDown, .arrowDown2');

        let scrollDistanceLarge = 1080;
        let scrollDistanceMedium = 880;
        let scrollDistanceSmall = 680;
        let scrollDistanceMobile = 540;

        arrowDowns.forEach(function (arrowDown) {
            arrowDown.addEventListener('click', function () {
                let scrollDistance;
                if (window.matchMedia('(min-width: 100px) and (max-width: 800px)').matches) {
                    scrollDistance = scrollDistanceMobile;
                } else if (window.matchMedia('(min-width: 801px) and (max-width: 1200px)').matches) {
                    scrollDistance = scrollDistanceSmall;
                } else if (window.matchMedia('(min-width: 1201px) and (max-width: 1825px)').matches) {
                    scrollDistance = scrollDistanceMedium;
                } else {
                    scrollDistance = scrollDistanceLarge;
                }

                window.scrollTo({
                    top: window.scrollY + scrollDistance,
                    behavior: 'smooth'
                });
            });
        });
    }

    if (window.location.pathname.endsWith('project.html')) {
        let params = new URLSearchParams(window.location.search);

        let projectIndex = params.get('project');

        let project = projects[projectIndex];

        document.querySelector('main h1').textContent = project.projectTitle;
        document.querySelector('main img').src = project.projectImage;
        document.querySelector('main p').textContent = project.projectDescription;

        let projectTextElement = document.querySelector('main .projectText');
        projectTextElement.innerHTML = project.projectText;
        if (project.projectLink1) {
            projectTextElement.innerHTML += '<br><br> <p>Link 1: </p><a href="' + project.projectLink1 + '" target="_blank" class="projectLink">' + project.projectLink1 + '</a>';
        }
        if (project.projectLink2) {
            projectTextElement.innerHTML += '<br><br> <p>Link 2: </p><a href="' + project.projectLink2 + '" target="_blank" class="projectLink">' + project.projectLink2 + '</a>';
        }
    }
}
