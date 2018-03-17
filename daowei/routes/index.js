var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*router.get('/fuwu', function(req, res, next) {
	res.render('fuwushang.html');
});*/

module.exports = router;
