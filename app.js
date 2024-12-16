const express = require('express');
const { connectMongoDb } = require('./connection');
const routes = require('./routes/index'); // Adjust the path as necessary

// db connection
connectMongoDb('mongodb://127.0.0.1:27017/practice');

const app = express();

const port = 9000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Use the routes
app.use('/app', routes);

app.listen(port, () => console.log(`server started listening to ${port}`));