var mysql = require("mysql")
var inquirer = require("inquirer")
var table = require("console.table")

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


//function that starts the app, asks what to do
function init(){
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
    if(answer.start == "Add a department"){
        addD()
    }
    else if(answer.start == "Add an employee"){

    }
    else if(answer.start == "Add a role"){

    }
    else if(answer.start == "Update a department"){

    }
    else if(answer.start == "Update an employee"){

    }
    else if(answer.start == "Update a role"){

    }
    else if(answer.start == "Update an employee's role"){

    }
    else if(answer.start == "View departments"){

    }
    else if(answer.start == "View employees"){

    }
    else if(answer.start == "View roles"){

    }

})
}


//QUESTION PATHS

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
        //newDep(depname.name)
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



//Start the app!
init()