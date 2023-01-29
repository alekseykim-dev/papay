const express = require("express");
const router_bssr = express.Router(); // why?
const restaurantController = require("./controllers/restaurantController");

/*********************************
 *             BSSR EJS          *
 *********************************/

router_bssr.get("/signup", restaurantController.getSignupMyRestaurant);
router_bssr.post("/signup", restaurantController.signupProcess);

router_bssr.get("/login", restaurantController.getLoginMyRestaurant);
router_bssr.post("/login", restaurantController.loginProcess);

router_bssr.get("/logout", restaurantController.logout);

module.exports = router_bssr;

// 1. oddiy
// 2. admin
// 3. delivery
// 4. restaurants
