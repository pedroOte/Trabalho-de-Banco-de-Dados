const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var localidade = [], ideb = [], total = [];

Router.get("/cons4", (req,res)=>[
    mysqlConnection.query("SELECT r.Localidade, IDEB, Total FROM ideb as i JOIN rendafamiliar as r ON i.Localidade = r.Localidade WHERE IDEB=(SELECT min(IDEB) FROM ideb);", (err, rows, fields)=>{
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
      ideb[i]= dataArray[i].IDEB;
      total[i]= dataArray[i].Total;
    }
    jsonArray = [localidade, ideb, total];
    // console.log("in FormatData()...\n");
    // console.log(jsonArray);
  }

module.exports = Router;