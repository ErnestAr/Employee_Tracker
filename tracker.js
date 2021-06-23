const inquirer = require("inquirer")
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  port: 3306,

  user: 'root',
  password: '',
  database: 'employees_db',
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
            console.log(`${first_name} ${last_name} added to employees table!\n`);
          }
        );
    }
}

function View() {
    this.departments = () => {
        connection.query('SELECT * FROM departments', (err, res) => {
            if (err) throw err;
            console.table(res);

          });
    }
    this.roles = () => {
        connection.query('SELECT * FROM departments', (err, res) => {
            if (err) throw err;
            console.table(res);

          });
    }
    this.employees = () => {
        connection.query('SELECT * FROM employees', (err, res) => {
            if (err) throw err;
            console.table(res);

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

  const init = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "option",
          message: "Select option to edit or view employee_db database.",
          choices: ["Add employee", "Add role", "Add department", "View employees", "View roles", "View departments", "Update employee role by name"],
        },
      ]).then((data) => {
        switch (data.option) {
            case "Add employee":
                addEmployee()

                break;
            case  "Add role":
                
            break;
            case "Add department":
                new View().departments()
                init()
                break;
            case "View employees":
                new View().employees()
                init()
                break;
            case "View roles":
                new View().roles()
                init()
                break;
            case "View departments":
                
                break;
            case "Update employee role by name":
                
                break;
            default:
                break;
        }
      })
  };

  const addEmployee = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "id",
          message: "Enter id.",
        },
        {
            type: "input",
            name: "first_name",
            message: "Enter first name.",
          },
        {
            type: "input",
            name: "last_name",
            message: "Enter last name.",
        },
        {
            type: "input",
            name: "role_id",
            message: "Enter role id.",
        },
        {
            type: "input",
            name: "manager_id",
            message: "Enter manager id.",
        },
        
      ]).then((data) => {
        new Add().employee(data.id, data.first_name, data.last_name, data.role_id, data.manager_id)
      })
  };

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connection to DB has been established.`);
    init()
  });

