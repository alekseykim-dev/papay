const Member = require("../models/Member");

let restaurantController = module.exports;


restaurantController.getMyRestaurantData = async (req, res) => {
  try {
    console.log("GET: cont/getMyRestaurantData");
    // TO DO: Get my restaurant products

    res.render('restaurant-menu')
  } catch (err) {
    console.log(`ERROR cont/getMyRestaurantData, ${err.message}`);
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
    console.log("POST: cont/signup");
    const data = req.body,
      member = new Member(),
      new_member = await member.signupData(data);

      req.session.member = new_member;
      res.redirect('/resto/products/menu')
      

    // SESSION AUTH

    // res.json({ state: "Succeeded", data: new_member }); NOT NEEDED
  } catch (err) {
    console.log(`ERROR cont/signup, ${err.message}`);
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
    console.log("POST: cont/login");
    const data = req.body,
      member = new Member(),
      result = await member.loginData(data);

      req.session.member = result;
      req.session.save(function() {
        res.redirect('/resto/products/menu'); // WILL be changed soon
      })

    // res.json({ state: "Succeeded", data: result });
  } catch (err) {
    console.log(`ERROR cont/signup, ${err.message}`);
    res.json({ state: "Failed", message: err.message });
  }
};

restaurantController.logout = (req, res) => {
  console.log("GET cont.logout");
  res.send("logout sahifadasiz");
};

// get fetches data
// post submits data
