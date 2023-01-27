const Employee = require("../lib/Employee");

// created object should be Employee type
test("Initialization", () => {
  const employee = new Employee("name", "id", "role", "email")

  expect(employee instanceof Employee).toEqual(true);
});

// Test setting name of an employee
test("Assigning name to Employee", () => {
  let newName = "Bobby";
  const employee = new Employee(newName, "id", "role", "email");

  expect(employee.name).toEqual(newName);  
});

// Test setting id of an employee
test("Assigning an id to employee", () => {
  let newId = 16723423;
  const employee = new Employee("name", newId, "role", "email");

  expect(employee.id).toEqual(newId);
});

// Test setting email of an employee
test("Assigning an email to employee", () => {
  let newEmail = "test@gmail.com";
  const employee = new Employee("name", "id", "role", newEmail);

  expect(employee.email).toEqual(newEmail);
});

// Test get name method
test("Return employee name using getName", () => {
  let newName = "Jenna";
  const employee = new Employee(newName, "id", "role", "email");

  expect(employee.getName()).toEqual(newName);  
});

// Test get id method
test("Return employee id using getId", () => {
  let newId = 86425;
  const employee = new Employee("name", newId, "role", "email");

  expect(employee.getId()).toEqual(newId);
});

test("Return employee role using getRole", () => {
  let newRole = "employee";
  const employee = new Employee("name", "id", newRole, "email");

  expect(employee.getRole()).toEqual(newRole);
});

// Test get email method
test("Return employee email using getEmail", () => {
  let newEmail = "test@aol.com";
  const employee = new Employee("name", "id", "role", newEmail);

  expect(employee.getEmail()).toEqual(newEmail);
});
