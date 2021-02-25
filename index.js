// imports for the inquirer package and all necessary classes
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// Main menu array to be passed into inquirer
const mainMenuChoices = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "menuChoice",
        choices: ["Add a manager", "Add an engineer", "Add an intern", "Finish"]
    }
];

// Manager questions array to be passed into inquirer
const managerQuestions = [
    {
        type: "input",
        message: "Enter the manager's name:",
        name: "managerName"
    },
    {
        type: "input",
        message: "Enter the manager's ID:",
        name: "managerId"
    },
    {
        type: "input",
        message: "Enter the manager's email:",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "Enter the manager's office number:",
        name: "managerOfficeNumber"
    }
];

// Engineer questions array to be passed into inquirer
const engineerQuestions = [
    {
        type: "input",
        message: "Enter the engineer's name:",
        name: "engineerName"
    },
    {
        type: "input",
        message: "Enter the engineer's ID:",
        name: "engineerId"
    },
    {
        type: "input",
        message: "Enter the engineer's email:",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "Enter the engineer's office number:",
        name: "engineerOfficeNumber"
    }
];

// Intern questions array to be passed into inquirer
const internQuestions = [
    {
        type: "input",
        message: "Enter the intern's name:",
        name: "internName"
    },
    {
        type: "input",
        message: "Enter the intern's ID:",
        name: "internId"
    },
    {
        type: "input",
        message: "Enter the intern's email:",
        name: "internEmail"
    },
    {
        type: "input",
        message: "Enter the intern's office number:",
        name: "internOfficeNumber"
    }
];

// Array to push all team members into
const team = [];

// Function to collect manager information and add it to the team
function addManager() {
    console.log("MANAGER");
}

// Function to collect engineer information and add it to the team
function addEngineer() {
    console.log("ENGINEER");
}

// Function to collect intern information and add it to the team
function addIntern() {
    console.log("INTERN");
}

// Function to dynamically create an html webpage using team array
function createWebpage() {
    console.log("FINISH");
}

// Function to create the main menu and initialize the program
function mainMenu() {

    inquirer.prompt(mainMenuChoices).then((res) => {

        const input = res.menuChoice;

        switch (input) {
            case "Add a manager":
                addManager();
                break;

            case "Add an engineer":
                addEngineer();
                break;

            case "Add an intern":
                addIntern();
                break;

            case "Finish":
                createWebpage();
                break;
        }
    });
}

// Initial function call
mainMenu();
