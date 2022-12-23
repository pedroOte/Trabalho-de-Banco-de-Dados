const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var localidade = [], Media_SAEB = [], sim = [], total = [];

Router.get("/cons5", (req,res)=>[
    mysqlConnection.query("SELECT Media_SAEB, ideb.Localidade, (PBF.sim - familiasextremapobreza.Total) as qtd_familias_pbf_ñ_ex_pob, Serie FROM ideb  INNER JOIN PBF ON ideb.Localidade = PBF.Localidade LEFT OUTER JOIN familiasextremapobreza ON familiasextremapobreza.Localidade = ideb.Localidade WHERE (PBF.sim - familiasextremapobreza.Total) > 0", (err, rows, fields)=>{
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
      Media_SAEB[i] = dataArray[i].Media_SAEB;
      sim[i]= dataArray[i].sim;
      total[i]= dataArray[i].total;
    }
    jsonArray = [localidade, Media_SAEB, sim, Total];
    // console.log("in FormatData()...\n");
    // console.log(jsonArray);
  }

module.exports = Router;