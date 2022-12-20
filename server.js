const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
//const PeopleRoutes = require("./routes/people");
const pbf = require("./routes/PBF");



var app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
//app.use("/people", PeopleRoutes);
app.use("/index", pbf);

app.listen(3000)