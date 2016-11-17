
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer(); 

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(upload.array()); // for parsing multipart/form-data

//router.listen(3001, function() {
  //console.log('Servidor funcionando en http://localhost:3001');
//});

router.get('/', function(req, res){
	var drinks  = [
	{
		name: 'Bloody Mary', drunkness: 2,
		name: 'Bloody Mary', drunkness: 7,
		name: 'Bloody Mary', drunkness: 5,
	}];

	res.render('home', {
		name:"Tutorial",
		url:"https://www.tutorialspoint.com",
		drinks: drinks
	});
});

router.get('/bienvenido/:nombre', function(req, res) {
  res.send('Bienvenidoss!! ' + req.params.nombre + '!!');
});

router.get('/hello', function(req, res){
	res.send("Hello World!");
});

router.post('/hello', function(req, res){
	res.send("You just called the post method at '/hello'!");
});

router.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
});

router.get('/things/:id([0-9]{5})', function(req, res){
    res.send('id: ' + req.params.id);
});

router.get('/formulario', function(req, res){
    res.send('formulario.ejs');
});

router.post('/formulario', function(req, res) {
	console.log(req.body);
  	res.render('formulario.ejs');
});

module.exports = router;