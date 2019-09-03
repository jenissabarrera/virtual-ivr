const express = require('express');
const path = require('path');
const app = express();


// Routes
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'docs','index.html'));
});

app.use('/scripts', express.static(path.join(__dirname, 'docs/scripts')))
// app.use('/styles', express.static(path.join(__dirname, 'docs/styles')))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/gettoken', function (req, res) {
    console.log(req.body);
});


// Port Listen
app.listen(3000);
console.log("Running...");