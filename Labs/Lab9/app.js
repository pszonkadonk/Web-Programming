const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const static = express.static(__dirname + '/public');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');
const configRoutes = require('./routes');


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

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use('/public', static);
app.use(session({ secret: 'anything' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());   

// view engine
app.engine('handlebars', handlebarInstance.engine);
app.set('view engine', 'handlebars');

// configure routes
configRoutes(app);



app.listen(3000, ()=> {
    console.log("Listening on port 3000");
})