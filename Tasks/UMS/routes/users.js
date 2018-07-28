








var express = require('express');
var router = express.Router();

router.get('/home/:id', function(req, res){
	res.send('YES SHAHNAWAZ ROUTERS'+req.params.id);
});
router.get('/about', function(req, res,next){
	res.send('YES SHAHNAWAZ ROUTERS about');
	next();
	
});
router.get('/khan',function (req, res,next) {
	res.send("khanmmmm");
});
router.post('/', function(req, res){
	res.send('YES SHAHNAWAZ ROUTERS');
});
//export this router to use in our index.js
module.exports = router;



router.param('user_id', function(req, res, next, id) {
  // sample user, would actually fetch from DB, etc...
  req.user = {
    id: id,
    name: 'TJ'
  };
  next();
});

router.route('/khanj/:user_id')
.all(function(req, res, next) {
  // runs for all HTTP verbs first
  // think of it as route specific middleware!
  next();
})
.get(function(req, res, next) {
  res.json(req.user);
})
.put(function(req, res, next) {
  // just an example of maybe updating the user
  req.user.name = req.params.name;
  // save user ... etc
  res.json(req.user);
})
.post(function(req, res, next) {
  next(new Error('not implemented'));
})
.delete(function(req, res, next) {
  next(new Error('not implemented'));
});



