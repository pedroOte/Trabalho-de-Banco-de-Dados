const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var localidade = [], IDEB = [], Aprovacao = [];

Router.get("/cons3", (req,res)=>[
    mysqlConnection.query("SELECT i.localidade, i.Aprovacao as Aprovacao_Fundamental_I, f.Aprovacao as Aprovacao_Fundamental_II, i.IDEB as IDEB_Fundamental_I, f.IDEB as IDEB_Fundamental_II FROM ideb as i JOIN ideb as f on i.Localidade = f.Localidade and i.Serie = \"Fundamental I\" and f.Serie = \"Fundamental II\";", (err, rows, fields)=>{
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
      IDEB[i] = dataArray[i].IDEB_Fundamental_I;
      IDEB[i] = dataArray[i].IDEB_Fundamental_II;
      Aprovacao[i] = dataArray[i].Aprovacao_Fundamental_I;
      Aprovacao[i] = dataArray[i].Aprovacao_Fundamental_II;
    }
    jsonArray = [localidade, IDEB, Aprovacao];
    // console.log("in FormatData()...\n");
    // console.log(jsonArray);
  }

module.exports = Router;