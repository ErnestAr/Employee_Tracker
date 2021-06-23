const inquirer = require("inquirer")
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  port: 3306,

  user: 'root',
  password: '',
  database: 'employees_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connection to DB has been established.`);
  });


 function Add() {
    this.department = (id, name) => {
        console.log('Inserting a new department...\n');
        const query = connection.query(
          'INSERT INTO departments SET ?',
          {
            id: id,
            name: name
          },
          (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} department inserted!\n`);
          }
        );

    }
    this.role = (id, title, salary, department_id) => {
        console.log('Inserting a new role...\n');
        const query = connection.query(
          'INSERT INTO roles SET ?',
          {
            id: id,
            title: title,
            salary:salary,
            department_id: department_id,

          },
          (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} role inserted!\n`);
          }
        );
    }
    this.employee = (id, first_name, last_name, role_id, manager_id) => {
        console.log('Inserting a new employee...\n');
        const query = connection.query(
          'INSERT INTO employees SET ?',
          {
            id: id,
             first_name: first_name,
              last_name: last_name, 
              role_id: role_id,
              manager_id: manager_id
          },
          (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} employee inserted!\n`);
          }
        );
    }
}

function View() {
    this.departments = () => {
        connection.query('SELECT * FROM departments', (err, res) => {
            if (err) throw err;
            console.table(res);
            connection.end();
          });
    }
    this.roles = () => {
        connection.query('SELECT * FROM departments', (err, res) => {
            if (err) throw err;
            console.table(res);
            connection.end();
          });
    }
    this.employee = () => {
        connection.query('SELECT * FROM employee', (err, res) => {
            if (err) throw err;
            console.table(res);
            connection.end();
          });
    }
}

function Update() {
    this.employee_roles = (input_name) => {
        console.log('Updating selected employee role...\n');
        const query = connection.query(
          'UPDATE employees SET ? WHERE ?',
          [
            {
              first_name: input_name,
            },
          ],
          (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} employee updated!\n`);
          }
        )
    }
  }



