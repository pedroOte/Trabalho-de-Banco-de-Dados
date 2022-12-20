const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var localidade = [], escolas_participantes = [], aprovacao = [], media_SAEB = [], IDEB = [], serie = [], ano = [];

Router.get("/", (req,res)=>[
    mysqlConnection.query("Select * from IDEB", (err, rows, fields)=>{
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
      escolas_participantes[i] = dataArray[i].esc_partc;
      aprovacao[i]= dataArray[i].aprov;
      media_SAEB[i]= dataArray[i].avg_saeb;
      IDEB[i]= dataArray[i].ideb;
      serie[i]= dataArray[i].serie;
      ano[i]= dataArray[i].ano;
    }
    jsonArray = [localidade, escolas_participantes, aprovacao, media_SAEB, IDEB, serie, ano];
    // console.log("in FormatData()...\n");
    // console.log(jsonArray);
  }

module.exports = Router;