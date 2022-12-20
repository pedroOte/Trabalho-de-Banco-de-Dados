const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var localidade = [], nao_Beneficiados = [], beneficiados = [], total = [];

Router.get("/", (req,res)=>[
    mysqlConnection.query("Select localidade, Qtd_fam_com_PBF from PBF LIMIT 40 ", (err, rows, fields)=>{
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
      nao_Beneficiados[i] = dataArray[i].Qtd_fam_sem_PBF;
      beneficiados[i]= dataArray[i].Qtd_fam_com_PBF;
      total[i]= dataArray[i].Total;
    }
    jsonArray = [localidade, nao_Beneficiados, beneficiados];
    // console.log("in FormatData()...\n");
    // console.log(jsonArray);
  }

module.exports = Router;