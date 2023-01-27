const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.role = 'intern';
      this.school = school;
      };
};

    Employee.prototype.getRole = function() {
      return this.role;
    };

    Employee.prototype.getSchool = function() {
      return this.school;
    };

module.exports = Intern;
