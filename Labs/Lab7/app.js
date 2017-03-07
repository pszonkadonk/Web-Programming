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

//  rt.addCommentToRecipe(foo._id, foo.poster, foo.comment);


app.listen(3000, () => {
    console.log("Sever has started");
    console.log("Listening on port 3000...");
});