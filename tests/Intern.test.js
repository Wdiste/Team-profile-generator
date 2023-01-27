const Intern = require("../lib/Intern");

// test setting school
test("Assigning school to intern", () => {
  let newSchool = 'Rutgers';

  let employee = new Intern("name", "id", "email", newSchool);

  expect(employee.school).toEqual(newSchool);
});

// Test get role method
test("Return role using getRole", () => {
  let newRole = 'intern';

  let employee = new Intern("name", "id", "email", "github");

  expect(employee.getRole()).toEqual(newRole);
});

// Test get school method
test("Return github username using getGit", () => {
  let newSchool = 'Njit';

  let employee = new Intern("name", "id", "email", newSchool);

  expect(employee.getSchool()).toEqual(newSchool);
});