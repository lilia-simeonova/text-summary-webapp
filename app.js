var express = require('express');

const bodyParser= require('body-parser');
var app = express();
var cors = require('cors');
var summarize = require('./summarize');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log(req.body);
})

app.post('/summerize', summarize.action);



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});