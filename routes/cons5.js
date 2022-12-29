const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var localidade = [], subtracao = [], Media_SAEB = [], serie = [];

Router.get("/cons5", (req,res)=>[
    mysqlConnection.query("SELECT Media_SAEB, ideb.Localidade, (pbf.sim - familiasextremapobreza.Total) as sub, Serie FROM ideb INNER JOIN pbf ON ideb.Localidade = pbf.Localidade LEFT OUTER JOIN familiasextremapobreza ON familiasextremapobreza.Localidade = ideb.Localidade WHERE (pbf.sim - familiasextremapobreza.Total) > 0", (err, rows, fields)=>{
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
      localidade[i] = dataArray[i].Localidade;
      Media_SAEB[i]= dataArray[i].Media_SAEB;
      subtracao[i]= dataArray[i].sub;
      serie[i]= dataArray[i].Serie;
    }
    jsonArray = [localidade, subtracao, Media_SAEB, serie];
    // console.log("in FormatData()...\n");
    // console.log(jsonArray);
  }

module.exports = Router;