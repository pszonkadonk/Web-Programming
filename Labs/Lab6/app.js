const express = require('express');
let app = express();
let configRoutes = require('./routes');


configRoutes(app);

app.listen(3000, ()=> {
    console.log("Server is now starting!");
    console.log("Your routes will be served on http://localhost:3000");
})