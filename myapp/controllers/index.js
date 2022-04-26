exports.index = function(req, res, next) {
    res.render('index', { about: 'Welcome to our team!' , player_name:
   'Team'});
}

exports.team = function(req, res, next) {
    res.render('team', {about:'Team Meeting'});
}

exports.messi = function(req, res, next) {
    res.render('Messi', {about:'Lionel Messi'});
}

exports.ronaldo = function(req, res, next) {
    res.render('Ronaldo', {about:'Cristiano Ronaldo'});
}

exports.neymar = function(req, res, next) {
    res.render('Neymar', {about:'Neymar Jr.'});
}

exports.salah = function(req, res, next) {
    res.render('Salah', {about:'Mohammed Salah'});
}