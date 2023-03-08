const express = require("express");
const router = express.Router(); // why?
const memberController = require("./controllers/memberController");

/*********************************
 *         REST API REACT        *
 *********************************/

// memberga dahldor // faqat get request in url
// router.get('/', memberController.home);
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);
router.get("/check-me", memberController.checkMyAuthentication);
router.get("/member/:id", memberController.retrieveAuthMember,memberController.getChosenMember)

// function(req, res) {
//     res.send('Home sahifasidasiz')  // controller
// }

// other routers
router.get("/menu", (req, res) => {
  res.send("Menu sahifadasiz");
});

router.get("/community", (req, res) => {
  res.send("Jamiyat sahifadasiz");
});

module.exports = router;

// 1. oddiy
// 2. admin
// 3. delivery
// 4. restaurants