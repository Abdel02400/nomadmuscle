const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();
const PORT = 8080;

// on defini le Body Parser
var urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());

// on fait la Définition des CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,charset=utf-8"');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var connection = mongoose.connect(
    'mongodb://localhost:27017/NOMAD', { useNewUrlParser:true }
);

connection.then(res => {
    
   console.log("Mongodb connecté");

    app.listen(PORT, () => {
        console.log(`Serveur express écoutant le port ${PORT}...`)
    })


})