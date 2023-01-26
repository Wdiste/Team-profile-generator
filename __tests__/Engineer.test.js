const Engineer = require("../lib/Engineer");

// Test setting github account
// note that github account is the username to be added to preexisting 
// url string
test("Assigning github account to engineer", () => {
  let newGit = Wdiste;

  let employee = new Engineer("name", "id", "role", "email", newGit);

  expect(employee.git).toEqual(newGit);
});

// Test get role method
test("Return role using getRole", () => {
  let newRole = 'intern';

  let employee = new Engineer("name", "id", newRole, "email", "github");

  expect(employee.getRole()).toEqual(newRole);
});

// Test get github method
test("Return github username using getGit", () => {
  let newGit = Wdiste;

  let employee = new Engineer("name", "id", "role", "email", newGit);

  expect(employee.getGit()).toEqual(newGit);
});
