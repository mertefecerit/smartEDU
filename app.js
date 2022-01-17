const express = require('express');
const { config } = require('dotenv');
const { database } = require('./database');
const expressLayouts = require('express-ejs-layouts');
const Routers = require('./routers');
const app = express();

config();
database();

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routers
app.use('/', Routers.PublicRouter);
app.use('/courses',Routers.CourseRouter);

app.listen(process.env.APP_PORT, () => {
    console.log(`Server started on http://localhost:${process.env.APP_PORT}`);
});