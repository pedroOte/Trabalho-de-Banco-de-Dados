const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var localidade = [], IDEB = [], beneficiados = [], total = [], extremaPobreza = [];

Router.get("/cons1", (req,res)=>[
    mysqlConnection.query("SELECT i.localidade, IDEB, Sim as FamiliasBolsaFamilia, e.Total as FamiliasExtremaPobreza FROM ideb as i JOIN PBF as f ON i.localidade = f.localidade JOIN familiasextremapobreza as e ON e.localidade = f.localidade WHERE IDEB>0 ORDER BY IDEB;", (err, rows, fields)=>{
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
      localidade[i] = dataArray[i].localidade;
      IDEB[i] = dataArray[i].IDEB;
      beneficiados[i]= dataArray[i].FamiliasBolsaFamilia;
      extremaPobreza[i]= dataArray[i].FamiliasExtremaPobreza;
      total[i]= dataArray[i].Total;
    }
    jsonArray = [localidade, IDEB, beneficiados, total, extremaPobreza];
    // console.log("in FormatData()...\n");
    // console.log(jsonArray);
  }

module.exports = Router;