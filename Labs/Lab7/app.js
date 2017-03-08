const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const configRoutes = require('./routes');
const rt = require('./data/comments');


// body-parser middleware

app.use(bodyParser.json());
configRoutes(app);

let foo = {
    _id: '0a5a59af-2041-4ace-98ff-efd8dac18a0b',
    poster: 'Michael',
    comment: 'These eggs are terrible'
 }

// rt.updateComment("d1806f1c-116d-4c10-a7d8-c1b441d05fbf","4e5c8b57-dccc-4ab2-99d2-d25b05af7e89", {
// 	"comments": "Geeeeee!"
// });

app.listen(3000, () => {
    console.log("Server has started");
    console.log("Listening on port 3000...");
});