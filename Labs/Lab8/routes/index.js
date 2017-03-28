const palindromeRoutes = require('./palindrome');

const constructorMethod = (app) => {
    app.use('/palindrome', palindromeRoutes);

    app.use('*', (req, res) => {
        res.redirect('/palindrome');
    });
};

module.exports = constructorMethod;