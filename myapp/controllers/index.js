exports.index = function(req, res, next) {
    res.render('index', { about: 'Welcome to our team!' , player_name:
   'Team'});
}

exports.team = function(req, res, next) {
    res.render('team', {about:'Team Meeting'});
}