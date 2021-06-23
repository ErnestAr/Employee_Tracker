DROP DATABASE IF EXISTS empoloyees_db;
CREATE DATABASE empoloyees_db;

USE empoloyees_db;

CREATE TABLE department (
  id INTEGER,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)

);

CREATE TABLE  role (
  id INTEGER,
  title VARCHAR(30),
  salary    DECIMAL,
  department_id INTEGER,
  PRIMARY KEY (id)

);

CREATE TABLE employee (
  id INTEGER ,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER,
  manager_id INTEGER NULL,
  PRIMARY KEY (id)

);


INSERT INTO department (id, name)
VALUES (5, 'marketing');
INSERT INTO department (id, name)
VALUES (3, 'service');
INSERT INTO department (id, name)
VALUES (4, 'finance');

INSERT INTO role (id, title, salary, department_id)
VALUES (24, manager, 60,000, 3);
INSERT INTO role (id, title, salary, department_id)
VALUES (25, finance advisor, 65,000, 4);
INSERT INTO role (id, title, salary, department_id)
VALUES (26, District manager, 60,000, 3);
INSERT INTO role (id, title, salary, department_id)
VALUES (27, manager, 60,000, );

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (234, Will, Smith, 26, 12);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (235, Alex, Courtie, 26, 13);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (236, Nick, Lew, 26, 14);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (237, Mr, Anderson, 26, 15);

