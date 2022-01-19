const express = require('express');
const { config } = require('dotenv');
const { database } = require('./database');
const expressLayouts = require('express-ejs-layouts');
const Routers = require('./routers');
const session = require('express-session');
const Authentication = require('./middlewares/Authentication');

const app = express();

config();
database();

// Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: process.env.APP_SESSION_KEY,
    resave: false,
    saveUninitialized: true,
}));
app.use(Authentication.hasLoggedIn);

//Routers
app.use('/', Routers.PublicRouter);
app.use('/user',Routers.UserRouter);
app.use('/user/management',Authentication.authorization, Routers.ManagementRouter);


app.listen(process.env.APP_PORT, () => {
    console.log(`Server started on http://localhost:${process.env.APP_PORT}`);
});