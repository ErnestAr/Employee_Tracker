DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
  id INTEGER  NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)

);

CREATE TABLE  roles (
  id INTEGER  NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary    DECIMAL,
  department_id INTEGER,
  PRIMARY KEY (id)
);

CREATE TABLE employees (
  id INTEGER  NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER,
  manager_id INTEGER NULL,
  PRIMARY KEY (id)
);


INSERT INTO departments ( name)
VALUES ( 'marketing');
INSERT INTO departments ( name)
VALUES ( 'service');
INSERT INTO departments ( name)
VALUES ( 'finance');

INSERT INTO roles ( title, salary, department_id)
VALUES ( "manager", 60000, 3);
INSERT INTO roles ( title, salary, department_id)
VALUES ( "finance advisor", 65000, 4);
INSERT INTO roles ( title, salary, department_id)
VALUES ( "District manager", 60000, 3);
INSERT INTO roles ( title, salary, department_id)
VALUES ( "manager", 60000, 5 );

INSERT INTO employees ( first_name, last_name, role_id, manager_id)
VALUES ( "Will", "Smith", 26, 12);
INSERT INTO employees ( first_name, last_name, role_id, manager_id)
VALUES ( "Alex", "Courtie", 26, 13);
INSERT INTO employees ( first_name, last_name, role_id, manager_id)
VALUES ( "Nick", "Lew", 26, 14);
INSERT INTO employees ( first_name, last_name, role_id, manager_id)
VALUES ( "Mr", "Anderson", 26, 15);

