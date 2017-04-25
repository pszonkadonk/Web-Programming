const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');


require('../passport-config/passport-strats.js')(passport, LocalStrategy);


function ensureAuthenticated(req,res,next) {
    if(req.user) {
        return next();
    }
    else {
        res.redirect('/login');
    }
}

router.get("/", (req,res) => {
    if(req.user) {
        res.redirect('/private')
    }
    else {
        res.redirect('/login');
    }
});

router.get('/login', (req,res) => {
    res.render('user/login', {error: req.flash('invalid')});
})

router.post("/login", 
    passport.authenticate('local',
    { failureRedirect: '/login',
    successRedirect: '/private',
    failureFlash: true
    }
));

router.get("/private", ensureAuthenticated, (req, res) => {    

    let loggedUser = req.user
    res.render("user/user_profile", loggedUser);
});

module.exports = router;



