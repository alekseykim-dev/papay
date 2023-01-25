
console.log('Web Serverni Boshlash');

const { SlowBuffer } = require('buffer');
const express = require('express');
const app = express();
const router = require('./router');


// // MongoDB call
// const db = require('./server').db()
// const mongodb = require('mongodb')


// 1. Kirish code
app.use(express.static('public'));  // what public sees
app.use(express.json());    // json object form(web server format)
app.use(express.urlencoded({extended: true})); // recieves html requests// if don't write, express will ignore html form requests 

// 2: Session code
// app.use(
//     session({
//         secret: process.env.SESSION_SECRET,
//         cookie: {
//             maxAge: 1000 * 60 * 30, // for 30 minutes
//         },
//         store: store,
//         resave: true,
//         saveUninitialized: true,
//     })
// );

// 3. bssr. Views code
app.set('views', 'views');      // difference?
app.set('view engine', 'ejs');


// 4. Routing code
// app.use("/resto", router_bssr) // traditional
app.use('/', router);         //front  // react // rest api

module.exports = app;


// use for app object
//get post for express rest api