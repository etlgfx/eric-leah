var express = require('express'),
    expressSession = require('express-session'),
    passport = require('passport'),
    TwitterStrategy = require('passport-twitter').Strategy,
    config = require('js-tweaker')()();

var users = {};

passport.use(new TwitterStrategy(
    config.auth.twitter,
    function (token, tokenSecret, profile, done) {
        users[profile.id] = profile;
        done(null, profile);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    done(null, users[id]);
});

var app = express();

app.use(function (req, res, next) {
    console.log(Date.now() +' - '+ req.method +':'+ req.url);
    next();
});

app.use(expressSession({
    secret: 'whatever',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/login', function (req, res) {
    res.send('<a href="/auth/twitter">twitter login</a>');
});

app.get('/', function (req, res) {
    console.log(req.session);
    res.send('hello');
});

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

app.listen(8888);
