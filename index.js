var express = require('express');
var app = express();

var things = require('./things.js');

app.set('view engine', 'ejs');
app.set('views', './views');

//Simple request time logger
app.use(function(req, res, next){
	console.log("A new request received at " + Date.now());
	//This function call is very important. It tells that more processing is 
	//required for the current request and is in the next middleware function/route handler.
	next();
});


app.use('/', things);

app.use(express.static('public'));

app.use(express.static('js'));

app.use(express.static('images'));

app.listen(3001, function() {
	console.log('Servidor funcionando en http://localhost:3001');
})