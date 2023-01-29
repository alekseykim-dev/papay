const express = require("express");
const router_bssr = express.Router(); // why?
const restaurantController = require("./controllers/restaurantController");

/*********************************
 *             BSSR EJS          *
 *********************************/

router_bssr
  .get("/signup", restaurantController.getSignupMyRestaurant)
  .post("/signup", restaurantController.signupProcess);
router_bssr
  .get("/login", restaurantController.getLoginMyRestaurant)
  .post("/login", restaurantController.loginProcess);
router_bssr.get("/logout", restaurantController.logout);
router_bssr.get("/check-me", restaurantController.checkSessions);

router_bssr.get("/products/menu", restaurantController.getMyRestaurantData);



module.exports = router_bssr;

// 1. oddiy
// 2. admin
// 3. delivery
// 4. restaurants
