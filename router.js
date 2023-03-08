const express = require("express");
const router = express.Router(); // why?
const memberController = require("./controllers/memberController");
const productController = require("./controllers/productController");

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

module.exports = router;

// 1. oddiy
// 2. admin
// 3. delivery
// 4. restaurants