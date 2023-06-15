const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8000;
const Router = require('./routes/route');
app.use(express.json());

mongoose
    .connect(process.env.URL)
    .then(() => {
        console.log('Connected successfully');
        app.listen(port, () => {
            console.log(`Server started successfully on port ${port}`);
        });
    })
    .catch((err) => {
        console.log('Error while connecting to database', err);
    })

app.use('/', Router);