var mysql = require("mysql")
var inquirer = require("inquirer")
var table = require("console.table")
const logo = require('asciiart-logo');

//Connect to emanager database

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "emanagerDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});


//function that starts the app, asks what to do
function init() {
    //the logo at the start
    console.log(
        logo({
            name: 'Employee Manager',
            lineChars: 10,
            padding: 2,
            margin: 3
        })
            .emptyLine()
            .right('version 3.7.123')
            .emptyLine()
            .center("Organize your entire staff with just one application.")
            .render()
    );
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices:
                [
                    "Add a department",
                    "Add an employee",
                    "Add a role",
                    "Update a department",
                    "Update an employee",
                    "Update a role",
                    "Update an employee's role",
                    "View departments",
                    "View employees",
                    "View roles"
                ],
            name: "start"
        }
    ]).then(answer => {
        //Split off based on what the user wants to do
        if (answer.start == "Add a department") {
            addD()
        }
        else if (answer.start == "Add an employee") {
            addE()
        }
        else if (answer.start == "Add a role") {
            addR()
        }
        else if (answer.start == "Update a department") {

        }
        else if (answer.start == "Update an employee") {

        }
        else if (answer.start == "Update a role") {

        }
        else if (answer.start == "Update an employee's role") {

        }
        else if (answer.start == "View departments") {

        }
        else if (answer.start == "View employees") {

        }
        else if (answer.start == "View roles") {

        }

    })
}


//QUESTION PATHS

//DEPARTMENT
//Ask for name, then make new dep object
function addD() {
    inquirer.prompt([
        {
            type: "input",
            message: "Name the new department",
            name: "depname"
        }
    ]).then(response => {
        //construct the new department
        var depname = response.depname
        //connect to the server and push the new department to the table
        connection.query(
            "INSERT INTO department SET ?",
            {
                name: depname
            },

            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " database updated!\n");
            })
    })
}

//ROLE
//ask for department id, then create role
function addR() {
    //Query to get all of the departments for the department question
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        inquirer.prompt([
            {
                type: "input",
                message: "What is the title of this role?",
                name: "title"
            },
            {
                type: "input",
                message: "What salary should this role have?",
                name: "salary"
            },
            {
                type: "rawlist",
                message: "Pick the department for this role.",
                name: "department",
                choices: function () {
                    var choiceArray = []
                    for (i = 0; i < res.length; i++) {
                        choiceArray.push(res[i].item_name)
                    }
                    return choiceArray
                }
            }
    ]).then(answers=>{
        //push the new role into the database!
        connection.query(
            "INSERT INTO role SET ?",
            {
                title: answers.title,
                salary: answers.salary,
                department_id: answers.department.id
            },

            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " database updated!\n");
            })

    })
    }


//Start the app!
init()