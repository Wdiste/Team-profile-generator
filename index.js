const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require('inquirer');
const path = require("path");

const renderHtml = require("./src/page-template");

const dist = path.join(__dirname, "dist");

const empMem = [];

console.log(
  `\nTeam profile generator activated.  Please follow the prompts to create your team's profile.\n
  \n Let's start with the manager:`
);

const createManager = async () => {
  await inquirer.prompt([
    { type: "input", message: "Enter Manager name: ", name: "manName" },
    { type: "input", message: "Enter Manager id: ", name: "id" },
    { type: "input", message: "Enter Manager email: ", name: "email" },
    { type: "input", message: "Enter Manager office number: ", name: "office" },
  ])
  .then((answers) => {
    const newManager = new manager(answers.manName, answers.id, answers.email, answers.office)
    empMem.push(newManager);
    console.log(empMem);
    createTeam();
    })    
};

const createTeam = () => {
// ========================= Team member insert prompt ===========================================

    inquirer.prompt([
        { 
        type: "list", 
        message: "Which team member would you like to add?", 
        name: "teamMember", 
        choices: ["Engineer", "Intern", 'Create team profile'] },
    ])
    .then((answers) => {
        switch (answers.teamMember) {
// =================================== Engineer ===========================================
            case "Engineer":
                inquirer.prompt([
                    { type: "input", message: "Enter Engineer name: ", name: "engName" },
                    { type: "input", message: "Enter Engineer id: ", name: "id" },
                    { type: "input", message: "Enter Engineer email: ", name: "email" },
                    { type: "input", message: "Enter Engineer github: ", name: "github" },
                ])
                .then((answers) => {
                    const newEngineer = new engineer(answers.engName, answers.id, answers.email, answers.github)
                    empMem.push(newEngineer);
                    console.log('Engineer added to team');
                    console.log(empMem);
                    createTeam();
                });
                break;
// =================================== Intern ===========================================
            case "Intern":
                inquirer.prompt([
                    { type: "input", message: "Enter Intern name: ", name: "intName" },
                    { type: "input", message: "Enter Intern id: ", name: "id" },
                    { type: "input", message: "Enter Intern email: ", name: "email" },
                    { type: "input", message: "Enter Intern school: ", name: "school" },
                ])
                .then((answers) => {
                    const newIntern = new intern(answers.intName, answers.id, answers.email, answers.school)
                    empMem.push(newIntern);
                    console.log('Intern added to team');
                    console.log(empMem);
                    createTeam();
                });
                break;
// =================================== Exit ===========================================
            case "Create team profile":
                const profile = renderHtml(empMem);
                fs.writeFile(`${dist}/manager.html`, profile, (err) => {console.log(err)});
                break;
        }
    });
};

createManager();
