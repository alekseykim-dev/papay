
console.log('Web Serverni Boshlash');

const { SlowBuffer } = require('buffer');
const express = require('express');
const app = express();



// MongoDB call
const db = require('./server').db()
const mongodb = require('mongodb')


// 1. Kirish code
app.use(express.static('public'));  // what public sees
app.use(express.json());    // json object form(web server format)
app.use(express.urlencoded({extended: true})); // recieves html requests// if don't write, express will ignore html form requests 

// 2: Session code

// 3. bssr. Views code
app.set('views', 'views');      // difference?
app.set('view engine', 'ejs');


// 4. Routing code


module.exports = app;