const express = require('express');
const path = require('path');
const app = express();

//declare other files
const ivr = require('./docs/scripts/ivr.js');


// Routes
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'docs','index.html'));
});

app.use('/scripts', express.static(path.join(__dirname, 'docs/scripts')))
// app.use('/styles', express.static(path.join(__dirname, 'docs/styles')))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/gettoken', function (req, res) {
   

});

app.post('/getflowid', function (req, res){

// let flowId = req.body.assignToken;
console.log("res" +JSON.stringify(req.body));
let flowId = req.body;
ivr.assignToken(flowId);
});


// Port Listen
app.listen(3000);
console.log("Running...");

