var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/UI_Kit.html');
});


http.listen(1337, function () {
    console.log('listening on *:1337');
});