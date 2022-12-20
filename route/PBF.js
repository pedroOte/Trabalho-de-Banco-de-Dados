const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var localidade = [], nao_Beneficiados = [], beneficiados = [];

Router.get("/", (req,res)=>[
    mysqlConnection.query("Select * from PBF", (err, rows, fields)=>{
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
      nao_Beneficiados[i] = dataArray[i].nao_Ben;
      beneficiados[i]= dataArray[i].ben;
    }
    jsonArray = [localidade, nao_Beneficiados, beneficiados];
    // console.log("in FormatData()...\n");
    // console.log(jsonArray);
  }

module.exports = Router;