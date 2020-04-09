var mysql = require("mysql")
var inquire = require("inquirer")
var table = require("console.table")
var add = require("Add")

//function that starts the app, asks what to do
function init(){
inquire.prompt([
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

//Start the app!
init()