const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
      const role = 'intern';
      
      super(name, id, role, email);

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
