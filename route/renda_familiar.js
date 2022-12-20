const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var localidade = [], extrema_pobreza = [], pobreza = [], baixa_renda = [], acima_meio_salario = [];

Router.get("/", (req,res)=>[
    mysqlConnection.query("Select * from renda_familiar", (err, rows, fields)=>{
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
      extrema_pobreza[i] = dataArray[i].ext_pob;
      pobreza[i]= dataArray[i].pob;
      baixa_renda[i]= dataArray[i].baixa_ren;
      acima_meio_salario[i]= dataArray[i].acima_meio_sal;
    }
    jsonArray = [localidade, extrema_pobreza, pobreza, baixa_renda, acima_meio_salario];
    // console.log("in FormatData()...\n");
    // console.log(jsonArray);
  }

module.exports = Router;