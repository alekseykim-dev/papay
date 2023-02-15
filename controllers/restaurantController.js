const assert = require("assert");
const Member = require("../models/Member");
const Product = require("../models/Product");
const Definer = require("../lib/mistake");
const Restaurant = require("../models/Restaurant");

let restaurantController = module.exports;

restaurantController.home = (req, res) => {
  try {
    console.log("GET: controller/home");
    res.render("home-page");
  } catch (err) {
    console.log(`ERROR controller/home, ${err.message}`);
    res.json({ state: "Failed", message: err.message });
  }
};
 
restaurantController.getMyRestaurantProducts = async (req, res) => {
  try {
    console.log("GET: controller/getMyRestaurantProducts");
    const product = new Product(); //result[] goes to PRODUCT.js
    const data = await product.getAllProductsDataResto(res.locals.member);
    res.render("restaurant-menu", { restaurant_data: data }); // browser
  } catch (err) {
    console.log(`ERROR controller/getMyRestaurantProducts, ${err.message}`);
    res.redirect("/resto");
  }
};

restaurantController.getSignupMyRestaurant = async (req, res) => {
  try {
    console.log("GET: controller/getSignupMyRestaurant");
    res.render("signup");
  } catch (err) {
    console.log(`ERROR controller/getSignupMyRestaurant, ${err.message}`);
    res.json({ state: "Failed", message: err.message });
  }
};

restaurantController.signupProcess = async (req, res) => {
  try {
    console.log("POST: controller/signupProcess");
    // console.log('body', req.body) //info about user
    // console.log('file:', req.file)  //info about file

    assert(req.file, Definer.general_err3); //no 'files', because single image is uploaded

    let new_member = req.body; //info about user
    new_member.mb_type = "RESTAURANT"; //because only for admin panel
    new_member.mb_image = req.file.path; //member_model

    const member = new Member();
    const result = await member.signupData(new_member); //member.js + 47
    assert(req.file, Definer.general_err1); //no 'files', because single image is uploaded

    req.session.member = result;
    res.redirect("/resto/products/menu");

    // SESSION AUTH

    // res.json({ state: "Succeeded", data: new_member }); NOT NEEDED
  } catch (err) {
    console.log(`ERROR controller/signupProcess, ${err.message}`);
    res.json({ state: "Failed", message: err.message });
  }
};

restaurantController.getLoginMyRestaurant = async (req, res) => {
  try {
    console.log("GET: controller/getLoginMyRestaurant");
    res.render("login-page");
  } catch (err) {
    console.log(`ERROR controller/getLoginMyRestaurant, ${err.message}`);
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
    console.log(`ERROR: controller/loginProcess, ${err.message}`);
    res.json({ state: "Failed", message: err.message });
  }
};

restaurantController.logout = (req, res) => {
  try {
    console.log("GET controller/logout"); // sends to console
    // res.send("logout sahifadasiz");    // sends to browser
    req.session.destroy(function () {
      res.redirect("/resto");
    });
  } catch (err) {
    console.log(`ERROR: controller/logoutProcess, ${err.message}`);
    res.json({ state: "Failed", message: err.message });
  }
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
    res.json({ state: "Success", data: req.session.member });
  } else {
    res.json({ state: "Failed", message: "You are not authenticated" });
  }
};

restaurantController.validateAdmin = (req, res, next) => {
  if (req.session?.member?.mb_type === "ADMIN") {
    req.member = req.session.member;
    next();
  } else {
    const html = `<script> 
                  alert('Admin page: Permission denied');
                  window.location.replace('/resto');
                  </script>`;
    res.end(html);
  }
};

restaurantController.getAllRestaurants = async (req, res) => {
  try {
    console.log("GET controller/getAllRestaurants");

    const restaurant = new Restaurant();
    const restaurants_data = await restaurant.getAllRestaurantsData()
    // todo: retrieve all restaurants for DB  ==> DONE
    console.log("restaurants_data:", restaurants_data);

    res.render("all-restaurants", {restaurants_data: restaurants_data});

  } catch (err) {
    console.log(`ERROR: controller/getAllRestaurants, ${err.message}`);
    res.json({ state: "Failed", message: err.message });
  }
};

restaurantController.updateRestaurantByAdmin = async (req, res) => {
  try {
    console.log("GET controller/updateRestaurantByAdmin");

    const restaurant = new Restaurant();
    const result = await restaurant.updateRestaurantByAdminData(req.body);
    await res.json({state: "Success", data: result})  //from 165
  } catch (err) {
    console.log(`ERROR: controller/updateRestaurantByAdmin, ${err.message}`);
    res.json({ state: "Failed", message: err.message });
  }
}
// get fetches data
// post submits data
  