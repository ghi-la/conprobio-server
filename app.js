const express = require('express');
const indexRouter = require('./routes/index');

require('dotenv').config();

var app = express();

// app.get('/', function (req, res) {
// 	res.send('ConProBioServer');
// });

app.use('/conprobio-server', indexRouter);

app.listen(3009, function () {
	console.log('Example app listening on port 3009!');
});
