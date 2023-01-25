const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require('inquirer');
const path = require("path");

const renderHtml = require("./src/page-template");

const dist = path.join(__dirname, "dist");
const team = path.join("/dist", "manager", "engineers", "interns");

const empMem = [];
var isDone = false;

console.log(
  `\nTeam profile generator activated.  Please follow the prompts to create your team's profile.\n
  \n Let's start with the manager:`
);

const createManager = () => {
  inquirer.prompt([
    { type: "input", message: "Enter Manager name: ", name: "manName" },
    { type: "input", message: "Enter Manager id: ", name: "id" },
    { type: "input", message: "Enter Manager email: ", name: "email" },
    { type: "input", message: "Enter Manager office number: ", name: "office" },
  ])
  .then((response) => {
    empMem.push(response);
    console.log(empMem);
    // keep asking if they want to add another member until isDone flag is changed
    while(!isDone) {createTeam()};
    })    
};


const createTeam = () => {
    inquirer.prompt([
        { 
        type: "list", 
        message: "Which team member would you like to add?", 
        name: "teamMember", 
        choices: ["Engineer", "Intern", 'Create team profile'] },
    ])
    .then((response) => {
        let member = response.choices;

        if(member === "Engineer") {return addEngineer()};
        if(member === "Intern") {return addIntern()};
        if(member === "Create team profile") {return renderProfile()};
    })
};

const addEngineer = () => {
    inquirer.prompt([
        { type: "input", message: "Enter Engineer name: ", name: "engName" },
        { type: "input", message: "Enter Engineer id: ", name: "id" },
        { type: "input", message: "Enter Engineer email: ", name: "email" },
        { type: "input", message: "Enter Engineer github: ", name: "github" },
    ])
    .then((response) => {
        empMem.push(response);
        console.log('Engineer added to team');
    })
};

const addIntern = () => {
    inquirer.prompt([
        { type: "input", message: "Enter Intern name: ", name: "intName" },
        { type: "input", message: "Enter Intern id: ", name: "id" },
        { type: "input", message: "Enter Intern email: ", name: "email" },
        { type: "input", message: "Enter Intern school: ", name: "school" },
    ])
    .then((response) => {
        empMem.push(response);
        console.log('Intern added to team');
    })
};

const renderProfile = () => {
    if (!fs.existsSync(dist)) {fs.mkdirSync(dist)};  
    const profile = team(empMem);
    fs.writeFile(`${dist}/manager`, profile, (err) => {console.log(err)});
};

// 9.
// add intern function
// - prompt user with questions for intern name, id, email, and school
// - in .then callback create intern object by instantiating Intern class instance passing name, id, email, and school as arguments to class constructor
// - push intern object to employee member array
// - push intern id to employee id array
// - make call to create team function

// 10.
// build team function
// - check existing of dist subfolder
// - if not exist, create the dist subfolder
// - make call to imported render function passing employee member array as argument and assign returned html to a variable
// - make call to fs write file function passing the html file path, html variable


// const teamProfileGenerator = async () => {
//     try{
//         await createManager();
//         await createTeam();
//     } catch (error) {
//         console.log(error);
//     }
// };

// teamProfileGenerator();

createManager();
