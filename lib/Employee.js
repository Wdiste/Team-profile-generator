class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.role = 'employee';
        this.email = email;
      };
};

    Employee.prototype.getName = function() {
      return this.name;
    };
    
    Employee.prototype.getId = function() {
      return this.id;
    };

    Employee.prototype.getRole = function() {
      return this.role;
    };

    Employee.prototype.getEmail = function() {
      return this.email;
    };


module.exports = Employee;
