const mysql = require('mysql2')

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "trabalho_bd",
    multipleStatements: true
});

mysqlConnection.connect((err) =>{
    if(!err){
        console.log("conectado");
    }
    else{
        console.log("erro ao conectar! " + err);
    }
})

module.exports = mysqlConnection;