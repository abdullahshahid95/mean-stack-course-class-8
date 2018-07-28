




var express = require('express');
var router = express.Router();


Home = require('../schema/home.js');
//Booter = require('../schema/booter.js');

router.get('/', function(req, res){

	 // Home.find(function(err, response){
         //res.send(response);
		console.log("khan home");
   // });

	//res.send('YES SHAHNAWAZ ROUTERS');
	console.log("shah");
});

router.get('/about', function(req, res,next){
	res.send('YES SHAHNAWAZ ROUTERS about');
	next();
	
});

router.post('/', function(req, res){
	res.send('YES SHAHNAWAZ ROUTERS');
});
//export this router to use in our index.js
module.exports = router;
