const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var localidade = [], total = [], IDEB = [];

Router.get("/cons4", (req,res)=>[
    mysqlConnection.query("SELECT i.localidade, IDEB, Total FROM ideb as i JOIN rendafamiliar as r ON i.localidade = r.localidade WHERE IDEB =(SELECT min(IDEB) FROM ideb);", (err, rows, fields)=>{
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
      total[i]= dataArray[i].Total;
      IDEB[i]= dataArray[i].IDEB;
    }
    jsonArray = [localidade, total, IDEB];
    // console.log("in FormatData()...\n");
    // console.log(jsonArray);
  }

module.exports = Router;