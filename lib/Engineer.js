const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, git) {
      const role = 'engineer';

      super(name, id, role);

      this.email = email;
      this.git = git;
      };
    
};

module.exports = Engineer;
