// imports for the inquirer package and all necessary classes
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
let htmlSkeleton = require("./lib/htmlSkeleton");

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
        name: "name"
    },
    {
        type: "input",
        message: "Enter the manager's ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Enter the manager's email:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the manager's office number:",
        name: "officeNumber"
    }
];

// Engineer questions array to be passed into inquirer
const engineerQuestions = [
    {
        type: "input",
        message: "Enter the engineer's name:",
        name: "name"
    },
    {
        type: "input",
        message: "Enter the engineer's ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Enter the engineer's email:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the engineer's github username:",
        name: "github"
    }
];

// Intern questions array to be passed into inquirer
const internQuestions = [
    {
        type: "input",
        message: "Enter the intern's name:",
        name: "name"
    },
    {
        type: "input",
        message: "Enter the intern's ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Enter the intern's email:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the intern's school:",
        name: "school"
    }
];

// Array to push all team members into
const team = [];

// Function to collect manager information and add it to the team
function addManager() {
    
    inquirer.prompt(managerQuestions).then((res) => {

        const {name, id, email, officeNumber} = res;
        
        team.push(new Manager(name, id, email, officeNumber));
    
        mainMenu();
    });
}

// Function to collect engineer information and add it to the team
function addEngineer() {

    inquirer.prompt(engineerQuestions).then((res) => {

        const {name, id, email, github} = res;
        
        team.push(new Engineer(name, id, email, github));
    
        mainMenu();
    });
}

// Function to collect intern information and add it to the team
function addIntern() {

    inquirer.prompt(internQuestions).then((res) => {
        
        const {name, id, email, school} = res;
        
        team.push(new Intern(name, id, email, school));
    
        mainMenu();
    });
}

// Function to dynamically create an html webpage using team array
function createWebpage() {

    console.log(team);

    let cardHTML = ``;

    for (let index = 0; index < team.length; index++) {

        cardHTML = 
`
                <div class="card" style="width: 18rem; margin-bottom: 10px;">
                    <h5 class="card-header" style="font-size: 30px; background-color: blue; color: white;">
                        Grace
                        <br>
                        <span style="font-size: 80%;">Engineer</span>
                    </h5>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: <span>3</span></li>
                            <li class="list-group-item">Email: <span>grace@fakemail.com</span></li>
                            <li class="list-group-item">GitHub: <span>gchoi2u</span></li>
                        </ul>
                    </div>
                </div>
`;

        htmlSkeleton = htmlSkeleton + cardHTML;
    }

    endHTML = 
`
            </div>
        </div>
    </main>
</body>
</html>`;

    htmlSkeleton = htmlSkeleton + endHTML;

    fs.writeFile("index.html", htmlSkeleton, (err) => {
        if (err) throw err;
        console.log("File saved as \"index.html\" in the \"dist\" folder.");
    });
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
