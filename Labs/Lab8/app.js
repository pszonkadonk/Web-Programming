const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const configRoutes = require('./routes');
const static = express.static(__dirname + '/public');

const exphbs = require('express-handlebars');
const handlebars = require('handlebars');

const handlebarInstance = exphbs.create({
    defaultLayout: 'main',
    helpers: {
        asJSON: (obj, spacing) => {
            if(typeof spacing == 'number') 
                return new handlebars.SafeString(JSON.stringify(obj, null, spacing))

            return new handlebars.SafeString(JSON.stringify(obj));
        }
    }
});

app.use('/public', static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.engine('handlebars', handlebarInstance.engine);
app.set('view engine', 'handlebars');

configRoutes(app);


app.listen(3000, () => {
    console.log("Listening on port 3000....");
});


