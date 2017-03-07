const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const configRoutes = require('./routes');


// body-parser middleware

app.use(bodyParser.json());
configRoutes(app);

app.listen(3000, () => {
    console.log("Sever has started");
    console.log("Listening on port 3000...");
});