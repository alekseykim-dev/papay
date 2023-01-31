const express = require("express");
const router_bssr = express.Router(); // why?
const restaurantController = require("./controllers/restaurantController");
const productController = require("./controllers/productController");
const { uploadPoductImage } = require("./utils/upload-multer");

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
router_bssr.post(
  "/products/create",
  restaurantController.validateAuthRestaurant,
  uploadPoductImage.single('product_immage'),
  productController.addNewProduct
);
router_bssr.post("products/edit/:id", productController.updateChosenProduct);

module.exports = router_bssr;

// 1. oddiy
// 2. admin
// 3. delivery
// 4. restaurants


// uploads pics through controller
// UUID is a safety measure aainst parse requests  