const express = require('express');
const router = express.Router();
// const passport = require('../passport-config/passport-strats')

module.exports = (app, passport) => {
    router.get("/", (req,res) => {
            res.render("user/login");
        // if(user == "authenticated") {
        //     res.redirect("/private");
        // }
        // else {
        // }
    });

    router.post("/login", passport.authenticate('local', { failureRedirect: '/login' }),
        (req,res) => {  
            // try to authenticate user with passport

            // if user is authenticated
            if(user == "authenticated") {
                res.redirect("/private")
            }
            else {  //otherwise redirect to / and display error message
                res.redirect("/")
            }
    })

    router.get("/private", (req, res) => {
        //only valid users can get to /private
        let user = req.user;
        res.render("user/user_profile", {
            user: user
        });
    });
    return router;
}





