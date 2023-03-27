INSERT INTO departments (name)
VALUES ("Accounting"),
       ("Testing"),
       ("Enginerring"),
       ("Call Center"),
       ("Sales");


INSERT INTO roles (title, salary, department_id)
VALUES ("Supervisor", 70000.00, 1 ),
       ("Technician", 50000.00, 2),
       ("Engineer", 40000.00, 3),
       ("Sales Associate", 45000.00, 4),
       ("Sales Rep", 30000.00, 5);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Steve", "Rogers", 1, NULL),
       ("Tony", "Stark", 2, 1),
       ("Bruce", "Banner", 3, 1),
       ("Clint", "Barton", 4, 1),
       ("Scott", "Lang", 5, 1);
       