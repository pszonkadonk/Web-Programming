const express = require('express');
const app = express();
const router = express.Router();
const data = require('./data'); //user data
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const static = express.static(__dirname + '/public');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
const flash = require('connect-flash');
// const configRoutes = require('./routes'); // routes


const handlebarInstance = exphbs.create({
    defaultLayout: 'main',
    helpers: {
        asJSON: (obj, spacing) => {
            if(typeof spacing == 'number') 
                return new Handlebars.SafeString(JSON.stringify(obj, null, spacing))

            return new Handlebars.SafeString(JSON.stringify(obj));
        }
    }
});

function verifyPassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword)
}


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use('/public', static);
app.use(session({ secret: 'anything' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());   


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy({
        passReqToCallback: true // don't forget this
    },
    (req, username, password, done) => {
        let targetUser;
        for(let user of data.userData) { //find user with username and verify password
            if(user.username === username && 
                verifyPassword(password, user.hashedPassword)) {
                targetUser = user;
                break;
            }
        }
        if(targetUser) {
            return done(null, targetUser)  
        }
        else {
            return done(null, false, req.flash('invalid', 'Invalid username or password, please try again'));
        }
    }
));

app.engine('handlebars', handlebarInstance.engine);
app.set('view engine', 'handlebars');


// configRoutes(app);



function ensureAuthenticated(req,res,next) {
    if(req.user) {
        return next();
    }
    else {
        res.redirect('/login');
    }
}

app.get("/", (req,res) => {
    if(req.session.passport) {
        res.redirect('/private')
    }
    else {
        res.redirect('/login');
    }
});

app.get('/login', (req,res) => {
    res.render('user/login', {error: req.flash('invalid')});
})

app.post("/login", 
    passport.authenticate('local',
    { failureRedirect: '/login',
     successRedirect: '/private',
     failureFlash: true
    }
));

app.get("/private", ensureAuthenticated, (req, res) => {    

    let loggedUser = req.user
    res.render("user/user_profile", loggedUser);
});


app.listen(3000, ()=> {
    console.log("Listening on port 3000");
})