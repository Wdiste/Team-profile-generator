const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// create team function with team array passed in
const createTeam = (team) => {
    const teamList = team;
    console.log('team list:', teamList)
    // create the manager html function with manager object passed in as input parameter
    // - return template literal replacing name, role, id, email, office number with getXXX methods from manager object
    const renderManager = (manager) => {
        return `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h3>${manager.name}</h3>
                    <h3><i class="fa fa-coffee"></i>Manager</h3>    
                </div>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Office: ${manager.office}</li>
                    <li class="list-group-item">Email: ${manager.email}</li>
                </ul>
            </div>
        `;
    };

    // create the html function for engineers with engineer object passed in as input parameter
    // - return template literal replacing name, role, id, email, github name with getXXX methods from engineer object
    const renderEngineer = (engineer) => {
        return `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h3>${engineer.name}</h3>
                    <h3><i class="fa fa-wrench"></i>Engineer</h3>   
                </div>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">github: ${engineer.git}</li>
                    <li class="list-group-item">Email: ${engineer.email}</li>
                </ul>
            </div>
        `;
    };

    // create the html function for interns with intern object passed in as input parameter
    // - return template literal replacing name, role, id, email, school name with getXXX methods from intern object
    const renderIntern = (intern) => {
        return `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h3>${intern.name}</h3>
                    <h3><i class="fa fa-graduation-cap"></i>Intern</h3>    
                </div>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">School: ${intern.school}</li>
                    <li class="list-group-item">Email: ${intern.email}</li>
                </ul>
            </div>
        `;
    };

    const teamPage = [];

    // wanted to try managers = team.filter((obj => obj.role = 'manager'))
    // but to no avail.  going with map and assignment 
    const managers = team.map((obj) => {
        if(obj.role === 'manager')  {
            teamPage.push(renderManager(obj));
            console.log('manager added: ', obj.name)};
        if(obj.role === 'engineer') {
            teamPage.push(renderEngineer(obj));
            console.log('engineer added: ', obj.name)};
        if(obj.role === 'intern')   {
            teamPage.push(renderIntern(obj));
            console.log('intern added: ', obj.name)}
    });

    console.log('teamcompleted', teamPage)

    return teamPage.join("");
    

};

// export function to generate entire page with team array passed in as input parameter from index.js
// - return template literal for entire html replacing team member html with returned value from create-team-function via template literal varaible expression
module.exports = team => {
    const teamInput = createTeam(team);
    return `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body> 
    <header>
        <h1>My Team</h1>
    </header>
        ${teamInput}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
    </html>
  `;
};