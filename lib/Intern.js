const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
      const role = 'intern';
      
      super(name, id, role), email;

      this.school = school;
      };
};

module.exports = Intern;
