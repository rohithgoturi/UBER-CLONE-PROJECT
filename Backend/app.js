const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const connectToDB = require('./Database/db')
connectToDB();

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;