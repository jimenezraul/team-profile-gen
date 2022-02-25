const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Template = require("./src/template");
const fs = require("fs");

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
          validate: (value) => {
            if (value) {
              return true;
            }
            return `Please enter a Manager name.`;
          },
        },
        {
          type: "input",
          name: "id",
          message: "Manager ID: ",
          validate: (value) => {
            const num = parseInt(value);
            var valid = Number.isInteger(num);
            return valid || `Please enter a valid Manager ID.`;
          },
        },
        {
          type: "input",
          name: "email",
          message: "Manager email: ",
          validate: (value) => {
            if (value) {
              return true;
            }
            return "Please enter a Manager email.";
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Manager office number: ",
          validate: (value) => {
            const num = parseInt(value);
            var valid = Number.isInteger(num);
            return valid || `Please enter a valid Manager office number.`;
          },
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
          validate: (value) => {
            if (value) {
              return true;
            }
            return "Please enter a Engineer name.";
          },
        },
        {
          type: "input",
          name: "id",
          message: "Engineer ID: ",
          validate: (value) => {
            const num = parseInt(value);
            var valid = Number.isInteger(num);
            return valid || `Please enter a valid Engineer ID.`;
          },
        },
        {
          type: "input",
          name: "email",
          message: "Engineer email: ",
          validate: (value) => {
            if (value) {
              return true;
            }
            return "Please enter a Engineer email.";
          },
        },
        {
          type: "input",
          name: "github",
          message: "Engineer github username: ",
          validate: (value) => {
            if (value) {
              return true;
            }
            return "Please enter a Engineer github username.";
          },
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
          validate: (value) => {
            if (value) {
              return true;
            }
            return "Please enter an Intern name.";
          },
        },
        {
          type: "input",
          name: "id",
          message: "Intern ID: ",
          validate: (value) => {
            const num = parseInt(value);
            var valid = Number.isInteger(num);
            return valid || `Please enter a valid Intern ID.`;
          },
        },
        {
          type: "input",
          name: "email",
          message: "Intern email: ",
          validate: (value) => {
            if (value) {
              return true;
            }
            return "Please enter an Intern email.";
          },
        },
        {
          type: "input",
          name: "school",
          message: "Intern school: ",
          validate: (value) => {
            if (value) {
              return true;
            }
            return "Please enter an Intern school.";
          },
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
    const template = new Template(this.employees);
    // create a new file named team.html
    fs.writeFile("./dist/team.html", template.generateHTML(), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("HTML Created Successfully!");
    });
  }
}

new Employees().addManager();
