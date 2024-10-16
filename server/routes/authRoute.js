const express = require("express")
const { signup, signin, getLoggedUser, protect, updateLoggedUser} = require("../controller/authController")
const { signupValidator, signinValidator } = require("../utils/validation/authValidator")

const router = express.Router()

router.route("/signup").post(signupValidator, signup)
router.route("/signin").post(signinValidator, signin)
router.route("/getMe").get(getLoggedUser)
router.route("/updateLoggedUser").put(protect, updateLoggedUser)

module.exports = router