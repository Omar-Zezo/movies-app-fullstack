const express = require("express")
const { getAllUsers } = require("../controller/userController")
const { protect } = require("../controller/authController")

const router = express.Router()

router.route('/users').get(protect, getAllUsers)


module.exports = router