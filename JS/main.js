// JavaScript

// Step 1: Create an array of project objects
// This array will hold the information for each of your projects.
// Each object in the array should have properties for the title, description, and image URL of a project.

// Step 2: Select the elements where you want to display the project information
// Use document.querySelector() to select the HTML elements where you want to display the project title, description, and image.
// You should do this for each project on your homepage.

// Step 3: Create a function to update the project information
// This function should take an index as a parameter. Inside the function, use the index to access the corresponding project object from your array.
// Then, update the text content and source attribute of your selected HTML elements with the properties of the project object.

// Step 4: Keep track of the current project
// Declare a variable to store the index of the current project. Initialize this variable with 0 to display the first project initially.
// Inside your function to update the project information, call this function with the current project index as the argument.

// Step 5: Add event listeners to the arrow images
// Use document.querySelector() to select the arrow images. Then, use addEventListener() to attach click event listeners to these images.
// Inside the event listener, increment or decrement the current project index, then call your function to update the project information.

let projects = [
    {
        title: "Project 1",
        description: "This is the description for Project 1.",
        image: "./IMG/IMG1.webp"
    },
    {
        title: "Project 2",
        description: "This is the description for Project 2.",
        image: "./IMG/IMG2.webp"
    },
    {
        title: "Project 3",
        description: "This is the description for Project 3.",
        image: "./IMG/IMG3.webp"
    },
    {
        title: "Project 4",
        description: "This is the description for Project 4.",
        image: "./IMG/IMG4.webp"
    },
    {
        title: "Project 5",
        description: "This is the description for Project 5.",
        image: "./IMG/IMG5.webp"
    },
    {
        title: "Project 6",
        description: "This is the description for Project 6.",
        image: "./IMG/IMG6.webp"
    },
    {
        title: "Project 7",
        description: "This is the description for Project 7.",
        image: "./IMG/IMG7.webp"
    },
    {
        title: "Project 8",
        description: "This is the description for Project 8.",
        image: "./IMG/IMG8.webp"
    },
    {
        title: "Project 9",
        description: "This is the description for Project 9.",
        image: "./IMG/IMG9.webp"
    },
];