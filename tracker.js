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
    this.department = ( name) => {
        console.log('Inserting a new department...\n');
        const query = connection.query(
          'INSERT INTO departments SET ?',
          {
            name: name
          },
          (err, res) => {
            if (err) throw err;
            console.log(`Department inserted to departments table!\n`);
            init()
          }
        );

    }
    this.role = ( title, salary, department_id) => {
        console.log('Inserting a new role...\n');
        const query = connection.query(
          'INSERT INTO roles SET ?',
          {
            title: title,
            salary:salary,
            department_id: department_id,

          },
          (err, res) => {
            if (err) throw err;
            console.log(`role inserted to roles!\n`);
            init()
          }
        );
    }
    this.employee = ( first_name, last_name, role_id, manager_id) => {
        console.log('Inserting a new employee...\n');
        const query = connection.query(
          'INSERT INTO employees SET ?',
          {
              first_name: first_name,
              last_name: last_name, 
              role_id: role_id,
              manager_id: manager_id
          },
          (err, res) => {
            if (err) throw err;
            console.log(`${first_name} ${last_name} inserted to employees!\n`);
            init()
          }
        );
    }
}

function View() {
    this.departments = () => {
        connection.query('SELECT * FROM departments', (err, res) => {
            if (err) {       
              throw err;
            }
            console.table(res);
            init()
          });
    }
    this.roles = () => {
        connection.query('SELECT * FROM departments', (err, res) => {
            if (err) throw err;
            console.table(res);
            init()
          });
    }
    this.employees = () => {
        connection.query('SELECT * FROM employees', (err, res) => {
            if (err) throw err;
            console.table(res);
            init()
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
            init()
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
                addRole()
            break;
            case "Add department":
                addDepartment()
                break;
            case "View employees":
                new View().employees()
                break;
            case "View roles":
                new View().roles()
                break;
            case "View departments":
              new View().departments()
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
        new Add().employee(data.first_name, data.last_name, data.role_id, data.manager_id)

      })
  };


  const addRole = () => {
    inquirer
      .prompt([

        {
            type: "input",
            name: "title",
            message: "Enter title.",
        },
        {
            type: "input",
            name: "salary",
            message: "Enter salary.",
        },
        {
            type: "input",
            name: "department_id",
            message: "Enter department_id.",
        },
        
      ]).then((data) => {
        new Add().role( data.title, data.salary, data.department_id)

      })
  };


  const addDepartment = () => {
    inquirer
      .prompt([

        {
            type: "input",
            name: "name",
            message: "Enter department name.",
        },
        
      ]).then((data) => {
        new Add().department( data.name)
      })
  };


connection.connect((err) => {
    if (err) throw err;
    console.log(`Connection to DB has been established.`);
    init()
  });
