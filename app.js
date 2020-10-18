require('./config/config');
require('./models/db');


const dbConfig = require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const auth = require('./routes/authRoutes');

const server = require('http').createServer(app);
const rtsIndex = require('./routes/index.router');

var app = express();

const mongoose = require('mongoose');
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ extended: true, limit: '50mb' }));
// app.use(cookieParser());

// mongoose.Promise = global.Promise;
// mongoose.connect(
//   dbConfig.url,
//   {
//     useNewUrlParser: true
//   }
// ).then((conn) => {
//   console.log("Mongo Connected")
// }).catch((err) => {
//   console.log(err)
// })

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});
app.use('/api/resetpassword', rtsIndex);

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));