var express = require('express');
var fs = require("fs");
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
  let likeData = JSON.parse(fs.readFileSync(__dirname + "/../public/data/likes.json"));
  // Like
  if(req.query.vote == 1) {
    likeData["Messi"]["Likes"] = "1";
  } 
  // Dislike
  else if(req.query.vote == 2) {
    likeData["Messi"]["Dislikes"] = "1";
  }

  let infoData = JSON.parse(fs.readFileSync(__dirname + "/../public/data/info.json"));
  let sendData = infoData["Messi"];
  sendData["Likes"] = likeData["Messi"]["Likes"];
  sendData["Dislikes"] = likeData["Messi"]["Dislikes"];

  res.render('messi', sendData);
});

router.get('/ronaldo', function(req, res, next) {
  let data = fs.readFileSync(__dirname + "/../public/data/info.json");
  let jsonData = JSON.parse(data);
  res.render('ronaldo', jsonData["Ronaldo"]);
});

router.get('/neymar', function(req, res, next) {
  let data = fs.readFileSync(__dirname + "/../public/data/info.json");
  let jsonData = JSON.parse(data);
  res.render('neymar', jsonData["Neymar"]);
});

router.get('/salah', function(req, res, next) {
  let data = fs.readFileSync(__dirname + "/../public/data/info.json");
  let jsonData = JSON.parse(data);
  res.render('salah', jsonData["Salah"]);
});

module.exports = router;
