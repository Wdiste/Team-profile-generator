const Manager = require("../lib/Manager");

// test setting office
test("Assigning office to manager", () => {
  let newOffice = 1654;

  let employee = new Manager("name", "id", "email", newOffice);

  expect(employee.office).toEqual(newOffice);
});

// Test get role method
test("Return role using getRole", () => {
  let newRole = 'manager';

  let employee = new Manager("name", "id", "email", "github");

  expect(employee.getRole()).toEqual(newRole);
});

// Test get school method
test("Return office username using getOffice", () => {
  let newOffice = 4865;

  let employee = new Manager("name", "id", "email", newOffice);

  expect(employee.getOffice()).toEqual(newOffice);
});