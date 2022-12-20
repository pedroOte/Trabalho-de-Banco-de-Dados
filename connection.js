const mysql = require('mysql')

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysqldcc",
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