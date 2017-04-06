const userRoutes = require('./userRoutes');

const constructorMethod = (app, passport) => {
    app.use("/", userRoutes);

    app.use("*", (req,res) => {
        res.redirect("/");
    })
}

module.exports = constructorMethod;