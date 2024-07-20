const express = require("express");
const { registerController, loginController, logoutController } = require("../controllers/authControllers");

const router = express.Router();

//Register
router.post('/register', registerController)

//LogIn
router.post('/login', loginController)

//LogOut
router.post('/logout', logoutController)

module.exports = router;