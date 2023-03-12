const express = require("express");
const router = express.Router(); // why?
const memberController = require("./controllers/memberController");
const productController = require("./controllers/productController");
const restaurantController = require("./controllers/restaurantController");
const orderController = require("./controllers/orderController");

/*********************************
 *         REST API REACT        *
 *********************************/

// member related routers // faqat get request in url
// router.get('/', memberController.home);
router.post("/signup", memberController.signup);


router.post("/login", memberController.login);


router.get("/logout", memberController.logout);


router.get("/check-me", memberController.checkMyAuthentication);


router.get("/member/:id", memberController.retrieveAuthMember,memberController.getChosenMember)

// function(req, res) {
//     res.send('Home sahifasidasiz')  // controller
// }



// Product related routers
router.post( "/products", memberController.retrieveAuthMember, productController.getAllProducts
);


router.get("/products/:id", memberController.retrieveAuthMember,productController.getChosenProduct);

router.get(
  "/products/:id",
  memberController.retrieveAuthMember,
  productController.getChosenProduct
);




// Restaurant related routers
router.get(
  "/restaurants",
  memberController.retrieveAuthMember, //what restaurant am I like info
  restaurantController.getRestaurants
);

router.get("/restaurants/:id", memberController.retrieveAuthMember, restaurantController.getChosenRestaurant
)





// Order related routers
router.post(
  "/orders/create",
  memberController.retrieveAuthMember,
  orderController.createOrder
);



module.exports = router;

// 1. oddiy
// 2. admin
// 3. delivery
// 4. restaurants