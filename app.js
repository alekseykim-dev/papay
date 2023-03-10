console.log("Building web server");

const { SlowBuffer } = require("buffer");
const express = require("express");
const app = express();
const router = require("./router.js");
const router_bssr = require("./router_bssr.js");
const cookieParser =require("cookie-parser")

let session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
  uri: process.env.MONGO_URL,
  collection: "sessions",
});

// 1. Kirish code
app.use(express.static("public")); // what public sees
app.use(express.json()); // json object form(web server format)
app.use(express.urlencoded({ extended: true })); // recieves html requests// if don't write, express will ignore html form requests
app.use(cookieParser())

// 2: Session code
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 30, // for 30 minutes
    },
    store: store,   // mongodb 11
    resave: true,
    saveUninitialized: true,
  })
);

app.use(function(req, res, next){
    res.locals.member = req.session.member;  // browser synchronization
    next();
})

// 3. bssr. Views code
app.set("views", "views"); // difference?
app.set("view engine", "ejs");

// 4. Routing code
app.use("/resto", router_bssr); // traditional
app.use("/", router); //front  // react // rest api

module.exports = app;

// use for app object
//get post for express rest api

