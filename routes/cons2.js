const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var localidade = [], IDEB = [], Serie = [];

Router.get("/cons2", (req,res)=>[
    mysqlConnection.query("SELECT localidade, IDEB, Serie FROM ideb WHERE IDEB = (SELECT max(IDEB) FROM ideb WHERE Serie = \"Fundamental I\") AND Serie = \"Fundamental I\" OR IDEB = (SELECT max(IDEB) FROM ideb WHERE Serie = \"Fundamental II\") AND Serie = \"Fundamental II\";", (err, rows, fields)=>{
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
      localidade[i] = dataArray[i].local;
      sem_Registro[i] = dataArray[i].IDEB;
      serie[i]= dataArray[i].Serie;
    }
    jsonArray = [localidade, sem_Registro, cadastrados];
    // console.log("in FormatData()...\n");
    // console.log(jsonArray);
  }

module.exports = Router;