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
app.use(passport.initialize());
app.use(session({ secret: 'anything' }));
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy(
    (username, password, done) => {
        let targetUser;
        for(let user of data.userData) { //find user with username and verify password
            if(user.username === username && 
                verifyPassword(password, user.hashedPassword)) {
                targetUser = user;
                console.log("user verified");
                break;
                
            }
        }
        if(targetUser) {
            console.log("return targetUser")
            return done(null, targetUser)  
        }
        else {
            return done(null, false);
        }
    }
));

app.engine('handlebars', handlebarInstance.engine);
app.set('view engine', 'handlebars');


// configRoutes(app);


app.get("/", (req,res) => {
    console.log("hello");
    if(true) {
        res.redirect('/login');
    }
        // res.render("user/login");
    // if(user == "authenticated") {
    //     res.redirect("/private");
    // }
    // else {
    // }
});

app.get('/login', (req,res) => {
    res.render('user/login');
})

app.post("/login", passport.authenticate('local', { failureRedirect: '/login' , successRedirect: '/private'}));
        // try to authenticate user with passport

        // if user is authenticated
        // if(user == "authenticated") {
        //     res.redirect("/private")
        // }
        // else {  //otherwise redirect to / and display error message
        //     res.redirect("/")
        // }

app.get("/private", (req, res) => {
    //only valid users can get to /private
    
    // let user = req.session.passport.user;
    let loggedUser = {
        username: req.session.passport.user.username,
        firstName:req.session.passport.user.firstName,
        lastName:req.session.passport.user.lastName,
        profession:req.session.passport.user.profession,
        biography:req.session.passport.user.biography,
    };
    res.render("user/user_profile", loggedUser);
});






// console.log(JSON.stringify(data.userData, null, 2))

// console.log(JSON.stringify(data.userData[0], null, 2))







app.listen(3000, ()=> {
    console.log("Listening on port 3000");
})