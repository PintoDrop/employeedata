-- CREATE DATABASE employeeData_db;

-- USE employeeData_db;
-- CREATE TABLE departments (
-- id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
-- name VARCHAR (25) NOT NULL
-- );


-- USE employeeData_db;
-- CREATE TABLE roles (
-- id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
-- title VARCHAR (25) NOT NULL,
-- salary DECIMAL NOT NULL,
-- department_id INT NOT NULL,
-- FOREIGN KEY(department_id) REFERENCES departments(id)
-- );

-- USE employeeData_db;
-- CREATE TABLE employees (
-- id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
-- first_name VARCHAR (25) NOT NULL,
-- last_name VARCHAR(25) NOT NULL,
-- role_id INT NOT NULL,
-- FOREIGN KEY(role_id) REFERENCES roles(id),
-- manager_id INT,
-- FOREIGN KEY (manager_id) REFERENCES employees(id)
-- );