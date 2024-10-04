const express = require("express")
const { signup, resizeImage, uploadProfileImg, signin, getLoggedUser} = require("../controller/authController")
const { signupValidator, signinValidator } = require("../utils/validation/authValidator")

const router = express.Router()

router.route("/signup").post(uploadProfileImg, resizeImage, signupValidator, signup)
router.route("/signin").post(signinValidator, signin)
router.route("/getMe").get(getLoggedUser)

module.exports = router