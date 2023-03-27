const mysql = require("mysql2");
// const PORT = 3001;
const path = require("path");
// const fs = require("fs");
const inquirer = require("inquirer");
const express = require("express");
const cTable = require("console.table");
// const table = cTable.getTable;
// const app = require("express");
// const db = mysql.createConnection('mysql://root:JuiceHead2&&@localhost:3306/employeedata_db')

// app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "JuiceHead2&&",
    database: "employeedata_db",
  },
  console.log("Connected to the employeedata_db database.")
);

// adding via terminal/ updating role

function init() {
  inquirer
    .prompt([
      {
        message: "How would you like to proceed?",
        type: "list",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update employee role",
        ],
        name: "option",
      },
    ])

    .then((start) => {
      switch (start.option) {
        case "Add a department":
          addDepartment();
          break;

        case "Add a role":
          addRole();
          break;

        case "Add an employee":
          addEmployee();
          break;

        case "Update employee role":
          updateEmployeeRole();
          break;

        case "View all departments":
          viewDepartments();
          break;

        case "View all employees":
          viewWorkers();
          break;

        case "View all roles":
          viewRoles();
          break;
      }
    });
}
init();

const addDepartment = () => {
  console.log("Going to add a deparment");
  inquirer
    .prompt([
      {
        message: "What department do you want to add?",
        type: "input",
        name: "name",
      },
    ])
    .then((department) => {
      // console.log(department)
      db.query("INSERT INTO departments SET ?", department);
      console.log("Added department");
    })
    .then(() => init());
};

const addEmployee = () => {
  console.log("Going to add an employee");
  inquirer
    .prompt([
      {
        message: "What is the first name of the employee you want to add?",
        type: "input",
        name: "first_name",
      },
      {
        message: "What is the last name of the employee you want to add?",
        type: "input",
        name: "last_name",
      },
      {
        message: "What is the role of the employee you want to add?",
        type: "input",
        name: "role_id",
      },
      {
        message: "Is there a manager ID?",
        type: "input",
        name: "manager_id",
      },
    ])
    .then((employee) => {
      db.query("INSERT INTO employees SET ?", employee);
      console.log("Added new employee");
    })
    .then(() => init());
};

const addRole = () => {
  console.log("Adding a role");
  inquirer
    .prompt([
      {
        message: "What role title would you like to add?",
        type: "input",
        name: "title",
      },
      {
        message: "What is the salary of this title?",
        type: "input",
        name: "salary",
      },
      {
        message: "Which department is this role in?",
        type: "input",
        name: "department_id",
      },
    ])
    .then((role) => {
      db.query("INSERT INTO roles SET ?", role);
      console.log("Added role title");
    })
    .then(() => init());
};

const updateEmployeeRole = () => {
  console.log("Updating an existing employee role");
  inquirer
    .prompt([
      {
        message: "Which employee would you like to update?",
        type: "input",
        name: "role_id",
      },
      // .then function for what to do next
    ])
    .then(() => init());
};

const viewDepartments = () => {
  console.log("Viewing the departments");
  db.promise()
    .query("SELECT * FROM departments")
    .then(([deps]) => {
      console.table(deps);
    })
    .then(() => init())
    .catch((error) => {
      console.error(error);
    });
};


const viewWorkers = () => {
  console.log("Viewing roles");
  db.promise()
    .query("SELECT * FROM employees")
    .then(([emps]) => {
      console.table(emps);
    })
    .then(() => init())
    .catch((error) => {
      console.error(error);
    });
};

const viewRoles = () => {
  console.log("Viewing roles");
  db.promise()
    .query("SELECT * FROM roles")
    .then(([rols]) => {
      console.table(rols);
    })
    .then(() => init())
    .catch((error) => {
      console.error(error);
    });
};

// app.listen(PORT, () => console.log(`Go to http://localhost:${PORT}`));
