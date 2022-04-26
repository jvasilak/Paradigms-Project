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

// Get player view pages
router.get('/messi', function(req, res, next) {
  res.render('messi', { title: 'Lionel Messi' });
});

router.get('/ronaldo', function(req, res, next) {
  res.render('ronaldo', { title: 'Cristiano Ronaldo' });
});

router.get('/neymar', function(req, res, next) {
  res.render('neymar', { title: 'Neymar Jr.' });
});

router.get('/salah', function(req, res, next) {
  res.render('salah', { title: 'Mohammed Salah' });
});

module.exports = router;
