// Import Engineer class with require()

// Test setting github account
test("Assigning github account to engineer", () => {
  let github = Wdiste;

  let employee = new Engineer("name", "id", "role", "email", github);

  expect(employee.git).toEqual(github);
});

// Test get role method
test("", () => {
  // Assign "Engineer" to a new role variable
  // Instantiate the Employee class, passing an employee name and an id and an email and a github account name as auguments, to create an object and assign it to an new variable
  // Export getRole() to return the role to be equal to the value of the role variable
});

// Test get github method
test("", () => {
  // Assign github account to a new variable
  // Instantiate the Employee class, passing an employee name and an id and an email and the github variable as auguments, to create an object and assign it to an new variable
  // Expect getGithub() to return the github  name to be equal to the value of the github variable
});
