const express = require('express');
const { config } = require('dotenv');
const { database } = require('./database');
const expressLayouts = require('express-ejs-layouts');
const Routers = require('./routers');
const session = require('express-session');
const Authorization = require('./middlewares/Authorization');

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
app.use(Authorization.hasLoggedIn);

//Routers
app.use('/', Routers.PublicRouter);
//app.use('/courses',Routers.CourseRouter);
//app.use('/categories',Routers.CategoryRouter);
app.use('/user',Routers.UserRouter);


app.listen(process.env.APP_PORT, () => {
    console.log(`Server started on http://localhost:${process.env.APP_PORT}`);
});