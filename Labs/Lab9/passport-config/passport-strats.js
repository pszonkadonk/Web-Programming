const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = () => {
    passport.use(new LocalStrategy(
    (username, password, done) => {
        let targetUser;
        for(let user of data.userData) { //find user with username and verify password
            if(user.username === username && 
                user.verifyPassword(password)) {
                targetUser = user;
                break;
            }
        }
        if(targetUser) {
            return done(null, targetUser)  
        }
        else {
            return done(null, false);
        }
    }
    ));
}