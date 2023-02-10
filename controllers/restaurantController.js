const assert = require("assert");
const Member = require("../models/Member");
const Product = require("../models/Product");
const Definer = require("../lib/mistake");

let restaurantController = module.exports;
restaurantController.home = (req, res) => {
  try {
    console.log("GET: cont/home");
    res.render("home-page");
  } catch (err) {
    console.log(`ERROR cont/home, ${err.message}`);
    res.json({ state: "Failed", message: err.message });
  }
};

restaurantController.getMyRestaurantProducts = async (req, res) => {
  try {
    console.log("GET: cont/getMyRestaurantProducts");
    const product = new Product();
    const data = await product.getAllProductsDataResto(res.locals.member);
    res.render("restaurant-menu", { restaurant_data: data }); // browser
  } catch (err) {
    console.log(`ERROR cont/getMyRestaurantProducts, ${err.message}`);
    res.json({ state: "Failed", message: err.message });
  }
};

restaurantController.getSignupMyRestaurant = async (req, res) => {
  try {
    console.log("GET: cont/getSignupMyRestaurant");
    res.render("signup");
  } catch (err) {
    console.log(`ERROR cont/getSignupMyRestaurant, ${err.message}`);
    res.json({ state: "Failed", message: err.message });
  }
};

restaurantController.signupProcess = async (req, res) => {
  try {
    console.log("POST: cont/signupProcess");
    // console.log('body', req.body) //info about user
    // console.log('file:', req.file)  //info about file

    assert(req.file, Definer.general_err3); //no 'files', because single image is uploaded

    let new_member = req.body;  //info about user
    new_member.mb_type = 'RESTAURANT'; //because only for admin panel
    new_member.mb_image = req.file.path; //member_model

    const member = new Member();
    const result = await member.signupData(new_member); //member.js + 47
    assert(req.file, Definer.general_err1); //no 'files', because single image is uploaded

    req.session.member = result;
    res.redirect("/resto/products/menu");

    // SESSION AUTH

    // res.json({ state: "Succeeded", data: new_member }); NOT NEEDED

  } catch (err) {
    console.log(`ERROR cont/signupProcess, ${err.message}`);
    res.json({ state: "Failed", message: err.message });
  }
};

restaurantController.getLoginMyRestaurant = async (req, res) => {
  try {
    console.log("GET: cont/getLoginMyRestaurant");
    res.render("login-page");
  } catch (err) {
    console.log(`ERROR cont/getLoginMyRestaurant, ${err.message}`);
    res.json({ state: "Failed", message: err.message });
  }
};

restaurantController.loginProcess = async (req, res) => {
  try {
    console.log("POST: controller/loginProcess");
    const data = req.body,
      member = new Member(),
      result = await member.loginData(data); //69 line/. loginData goes to Member Js

    req.session.member = result;
    req.session.save(function () {
      result.mb_type === "ADMIN"
        ? res.redirect("/resto/all-restaurant")
        : res.redirect("/resto/products/menu"); // goes to router bssr
    });
  } catch (err) {
    console.log(`ERROR: controller/loginProcess`, err.message);
    res.json({ state: "failed", message: err.message });
  }
};

restaurantController.logout = (req, res) => {
  console.log("GET cont.logout");
  res.send("logout sahifadasiz");
};

restaurantController.validateAuthRestaurant = (req, res, next) => {
  if (req.session?.member?.mb_type === "RESTAURANT") {
    req.member = req.session.member;
    next();
  } else
    res.json({
      state: "Failed",
      message: "Only authenticated members with restaurant type",
    });
};

restaurantController.checkSessions = (req, res) => {
  if (req.session?.member) {
    res.json({ state: "Succeeded", data: req.session.member });
  } else {
    res.json({ state: "Failed", message: "You are not authenticated" });
  }
};

// get fetches data
// post submits data

// result.mb_type === "ADMIN"
//         ? res.redirect("/resto/all-restaurant") // for admin
//         :
