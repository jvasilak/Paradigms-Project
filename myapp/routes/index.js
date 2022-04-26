var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// Get team view page
router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Team View' });
});

module.exports = router;
