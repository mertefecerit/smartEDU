const express = require('express');
const { config } = require('dotenv');
const { database } = require('./database');
const app = express();

config();
database();

app.listen(process.env.APP_PORT, () => {
    console.log(`Server started on http://localhost:${process.env.APP_PORT}`);
})