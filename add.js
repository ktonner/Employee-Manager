const inquirer = require("inquirer");
var mysql = require("mysql");

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

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
  });

//Department constructor, should create new department object
//to send to server

function newDep(name){
    this.name = name
}

//DEPARTMENT
//Ask for name, then make new dep object
function addD(){
    inquirer.prompt([
        {
            type: "input",
            message: "Name the new department",
            name: "depname"
        }
    ]).then(response => {
        //construct the new department
        newDep(depname.name)
        //connect to the server and push the new department to the table
        connection.query(
            "INSERT INTO department SET ?",
              {
                name: depname.name
              },
          
            function(err, res) {
              if (err) throw err;
              console.log(res.affectedRows + " database updated!\n");
    })
})
}

