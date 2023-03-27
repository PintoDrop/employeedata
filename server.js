const mysql = require("mysql2");
// const PORT = 3001;
const path = require("path");
// const fs = require("fs");
const inquirer = require("inquirer");
const express = require("express");
const console = require("console.table");
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
  // console.log(`Connected to the employeedata_db database.`)
  );
  


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
        "Update Employee Role",
      ],
      name: "option",
    },
  ])

  .then(start => {
    // console.log(begin);
    // console.log(begin.option)
    switch(start.option) {
      case 'Add a department':
        addDepartment()
        break

      case 'Add a role':
        addRole()
        break

      case 'Add an employee':
        addEmployee()
        break

      case 'Update Employee Role':
        updateEmployee()
        break

      case 'View all departments' :
        viewDepartments()
        break

      case 'View all emplyoees' :
        viewEmployees()
        break

      case 'View all roles' :
        viewRoles()
        break
    }
  });

  const addDepartment = () => {
    // console.log("Going to add a deparment");
    inquirer.prompt([
      {
        message: "What department do you want to add?",
        type: "input",
        name: "name"
      }
    ])
    .then(department => {
      db.query('INSERT INTO departments SET ?', department)
      // console.log('Added department')
    })
  };


  
  const addEmployee = () => {
    // console.log("Going to add an employee");
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
          message: "What is the first name of the employee you want to add?",
          type: "input",
          name: "first_name",
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

      });
  };
  
  const addRole = () => {
    // console.log("Adding a role");
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
      .then(role => {
        // console.log(role)
        // db.query("INSERT INTO roles SET ?", role);
        // console.log('Added role title')
      });
  };


  const updateEmployee = () => {
    // console.log("Going to update existing employee");
    inquirer.prompt([
      {
        message: "Which employee would you like to update?",
        type: "input",
        name: "dept",
      },
      // .then function for what to do next
    ]);
  };

  const viewDepartments = () => {
    // console.log("Going to view the deparments");
    inquirer.prompt([
      {
     
      },
    ]);
  };
  
  const viewEmployees = () => {
    // console.log("Viewing employees");
    inquirer.prompt([
      {

      },
    ]);
  };
  
  const viewRoles = () => {
    // console.log("Viewing roles");
    inquirer.prompt([
      {

      },
    ]);
  };

// app.listen(PORT, () => console.log(`Go to http://localhost:${PORT}`));
