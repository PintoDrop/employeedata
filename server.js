const mysql = require("mysql2");
const PORT = 3001;
const path = require("path");
// const fs = require("fs");
const inquirer = require("inquirer");
const express = require("express");
// const console = require("console.table");
// const app = require("express");
// const db1 = mysql.createConnection('mysql://root:rootroot@localhost:3306/employeedata_db')

// app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));

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
      name: "begin",
    },
  ])

  .then((begin) => {
    console.log(begin);
    switch(begin) {
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
    }
  });

  const addDepartment = () => {
    console.log('Tried to add a deparment')
  }

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "JuiceHead2&&",
    // change database name once created in mysql
    database: "employeedata_db",
  },
  console.log(`Connected to the classlist_db database.`)
);

// app.listen(PORT, () => console.log(`Go to http://localhost:${PORT}`));
