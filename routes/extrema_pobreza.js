const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var localidade = [], sem_Registro = [], cadastrados = [];

Router.get("/", (req,res)=>[
    mysqlConnection.query("Select * from extrema_pobreza", (err, rows, fields)=>{
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
      sem_Registro[i] = dataArray[i].sem_Reg;
      cadastrados[i]= dataArray[i].cad;
    }
    jsonArray = [localidade, sem_Registro, cadastrados];
    // console.log("in FormatData()...\n");
    // console.log(jsonArray);
  }

module.exports = Router;