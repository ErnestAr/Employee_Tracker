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
    this.departments = () => {

    }
    this.roles = () => {

    }
    this.employee = () => {

    }
}

function View() {
    this.departments = () => {
        connection.query('SELECT * FROM departments', (err, res) => {
            if (err) throw err;
            console.log(res);
            connection.end();
          });
    }
    this.roles = () => {

    }
    this.employee = () => {

    }
}

function Update() {
    this.employee_roles = () => {
    }
  }

