




var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var path = require('path');
//var multer = require('multer');
var app = express();

//app.use(multer());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

 var home = require('./routes/home.js'); 
  app.use('/home', home); 

  var user = require('./routes/users.js'); 
  app.use('/user', user); 

  app.get('/shah2', function(req, res){
   res.send("Hello shahg");
   });

app.use(express.static(__dirname + "/public"));


// //Mongoose Connect zaher
// mongoose.connect('mongodb://localhost/newform');
// var db = mongoose.connection;
// app.use(express.static(__dirname+'/client'));
// app.use(bodyParser.json());
// app.get('/', function(req, res){
//     res.send('Please Use /api/patient');
// });
// var patients = require('./routes/patients');
// var booters = require('./routes/booters');
// app.use('/api/patients', patients);
// app.use('/api/booters', booters);


// var routerPublic = require('./routes/routerPublic.js');
// //both index.js and things.js should be in same directory
// app.use('/routes/routerStudent', routerStudent);
// mongoose.connect('mongodb://localhost/appCollege');




app.listen(3000);
console.log("server running on port 3000");