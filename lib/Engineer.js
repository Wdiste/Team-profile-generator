const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, git) {
      const role = 'engineer';

      super(name, id, role, email);

      this.git = git;
      };
    
};

    Employee.prototype.getRole = function() {
      return this.role;
    };

    Employee.prototype.getGit = function() {
      return this.git;
    };

module.exports = Engineer;
