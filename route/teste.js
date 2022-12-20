const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var pessoa = [], age = [];

Router.get("/", (req,res)=>[
    mysqlConnection.query("Select * from people", (err, rows, fields)=>{
        if(!err){
            formatData(rows);
            res.send(jsonArray);
            console.log(jsonArray);
            // res.send(rows);
        }
        else{
            console.log(err);
        }
    })
]);

function formatData(dataArray) {
    for(var i = 0; i < dataArray.length; i++) {
      pessoa[i] = dataArray[i].name;
      age[i] = dataArray[i].age;
    }
    jsonArray = [pessoa, age];
    // console.log("in FormatData()...\n");
    // console.log(jsonArray);
  }

module.exports = Router;