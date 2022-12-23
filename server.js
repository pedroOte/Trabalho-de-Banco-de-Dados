const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
//const PeopleRoutes = require("./routes/people");
const pbf = require("./routes/cons1");
const IDEB = require("./routes/cons2");
const serie = require("./routes/cons4");
const renda = require("./routes/cons5");



var app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
//app.use("/people", PeopleRoutes);
app.use("/index1", pbf);
app.use("/index2", IDEB);
app.use("/index4", serie);
app.use("/index5", renda);

app.listen(3000)