const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

class Employees {
  constructor() {
    this.employees = [];
  }

  addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Manager Name: ",
        },
        {
          type: "input",
          name: "id",
          message: "Manager ID: ",
        },
        {
          type: "input",
          name: "email",
          message: "Manager email: ",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Manager office number: ",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.id,
          answers.name,
          answers.email,
          answers.officeNumber
        );
        this.employees.push(manager);
        this.addEmployee();
      });
  }

  addEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "addEmployee",
          message: "Add an employee?",
          choices: ["Engineer", "Intern", "No more employees"],
        },
      ])
      .then((answers) => {
        if (answers.addEmployee === "Engineer") {
          this.addEngineer();
        } else if (answers.addEmployee === "Intern") {
          this.addIntern();
        } else {
          this.complete();
        }
      });
  }

  addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Engineer Name: ",
        },
        {
          type: "input",
          name: "id",
          message: "Engineer ID: ",
        },
        {
          type: "input",
          name: "email",
          message: "Engineer email: ",
        },
        {
          type: "input",
          name: "github",
          message: "Engineer github username: ",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.id,
          answers.name,
          answers.email,
          answers.github
        );
        this.employees.push(engineer);
        this.addEmployee();
      });
  }

  addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Intern Name: ",
        },
        {
          type: "input",
          name: "id",
          message: "Intern ID: ",
        },
        {
          type: "input",
          name: "email",
          message: "Intern email: ",
        },
        {
          type: "input",
          name: "school",
          message: "Intern school: ",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.id,
          answers.name,
          answers.email,
          answers.school
        );
        this.employees.push(intern);
        this.addEmployee();
      });
  }

  complete() {
    console.log(this.employees);
  }
}

new Employees().addManager();
