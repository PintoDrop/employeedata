const mysql = require("mysql2");
const PORT = 3001;
const path = require ("path");
const fs = require ("fs");
const inquierer = require("inquirer");
const console = require("console.table");




app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));




app.listen(PORT, () => console.log(`Go to http://localhost:${PORT}`));