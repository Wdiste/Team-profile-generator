const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
      const role = 'manager';

      super(name, id, role);
      
      this.email = email;
      this.office = office;
      };
};

module.exports = Manager;
