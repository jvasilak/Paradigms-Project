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

router.get('/quiz', function(req, res, next) {
  res.render('quiz', { title: 'Quiz' })
});

router.get('/success', function(req, res, next) {
  res.render('success', { title: 'Success'})
});

router.get('/failure', function(req, res, next) {
  res.render('failure', { title: 'Failure'})
});


// Get player view pages
router.get('/messi', function(req, res, next) {
  let likeData = JSON.parse(fs.readFileSync(__dirname + "/../public/data/likes.json"));
  // Like
  if(req.query.vote == 1) {
    likeData["Messi"]["Likes"] += 1;
  } 
  // Dislike
  else if(req.query.vote == 2) {
    likeData["Messi"]["Dislikes"] += 1;
  }
  let likeJSON = JSON.stringify(likeData);
  fs.writeFileSync(__dirname + "/../public/data/likes.json", likeJSON);

  let infoData = JSON.parse(fs.readFileSync(__dirname + "/../public/data/info.json"));
  let sendData = infoData["Messi"];
  sendData["Likes"] = likeData["Messi"]["Likes"];
  sendData["Dislikes"] = likeData["Messi"]["Dislikes"];

  res.render('messi', sendData);
});

router.get('/ronaldo', function(req, res, next) {
  let likeData = JSON.parse(fs.readFileSync(__dirname + "/../public/data/likes.json"));
  // Like
  if(req.query.vote == 1) {
    likeData["Ronaldo"]["Likes"] += 1;
  } 
  // Dislike
  else if(req.query.vote == 2) {
    likeData["Ronaldo"]["Dislikes"] += 1;
  }
  let likeJSON = JSON.stringify(likeData);
  fs.writeFileSync(__dirname + "/../public/data/likes.json", likeJSON);

  let infoData = JSON.parse(fs.readFileSync(__dirname + "/../public/data/info.json"));
  let sendData = infoData["Ronaldo"];
  sendData["Likes"] = likeData["Ronaldo"]["Likes"];
  sendData["Dislikes"] = likeData["Ronaldo"]["Dislikes"];

  res.render('ronaldo', sendData);
});

router.get('/neymar', function(req, res, next) {
  let likeData = JSON.parse(fs.readFileSync(__dirname + "/../public/data/likes.json"));
  // Like
  if(req.query.vote == 1) {
    likeData["Neymar"]["Likes"] += 1;
  } 
  // Dislike
  else if(req.query.vote == 2) {
    likeData["Neymar"]["Dislikes"] += 1;
  }
  let likeJSON = JSON.stringify(likeData);
  fs.writeFileSync(__dirname + "/../public/data/likes.json", likeJSON);

  let infoData = JSON.parse(fs.readFileSync(__dirname + "/../public/data/info.json"));
  let sendData = infoData["Neymar"];
  sendData["Likes"] = likeData["Neymar"]["Likes"];
  sendData["Dislikes"] = likeData["Neymar"]["Dislikes"];

  res.render('neymar', sendData);
});

router.get('/salah', function(req, res, next) {
  let likeData = JSON.parse(fs.readFileSync(__dirname + "/../public/data/likes.json"));
  // Like
  if(req.query.vote == 1) {
    likeData["Salah"]["Likes"] += 1;
  } 
  // Dislike
  else if(req.query.vote == 2) {
    likeData["Salah"]["Dislikes"] += 1;
  }
  let likeJSON = JSON.stringify(likeData);
  fs.writeFileSync(__dirname + "/../public/data/likes.json", likeJSON);

  let infoData = JSON.parse(fs.readFileSync(__dirname + "/../public/data/info.json"));
  let sendData = infoData["Salah"];
  sendData["Likes"] = likeData["Salah"]["Likes"];
  sendData["Dislikes"] = likeData["Salah"]["Dislikes"];

  res.render('salah', sendData);
});

module.exports = router;
