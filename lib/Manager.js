const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
      super(name, id, email);
      this.role = 'manager';
      this.office = office;
      };
};

    Employee.prototype.getRole = function() {
      return this.role;
    };

    Employee.prototype.getOffice = function() {
      return this.office;
    };

module.exports = Manager;
