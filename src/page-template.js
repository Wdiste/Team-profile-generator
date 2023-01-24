// create team function with team array passed in
const createTeam = (team) => {

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
                    <h3><i class="fas fa-glasses"></i>Engineer</h3>    
                </div>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Office: ${engineer.office}</li>
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
                    <h3><i class="fa-solid fa-user-graduate"></i>Intern</h3>    
                </div>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Office: ${intern.school}</li>
                    <li class="list-group-item">Email: ${intern.email}</li>
                </ul>
            </div>
        `;
    };

    // create an empty employee html array to store employee html for manager, engineers, interns
    const teamPage = [];

    // make call to filter method on team array - for each employee in team array to check if the employee's role is "Manager" via the employee's get role method and assign the new manager array returned from filter method to a new variable
    const managers = team.filter(member => !!member.manName)
    // make call to map method on the new manager array to call create manager html function and assign the new manager html array returned from map method to a new variable
    const manCard = managers.map((manager) => {renderManager(manager)})
    // make call to join method on the new manager html array to convert it to html string and assign it to a new variable
    manCard.join(",");
    // push the new manager html string to the employee html array
    // option - you can use chained array methods to avoid create new variables
    teamPage.push(manCard);

    // make call to filter method on team array - for each employee in team array to check if the employee's role is "Engineer" via the employee's get role method and assign the new engineer array returned from filter method to a new variable
    const engineers = team.filter(member => !!member.engName)
    // make call to map method on the new engineer array to call create engineer html function and assign the new engineer html array returned from map method to a new variable
    const engCard = engineers.map((engineer) => {renderEngineer(engineer)})
    // make call to join method on the new engineer html array to convert it to html string and assign it to a new variable
    engCard.join(",");
    // push the new engineer html string to the employee html array
    // option - you can use chained array methods to avoid create new variables
    teamPage.push(engCard);

    // make call to filter method on team array - for each employee in team array to check if the employee's role is "Intern" via the employee's get role method and assign the new intern array returned from filter method to a new variable
    const interns = team.filter(member => !!member.intName)
    // make call to map method on the new intern array to call create intern html function and assign the new intern html array returned from map method to a new variable
    const intCard = interns.map((intern) => {renderIntern(intern)})
    // make call to join method on the new intern html array to convert it to html string and assign it to a new variable
    intCard.join(',')
    // push the new intern html string to the employee html array
    // option - you can use chained array methods to avoid create new variables
    teamPage.push(intCard);

    // call join method on employee html array to convert it to html string and return it to the caller
    return teamPage.join("");

}

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