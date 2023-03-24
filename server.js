const mysql = require("mysql2");
const PORT = 3001;
const path = require ("path");
const fs = require ("fs");
const inquirer = require("inquirer");
const express = require("express");
const console = require("console.table");
const app = require('express');




app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "JuiceHead2&&",
    // change database name once created in mysql
    // database: "classlist_db",
  },
  console.log(`Connected to the classlist_db database.`)
);


app.listen(PORT, () => console.log(`Go to http://localhost:${PORT}`));