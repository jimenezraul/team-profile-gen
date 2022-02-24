class Employee {
  constructor(id, firstName, email) {
    this.id = id;
    this.firstName = firstName;
    this.email = email;
    this.role = "Employee";
  }

  getName() {
    return this.firstName;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Employee;