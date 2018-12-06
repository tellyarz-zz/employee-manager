const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// get routes
const employee = require('./routes/employee.route');

//initialize express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/employees', employee);

// now for the database...
// get the url from mLab with sandbox
let dbUrl = 'mongodb://sundayokpokor:jade9801@ds035816.mlab.com:35816/employee';
// decide the database to use
let mongoDB = process.env.MONGODB_URL || dbUrl;
// connect to db and set promise
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//start server
app.listen(3000, ()=> console.log('Server up...'));
