const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, git) {
      const role = 'engineer';

      super(name, id, role, email);

      this.git = git;
      };
    
};

module.exports = Engineer;
